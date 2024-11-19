import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 3rem;
`;

interface SectionWrapperProps {
    children: React.ReactNode;
  }

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default SectionWrapper;