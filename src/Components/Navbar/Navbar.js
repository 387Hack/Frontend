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
        <Link to="/game3">
          <li>Game3</li>
        </Link>
        <Link to="/login">
          <li>Logout</li>
        </Link>
        <Link to="/game1">
          <li>Game1</li>
        </Link>
      </UlWrapper>
    </NavbarWrapper>
  );
}
