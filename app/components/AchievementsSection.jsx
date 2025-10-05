"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CHAMPION_DATA = [
  {
    src: '/images/interface.png',
    desc: 'Speaker at Interface with topic "Sharing Experiences as a Student Achiever" (2024)'
  },
  {
    src: '/images/anforcom.jpg',
    desc: '3rd Place at Anforcom UI/UX design competition Universitas Diponegoro (2024)'
  },
  {
    src: '/images/hmi.jpeg',
    desc: 'Speaker at HMI UNNES webinar with topic "Tips for Winning Scholarship" (2024)'
  },
  {
    src: '/images/ybm.png',
    desc: 'Awardee BRI scholarship Yayasan Baitul Maal Brillian (2022 - 2025)'
  },
  {
    src: '/images/duta.jpg',
    desc: 'Faculty Ambassador (Duta) of the Faculty of Mathematics and Science (2022 - 2024)'
  },
  {
    src: '/images/bapedda.png',
    desc: '2nd Place at Krenova (Kreativitas dan Inovasi Masyarakat) in Technology BAPPENAS Semarang (2023)'
  },
];

const AchievementsSection = () => {

  return (
    <motion.section
      id="achievements"
      className="text-second scroll-mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl text-second font-bold mb-4 text-center">Achievements</h2>
          <p className="text-base text-first lg:text-lg lg:px-20 lg:text-center text-justify">
          Demonstrated excellence through multiple awards and public speaking engagements, reflecting strong analytical, communicative, and leadership skills — qualities that support a professional journey in quality assurance and technology.
          </p>
          <ul className="list-disc flex flex-col lg:grid lg:grid-cols-2 gap-5 mt-3">
            {CHAMPION_DATA.map((item, idx) => (
              <li key={idx} className="flex flex-col md:flex-row gap-3 items-center">
                <div className="relative w-14 h-14 lg:w-20 lg:h-20">
                  <Image
                    alt={"img"}
                    src={item.src}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-second text-center md:text-left">
                  {item.desc}
                </p>
            </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:gap-5 justify-center items-center">
          <div className="relative w-56 h-56 lg:w-80 lg:h-80 xl:w-[30rem] xl:h-[30rem]">
            <Image
              alt={"img"}
              id="about-me"
              src={"/images/duta.png"}
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-56 h-56 lg:w-80 lg:h-80 xl:w-[30rem] xl:h-[30rem]">
            <Image
              alt={"img"}
              id="about-me"
              src={"/images/sertif.png"}
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-56 h-56 lg:w-80 lg:h-80 xl:w-[30rem] xl:h-[30rem]">
            <Image
              alt={"img"}
              id="about-me"
              src={"/images/champion.png"}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AchievementsSection;
