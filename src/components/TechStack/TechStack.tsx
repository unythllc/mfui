import React from "react";
import { SiHtml5, SiReact, SiTailwindcss } from "react-icons/si";

type TechStackProps = {
  techStack: string[];
};

const getIcon = (tech: string) => {
  switch (tech.toLowerCase()) {
    case "html":
      return () => <SiHtml5 className={"h-5 w-5 text-dark-gray-text"} />;
    case "react":
      return () => <SiReact className={"h-5 w-5 text-dark-gray-text"} />;
    case "tailwind":
      return () => <SiTailwindcss className={"h-5 w-5 text-dark-gray-text"} />;
    default:
      return null;
  }
};

const TechStack = (props: TechStackProps) => {
  return (
    <div className={"flex gap-2 my-1"}>
      {props.techStack.map((tech, index) => {
        const Icon = getIcon(tech);
        if (Icon) {
          return <Icon key={index} />;
        }
        return (
          <SiTailwindcss
            key={index}
            className={"h-5 w-5 text-dark-gray-text"}
          />
        );
      })}
    </div>
  );
};

export default TechStack;
