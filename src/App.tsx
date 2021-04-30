import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from "components/About/About";
import Skills from "components/Skills/Skills";
import Certificates from "components/Certificates/Certificates";
import Projects from "components/Projects/Projects";
import Contact from "components/Contact/Contact";

const App: React.FC = () => {
  return (
    <>
    <Switch>
      <Route path="/" exact component={About} />
      <Route path="/skills" exact component={Skills} />
      <Route path="/certificates" exact component={Certificates} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
    </>
  );
}

export default App;
