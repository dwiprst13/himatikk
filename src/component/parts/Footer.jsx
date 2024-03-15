import React from 'react'


function Footer() {
  return (
    <footer className=" bg-[#031324] py-8 mx-auto">
        <div className=" mx-auto px-4 w-[100%] md:w-[85%] lg:w-[80%]">
            <div className="flex flex-wrap text-left lg:text-left">
                <div className="w-full lg:w-6/12 px-4 ">
                    <h4 className="text-3xl py-5 md:py-2 fonat-semibold text-center md:text-left text-white">Himpunan Mahasiswa Informatika Universitas Alma Ata</h4>
                    <h5 className="text-lg mt-0 py-5 md:py-2 text-center md:text-left text-white">Ikuti Kami di Media Sosial</h5>
                    <div className="mt-6 flex justify-center md:justify-start lg:mb-0 mb-6">
                        <button onclick="window.location.href='https://www.twitter.com'" className="bg-slate-700 text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none hover:bg-orange-300 hover:scale-105 duration-500 focus:outline-none mr-2" type="button">
                            <i className="fab fa-twitter"></i>
                        </button>
                        <button onclick="window.location.href='https://www.facebook.com/profile.php?id=100049707712124'" className="bg-slate-700 hover:bg-orange-400 hover:scale-105 duration-500 text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <i className="fab fa-facebook-square"></i>
                        </button>
                        <button onclick="window.location.href='https://wa.me/6285229992286'" className="bg-slate-700 hover:bg-orange-400 duration-500 hover:scale-105 text-green-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <i className="fab fa-whatsapp"></i>
                        </button>
                        <button onclick="window.location.href='https://www.instagram.com/prastttt13'" className="bg-slate-700 hover:bg-orange-400 hover:scale-105 duration-500 text-pink-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="flex flex-wrap h-full items-top mb-6 items-center">
                        <div className="w-full lg:w-6/12 ml-auto">
                            <p className="text-white text-center md:text-left">Jalan Brawijaya No 99, Tirtonirmolo, Kasihan, Bantul, Yogyakarta</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-blueGray-300"></hr>
            <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div className="text-sm text-white font-semibold py-1">
                        Copyright © <span id="get-current-year">2024</span>
                        <p className="text-white" target="_blank"> Himatik UAA </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer