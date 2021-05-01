import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  background-color: #1f1f1f;
`;

export const StyledNavLink = styled(NavLink).attrs((props) => ({
  activeStyle: { color: props.to !== "/" && "#1f78ac", fontWeight: "600" },
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

  /* @media (max-width: 768px) {
    display: none;
  } */
`;
