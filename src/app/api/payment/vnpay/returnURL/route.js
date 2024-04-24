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
            const transactionStatus = vnpParams['vnp_TransactionStatus'];

            // Xử lý kết quả từ VNPAY
            if (rspCode === '00') {
                // Thành công: hiển thị trang thông báo thành công cho khách hàng
                res.status(200).send(`Payment successful for order ${orderId}.`);
            } else {
                // Xử lý các mã lỗi khác nếu cần
                res.status(200).send(`Payment failed for order ${orderId}. Response code: ${rspCode}`);
            }
        } else {
            res.status(400).send('Checksum verification failed.');
        }
    } catch (error) {
        console.error('Error handling VNPAY return:', error);
        res.status(500).send('Internal server error.');
    }
}
