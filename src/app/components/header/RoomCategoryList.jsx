import React, { useEffect, useState } from "react"
import Link from "next/link"
import { getAllRooms } from "@/backend/services/admin/room";

const RoomCategoryList = () => {
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
        <div className="flex flex-col w-fit mr-4 ml-4">
            {rooms.map(room => (
                <div key={room.slug} className="mb-3">
                    <Link
                        href={`/rooms/${room.slug}`}
                    >
                        <div className="font-[14px] text-nowrap text-slate-500 hover:text-slate-950">
                            {room.name}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default RoomCategoryList