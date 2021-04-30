import { NavLink } from 'react-router-dom'

interface Routes {
  [k: string]: string;
}

const NavigationLinks = () => {
  const routes: Routes = {
    About: "/",
    Skills: "/skills",
    Projects: "/projects",
    Contact: "/contact",
    Certificates: "/certificates"
  }

  return (
    <>
      {Object.keys(routes).map(route => (
        <NavLink key={route} to={routes[route]}>{route}</NavLink>
      ))}
    </>
  )
}


export default NavigationLinks;