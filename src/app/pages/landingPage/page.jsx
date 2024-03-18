import Category from '@/app/(routes)/categories/category'
import Gallery from '@/app/components/gallery/page'
import MoreInfo from '@/app/components/moreInfo'
import React from 'react'
import Blogs from '../../components/Blogs/page'
import Support from '../Support/Support'
import Location from '../../components/location/page'
import Search from '@/app/components/search'
import NewProduct from '@/app/components/newProduct/page'

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
