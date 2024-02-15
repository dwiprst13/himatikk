// Content.jsx
import React, { useRef } from "react";
import Banner from "../component/Content/Banner";
import Sejarah from "../component/Content/Sejarah";
import ListGaleri from "../component/Content/ListGaleri";
import ListDokumentasi from "../component/Content/listDokumentasi";
import VisiMisi from "../component/Content/VisiMisi";
import StrukturOrganisasi from "../component/Content/StrukturOrganisasi";

function Content() {
  const sejarahRef = useRef(null);

  const handleScrollToSejarah = () => {
    sejarahRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="w-full">
      <section
        id="banner"
        className="bg-[url('src/assets/hero.png')] bg-cover h-screen w-full flex items-center bg-fixed"
      >
        <div className="absolute w-full">
          <Banner scrollToSejarah={handleScrollToSejarah} />
        </div>
      </section>
      <section
        id="sejarah"
        ref={sejarahRef}
        className="bg-[url('src/assets/mahasiswa.jpg')] bg-cover h-screen w-full flex items-center bg-fixed"
      >
        <div className="">
          <Sejarah />
        </div>
      </section>
        <section id="visimisi" className="h-screen w-full">
          <div className="">
            <VisiMisi />
          </div>
        </section>
        <section id="struktur" className=" w-full">
          <div className="">
            <StrukturOrganisasi />
          </div>
        </section>

      <section id="galeri" className="h-screen w-full items-center bg-fixed">
        <ListGaleri />
      </section>
      <section
        id="dokumentasi"
        className="h-screen w-full items-center bg-fixed"
      >
        <ListDokumentasi />
      </section>
      <section id="blog" className="h-screen w-full items-center bg-fixed">
        <p>Blog</p>
      </section>
      <section id="kontak" className="h-screen w-full items-center bg-fixed">
        <p>Kontak</p>
      </section>
      <section className="h-screen bg-blue-500 w-full">
        <p>fafaafafa</p>
      </section>
    </main>
  );
}

export default Content;
