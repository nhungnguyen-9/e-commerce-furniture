import { VNPay } from 'vnpay';

const vnpay = new VNPay({
    tmnCode: 'EOR7B8O2',
    secureSecret: 'QDCABATEWGAMQHJEYZDRMDHDQWFGWWOQ',
    api_Host: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html',
    testMode: true, // optional
    hashAlgorithm: 'SHA512', // optional
});

export default vnpay;
