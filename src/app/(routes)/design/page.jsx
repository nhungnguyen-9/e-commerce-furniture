import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function design() {
    return (
        <div>
            <div className='relative mt-[50px]'>
                <div className='bg-design w-full h-[1000px] bg-cover brightness-[80%]'>
                </div>

                <div className='absolute top-[50%] w-full text-center text-white'>
                    <h1 className='font-bold text-[70px]'>THIẾT KẾ NỘI THẤT</h1>
                    <p>Hẹn gặp ngay đội ngũ chuyên nghiệp và giàu kinh nghiệm từ Nhà Xinh để được tư vấn những giải pháp hoàn thiện nội thất cho ngôi <br/>nhà của bạn.</p>
                    <button className='bg-button_about font-semibold text-[20px] px-[10px] py-[8px] mt-[15px] hover:bg-hover_button_about transition duration-300'>LIÊN HỆ NGAY: 18007200</button>
                </div>
            </div>

            <div>
                <h1 className='text-center font-bold text-[30px] my-[20px]'>03 lý do nên chọn Nhà Xinh</h1>
                <p className='text-center text-[20px]'>Với kinh nghiệm hơn 23 năm trong thiết kế và hoàn thiện nội thất cùng đội ngũ thiết kế chuyên nghiệp, Nhà Xinh mang đến giải pháp toàn diện trong nội thất.</p>
                <div className='flex flex-row mt-[30px] w-[84%] ml-[8%] space-x-[3%]'>
                    <div className='w-[33%] border-t-2 border-gray-300 mb-[20px]'>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className='text-[20px] font-semibold'
                            >
                            Thực tế giống với 3D
                            </AccordionSummary>
                            <AccordionDetails className='text-center h-[400px] w-[80%] ml-[10%] bg-design_arcodion_1 text-white my-[20px]'>
                                <h1 className='h-[70px] text-[20px]'>Trải nghiệm thực tế trước khi đặt hàng</h1>
                                <p className='text-[17px]'>
                                    Bạn thường gặp tình trạng bản phác thảo 3D khác xa với công trình thực tế? Đừng lo, tại Nhà Xinh, bạn hoàn toàn yên tâm bởi chất lượng luôn được bảo đảm từ đội ngũ tay nghề cao với thương hiệu hơn 23 năm tuổi. Đặc biệt, trên hệ thống 10 cửa hàng, bạn có thể dễ dàng tham khảo không gian và sản phẩm thực tế trước khi đặt hàng.
                                </p>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className='w-[33%] border-t-2 border-gray-300 mb-[20px]'>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                            className='text-[20px] font-semibold'
                            >
                            Luôn cá nhân hóa
                            </AccordionSummary>
                            <AccordionDetails className='text-center h-[400px] w-[80%] ml-[10%] bg-design_arcodion_2 text-white my-[20px]'>
                                <h1  className='h-[70px] text-[20px]'>Đa dạng thiết kế</h1>
                                <p className='text-[17px]'>
                                    Bạn thường bắt gặp nhiều mẫu thiết kế giống nhau khi vô tình đến một địa điểm nào đó? Bạn muốn có một mẫu thiết kế đặc biệt dành riêng cho căn hộ của mình? Hãy nói cho Nhà Xinh biết nhu cầu và sở thích của bạn, đội ngũ thiết kế sẽ giúp bạn thể hiện gu thẩm mỹ đỉnh cao cùng cá tính độc đáo của bạn theo phong cách riêng.
                                </p>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className='w-[33%] border-t-2 border-gray-300 mb-[20px]'>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                            className='text-[20px] font-semibold'
                            >
                            Dịch vụ cao cấp
                            </AccordionSummary>
                            <AccordionDetails className='text-center text-white h-[400px] w-[80%] ml-[10%] bg-design_arcodion_3 my-[20px]'>
                                <h1  className='h-[70px] text-[20px]'>Dịch vụ uy tín với thương hiệu bền vững</h1>
                                <p className='text-[17px]'>
                                    Với quy trình làm việc chuyên nghiệp, đội ngũ Nhà Xinh sẽ tư vấn online và đến tận nơi để trao đổi ngay khi bạn liên hệ. Sau khi công trình hoàn thiện, Nhà Xinh luôn sẵn sàng bảo hành và sửa chữa nếu có vấn đề phát sinh.
                                </p>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>

            <div className='w-full overflow-hidden'>
                <img
                src='https://nhaxinh.com/wp-content/uploads/2023/05/du-an-thiet-ke-biet-thu-dao-ecopark-2.jpg'
                alt='Dự án thiết kế biệt thự'
                />
            </div>

            <div className='flex flex-row mb-[50px]'>
                <div className='w-[50%] overflow-hidden'>
                    <img
                    src='https://nhaxinh.com/wp-content/uploads/2023/05/thiet-ke-nha-biet-thu-ecopark-nhaxinh.jpg'
                    alt='Dự án thiết kế biệt thự'
                    />
                </div>

                <div className='w-[50%] pl-[4%] pr-[20%] pt-[50px]'>
                    <form className='text-center'>
                        <h1 className='text-[30px] font-semibold mb-[20px]'>ĐĂNG KÝ TƯ VẤN TẠI NHÀ</h1>
                        <p className='text-[18px] mb-[20px]'>Hẹn gặp ngay tư vấn thiết kế nội thất tại nhà bằng cách để lại thông tin tại form dưới đây</p>

                        <label for="name" className='text-[18px] font-bold'>Tên của bạn (Yêu cầu)</label>
                        <input type="text" className='w-full h-[40px] border-2 border-stone-200 outline-none mb-[20px]' />

                        <label for="phoneNumber" className='text-[18px] font-bold'>Điện thoại (Yêu cầu)</label>
                        <input type="text" className='w-full h-[40px] border-2 border-stone-200 outline-none mb-[20px]' />  

                        <label for="email" className='text-[18px] font-bold'>Email của bạn</label>
                        <input type="text" className='w-full h-[40px] border-2 border-stone-200 outline-none mb-[20px]' />

                        <label for="address" className='text-[18px] font-bold'>Địa chỉ</label>
                        <input type="text" className='w-full h-[40px] border-2 border-stone-200 outline-none mb-[20px]' />

                        <label for="required" className='text-[18px] font-bold'>Yêu cầu của bạn (Yêu cầu)</label>
                        <textarea className='w-full h-[40px] border-2 border-stone-200 outline-none min-h-[80px] max-h-[160px] mb-[20px]' />

                        <input type="file" className='mb-[20px]'></input>

                        <input type="submit" value="GỬI YÊU CẦU" className='px-[20px] py-[10px] bg-black text-white font-bold text-[20px] mb-[20px]'></input>

                        <button className='bg-button_about text-white font-semibold text-[20px] px-[10px] py-[8px] mt-[15px] hover:bg-hover_button_about transition duration-300'>LIÊN HỆ NGAY: 18007200</button>
                    </form>
                </div>
            </div>

            <div className='relative bg-location_image bg-cover bg-center w-full h-[630px] small:scale-100 small:m-0 small:h-[280px] small:bg-center small:bg-no-repeat small:bg-cover'>
                <div className='absolute top-0 right-0 bottom-0 left-0 bg-black opacity-25 small:w-full'></div>
                <div className='relative top-10 left-0 right-0 text-center'>
                    <h1 className='absolute left-0 right-0 top-96 m-auto text-7xl font-extrabold text-white small:w-full small:p-0 small:m-0 small:text-[28px]'>Xem, chạm và cảm nhận</h1>
                    <button className='absolute mt-[33%] ml-[-65px] text-[15px] py-2 px-4 text-white border-2 border-white hover:bg-white hover:text-[#666] small:w-[30%] small:mt-[200px] small:ml-[140px] small:text-[10px]'>
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
