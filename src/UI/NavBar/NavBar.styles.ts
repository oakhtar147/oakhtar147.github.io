import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  background-color: #111;

  @media (max-width: 768px) {
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;

export const StyledNavLink = styled(NavLink).attrs((props) => ({
  activeStyle: {
    color: props.to !== "/" && "#a36018",
    fontWeight: "600",
  },
}))`
  margin: 2% 1.8%;
  ${({ to }) =>
    to === "/" && { marginRight: "auto", fontWeight: 800, fontSize: "20px" }};
  text-decoration: none;
  color: white;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.36, 0.33, 0.44, 1.09);
  position: relative;
  z-index: 1;
  padding: 10px;
  text-transform: uppercase;
  ${({ showDropdown }) => showDropdown && { display: "block" }}

  &:after,
  &:before {
    transition: all 0.3s cubic-bezier(0.36, 0.33, 0.44, 1.09);
  }

  &:hover {
    color: black;
  }

  &:after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 1px;
    content: ".";
    color: transparent;
    background: #daa520;
    visibility: none;
    opacity: 0;
    z-index: -1;
  }

  &:hover:after {
    opacity: 1;
    visibility: visible;
    height: 100%;
  }

  @media (max-width: 768px) {
    ${({ to }) => to !== "/" && { display: "none" }};
    margin: 0.8% 0%;
    margin-right: 1.5%;
    padding: 2% 2%;
  }
`;
