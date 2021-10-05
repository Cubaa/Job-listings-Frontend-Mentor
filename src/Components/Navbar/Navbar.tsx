import React from "react";
import styled from "styled-components";
import { FilterTablets } from "./FilterTablets/FilterTablets";

export const Navbar: React.FC = () => {
  return (
    <>
      <NavbarContainer>
        <FilterTablets />
      </NavbarContainer>
    </>
  );
};

const NavbarContainer = styled.nav`
  position: relative;
  width: 100%;
  height: 120px;
  padding: 1rem;
  background-image: url("./images/bg-header-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #5ea4a4;
`;
