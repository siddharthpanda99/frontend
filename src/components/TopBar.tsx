// Navbar.js
import React, { forwardRef, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import { useUserContext } from "../hooks/useUserContext";

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
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logged out");
    setUser({
      ...user, // Copy the old fields
      token: "", // But override this one
      loggedIn: false,
      acceptedPolicy: false,
    });
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        token: "",
        loggedIn: false,
        acceptedPolicy: false,
      })
      );
      navigate("/login");
  };

  return (
    <NavbarContainer ref={ref}>
      <NavbarLink to="/home">Home</NavbarLink>
      <NavbarLink to="/test">Test</NavbarLink>
      {user?.loggedIn && (
        <Button variant="outlined" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </NavbarContainer>
  );
});

export default TopBar;
