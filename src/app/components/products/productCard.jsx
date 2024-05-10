import React, { useState, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CartContext from '@/context/CartContext'
import { toast } from 'react-toastify'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function ProductCard({ product, updateSignedInUser }) {
    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(product.price)).replace(/\./g, ',')
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const { addItemToCart, cart, setCart } = useContext(CartContext)

    const addToCartHandler = () => {
        const existingCartItem = cart?.cartItems?.find(item => item.product === product.slug)
        if (existingCartItem) {
            const newQuantity = existingCartItem.quantity + 1
            const updatedCartItems = cart.cartItems.map(item =>
                item.product === product.slug ? { ...item, quantity: newQuantity } : item
            )
            updateCartItems(updatedCartItems)
            toast.success('Cập nhập giỏ hàng thành công!')
        } else {
            addItemToCart({
                _id: product._id,
                product: product.slug,
                name: product.name,
                price: product.price,
                discount: product.discount,
                image: product.image[0].url,
                materials: product.materials,
                size: product.size,
                quantity: 1
            })
            toast.success('Thêm sản phẩm vào giỏ hàng thành công!')
        }
    }

    const updateCartItems = (updatedCartItems) => {
        // Update local storage and cart context
        localStorage.setItem("cart", JSON.stringify({ cartItems: updatedCartItems }))
        // Set the updated cart items to the context
        setCart({ ...cart, cartItems: updatedCartItems })
    }

    return (
        <div>
            {product && (
                <div className='relative group border-2 hover:border-gray-200 border-white w-[300px] h-[400px] p-[10px] small:w-full'
                    onMouseEnter={() => {
                        const nextIndex = (currentImageIndex + 1) % product.image.length
                        setCurrentImageIndex(nextIndex)
                    }}
                    onMouseLeave={() => setCurrentImageIndex(0)}
                >
                    <Link href={`/products/${product.slug}`}>
                        <div className='h-[200px]'>
                            <LazyLoadImage
                                effect="blur"
                                src={
                                    product?.image[currentImageIndex]
                                        ? product?.image[currentImageIndex].url
                                        : "/images/default_product.png"
                                }
                                alt="product name"
                                className='w-full h-full object-cover transition duration-300'
                            />
                        </div>
                    </Link>
                    {product.discount > 0 && (
                        <div className='z-10 text-white text-center'>
                            <Image
                                src={'/bg_bage.png'}
                                width={28}
                                height={10}
                                alt='bage'
                                className='absolute top-4 right-4'
                            />
                            <div className='text-white absolute top-6 right-4 z-20 text-xs'>-{product.discount}%</div>
                        </div>
                    )}
                    <div className='h-[60px]'>{product.name}</div>
                    {product.discount ? (
                        <div className='text-right'>
                            {formattedPrice ? (
                                <div className='text-sm text-red-600'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(product.price * (1 - product.discount / 100))).replace(/\./g, ',')}</div>
                            ) : null}
                            <div className='text-sm text-black line-through pt-2'>{formattedPrice}</div>
                        </div>
                    ) : (
                        <div className='text-sm text-right pt-2 text-black'>{formattedPrice}</div>
                    )}

                    <div className='flex items-center justify-between mt-6 opacity-0 group-hover:opacity-100 transition-opacity'>
                        <button className='border-black border-2 px-3 py-2 font-semibold hover:bg-black hover:text-white' onClick={addToCartHandler} >THÊM VÀO GIỎ</button>
                        <Link href={`/products/${product.slug}`}>
                            <button className='border-black border-2 px-3 py-2 bg-black text-white'>XEM THÊM</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}
