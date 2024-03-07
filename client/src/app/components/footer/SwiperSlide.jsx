import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

const dataFooter = [
    { src: 'https://nhaxinh.com/wp-content/uploads/2021/11/aa-corporation-logo-2311.png', alt: '' },
    { src: 'https://nhaxinh.com/wp-content/uploads/2021/11/aka-logo-2311.png', alt: '' },
    { src: 'https://nhaxinh.com/wp-content/uploads/2021/11/nha-xinh-logo-2311.png', alt: '' },
    { src: 'https://nhaxinh.com/wp-content/uploads/2021/11/Boconcept-logo-2311.png', alt: '' },
    { src: 'https://nhaxinh.com/wp-content/uploads/2021/11/bellavita-luxury-logo-2311.png', alt: '' },
    { src: 'https://nhaxinh.com/wp-content/uploads/2021/11/calligaris-logo-2311.png', alt: '' },
    { src: 'https://nhaxinh.com/wp-content/uploads/2021/11/baxter-logo-2311.png', alt: '' },
    { src: 'https://nhaxinh.com/wp-content/uploads/2021/11/ligneroset-logo-2311.png', alt: '' },
    { src: 'https://nhaxinh.com/wp-content/uploads/2021/11/lago-logo-2311.png', alt: '' },
    { src: 'https://nhaxinh.com/wp-content/uploads/2021/11/adamos-logo-2311.png', alt: '' }
]
export default function FooterSwiper() {
    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            breakpoints={{
                850: {
                    slidesPerView: 6,
                },
                549: {
                    slidesPerView: 3,
                },
                480: {
                    slidesPerView: 1,
                }
            }}
        >
            {dataFooter.map((item, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={item.src}
                        alt={item.alt}
                        width='100'
                        height='30'
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
