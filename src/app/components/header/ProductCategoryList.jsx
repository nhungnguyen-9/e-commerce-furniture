import React from "react"
import Link from "next/link"
import { mockData } from "@/app/data/mock-data";

const ProductCategoryList = () => {
    const { categories } = mockData
    const rooms = categories.rooms

    return (
        <div className="flex flex-col w-fit mr-4 ml-4">
            {rooms.map(room => (
                <div key={room.slug} className="mb-3">
                    {room.category.map(product => (
                        <div key={product.slug}>
                            <Link
                                href={`/rooms/${room.slug}/products/${product.slug}`}
                                className="font-[14px] text-nowrap text-slate-500 hover:text-slate-950"
                            >
                                {product.name}
                            </Link>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ProductCategoryList
