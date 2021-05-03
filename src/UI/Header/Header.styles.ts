import styled from "styled-components";

export const Head = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    font-size: 2.5em;
    width: 60%;
  }

  & > p {
    max-width: 60%;
    font-size: 1.2em;
  }
`;

export const PageSVG = styled.img`
  width: 40%;
  height: 40%;
  margin: 6%;

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
