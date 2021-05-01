import { Nav, StyledNavLink }  from './NavBar.styles';

interface Routes {
  [k: string]: string;
}

const NavBar = () => {
  const routes: Routes = {
    "Osama Akhtar.": "/",
    Skills: "/skills",
    Projects: "/projects",
    Certificates: "/certificates",
    Contact: "/contact",
  }

  return (
    <Nav>
      {Object.keys(routes).map(route => (
        <StyledNavLink key={route} to={routes[route]}>{route}</StyledNavLink>
      ))}
    </Nav>
  )
}


export default NavBar;