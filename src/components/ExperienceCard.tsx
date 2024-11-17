import React from "react";
import styled from "styled-components";
import { WorkExperience } from "../data/workExperience.tsx";
import { Education } from "../data/education.tsx";

interface ExperienceCardProps {
  experience?: WorkExperience;
  studies?: Education;
}

const ExperienceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1.4rem;
  background-color: var(--background);
  border-radius: 6px;
  width: 100%;
`;

const Date = styled.p`
  span {
    color: var(--text-tertiary);
    font-size: var(--fluid-10-14);
  }
`;

const Company = styled.p`
  max-width: 20ch;
  span {
    font-weight: bold;
    color: var(--text-secondary);
    font-size: var(--fluid-14-18);
  }
`;

const Position = styled.p`
  margin-top: 0.5rem;
  max-width: 25ch;
  span {
    color: var(--text-primary);
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

const Logo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  padding: 0 0 20px 20px;

  div {
    display: flex;
    padding: var(--fluid-18-32);
    aspect-ratio: 1;
    border-radius: 0 0 0 100%;
    box-shadow: 0px 0px 15px var(--text-secondary);
  }

  img {
    width: var(--fluid-40-64);
    padding-left: 1rem;
    padding-bottom: 1rem;

    [data-theme="light"] & {
      filter: invert(1);
    }
  }
`;

const ExperienceCard = ({ experience, studies }: ExperienceCardProps) => {
  const {
    startDate,
    endDate,
    company,
    position,
    workExperience,
    logo: workLogo,
  } = experience || {};
  const {
    graduateDate,
    institute,
    study,
    milestones,
    logo: educationLogo,
  } = studies || {};

  const isWorkExperience = experience !== undefined;

  return (
    <ExperienceCardContainer>
      <Date>
        <span>
          {isWorkExperience
            ? `${startDate} - ${endDate}`
            : `Graduated - ${graduateDate}`}
        </span>
      </Date>
      <Logo>
        <div>
          <img
            src={isWorkExperience ? workLogo : educationLogo}
            alt={`${isWorkExperience ? company : institute}-logo`}
          />
        </div>
      </Logo>
      <Company>
        <span>{isWorkExperience ? company : institute}</span>
      </Company>
      <Position>
        <span>{isWorkExperience ? position : study}</span>
      </Position>
      <WorkExperienceList>
        {isWorkExperience
          ? workExperience?.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))
          : milestones?.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
      </WorkExperienceList>
    </ExperienceCardContainer>
  );
};

export default ExperienceCard;
