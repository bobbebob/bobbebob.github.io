import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  max-width: 850px;
  margin: 0 auto;
  background: linear-gradient(to bottom, #030712 50%, rgba(3, 7, 18, 0.9) 100%);
  padding: 1.875rem;
  color: #ffffff;
  z-index: 10; /* Ensure it stays above other content */
  box-shadow: 0px 15px 15px -20px #489167;
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
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
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
