import { React, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./../Footer/Footer";
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/Services" },
  { name: "Contact", href: "/contact" },
  { name: "Testimoni", href: "/testimoni" },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <nav className="bg-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-20 w-20"
                    src="ites.png"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="font-medium text-white hover:text-cyan-300 delay-150 duration-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <a href="./Login">
                <div className="flex flex-row-reverse">
                  <button
                    type="button"
                    className="py-2 px-4 bg-indigo-500 hover:bg-cyan-500 focus:ring-green-300 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg shadow-fuchsia-400"
                  >
                    Login / Register
                  </button>
                </div>
              </a>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </Transition>
        </nav>

        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}
            <div className="px-4 py-6 sm:px-0">
              <Outlet />
            </div>
            {/* <!-- /End replace --> */}
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
};
export default Navbar;
