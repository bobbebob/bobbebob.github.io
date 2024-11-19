import React from "react";
import website_thumbnail from "../assets/Site_thumbnail.png";
import wildfrost_thumbnail from "../assets/Wildfrost.png";
import monkey_thumbnail from "../assets/Monkey_beaches.png";
import more_thumbnail from "../assets/more_projects.svg";

export interface ProjectType {
  title: string;
  description: string;
  image?: string;
  detailIntro: string;
  details: React.ReactNode[];
}

export const projects: ProjectType[] = [
  {
    title: "My Website",
    description: "The website you are currently visiting :-)",
    image: website_thumbnail,
    detailIntro: "I created this website using:",
    details: [
      "HTML",
      "CSS",
      "React",
      "TypeScript",
      "Fun fact: This is my first website!",
    ],
  },
  {
    title: "WildFrost Mods",
    description: "Mods I created for one of my favorite games",
    image: wildfrost_thumbnail,
    detailIntro:
      "All art and code by me, install them easily using the Steam Workshop:",
    details: [
      <>
        <a
          href="https://steamcommunity.com/sharedfiles/filedetails/?id=3303891204"
          target="_blank"
          rel="noopener noreferrer"
        >
          Devil Charm
        </a>
      </>,
      <>
        <a
          href="https://steamcommunity.com/sharedfiles/filedetails/?id=3303885715"
          target="_blank"
          rel="noopener noreferrer"
        >
          Basket Charm
        </a>
      </>,
      <>
        Art inspired by:{" "}
        <a
          href="https://x.com/gaziter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gaziter
        </a>
      </>,
    ],
  },
  {
    title: "Monkey Beaches",
    description: "A video game prototype made in Unity",
    image: monkey_thumbnail,
    detailIntro: "I created this game as part of a course",
    details: [
      <>
        Course by:{" "}
        <a
          href="https://www.gamedev.tv/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gamedev.tv
        </a>
      </>,
      <>
        Play the game{" "}
        <a
          href="https://greenranger.itch.io/monkey-beaches"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
      </>,
      "Created using Unity and C#",
    ],
  },
  {
    title: "More to come!",
    description: "Check back in the future for updates",
    image: more_thumbnail,
    detailIntro: "If you have suggestions, please let me know!",
    details: ["Send me an email using my contact form"],
  },
];
