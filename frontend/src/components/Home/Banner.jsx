import React, { useState } from "react";
import ProfileModals from "../../modals/ProfileModals";

function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <div className="absolute w-full">
        <ProfileModals isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
      <div
        data-aos="fade-up"
        className="h-screen grid grid-cols-12 items-center z-50 p-10 w-10/12 mx-auto"
      >
        <div className="col-span-6 mx-auto border border-gray-700 rounded-lg border-r-4 border-b-4 hover:border-r-2 hover:border-b-2 hover:bg-gray-500 duration-500">
          <img
            src="../../public/bio/dwiprast.png"
            alt=""
            className="h-96 object-contain px-8 "
          />
        </div>
        <div className="col-span-6 space-y-2 py-12 text-gray-700">
          <h1 className=" bg-white mx-auto border border-gray-900 rounded-lg text-center text-[4rem] font-bold p-5 border-r-4 border-b-4 hover:bg-gray-300 hover:text-black duration-500">
            DWI PRASETIA
          </h1>
          <div className="mx-auto">
            <div className="w-full flex justify-end z-30">
              <p className="bg-red-700 w-auto px-2 border border-gray-900 border-b-0 mr-10 text-white rounded-t-lg blink-text">
                Click for More Info...
              </p>
            </div>
            <button
              id="profileButton"
              className="w-full bg-white border border-gray-900 rounded-lg text-center text-[1.1rem] p-5 border-r-4 border-b-4 hover:bg-gray-300 duration-500"
              onClick={handleOpenModal} // Menambahkan event handler untuk membuka modal
            >
              <p>
                2nd Year Undergraduate Informatic Student at Alma Ata University
              </p>
              <p>Beginner as Android Development and Web Development</p>
            </button>
          </div>
          <div className="grid w-3/12 mx-auto ">
            <a
              href="/cv.pdf"
              download="cv.pdf"
              className="border mt-5 bg-white border-gray-900 rounded-lg text-[1rem] border-r-4 border-b-4 hover:bg-red-400 hover:border-gray-700 hover:text-white duration-500 text-center"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
