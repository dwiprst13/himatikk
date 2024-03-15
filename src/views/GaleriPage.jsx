import React, { useState } from "react";
import DataGaleri from "../data/DataGaleri";
import GaleriPageModal from "../modals/GaleriPageModal";
import { Link } from "react-router-dom";
import Header from "../component/parts/Header";
import ScrollToTop from "../utils/content/ScrollToTop";
import ContentGaleri from "../component/GaleriPage/ContentGaleri";

function GaleriPage() {
  const [selectedId, setSelectedId] = useState(null);

  const openModal = (id) => {
    setSelectedId(id);
  };

  const closeModal = () => {
    setSelectedId(null);
  };

  return (
    <div className="absolute">
      <ScrollToTop />
      <header className="fixed top-0 w-[100%] z-50 ">
        <Header enableColorChange={false} isTransparent={false} />
      </header>
      <div className="relative overflow-hidden">
        <div className="">
          {selectedId && (
            <GaleriPageModal
              image={DataGaleri.find((item) => item.idgaleri === selectedId)}
              closeModal={closeModal}
            />
          )}
        </div>
      </div>
      <section className=" h-screen w-full py-16 bg-white text-gray-900 grid items-center">
        <ContentGaleri openModal={openModal} />
      </section>
    </div>
  );
}

export default GaleriPage;
