import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { ProjectType } from "../data/projects.tsx";

interface ProjectCardProps {
  project: ProjectType;
}

const bounce = keyframes`
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-4px);
    }
    40% {
      transform: translateY(0);
    }
    60% {
      transform: translateY(-2px);
    }
    80% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
    }
`;

const slideIn = keyframes`
    0% { 
        transform: translateX(-10%);
        opacity: 0;
    }
    100% { 
        transform: translateX(0);
        opacity: 1;
    }
`;

const ProjectCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-secondary);
  border-radius: 10px;
  padding: 0.6rem;
  width: 100%;
  aspect-ratio: 1 / 1;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  background-color: var(--background);
  overflow: hidden;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 2rem;
  justify-content: center;
  gap: 0.2rem;
  box-shadow: inset 0px 15px 15px -15px var(--text-secondary);
`;

const ProjectTitle = styled.p`
  color: var(--text-secondary);
  font-size: var(--fluid-14-18);
  font-weight: bold;
  margin: 0;
`;

const ProjectDescription = styled.p`
  color: var(--text-primary);
  font-size: var(--fluid-10-14);
  margin-bottom: 0.5rem;
`;

const ShowMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: var(--background);
  cursor: pointer;
  margin-left: auto;
  font-size: var(--fluid-10-14);
  color: var(--text-tertiary);
  transition: color 0.2s ease-out;

  span {
    margin-left: 0.3rem;
    font-size: var(--fluid-14-18);
  }

  @media (hover: hover) {
    &:hover span {
      animation: ${bounce} 1.2s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
    }
  }
`;

const ProjectImage = styled.img<{ $expanded: boolean }>`
  width: 100%;
  height: ${({ $expanded }) => ($expanded ? "0%" : "65%")};
  object-fit: cover;
  object-position: center;
  transform-origin: center center;
  transform: scale(${({ $expanded }) => ($expanded ? 0 : 1)});
  opacity: ${({ $expanded }) => ($expanded ? 0 : 1)};
  border-radius: ${({ $expanded }) => ($expanded ? "50px" : "0px")};
  transition: ${({ $expanded }) =>
    $expanded
      ? "transform 1s ease-out, height 0.8s ease, opacity 0.5s ease, border-radius 0.5s ease"
      : "transform 0.5s ease, height 1.2s ease, opacity 3s ease, border-radius 0.5s ease"};
`;

const ProjectDetails = styled.ul<{ $expanded: boolean }>`
  margin-top: auto;
  list-style-type: none;

  ${({ $expanded }) =>
    $expanded &&
    css`
      animation: ${slideIn} 0.5s ease-out forwards;
    `};

  p {
    font-size: var(--fluid-10-14);
    max-width: 60ch;
    margin-top: 0.5rem;
  }

  li {
    position: relative;
    padding-left: 20px;
  }

  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: var(--text-tertiary);
  }

  li p {
    color: var(--text-tertiary);
    font-size: var(--fluid-10-14);
    max-width: 60ch;
    margin-top: 0.5rem;
  }

  li a {
    font-size: var(--fluid-10-14);
    font-weight: bold;
    color: var(--text-tertiary);
  }
`;

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  const handleTransitionEnd = () => {
    setAnimationFinished(true);
  };

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
    setAnimationFinished(false);
  };

  const { image, title, description, detailIntro, details } = project;

  return (
    <ProjectCardContainer>
      <ContentContainer>
        <ProjectImage
          $expanded={expanded}
          onTransitionEnd={handleTransitionEnd}
          src={image}
          alt="thumbnail image"
        />
        <ProjectInfo>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescription>{description}</ProjectDescription>
          <ShowMoreButton onClick={toggleExpanded}>
            {expanded ? "show less" : "show more"}
            <span className="material-icons">
              {expanded ? "arrow_circle_down" : "arrow_circle_up"}
            </span>
          </ShowMoreButton>
          {expanded && animationFinished && (
            <ProjectDetails $expanded={expanded}>
              <p>{detailIntro}</p>
              {details.map((detail, index) => (
                <li key={index}>
                  <p>{detail}</p>
                </li>
              ))}
            </ProjectDetails>
          )}
        </ProjectInfo>
      </ContentContainer>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
