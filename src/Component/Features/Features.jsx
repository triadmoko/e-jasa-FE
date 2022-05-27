import React from "react";

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mb-10">
      <p class="text-center text-3xl font-bold text-gray-800 dark:text-white">
        Service ITes
      </p>
      <p class="text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-200">
        Apa saja layanan dari ITes
      </p>
      <div class="sm:flex flex-wrap justify-center items-center text-center gap-8">
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
          <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
             <a href="./#">
              <svg
                width="30"
                height="30"
                fill="currentColor"
                class="text-xl hover:text-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/1999/xlink"
                >
                  <path d="M21.71 20.29L20.29 21.71A1 1 0 0 1 18.88 21.71L7 9.85A3.81 3.81 0 0 1 6 10A4 4 0 0 1 2.22 4.7L4.76 7.24L5.29 6.71L6.71 5.29L7.24 4.76L4.7 2.22A4 4 0 0 1 10 6A3.81 3.81 0 0 1 9.85 7L21.71 18.88A1 1 0 0 1 21.71 20.29M2.29 18.88A1 1 0 0 0 2.29 20.29L3.71 21.71A1 1 0 0 0 5.12 21.71L10.59 16.25L7.76 13.42M20 2L16 4V6L13.83 8.17L15.83 10.17L18 8H20L22 4Z"></path>
              </svg>
              </a>
            </div>
          </div>
          <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            Jasa Perbaikan
          </h3>
          <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
            Menerima Perbaikan Laptop dan Komputer anda disini.
          </p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
          <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <a href="./#">
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="text-xl hover:text-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/1999/xlink"
                  >
                    <path d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z"></path>
                  </svg>
                </a>
            </div>
          </div>
          <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            Jasa Desain
          </h3>
          <p class="text-md text-gray-500 dark:text-gray-300 py-4">
            Menerima Permintaan Desain Spanduk, Banner dan lainnya.
          </p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
          <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <a href="./#">
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="text-xl hover:text-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/1999/xlink"
                  >
                    <path d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"></path>
                  </svg>
              </a>
            </div>
          </div>
          <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            Jasa Fotografi & Videografi
          </h3>
          <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
            Menerima Permintaan Fotografi dan Videografi.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Features;
