'use client'
import React, { useState, useEffect, useContext } from 'react'
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
import CartContext from '@/context/CartContext'
import { signOut, useSession } from 'next-auth/react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useRouter } from 'next/navigation'
import { translate } from "google-translate-nodejs";
import Autocomplete from '@mui/material/Autocomplete';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />
})

export default function Header() {
  const router = useRouter()
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParam, setSearchParam] = useState('');

  const { cart } = useContext(CartContext)
  const cartItems = cart?.cartItems

  const [open, setOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    // Fetch products from your API
    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.products);
        });
}, []);

const handleSearch = async () => {
  if (searchParam.trim() !== '') {
    const { data } = await translate.batch(searchParam, ["vi"]);
    const translatedText = data.target[0].text;

    const regexPattern = `${searchParam}|${translatedText}`;

    router.push(`/shop?search=${encodeURIComponent(regexPattern)}`);
  } else {
    router.push('/shop');
  }
};

const handleInputChange = (event, value) => {
  if (value) {
    setSearchParam(value);
    const regex = new RegExp(`^${value}`, 'i');
    setFilteredProducts(products.filter(product => regex.test(product.name)));
  } else {
    setSearchParam('');
    setFilteredProducts([]);
  }
};
  

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

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMouseLeave = () => {
    setAnchorEl(null)
  }

  // display user
  const [user, setUser] = useState(null)
  const { data } = useSession()
  // console.log(data)
  useEffect(() => {
    if (data) {
      setUser(data?.user)
    }
  }, [data])

  const logoutHandler = () => {
    signOut({
      callbackUrl: '/'
    })
  }

  return (
    <div className='h-auto z-10'>
      <div className='h-14 py-2.5 border-b border-solid border-[#F6F7F8] relative tablet:hidden mobile:hidden'>
        <div className='flex items-center justify-around h-full'>
          {/* Language */}
          <div className='flex items-center mr-auto h-7 space-x-1 md:ml-[-95px] lg:ml-[2px] tablet:absolute tablet:mr-[200px] mobile:absolute mobile:mr-[200px]'>
            <a href='#' className='ml-28 tablet:ml-5 tablet:hidden mobile:ml-5 mobile:hidden'>
              <Image
                className='rounded-full'
                src='/header/VietNam_flag.png'
                width={16}
                height={16}
                alt='Icon Language'
              />
            </a>
            <a href='#' className='!text-slate-300 text-sm tablet:hidden mobile:hidden'>
              VN
            </a>
            <a href='#' className='!text-slate-900 text-sm tablet:hidden mobile:hidden'>
              EN
            </a>
            {/* Information */}
            <div className='relative left-14 flex flex-row justify-evenly space-x-4'>
              <a href='#' className='text-sm font-bold tablet:hidden mobile:hidden'>
                <CallIcon sx={{ fontSize: '15px' }} />
                1800 7200
              </a>
              <Link
                href='/about'
                className='text-sm text-slate-500 hover:text-slate-900 tablet:hidden mobile:hidden'
              >
                Giới thiệu
              </Link>
              <Link
                href='/sales'
                className='text-sm text-slate-500 hover:text-slate-900 tablet:hidden mobile:hidden'
              >
                Khuyến mãi
              </Link>
              {/* <Link href='/' className='text-sm text-red-600 tablet:hidden mobile:hidden'>
                Giảm giá đặc biệt
              </Link> */}
            </div>
          </div>

          {/* Cart */}
          <div className='flex items-center ml-auto h-7 space-x-4 md:mr-[20px] lg:mr-[120px] tablet:hidden mobile:hidden'>
            <Link href='#'>
              <PlaceOutlinedIcon
                sx={{
                  color: 'rgba(47,47,47,0.5)',
                  '&:hover': { color: 'rgba(47,47,47,0.9)' },
                }}
              />
            </Link>
            <Link href='/account/wishlist'>
              <FavoriteBorderIcon
                sx={{
                  color: 'rgba(47,47,47,0.5)',
                  '&:hover': { color: 'rgba(47,47,47,0.9)' },
                }}
              />
            </Link>
            <Link href='/gio-hang'>
              <Tooltip title='Cart'>
                <div className='relative'>
                  <ShoppingBagIcon
                    sx={{
                      color: 'rgba(47,47,47,0.5)',
                      '&:hover': { color: 'rgba(47,47,47,0.9)' },
                    }}
                  />
                  <div className='bg-red-500 absolute text-white text-[10px] font-semibold rounded-full px-1 right-[-8px] top-0'>{cartItems?.length || ''}</div>
                </div>
              </Tooltip>
            </Link>

            {/* display user */}
            {!user ? (
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
            ) : (
              <div>
                <Link href='/tai-khoan/edit-account' className='flex items-center text-slate-500 hover:text-slate-900' onMouseEnter={handleMouseEnter}>
                  <p className='float-left average:hidden'>{user?.name}</p>
                  <PersonIcon
                    sx={{
                      color: 'rgba(47,47,47,0.5)',
                      fontSize: '18px',
                      '&:hover': { color: 'rgba(47,47,47,0.9)' },
                    }}
                  />
                </Link>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClick={handleMouseLeave}
                  onMouseLeave={handleMouseLeave}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <Link href='/tai-khoan/edit-account'>
                    <MenuItem>Thông tin của tôi</MenuItem>
                  </Link>
                  <Link href='/tai-khoan/order'>
                    <MenuItem>Đơn hàng</MenuItem>
                  </Link>
                  <Link href='#'>
                    <MenuItem>Wishlist</MenuItem>
                  </Link>
                  <MenuItem onClick={logoutHandler}>Đăng xuất</MenuItem>
                </Menu>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`h-[90px] ${isScrolled ? 'fixed top-0 w-full bg-white shadow-[12px 12px 50px rgba(0, 0, 0, 0.4)] transition-transform -translate-y-2' : 'sticky'} bg-white`}
      >
        <div className='flex items-center h-full ml-24 md:ml-0 lg:ml-24 tablet:ml-0 mobile:ml-0'>
          <Button
            onClick={handleTransitionButtonClick}
            style={{ color: '#000000' }}
            size='large'
          >
            <MenuIcon fontSize='large' />
          </Button>
          <Link href='/' className='w-36 h-14 mr-10 tablet:mr-0 tablet:absolute tablet:right-[35%] mobile:mr-0 mobile:absolute mobile:right-[35%]'>
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
          <div className='flex flex-row items-center space-x-4 flex-wrap w-2/3 justify-start tablet:hidden mobile:hidden'>
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
                href={`/rooms/phong-khach`}
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
          <div className='relative md:ml-14 w-[480px] tablet:hidden mobile:hidden'>
            <Autocomplete
              sx={{ width: 250}}
              freeSolo
              options={filteredProducts}
              getOptionLabel={(option) => (typeof option === 'object' ? option.name : option)}
              onInputChange={handleInputChange}
              renderOption={(props, option) => {
                return (
                  <Link href={`/products/${option.slug}`} {...props} style={{ display: 'flex', height: 'auto' }}>
                    <img src={option.image[0].url} alt={option.name} style={{ width: '50px', height: '50px', borderRadius:'25px' }} />
                    <div style={{ flex: '0 0 34%', overflow: 'hidden', fontSize: '14px' }}>{option.name}</div>
                    <div style={{ flex: '0 0 35%', marginLeft:'5%', fontSize: '14px' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(option.price)).replace(/\./g, ',')}</div>
                  </Link>
                );
              }}
              renderInput={(params) =>(
                <TextField
                  {...params}
                  type='text'
                  placeholder='Tìm sản phẩm'
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
          
                      legend: {
                        marginRight: "30px"
                      }
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "10px", // Đặt chiều cao tùy chỉnh ở đây
                    },
                    "& .MuiAutocomplete-inputRoot": {
                      paddingLeft: "20px !important",
                      borderRadius: "50px",
                    },
                    "& .MuiInputLabel-outlined": {
                      paddingLeft: "20px",
                    },
                    "& .MuiInputLabel-shrink": {
                      marginLeft: "20px",
                      paddingLeft: "10px",
                      paddingRight: 0,
                      background: "white"
                    }
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        handleSearch();
                        event.target.blur();
                    }
                  }}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <InputAdornment position="end">
                        <div className='absolute right-[15px]'>
                          <button onClick={handleSearch}>
                            <SearchIcon />
                          </button>
                        </div>
                      </InputAdornment>
                    ),
                  }}
                />
            )}
            />
          </div>

          {/* Search at mobile reponsive */}
          <div className='group'>
            <button className='absolute top-[30px] right-[45px] hidden focus:bg-gray-600 group-hover:block rounded w-[35px] h-[35px] tablet:block mobile:block'>
              <SearchIcon className='focus:fill-white' fontSize='medium' />
            </button>
            <div className='hidden absolute right-11 py-4 top-[70px] group-hover:block bg-white shadow-sm border-2'>
              <div className='px-5'>
                <TextField
                  id='outlined-basic'
                  label='Tìm sản phẩm'
                  variant='outlined'
                  size='small'
                  value={searchParam}
                  onChange={(e) => setSearchParam(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <SearchIcon onClick={handleSearch} />
                      </InputAdornment>
                    ),
                    sx: { borderRadius: 20 }
                  }}
                />
              </div>
            </div>
          </div>
          {/* shoping cart at mobile device */}
          <Link href='/gio-hang'>
            <div className='hidden absolute top-[32px] right-[12px] tablet:block mobile:block'>
              <Tooltip title='Cart'>
                <div className='relative'>
                  <ShoppingBagIcon
                    sx={{
                      color: 'rgba(47,47,47,0.5)',
                      '&:hover': { color: 'rgba(47,47,47,0.9)' },
                    }}
                    fontSize='medium'
                  />
                  <div className='bg-red-500 absolute text-white text-[10px] font-semibold rounded-full px-1 right-[-8px] top-0'>{cartItems?.length || ''}</div>
                </div>
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
            <div className='hidden tablet:block mobile:block'>
              <div className='ml-4 mt-6 hover:text-amber-500'>
                <Link href='/collection' onClick={handleClose}>BỘ SƯU TẬP</Link>
              </div>
              <div className='ml-4 mt-6 hover:text-amber-500'>
                <Link href='/design' onClick={handleClose}>THIẾT KẾ NỘI THẤT</Link>
              </div>
              <div className='ml-4 mt-6 hover:text-amber-500'>
                <Link href='/shop360' onClick={handleClose}>CỬA HÀNG 360 ĐỘ</Link>
              </div>
              <div className='ml-4 mt-6 hover:text-amber-500'>
                <Link href='/inspiration' onClick={handleClose}>GÓC CẢM HỨNG</Link>
              </div>
              <div className='ml-4 mt-6 hover:text-amber-500'>
                <Link href='/about' onClick={handleClose}>GIỚI THIỆU</Link>
              </div>
              <div className='ml-4 mt-6 hover:text-amber-500'>
                <Link href='/sales' onClick={handleClose}>KHUYẾN MÃI</Link>
              </div>
              {/* <div className='ml-4 mt-6 hover:text-amber-500'>
                <Link href='#'>GIẢM GIÁ ĐẶC BIỆT</Link>
              </div> */}
            </div>
          </Dialog>
        </Collapse>
      </div>
    </div>
  )
}