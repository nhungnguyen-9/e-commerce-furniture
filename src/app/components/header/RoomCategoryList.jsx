import React from "react"
import Link from "next/link"

import { mockData } from "@/app/data/mock-data"

const RoomCategoryList = () => {
    const rooms = mockData.categories.rooms;

    return (
        <div className="flex flex-col w-fit mr-4 ml-4">
            {rooms.map(room => (
                <div key={room._id} className="mb-3">
                    <Link href={{
                        pathname: `/rooms/${room._id}`,
                        query: { id: room._id, name: room.categoryName, description: room.description, image: room.image }
                    }}
                        as={`/rooms/${room._id}`} passHref
                    >
                        <div className="font-[14px] text-nowrap text-slate-500 hover:text-slate-950">
                            {room.categoryName}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default RoomCategoryList