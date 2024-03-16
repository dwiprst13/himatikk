import React, { useState, useEffect } from "react";

function GaleriPageModal({ image, closeModal }) {
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
      <div className="relative mt-20 flex justify-center items-center w-5/6 md:w-3/5 mx-auto bg-gray-200 rounded-lg">
        <div className="flex justify-center items-center h-full w-full bg-black rounded-lg">
          <img
            src={image.gambar}
            alt={image.judul}
            className="max-w-10/12 max-h-[50vh] md:max-w-[700px] md:max-h-[575px] mx-auto object-contain object-center rounded-lg no-scroll-bar"
            style={{
              objectFit: "cover",
              transform: `scale(${zoomLevel})`,
              transition: "transform 0.3s ease-in-out",
            }}
          />
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

export default GaleriPageModal;
