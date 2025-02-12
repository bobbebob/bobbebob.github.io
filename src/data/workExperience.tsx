import bcsLogo from "../assets/BCS_logo.svg";
import simacLogo from "../assets/Simac_logo.svg";
import coderDojoLogo from "../assets/CoderDojo_logo.svg";
import React from "react";

export interface WorkExperience {
  startDate: string;
  endDate: string;
  company: string;
  position: string;
  workExperience: React.ReactNode[];
  logo?: string;
}

export const workExperience: WorkExperience[] = [
  {
    startDate: "Nov 2023",
    endDate: "Present",
    company: "Business Core Solutions",
    position: "Full Stack Developer",
    workExperience: [
      <>
        Developed 3 major features and 5 minor features for{" "}
        <a
          href="https://flatcubesolutions.com/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anugal
        </a>
        , a GRC app that automates security and access management. Anugal is
        built with HTML, CSS, JavaScript/TypeScript, React, MongoDB, and
        Node.js.{" "}
      </>,
      "Optimized data queries using MongoDB aggregation pipelines, reducing load times by 50%",
      "Became the go-to person for UI-related questions within a team of 10+ developers",
      "Took the lead in improving accessibility for Anugal end users and co-hosted a knowledge session on responsive design with my senior developer",
      "Accelerated the development time of new features by 100% by introducing Figma Prototyping to the design team, helping to identify and resolve bottlenecks faster",
      "Standardized shared React components, increasing reusability and reducing development time for new features",
    ],
    logo: bcsLogo,
  },
  {
    startDate: "Sept 2022",
    endDate: "Nov 2023",
    company: "Simac",
    position: "SAP Security & Authorization Consultant",
    workExperience: [
      "Created and managed users across 15+ SAP environments",
      "Conducted 30+ MIC security checks in 5+ SAP production environments to verify critical security parameters",
      "Automated a routine MIC check using an Excel VBA script, reducing the task from 30 minutes to 5 minutes with 90% fewer errors",
      "Trained client end users in security for new and existing systems",
    ],
    logo: simacLogo,
  },
  {
    startDate: "Jan 2025",
    endDate: "Present",
    company: "CoderDojo Tilburg",
    position: "Mentor / Volunteer",
    workExperience: [
      "Guided groups of 20+ children and teens in coding using open-source software such as Scratch, Snap!, GDevelop, HTML, CSS, and more",
      "Let the participants choose their own tools and helped them come up with projects"
    ],
    logo: coderDojoLogo,
  },
];
