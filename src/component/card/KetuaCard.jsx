import React from "react";

function KetuaCard({ name, position, year, imageSrc, socials }) {
  return (
    <div>
      <div className="card relative">
        <img
          className="w-3/4 h-60 md:w-3/4 md:min-h-60 lg:w-7/12 lg:min-h-96 mx-auto rounded-md object-cover overflow-hidden"
          src={imageSrc}
          alt={position}
        />
        <div className="w-3/4 md:w-7/12 mx-auto absolute inset-0 bg-black bg-opacity-70 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-md">
          <div className="h-4/6 md:h-5/6 grid items-center">
            <div className="p-3">
              <h4 className="text-xl">{name}</h4>
            </div>
          </div>
          <div className="h-2/6 md:h-1/6 grid items-center bg-[#101424] rounded-b-md">
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
      <div className="py-5 text-center font-bold flex justify-center flex-col gap-1 md:flex-row">
        <p>{position}</p>
        <p>{year}</p>
      </div>
    </div>
  );
}

export default KetuaCard;

// test