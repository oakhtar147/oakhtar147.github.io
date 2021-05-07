import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from 'UI/NavBar/NavBar';
import Footer from 'UI/Footer/Footer.styles';

import About from "components/About/About";
import Skills from "components/Skills/Skills";
import Projects from "components/Projects/Projects";
import Contact from "components/Contact/Contact";

const App: React.FC = () => {
  return (
    <>
    <NavBar />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    <Footer>Made with ❤️ by Osama Akhtar</Footer>
    </>
  );
}

export default App;
