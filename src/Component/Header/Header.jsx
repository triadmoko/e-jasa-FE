import React from "react";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
        <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block  animate__animated animate__fadeIn animate__delay-0.5s">ITes Service</span>
          </h2>
          <p className="text-md mt-4 text-gray-400 animate__animated animate__fadeIn animate__delay-1s">
            ITes merupakan salah satu wirausaha mahasiswa PTIK sebagai penyedia
            jasa Perbaikan, Multimedia dan solusi dari permasalahan IT anda.
            Kami melayani anda dengan senang hati, ITes akan menjadi solusi
            terbaik untuk anda.
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow-lg shadow-fuchsia-500/50 animate__animated animate__slideInLeft">
              <button
                type="button"
                className="w-full flex item-center justify-center px-8 py-3 border border-transparent text-base font-mono italic rounded-md text-white bg-indigo-400 hover:bg-blue-800 md:py-1 md:text-lg md:px-1 hover:translate-y-1 outline-dashed duration-150 outline-2 outline-fuchsia-500">
                  <span class="flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-600 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-full w-full bg-sky-500"></span>
                  </span>
                Get Service
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 p-8 lg:p-24">
          <img
            src="https://cdn.pixabay.com/photo/2014/08/26/21/27/service-428540__340.jpg"
            className="rounded-lg w-1/2 hover:scale-150 transition duration-150 shadow-lg shadow-black animate__animated animate__zoomIn animate__fast"
            alt="Tree"
          />
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849826__340.jpg"
              className="rounded-lg mb-8 hover:scale-150 transition duration-150 shadow-lg shadow-amber-700  animate__animated animate__zoomIn animate__slow"
              alt="Tree"
            />
            <img
              src="https://cdn.pixabay.com/photo/2019/11/11/01/43/camera-4616982__340.jpg"
              className="rounded-lg hover:scale-150 duration-150 transition shadow-lg shadow-lime-700 animate__animated animate__zoomIn animate__delay-0.5s"
              alt="Tree"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
