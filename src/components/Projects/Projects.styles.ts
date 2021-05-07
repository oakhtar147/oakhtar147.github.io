import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectList = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  background-color: #111;

  @media only screen and (max-width: 875px) {
    grid-template-columns: 50% 50%;
  }

  @media only screen and (max-width: 735px) {
    grid-template-columns: 80%;
    margin-bottom: 4%;
    justify-content: center;
  }
`;
