import React from "react";
import BlogCard from "../Card/BlogCard";

function Blog() {
    const blog =[
        {
            imageUrl:"",
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, temporibus.",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae expedita blanditiis cumque ipsum non, aut ullam debitis vitae in!",
            readMoreLink:"#",
        },
        {
            imageUrl:"",
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, temporibus.",
            description:"2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae expedita blanditiis cumque ipsum non, aut ullam debitis vitae in!",
            readMoreLink:"#",
        },
    ]
  return (
    <div className="py-20">
      <div
        data-aos="fade-up"
        className=" grid items-center z-5o pp-10 w-10/12 bg-gray-300 border border-gray-700 rounded-lg mx-auto border-b-4 border-r-4 py-10"
      >
        <div className="w-full p-3">
          <h1 className="text-center text-[1.7rem] bg-white font-bold w-3/4 mx-auto border border-gray-700 rounded-lg border-b-4 border-r-4">
            Blog
          </h1>
        </div>
        <div className="flex p-3 gap-3 ">
          {blog.map((blog, index) => (
            <BlogCard
                key={index}
                title={blog.title}
                description={blog.description}
                imageUrl={blog.imageUrl}
                readMoreLink={blog.readMoreLink}
            />
          ))}
        </div>
        <div className="grid w-2/12 mx-auto ">
          <button className="border mt-5 bg-white border-gray-900 rounded-lg text-[1rem] border-r-4 border-b-4 hover:bg-red-400 hover:border-gray-700 hover:text-white duration-500 text-center">
            More Reading...
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
