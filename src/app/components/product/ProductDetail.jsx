'use client'
import React, { useRef, useState, useEffect, useContext } from 'react'
import ProductImage from './ProductImage'
import BreadCrumbs from '@/app/components/product/BreadCrumbs'
import Image from 'next/image'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { Plus, Minus } from "lucide-react"
import HeartFavorite from './HeartFavorite'
import CartContext from '@/context/CartContext'
import { toast } from 'react-toastify'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// import { getBreadcrumbsBySlug } from '@/backend/services/product'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function ProductDetail({ product }) {
    // const [breadcrumbs, setBreadcrumbs] = useState([])
    // useEffect(() => {
    //     const fetchBreadcrumbs = async () => {
    //         const result = await getBreadcrumbsBySlug(product?.slug);
    //         setBreadcrumbs(result);
    //     };
    //     fetchBreadcrumbs();
    // }, [product]);

    const { addItemToCart, cart, setCart } = useContext(CartContext)

    const imgRef = useRef(null)
    const [quantity, setQuantity] = useState(1)
    const [selectedImg, setSelectedImg] = useState(product?.image?.[0].url)
    const [isZoomed, setIsZoomed] = useState(false);

    useEffect(() => {
        setSelectedImg(product?.image?.[0].url);
        setIsZoomed(false);
    }, [product]);

    const setImgPreview = (url) => {
        imgRef.current.src = url
        setSelectedImg(url);
        setIsZoomed(false);
    }

    const handleZoomToggle = () => {
        setIsZoomed(!isZoomed);
    };

    const theme = useTheme();
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    const handleChangeIndex = (index) => {
        setValue(index);
    }

    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(product.price)).replace(/\./g, ',')

    const breadCrumbs = [
        { name: "Trang chủ", url: "/" },
        {
            name: `${product?.name}`,
            url: `/products/${product?.slug}`,
        },
    ];

    const addToCartHandler = () => {
        const existingCartItem = cart?.cartItems?.find(item => item.product === product.slug);
        if (existingCartItem) {
            const newQuantity = existingCartItem.quantity + quantity;
            const updatedCartItems = cart.cartItems.map(item =>
                item.product === product.slug ? { ...item, quantity: newQuantity } : item
            );
            updateCartItems(updatedCartItems);
            toast.success('Cập nhập giỏ hàng thành công!')
        } else {
            addItemToCart({
                product: product.slug,
                name: product.name,
                price: product.price,
                discount: product.discount,
                image: product.image[0].url,
                materials: product.materials,
                size: product.size,
                quantity: quantity
            });
            toast.success('Thêm sản phẩm vào giỏ hàng thành công!')
        }
    };

    const updateCartItems = (updatedCartItems) => {
        // Update local storage and cart context
        localStorage.setItem("cart", JSON.stringify({ cartItems: updatedCartItems }));
        // Set the updated cart items to the context
        setCart({ ...cart, cartItems: updatedCartItems });
    };

    return (
        <div>
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <section className="bg-white py-10">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
                        <aside>
                            <div className="p-3 text-center relative">
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
                                <LazyLoadImage
                                    effect="blur"
                                    ref={imgRef}
                                    className={`object-cover inline-block ${isZoomed ? 'w-full h-auto cursor-zoom-out' : 'cursor-zoom-in'}`}
                                    src={selectedImg}
                                    alt="Product title"
                                    width="900"
                                    height="800"
                                    onClick={handleZoomToggle}
                                />
                            </div>
                            <div className="flex justify-center gap-2 overflow-auto tailwind-scrollbar-hide">
                                {product?.image?.map((img, index) => (
                                    <a
                                        key={index}
                                        onClick={() => setImgPreview(img.url)}
                                    >
                                        <img
                                            src={img.url}
                                            alt="product title"
                                            width={240}
                                            height={240}
                                            className={`w-20 h-20 rounded-lg object-cover cursor-pointer ${selectedImg === img.url ? "border-2 border-black" : ""}`}
                                        />
                                    </a>
                                ))}
                            </div>
                        </aside>
                        <main>
                            <h2 className="font-semibold text-3xl mb-8 tracking-wide">{product?.name}</h2>
                            <div className='flex gap-7 items-center mb-8'>
                                <HeartFavorite productLike={product} />
                                {product.discount ? (
                                    <div className='flex gap-8 items-baseline'>
                                        {formattedPrice ? (
                                            <div className='text-xl text-red-600'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(product.price * (1 - product.discount / 100))).replace(/\./g, ',')}</div>
                                        ) : null}
                                        <div className='text-xs text-black underline'>{formattedPrice}</div>
                                    </div>
                                ) : (
                                    <div className='text-xl text-black'>{formattedPrice}</div>
                                )}
                            </div>
                            <div className='flex items-center gap-5 mt-4 mb-6'>
                                <div className='font-bold text-lg'>Kích thước</div>
                                <div className='border border-black p-2 text-xs'>{product.size}</div>
                            </div>
                            <div className='flex items-center gap-5 mt-4 mb-6'>
                                <div className='font-bold text-lg'>Vật liệu</div>
                                <div className='border border-black p-2 text-xs'>D800 - R800 - C670 mm</div>
                            </div>
                            {product?.inStock ? <div className='my-4 text-green-700'>Hàng có sẵn</div> : <div className='my-3 text-red-700'>Không có sẵn</div>}
                            <div className="flex items-center gap-8 my-5">
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-4 items-center shadow-md p-3 ">
                                        <Minus
                                            className="hover:text-red-1 cursor-pointer"
                                            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                                        />
                                        <div className="text-body-bold">{quantity}</div>
                                        <Plus
                                            className="hover:text-red-1 cursor-pointer"
                                            onClick={() => setQuantity(quantity + 1)}
                                        />
                                    </div>
                                </div>
                                <Link href='/gio-hang'>
                                    <button
                                        className="outline text-base-bold py-3 px-4 bg-black text-white"
                                        onClick={addToCartHandler}
                                    >
                                        MUA NGAY
                                    </button>
                                </Link>
                                <button
                                    className="py-3 px-5 border border-black hover:bg-slate-200"
                                    onClick={addToCartHandler}
                                    disabled={!product?.inStock}
                                >
                                    THÊM VÀO GIỎ
                                </button>
                            </div>
                            <div className='text-center mt-2 mb-4'>Liên hệ tư vấn và đặt mua: <div className='text-red-600 inline'>18007200</div></div>
                            <div className='my-5'>
                                <AppBar position="static" sx={{ bgcolor: 'white' }}>
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        indicatorColor="secondary"
                                        textColor="inherit"
                                        variant="fullWidth"
                                        aria-label="full width tabs example"
                                    >
                                        <Tab label="Bảo hành" {...a11yProps(0)} sx={{ color: 'black', fontSize: '16px' }} />
                                        <Tab label="Vận chuyển" {...a11yProps(1)} sx={{ color: 'black', fontSize: '16px' }} />
                                    </Tabs>
                                </AppBar>
                                <div
                                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                    index={value}
                                    onChangeIndex={handleChangeIndex}
                                >
                                    <TabPanel value={value} index={0} dir={theme.direction}>
                                        <span className='my-2'>-  Các sản phẩm nội thất tại Nhà Xinh đa số đều được sản xuất tại nhà máy của công ty cổ phần xây dựng kiến trúc AA với đội ngũ nhân viên và công nhân ưu tú cùng cơ sở vật chất hiện đại (http://www.aacorporation.com/). Nhà Xinh đã kiểm tra kỹ lưỡng từ nguồn nguyên liệu cho đến sản phẩm hoàn thiện cuối cùng.</span>
                                        <span className='my-2'>-  Nhà Xinh bảo hành một năm cho các trường hợp có lỗi về kỹ thuật trong quá trình sản xuất hay lắp đặt.</span>
                                        <span className='my-2'>-  Quý khách không nên tự sửa chữa mà hãy báo ngay cho Nhà Xinh qua hotline: 1800 7200.</span>
                                        <span className='my-2'>-  Sau thời gian hết hạn bảo hành, nếu quý khách có bất kỳ yêu cầu hay thắc mắc thì vui lòng liên hệ với Nhà Xinh để được hướng dẫn và giải quyết các vấn đề gặp phải.</span>
                                    </TabPanel>
                                    <TabPanel value={value} index={1} dir={theme.direction}>
                                        <span className='font-semibold my-2'>GIAO HÀNG TẬN NƠI</span>
                                        <span className='my-2'>Nhà Xinh cung cấp dịch vụ giao hàng tận nơi, lắp ráp và sắp xếp vị trí theo đúng ý muốn của quý khách:</span>
                                        <span className='my-2'>- MIỄN PHÍ giao hàng trong các Quận nội thành Tp.Hồ Chí Minh và Hà Nội, áp dụng cho các đơn hàng trị giá trên 10 triệu.</span>
                                        <span className='my-2'>- Đối với khu vực các tỉnh lân cận: Tính phí hợp lý theo dựa trên quãng đường vận chuyển</span>
                                    </TabPanel>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </div>
    )
}
