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

export async function GET(req, res) {
    // Lấy các tham số từ query URL
    const vnp_Params = req.query;
    console.log(vnp_Params)
    const secureHash = vnp_Params['vnp_SecureHash'];

    // Xóa các tham số vnp_SecureHash và vnp_SecureHashType để chuẩn bị dữ liệu để hash
    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    // Sắp xếp các tham số theo tên
    const sortedParams = sortObject(vnp_Params);

    // Lấy tmnCode và secretKey từ cấu hình hoặc từ nơi bạn lưu trữ
    const tmnCode = 'EOR7B8O2'; // Thay YOUR_TMN_CODE_HERE bằng tmn code thực tế của bạn
    const secretKey = 'QDCABATEWGAMQHJEYZDRMDHDQWFGWWOQ'; // Thay YOUR_SECRET_KEY_HERE bằng secret key thực tế của bạn

    // Chuyển các tham số thành chuỗi dữ liệu để hash
    const signData = new URLSearchParams(sortedParams).toString();

    // Tạo mã hash bằng sha512 và secretKey
    const hmac = createHmac("sha512", secretKey);
    const signed = hmac.update(signData, 'utf-8').digest("hex");

    // So sánh mã hash từ VNPAY với mã hash mà bạn tạo ra
    if(secureHash === signed){
        // Hiển thị thông báo cho khách hàng hoặc thực hiện các thao tác khác tùy theo yêu cầu của bạn
        res.status(200).json({ code: vnp_Params['vnp_ResponseCode'] });
        console.log('success')
    } else {
        // Nếu mã hash không khớp, hiển thị thông báo lỗi
        res.status(200).json({ code: '97' });
        console.log('fail')
    }
}