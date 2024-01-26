// Navbar.js
import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from "@mui/material/Button";

const NavbarContainer = styled.nav`
  background-color: #333;
  margin-top: 0;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 8px;
  &:hover {
    background-color: #555;
  }
`;

const TopBar = forwardRef((props, ref) => {
  const user = {loggedIn: false}

  const handleLogout = () => {
    console.log('Logged out')
  }

  return (
    <NavbarContainer ref={ref}>
      <NavbarLink to="/home">Home</NavbarLink>
      <NavbarLink to="/test">Test</NavbarLink>
      {user?.loggedIn && (<Button variant="outlined" onClick={handleLogout}>Logout</Button>)}
    </NavbarContainer>
  );
});

export default TopBar;