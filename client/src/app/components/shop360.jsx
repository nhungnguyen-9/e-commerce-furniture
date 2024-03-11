'use client'
import React, { useState } from 'react'

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import YouTube from 'react-youtube';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&::before': {
      display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
}));
  
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Shop360() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className='w-[90%] ml-[5%] space-y-[25px] h-fit'>
            <div className='w-full text-center'>
                <h1 className='text-[30px] font-bold'>KHÁM PHÁ CỬA HÀNG 360 ĐỘ</h1>
                <p className='text-[20px]'>
                    Trải nghiệm ngay sản phẩm của Nhà Xinh một cách chân thực trên tay bạn. Tham quan, xem thông tin sản phẩm chi tiết với góc nhìn 360 độ hoàn chỉnh.
                </p>
            </div>

            <p>
                Với hệ thống 10 cửa hàng <a href=''>(Xem tại đây)</a> tại TP. Hồ Chí Minh, Hà Nội, Bình Dương, Ecopark, Nhà Xinh cung cấp những trải nghiệm chân thực và đầy đủ với sự phong phú về các sản phẩm, cảm hứng và ý tưởng về không gian sống.
            </p>

            <p>
                Bên cạnh đó, Nhà Xinh luôn sẵn sàng để cung cấp và giao hàng cho bạn trên tất cả tỉnh thành trong cả nước. Hãy liên hệ ngay với Nhà Xinh qua Hotline: 18007200
            </p>

            <div className='my-[20px]'>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>CỬA HÀNG NHÀ XINH TẠI TP. HỒ CHÍ MINH</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <ul className='list-disc ml-[40px]'>
                                <li>187A Hai Bà Trưng, Phường 6, Quận 3 – (028) 6252 0022 / 6251 2200<br/>(Từ Thứ 2 đến CN: 8h30 – 21h)</li>
                                <li>107 – 109 Xa Lộ Hà Nội, Phường Thảo Điền, Quận 2 – (028) 3535 1505<br/>(Từ Thứ 2 đến CN: 8h30 – 21h)</li>
                                <li>Khu TMDV Hồ Bán Nguyệt, Lô CR03, 111 Tôn Dật Tiên, Phường Tân Phú, Quận 7 – (028) 5413 7355<br/>(Thứ 2 đến Thứ 6: 8h30 – 20h; Thứ 7 & CN: 8h30 – 20h30)</li>
                                <li>L4 Diamond Plaza, 34 Lê Duẩn, Quận 1 – (028) 2200 1079<br/>(Từ Thứ 2 đến CN: 9h30 – 18h)</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>CỬA HÀNG NHÀ XINH TẠI BÌNH DƯƠNG</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <ul className='list-disc ml-[40px]'>
                                <li>442A Đại lộ Bình Dương, Tổ 31, Khu phố Nguyễn Trãi, Phường Lái Thiêu, TP. Thuận An – (027) 4222 2019<br/>(Từ Thứ 2 đến CN: 8h30 – 19h)</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>CỬA HÀNG NHÀ XINH TẠI HÀ NỘI</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <ul className='list-disc ml-[40px]'>
                                <li>Tầng 3, TTTM Sun Plaza, 69 Thụy Khuê, Quận Tây Hồ – (024) 3201 8208<br/>(Từ Thứ 2 đến CN: 9h – 20h)</li>
                                <li>Tòa nhà F4, 112-114 Trung Kính, Quận Cầu Giấy – (024) 3782 1761<br/>(Từ Thứ 2 đến CN: 8h30 – 21h)</li>
                                <li>L4 – 04, Tầng 4, TTTM Vincom Center, 54 Nguyễn Chí Thanh, Quận Đống Đa – (024) 3761 7666<br/>(Từ Thứ 2 đến CN: 10h – 21h30)</li>
                                <li>Tầng 2, Vincom Mega Mall, KĐT Vinhomes Smart City, Phường Đại Mỗ, Quận Nam Từ Liêm – (024) 3202 8027 | (024) 3202 0306<br/>(Từ Thứ 2 đến T6: 10h – 22h, T7 & CN: 9h30 – 22h)</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <Typography>CỬA HÀNG NHÀ XINH TẠI ECOPARK</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <ul className='list-disc ml-[40px]'>
                                <li>Tòa nhà E1, Chung cư Rừng Cọ, Khu đô thị Ecopark, Hưng Yên – (024) 6262 0739</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <p>
                Cùng bước vào không gian đầy sức sống với các thiết kế tiện nghi, nhìn ngắm các sản phẩm đẹp mắt, đa dạng. Từ chiếc sofa êm ái, bàn ăn rộng rãi cho đến những chiếc ghế nhiều màu sắc. Tất cả thông tin về kích thước và chất liệu đều được hiển thị chi tiết trong video, giúp bạn dễ dàng đưa ra lựa chọn hơn. 
            </p>

            <p>
                Hãy cùng đi dạo một vòng cửa hàng Nhà Xinh qua video dưới đây nhé.
            </p>

            <Video/>

            <div className='flex flex-row flex-wrap w-full h-[1350px]'>
                <div className='bg-shop360_phongan h-[600px] w-[49%]'>
                    <div className='ml-[35%] mt-[50px]'>
                        <h1 className='text-[30px] font-medium'>PHÒNG ĂN</h1>
                        <button className='bg-white px-[10px] py-[5px] ml-[20px] hover:bg-stone-300'>XEM THÊM</button>
                    </div>
                </div>
                <div className='h-[500px] w-[2%]'>
                </div>
                <div className='bg-shop360_phongkhach bg-cover h-[600px] w-[49%]'>
                    <div className='ml-[35%] mt-[50px]'>
                        <h1 className='text-[30px] font-medium'>PHÒNG KHÁCH</h1>
                        <button className='bg-white px-[10px] py-[5px] ml-[50px] hover:bg-stone-300'>XEM THÊM</button>
                    </div>
                </div>
                <div className='bg-shop360_phongngu h-[700px] w-full'>
                    <div className='ml-[44%] mt-[50px]'>
                        <h1 className='text-[30px] font-medium'>PHÒNG NGỦ</h1>
                        <button className='bg-white px-[10px] py-[5px] ml-[40px] hover:bg-stone-300'>XEM THÊM</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

class Video extends React.Component {
    render() {
      const opts = {
        height: '768',
        width: '1366',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  
      return <YouTube videoId="-044zH6jIF8" opts={opts} />;
    }
}