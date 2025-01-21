import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar, NavbarBrand, NavbarLinks, NavbarLink } from "../styled/Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <NavbarBrand>
        <Link to="/">Navbar</Link>
      </NavbarBrand>
      <NavbarLinks>
        <NavbarLink>
          <Link to="/">Home</Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="/movie/create">Add Movie</Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="/movie/popular">Popular</Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="/movie/now">Now Playing</Link>
        </NavbarLink>
      </NavbarLinks>
    </StyledNavbar>
  );
}

export default Navbar;

