"use client";
import React from "react";
import {
  CalendarIcon,
  CreditCardIcon,
  UserIcon,
  LifebuoyIcon,
} from "@heroicons/react/outline";

function Location() {
  return (
    <div className="bg-white mb-3">
      <h1 className="text-black text-center font-extrabold text-2xl">
        Our <span className="text-red-500">Location</span>
      </h1>
      <div className="mx-auto mt-5 my-5 max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none lg:flex lg:gap-0">
        <div className="w-full lg:w-1/3">
          <div className="max-w-sm ml-2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              UPIA PARTY HQ-Nairobi{" "}
            </h5>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Opening Hours
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Mon-Friday 9:00 AM - 5:00 PM
            </p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Weekends closed
            </p>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Location
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Gem Lane, Mandera Road, Kileleshwa, Nairobi
            </p>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Contact Us
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              +254791410460
            </p>
            <a
              href="#"
              className="inline-flex font-medium items-center text-blue-600 hover:underline"
            >
              See our guideline
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-2/3 mr-2   ">
          <div style={{ marginBottom: "10px" }}>
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Gem%20Lane,%20Mandera%20Road,%20Kileleshwa,%20Nairobi,+(UPIA%20Party%20HQ)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps devices</a>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
