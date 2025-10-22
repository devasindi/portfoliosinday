"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import {
  faJs,
  faFigma,
  faTrello,
  faJira,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
  faSquareCheck,
  faRotate,
  faFileLines,
  faBug,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <ul className="flex flex-wrap justify-center md:justify-start gap-5 w-full text-first">
        <li className="flex flex-col justify-center items-center gap-1">
          <FontAwesomeIcon icon={faTrello} className="text-5xl" />
          <span className="text-sm">Trello</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <FontAwesomeIcon icon={faJira} className="text-5xl" />
          <span className="text-sm">Jira</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <FontAwesomeIcon icon={faGoogle} className="text-5xl" />
          <span className="text-sm">Workspace</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <FontAwesomeIcon icon={faFigma} className="text-5xl" />
          <span className="text-sm">Figma</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <Image alt="logo" src={"/images/canva-144.png"} width={50} height={50} />
          <span className="text-sm">Canva</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <Image alt="logo" src={"/images/appium.png"} width={50} height={50} />
          <span className="text-sm">Appium</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <Image alt="logo" src={"/images/google-colab-144.png"} width={50} height={50} />
          <span className="text-sm">Colab</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <Image alt="logo" src={"/images/intellij-idea-144.png"} width={50} height={50} />
          <span className="text-sm">Intellij Idea</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <Image alt="logo" src={"/images/vs-code-144.png"} width={50} height={50} />
          <span className="text-sm">VS Code</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <FontAwesomeIcon icon={faJs} className="text-5xl" />
          <span className="text-xs">Javascript</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <FontAwesomeIcon icon={faSquareCheck} className="text-5xl" />
          <span className="text-xs">Manual Testing</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <FontAwesomeIcon icon={faRotate} className="text-5xl" />
          <span className="text-xs text-center">Functional<br/>& Regression Testing</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <FontAwesomeIcon icon={faFileLines} className="text-5xl" />
          <span className="text-xs text-center">Test Case <br/>& Plan Design</span>
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <FontAwesomeIcon icon={faBug} className="text-5xl" />
          <span className="text-xs text-center">Bug Tracking<br/>& Reporting</span>
        </li>
      </ul>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: (
      <div className="flex flex-col md:flex-row gap-3 items-center">
        <Image alt="unnes logo" src={"/images/unnes.png"} width={50} height={50} />
        <p className="text-second text-center md:text-left">
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
            src={"/images/maybank.png"}
            width={50}
            height={50}
            className="rounded-xl"
          />
          <p className="text-second text-center md:text-left">
            QA Engineer, Information Technology Intern - Maybank Sekuritas Indonesia (Feb - Jul
            2024)
          </p>
        </li>
        <li className="flex flex-col md:flex-row gap-3 items-center">
          <Image
            alt={"img"}
            src={"/images/bangkit.jpg"}
            width={50}
            height={50}
            className="rounded-xl"
          />
          <p className="text-second text-center md:text-left">
            Cloud Computing Student - Study Independent Kampus Merdeka at Bangkit Academy (Sep - Des
            2023)
          </p>
        </li>
        <li className="flex flex-col md:flex-row gap-3 items-center">
          <Image 
            alt="unnes logo" 
            src={"/images/unnes.png"} 
            width={50} 
            height={50} />
          <p className="text-second text-center md:text-left">
            Laboratory and Teaching Assistant - Department Computer Science FMIPA UNNES (2024)
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
            <p className="text-second text-center md:text-left">
              Head of Community Social Division - Hima Ilmu Komputer FMIPA UNNES (Jan - Des 2023)
            </p>
          </div>
        </li>
        <li className="flex flex-col md:flex-row gap-3 items-center">
          <Image
            alt={"img"}
            src={"/images/hima-ilkom.png"}
            width={50}
            height={50}
          />
          <div className="flex flex-col justify-start gap-2">
            <p className="text-second text-center md:text-left">
              Secretary of Community Social Division - Hima Ilmu Komputer FMIPA UNNES (Jan -
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
      className="text-second scroll-mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center lg:items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt={"img"}
          id="about-me"
          src={"/images/sindi1.JPG"}
          height={500}
          width={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl text-second font-bold mb-4">About Me</h2>
          <p className="text-base text-first lg:text-lg text-justify">
            Information Systems graduate with internship experience in quality assurance and technical support. Skilled in manual and 
            automation testing, bug reporting, regression testing, and test documentation using JIRA, Trello, and Appium. Experienced in 
            organizational leadership, academic collaboration, and content development. Aspiring to grow as a Quality Assurance Engineer by 
            leveraging analytical, problem-solving, and teamwork skills to ensure software quality and reliability. 
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
