import Category from '@/app/(routes)/categories/category'
import Gallery from '@/app/components/gallery/page'
import MoreInfo from '@/app/components/moreInfo'
import Shop360 from '@/app/components/shop360'
import React from 'react'
import NewProduct from '../../(routes)/shop/page'
import Blogs from '../../components/Blogs/page'
import Support from '../Support/Support'
import Location from '../../components/location/page'
import Search from '@/app/components/search'

export default function LandingPage() {
    return (
        <div className=''>
            <Category />
            <Search />
            <Gallery />
            <MoreInfo />
            <NewProduct />
            <Blogs />
            <Support />
            <Location />
        </div>
    )
}
