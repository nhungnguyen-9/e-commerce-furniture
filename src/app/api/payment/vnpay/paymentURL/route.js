import { NextApiRequest, NextApiResponse } from 'next';
import querystring from 'querystring';
import crypto from 'crypto';
import { NextResponse } from 'next/server';

export default async function handler(req, res) {  
  try {
    // Thông tin cấu hình
    const tmnCode = 'EOR7B8O2';
    const hashSecret = 'QDCABATEWGAMQHJEYZDRMDHDQWFGWWOQ';
    const returnUrl = 'https://domainmerchant.vn/ReturnUrl'; // URL thông báo kết quả giao dịch
    const vnpUrl = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html'; // URL thanh toán

    // Thời gian hiện tại
    const currentDate = new Date();
    const createDate = currentDate.toISOString().replace(/[^0-9]/g, '').slice(0, 14); // Format: yyyyMMddHHmmss
    const orderId = 'node-' + createDate; // Mã đơn hàng duy nhất

    // Dữ liệu cần gửi sang VNPAY
    const data = {
      vnp_Version: '2.1.0',
      vnp_Command: 'pay',
      vnp_TmnCode: tmnCode,
      vnp_Locale: 'vn',
      vnp_CurrCode: 'VND',
      vnp_TxnRef: orderId,
      vnp_OrderInfo: 'Thanh toan don hang', // Thông tin đơn hàng
      vnp_OrderType: 'normal',
      vnp_Amount: 100000, // Số tiền thanh toán (VD: 100,000 VND)
      vnp_ReturnUrl: returnUrl,
      vnp_IpAddr: req.headers['x-forwarded-for'] || req.connection.remoteAddress, // Địa chỉ IP của khách hàng
      vnp_CreateDate: createDate,
    };

    // Sắp xếp tham số theo thứ tự từ điển
    const sortedData = Object.keys(data).sort().reduce((acc, key) => {
      acc[key] = data[key];
      return acc;
    }, {});

    // Tạo chuỗi dữ liệu
    const queryString = querystring.stringify(sortedData, { encode: false });

    // Tạo mã hash
    const hmac = crypto.createHmac('sha512', hashSecret);
    const secureHash = hmac.update(queryString).digest('hex');
    
    // Thêm mã hash vào dữ liệu
    data.vnp_SecureHash = secureHash;

    // Tạo URL thanh toán
    const paymentUrl = vnpUrl + '?' + querystring.stringify(data, { encode: false });

    // Trả về URL thanh toán
    res.status(200).json({ paymentUrl });

    return NextResponse.redirect(paymentUrl);
  } catch (error) {
    console.error("Error processing VNPay payment:", error);
    res.status(500).json({ success: false,   message: "Internal server error" });
  }
}
