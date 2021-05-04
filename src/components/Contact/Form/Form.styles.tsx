import styled from 'styled-components';
import { TextField } from '@material-ui/core';

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
`;