import React from "react";
import { avatar, quotationMark } from "../assets";

const FeedbackCard = () => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl my-8 mx-2">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img src={avatar} />
          <div>
            <h1>Jenny Wilson</h1>
            <p>UI/UX Designer</p>
          </div>
        </div>
        <img className="h-8" src={quotationMark} />
      </div>
      <div className="py-8">
        <h3 className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt autem
          beatae expedita vitae cumque molestias rerum iure doloribus recusandae
          provident? Ipsam at, minima, aliquam eaque odio fugiat illum commodi
          laborum dolores ex veniam sequi a consequuntur libero impedit.
          Corporis possimus aliquid cum voluptas quaerat!
        </h3>
      </div>
    </div>
  );
};

export default FeedbackCard;
