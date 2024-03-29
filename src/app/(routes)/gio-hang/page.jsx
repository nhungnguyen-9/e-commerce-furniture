/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useContext } from 'react'

import CartContext from '@/context/CartContext'
import Link from 'next/link'
import HeartFavorite from '@/app/components/product/HeartFavorite'

import { X, ShoppingCart } from 'lucide-react'

export default function Cart() {
    const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext)

    const increaseQty = (cartItem) => {
        console.log('🚀 ~ increaseQty ~ cartItem:', cartItem)
        const newQty = cartItem?.quantity + 1
        const item = { ...cartItem, quantity: newQty }

        addItemToCart(item)
    }

    const decreaseQty = (cartItem) => {
        const newQty = cartItem?.quantity - 1
        if (newQty < 1) {
            // If the new quantity is less than 1, remove the item from the cart
            deleteItemFromCart(cartItem.product);
        } else {
            const item = { ...cartItem, quantity: newQty };
            addItemToCart(item);
        }
    }

    const amount = cart?.cartItems?.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    )

    const totalAmount = (Number(amount))

    return (
        <div className='container max-w-screen-xl mx-auto mb-20'>
            <hr />
            <div className='flex items-center gap-2 my-10'>
                <div className='font-semibold tracking-wider leading-8 text-3xl'>Giỏ hàng</div>
                <div className='bg-red-500 rounded-full text-white px-2 pt-1 text-sm text-center'>{cart?.cartItems?.length || 0}</div>
            </div>

            {cart?.cartItems?.length > 0 && (
                <div className='flex flex-col md:flex-row gap-8'>
                    <main className="md:w-3/5">
                        <article>
                            {cart?.cartItems?.map((cartItem) => (
                                <div className='border-b border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5'>
                                    <div className='flex'>
                                        <div className='flex'>
                                            <div className="w-[30%]">
                                                <div>
                                                    <img src={cartItem.image} alt={cartItem.name} />
                                                </div>
                                            </div>
                                            <div className=''>
                                                <div className='font-medium text-xl leading-10 tracking-wide my-2'>
                                                    <Link href={'#'}>
                                                        {cartItem.name}
                                                    </Link>
                                                </div>
                                                <div className='text-slate-500 mb-3'>
                                                    <div>Vật liệu: {cartItem.material}</div>
                                                    <div>Kích thước: {cartItem.size}</div>
                                                </div>
                                                <div className='text-red-600 font-semibold my-3'>
                                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(cartItem.price * (1 - cartItem.discount / 100) * cartItem.quantity)).replace(/\./g, ',')}
                                                </div>
                                                <div className='flex gap-2 items-center'>
                                                    <HeartFavorite /> Thêm vào Wishlist
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-end justify-between'>
                                            <div>
                                                <X className='hover:text-red-600' onClick={() => deleteItemFromCart(cartItem?.product)} />
                                            </div>
                                            <div className="flex flex-row w-full h-10 rounded-lg relative bg-transparent mt-1">
                                                <button
                                                    data-action="decrement"
                                                    className=" bg-gray-100 w-[40px] rounded-lg  text-gray-600 hover:text-gray-500 hover:bg-gray-300 h-full cursor-pointer outline-none"
                                                    onClick={() => decreaseQty(cartItem)}
                                                >
                                                    <span className="m-auto text-2xl font-thin">
                                                        −
                                                    </span>
                                                </button>
                                                <input
                                                    type="number"
                                                    className="outline-none w-[60px] focus:outline-none text-center font-semibold text-md hover:text-black focus:text-black  md:text-base cursor-default flex items-center text-gray-900 custom-input-number"
                                                    name="custom-input-number"
                                                    value={cartItem.quantity}
                                                    readOnly
                                                ></input>
                                                <button
                                                    data-action="increment"
                                                    className="bg-gray-100 w-[40px] rounded-lg  text-gray-600 hover:text-gray-500 hover:bg-gray-300 h-full cursor-pointer outline-none"
                                                    onClick={() => increaseQty(cartItem)}
                                                >
                                                    <span className="m-auto text-2xl font-thin">
                                                        +
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </article>
                    </main>
                    <main className="border border-slate-500 h-fit py-8 px-7 md:w-2/5">
                        <div>
                            <h2 className='text-2xl font-medium tracking-wider'>Tóm tắt đơn hàng</h2>
                            <div className='my-6 flex justify-between'>
                                <div>
                                    <div>Thành tiền</div>
                                    <div className='mt-8'>Vận chuyển</div>
                                </div>
                                <div className='text-right text-sm '>
                                    <div className='font-bold mt-1'>
                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(amount)).replace(/\./g, ',')}
                                    </div>
                                    <div className='mt-12 text-slate-600'>
                                        <div>Liên hệ phí vận chuyển sau</div>
                                        <div className='mt-2'>Shipping options will be updated during checkout.</div>

                                    </div>
                                </div>

                            </div>
                            <hr />
                            <div className='flex justify-between my-4'>
                                <div className='text-lg'>Tổng cộng</div>
                                <div className='font-bold'>
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(totalAmount)).replace(/\./g, ',')}
                                </div>
                            </div>
                            <div className='my-4'>
                                <div className='font-semibold text-lg'>Thông tin giao hàng</div>
                                <div className='text-sm text-justify mt-1 mb-4'>
                                    Đối với những sản phẩm có sẵn tại khu vực, Nhà Xinh sẽ giao hàng trong vòng 2-7 ngày. Đối với những sản phẩm không có sẵn, thời gian giao hàng sẽ được nhân viên Nhà Xinh thông báo đến quý khách.
                                </div>
                                <div className='text-base mb-3'>Từ 2-6: 8:30 - 17:30</div>
                                <div className='text-base mb-3'>Thứ 7, CN: 9:30 - 16:30</div>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center justify-between my-10'>
                            <Link href='/shop'>
                                <button className='flex gap-2 items-center border font-bold border-slate-800 px-6 py-3'>
                                    <ShoppingCart /> TIẾP TỤC MUA HÀNG
                                </button>
                            </Link>
                            <button className='flex gap-2 items-center font-bold text-white bg-black px-12 py-3'>
                                ĐẶT HÀNG
                            </button>
                        </div>
                    </main>
                </div>
            )}
        </div>
    )
}
