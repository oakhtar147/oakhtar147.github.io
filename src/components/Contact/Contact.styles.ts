import styled from "styled-components";
import { StyledSocialIcon } from "components/About/About.styles";

export const SubSection = styled.section`
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 990px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Section = styled.div`
  flex-basis: 50%;
  text-align: center;
  transition: transform 0.2s linear;

  & > h2 {
    text-transform: uppercase;
    font-size: 2em;
    letter-spacing: 2px;
  }

  @media only screen and (max-width: 500px) {
    & > h2 {
      transform: scale(0.75);
    }
  }
`;

export const ContactSocialIcon = styled(StyledSocialIcon)`
  margin-bottom: 3%;
`;

export const Container = styled.div`
  min-height: 100vh;

  @media only screen and (max-width: 990px) {
    display: flex;
    flex-direction: column;
  }
`;
