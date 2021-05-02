import { useState, useEffect } from 'react';
import './hamburgers.css'

interface Props {
  showDropdown: boolean;
  toggleDropdown: () => void;
}

const Hamburger: React.FC<Props> = ({ showDropdown, toggleDropdown }) => {
  const [classes, setClasses] = useState(["hamburger", "hamburger--elastic"])

  useEffect(() => {
    if (showDropdown) {
      setClasses(prevState => prevState.concat("is-active"))
    } else {
      setClasses(prevState => prevState.filter(class_ => class_ !== "is-active"))
    }
  }, [showDropdown])


  const handleToggleActiveClass = () => {
    setClasses(prevState => {
      if (prevState.find(class_ => class_ === "is-active")) 
        return prevState.filter(class_ => class_ !== "is-active")
      else {
        return prevState.concat("is-active")
      }
    });
    toggleDropdown();
  }

  return (
  <div className={classes.join(" ")} onClick={handleToggleActiveClass}>
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </div>
  )
}

export default Hamburger;