import styled from "styled-components";
import { SocialIcon } from "react-social-icons";

export const RoundedImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Description = styled.h1`
  max-width: 500px;
  display: "inline-block";
  margin: 0;
  font-size: 2.5em;
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 8%;
`;

export const StyledSocialIcon = styled(SocialIcon)`
  margin: 1%;
  transition: opacity 0.2s linear;
  &:hover {
    opacity: 0.6;
  }
`;
