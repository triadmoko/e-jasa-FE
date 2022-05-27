import React from "react";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
        <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">ITes Service</span>
          </h2>
          <p className="text-md mt-4 text-gray-400">
            ITes merupakan salah satu wirausaha mahasiswa PTIK sebagai penyedia
            jasa Perbaikan, Multimedia dan solusi dari permasalahan IT anda.
            Kami melayani anda dengan senang hati, ITes akan menjadi solusi
            terbaik untuk anda.
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-2 px-4  bg-indigo-500 hover:bg-cyan-500 focus:ring-green-300 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Get Service
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 p-8 lg:p-24">
          <img
            src="https://cdn.pixabay.com/photo/2014/08/26/21/27/service-428540__340.jpg"
            className="rounded-lg w-1/2 hover:scale-150 transition"
            alt="Tree"
          />
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849826__340.jpg"
              className="rounded-lg mb-8 hover:scale-150 transition"
              alt="Tree"
            />
            <img
              src="https://cdn.pixabay.com/photo/2019/11/11/01/43/camera-4616982__340.jpg"
              className="rounded-lg hover:scale-150 transition"
              alt="Tree"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
