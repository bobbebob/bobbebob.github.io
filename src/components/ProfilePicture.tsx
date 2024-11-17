import React from "react";
import styled from "styled-components";
import { keyframes } from 'styled-components';

interface ProfilePictureProps {
  src: string;
  alt: string;
}

const rotateSlowly = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  animation: ${rotateSlowly} 45s linear infinite;
`;

const PictureBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

interface RingProps {
  size: number;
}

const Ring = styled.div<RingProps>`
  position: relative;
  width: ${({ size }) => size * 0.65}rem;
  height: ${({ size }) => size * 0.65}rem;
  background-color: var(--background);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${({ size }) => 30 - size * 2};
  box-shadow: 0 0 20px 0px var(--text-secondary);

  @media (min-width: 768px) {
    width: ${({ size }) => size * 0.9}rem;
    height: ${({ size }) => size * 0.9}rem;
  }

  @media (min-width: 1024px) {
    width: ${({ size }) => size}rem;
    height: ${({ size }) => size}rem;
  }
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;  
  border-radius: 50%;
  z-index: 20;
  position: absolute;
`;

const ProfilePicture = ({ src, alt }: ProfilePictureProps) => {
  return (
    <PictureWrapper>
      <PictureBorder>
        <Ring size={22}>
          <Ring size={17}>
            <Ring size={11}>
              <Picture src={src} alt={alt} />
            </Ring>
          </Ring>
        </Ring>
      </PictureBorder>
    </PictureWrapper>
  );
};

export default ProfilePicture;
