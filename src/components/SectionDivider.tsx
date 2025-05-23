import React from "react";
import styled from "styled-components";

const Divider = styled.div`
  width: 90%;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent,
    var(--text-secondary),
    transparent
  );
  margin-bottom: 2rem;
  align-self: center;
`;

const SectionDivider = () => {
  return <Divider />;
};

export default SectionDivider;
