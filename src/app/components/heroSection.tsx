"use client";
import React from "react";
import Image from "next/image";
import HeroImg from "../public/image.jpg"
import { TypeAnimation } from "react-type-animation";

export default function Header() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
        {/* Text section */}
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mt-7 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-800">
              Hello, I&apos;m&nbsp;
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Syeda Mehak",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit Lorem ipsum dolor sit.
          </p>

          {/* Buttons */}
          <div className="flex justify-start gap-4">
            <button
              className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-blue-600 text-white w-full sm:w-fit px-4 py-2 rounded"
              aria-label="Hire Me"
            >
              Hire Me
            </button>
            <button
              className="bg-transparent text-white hover:text-teal-500 w-full sm:w-fit px-4 py-2 rounded border"
              aria-label="Download CV"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Image section */}
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="w-[250px] h-[250px] sm:w-[250px] sm:h-[250px] lg:w-[500px] lg:h-[500px] relative">
            {/* <Image
              src="/image.jpg"
              alt="Profile image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              layout="fill"
              objectFit="cover"
            /> */}
            <Image src={HeroImg} alt="ProfileImg" height={250} width={300} className="ml-20"/>
          </div>
        </div>
      </div>
    </section>
  );
}
