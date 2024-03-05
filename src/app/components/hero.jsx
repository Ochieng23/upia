import React from "react";
import hero from "../Assets/images/hero.jpg";
import Image from "next/image";
function Hero() {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="h-screen relative">
        {/* Image */}
        <Image
          src={hero}
          alt="Hero Image"
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          className="opacity-65"
        />
        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-20">
          <div className="bg-green-500 bg-opacity-75 p-2 rounded-lg">
            <h3 className="text-red-600 text-3xl font-extrabold  mb-2">
              United Party of Independent Alliance (UPIA)
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
