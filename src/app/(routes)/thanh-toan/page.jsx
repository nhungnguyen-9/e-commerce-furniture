'use client'
import CartContext from '@/context/CartContext'
import React, { useContext, useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { fetchAllAddress } from '@/backend/services/address'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { createNewOrder } from '@/backend/services/order'
import { redirect } from 'next/navigation'

export default function Checkout() {
    const { cart, clearCart, clearCheckoutInfo, saveOnCheckout } = useContext(CartContext)
    const { data } = useSession()
    if (data === null) {
        redirect('/login')
    }
    const user = data?.user
    const [addresses, setAddresses] = useState([])
    const [shippingInfo, setShippingInfo] = useState('')
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')

    const [paymentUrl, setPaymentUrl] = useState('');

    const [orderId, setOrderId] = useState(null);

    const router = useRouter()

    async function getAllAddress() {
        const res = await fetchAllAddress(user?._id)
        if (res.success) {
            setAddresses(res.data)
        }
    }

    useEffect(() => {
        getAllAddress()
    }, [])
    // console.log(addresses)

    const setShippingAddress = (address) => {
        setShippingInfo(address._id)
    }

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value)
    }

    const checkoutHandler = async () => {
        try {
            if (!shippingInfo) {
                toast.error('Vui lòng chọn địa chỉ giao hàng!');
                return;
            }
            if (!selectedPaymentMethod) {
                toast.error('Vui lòng chọn phương thức thanh toán!');
                return;
            }

            const orderItems = cart.cartItems.map(item => {
                return {
                    productId: item._id,
                    name: item.name,
                    price: item.price,
                    discount: item.discount,
                    image: item.image,
                    quantity: item.quantity,
                    size: item.size
                };
            });

            const orderData = {
                user: user ? [user.id] : [],
                orderItems: orderItems,
                shippingAddress: shippingInfo,
                paymentMethod: selectedPaymentMethod,
                totalPrice: cart.checkoutInfo.totalAmount
            };
            // console.log('🚀 ~ checkoutHandler ~ orderData:', orderData)

            const res = await createNewOrder(orderData)
            // console.log('🚀 ~ checkoutHandler ~ res:', res)

            if (res.success) {
                setOrderId(res.savedOrder._id)
                toast.success(res.message)
                clearCart()
                clearCheckoutInfo()
                router.push(`/thank-you/${res.savedOrder._id}`)
            } else {
                toast.error('Đã xảy ra lỗi khi đặt hàng. Vui lòng thử lại sau!')
            }
        } catch (error) {
            console.error('Error creating order:', error)
        }
    }

    return (
        <div>
            <hr className='mx-28' />
            <div className="py-10">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
                        <div className="md:w-2/3">
                            <div className="border border-gray-200 bg-white shadow-sm rounded p-4 lg:p-6 mb-5">
                                <h2 class="text-xl font-semibold mb-5">Địa chỉ giao hàng</h2>

                                <div class="grid sm:grid-cols-2 gap-4 mb-6">
                                    {addresses?.map((address) => (
                                        <label
                                            class="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer"
                                            onClick={() => setShippingAddress(address)}
                                            key={address._id}
                                        >
                                            <span>
                                                <input
                                                    name="shipping"
                                                    type="radio"
                                                    class="h-4 w-4 mt-1"
                                                />
                                            </span>
                                            <div class="ml-2">
                                                <span>Họ và tên: {address.fullName}</span>
                                                <div class="block text-sm text-gray-400">
                                                    Địa chỉ: {address.address} <br />
                                                    Quận / Huyện: {address.province} <br />
                                                    Tỉnh / Thành phố: {address.city}
                                                    <br />
                                                    Số điện thoại: {address.phoneNo}
                                                </div>
                                            </div>
                                        </label>
                                    ))}
                                </div>

                                <Link
                                    href="tai-khoan/edit-account"
                                    className="px-4 py-2 inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100"
                                >
                                    <i className="mr-1 fa fa-plus"></i> Thêm địa chỉ
                                </Link>

                                <h2 class="text-xl font-semibold mb-5 mt-10">Phương thức thanh toán</h2>

                                <div class="grid sm:grid-cols-2 gap-4 mb-6">
                                    <label
                                        class="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer"
                                    >
                                        <span>
                                            <input
                                                name="paymentMethod"
                                                type="radio"
                                                value="bankTransfer"
                                                checked={selectedPaymentMethod === 'bankTransfer'}
                                                onChange={handlePaymentMethodChange}
                                                class="h-4 w-4 mt-1"
                                            />
                                        </span>
                                        <div class="ml-2">
                                            <span>Chuyển khoản ngân hàng</span>
                                            <div class="block text-sm text-gray-400">
                                                <div className='my-2'>Số tài khoản : 123456789</div>
                                                <div className='my-2'>
                                                    Tên chủ tài khoản: <br />
                                                    CT CP NOI THAT AKA DOCTOANTHAN – CHI NHÁNH TP.HCM.
                                                </div>
                                            </div>
                                        </div>
                                    </label>

                                    <label
                                        class="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer"
                                    >
                                        <span>
                                            <input
                                                name="paymentMethod"
                                                type="radio"
                                                value="cashOnDelivery"
                                                checked={selectedPaymentMethod === 'cashOnDelivery'}
                                                onChange={handlePaymentMethodChange}
                                                class="h-4 w-4 mt-1"
                                            />
                                        </span>
                                        <div class="ml-2">
                                            <span>Thanh toán khi nhận hàng</span>
                                            <div class="block text-sm text-gray-400">
                                                Pay with cash upon delivery<br />
                                            </div>
                                        </div>
                                    </label>

                                    <label
                                        class="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer"
                                    >
                                        <span>
                                            <input
                                                name="paymentMethod"
                                                type="radio"
                                                value="vnpay"
                                                checked={selectedPaymentMethod === 'vnpay'}
                                                onChange={handlePaymentMethodChange}
                                                class="h-4 w-4 mt-1"
                                            />
                                        </span>
                                        <div class="ml-2">
                                            <span>Thanh toán qua VNPay</span>
                                            <div class="block text-sm text-gray-400">
                                            </div>
                                        </div>
                                    </label>
                                </div>


                                <div className="flex justify-end space-x-2 mt-10">
                                    <Link
                                        href="gio-hang"
                                        className="px-5 py-2 inline-block text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
                                    >
                                        Quay trở lại
                                    </Link>
                                    <a
                                        className="px-5 py-2 inline-block text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 cursor-pointer"

                                        onClick={checkoutHandler}
                                    >   
                                        ĐẶT HÀNG
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3">
                            <div className="text-gray-600" style={{ maxWidth: "350px" }}>
                                <h2 className="text-2xl font-semibold mb-3">Tóm tắt đơn hàng</h2>
                                <ul>
                                    <li className="flex justify-between mb-1">
                                        <span>Thành tiền</span>
                                        <span>
                                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(cart?.checkoutInfo?.totalAmount)).replace(/\./g, ',')}
                                        </span>
                                    </li>
                                    <li className="border-t flex justify-between my-3 pt-3">
                                        <span className='font-bold text-slate-400'>VẬN CHUYỂN</span>
                                        <span>Liên hệ phí vận chuyển sau</span>
                                    </li>
                                    <li className="border-t flex justify-between my-3 pt-3">
                                        <span className='font-bold'>TỔNG CỘNG</span>
                                        <span className="text-gray-900 font-bold">
                                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(cart?.checkoutInfo?.totalAmount)).replace(/\./g, ',')}
                                        </span>
                                    </li>
                                </ul>

                                <hr className="my-4" />

                                <h2 class="text-xl font-semibold mb-3">Sản phẩm</h2>

                                {cart?.cartItems?.map((item) => (
                                    <div class="flex items-center mb-4 leading-5" key={item._id}>
                                        <div>
                                            <div class="block relative w-20 h-20 rounded p-1 border border-gray-200">
                                                <img
                                                    src={item.image}
                                                    alt="Title"
                                                />
                                                <span class="absolute -top-2 -right-2 w-6 h-6 text-sm text-center flex items-center justify-center text-white bg-red-500 rounded-full">
                                                    {item.quantity}
                                                </span>
                                            </div>
                                        </div>
                                        <div class="ml-3">
                                            <p>{item.name}</p>
                                            <p class="mt-2 text-gray-400">
                                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(item.quantity * item.price)).replace(/\./g, ',')}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
