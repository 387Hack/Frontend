import React from "react";
import { NavbarWrapper, UlWrapper } from "./Navbar.style";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <UlWrapper>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/signup">
          <li>Signup</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
        <Link to="login">
          <li>Logout</li>
        </Link>
      </UlWrapper>
    </NavbarWrapper>
  );
}
