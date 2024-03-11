import React from 'react'
import LivingRoom from './livingroom/livingRoom'
import Decoration from './decorations/decoration'
import Bedroom from './bedroom/bedroom'
import DiningRoom from './diningroom/diningRoom'

export default function Gallery() {
    return (
        <div className='w-full h-fit bg-about_background py-[80px] flex flex-col'>
            <div className='h-[50%] flex flex-row mb-5 small:flex-col small:m-0 small:p-0'>
                <LivingRoom />
                <Decoration />
            </div>
            <div className='h-[50%] flex flex-row small:flex-col small:m-0 small:p-0'>
                <Bedroom />
                <DiningRoom />
            </div>
        </div>
    )
}
