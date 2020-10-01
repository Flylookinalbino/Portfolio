import React from 'react';
import { Switch, Route } from 'react-router-dom';
import JumboTron from '../View/JumboTron';
import Skills from '../View/Skills';
import CloneProjects from '../View/CloneProjects';
import VanillaJSProjects from '../View/VanillaJSProjects';
import Animation from '../View/Animation';
import ReactJSProjects from '../View/ReactJSProjects';
import ProductionProjects from '../View/ProductionProjects';
import ContactME from '../View/ContactME';

const Pages = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <JumboTron />
        </Route>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/clone-projects'>
          <CloneProjects />
        </Route>
        <Route path='/vanillajs-projects'>
          <VanillaJSProjects />
        </Route>
        <Route path='/animation'>
          <Animation />
        </Route>
        <Route path='/reactjs-projects'>
          <ReactJSProjects />
        </Route>
        <Route path='/production-projects'>
          <ProductionProjects />
        </Route>
        <Route path='/contact-me'>
          <ContactME />
        </Route>
      </Switch>
    </div>
  );
};

export default Pages;
