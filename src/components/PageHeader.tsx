import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div<{ theme: string }>`
  display: flex;
  position: sticky;
  top: 0;
  max-width: 850px;
  margin: 0;
  background: linear-gradient(
    to bottom,
    var(--background) 50%,
    ${(props) =>
        props.theme === "light"
          ? "rgba(255, 255, 255, 0.9)"
          : "rgba(3, 7, 18, 0.9)"}
      100%
  );
  padding: 1.4rem 2.6rem;
  z-index: 10; /* Ensure it stays above other content */
  box-shadow: 0px 15px 15px -20px var(--text-secondary);
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 2.5rem;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  display: inline-block;
  text-transform: uppercase;
  color: var(--text-primary);
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
  color: var(--text-primary);
  opacity: 0.5;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  span {
    font-size: 1rem;
  }

  &:hover {
    color: var(--theme-toggle-color);
    opacity: 1;
  }
`;

const PageHeader = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <HeaderWrapper theme={theme}>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
      </NavList>
      <ThemeToggle onClick={toggleTheme}>
        <span className="material-icons">
          {theme === "light" ? "dark_mode" : "light_mode"}
        </span>
      </ThemeToggle>
    </HeaderWrapper>
  );
};

export default PageHeader;
