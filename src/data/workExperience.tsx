import bcsLogo from "../assets/BCS_logo.svg";
import simacLogo from "../assets/Simac_logo.svg";
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
    company: "Basis Cloud Solutions",
    position: "Full Stack Developer",
    workExperience: [
      <>
        Built features for{" "}
        <a
          href="https://flatcubesolutions.com/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anugal
        </a>
        , a GRC app using React, TypeScript, and MongoDB
      </>,
      "Fixed a MongoDB timed deletion issue with a single-line in the model",
      "Optimized MongoDB aggregation pipelines for faster data handling",
      "Collaborated with designers to improve UX consistency across the app",
      "Suggested prototyping to address design bottlenecks, speeding up feature releases",
      "Championed accessibility practices to enhance responsiveness",
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
      "Automated a MIC check with a custom VBA script, improving efficiency in routine security tasks",
      "Designed task and business roles, including a role design for a new customer in collaboration with a teammate",
      "Configured roles for SAP Fiori and SAP BTP, establishing secure role connections",
      "Illustrated complex issues for team meetings, aiding visual understanding of security challenges",
      "Trained customer users on compliance protocols and ticketing processes to reinforce internal standards",
    ],
    logo: simacLogo,
  },
];
