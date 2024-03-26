import React from 'react'

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Sales() {
    return (
        <div>
            <div className='w-[90%] ml-[5%] h-fit mb-[30px] flex flex-row mobile:flex-col'>
                <div className='w-[48%] mr-[2%] mobile:w-full'>
                    <h1 className='text-center text-[35px] font-medium'>MUA HÀNG KHÔNG GIỚI HẠN - TRẢ GÓP 0% LÃI SUẤT</h1>
                    <p className='text-[20px]'>
                        <span>Mách bạn bí quyết mua sắm những món đồ nội thất chất lượng mà vẫn nhẹ đầu chuyện tài chính, Nhà Xinh đang có chương trình</span>
                        <b>“MUA HÀNG KHÔNG GIỚI HẠN – TRẢ GÓP 0% LÃI SUẤT”</b> 
                        <span>áp dụng cho tất cả đơn hàng. Thay vì phải thanh toán toàn bộ đơn hàng trong 1 lần, quý khách có thể trả góp 0% lãi suất trong </span>
                        <b>kỳ hạn từ 3 – 6 – 9 tháng</b>
                        <span> với thủ tục đơn giản.</span><br/><br/>
                        <span>– Liên kết đến </span><b>30 ngân hàng.</b><br/><br/>
                        <span>– Áp dụng cho thẻ tín dụng trên </span><b>mọi đơn hàng.</b><br/><br/>
                        <span>– Điều kiện áp dụng: đơn hàng từ 3.000.000 với các sản phẩm </span><b>giảm từ 15% </b><span>trở xuống.</span><br/><br/>
                        <span>– Thời gian áp dụng: </span><b>từ ngày 28/6/2023.</b><br/><br/>
                        <span>Chào đón quý khách hàng đến tham quan và mua sắm tại </span><b>tất cả cửa hàng thuộc thương hiệu Nhà Xinh.</b><br/><br/>
                        <span>Liên hệ ngay qua hotline </span><b>18007200 </b><span>để được tư vấn miễn phí.</span>
                    </p>
                </div>
                <div className='w-[50%] h-fit mobile:w-full'>
                    <img
                    src="/sales/KV-tra-gop.jpg"
                    alt="trả góp"
                    width="900"
                    height="900"
                    />
                </div>
            </div>

            <div className='flex flex-row mobile:flex-col w-[90%] ml-[5%] h-[850px] average:h-fit mobile:h-fit average:mb-[20px] mobile:mb-[20px] text-center'>
                <div className='w-[38%] mr-[2%] mobile:w-full'>
                    <form className='flex flex-col space-y-[10px] items-center justify-center'>
                        <h1 className='text-[25px] font-bold'>ĐĂNG KÝ TƯ VẤN TẠI NHÀ</h1>
                        <p className='text-[18px]'>
                            <span>Hẹn gặp ngay tư vấn viên thiết kế nội thất tại nhà bằng cách để lại </span>
                            <b>thông tin tại form dưới đây, </b>
                            <span>hoặc gọi hotline </span>
                            <b>18007200.</b>
                        </p>
                        <label for="name" className='text-[18px] font-bold'>Tên của bạn (Yêu cầu)</label>
                        <input type="text" className='w-full h-[40px] border-2 border-stone-200 outline-none' />
                        <label for="phoneNumber" className='text-[18px] font-bold'>Điện thoại (Yêu cầu)</label>
                        <input type="text" className='w-full h-[40px] border-2 border-stone-200 outline-none' />    
                        <label for="email" className='text-[18px] font-bold'>Email của bạn</label>
                        <input type="text" className='w-full h-[40px] border-2 border-stone-200 outline-none' />
                        <label for="address" className='text-[18px] font-bold'>Địa chỉ</label>
                        <input type="text" className='w-full h-[40px] border-2 border-stone-200 outline-none' />
                        <label for="required" className='text-[18px] font-bold'>Yêu cầu của bạn (Yêu cầu)</label>
                        <textarea className='w-full h-[40px] border-2 border-stone-200 outline-none min-h-[80px] max-h-[160px]' />
                        <input type="file" className='w-full'></input>
                        <input type="submit" value="GỬI YÊU CẦU" className='px-[20px] py-[10px] bg-black text-white font-bold text-[20px]'></input>
                    </form>
                </div>
                <div className='w-[60%] mobile:w-full mobile:mt-[20px]'>
                    <img
                    src='/sales/Thiet-ke-Villa-chi-Mai-1-1.jpg'
                    alt='Thiế kế Villa'
                    width={900}
                    height={720}
                    />
                </div>
            </div>

            <div className='border-t-2 border-gray-300 w-[90%] ml-[5%] h-fit flex flex-row average:flex-col justify-center items-start pt-[50px] space-x-[20px] average:space-x-0 average:h-fit average:mb-[70px]'>
                <div className='w-[600px] h-[600px] bg-sales_sofa bg-cover average:h-[500px] average:w-full bg-bottom average:mb-[20px]'>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <h1 className='font-bold text-white text-center text-[20px]'>SOFA</h1>
                        <a href='' className='font-bold text-black text-center w-[30%] average:w-[20%] bg-white px-[10px] py-[5px] hover:bg-gray-300'>XEM NGAY</a>
                    </div>
                </div>
                <div className='w-[300px] h-[600px] bg-sales_banan bg-cover average:h-[500px] average:w-full bg-bottom average:mb-[20px]'>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <h1 className='font-bold text-white text-center text-[20px]'>BÀN ĂN</h1>
                        <a href='' className='font-bold text-black text-center w-[60%] average:w-[20%] bg-white px-[10px] py-[5px] hover:bg-gray-300'>XEM NGAY</a>
                    </div>
                </div>
                <div className='w-[300px] h-[600px] flex flex-col space-y-[20px] average:w-full average:h-fit average:mb-[20px]'>
                    <div className='bg-sales_giuongngu bg-cover bg-bottom h-[50%] average:h-[500px]'>
                        <div className='w-full h-full flex flex-col justify-center items-center'>
                            <h1 className='font-bold text-white text-center text-[20px]'>GIƯỜNG NGỦ</h1>
                            <a href='' className='font-bold text-black text-center w-[60%] average:w-[20%] bg-white px-[10px] py-[5px] hover:bg-gray-300'>XEM NGAY</a>
                        </div>
                    </div>
                    <div className='bg-sales_thietkenoithat bg-cover bg-bottom h-[50%] average:h-[500px]'>
                        <div className='w-full h-full flex flex-col justify-center items-center'>
                            <h1 className='font-bold text-white text-center text-[20px]'>THIẾT KẾ NỘI THẤT</h1>
                            <a href='' className='font-bold text-black w-[60%] average:w-[20%] text-center bg-white px-[10px] py-[5px] hover:bg-gray-300'>XEM NGAY</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative bg-location_image bg-cover bg-center w-full h-[630px] mobile:scale-100 mobile:m-0 mobile:h-[280px] mobile:bg-center mobile:bg-no-repeat mobile:bg-cover'>
                <div className='absolute top-0 right-0 bottom-0 left-0 bg-black opacity-25 mobile:w-full'></div>
                <div className='relative w-full h-full flex flex-col justify-center items-center text-center'>
                    <h1 className='text-7xl font-extrabold text-white mobile:w-full mobile:p-0 mobile:m-0 mobile:text-[28px]'>Xem, chạm và cảm nhận</h1>
                    <button className='text-[15px] py-2 px-4 text-white border-2 border-white hover:bg-white hover:text-[#666] mobile:w-[30%] mobile:text-[10px]'>
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
