import React from 'react'

function VisiMisi() {
  return (
    <section className="min-h-screen w-full py-16 bg-white text-gray-900 grid items-center">
      <article data-aos="fade-up" className="w-[85%] mx-auto">
        <h2 className="text-[2rem] text-center py-5">Visi & Misi</h2>
        <div className="flex flex-col md:grid md:grid-cols-12 gap-5">
          <div className="col-span-6  w-5/6 mx-auto text-justify visi px-3">
            <h3 className="text-[1.5rem] text-center py-3 font-bold">Visi</h3>
            <p className="text-justify">
              HIMATIK sebagai wadah untuk mengembangkan potensi mahasiswa di
              bidang teknologi informasi berlandaskan nilai nilai dan kebangsaan
              Indonesia.
            </p>
          </div>
          <div className="col-span-6 w-5/6 mx-auto text-justify px-3">
            <h3 className="text-[1.5rem]  text-center py-3 font-bold">Misi</h3>
            <div className="grid grid-cols-12 py-1">
              <div className="col-span-1 text-center">
                <span class="material-symbols-outlined">chevron_right</span>
              </div>
              <p className="col-span-11">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                dolorum fuga doloribus quam iste quaerat, magni harum dolore,
                labore voluptas, explicabo inventore veniam dolor aperiam totam
                dicta ipsum ex odit?
              </p>
            </div>
            <div className="grid grid-cols-12 py-1">
              <div className="col-span-1 text-center">
                <span class="material-symbols-outlined">chevron_right</span>
              </div>
              <p className="col-span-11">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                dolorum fuga doloribus quam iste quaerat, magni harum dolore,
                labore voluptas, explicabo inventore veniam dolor aperiam totam
                dicta ipsum ex odit?
              </p>
            </div>
            <div className="grid grid-cols-12 py-1">
              <div className="col-span-1 text-center">
                <span class="material-symbols-outlined">chevron_right</span>
              </div>
              <p className="col-span-11">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                dolorum fuga doloribus quam iste quaerat, magni harum dolore,
                labore voluptas, explicabo inventore veniam dolor aperiam totam
                dicta ipsum ex odit?
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default VisiMisi