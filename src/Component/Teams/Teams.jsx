import React from "react";
import 'animate.css';

const Teams = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 bg-dark-800 dark:bg-gray-800 rounded-lg shadow will-change-transform animate__animated animate__fadeInUp animate__delay-2s">
          <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">
            Profil Pengurus ITes
          </p>
          <p className="text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-200">
            Kenalan dengan Pengurus ITes
          </p>
          <div className="flex items-center flex-col md:flex-row justify evenly">
            <div className="p-4">
              <div className="text-center mb-4 opacity-90">
                <a href="./#" className="block relative">
                  <img
                    alt="profil"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    className="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                  Rani Sulastri
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                  Bendahara
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                  Patrick Sébastien, born November 14, 1953 in
                  Brive-la-Gaillarde, is an imitator.
                </p>
              </div>
              <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
                <a href="./#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl hover:text-blue-700 dark:hover:text-white transition-colors duration-200"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                  </svg>
                </a>
                <a href="./#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl hover:text-cyan-500 dark:hover:text-white transition-colors duration-200"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                  </svg>
                </a>
                <a href="./#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl hover:text-pink-400 dark:hover:text-white transition-colors duration-200"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/1999/xlink"
                  >
                    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path>
                  </svg>
                </a>
                <a href="./#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl hover:text-green-400 dark:hover:text-white transition-colors duration-200"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/1999/xlink"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4">
              <div className="text-center mb-4 opacity-90">
                <a href="./#" className="block relative">
                  <img
                    alt="profil"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    className="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                  Indra Saputra
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                  Ketua Pimpinan
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                  Jean Castux is an imitator, humorist, actor, born November 14,
                  1953 in Pontivy.
                </p>
              </div>
              <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
                <a href="./#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl hover:text-blue-700 dark:hover:text-white transition-colors duration-200"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                  </svg>
                </a>
                <a href="./#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl hover:text-cyan-500 dark:hover:text-white transition-colors duration-200"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                  </svg>
                </a>
                <a href="./#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl hover:text-pink-400 dark:hover:text-white transition-colors duration-200"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/1999/xlink"
                  >
                    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path>
                  </svg>
                </a>
                <a href="./#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl hover:text-green-400 dark:hover:text-white transition-colors duration-200"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/1999/xlink"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4">
              <div className="text-center mb-4 opacity-90">
                <a href="./#" className="block relative">
                  <img
                    alt="profil"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    className="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                  Adam Putra Nanda Gultom
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                  Manager
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                  Thierry Halliday, born November 4, 1993 in Saint hilaire de
                  riez, is css specialist.
                </p>
              </div>
              <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
                <a href="./#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl hover:text-blue-700 dark:hover:text-white transition-colors duration-200"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                  </svg>
                </a>
                <a href="./#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl hover:text-cyan-500 dark:hover:text-white transition-colors duration-200"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                  </svg>
                </a>
                <a href="./#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl hover:text-pink-400 dark:hover:text-white transition-colors duration-200"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/1999/xlink"
                  >
                    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path>
                  </svg>
                </a>
                <a href="./#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl hover:text-green-400 dark:hover:text-white transition-colors duration-200"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/1999/xlink"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
