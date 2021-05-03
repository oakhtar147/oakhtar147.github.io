import styled from "styled-components";
import { SocialIcon } from "react-social-icons";

export const DescriptionSVG = styled.img`
  width: 80%;
  height: 70%;
  margin: 2%;

  @media only screen and (max-width: 525px) {
    width: 70%;
    height: 60%;
    margin: 4%;
  }

  @media only screen and (max-width: 910px) {
    width: 60%;
    height: 60%;
    margin: 4%;
  }
`;

export const RoundedImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-size: cover;
  object-fit: cover;
  transition: transform 0.2s linear;

  @media only screen and (max-width: 525px) {
    transform: scale(0.75);
  }
`;

export const Bio = styled.h1`
  max-width: 500px;
  display: "inline-block";
  margin: 0;
  font-size: 2.5em;
  margin: 10% 0;
  transition: transform 0.2s linear;

  @media only screen and (max-width: 525px) {
    transform: scale(0.8);
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 8%;

  @media only screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

export const StyledSocialIcon = styled(SocialIcon)`
  margin: 1%;
  transition: opacity 0.2s linear;
  &:hover {
    opacity: 0.6;
  }

  @media only screen and (max-width: 525px) {
    margin: 0% 1%;
  }
`;

export const Description = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6% 0;

  & > h2 {
    text-transform: uppercase;
    font-size: 2em;
    letter-spacing: 2px;
    margin-bottom: 4%;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;

  & > p {
    font-size: 1.5em;
    margin: 0 3%;
    max-width: 45%;
  }

  @media only screen and (max-width: 910px) {
    flex-direction: column;

    & > p {
      margin: 5%;
      max-width: 80%;
      font-size: 1.1em;
    }
  }
`;
