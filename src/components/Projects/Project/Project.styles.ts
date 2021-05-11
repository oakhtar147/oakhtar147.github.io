import styled from "styled-components";

export const Card = styled.div`
  padding: 3%;
  margin: 2% 4%;
  background-color: #1f1f1f;
  opacity: 0.8;
  transition: all 0.2s ease-in;

  & > h3 {
    text-align: center;
    padding-bottom: 3%;
    border-bottom: 1px solid gold;
  }

  & > p {
    max-width: 85%;
  }

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`;

export const ClickableProjectCard = styled.a`
  text-decoration: none;
  color: white;
`;
