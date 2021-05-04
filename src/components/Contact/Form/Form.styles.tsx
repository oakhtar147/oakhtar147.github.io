import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 16px;
  font: Monstserrat;
  font-weight: 600;
  background-color: #a36018;
  border: none;
  margin: 0 3%;
  transition: all 0.15s linear;

  &:hover {
    background-color: #1f1f1f;
    color: #a36018;
  }

  @media only screen and (max-width: 500px) {
    margin: 5% 0;
  }
`;


export const FormContainer = styled.form`
  
  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    & > div {
      margin: 1%; 
    }
  }
`;


export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  margin: 2%;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;