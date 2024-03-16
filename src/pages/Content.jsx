import React, { useRef, useState } from "react";
import Banner from "../component/Content/Banner";
import Sejarah from "../component/Content/Sejarah";
import ListGaleri from "../component/Content/ListGaleri";
import VisiMisi from "../component/Content/VisiMisi";
import StrukturOrganisasi from "../component/Content/StrukturOrganisasi";
import GaleriPageModal from "../modals/GaleriPageModal";
import DataGaleri from "../data/DataGaleri"; 
import Footer from "../component/parts/Footer";

function Content() {
  const sejarahRef = useRef(null);
  const [selectedId, setSelectedId] = useState(null);

  const handleScrollToSejarah = () => {
    sejarahRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const openModal = (id) => {
    setSelectedId(id);
  };

  const closeModal = () => {
    setSelectedId(null);
  };

  return (
    <main id="" className="absolute">
      <section
        id="banner"
        className="bg-[url('/src/hero.png')] bg-cover h-screen w-full flex items-center bg-fixed"
      >
        <div></div>
        <div className="absolute w-full">
          <Banner scrollToSejarah={handleScrollToSejarah} />
        </div>
      </section>
      <section
        id="sejarah"
        ref={sejarahRef}
        className="bg-[url('/src/mahasiswa.jpg')] bg-cover h-[75vh] md:h-[100vh] w-full flex items-center bg-fixed"
      >
        <div className="">
          <Sejarah />
        </div>
      </section>
      <section id="visimisi" className="min-h-screen w-full">
        <div className="">
          <VisiMisi />
        </div>
      </section>
      <section id="struktur" className=" w-full">
        <div className="">
          <StrukturOrganisasi />
        </div>
      </section>
      <div className="relative overflow-hidden">
        <div>
          {selectedId && (
            <GaleriPageModal
              image={DataGaleri.find((item) => item.idgaleri === selectedId)}
              closeModal={closeModal}
            />
          )}
        </div>
      </div>
      <section id="galeri" className="h-screen w-full items-center bg-fixed">
        <ListGaleri openModal={openModal} /> {/* Meneruskan prop openModal */}
      </section>
      <section id="blog" className="h-screen w-full items-center bg-fixed">
        <p>Blog</p>
      </section>
      <section id="kontak" className="h-screen w-full items-center bg-fixed">
        <p>Kontak</p>
      </section>
      <footer>
        <Footer/>
      </footer>
    </main>
  );
}

export default Content;
