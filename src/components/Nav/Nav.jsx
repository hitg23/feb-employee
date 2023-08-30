import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  background-color: #03a9f4;
  color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.26);
  z-index: 1;
  position: relative;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 40%;
  list-style: none;
  align-item: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export default function Nav() {
  return (
    <StyledNav>
      <h2>Employee App</h2>
      <StyledUl>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/employee-list">Employee List</StyledLink>
        </li>
        <li>
          <StyledLink to="/add-employee">Add Employee</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Log Out</StyledLink>
        </li>
      </StyledUl>
    </StyledNav>
  );
}
