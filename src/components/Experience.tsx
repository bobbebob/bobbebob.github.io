import React, { useState } from "react";
import styled from "styled-components";
import { EXP_NAV_OPTIONS, EXP_NAV_TYPE } from "../constants.ts";
import ExperienceCard from "./ExperienceCard.tsx";
import { workExperience } from "../data/workExperience.tsx";
import { education } from "../data/education.tsx";

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 3rem;
`;

const ExperienceNavBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.6rem;
  background-color: var(--background-secondary);
  border-radius: 10px;
  width: 100%;
`;

interface NavButtonProps {
  isSelected: boolean;
}

const NavButton = styled.button<NavButtonProps>`
  border: none;
  background-color: ${(props) =>
    props.isSelected ? "var(--background)" : "var(--background-secondary)"};
  color: ${(props) => (props.isSelected ? "var(--text-primary)" : "#a1a1aa")};
  cursor: pointer;
  border-radius: 5px;
  padding: 0.6rem;
  transition: background-color 0.3s;

  ${(props) =>
    !props.isSelected &&
    `
      &:hover {
        background-color: var(--button-hover);
      }
    `}
`;

const ExperienceCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem;
  background-color: var(--background-secondary);
  border-radius: 10px;
  width: 100%;
  gap: 0.6rem;
`;

const Experience = () => {
  const [selectedTab, setSelectedTab] = useState<EXP_NAV_TYPE>(
    EXP_NAV_OPTIONS.WORK
  );

  return (
    <ExperienceWrapper>
      <h2>Experience</h2>
      <ExperienceNavBar>
        <NavButton
          isSelected={selectedTab === EXP_NAV_OPTIONS.WORK}
          onClick={() => setSelectedTab(EXP_NAV_OPTIONS.WORK)}
        >
          Work
        </NavButton>
        <NavButton
          isSelected={selectedTab === EXP_NAV_OPTIONS.EDUCATION}
          onClick={() => setSelectedTab(EXP_NAV_OPTIONS.EDUCATION)}
        >
          Education
        </NavButton>
      </ExperienceNavBar>
      <ExperienceCardsContainer>
        {selectedTab === EXP_NAV_OPTIONS.WORK &&
          workExperience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        {selectedTab === EXP_NAV_OPTIONS.EDUCATION &&
          education.map((study, index) => (
            <ExperienceCard key={index} studies={study} />
          ))}
      </ExperienceCardsContainer>
    </ExperienceWrapper>
  );
};

export default Experience;
