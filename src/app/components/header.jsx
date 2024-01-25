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
import CategoryList from './CategoryList'
import CloseIcon from '@mui/icons-material/Close'
import { Tooltip } from '@mui/material'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />
})

export default function Header() {

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
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isScrolled = scrollY > 0;

  return (
    <div className='h-auto'>
      <div className='h-14 py-2.5 border-b border-solid border-[#F6F7F8]'>
        <div className='flex flex-row items-center justify-around h-full'>
          {/* Language */}
          <div className='w-1/2 flex flex-row items-center h-7 space-x-1 average:absolute average:left-0'>
            <a href='#' className='ml-28 average:ml-5'>
              <Image
                className='rounded-full'
                src='/header/VietNam_flag.png'
                width={16}
                height={16}
                alt='Icon Language'
              />
            </a>
            <a href='#' className='!text-slate-300 text-sm'>
              VN
            </a>
            <a href='#' className='!text-slate-900 text-sm'>
              EN
            </a>
            {/* Information */}
            <div className='relative left-14 flex flex-row justify-evenly space-x-4'>
              <a href='#' className='text-sm font-bold'>
                <CallIcon sx={{ fontSize: '15px' }} />
                1800 7200
              </a>
              <a
                href='#'
                className='text-sm text-slate-500 hover:text-slate-900 average:hidden'
              >
                Giới thiệu
              </a>
              <a
                href='#'
                className='text-sm text-slate-500 hover:text-slate-900 average:hidden'
              >
                Khuyến mãi
              </a>
              <a href='#' className='text-sm text-red-600 average:hidden'>
                Giảm giá đặc biệt
              </a>
            </div>
          </div>

          {/* Cart */}
          <div className='w-1/2 flex flex-row justify-end items-center h-7 relative right-36 space-x-4 average:absolute average:right-0'>
            <a href='#'>
              <PlaceOutlinedIcon
                sx={{
                  color: 'rgba(47,47,47,0.5)',
                  '&:hover': { color: 'rgba(47,47,47,0.9)' },
                }}
              />
            </a>
            <a href='#'>
              <FavoriteBorderIcon
                sx={{
                  color: 'rgba(47,47,47,0.5)',
                  '&:hover': { color: 'rgba(47,47,47,0.9)' },
                }}
              />
            </a>
            <a href='#'>
              <Tooltip title='Cart'>
                <ShoppingBagIcon
                  sx={{
                    color: 'rgba(47,47,47,0.5)',
                    '&:hover': { color: 'rgba(47,47,47,0.9)' },
                  }}
                />
              </Tooltip>
            </a>
            <a href='#' className='flex items-center text-slate-500 hover:text-slate-900'>
              <p className='float-left average:hidden'>Đăng nhập</p>
              <PersonIcon
                sx={{
                  color: 'rgba(47,47,47,0.5)',
                  fontSize: '18px',
                  '&:hover': { color: 'rgba(47,47,47,0.9)' },
                }}
              />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`h-24 ${isScrolled ? 'sticky top-0' : 'sticky'
          } bg-white`}
      >
        <div className='flex items-center h-full ml-24 average:ml-0'>
          <Button
            onClick={handleTransitionButtonClick}
            style={{ color: '#000000' }}
            size='large'
          >
            <MenuIcon fontSize='large' />
          </Button>
          <Link href='#' className='w-36 h-14 mr-10 average:mr-0 average:absolute average:left-[40%]'>
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
                href='#'
                className='hover:text-amber-500 text-sm group-hover:block'
              >
                SẢN PHẨM
                <ExpandMore />
              </Link>
              <div className='hidden absolute space-y-1 p-2 group-hover:block top-14 inset-10 h-max'>
                <div className='flex flex-row justify-evenly h-full bg-white w-fit mt-8'>
                  <CategoryList
                    items={[
                      'Sofa',
                      'Sofa góc',
                      'Ghế thư giãn',
                      'Armchair',
                      'Ghế dài & đôn',
                      'Bàn bên',
                      'Bàn nước',
                      'Bàn Console',
                      'Tủ tivi',
                      'Kệ trưng bày',
                      'Tủ giày',
                    ]}
                  />
                  <CategoryList
                    items={[
                      'Bàn ăn',
                      'Ghế ăn',
                      'Ghế bar',
                      'Tủ ly',
                      'Xe đẩy',
                      'Tủ bếp',
                      'Thiết bị bếp',
                    ]}
                  />
                  <CategoryList
                    items={[
                      'Giường ngủ',
                      'Bàn đầu giường',
                      'Bàn trang điểm',
                      'Tủ áo',
                      'Tủ âm tường',
                      'Tủ hộc kéo',
                      'Nệm',
                    ]}
                  />
                  <CategoryList
                    items={[
                      'Bàn làm việc',
                      'Ghế làm việc',
                      'Kệ sách',
                      'Bàn ngoài trời',
                      'Ghế ngoài trời',
                    ]}
                  />
                  <CategoryList
                    items={[
                      'Đèn trang trí',
                      'Bàn đầu giường',
                      'Bàn trang điểm',
                      'Tủ áo',
                      'Tủ âm tường',
                      'Tủ hộc kéo',
                      'Nệm',
                    ]}
                  />
                  <CategoryList
                    items={[
                      'Giường ngủ',
                      'Bàn đầu giường',
                      'Bàn trang điểm',
                      'Tủ áo',
                      'Tủ âm tường',
                      'Tủ hộc kéo',
                      'Nệm',
                    ]}
                  />
                  <CategoryList
                    items={[
                      'Giường ngủ',
                      'Bàn đầu giường',
                      'Bàn trang điểm',
                      'Tủ áo',
                      'Tủ âm tường',
                      'Tủ hộc kéo',
                      'Nệm',
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className='group w-fit'>
              <Link
                href='#'
                className='hover:text-amber-500 text-sm group-hover:block'
              >
                PHÒNG
                <ExpandMore />
              </Link>
              <div className='hidden absolute space-y-1 p-2 group-hover:block top-14 h-max'>
                <div className='flex flex-row justify-evenly h-full bg-white mt-8'>
                  <CategoryList
                    items={[
                      'Sofa',
                      'Sofa góc',
                      'Ghế thư giãn',
                      'Armchair',
                      'Ghế dài & đôn',
                      'Bàn bên',
                      'Bàn nước',
                      'Bàn Console',
                      'Tủ tivi',
                      'Kệ trưng bày',
                      'Tủ giày',
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className='w-fit'>
              <Link href='#' className='hover:text-amber-500 text-sm text-nowrap'>
                BỘ SƯU TẬP
              </Link>
            </div>

            <div className='w-fit'>
              <Link href='#' className='hover:text-amber-500 text-sm text-nowrap'>
                THIẾT KẾ NỘI THẤT
              </Link>
            </div>

            <div className='w-fit'>
              <Link href='#' className='hover:text-amber-500 text-sm text-nowrap'>
                CỬA HÀNG 360 ĐỘ
              </Link>
            </div>

            <div className='w-fit'>
              <Link href='#' className='hover:text-amber-500 text-sm text-nowrap'>
                GÓC CẢM HỨNG
              </Link>
            </div>
          </div>

          {/* Search */}
          <div className='relative mr-32 average:hidden w-[480px]'>
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
            <button className='absolute top-[30px] right-[20px] hidden hover:bg-gray-600 average:block group-hover:block rounded w-[40px] h-[40px] border-2'>
              <SearchIcon className='hover:fill-white' fontSize='small' />
            </button>
            <div className='hidden absolute right-0 top-[70px] group-hover:block bg-white w-fit h-fit shadow-sm border-2'>
              <div className='m-[20px]'>
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
                    }}
                  />
              </div>
            </div>
          </div>
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
          >
            <button onClick={handleClose} className='ml-[90%] w-8 h-8 sm:hidden block'><CloseIcon fontSize='large'/></button>
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
                <Link href='#'>BỘ SƯU TẬP</Link>
              </div>
              <div className='ml-4 mt-6 hover:text-amber-500'>
                <Link href='#'>THIẾT KẾ NỘI THẤT</Link>
              </div>
              <div className='ml-4 mt-6 hover:text-amber-500'>
                <Link href='#'>CỬA HÀNG 360 ĐỘ</Link>
              </div>
              <div className='ml-4 mt-6 hover:text-amber-500'>
                <Link href='#'>GÓC CẢM HỨNG</Link>
              </div>
              <div className='ml-4 mt-6 hover:text-amber-500'>
                <Link href='#'>GIỚI THIỆU</Link>
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
