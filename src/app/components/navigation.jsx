"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import logo from "../Assets/images/UPIALogo-01.svg";
import Link from "next/link";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <button
              onClick={() => {
                console.log("Menu button clicked!");
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              type="button"
              className="bg-red-700 inline-flex items-center  p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            >
              {!mobileMenuOpen ? (
                // Menu icon (Hamburger)
                <svg
                  data-slot="icon"
                  fill="none"
                  stroke-width="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>
              ) : (
                // Close icon (X)
                <svg
                  data-slot="icon"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden w-full z-12 ${
              mobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-white-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white white:bg-white-800 md:white:bg-gray-900 white:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 md:p-0 text-black rounded md:bg-transparent md:text-black md:dark:text-black"
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

          {/* Desktop Menu */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white white:bg-white-800 md:white:bg-gray-900 white:border-gray-700">
              {/* Menu Items */}
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 md:p-0 text-black  rounded md:bg-transparent md:text-black md:dark:text-black"
                  aria-current="page"
                >
                  <span className="font-bold">Home</span>
                </Link>
              </li>
              {/* Add other menu items here */}
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
