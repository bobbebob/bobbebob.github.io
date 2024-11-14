import React from "react";
import styled from "styled-components";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedIn.svg";
import instagram from "../assets/instagram.svg";
import SocialsIcon from "./SocialsIcon.tsx";
import ProfilePicture from "./ProfilePicture.tsx";
import bob from "../assets/Bob.png";

const IntroductionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2{
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 1rem;
    max-width: 45ch;
    align-items: center;
    display: flex;
    gap: 0.5ch;
  }
  a {
    color: #489167;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
  }
`;

const TextDivider = styled.div`
  background: linear-gradient(to right, #489167, transparent);
  width: 105%;
  height: 2px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Introduction = () => {
  return (
    <IntroductionWrapper>
      <TitleContainer>
        <h1>Hello I'm Bob</h1>
        <h2>a full stack web developer</h2>
        <p>
          I like to write code, prepare my green tea at 80°C and make
          illustrations on the side.
        </p>
        <TextDivider />
        <p>
          <span className="material-icons">location_on</span>The Netherlands
        </p>
        <TextDivider />
        <p>
          Download my <a href="/resume.pdf">resume</a>
        </p>
        <TextDivider />
        <SocialIconsContainer>
          <SocialsIcon
            href="https://www.linkedin.com/in/bob-vegter-383877143/"
            src={linkedin}
            alt="linkedin"
          />
          <SocialsIcon
            href="https://github.com/bobbebob"
            src={github}
            alt="github"
          />
          <SocialsIcon
            href="https://www.instagram.com/bob_rechtop/"
            src={instagram}
            alt="instagram"
          />
        </SocialIconsContainer>
      </TitleContainer>
      <ProfilePicture src={bob} alt="profile picture" />
    </IntroductionWrapper>
  );
};

export default Introduction;
