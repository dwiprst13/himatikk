import React from "react";
import Navbar from "../utils/navbar";
import Footer from "../utils/footer";

function ContactPage() {
  return (
    <div className="h-screen grid items-center ">
      <div className="fixed top-0 w-[100%] z-50">
        <Navbar />
      </div>
      <div className="w-10/12 grid bg-gray-300 border border-gray-700 border-b-4 border-r-4 rounded-lg mx-auto">
        <div className="p-3">
          <h3 className="text-center text-[1.7rem]">Contact Me</h3>
          <p>Want to offer something to me?</p>
          <br />
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
    </div>
  );
}

export default ContactPage;
