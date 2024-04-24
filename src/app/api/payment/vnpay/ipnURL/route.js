import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import querystring from 'querystring';

export default async function handler(req, res) {
    try {
        const vnpParams = req.query;
        const secureHash = vnpParams['vnp_SecureHash'];

        // Xóa các tham số vnp_SecureHash và vnp_SecureHashType
        delete vnpParams['vnp_SecureHash'];
        delete vnpParams['vnp_SecureHashType'];

        // Sắp xếp các tham số theo thứ tự từ điển
        const sortedParams = Object.keys(vnpParams).sort().reduce((acc, key) => {
            acc[key] = vnpParams[key];
            return acc;
        }, {});

        // Tạo chuỗi dữ liệu
        const signData = querystring.stringify(sortedParams, { encode: false });

        // Tạo mã hash
        const secretKey = 'QDCABATEWGAMQHJEYZDRMDHDQWFGWWOQ';
        const hmac = crypto.createHmac('sha512', secretKey);
        const signed = hmac.update(signData, 'utf-8').digest('hex');

        // Kiểm tra tính hợp lệ của mã hash
        if (secureHash === signed) {
            const orderId = vnpParams['vnp_TxnRef'];
            const rspCode = vnpParams['vnp_ResponseCode'];

            // Kiểm tra dữ liệu và cập nhật trạng thái đơn hàng
            // Ở đây bạn có thể thêm mã logic để xử lý kết quả từ VNPAY
            // Xử lý kết quả từ VNPAY
            if (rspCode === '00') {
                // Thành công: cập nhật trạng thái đơn hàng trong cơ sở dữ liệu
                console.log(`Order ${orderId} paid successfully.`);
            } else {
                // Xử lý các mã lỗi khác nếu cần
                console.error(`Payment failed for order ${orderId}. Response code: ${rspCode}`);
            }

            // Phản hồi lại cho VNPAY
            res.status(200).json({ RspCode: '00', Message: 'success' });
        } else {
            res.status(400).json({ RspCode: '97', Message: 'Fail checksum' });
        }
    } catch (error) {
        console.error('Error handling VNPAY callback:', error);
        res.status(500).json({ RspCode: '99', Message: 'Internal server error' });
    }
}
