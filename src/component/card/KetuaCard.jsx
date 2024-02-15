import React from "react";

function KetuaCard({ name, position, year, imageSrc, socials }) {
  return (
    <div className="card relative">
      <img className="w-3/4 mx-auto rounded-md" src={imageSrc} alt={position} />
      <div className="w-3/4 mx-auto absolute inset-0 bg-black bg-opacity-70 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-md">
        <div className="h-5/6 grid items-center">
          <div className="p-3">
            <h4 className="text-xl">{name}</h4>
            <p>{position}</p>
            <p>{year}</p>
          </div>
        </div>
        <div className="h-1/6 grid items-center bg-[#101424] rounded-b-md">
          <div className="">
            {socials.map((social, index) => (
              <a
                className="text-2xl px-3"
                target="_blank"
                key={index}
                href={social.url}
              >
                <i
                  className={`fa fa-${social.name.toLowerCase()}`}
                  aria-hidden="true"
                ></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KetuaCard;
