import React from 'react';
import type { Routes } from '../NavBar';
import { NavListLink } from './Dropdown.styles';
import { FlexList } from './Dropdown.styles';

interface Props {
  showDropdown: boolean;
  handleCloseDropdown: () => void;
}

const Dropdown: React.FC<Props> = ({ showDropdown, handleCloseDropdown }) => {
  const routes: Routes = {
    Skills: "/skills",
    Projects: "/projects",
    Contact: "/contact",
  }

  return (
    <FlexList>
      {Object.keys(routes).map(route => (
          <NavListLink onClick={handleCloseDropdown} showDropdown={showDropdown} key={route} to={routes[route]}>{route}</NavListLink>
      ))}
    </FlexList>
  )
}

export default Dropdown;