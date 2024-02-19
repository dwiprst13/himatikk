import React, { useState } from "react";
import DataGaleri from "../../data/DataGaleri";
import GaleriModal from "../../modals/GaleriModal";
import { Link } from "react-router-dom";

function Galeri() {
  const [selectedId, setSelectedId] = useState(null);

  const openModal = (id) => {
    setSelectedId(id);
  };

  const closeModal = () => {
    setSelectedId(null);
  };

  // Mengurutkan data gambar berdasarkan ID dari yang terbesar
  const sortedDataGaleri = DataGaleri.sort((a, b) => b.idgaleri - a.idgaleri);

  // Mengambil 4 gambar pertama dari data yang sudah diurutkan
  const limitedDataGaleri = sortedDataGaleri.slice(0, 4);

  return (
    <section className="relative h-screen w-full py-16 bg-white text-gray-900 grid items-center">
      <article data-aos="" className="w-full md:w-4/5 mx-auto">
        <h2 className="text-center text-[2rem] py-[2rem]">Galeri HIMATIK</h2>
        <div className="flex flex-wrap justify-center">
          {limitedDataGaleri.map((item) => (
            <div key={item.idgaleri} className="w-5/12 md:w-1/4 relative">
              <div className="p-1">
                <img
                  src={item.gambar}
                  alt={item.judul}
                  className="w-full h-72 object-cover rounded-lg"
                />
              </div>
              <div className="m-1 p-4 absolute bottom-0 left-0 right-0 bg-white opacity-0 hover:opacity-100 hover:bg-opacity-70 transition-opacity duration-300 space-y-2 rounded-b-lg">
                <h2 className="text-lg font-semibold text-center">
                  {item.judul}
                </h2>
                <p className="text-gray-600 text-center">{item.keterangan}</p>
                <div className="flex justify-center">
                  <button
                    className="bg-[#101424] p-[0.2rem] w-1/2 rounded-full text-white"
                    onClick={() => openModal(item.idgaleri)}
                  >
                    Lihat
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center py-[2rem]">
          <Link
            to="galeri"
            className="bg-[#101424] text-white w-fit mx-auto flex p-1 px-4 md:p-2 md:px-6 rounded-full gap-3 text-xl md:text-lg"
          >
            Selengkapnya
          </Link>
        </div>
      </article>
      <div className="absolute w-full">
        {selectedId && (
          <GaleriModal
            image={DataGaleri.find((item) => item.idgaleri === selectedId)}
            closeModal={closeModal}
          />
        )}
      </div>
    </section>
  );
}

export default Galeri;
