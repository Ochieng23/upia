"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/outline";
import { PlusIcon } from "@heroicons/react/outline";
import Image from "next/image";
import logo from "../Assets/images/UPIALogo-01.svg";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <nav className="bg-white border-gray-200 white:bg-gray-900 fixed w-full z-10  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src={logo}
              //   class="h-8"
              alt="Logo"
              width={150}
              height={100}
            />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link
              href="/donate"
              type="button"
              className="flex w-full items-center justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Donate
            </Link>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
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
