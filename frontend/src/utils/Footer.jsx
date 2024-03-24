import React from "react";

function Footer() {
  return (
    <div className="w-10/12 grid grid-cols-12 bg-gray-300 border border-gray-700 border-b-4 border-r-4 rounded-lg mx-auto my-10">
      <div className="col-span-4 grid items-center h-full text-[2rem]">
        <h3 className="text-center">Dwi Prasetia</h3>
      </div>
      <div className="col-span-8 p-3">
        <form action="" className="space-y-3">
          <div className="flex flex-col">
            <label htmlFor="">Nama</label>
            <input
              type="text"
              placeholder="Name"
              className="p-2 rounded-lg border border-gray-700 border-b-4 border-r-4 focus:outline-none focus:border-blue-400 duration-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-lg border border-gray-700 border-b-4 border-r-4 focus:outline-none focus:border-blue-400 duration-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Messages</label>
            <textarea
              placeholder="Type Your messages"
              className="p-2 rounded-lg border border-gray-700 border-b-4 border-r-4 focus:outline-none focus:border-blue-400 duration-500"
            />
          </div>
          <button className="p-2 rounded-lg border border-gray-700 border-b-4 border-r-4 w-1/6 mx-auto bg-white">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
