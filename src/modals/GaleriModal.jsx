import React, { useState, useEffect } from "react";

function GaleriModal({ image, closeModal }) {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel(zoomLevel - 0.1);
  };

  const handleCloseModal = (e) => {
    // Cek apakah yang diklik adalah latar belakang gelap, bukan modal itu sendiri
    if (e.target.id === "modalgaleri") {
      closeModal();
    }
  };

//   // Menangani scrolling di luar kotak modal untuk menutup modal
//   useEffect(() => {
//     const handleScroll = () => {
//       closeModal();
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [closeModal]);

  return (
    <div
      id="modalgaleri"
      className="w-full h-screen flex items-center bg-black bg-opacity-50"
      onClick={handleCloseModal}
    >
      <div className="relative md:h-96 flex flex-wrap w-5/6 md:w-3/5 mx-auto bg-gray-200 rounded-lg">
        <div className="h-full md:grid md:grid-cols-12">
          <figure className="relative col-span-8 bg-black rounded-t-lg md:rounded-l-lg overflow-scroll">
            <img
              src={image.gambar}
              alt={image.judul}
              className="h-96 mx-auto object-contain rounded-lg"
              style={{
                objectFit: "cover",
                transform: `scale(${zoomLevel})`,
                transition: "transform 0.3s ease-in-out",
              }}
            />
            <div className="absolute bottom-0 w-full flex justify-end rounded-lg ">
              <div className="flex flex-col p-2 gap-2">
                <button
                  onClick={handleZoomIn}
                  className="bg-gray-400 p-2 rounded-lg"
                >
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
                <button
                  onClick={handleZoomOut}
                  className="bg-gray-400 p-2 rounded-lg"
                >
                  <i class="fa fa-minus" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </figure>
          <figcaption className="col-span-4 p-5 text-center flex items-center">
            <caption>
              <h3 className="text-[1.5rem]">{image.judul}</h3>
              <p>{image.keterangan}</p>
            </caption>
          </figcaption>
        </div>
        <div className="absolute top-0 right-0 m-4 text-white text-[1.2rem]">
          <button onClick={closeModal}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GaleriModal;
