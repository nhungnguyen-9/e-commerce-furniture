import React from "react";
import Link from "next/link";

const CategoryList = (props) => {
  return (
    <div className="flex flex-col w-fit mr-4 ml-4">
      {props.items.map((item, index) => (
        <div key={index} className="mb-3">
          <Link
            href={`#${item}`}
            className="text-xl text-nowrap text-slate-500 hover:text-slate-950"
          >
            {item}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
