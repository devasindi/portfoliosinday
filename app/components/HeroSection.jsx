"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }} 
          className="col-span-8 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-6 font-extrabold text-4xl sm:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Sugini Injani",
                1700, // wait 1s before replacing
                "Frontend Developer",
                1700,
                "UI Builder",
                1700,
                "Mobile Dev Enthusiast",
                1700
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-400 text-base italic sm:text-lg lg:text-xl mb-6">
            I build clean and user-friendly frontend experiences crafted with code and custom-designed interfaces.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white hover:bg-slate-200 mr-4 hover:font-bold">
              <a href="http://www.linkedin.com/in/suginiinjani/" target="_blank" rel="noopener noreferrer">Hire me</a>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#03071E] hover:bg-slate-800 rounded-full px-5 py-2">
                <a href="https://drive.google.com/file/d/1TBQqPbUk6guHnqTizEkdeFk_EoA4_lKf/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#1E1E2F] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={"/images/profile.png"}
              alt="profile"
              className="absolute transform -translate-x-1/2 -translate-y-[41%] top-1/2 left-1/2 rounded-b-full"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
