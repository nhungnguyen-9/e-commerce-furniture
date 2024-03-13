'use client'
import React from 'react'

import Image from 'next/image';

import Carousel from 'react-material-ui-carousel'

export default function Inspiration(props) {
    var pages = [
        {
            imageUrl: '/inspiration/trien-lam-hawa-expo-2024-600x400.jpg',
            width: 600,
            height: 600,
            title: 'AA Corporation tại Hawa Expo 2024 và Qfair 2024',
            description: 'Cuối tuần qua, AA Corporation đã tham gia Hawa Expo 2024 và Qfair 2024. Đây [...]',
        },
        {
            imageUrl: '/inspiration/qua-noi-that-8.3-2-598x400.jpg',
            width: 598,
            height: 400,
            title: 'Chọn quà nội thất cho lễ 8/3',
            description: 'Cùng chọn một món quà 8/3 để thể hiện lòng biết ơn, niềm trân trọng [...]',
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
        },
        {
            imageUrl: '/inspiration/hoa-trang-tri-tet-8-590x400.jpg',
            width: 590,
            height: 400,
            title: 'Thổi làn gió xuân vào không gian với bình hoa trang trí',
            description: 'Mùa xuân rộn ràng đang trở lại với sự háo hức và mong chờ của [...]',
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


    const renderedPages = [];

    pages.forEach((page, index) => {
        renderedPages.push(
            <a href='' key={index} className='w-[49%] h-[450px] mb-[30px]'>
                <div className=''>
                    <div className='w-full h-[350px] overflow-hidden'>
                        <img
                        src={page.imageUrl}
                        alt={page.title}
                        width={page.width}
                        height={page.height}
                        className=''
                        />
                    </div>
                    <h1 className='text-center my-[10px] font-bold'>{page.title}</h1>
                    <p  className='text-center'>{page.description}</p>
                </div>
            </a>
        );
    });

    return (
        <div className='w-full h-full mb-[100px]'>
            <div className='relative w-[80%] ml-[10%] flex flex-row h-[540px]'>
                <div className='w-[73%] mr-[1%] h-full overflow-hidden'>
                    <div className='w-full h-full bg-inspiration_camhung1 bg-contain hover:scale-110 hover:opacity-85 brightness-90 transition ease-in-out duration-500'>
                    </div>
                    <div className='absolute top-[100px] left-28'>
                        <h1 className='text-white text-[20px]'> 
                            Góc cảm hứng
                        </h1>
                        <p className='text-white text-[60px] font-bold'>
                            Ý TƯỞNG<br/> KHÔNG GIAN<br/> SỐNG
                        </p>
                        <button className='border-2 border-black px-[20px] py-[10px] text-[18px] hover:border-white hover:bg-white transition ease-in-out duration-300'>XEM THÊM</button>
                    </div>
                </div>

                <div className='w-[25%]'>
                    <div className='w-full h-[49%] overflow-hidden'>
                        <div className='w-full h-full bg-inspiration_camhung2 bg-cover bg-no-repeat hover:scale-110 hover:brightness-[90%] transition ease-in-out duration-500 bg-bottom'>

                        </div>
                    </div>

                    <div className='h-[2%]'></div>
                    
                    <div className='w-full h-[49%] overflow-hidden'>
                        <div  className='w-full h-full bg-inspiration_camhung3 bg-cover bg-no-repeat hover:scale-110 hover:brightness-[90%] transition ease-in-out duration-500 bg-bottom'>

                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[70px] w-[80%] ml-[10%] flex flex-row flex-wrap items-center justify-between'>
                {renderedPages}
            </div>

            <div className=''>
                <Carousel className='mb-[40px] h-[450px] block small:hidden' animation='slide'>
                {groupedPages.map((group, groupIndex) => (
                    <div key={groupIndex} className='w-full flex flex-row'>
                        {group.map((item, i) => (
                            <Item key={i} item={item} />
                        ))}
                    </div>
                ))}
                </Carousel>
            </div>
        </div>
    )
}

function Item(props)
{
    return (
        <div className='flex flex-col h-[400px] w-[50%] small:w-full small:h-[400px]'>
            <a href='' className='flex flex-col justify-center items-center space-y-[16px] group'>
                <div className='w-[500px] h-[300px] overflow-hidden relative group-hover:brightness-105 small:w-full small:h-[220px]'>
                    <Image 
                    src={props.item.imageUrl}
                    width={props.item.width}
                    height={props.item.height}
                    quality={100}
                    alt="Item 1"
                    objectFit='contain'
                    />
                </div>
                <div className='h-[100px] transition duration-300 group-hover:-translate-y-2 small:w-full small:flex small:flex-col'>
                    <h2 className='text-[20px] font-medium h-[50px] w-[700px] text-center text-wrap small:text-wrap small:w-full'>{props.item.title}</h2>
                    <p className='h-[50px] w-[700px] text-center small:text-wrap small:w-full small:pt-[20px]'>{props.item.description}</p>
                </div>
            </a>
        </div>
    )
}

