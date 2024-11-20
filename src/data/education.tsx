import stJoostLogo from "../assets/stjoost_logo.png";
import creatementLogo from "../assets/Createment_logo.svg";
import React from "react";

export interface Education {
  graduateDate: string;
  institute: string;
  study: string;
  milestones: React.ReactNode[];
  logo: string;
}

export const education: Education[] = [
  {
    graduateDate: "2022",
    institute: "Createment",
    study: "IT Traineeship",
    milestones: [
      <>
        Followed lectures from{" "}
        <a
          href="https://www.codenomads.nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code Nomads
        </a>{" "}
        about Computer Science basics and fundamentals
      </>,
      "Got hands on experience programming in Java, HTML, CSS and JavaScript",
      <>
        Recieved my{" "}
        <a
          href="https://www.credly.com/badges/ac755ff7-ec92-4ce6-ae1f-57912f3e7fbf/public_url"
          target="_blank"
          rel="noopener noreferrer"
        >
          scrum master certification
        </a>
      </>,
    ],
    logo: creatementLogo,
  },
  {
    graduateDate: "2019",
    institute: "Avans Hogeschool - AKV | St Joost",
    study: "Bachelor Of Arts - Design Illustration & Animation",
    milestones: [
      <>
        Created an instructive comic about alternative education for elementary
        school{" "}
        <a
          href="https://blinkschool.nl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          De Blink
        </a>
      </>,
      "Created an interactive story using Unity game engine",
    ],
    logo: stJoostLogo,
  },
];
