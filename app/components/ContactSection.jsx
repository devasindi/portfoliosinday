"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  const contactData = [
    {
      icon: faSquareGithub,
      label: "Github",
      path: "https://github.com/injanisgg",
    },
    {
      icon: faLinkedin,
      label: "Linkedin",
      path: "https://www.linkedin.com/in/devasindimaulita/",
    },
    {
      icon: faSquareInstagram,
      label: "Instagram",
      path: "https://www.instagram.com/desinmaaa",
    },
    {
      icon: faSquareEnvelope,
      label: "Email",
      path: "mailto:suginiinzani@gmail.com",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="scroll-mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-second flex flex-col justify-center md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* photo */}
        <div className="rounded-full bg-second w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src={"/images/contact.png"}
            alt="profile"
            className="absolute transform -translate-x-1/2 -translate-y-[42%] top-1/2 left-1/2 rounded-b-full"
            width={400}
            height={400}
          />
        </div>

        {/* contact */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl text-second font-bold mb-4">Contact Me!</h2>
          <p className="text-base lg:text-lg ">
            Interested in working together or collaborating on a project? <br />
            Let’s connect! I'm always open to new opportunities and discussions
          </p>
          <div className="flex flex-wrap justify-start gap-4 mt-4 md:gap-8">
            {contactData.map((contact, index) => (
              <Link
                key={index}
                href={contact.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center w-12 md:w-20"
              >
                <div className="size-8 md:w-14 md:h-14 flex items-center justify-center 
                bg-gradient-to-r from-secondary to-primary 
                hover:from-white hover:to-white transition">
                  <FontAwesomeIcon
                    icon={contact.icon}
                    className="text-4xl lg:text-7xl text-white hover:text-second"
                  />
                </div>
                <span className="mt-2 text-sm text-second text-center">
                  {contact.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
