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
      "Conduct manual testing for the Trade ID application, a stock trading platform where users can buy and sell shares, manage their portfolios, and monitor market prices in real time.",
    image: "/images/projects/titan.png",
    tag: ["All", "QA"],
    gitUrl: "",
    previewUrl: "https://docs.google.com/spreadsheets/d/1nXkWsUAIdhXWXk7ZMVfjGQsBtUYCo9FIfwjOvwcF0MY/edit?usp=sharing",
  },
  {
    id: 2,
    title: "Game: Simulasi Wirausaha",
    description:
      "Conduct manual testing for a simulation game where the player manages a character who collects coins, buys items from stores, and sells them to NPCs.",
    image: "/images/projects/game.png",
    tag: ["All", "QA"],
    gitUrl: "",
    previewUrl: "https://docs.google.com/spreadsheets/d/1RbVoUYr9Zk1YfGF8WY1AMYgOrkfSWDT4ltFErVBYc3Q/edit?usp=sharing",
  },
  {
    id: 3,
    title: "Meeting Room Booking System Project",
    description:
      "Conduct manual testing for a meeting room booking system to verify room reservations based on location, number of participants, and meeting schedule.",
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
