"use client";
import React from "react";
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

import vision from "../Assets/images/vision.jpg";
import mission from "../Assets/images/mission.jpg";
import equity from "../Assets/images/equity.jpg";
import Image from "next/image";


const cards = [
  {
    name: "IDEOLOGY",
    description:
      "The party aims to establish political stability, advance economic empowerment, create social justice, and ensure equitable resource sharing for all.",
    image: mission,
    icon: <LifebuoyIcon className="w-6 h-6" />,
  },
  {
    name: "VISION",
    description:
      "To have a country that is united, prosperous, and sustainably developed with equal opportunities for all Kenyans to develop their potential and be free from poverty.",
    image: vision,
    icon: <NewspaperIcon className="w-6 h-6" />,
  },
  {
    name: "MISSION",
    description:
      "To identify and build capacity for all Kenyans to realize and exercise their political, social, economic, and cultural rights and fundamental freedoms enshrined in the constitution.",
    image: equity,
    icon: <LifebuoyIcon className="w-6 h-6" />,
  },
];

export default function AboutHome() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-5 sm:py-15 h-50">
      <h2 className="text-1xl text-center font-bold tracking-tight text-black sm:text-4xl">
        <span className="text-red-500">Pillars</span> of{" "}
        <span className="text-green-600">UPIA</span>
      </h2>
      <div className="mx-auto max-w-7xl px-4 lg:px-5">
        <div className="flex justify-center">
          <div className="max-w-2xl lg:mx-0 text-center"></div>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="p-4 max-w-sm bg-white-300 border border-white-200 rounded-lg shadow dark:bg-white-300 dark:border-white-700 "
            >
              <a href="#">
                <Image
                  className="rounded-t-lg transition-transform hover:scale-105"
                  src={card.image}
                  alt="img"
                  width={200}
                  layout="responsive"
                />
              </a>

              <div className="text-base leading-7">
                <h3 className="flex items-center mt-2 text-green-600 text-2xl font-bold tracking-tight dark:text-green-600">
                  <div className="mr-2">{card.icon}</div>
                  {card.name}
                </h3>
                <p className="mt-2 text-black">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
