import { StyledNavLink, Nav }  from './NavigationLinks.styles';

interface Routes {
  [k: string]: string;
}

const NavigationLinks = () => {
  const routes: Routes = {
    "Osama Akhtar.": "/",
    Skills: "/skills",
    Projects: "/projects",
    Contact: "/contact",
    Certificates: "/certificates"
  }

  return (
    <Nav>
      {Object.keys(routes).map(route => (
        <StyledNavLink key={route} to={routes[route]}>{route}</StyledNavLink>
      ))}
    </Nav>
  )
}


export default NavigationLinks;