import React, { useState } from "react";
import styled from "styled-components";
import { EXP_NAV_OPTIONS } from "../constants.ts";
import ExperienceCard from "./ExperienceCard.tsx";
import { workExperience } from "../data/workExperience.tsx";
import { education } from "../data/education.tsx";

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const ExperienceNavBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.5rem;
  background-color: #112323;
  border-radius: 10px;
  width: 100%;
`;

interface NavButtonProps {
  isSelected: boolean;
}

const NavButton = styled.button<NavButtonProps>`
  border: none;
  background-color: ${(props) => (props.isSelected ? "#030712" : "#112323")};
  color: ${(props) => (props.isSelected ? "#ffffff" : "#a1a1aa")};
  cursor: pointer;
  border-radius: 5px;
  padding: 0.5rem;
  transition: background-color 0.3s;

  ${(props) =>
    !props.isSelected &&
    `
      &:hover {
        background-color: #0C191D;
      }
    `}
`;

const ExperienceCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  background-color: #112323;
  border-radius: 10px;
  width: 100%;
  gap: 0.5rem;
`;

const Experience = () => {
  const [selectedTab, setSelectedTab] = useState<string>(EXP_NAV_OPTIONS.WORK);

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
