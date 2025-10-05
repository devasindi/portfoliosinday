import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  target,
  rel,
}) => {
  return (
    <div className="text-second">
      {/* Card Image Section */}
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
        }}
      >
        {/* Overlay placed inside the group */}
        <div className="hidden group-hover:flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] opacity-0 group-hover:opacity-80 transition-all duration-500 rounded-t-xl">
          {/* <Link
            target={target}
            rel={rel}
            href={gitUrl}
            className="size-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-second group/link"
          >
            <CodeBracketIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE] cursor-pointer group-hover/link:text-second" />
          </Link> */}
          <Link
            target={target}
            rel={rel}
            href={previewUrl}
            className="size-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-second group/link"
          >
            <EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE] cursor-pointer group-hover/link:text-second" />
          </Link>
        </div>
      </div>

      {/* Card Text Section */}
      <div className="rounded-b-xl mb-3 bg-second py-6 px-4">
        <h5 className="text-white text-xl font-semibold mb-2">{title}</h5>
        <p className="text-slate-100">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
