import React from "react"
import Link from "next/link"
import { mockData } from "@/app/data/mock-data";

const ProductCategoryList = () => {
    const { categories } = mockData
    const rooms = categories.rooms

    return (
        <div className="flex flex-col w-fit mr-4 ml-4">
            {rooms.map(room => (
                <div key={room._id} className="mb-3">
                    {room.categoriesProduct.map(product => (
                        <div key={product._id}>
                            <Link
                                href={`/rooms/${room._id}/products/${product._id}`}
                                className="font-[14px] text-nowrap text-slate-500 hover:text-slate-950"
                            >
                                {product.categoryProductName}
                            </Link>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ProductCategoryList
