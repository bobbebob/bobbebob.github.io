import React from "react";
import styled from "styled-components";

interface ProfilePictureProps {
  src: string;
  alt: string;
}

const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
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
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;
  background-color: #030712;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${(props) => 30 - props.size * 2};
  box-shadow: 0 0 20px 0px #489167;
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
