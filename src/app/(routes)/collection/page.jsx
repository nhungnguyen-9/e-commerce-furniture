import React from 'react'

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Collection() {
    return (
        <div>
            <div className='relative overflow-hidden w-full h-fit mb-[50px]'>
                <div className='bg-collection w-full h-[600px] bg-cover brightness-[70%] relative'>
                </div>
                <h1 className='absolute bottom-[50px] left-[100px] text-white font-bold text-[50px]'>Bộ sưu tập</h1>
                <div className='absolute bottom-[50px] right-[100px] flex flex-row text-white text-[20px]'>
                        <a href=''>Trang chủ</a>
                        <p className='mx-[10px]'>/</p>
                        <p className='font-semibold'>Bộ sưu tập</p>
                    </div>
            </div>

            <div className='w-[90%] ml-[5%] flex flex-row'>
                <div className='bg-gray-100 w-[23%] pt-[2%]'>
                    <h1 className='pl-[10%] border-l-[3px] mb-[10px] border-orange-400 font-semibold text-[17px]'>Bộ sưu tập nhà xinh</h1>
                    <div className='pl-[10%] flex flex-col space-y-[10px]'>
                        <a>Coatstal</a>
                        <a>Mây</a>
                        <a>Elegance</a>
                        <a>Osaka</a>
                        <a>Bridge</a>
                        <a>Maxine</a>
                        <a>Jazz</a>
                        <a>Cabo</a>
                        <a>Porto</a>
                        <a>Pio</a>
                    </div>
                </div>

                <div className='w-[77%] flex flex-row flex-wrap pl-[5%] pr-[5%] justify-between'>
                    <div className='w-[45%] h-[350px] mb-[30px]'>
                        <div className='w-full h-[200px] overflow-hidden'>
                            <img
                            src='https://nhaxinh.com/wp-content/uploads/2023/07/BST-Coastal-3-3.jpg'
                            alt='BST Coastal'
                            />
                        </div>
                        
                        <div className='mt-[5px]'>
                            <h1 className='font-semibold text-[20px] mb-[10px]'>BST Coatstal - cảm hứng miền duyên hải</h1>
                            <p className='text-[15px]'>Coastal – miền duyên hải, hứa hẹn sẽ mang đến cảm giác mát lành của biển xanh, cát vàng và [...]</p>
                        </div>
                    </div>

                    <div className='w-[45%] h-[350px] mb-[30px]'>
                        <div className='w-full h-[200px] overflow-hidden'>
                            <img
                            src='https://nhaxinh.com/wp-content/uploads/2022/10/Sofa-Cabo-3-cho-vai-MB2041-9-PMA170078-1-768x475.jpg'
                            alt='BST Cabo'
                            />
                        </div>
                        
                        <div className='mt-[5px]'>
                            <h1 className='font-semibold text-[20px] mb-[10px]'>BST Cabo – chất hiện đại</h1>
                            <p className='text-[15px]'>Cabo là BST mới nhất vừa có mặt tại Nhà Xinh trong thời gian gần đây, hứa hẹn sẽ mang [...]</p>
                        </div>
                    </div>

                    <div className='w-[45%] h-[350px] mb-[30px]'>
                        <div className='w-full h-[200px] overflow-hidden'>
                            <img
                            src='https://nhaxinh.com/wp-content/uploads/2022/04/ban-an-osaka-dep-moi-1-768x512.jpg'
                            alt='BST Osaka'
                            />
                        </div>
                        
                        <div className='mt-[5px]'>
                            <h1 className='font-semibold text-[20px] mb-[10px]'>BST Osaka – vẻ đẹp vượt thời gian</h1>
                            <p className='text-[15px]'>Với nguồn cảm hứng từ những đường khối vuông vức, BST Osaka mang đến vẻ đẹp vững chắc và mạnh [...]</p>
                        </div>
                    </div>

                    <div className='w-[45%] h-[350px] mb-[30px]'>
                        <div className='w-full h-[200px] overflow-hidden'>
                            <img
                            src='https://nhaxinh.com/wp-content/uploads/2021/11/bo-suu-tap-elegance-ban-an-768x401.jpg'
                            alt='BST Elegance'
                            />
                        </div>
                        
                        <div className='mt-[5px]'>
                            <h1 className='font-semibold text-[20px] mb-[10px]'>BST Elegance – nét thanh lịch và tinh tế</h1>
                            <p className='text-[15px]'>Lấy cảm hứng từ nội thất tinh xảo, nhẹ nhàng, nền nã nhưng đơn giản Elegance là sự kết hợp [...]</p>
                        </div>
                    </div>

                    <div className='w-[45%] h-[350px] mb-[30px]'>
                        <div className='w-full h-[200px] overflow-hidden'>
                            <img
                            src='https://nhaxinh.com/wp-content/uploads/2021/10/nha-xinh-phong-khach-bride-nau-tram-4-768x512.jpg'
                            alt='BST Bridge'
                            />
                        </div>
                        
                        <div className='mt-[5px]'>
                            <h1 className='font-semibold text-[20px] mb-[10px]'>BST Bridge – uyển chuyển trong tình yêu thiên nhiên</h1>
                            <p className='text-[15px]'>Nét mộc mạc và sang trọng trong thiết kế vô cùng độc đáo bởi nhà thiết kế Đan Mạch [...]</p>
                        </div>
                    </div>

                    <div className='w-[45%] h-[350px] mb-[30px]'>
                        <div className='w-full h-[200px] overflow-hidden'>
                            <img
                            src='https://nhaxinh.com/wp-content/uploads/2021/10/nha-xinh-phong-khach-may-dep-31-10-21-768x491.jpg'
                            alt='BST Mây'
                            />
                        </div>
                        
                        <div className='mt-[5px]'>
                            <h1 className='font-semibold text-[20px] mb-[10px]'>BST Mây – nét Việt đương đại</h1>
                            <p className='text-[15px]'>Bộ sưu tập Mây gợi lại những hồi ức thanh bình và gần gũi của hồn quê Việt cho lối [...]</p>
                        </div>
                    </div>

                    <div className='w-[45%] h-[350px] mb-[30px]'>
                        <div className='w-full h-[200px] overflow-hidden'>
                            <img
                            src='https://nhaxinh.com/wp-content/uploads/2021/10/phong-khach-maxine73-768x511.jpg'
                            alt='BST Maxine'
                            />
                        </div>
                        
                        <div className='mt-[5px]'>
                            <h1 className='font-semibold text-[20px] mb-[10px]'>BST Maxine – nét nâu trầm sang trọng</h1>
                            <p className='text-[15px]'>BST nội thất Maxine mang phong cách hiện đại với các chi tiết sang trọng và quyến rũ đến kỳ [...]</p>
                        </div>
                    </div>

                    <div className='w-[45%] h-[350px] mb-[30px]'>
                        <div className='w-full h-[200px] overflow-hidden'>
                            <img
                            src='https://nhaxinh.com/wp-content/uploads/2021/11/bo-suu-tap-jazz-go-soi-nau-2-768x512.jpg'
                            alt='BST Jazz'
                            />
                        </div>
                        
                        <div className='mt-[5px]'>
                            <h1 className='font-semibold text-[20px] mb-[10px]'>BST Jazz – bản nhạc hiện đại cho không gian sống</h1>
                            <p className='text-[15px]'>Bộ sưu tập JAZZ được thiết kế với phong cách Industrial. Phong cách này phù hợp với nhiều loại hình [...]</p>
                        </div>
                    </div>

                    <div className='w-[45%] h-[350px] mb-[30px]'>
                        <div className='w-full h-[200px] overflow-hidden'>
                            <img
                            src='https://nhaxinh.com/wp-content/uploads/2021/11/bo-suu-tap-victoria-5-1-768x504.jpg'
                            alt='BST Victoria'
                            />
                        </div>
                        
                        <div className='mt-[5px]'>
                            <h1 className='font-semibold text-[20px] mb-[10px]'>BST Victoria – sự lôi cuốn kỳ diệu</h1>
                            <p className='text-[15px]'>Nhà thiết kế Huy Lân bắt nguồn cho những cảm hứng của mình từ nét đẹp tinh xảo của những [...]</p>
                        </div>
                    </div>

                    <div className='w-[45%] h-[350px] mb-[30px]'>
                        <div className='w-full h-[200px] overflow-hidden'>
                            <img
                            src='https://nhaxinh.com/wp-content/uploads/2021/11/bo-suu-tap-shadow-2-600x449.jpg'
                            alt='BST Shadow'
                            />
                        </div>
                        
                        <div className='mt-[5px]'>
                            <h1 className='font-semibold text-[20px] mb-[10px]'>BST Shadow – sự kết hợp tuyệt hảo giữa gỗ và kim loại</h1>
                            <p className='text-[15px]'>Sự kết hợp độc đáo giữa gỗ Sồi nâu Hi Tech Veneer và chân kim loại copper giúp bộ sưu [...]</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative bg-location_image bg-cover bg-center w-full h-[630px] small:scale-100 small:m-0 small:h-[280px] small:bg-center small:bg-no-repeat small:bg-cover'>
                <div className='absolute top-0 right-0 bottom-0 left-0 bg-black opacity-25 small:w-full'></div>
                <div className='relative w-full h-full flex flex-col justify-center items-center text-center'>
                    <h1 className='text-7xl font-extrabold text-white small:w-full small:p-0 small:m-0 small:text-[28px]'>Xem, chạm và cảm nhận</h1>
                    <button className='text-[15px] py-2 px-4 text-white border-2 border-white hover:bg-white hover:text-[#666] small:w-[30%] small:text-[10px]'>
                        <p className='ml-1 font-bold text-xl'>
                            Tìm cửa hàng
                            <ChevronRightIcon />
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}
