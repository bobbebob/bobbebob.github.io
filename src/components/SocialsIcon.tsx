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
  background-color: #030712;
  border-radius: 50%;
  height: var(--fluid-14-18);
  width: var(--fluid-14-18);
  padding: 1.1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px 0px #489167;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1) rotate(-8deg);
    box-shadow: 0 0 15px 0px #ffffff;
  }
`;

const Img = styled.img`
  margin-top: 0.2rem;
  color: #ffffff;
  height: var(--fluid-14-18);
  width: var(--fluid-14-18);
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
