import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

export const StyledNavLink = styled(NavLink).attrs((props) => ({
  activeStyle: { color: props.to !== "/" && "#1f78ac", fontWeight: "600" },
}))`
  margin: 2% 3%;
  ${({ to }) =>
    to === "/" && { marginRight: "auto", fontWeight: 800, fontSize: "20px" }};
  text-decoration: none;
  color: black;
  height: 100%;
  transition: all 0.3s ease-in;
  position: relative;
  z-index: 1;
  padding: 10px;
  text-transform: uppercase;

  &:after,
  &:before {
    transition: all 0.5s;
  }

  &:hover {
    color: white;
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
    background: #022b3a;
    visibility: none;
    opacity: 0;
    z-index: -1;
  }

  &:hover:after {
    opacity: 1;
    visibility: visible;
    height: 100%;
  }
`;
