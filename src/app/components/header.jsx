'use client'
import React, {useState, useEffect} from 'react'
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
import {List, ListItem} from '@mui/material'
import Dropdown from './Dropdown'
import CategoryList from './CategoryList'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />
})

export default function Header() {

  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  const handleTransitionButtonClick = () => {
    setOpen(!open);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrolled = scrollY > 0;

  return (
    <div className="w-screen h-auto">
      <div className="w-screen h-14">
        <div className="flex flex-row items-center justify-around h-full">
          <div className="w-1/2 flex flex-row items-center h-7 space-x-1">
            {/* Language */}
            <a href="#" className="ml-28">
              <Image
                className="rounded-full"
                src="/header/VietNam_flag.png"
                width={16}
                height={16}
                alt="Icon Language"
              />
            </a>
            <a href="#" className="!text-slate-300 text-sm">
              VN
            </a>
            <a href="#" className="!text-slate-900 text-sm">
              EN
            </a>
            {/* Information */}
            <div className="relative left-14 flex flex-row justify-evenly space-x-4">
              <a href="#" className="text-sm font-bold">
                <CallIcon sx={{fontSize: "15px"}} />
                1800 7200
              </a>
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-slate-900"
              >
                Giới thiệu
              </a>
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-slate-900"
              >
                Khuyến mãi
              </a>
              <a href="#" className="text-sm text-red-600">
                Giảm giá đặc biệt
              </a>
            </div>
          </div>

          {/* Cart */}
          <div className="w-1/2 flex flex-row justify-end items-center h-7 relative right-36 space-x-4">
            <a href="#">
              <PlaceOutlinedIcon
                sx={{
                  color: "rgba(47,47,47,0.5)",
                  "&:hover": {color: "rgba(47,47,47,0.9)"},
                }}
              />
            </a>
            <a href="#">
              <FavoriteBorderIcon
                sx={{
                  color: "rgba(47,47,47,0.5)",
                  "&:hover": {color: "rgba(47,47,47,0.9)"},
                }}
              />
            </a>
            <a href="#">
              <ShoppingBagIcon
                sx={{
                  color: "rgba(47,47,47,0.5)",
                  "&:hover": {color: "rgba(47,47,47,0.9)"},
                }}
              />
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-900">
              Đăng nhập
              <PersonIcon
                sx={{
                  color: "rgba(47,47,47,0.5)",
                  "&:hover": {color: "rgba(47,47,47,0.9)"},
                }}
              />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`w-screen h-24 ${
          isScrolled ? "sticky top-0" : "sticky"
        } bg-white`}
      >
        <div className="flex flex-row items-center justify-start h-full ml-28">
          <Button
            onClick={handleTransitionButtonClick}
            style={{color: "#000000"}}
            size="large"
          >
            <MenuIcon fontSize="large" />
          </Button>
          <Link href="#" className="w-36 h-14 mr-10">
            <div className="w-36 h-14">
              <Image
                src="/header/logo-nha-xinh.png"
                width={140}
                height={50}
                quality={100}
                alt="Picture of the author"
              />
            </div>
          </Link>
          {/* Category */}
          <div className="group">
            <Link
              href="#"
              className="hover:text-amber-500 text-sm group-hover:block"
            >
              SẢN PHẨM
              <ExpandMore />
            </Link>
            <div className="hidden absolute space-y-1 p-2 group-hover:block top-14 inset-32 h-max">
              <div className="flex flex-row justify-evenly h-full bg-white mt-8">
                <CategoryList
                  items={[
                    "Sofa",
                    "Sofa góc",
                    "Ghế thư giãn",
                    "Armchair",
                    "Ghế dài & đôn",
                    "Bàn bên",
                    "Bàn nước",
                    "Bàn Console",
                    "Tủ tivi",
                    "Kệ trưng bày",
                    "Tủ giày",
                  ]}
                />
                <CategoryList
                  items={[
                    "Bàn ăn",
                    "Ghế ăn",
                    "Ghế bar",
                    "Tủ ly",
                    "Xe đẩy",
                    "Tủ bếp",
                    "Thiết bị bếp",
                  ]}
                />
                <CategoryList
                  items={[
                    "Giường ngủ",
                    "Bàn đầu giường",
                    "Bàn trang điểm",
                    "Tủ áo",
                    "Tủ âm tường",
                    "Tủ hộc kéo",
                    "Nệm",
                  ]}
                />
                <CategoryList
                  items={[
                    "Bàn làm việc",
                    "Ghế làm việc",
                    "Kệ sách",
                    "Bàn ngoài trời",
                    "Ghế ngoài trời",
                  ]}
                />
                <CategoryList
                  items={[
                    "Đèn trang trí",
                    "Bàn đầu giường",
                    "Bàn trang điểm",
                    "Tủ áo",
                    "Tủ âm tường",
                    "Tủ hộc kéo",
                    "Nệm",
                  ]}
                />
                <CategoryList
                  items={[
                    "Giường ngủ",
                    "Bàn đầu giường",
                    "Bàn trang điểm",
                    "Tủ áo",
                    "Tủ âm tường",
                    "Tủ hộc kéo",
                    "Nệm",
                  ]}
                />
                <CategoryList
                  items={[
                    "Giường ngủ",
                    "Bàn đầu giường",
                    "Bàn trang điểm",
                    "Tủ áo",
                    "Tủ âm tường",
                    "Tủ hộc kéo",
                    "Nệm",
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="group ml-6">
            <Link
              href="#"
              className="hover:text-amber-500 text-sm group-hover:block"
            >
              PHÒNG
              <ExpandMore />
            </Link>
            <div className="hidden absolute space-y-1 p-2 group-hover:block top-14 h-max">
              <div className="flex flex-row justify-evenly h-full bg-white mt-8">
                <CategoryList
                  items={[
                    "Sofa",
                    "Sofa góc",
                    "Ghế thư giãn",
                    "Armchair",
                    "Ghế dài & đôn",
                    "Bàn bên",
                    "Bàn nước",
                    "Bàn Console",
                    "Tủ tivi",
                    "Kệ trưng bày",
                    "Tủ giày",
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="flex-row space-x-5 ml-6">
            <Link href="#" className="hover:text-amber-500 text-sm">
              BỘ SƯU TẬP
            </Link>

            <Link href="#" className="hover:text-amber-500 text-sm">
              THIẾT KẾ NỘI THẤT
            </Link>

            <Link href="#" className="hover:text-amber-500 text-sm">
              CỬA HÀNG 360 ĐỘ
            </Link>

            <Link href="#" className="hover:text-amber-500 text-sm">
              GÓC CẢM HỨNG
            </Link>
          </div>

          {/* Search */}
          <div className="absolute right-32 h-8">
            <TextField
              id="outlined-basic"
              label="Tìm sản phẩm"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        {/* Menu */}
        <Collapse in={open} orientation="horizontal">
          <Dialog
            onClose={handleClose}
            open={open}
            TransitionComponent={Transition}
            maxWidth="xl"
            fullScreen="true"
            keepMounted
            PaperProps={{
              sx: {
                position: "fixed",
                height: "100%",
                width: "26%",
                left: "0",
                top: "0",
                margin: "0",
              },
            }}
          >
            <Dropdown
              primaryHeader="Sofa và Armchair"
              items={[
                "Sofa",
                "Sofa góc",
                "Armchair",
                "Ghế dài & đôn",
                "Ghế thư giãn",
              ]}
            />
            <Dropdown
              primaryHeader="Bàn"
              items={[
                "Bàn nước",
                "Bàn ăn",
                "Bàn bên",
                "Bàn làm việc",
                "Bàn trang điểm",
              ]}
            />
            <Dropdown
              primaryHeader="Ghế"
              items={["Ghế ăn", "Ghế bar", "Ghế làm việc"]}
            />
            <Dropdown
              primaryHeader="Giường ngủ"
              items={["Giường", "Bàn đầu giường", "Nệm"]}
            />
            <Dropdown
              primaryHeader="Tủ và kệ"
              items={[
                "Tủ tivi",
                "Tủ trưng bày",
                "Tủ ly",
                "Tủ rượu",
                "Xe đẩy",
                "Tủ hộc kéo",
                "Tủ áo",
                "Tủ âm tường",
                "Tủ giày",
                "Kệ phòng khách",
              ]}
            />
            <Dropdown
              primaryHeader="Bếp"
              items={["Tủ bếp", "Phụ kiện bếp", "Đảo bếp", "Quầy bar"]}
            />
            <Dropdown
              primaryHeader="Hàng trang trí"
              items={[
                "Bình trang trí",
                "Đèn trang trí",
                "Đồ trang trí Noel",
                "Đồng hồ",
                "Dụng cụ bếp",
                "Gối và thú bông",
                "Hàng trang trí khác",
                "Hoa & cây",
                "Khung gương",
                "Khung hình",
                "Nệm",
                "Thảm",
                "Mền",
                "Tranh",
                "Tượng trang trí",
              ]}
            />
            <Dropdown
              primaryHeader="Ngoại thất"
              items={["Bàn ngoài trời", "Ghế ngoài trời"]}
            />
          </Dialog>
        </Collapse>
      </div>
    </div>
  )
}
