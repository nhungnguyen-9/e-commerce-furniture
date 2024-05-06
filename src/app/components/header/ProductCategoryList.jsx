// React Component
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { getAllRooms } from "@/backend/services/admin/room";

const ProductCategoryList = () => {
    const [rooms, setRooms] = useState([])

    const getRooms = async () => {
        try {
            const res = await getAllRooms()
            setRooms(res)
        } catch (error) {
            console.log('🚀 ~ getRooms ~ error:', error)
        }
    }

    useEffect(() => {
        getRooms()
    }, [])

    return (
        <div className="grid grid-cols-7 w-fit mx-auto">
            {rooms.map(room => (
                <div key={room.slug} className="mb-3 mx-auto">
                    <ul className="ml-5">
                        {room.category.map(category => (
                            <li key={category.slug} className="my-4">
                                <Link
                                    href={`/danh-muc/${room.slug}/${category.slug}`}
                                    className="text-[16px] text-nowrap text-slate-500 hover:text-slate-950"
                                >
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ProductCategoryList
