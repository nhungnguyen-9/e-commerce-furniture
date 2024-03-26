'use client'
import React from 'react'

import Image from 'next/image'

import Carousel from 'react-material-ui-carousel'

export default function Inspiration(props) {

    var pages = [
        {
            imageUrl: '/blogs/inspiration/qua-noi-that-8.3-2.jpg',
            width: 1000,
            height: 669,
            title: 'Chọn quà nội thất cho lễ 8/3',
            description: 'Cùng chọn một món quà 8/3 để thể hiện lòng biết ơn, niềm trân trọng đối với những giá trị [...]',
        },
        {
            imageUrl: '/blogs/inspiration/du-an-xay-dung-diem-truong-lung-vai-1068x800.jpg',
            width: 1068,
            height: 800,
            title: 'Trường học Lùng Vài đạt giải Công trình trường học …',
            description: 'Vừa qua, Điểm Trường Lùng Vài tại huyện Vị Xuyên, Hà Giang vừa đoạt được giải thưởng Hạng mục Thiết [...]',
        },
        {
            imageUrl: '/blogs/inspiration/Huy-Khanh-3-995x800.jpg',
            width: 995,
            height: 800,
            title: 'Armchair Jadora xoay 360 độ',
            description: 'Chiếc armchair Jadora với kiểu dáng mềm mại và thanh lịch. Đặc biệt, với khả năng xoay 360 độ mượt [...]',
        },
        {
            imageUrl: '/blogs/inspiration/noi-that-phong-khach-sang-trong-1-1241x800.jpg',
            width: 1241,
            height: 800,
            title: 'Tham quan căn hộ triệu đô với nội thất sang trọng',
            description: 'Sử dụng các sản phẩm nội thất bọc da mang tới màu sắc trầm ấm và sang trọng cho không [...]',
        },
        {
            imageUrl: '/blogs/inspiration/phong-khach-voi-sofa-ona-1125x800.jpg',
            width: 1125,
            height: 800,
            title: 'Không gian bừng sắc xuân rộn ràng với sofa ONA',
            description: 'Tết truyền thống nhưng lại đậm chất hiện đại cùng bộ sofa ONA mới với sắc xanh đỏ giúp cho [...]',
        },
        {
            imageUrl: '/blogs/inspiration/nen-thom-qua-tang-tet-2-4-1213x800.jpg',
            width: 1213,
            height: 800,
            title: 'Nhà thêm hương cùng quà tặng năm mới với nến thơm',
            description: 'Mùa Tết đang đến gần, không gian ấm áp của nhà bạn sẽ thêm phần trọn vẹn với sự kết [...]',
        }
    ];

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
            <h1 className='text-center text-[40px] font-medium mb-7'>Góc cảm hứng</h1>
            {/* <Carousel className='mb-[40px] h-[550px] block small:hidden' animation='slide'>
            {groupedPages.map((group, groupIndex) => (
                    <div key={groupIndex} className='w-full flex flex-row'>
                        {group.map((item, i) => (
                            <Item key={i} item={item} />
                        ))}
                    </div>
                ))}
            </Carousel> */}

            <Carousel
            className='mb-[40px] h-[550px] block' 
            animation='slide'
            >
            {pages.map((item, i) => (   
                <div key={i} className='flex h-[500px]'>
                    <div className='w-full'>
                        <Item item={item} />
                    </div>
              </div>
            ))}
            </Carousel>
        </div>
    )
}

function Item(props)
{
    return (
        <div className='flex h-[500px] justify-center items-center w-screen'>
            <a href='' className='flex flex-col justify-center items-center space-y-[16px] group'>
                <div className='w-[700px] h-[400px] overflow-hidden relative bg-cover bg-bottom group-hover:brightness-105 mobile:h-[250px] mobile:w-full' style={{ backgroundImage: `url(${props.item.imageUrl})` }}>
                </div>

                <div className='h-[100px] transition duration-300 group-hover:-translate-y-2 mobile:space-y-[20px]'>
                    <h2 className='text-[20px] font-medium h-[50px] w-[700px] text-center text-wrap mobile:w-full'>{props.item.title}</h2>
                    <p className='h-[50px] w-[700px] text-center mobile:w-full'>{props.item.description}</p>
                </div>
            </a>
        </div>
    )
}
