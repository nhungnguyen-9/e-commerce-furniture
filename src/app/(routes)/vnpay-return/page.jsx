// pages/vnpay-return.js
'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

const VNPayReturnPage = () => {
    const [paymentData, setPaymentData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Gửi yêu cầu HTTP để lấy dữ liệu từ API route
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/vnpay-return');
                console.log(response)
                setPaymentData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!paymentData) {
        return <div>No payment data available</div>;
    }

    // Hiển thị dữ liệu trả về từ API route trong giao diện của bạn
    return (
        <div>
            <h1>Kết quả thanh toán từ VNPay</h1>
            <p>Amount: {paymentData.vnp_Amount}</p>
            <p>Bank Code: {paymentData.vnp_BankCode}</p>
            <p>Bank Transaction No: {paymentData.vnp_BankTranNo}</p>
            {/* Các thông tin khác */}
        </div>
    );
};

export default VNPayReturnPage;
