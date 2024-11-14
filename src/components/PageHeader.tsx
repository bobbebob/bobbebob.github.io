import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  position: relative;
  background-color: #030712;
  padding: 1.875rem 0;
  margin-bottom: 3.5rem;
  color: #ffffff;

  &::before {
    content: "";
    position: absolute;
    bottom: 10px; // Adjust how far below the header the blur extends
    left: 50%;
    transform: translateX(-50%);
    width: 85%; // Adjust how wide the blur is
    height: 40px;
    background: #489167;
    filter: blur(15px); // Adjust blur intensity
    opacity: 1; // Adjust visibility
    z-index: -1;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 2.5rem;
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  display: inline-block;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.5;
  text-decoration: none;
  font-weight: bold;
  transition: opacity 0.3s ease, transform 0.2s ease-out;

  &:hover {
    opacity: 1;
    transform: translateY(-1px);
  }
`;

const ThemeToggle = styled.button`
  margin-left: auto;
  background-color: transparent;
  color: #ffffff;
  opacity: 0.5;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  span {
    font-size: 1rem;
  }

  &:hover {
    color: #d3de3a;
    opacity: 1;
  }
`;

const PageHeader = () => {
  return (
    <HeaderWrapper>
      <NavList>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavItem>
      </NavList>
      <ThemeToggle>
        <span className="material-icons">light_mode</span>
      </ThemeToggle>
    </HeaderWrapper>
  );
};

export default PageHeader;
