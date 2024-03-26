import React from 'react'
import LivingRoom from './livingroom/livingRoom'
import Decoration from './decorations/decoration'
import Bedroom from './bedroom/bedroom'
import DiningRoom from './diningroom/diningRoom'

export default function Gallery() {
    return (
        <div className='w-full h-fit bg-about_background py-[80px] flex flex-col'>
            <div className='h-[50%] flex flex-row mb-5 justify-between tablet:flex-col tablet:w-full tablet:justify-start mobile:flex-col mobile:w-full mobile:justify-start'>
                <LivingRoom />
                <Decoration />
            </div>

            <div className='h-[50%] flex flex-row justify-between tablet:w-full tablet:flex-col tablet:justify-start mobile:w-full mobile:flex-col mobile:justify-start'>
                <Bedroom />
                <DiningRoom />
            </div>
        </div>
    )
}
