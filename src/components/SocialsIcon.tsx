import styled from "styled-components";
import React from "react";

interface SocialsIconProps {
  href: string;
  src: string;
  alt: string;
}

const Container = styled.div`
  position: relative;
  background-color: #030712;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  padding: 1.1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #489167;
    border-radius: 50%;
    filter: blur(6px);
    z-index: -1;
  }
`;

const Img = styled.img`
  margin-top: 0.2rem;
  color: #ffffff;
  height: 1.2rem;
  width: 1.2rem;
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
