import React from "react";
import styled from "styled-components";

const Divider = styled.div`
    width: 90%;
    height: 2px;
    background: linear-gradient(to right, transparent, #489167, transparent);
    margin-bottom: 2rem;
`;

const SectionDivider = () => {
    return (
        <Divider />
    );
}

export default SectionDivider;
