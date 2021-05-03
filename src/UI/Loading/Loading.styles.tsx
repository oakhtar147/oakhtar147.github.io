import styled from 'styled-components';

export const LoadingImage = styled.img`
  width: 300px;
  height: 300px;
  margin-Top: 10%;
  transition: transform 0.2s linear;

  @media only screen and (max-width: 525px) {
    /* width: 250px;
    height: 250px; */
    transform: scale(0.8);
  }
`

export const Figure = styled.figure`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  min-height: 100vh
`;