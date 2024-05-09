import { createHmac } from 'crypto';

// Hàm sắp xếp đối tượng theo tên thuộc tính
function sortObject(obj) {
    const keys = Object.keys(obj).sort();
    const sortedObj = {};
    for(const key of keys) {
        sortedObj[key] = obj[key];
    }
    return sortedObj;
}

export default function GET(req, res) {

    // Lấy các tham số từ query URL
    const vnp_Params = req.query;
    const secureHash = vnp_Params['vnp_SecureHash'];

    // Xóa các tham số vnp_SecureHash và vnp_SecureHashType để chuẩn bị dữ liệu để hash
    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    // Sắp xếp các tham số theo tên
    const sortedParams = sortObject(vnp_Params);

    // Lấy secretKey từ cấu hình hoặc từ nơi bạn lưu trữ
    const secretKey = 'QDCABATEWGAMQHJEYZDRMDHDQWFGWWOQ'; // Thay YOUR_SECRET_KEY_HERE bằng secret key thực tế của bạn

    // Chuyển các tham số thành chuỗi dữ liệu để hash
    const signData = new URLSearchParams(sortedParams).toString();

    // Tạo mã hash bằng sha512 và secretKey
    const hmac = createHmac("sha512", secretKey);
    const signed = hmac.update(signData, 'utf-8').digest("hex");

    // So sánh mã hash từ VNPAY với mã hash mà bạn tạo ra
    if(secureHash === signed){
        // Trả về mã lỗi và thông điệp phản hồi cho VNPAY dưới dạng JSON
        res.status(200).json({ RspCode: '00', Message: 'success' });
    } else {
        // Nếu mã hash không khớp, trả về mã lỗi và thông điệp phản hồi cho VNPAY
        res.status(200).json({ RspCode: '97', Message: 'Fail checksum' });
    }
}