import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/header/header'
import Footer from '@/app/components/footer/footer'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Provider from './SessionProvider'
import { CartProvider } from '@/context/CartContext'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'Nội Thất Nhà Xinh | Nội thất cao cấp | Đồ gỗ cao cấp'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="noithatnhaxinh, nhaxinh, nội thất nhà xinh, nhà xinh, beautiful-house, beautiful house, house, home, xinh nhà, xinhnha, sofa, armchair, shop, siêu thị nội thất gia đình, cung cấp nội thất cao cấp tại TPHCM, Hà Nội" />
        <meta property="og:image" content="https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710919244/nhaxinh/categories/nha-xinh-phong-khach-bride-nau-tram-2_cmnv35.jpg" />
        <meta property="og:image:secure_url" content="https://nhaxinh.com/wp-content/uploads/2023/10/noi-that-cao-cap-nha-xinh.jpg" />
        <meta property="og:image:width" content="1300" />
        <meta property="og:image:height" content="867" />
        <meta property="og:image:alt" content="Nội thất Nhà Xinh" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:description" content="Trang chủ nhaxinh noithatnhaxinh xinhnha beautifulhouse nội thất nhà xinh nhà xinh" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:site_name" content="Nội thất Nhà Xinh" />
        <meta property="og:title" content="Trang chủ" />
        <meta property="og:url" content="https://noithatnhaxinh.id.vn/" />
        <meta property="og:updated_time" content="2024-04-02T08:59:26+07:00" />
        <meta property="article:published_time" content="2013-08-06T13:13:19+00:00" />
        <meta property="article:modified_time" content="2024-04-02T01:59:26+00:00" />
        <meta property="article:author" content="https://noithatnhaxinh.id.vn/" />
        <meta property="twitter:partner" content="ogwp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710919244/nhaxinh/categories/nha-xinh-phong-khach-bride-nau-tram-2_cmnv35.jpg" />
        <meta property="twitter:title" content="Trang chủ" />
        <meta property="twitter:description" content="Trang chủ" />
        <meta property="twitter:url" content="https://nhaxinh.com/" />
        <meta itemProp="image" content="https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710919244/nhaxinh/categories/nha-xinh-phong-khach-bride-nau-tram-2_cmnv35.jpg" />
        <meta itemProp="name" content="Trang chủ" />
        <meta itemProp="headline" content="Trang chủ" />
        <meta itemProp="description" content="Trang chủ" />
        <meta itemProp="datePublished" content="2013-08-06" />
        <meta itemProp="dateModified" content="2024-04-02T01:59:26+00:00" />
        {/* <meta itemprop="author" content="admin" /> */}
        {/* <meta property="profile:first_name" content="Nguyễn" />
        <meta property="profile:last_name" content="Hoàng" />
        <meta property="profile:username" content="admin" /> */}
        <link rel="https://api.w.org/" href="https://nhaxinh.com/wp-json/" /><link rel="alternate" type="application/json" href="https://nhaxinh.com/wp-json/wp/v2/pages/97" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://nhaxinh.com/xmlrpc.php?rsd" />
        <title>Nội Thất Nhà Xinh | Nội thất cao cấp | Đồ gỗ cao cấp</title>
      </head>
      <body className={roboto.className}>
        <div className='flex flex-col min-h-screen'>
          <Provider>
            <CartProvider>
              <Header />
              <ToastContainer
                position='bottom-right'
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
                <main className='flex-grow'>{children}
                </main>
              <Footer />
            </CartProvider>
          </Provider>
        </div>
      </body>
    </html>
  )
}
