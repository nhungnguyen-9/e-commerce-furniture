import React from "react"
import Link from "next/link"

import { mockData } from "@/app/data/mock-data"

const RoomCategoryList = () => {
    const rooms = mockData.categories.rooms;

    return (
        <div className="flex flex-col w-fit mr-4 ml-4">
            {rooms.map(room => (
                <div key={room.slug} className="mb-3">
                    <Link href={{
                        pathname: `/rooms/${room.slug}`,
                        query: { slug: room.slug, name: room.name, image: room.image }
                    }}>
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