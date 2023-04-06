import React from "react";
import { BsVectorPen, BsArrowUpRight } from "react-icons/bs";

const CategoryCard = ({ icons, title }) => {
  return (
    <div className="category-card bg-white p-4 shadow-lg rounded-md flex items-center gap-4 justify-between border border-transparent hover:border-[#0075FD] hover:cursor-pointer group/edit">
      <div className="flex gap-4">
        {icons}
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <div className="group-hover/edit:bg-[#0075FD] rounded-lg p-3">
        <BsArrowUpRight
          size={30}
          style={{ color: "#4979d4" }}
          className="arrow-icon"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
