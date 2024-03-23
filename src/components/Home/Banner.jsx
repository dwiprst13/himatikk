import React from "react";

function Banner() {
  return (
    <div className="h-screen w-full grid grid-cols-12 items-center bg-slate-100">
      <div className="col-span-5 mx-auto bg-cover">
        <img
          src="../../public/bio/dwiprast.png"
          alt=""
          className=" border border-gray-700 rounded-lg border-r-4 border-b-4 max-h-96 px-8 bg-white"
        />
      </div>
      <div className="col-span-7 space-y-2 py-12 text-gray-700">
        <h1 className="w-3/4 bg-white mx-auto border border-gray-900 rounded-lg text-center text-[4.4rem] font-bold p-5 border-r-4 border-b-4 hover:bg-gray-300 hover:text-black duration-500">
          DWI PRASETIA
        </h1>
        <div className="mx-auto w-3/4">
          <div className="w-full flex justify-end">
            <p className="bg-blue-700 w-auto px-2 border border-gray-900 border-b-0 mr-10 text-white rounded-t-lg blink-text">
              Click for More Info...
            </p>
          </div>

          <button className="w-full bg-white border border-gray-900 rounded-lg text-center text-[1.1rem] p-5 border-r-4 border-b-4 hover:bg-gray-300 duration-500">
            <p>
              2nd Year Undergraduate Informatic Student at Alma Ata University
            </p>
            <p>Beginner as Android Development and Web Development</p>
          </button>
        </div>
        <div className="grid w-2/12 mx-auto">
          <button className="border bg-white border-gray-900 rounded-lg text-[1rem] border-r-4 border-b-4 hover:bg-red-400 hover:border-gray-700 hover:text-white duration-500">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
