import React from "react";
import styled from "styled-components";
import { WorkExperience } from "../data/workExperience";

interface ExperienceCardProps {
  experience: WorkExperience;
}

const ExperienceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #030712;
  border-radius: 5px;
  width: 100%;
`;

const Date = styled.p`
  span {
    color: #a1a1aa;
    font-size: var(--fluid-10-14);
  }
`;

const Company = styled.p`
  span {
    font-weight: bold;
    color: #489167;
    font-size: var(--fluid-14-18);
  }
`;

const Position = styled.p`
  margin-top: 0.5rem;
  span {
    color: #ffffff;
    font-size: var(--fluid-14-18);
  }
`;

const WorkExperienceList = styled.ul`
  list-style-type: none;
  padding: 0;

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
    background-color: #a1a1aa;
  }

  li p {
    color: #a1a1aa;
    font-size: var(--fluid-10-14);
    max-width: 60ch;
    margin-top: 0.5rem;
  }
`;

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { startDate, endDate, company, position, workExperience } = experience;

  return (
    <ExperienceCardContainer>
      <Date>
        <span>
          {startDate} - {endDate}
        </span>
      </Date>
      <Company>
        <span>{company}</span>
      </Company>
      <Position>
        <span>{position}</span>
      </Position>
      <WorkExperienceList>
        {workExperience.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
      </WorkExperienceList>
    </ExperienceCardContainer>
  );
};

export default ExperienceCard;
