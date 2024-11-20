import styled from "styled-components";
import React from "react";
import "../global.css";

interface SocialsIconProps {
  href: string;
  src: string;
  alt: string;
}

const Container = styled.div`
  position: relative;
  background-color: var(--background);
  border-radius: 50%;
  height: var(--fluid-14-18);
  width: var(--fluid-14-18);
  padding: 1.1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px 0px var(--text-secondary);
  transition: box-shadow 0.2s ease-out;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 0 15px 0px var(--inverse-background);
    }
  }
`;

const Img = styled.img`
  margin-top: 0.2rem;
  height: var(--fluid-14-18);
  width: var(--fluid-14-18);
  [data-theme="light"] & {
    filter: invert(1);
  }
`;

const SocialsIcon = ({ href, src, alt }: SocialsIconProps) => {
  return (
    <Container>
      <a href={href} target="_blank" rel="noreferrer">
        <Img src={src} alt={alt} />
      </a>
    </Container>
  );
};

export default SocialsIcon;
