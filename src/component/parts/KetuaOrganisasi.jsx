import React from "react";
import KetuaCard from "../card/KetuaCard";

function KetuaOrganisasi() {
  const bio = [
    {
      name: "Aizan Syalim",
      position: "Ketua Himatik",
      year: "2024/2025",
      imageSrc: "src/assets/images/pengurus/aizan.jpg",
      socials: [
        { name: "instagram", url: "githubmu.com" },
        { name: "github", url: "#" },
        { name: "linkedIn", url: "youtube.com" },
      ],
    },
    {
      name: "Raden Muhammad Lukman Harjito",
      position: "Wakil Ketua Himatik",
      year: "2024/2025",
      imageSrc: "src/assets/images/pengurus/lukman.jpg",
      socials: [
        { name: "instagram", url: "#" },
        { name: "github", url: "#" },
        { name: "linkedIn", url: "#" },
      ],
    },
  ];

  return (
    <article className="px-2">
      <h3 className="text-[2rem] text-center py-5">Ketua & Wakil Ketua</h3>
      <div className="w-full md:w-3/4 lg:w-7/12 mx-auto">
        <figure className="grid grid-cols-12">
          {bio.map((person, index) => (
            <div key={index} className="col-span-6 py-[2rem]">
              <KetuaCard {...person} socials={person.socials} />
            </div>
          ))}
        </figure>
      </div>
    </article>
  );
}

export default KetuaOrganisasi;
