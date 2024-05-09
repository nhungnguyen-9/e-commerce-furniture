// pages/vnpay-return.js
'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { VNPay } from 'vnpay';

const vnpay = new VNPay({
    tmnCode: 'EOR7B8O2',
    secureSecret: 'QDCABATEWGAMQHJEYZDRMDHDQWFGWWOQ',
    api_Host: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html',
    testMode: true, // optional
    hashAlgorithm: 'SHA512', // optional
});

const VNPayReturnPage = (req, res) => {
    const [paymentData, setPaymentData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     // Gửi yêu cầu HTTP để lấy dữ liệu từ API route
    //     const fetchData = async () => {
    //         try {
    //             const query = req.query;
    //             const result = vnpay.verifyReturnUrl(query);
    //             //setPaymentData(result);
    //         } catch (error) {
    //             setError(error.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Hiển thị dữ liệu thanh toán
    return (
        <div>
            <h1>Payment Information</h1>
            <p>Message: {paymentData.message}</p>
            {/* Thêm các thông tin khác từ paymentData tại đây */}
        </div>
    );
};

export default VNPayReturnPage;