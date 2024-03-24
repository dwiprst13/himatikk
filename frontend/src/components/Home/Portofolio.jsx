import React from "react";
import PortofolioCard from "../Card/PortofolioCard";

function Portofolio() {
      const projects = [
        {
          title: "Memulai Pemrograman dengan Kotlin",
          description: "Mempelajari dasar bahasa pemrograman, fungtional programming, object-oriented programming (OOP), serta concurrency dengan menggunakan Kotlin.",
          imgUrl: "/path/to/image3.jpg"
        },
        {
          title: "Project 1",
          description: "Lorem ipsum dolor sit amet.",
          imgUrl: "/path/to/image1.jpg",
        },
        {
          title: "Project 2",
          description: "Lorem ipsum dolor sit amet.",
          imgUrl: "/path/to/image2.jpg",
        },
      ];
  return (
    <div className="py-20">
      <div className=" grid items-center z-5o pp-10 w-10/12 bg-gray-300 border border-gray-700 rounded-lg mx-auto border-b-4 border-r-4 py-10">
        <div className="w-full p-3">
          <h1 className="text-center text-[1.7rem] bg-white font-bold w-3/4 mx-auto border border-gray-700 rounded-lg border-b-4 border-r-4">
            Portofolio
          </h1>
        </div>
        <div className="flex justify-center gap-5 p-5">
          {projects.map((project, index) => (
            <PortofolioCard
              key={index}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
            />
          ))}
        </div>
        <div className="grid w-2/12 mx-auto ">
          <button
            className="border mt-5 bg-white border-gray-900 rounded-lg text-[1rem] border-r-4 border-b-4 hover:bg-red-400 hover:border-gray-700 hover:text-white duration-500 text-center"
          >
            More...
          </button>
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
