import LeftSideBar from '@/app/components/admin/layout/LeftSideBar'
import TopBar from '@/app/components/admin/layout/TopBar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const Layout = ({ children }) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className='h-screen flex max-lg:flex-col text-grey-1'>
                    <LeftSideBar />
                    <TopBar />
                    <div className='flex-1'>{children}</div>
                </div>
            </body>
        </html>
    )
}

export default Layout