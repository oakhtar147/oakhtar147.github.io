import styled from "styled-components";
import { StyledSocialIcon } from "components/About/About.styles";

export const Container = styled.section`
  display: flex;
  justify-content: space-around;
`;

export const Section = styled.div`
  flex-basis: 50%;
  text-align: center;

  & > h2 {
    text-transform: uppercase;
    font-size: 2em;
    letter-spacing: 2px;
  }
`;

export const ContactSocialIcon = styled(StyledSocialIcon)`
  margin-bottom: 3%;
`;
