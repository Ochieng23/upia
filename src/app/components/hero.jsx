import React from "react";
import hero from "../Assets/images/hero.jpg";
import useDimensions from 'react-cool-dimensions';
import Image from "next/image";
function Hero() {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="h-screen relative">
        {/* Image */}
        <Image
          src={hero}
          alt="Hero Image"
          
          fill
          className="opacity-60 object-cover"
        />
        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-20">
          <div className="bg-white bg-opacity-75 p-2 rounded-lg">
            <h3 className="text-red-600 text-3xl font-extrabold  mb-2">
              <span className="text-black">United</span> Party of{" "}
              <span className="text-green-600">Independent</span> Alliance
              <span className="text-black">(UPIA)</span>
            </h3>
            <p className="text-black text-lg italic text-2xl font-bold">
              A new dawn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
