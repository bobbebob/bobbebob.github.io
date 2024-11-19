import React from "react";
import styled from "styled-components";
import { technologies } from "../data/technologies.tsx";
import SectionWrapper from "./SectionWrapper.tsx";

const TechStackCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  padding: 0.6rem;
  background-color: var(--background-secondary);
  border-radius: 10px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TechStackCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: var(--background);
  border-radius: 6px;
  height: 4.5rem;

  img {
    height: var(--fluid-18-32);
    aspect-ratio: 1 / 1;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    margin: 0;
    line-height: 1;
  }

  span {
    color: var(--text-tertiary);
    font-size: var(--fluid-8-10);
    line-height: 1;
  }
`;

const TechStack = () => {
  return (
    <SectionWrapper>
      <h2>My current technologies</h2>
      <TechStackCardContainer>
        {technologies.map((tech, index) => (
          <TechStackCard key={index}>
            <img src={tech.icon} alt={tech.name} />
            <div>
              <p>{tech.name}</p>
              <p>
                <span>{tech.description}</span>
              </p>
            </div>
          </TechStackCard>
        ))}
      </TechStackCardContainer>
    </SectionWrapper>
  );
};

export default TechStack;
