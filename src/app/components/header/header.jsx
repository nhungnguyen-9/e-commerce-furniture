'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CallIcon from '@mui/icons-material/Call'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import PersonIcon from '@mui/icons-material/Person'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import MenuIcon from '@mui/icons-material/Menu'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Slide from '@mui/material/Slide'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import Dropdown from './Dropdown'
import RoomCategoryList from './RoomCategoryList'
import ProductCategoryList from './ProductCategoryList'
import CloseIcon from '@mui/icons-material/Close'
import { Tooltip } from '@mui/material'
import { mockData } from "@/app/data/mock-data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />
})

export default function Header() {
  const livingroom = mockData.categories.rooms.find(room => room._id === 'room-category-1');

  const [open, setOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const handleClose = () => {
    setOpen(false)
  }

  const handleTransitionButtonClick = () => {
    setOpen(!open)
  }

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isScrolled = scrollY > 0

  return (
    <div className='h-auto z-10'>
      <div className='h-14 py-2.5 border-b border-solid border-[#F6F7F8] relative'>
        <div className='flex items-center justify-around h-full'>
          {/* Language */}
          <div className='flex items-center mr-auto h-7 space-x-1 md:ml-[-95px] lg:ml-[2px] average:absolute average:mr-[200px]'>
            <a href='#' className='ml-28 average:ml-5 average:hidden'>
              <Image
                className='rounded-full'
                src='/header/VietNam_flag.png'
                width={16}
                height={16}
                alt='Icon Language'
              />
            </a>
            <a href='#' className='!text-slate-300 text-sm average:hidden'>
              VN
            </a>
            <a href='#' className='!text-slate-900 text-sm average:hidden'>
              EN
            </a>
            {/* Information */}
            <div className='relative left-14 flex flex-row justify-evenly space-x-4'>
              <a href='#' className='text-sm font-bold average:text-center'>
                <CallIcon sx={{ fontSize: '15px' }} />
                1800 7200
              </a>
              <Link
                href='/about'
                className='text-sm text-slate-500 hover:text-slate-900 average:hidden'
              >
                Giới thiệu
              </Link>
              <Link
                href='/sales'
                className='text-sm text-slate-500 hover:text-slate-900 average:hidden'
              >
                Khuyến mãi
              </Link>
              <Link href='/' className='text-sm text-red-600 average:hidden'>
                Giảm giá đặc biệt
              </Link>
            </div>
          </div>

          {/* Cart */}
          <div className='flex items-center ml-auto h-7 space-x-4 md:mr-[20px] lg:mr-[120px] average:hidden'>
            <a href='#'>
              <PlaceOutlinedIcon
                sx={{
                  color: 'rgba(47,47,47,0.5)',
                  '&:hover': { color: 'rgba(47,47,47,0.9)' },
                }}
              />
            </a>
            <Link href='/account/wishlist'>
              <FavoriteBorderIcon
                sx={{
                  color: 'rgba(47,47,47,0.5)',
                  '&:hover': { color: 'rgba(47,47,47,0.9)' },
                }}
              />
            </Link>
            <Link href='/cart'>
              <Tooltip title='Cart'>
                <ShoppingBagIcon
                  sx={{
                    color: 'rgba(47,47,47,0.5)',
                    '&:hover': { color: 'rgba(47,47,47,0.9)' },
                  }}
                />
              </Tooltip>
            </Link>
            <Link href='/login' className='flex items-center text-slate-500 hover:text-slate-900'>
              <p className='float-left average:hidden'>Đăng nhập</p>
              <PersonIcon
                sx={{
                  color: 'rgba(47,47,47,0.5)',
                  fontSize: '18px',
                  '&:hover': { color: 'rgba(47,47,47,0.9)' },
                }}
              />
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`h-[90px] ${isScrolled ? 'fixed top-0 w-full bg-white shadow-[12px 12px 50px rgba(0, 0, 0, 0.4)] transition-transform -translate-y-2' : 'sticky'} bg-white`}
      >
        <div className='flex items-center h-full ml-24 md:ml-0 lg:ml-24 average:ml-0'>
          <Button
            onClick={handleTransitionButtonClick}
            style={{ color: '#000000' }}
            size='large'
          >
            <MenuIcon fontSize='large' />
          </Button>
          <Link href='/' className='w-36 h-14 mr-10 average:mr-0 average:absolute average:right-[35%]'>
            <div className='w-36 h-14'>
              <Image
                src='/header/logo-nha-xinh.png'
                width={140}
                height={50}
                quality={100}
                alt='Picture of the author'
              />
            </div>
          </Link>
          {/* Category */}
          <div className='flex flex-row items-center space-x-4 flex-wrap w-2/3 justify-start average:hidden'>
            <div className='group w-fit'>
              <Link
                href='/shop'
                className='hover:text-amber-500 text-sm group-hover:block'
              >
                SẢN PHẨM
                <ExpandMore />
              </Link>
              <div className='hidden absolute space-y-1 p-2 group-hover:block top-[50px] inset-x-10'>
                <div className='flex flex-row justify-evenly h-full bg-white w-fit mt-6'>
                  <ProductCategoryList />
                </div>
              </div>
            </div>

            <div className='group w-fit'>
              <Link
                href={{
                  pathname: `/rooms/${livingroom._id}`,
                  query: { name: livingroom.categoryName, description: livingroom.description }
                }}
                className='hover:text-amber-500 text-sm group-hover:block'
              >
                PHÒNG
                <ExpandMore />
              </Link>
              <div className='hidden absolute space-y-1 p-2 group-hover:block top-[50px]'>
                <div className='flex flex-row justify-evenly h-full bg-white mt-4'>
                  <RoomCategoryList />
                </div>
              </div>
            </div>

            <div className='w-fit'>
              <Link href='/collection' className='hover:text-amber-500 text-sm text-nowrap'>
                BỘ SƯU TẬP
              </Link>
            </div>

            <div className='w-fit'>
              <Link href='/design' className='hover:text-amber-500 text-sm text-nowrap'>
                THIẾT KẾ NỘI THẤT
              </Link>
            </div>

            <div className='w-fit'>
              <Link href='/shop360' className='hover:text-amber-500 text-sm text-nowrap'>
                CỬA HÀNG 360 ĐỘ
              </Link>
            </div>

            <div className='w-fit'>
              <Link href='/inspiration' className='hover:text-amber-500 text-sm text-nowrap'>
                GÓC CẢM HỨNG
              </Link>
            </div>
          </div>

          {/* Search */}
          <div className='relative md:ml-14 average:hidden w-[480px]'>
            <TextField
              id='outlined-basic'
              label='Tìm sản phẩm'
              variant='outlined'
              size='small'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: { borderRadius: 20, width: '273px' }
              }}
            />
          </div>

          {/* Search at small reponsive */}
          <div className='group'>
            <button className='absolute top-[30px] right-[45px] hidden hover:bg-gray-600 average:block group-hover:block rounded w-[35px] h-[35px]'>
              <SearchIcon className='hover:fill-white' fontSize='medium' />
            </button>
            <div className='hidden absolute right-11 py-4 top-[70px] group-hover:block bg-white shadow-sm border-2'>
              <div className='px-5'>
                <TextField
                  id='outlined-basic'
                  label='Tìm sản phẩm'
                  variant='outlined'
                  size='small'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    sx: { borderRadius: 20 }
                  }}
                />
              </div>
            </div>
          </div>
          {/* shoping cart at small device */}
          <Link href='/cart'>
            <div className='hidden absolute top-[32px] right-[12px] average:block'>
              <Tooltip title='Cart'>
                <ShoppingBagIcon
                  sx={{
                    color: 'rgba(47,47,47,0.5)',
                    '&:hover': { color: 'rgba(47,47,47,0.9)' },
                  }}
                  fontSize='medium'
                />
              </Tooltip>
            </div>
          </Link>
        </div>
        {/* Menu */}
        <Collapse in={open} orientation='horizontal'>
          <Dialog
            onClose={handleClose}
            open={open}
            TransitionComponent={Transition}
            maxWidth='xl'
            keepMounted
            PaperProps={{
              sx: {
                position: 'fixed',
                height: '100%',
                width: { lg: '26%', sm: '50%', xs: '100%' },
                left: '0',
                top: '0',
                margin: '0',
              },
            }}
            sx={{ '& .MuiPaper-root': { maxHeight: '100vh' } }}
          >
            <button onClick={handleClose} className='ml-[88%] mt-2 w-8 h-8 sm:hidden block' style={{ opacity: 0.6, transform: 'translateY(0) translateZ(1px)' }} ><CloseIcon fontSize='large' /></button>
            <Dropdown
              primaryHeader='Sofa và Armchair'
              items={[
                'Sofa',
                'Sofa góc',
                'Armchair',
                'Ghế dài & đôn',
                'Ghế thư giãn',
              ]}
            />
            <Dropdown
              primaryHeader='Bàn'
              items={[
                'Bàn nước',
                'Bàn ăn',
                'Bàn bên',
                'Bàn làm việc',
                'Bàn trang điểm',
              ]}
            />
            <Dropdown
              primaryHeader='Ghế'
              items={['Ghế ăn', 'Ghế bar', 'Ghế làm việc']}
            />
            <Dropdown
              primaryHeader='Giường ngủ'
              items={['Giường', 'Bàn đầu giường', 'Nệm']}
            />
            <Dropdown
              primaryHeader='Tủ và kệ'
              items={[
                'Tủ tivi',
                'Tủ trưng bày',
                'Tủ ly',
                'Tủ rượu',
                'Xe đẩy',
                'Tủ hộc kéo',
                'Tủ áo',
                'Tủ âm tường',
                'Tủ giày',
                'Kệ phòng khách',
              ]}
            />
            <Dropdown
              primaryHeader='Bếp'
              items={['Tủ bếp', 'Phụ kiện bếp', 'Đảo bếp', 'Quầy bar']}
            />
            <Dropdown
              primaryHeader='Hàng trang trí'
              items={[
                'Bình trang trí',
                'Đèn trang trí',
                'Đồ trang trí Noel',
                'Đồng hồ',
                'Dụng cụ bếp',
                'Gối và thú bông',
                'Hàng trang trí khác',
                'Hoa & cây',
                'Khung gương',
                'Khung hình',
                'Nệm',
                'Thảm',
                'Mền',
                'Tranh',
                'Tượng trang trí',
              ]}
            />
            <div className='hidden average:block'>
              <div className='ml-4 mt-6 hover:text-amber-500'>
                <Link href='/collection'>BỘ SƯU TẬP</Link>
              </div>
              <div className='ml-4 mt-6 hover:text-amber-500'>
                <Link href='/design'>THIẾT KẾ NỘI THẤT</Link>
              </div>
              <div className='ml-4 mt-6 hover:text-amber-500'>
                <Link href='/shop360'>CỬA HÀNG 360 ĐỘ</Link>
              </div>
              <div className='ml-4 mt-6 hover:text-amber-500'>
                <Link href='/inspiration'>GÓC CẢM HỨNG</Link>
              </div>
              <div className='ml-4 mt-6 hover:text-amber-500'>
                <Link href='/about'>GIỚI THIỆU</Link>
              </div>
              <div className='ml-4 mt-6 hover:text-amber-500'>
                <Link href='#'>KHUYẾN MÃI</Link>
              </div>
              <div className='ml-4 mt-6 hover:text-amber-500'>
                <Link href='#'>GIẢM GIÁ ĐẶC BIỆT</Link>
              </div>
              <div className='ml-4 mt-6 hover:text-amber-500'>
                <Link href='#'><CallIcon sx={{ fontSize: '15px' }} />1800 7200</Link>
              </div>
            </div>
          </Dialog>
        </Collapse>
      </div>
    </div>
  )
}