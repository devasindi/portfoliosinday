"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Mental Health Detection",
    description:
      "A machine learning model that detects risk of depression based on user input. This project will predict and classify the depression risk, whether the risk is high or low for having depression.",
    image: "/images/projects/mhealth.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/injanisgg/mhealth.git",
    previewUrl: "https://mhealthdetect.vercel.app",
  },
  {
    id: 2,
    title: "HK Jaya Stationery Website",
    description:
      "A information system for stationery store named HK Jaya, offering a wide range of office and school supplies with user-friendly navigation, product catalog, and smooth responsive website.",
    image: "/images/projects/atk.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/injanisgg/hkjaya",
    previewUrl: "https://atkhkjaya.vercel.app",
  },
  {
    id: 3,
    title: "Skripsi Water Quality Index Classification",
    description:
      "A machine learning model that classify water quality index whether the quality is safe or unsafe based on user input of enviromental parameters. This project created for college final project (thesis).",
    image: "/images/projects/wqi.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/injanisgg/skripsi-fe",
    previewUrl: "https://skripsi-wqi-fe.vercel.app/",
  },
  {
    id: 4,
    title: "Hacktiv8 Capstone Mon Chérie Ecommerce",
    description:
      "A capstone project developed for the Studi Independen program at Hacktiv8, under the ReactJS Frontend Web Developer track. This e-commerce website features a modern user interface, showcasing product listings, user authentication and shopping cart functionality.",
    image: "/images/projects/cherie.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/injanisgg/capstone-project-hv8",
    previewUrl: "https://injani-capstone-hv8.vercel.app",
  },
  {
    id: 5,
    title: "ATK HK Jaya - UI/UX Design ",
    description:
      "User interface design for HK Jaya's stationery store information system, featuring organized product catalog layouts and a responsive design tailored for a smooth user experience across devices. pecial attention was given to user flow, ease of access to product details, and an overall layout that supports efficient browsing",
    image: "/images/projects/des-atk.png",
    tag: ["All", "Design"],
    gitUrl:
      "https://www.figma.com/design/SYmaXXfKd2xr7RY0lu020R/ATK-HK-JAYA?node-id=0-1&t=WzvXoZea03834Sz6-1",
    previewUrl: "https://atkhkjaya.vercel.app",
  },
  {
    id: 6,
    title: "Mental Health Detection - UI/UX Design",
    description:
      "UI/UX design for a mental health detection platform aimed at helping users assess their mental well-being. The design focuses on clarity, accessibility, and empathy-driven user experience, with features like self-assessment forms, results visualization, and user guidance built with a clean and calming interface.",
    image: "/images/projects/des-mhealth.png",
    tag: ["All", "Design"],
    gitUrl:
      "https://www.figma.com/design/tFj31Lu3We7HsfhE0sjKkb/Mental-health---adv?node-id=0-1&t=gFXYr1PnooWH6LI1-1",
    previewUrl: "https://mhealthdetect.vercel.app",
  },
  {
    id: 7,
    title: "Water Quality Index Classification - UI/UX Design",
    description:
      "UI/UX design for a platform that classifies water quality based on various environmental parameters. The interface is designed to present data clearly through intuitive layouts and visualizations, enabling users to easily interpret water quality levels and insights from the classification results.",
    image: "/images/projects/des-wqi.png",
    tag: ["All", "Design"],
    gitUrl:
      "https://www.figma.com/design/AlSwSdOk88Mv153wS8p2fZ/Website-Skripsi-gg?node-id=0-1&t=WL6nLI8ytP6sOo9D-1",
    previewUrl: "/",
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
        <ProjectTag
          onClick={handleTagChange}
          name={"Web"}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={"Design"}
          isSelected={tag === "Design"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
