import React from "react";
import styled from "styled-components";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedIn.svg";
import instagram from "../assets/instagram.svg";
import SocialsIcon from "./SocialsIcon.tsx";

const FooterWrapper = styled.div<{ theme: string }>`
  display: flex;
  margin: 0;
  max-width: 850px;
  justify-content: space-between;
  align-items: center;
  background: var(--background);
  padding: 2rem 2.6rem 2.4rem 2.6rem;
  z-index: 10; /* Ensure it stays above other content */
  box-shadow: 0px -15px 15px -20px var(--text-secondary);

  p {
    color: var(--text-tertiary);
    font-size: var(--fluid-8-10);
    margin: 0;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const PageFooter = () => {
  return (
    <FooterWrapper>
      <p>©bobvegter</p>
      <SocialIconsContainer>
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
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default PageFooter;
