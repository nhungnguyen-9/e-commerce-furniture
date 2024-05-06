// pages/api/vnpay-return.js
import { VNPay } from 'vnpay';

export default async function handler(req, res) {
    const vnpay = new VNPay({
        tmnCode: 'EOR7B8O2',
        secureSecret: 'QDCABATEWGAMQHJEYZDRMDHDQWFGWWOQ',
        vnpayHost: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html', // This is for testing, change to production URL for live environment
        testMode: true, // optional
        hashAlgorithm: 'SHA512', // optional
    });

    try {
        // Verify the return URL to ensure its authenticity
        const verify = vnpay.verifyReturnUrl(req.query);

        // Check if the return URL is verified successfully
        if (!verify.isVerified) {
            // If not verified, return an error response
            return res.status(200).json({
                message: verify?.message ?? 'Payment failed!',
                status: verify.isSuccess,
            });
        }

        // If the return URL is verified successfully, extract the relevant information
        const {
            vnp_Amount,
            vnp_BankCode,
            vnp_BankTranNo,
            vnp_CardType,
            vnp_OrderInfo,
            vnp_PayDate,
            vnp_ResponseCode,
            vnp_TmnCode,
            vnp_TransactionNo,
            vnp_TransactionStatus,
            vnp_TxnRef,
            vnp_SecureHash
        } = req.query;

        // Process the extracted information as needed, such as updating the order status in the database

        // Finally, return a success response indicating that the payment was successful
        return res.status(200).json({
            message: verify?.message ?? 'Payment successful!',
            status: verify.isSuccess,
            // Optionally, you can include additional information in the response
            vnp_Amount,
            vnp_BankCode,
            vnp_BankTranNo,
            vnp_CardType,
            vnp_OrderInfo,
            vnp_PayDate,
            vnp_ResponseCode,
            vnp_TmnCode,
            vnp_TransactionNo,
            vnp_TransactionStatus,
            vnp_TxnRef,
            vnp_SecureHash
        });
    } catch (error) {
        console.log(`verify error: ${error}`);
        // If an error occurs during verification, return an error response
        return res.status(400).json({ message: 'verify error', status: false });
    }
}
