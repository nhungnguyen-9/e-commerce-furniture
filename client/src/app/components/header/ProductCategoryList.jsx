import React from "react";
import Link from "next/link";

const ProductCategoryList = () => {
  const rooms = [
    { id: 'livingroom', name: 'Phòng khách' },
    { id: 'bedroom', name: 'Phòng ăn' },
    { id: 'diningroom', name: 'Phòng ngủ'},
    { id: 'workroom', name: 'Phòng làm việc'}
  ];

  return (
    <div className="flex flex-col w-fit mr-4 ml-4">
      {rooms.map(room => (
        <div key={room.id} className="mb-3">
          <Link
            href={`/rooms/${room.id}`}
            className="font-[14px] text-nowrap text-slate-500 hover:text-slate-950"
          >
            {room.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductCategoryList;
