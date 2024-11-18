import HTML_logo from "../assets/HTML_logo.svg";
import CSS_logo from "../assets/CSS_logo.svg";
import TS_logo from "../assets/Typescript_logo.svg";
import React_logo from "../assets/React_Logo.svg";
import Node_logo from "../assets/node_js.svg";
import MongoDB_logo from "../assets/MongoDB_logo.svg";

interface Technology {
  name: string;
  description: string;
  icon: string;
}

export const technologies: Technology[] = [
  {
    name: "HTML 5",
    description: "Webpage structure",
    icon: HTML_logo,
  },
  {
    name: "CSS 3",
    description: "Webpage styling",
    icon: CSS_logo,
  },
  {
    name: "TypeScript",
    description: "Typed JavaScript",
    icon: TS_logo,
  },
  {
    name: "React",
    description: "Dynamic UI library",
    icon: React_logo,
  },
  {
    name: "Node.js",
    description: "Server-side JavaScript",
    icon: Node_logo,
  },
  {
    name: "MongoDB",
    description: "NoSQL database",
    icon: MongoDB_logo,
  },
];
