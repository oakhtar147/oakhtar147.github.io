import { useState } from 'react';
import { Nav, StyledNavLink }  from './NavBar.styles';
import Hamburger from './Hamburger/Hamburger';
import Dropdown from './Dropdown/Dropdown'

export interface Routes {
  [k: string]: string;
}

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const routes: Routes = {
    "Osama Akhtar.": "/",
    Skills: "/skills",
    Projects: "/projects",
    Certificates: "/certificates",
    Contact: "/contact",    
  }

  return (
    <>
      <Nav>
        {Object.keys(routes).map(route => (
          <StyledNavLink key={route} to={routes[route]}>{route}</StyledNavLink>
        ))}
        <Hamburger showDropdown={showDropdown} toggleDropdown={() => setShowDropdown(prevState => !prevState)} />
      </Nav>
      {showDropdown && <Dropdown handleCloseDropdown={() => setShowDropdown(false)} showDropdown={showDropdown} />}
    </>
  )
}


export default NavBar;