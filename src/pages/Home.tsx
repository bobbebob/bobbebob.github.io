import React from "react";
import "../global.css";
import Introduction from "../components/Introduction.tsx";
import SectionDivider from "../components/SectionDivider.tsx";
import Experience from "../components/Experience.tsx";
import TechStack from "../components/TechStack.tsx";
import Projects from "../components/Projects.tsx";

const HomePage = () => {
  return (
    <>
      <Introduction />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <TechStack />
      <SectionDivider />
      <Projects />
    </>
  );
};

export default HomePage;
