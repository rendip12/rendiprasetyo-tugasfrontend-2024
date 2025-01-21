import styled from "styled-components";

export const StyledNavbar = styled.nav`
  background-color: #343a40;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarBrand = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  a {
    color: #ffc107;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
`;

export const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
`;

export const NavbarLink = styled.li`
  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #ffc107;
    }
  }
`;
