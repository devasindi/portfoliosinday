"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faFigma,
  faPython,
  faKaggle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <ul className="flex flex-wrap justify-center md:justify-start gap-5 w-full text-white">
        <li className="flex flex-col justify-center items-center gap-1">
          <FontAwesomeIcon icon={faHtml5} className="text-5xl" />
          <span className="text-sm">HTML</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <FontAwesomeIcon icon={faCss3Alt} className="text-5xl" />
          <span className="text-sm">CSS</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <FontAwesomeIcon icon={faFigma} className="text-5xl" />
          <span className="text-sm">Figma</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <FontAwesomeIcon icon={faKaggle} className="text-5xl" />
          <span className="text-sm">Kaggle</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <FontAwesomeIcon icon={faJs} className="text-5xl" />
          <span className="text-xs">Javascript</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <FontAwesomeIcon icon={faReact} className="text-5xl" />
          <span className="text-sm">ReactJS</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <FontAwesomeIcon icon={faBootstrap} className="text-5xl" />
          <span className="text-sm">Bootstrap</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <FontAwesomeIcon icon={faPython} className="text-5xl" />
          <span className="text-sm">Python</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <Image
            alt={"img"}
            src={"/images/tailwind-120.png"}
            width={50}
            height={50}
          />
          <span className="text-sm">Tailwind</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <Image
            alt={"img"}
            src={"/images/vite-120.png"}
            width={50}
            height={50}
          />
          <span className="text-sm">Vite</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <Image
            alt={"img"}
            src={"/images/nextjs-120.png"}
            width={50}
            height={50}
          />
          <span className="text-sm">NextJS</span>
        </li>
      </ul>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: (
      <div className="flex flex-col md:flex-row gap-3 items-center">
        <Image src={"/images/unnes.png"} width={50} height={50} />
        <p className="text-white text-center md:text-left">
          Bachelor's of Computer Science at Universitas Negeri Semarang
        </p>
      </div>
    ),
  },
  {
    id: "experience",
    title: "Experience",
    content: (
      <ul className="list-disc flex flex-col gap-5">
        <li className="flex flex-col md:flex-row gap-3 items-center">
          <Image
            alt={"img"}
            src={"/images/steradian.png"}
            width={50}
            height={50}
          />
          <p className="text-white text-center md:text-left">
            Information Technology Intern - PT.Steradian Data Optima (Feb - Jul
            2024)
          </p>
        </li>
        <li className="flex flex-col md:flex-row gap-3 items-center">
          <Image
            alt={"img"}
            src={"/images/hacktiv8.png"}
            width={50}
            height={50}
          />
          <p className="text-white text-center md:text-left">
            Student - Study Independent Kampus Merdeka at Hacktiv8 (Sep - Des
            2024)
          </p>
        </li>
        <li className="flex flex-col md:flex-row gap-3 items-center">
          <Image
            alt={"img"}
            src={"/images/hima-ilkom.png"}
            width={50}
            height={50}
          />
          <div className="flex flex-col justify-start gap-2">
            <p className="text-white text-center md:text-left">
              Vice Chairman - Hima Ilmu Komputer UNNES (Jan - Des 2023)
            </p>
            <p className="text-white text-center md:text-left">
              Expert Staff Internal Division - Hima Ilmu Komputer UNNES (Jan -
              Des 2022)
            </p>
          </div>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <motion.section
      id="about"
      className="text-white scroll-mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt={"img"}
          id="about me"
          src={"/images/about.jpg"}
          height={500}
          width={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl text-white font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
            A frontend Developer with one year of experience specializing in building responsive and user-focused web interfaces using ReactJS and Tailwind CSS. Gained hands-on experience through freelance projects, academic research, and internships. Skilled in UI design adaptation, component-based development, and effective collaboration within cross-functional teams.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experince{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
