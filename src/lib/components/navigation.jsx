"use client";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import logo from "../../app/Assets/images/UPIALogo-01.svg";

import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <>
      <nav className="bg-white border-gray-200 white:bg-gray-900 fixed w-full z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={logo} alt="Logo" width={110} height={100} />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link
              href="/donate"
              className="flex w-full items-center justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Donate
            </Link>
            <Disclosure>
              {({ open }) => (
                <>
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                          />
                        </svg>
                      )}
                    </Disclosure.Button>
                  </div>
                  <Disclosure.Panel className="md:hidden">
                    <div className="space-y-1 pb-3 pt-2">
                      {/* Your mobile menu items */}
                      <Link
                        as="a"
                        href="/"
                        className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6"
                      >
                        Home
                      </Link>
                      <Link
                        as="a"
                        href="/about"
                        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                      >
                        About
                      </Link>
                      <Link
                        as="a"
                        href="/members"
                        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                      >
                        Members
                      </Link>
                      <Link
                        as="a"
                        href="/resource"
                        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                      >
                        Resources
                      </Link>
                      <Link
                        as="a"
                        href="/contact"
                        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                      >
                        Contact Us
                      </Link>
                      <Link
                        as="a"
                        href="/news"
                        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                      >
                        News
                      </Link>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          {/* Desktop Menu */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white white:bg-white-800 md:white:bg-gray-900 white:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 md:p-0 text-black  rounded md:bg-transparent md:text-black md:dark:text-black"
                  aria-current="page"
                >
                  <span className="font-bold">Home</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 md:p-0 text-black rounded hover:bg-green-100 md:hover:bg-transparent hover:text-red-700 hover:underline hover:underline-maroon-500 dark:text-black dark:hover:bg-red-700 dark:hover:text-red md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <span className="font-bold">About</span>
                </Link>
              </li>

              <li>
                <Link
                  href="members"
                  className="block py-2 px-3 md:p-0 text-black rounded hover:bg-green-100 md:hover:bg-transparent hover:text-red-700 hover:underline hover:underline-maroon-500 dark:text-black dark:hover:bg-red-700 dark:hover:text-red md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <span className="font-bold">Members</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/resource"
                  className="block py-2 px-3 md:p-0 text-black rounded hover:bg-green-100 md:hover:bg-transparent hover:text-red-700 hover:underline hover:underline-maroon-500 dark:text-black dark:hover:bg-red-700 dark:hover:text-red md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <span className="font-bold">Resources</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 md:p-0 text-black rounded hover:bg-green-100 md:hover:bg-transparent hover:text-red-700 hover:underline hover:underline-maroon-500 dark:text-black dark:hover:bg-red-700 dark:hover:text-red md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <span className="font-bold">Contact Us</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/news"
                  className="block py-2 px-3 md:p-0 text-black rounded hover:bg-green-100 md:hover:bg-transparent hover:text-red-700 hover:underline hover:underline-maroon-500 dark:text-black dark:hover:bg-red-700 dark:hover:text-red md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <span className="font-bold">News</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
