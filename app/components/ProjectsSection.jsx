"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "TITAN Trade ID",
    description:
      "A machine learning model that detects risk of depression based on user input. This project will predict and classify the depression risk, whether the risk is high or low for having depression.",
    image: "/images/projects/titan.png",
    tag: ["All", "QA"],
    gitUrl: "",
    previewUrl: "https://docs.google.com/spreadsheets/d/1nXkWsUAIdhXWXk7ZMVfjGQsBtUYCo9FIfwjOvwcF0MY/edit?usp=sharing",
  },
  {
    id: 2,
    title: "Game: Simulasi Wirausaha",
    description:
      "A information system for stationery store named HK Jaya, offering a wide range of office and school supplies with user-friendly navigation, product catalog, and smooth responsive website.",
    image: "/images/projects/game.png",
    tag: ["All", "QA"],
    gitUrl: "",
    previewUrl: "https://docs.google.com/spreadsheets/d/1RbVoUYr9Zk1YfGF8WY1AMYgOrkfSWDT4ltFErVBYc3Q/edit?usp=sharing",
  },
  {
    id: 3,
    title: "Meeting Room Booking System Project",
    description:
      "A machine learning model that classify water quality index whether the quality is safe or unsafe based on user input of enviromental parameters. This project created for college final project (thesis).",
    image: "/images/projects/meeting.png",
    tag: ["All", "QA"],
    gitUrl: "",
    previewUrl: "https://docs.google.com/spreadsheets/d/1dKN3UjqIonLseBKgALVHvi-wjSJdsawWC9z0Z_jkpUo/edit?usp=sharing",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVarians = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      id="projects"
      className="scroll-mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-center text-4xl font-bold text-second my-4">
        My Projects
      </h2>
      <div className="text-first flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name={"All"}
          isSelected={tag === "All"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name={"Web"}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={"Design"}
          isSelected={tag === "Design"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVarians}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              target={"_blank"}
              rel={"noopener noreferrer"}
            />
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default ProjectsSection;
