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
          className="col-span-8 place-self-center text-center sm:text-left"
        >
          <h1 className="text-second mb-6 font-extrabold text-4xl sm:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Deva Sindi Maulita",
                1700, // wait 1s before replacing
                "QA Engineer",
                1700,
                "PM Enthusiast",
                1700,
                "SA Enthusiast",
                1700,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-first text-base italic sm:text-lg lg:text-xl mb-6">
            Bridging quality, analysis, and leadership to build reliable and efficient software.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold mr-4 hover:text-secondary">
              <a
                href="http://www.linkedin.com/in/devasindimaulita/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire me
              </a>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary to-secondary hover:bg-slate-800 text-second mt-3">
              <span className="block bg-main hover:bg-white rounded-full px-5 py-2">
                <a
                  href="https://drive.google.com/file/d/1TBQqPbUk6guHnqTizEkdeFk_EoA4_lKf/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-second w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={"/images/hero-sindi.png"}
              alt="profile"
              className="absolute transform -translate-x-1/2 -translate-y-[50.3%] top-1/2 left-1/2 rounded-b-full"
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
