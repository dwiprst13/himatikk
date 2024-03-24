import React from "react";

// Menambahkan props untuk isOpen dan onClose
function ProfileModals({ isOpen, onClose }) {
  // Jika modal tidak dalam keadaan "open", maka tidak render apa-apa
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="w-7/12 mx-auto bg-white border border-gray-900 border-b-4 border-r-4 rounded-lg p-7">
        <div className="relative w-full flex justify-end">
          {/* Menambahkan event handler onClick untuk menjalankan fungsi onClose */}
          <button
            className="absolute top-0 right-0 mt-4 mr-4 hover:text-red-600"
            onClick={onClose}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>

        <h2 className="text-center text-[1.5rem] font-bold">My Short Bio</h2>
        <br />
        <p>Hi, you want to know about me?</p>
        <p>Here it is</p>
        <br />
        <table>
          <tr className="">
            <td>Name</td>
            <td className="px-2">:</td>
            <td>Dwi Prasetia</td>
          </tr>
          <tr>
            <td>Birth Year</td>
            <td className="px-2">:</td>
            <td>2001</td>
          </tr>
          <tr>
            <td>Address</td>
            <td className="px-2">:</td>
            <td>Kulon Progo, Yogyakarta</td>
          </tr>
          <tr>
            <td>Hobby</td>
            <td className="px-2">:</td>
            <td>Laying on bed XD</td>
          </tr>
        </table>
        <br />
        <p>
          I'm a 2nd year undergraduated of Informatic Student at Alma Ata
          University.
        </p>
        <p>
          I'm interested on Native Android Development, I've been learning about
          kotlin about 1 year ago, but my skill still stuck.
        </p>
        <p>
          I'm currently looking for partner or free mentor to teach me all about
          Kotlin Programming
        </p>
        <br />
        <br />
        <div className="text-center">
          <p>I'm make this website just for testing my web development skill</p>
          <p>Build with MERN stack and tailwind css</p>
          <p>#Keep it's Simple Stupid</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileModals;
