"use client";
import Image from "next/image";
import Hero from "./components/hero";
import AboutHome from "./components/about";
import Location from "./components/location";
import Leadership from "./components/leadership";
import Blog from "./components/blog";
export default function Home() {
  return (
    <main className=" min-h-screen bg-gray-400 ">
      <Hero />
      <AboutHome />
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
      </div>
      <Leadership />
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
      </div>
      <Blog />

      <Location />
    </main>
  );
}
