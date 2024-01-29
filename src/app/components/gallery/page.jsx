import React from 'react'
import LivingRoom from './livingroom/livingRoom'
import Decoration from './decorations/decoration'
import Bedroom from './bedroom/bedroom'
import DiningRoom from './diningroom/diningRoom'

export default function Gallery() {
    return (
        <div>
            <LivingRoom />
            <Decoration />
            <Bedroom />
            <DiningRoom />
        </div>
    )
}
