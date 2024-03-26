'use client'
import React from 'react'

import Image from 'next/image'

import Carousel from 'react-material-ui-carousel'

export default function Stories(props) {
    var pages = [
        {
            imageUrl: '/blogs/stories/design-talk-2-16-1200x800.jpg',
            width: 1200,
            height: 800,
            title: 'Nhà Báo Vũ Kim Hạnh: "Kết nối" liệu có phải là hạnh phúc',
            description: 'Một buổi sáng ngày cuối năm giữa bộn bề công việc, quẩn quanh với những con số, đội ngũ AKA [...]',
        },
        {
            imageUrl: '/blogs/stories/chien-luoc-phu-dong.jpg',
            width: 860,
            height: 574,
            title: 'Chiến lược “Phù Đổng” của công ty đứng sau thương hiệu Nhà Xinh',
            description: 'Không những làm nội thất cho hàng loạt công trình nổi tiếng trong nước như Landmark 81, JW Marriott Phú [...]',
        },
        {
            imageUrl: '/blogs/stories/design-talk-2-11-1199x800.jpg',
            width: 1199,
            height: 800,
            title: 'Design Talk 2 – Gặp gỡ Nhà thiết kế Nguyễn Đình Hòa',
            description: 'Design Talk là hoạt động giao lưu trò chuyện được AKA tổ chức thường xuyên, gồm những buổi trao đổi [...]',
        },
        {
            imageUrl: '/blogs/stories/dao-tao-02-8-1400x760.jpg',
            width: 1400,
            height: 760,
            title: 'Design Talk 1 – Chuyện trò về những xu hướng nội thất',
            description: 'Cuối tuần vừa qua, tập thể AKA đã hân hạnh đón chào một nhà thiết kế quen thuộc, người mà [...]',
        },
        {
            imageUrl: '/blogs/stories/quy-trinh-boc-sofa-da-khung-go-1200x800.jpg',
            width: 1200,
            height: 800,
            title: 'Quy trình bọc nệm sofa da cao cấp khung gỗ',
            description: 'Tại sao có những bộ sofa luôn tạo cảm giác êm ái cho người dùng? Liệu quy trình hoàn thiện [...]',
        },
        {
            imageUrl: '/blogs/stories/hanh-trinh-sang-tao-11-1200x800.jpg',
            width: 1200,
            height: 800,
            title: 'Đến Nhà Xinh trò chuyện về hành trình sáng tạo',
            description: 'Cuối tuần vừa qua, Nhà Xinh Phú Mỹ Hưng hân hạnh được chào đón diễn giả Trần Đình Thông cùng [...]',
        },
        {
            imageUrl: '/blogs/stories/AA-Tay-Ninh-1200x800.jpg',
            width: 1200,
            height: 800,
            title: 'Chiêm ngưỡng AA Tây Ninh – nhà máy sản xuất nội thất hiện đại với quy mô 50ha',
            description: 'Là một thành viên của tập đoàn AA, nhà máy AA Tây Ninh tọa lạc tại huyện Trảng Bàng, thành [...]',
        },
        {
            imageUrl: '/blogs/stories/quy-trinh-tao-san-pham-15-1200x800.jpg',
            width: 1200,
            height: 800,
            title: 'Khám phá quy trình tạo ra sản phẩm Bridge và Elegance',
            description: 'Bridge và Elegance là hai dòng sản phẩm do nhà thiết kế Đan Mạch – Hans Sandgren Jakobsen tạo ra, [...]',
        },
    ]

    const groupedPages = pages.reduce((acc, item, index) => {
        const groupIndex = Math.floor(index / 2);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(item);
        return acc;
    }, []);

    return (
        <div className=''>
            <h1 className='text-center text-[40px] font-medium mb-7'>Chuyện Nhà Xinh</h1>
            {/* <Carousel className='mb-[70px] h-[550px] block small:hidden' animation='slide'>
                {groupedPages.map((group, groupIndex) => (
                    <div key={groupIndex} className='w-full flex flex-row'>
                        {group.map((item, i) => (
                            <Item key={i} item={item} />
                        ))}
                    </div>
                ))}
            </Carousel> */}

            <Carousel className='mb-[70px] h-[550px] block' animation='slide'>
            {
                pages.map((item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
        </div>
    )
}

function Item(props)
{
    return (
        <div className='flex h-[500px] justify-center items-center w-screen'>
            <a href='' className='flex flex-col justify-center items-center space-y-[16px] w-[50%] group mobile:w-full'>
                <div className='w-[700px] h-[380px] overflow-hidden bg-cover bg-bottom relative group-hover:brightness-105 mobile:h-[250px] mobile:w-full' style={{ backgroundImage: `url(${props.item.imageUrl})` }}>
                </div>

                <div className='h-[100px] transition duration-300 group-hover:-translate-y-2 mobile:w-full mobile:space-y-[40px]'>
                    <h2 className='text-[20px] font-medium h-[50px] w-[700px] text-center mobile:w-full'>{props.item.title}</h2>
                    <p className='h-[50px] w-[700px] text-center mobile:w-full'>{props.item.description}</p>
                </div>
            </a>
        </div>
    )
}
