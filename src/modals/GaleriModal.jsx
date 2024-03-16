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
    if (e.target.id === "modalgaleri") {
      closeModal();
    }
  };

  return (
    <div
      id="modalgaleri"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40 overflow-y-auto"
      onClick={handleCloseModal}
    >
      <div className="relative mt-20 flex flex-wrap w-5/6 md:w-3/5 mx-auto bg-gray-200 rounded-lg">
        <div className="h-full md:grid md:grid-cols-12">
          <div className="relative col-span-8 rounded-t-lg md:rounded-l-lg">
            <figure className=" bg-black overflow-scroll rounded-lg cursor-all-scroll no-scroll-bar">
              <img
                src={image.gambar}
                alt={image.judul}
                className="max-w-10/12 max-h-[50vh] md:max-w-[700px] md:max-h-[575px] mx-auto object-contain rounded-lg no-scroll-bar"
                style={{
                  objectFit: "cover",
                  transform: `scale(${zoomLevel})`,
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </figure>
            <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 w-full flex justify-end rounded-lg">
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
          </div>
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
