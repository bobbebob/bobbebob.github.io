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
  h1 {
    font-family: "Poetsen One", sans-serif;
    color: #ffffff;
    font-size: 4rem;
  }
  h2 {
    font-family: "Poetsen One", sans-serif;
    color: #489167;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  p {
    color: #ffffff;
    margin-bottom: 1rem;
    max-width: 45ch;
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

const PictureBorder = styled.div<{ size: number }>`
  position: relative;
  background-color: #030712;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.size}rem;
  width: ${(props) => props.size}rem;
  z-index: ${(props) => Math.floor(100 / props.size)};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #489167;
    border-radius: 50%;
    filter: blur(10px);
    z-index: -1;
  }
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
        <p>The Netherlands</p>
        <TextDivider />
        <p>
          Download my <a href="/resume.pdf">resume</a>
        </p>
        <TextDivider />
        <SocialIconsContainer>
          <SocialsIcon
            href="https://www.linkedin.com/in/bobvegter/"
            src={linkedin}
            alt="linkedin"
          />
          <SocialsIcon
            href="https://github.com/bobvegter"
            src={github}
            alt="github"
          />
          <SocialsIcon
            href="https://www.instagram.com/bobvegter/"
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
