import styled from "styled-components";
import { StyledNavLink } from "../NavBar.styles";

export const FlexList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1f1f1f;
  margin: 0;
  padding: 0;
`;

export const NavListLink = styled(StyledNavLink)`
  ${({ showDropdown }) => showDropdown && { display: "block" }};
  padding: 2%;
  transition: visibility 0s, opacity 0.5s linear;
  @media (min-width: 786px) {
    display: none;
  }
`;
