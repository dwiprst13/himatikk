import React from "react";

function BlogCard({ imageUrl, title, description, readMoreLink }) {
  return (
    <div className="w-5/12 h-48 mx-auto grid grid-cols-12 border border-gray-900 rounded-lg p-2 gap-3 border-r-4 border-b-4 bg-white">
      <div className="col-span-5">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="col-span-7 bg-white rounded-r-lg">
        <h4 className="line-clamp-2 font-bold text-[1.3rem]">{title}</h4>
        <p className="line-clamp-4 text-[0.9rem]">{description}</p>
        <a href={readMoreLink} className="text-blue-500">
          More...
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
