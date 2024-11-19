import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard.tsx";
import SectionWrapper from "./SectionWrapper.tsx";
import { projects } from "../data/projects.tsx";

const ProjectCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.6rem;
  width: 60%;
  align-self: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
`;

const Projects = () => {
  return (
    <SectionWrapper>
      <h2>Personal Projects</h2>
      <ProjectCardGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectCardGrid>
    </SectionWrapper>
  );
};

export default Projects;
