import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/header/header'
import Footer from '@/app/components/footer/footer'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Provider from './SessionProvider'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'Nội Thất Nhà Xinh | Nội thất cao cấp | Đồ gỗ cao cấp'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className='flex flex-col min-h-screen'>
          <Provider>
            <Header />
            <ToastContainer
              position='bottom-right'
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <main className='flex-grow'>{children}</main>
            <Footer />
          </Provider>
        </div>
      </body>
    </html>
  )
}
