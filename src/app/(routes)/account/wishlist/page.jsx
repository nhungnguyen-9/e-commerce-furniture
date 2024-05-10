'use client'
import React, { useEffect, useState } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ProductCard from '@/app/components/products/productCard'
import { useSession } from 'next-auth/react'
import { getOneCustomer } from '@/backend/services/admin/customer'
import axios from 'axios'

// export const getProductDetails = async (productId) => {
//     const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
//     console.log(product)
//     return await product.json()
// }

export default function WishList() {
    const { data } = useSession()
    const user = data?.user
    console.log('🚀 ~ WishList ~ user:', user)

    const [signedInUser, setSignedInUser] = useState(null)
    const [wishlist, setWishlist] = useState([])

    console.log('🚀 ~ WishList ~ signedInUser:', signedInUser)
    const getUser = async () => {
        try {
            const res = await fetch("/api/users")
            const data = await res.json()
            console.log('🚀 ~ getUser ~ data:', data)
            console.log('🚀 ~ getUser ~ res:', res)
            setSignedInUser(data)
        } catch (err) {
            console.log('🚀 ~ getUser ~ err:', err)
        }
    }

    useEffect(() => {
        if (user) {
            getUser()
        }
    }, [user])

    // const getWishlistProducts = async () => {

    //   if (!signedInUser) return

    //   const wishlistProducts = await Promise.all(signedInUser.wishlist.map(async (productId) => {
    //     const res = await getProductDetails(productId)
    //     return res
    //   }))

    //   setWishlist(wishlistProducts)
    // }

    // useEffect(() => {
    //   if (signedInUser) {
    //     getWishlistProducts()
    //   }
    // }, [signedInUser])

    // const updateSignedInUser = (updatedUser) => {
    //   setSignedInUser(updatedUser)
    // }

    return (
        <div>
            <div className='w-[90%] ml-[5%] flex flex-row'>
                <div className='bg-gray-100 w-[23%] pt-[2%]'>
                    <h1 className='pl-[10%] border-l-[3px] mb-[10px] border-orange-400 font-semibold text-[17px]'>Tài khoản cá nhân</h1>
                    <div className='pl-[10%] flex flex-col space-y-[10px]'>
                        <a href=''>Thông tin của tôi</a>
                        <a href=''>Đơn hàng</a>
                        <a href=''>Sản phẩm vừa xem</a>
                        <a href=''>Wishlist</a>
                        <a href=''>Đăng xuất</a>
                    </div>
                </div>

                <div className='w-[77%] pl-[5%] pr-[5%]'>
                    <h1 className='text-[30px] font-medium mb-[20px]'>My wishlist</h1>
                    <div className='w-full flex flex-row flex-wrap justify-start'>

                        {/* Wishlist Product */}
                        {/* {wishlist.length === 0 && (
                        <p>No items in your wishlist</p>
                        )}

                        {wishlist.map((product) => (
                            <ProductCard key={product._id} product={product} updateSignedInUser={updateSignedInUser} />
                        ))} */}
                        <div>No items in your wishlist</div>
                    </div>
                </div>
            </div>

            <div className='relative bg-location_image bg-cover bg-center w-full h-[630px] small:scale-100 small:m-0 small:h-[280px] small:bg-center small:bg-no-repeat small:bg-cover'>
                <div className='absolute top-0 right-0 bottom-0 left-0 bg-black opacity-25 small:w-full'></div>
                <div className='relative top-10 left-0 right-0 text-center'>
                    <h1 className='absolute left-0 right-0 top-96 m-auto text-7xl font-extrabold text-white small:w-full small:p-0 small:m-0 small:text-[28px]'>Xem, chạm và cảm nhận</h1>
                    <button className='absolute mt-[33%] ml-[-65px] text-[15px] py-2 px-4 text-white border-2 border-white hover:bg-white hover:text-[#666] small:w-[30%] small:mt-[200px] small:ml-[140px] small:text-[10px]'>
                        <div className='ml-1 font-bold text-xl'>
                            Tìm cửa hàng
                            <ChevronRightIcon />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
