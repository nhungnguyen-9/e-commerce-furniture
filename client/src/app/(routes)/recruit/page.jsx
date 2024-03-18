import React from 'react'

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function design() {
    return (
        <div>
            <div className='bg-recruit bg-cover relative w-full h-[800px] bg-bottom'>
                <h1 className='absolute top-[30%] text-center text-white font-medium text-[30px] w-full'>THAM GIA CÙNG NHÀ XINH</h1>
            </div>

            <div className='w-[90%] ml-[5%] mt-[50px]'>
                <p className='text-[18px]'>
                    <b>CÔNG TY NỘI THẤT AKA – TP. HỒ CHÍ MINH & TP HÀ NỘI TUYỂN DỤNG CÁC VỊ TRÍ SAU:</b>
                    <ul className='mb-[20px] space-y-[5px]'>
                        <li>
                            <span>- Nhân viên bán hàng tại showroom: </span>
                            <b>Gian L4-04, TTTM Vincom Centre, 54a Nguyễn Chí Thanh, Phường Láng Thượng, Quận Đống Đa, Hà Nội. </b>
                            <span>Số lượng: 2 nhân viên.</span>
                        </li>
                        <li>
                            <span>- Nhân viên bán hàng tại showroom: </span>
                            <b>Tầng 3, TTTM Sun Grand City, 69 Thụy Khuê, Quận Tây Hồ, Hà Nội. </b>
                            <span>Số lượng: 2 nhân viên.</span>
                        </li>
                        <li>
                            <span>- Nhân viên bán hàng tại showroom: </span>
                            <b>107 – 109 Võ Nguyên Giáp, phường Thảo Điền, TP. Thủ Đức, TP.HCM. </b>
                            <span> Số lượng: 2 nhân viên.</span>
                        </li>
                        <li>
                            <span>- Nhân viên bán hàng tại showroom: </span>
                            <b>Tòa nhà Bitexco, số 19-25 Nguyễn Huệ, Phường Bến Nghé, Quận 1. TP. HCM. </b>
                            <span> Số lượng: 2 nhân viên.</span>
                        </li>
                    </ul>

                    <span>Quyền lợi:</span>
                    <ul className='mb-[20px] space-y-[5px]'>
                        <li>Tổng thu nhập hàng tháng: 8 – 20 triệu (bao gồm lương thỏa thuận + thưởng theo bán hàng, tùy năng lực và kinh nghiệm của ứng viên)</li>
                        <li>Được hưởng đầy đủ các phúc lợi từ công ty: thưởng tết, sinh nhật, tham gia BHXH đầy đủ ngay khi qua vòng thử việc,…</li>
                        <li>Môi trường năng động, trẻ trung, thân thiện.</li>
                        <li>Được đào tạo, hướng dẫn bài bản.</li>
                        <li>Có cơ hội thăng tiến, phát triển bản thân.</li>
                    </ul>

                    <span>Yêu cầu:</span>
                    <ul className='mb-[20px] space-y-[5px]'>
                            <li>- Ưu tiên có kinh nghiệm trong các lĩnh vực: sale, thiết kế nội thất, chăm sóc khách hàng (nếu không có sẽ được đào tạo).</li>
                            <li>- Năng động, nhiệt huyết, có tham vọng kiếm tiền và tinh thần trách nhiệm cao.</li>
                            <li>Ứng viên có ngoại hình sáng và kỹ năng giao tiếp tốt là lợi thế.</li>
                    </ul>

                    <b>𝐀𝐏𝐏𝐋𝐘 𝐍𝐆𝐀𝐘!!!</b>
                    <ul className='mb-[20px] space-y-[5px]'>
                        <li>- Email: toantretrou@akacompany.com.vn</li>
                        <li>- Zalo/Sđt: 0971224816 hoặc ib trực tiếp để trao đổi.</li>
                    </ul>
                </p>
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
