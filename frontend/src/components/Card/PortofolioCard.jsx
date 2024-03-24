import React from "react";

function PortofolioCard({ title, description, imgUrl }) {
  return (
    <button className="w-4/12 grid grid-cols-8 bg-white h-48 border border-gray-700 rounded-lg border-b-4 border-r-4 p-1 gap-1">
      <div className="col-span-3 bg-gray-400 rounded-lg h-full">
        <img src={imgUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="col-span-5">
        <h3 className="text-center font-bold text-[1.3rem] line-clamp-2">{title}</h3>
        <p className="line-clamp-4">{description}</p>
      </div>
    </button>
  );
}

export default PortofolioCard;
