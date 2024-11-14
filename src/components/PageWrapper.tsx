import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 850px;
  margin: 0 auto;
  padding: 0 2.5rem;
  width: 100%;
  overflow-x: hidden;
`;

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <Wrapper className="page-wrapper">{children}</Wrapper>;
};

export default PageWrapper;
