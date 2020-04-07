import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home-page.js';
import AboutUs from './pages/about-us.js';
import OurMission from './pages/our-mission.js';
import OurWork from './pages/our-work.js';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/who-we-are" component={AboutUs} />
      <Route exact path="/what-we-do" component={OurMission} />
      <Route exact path="/our-work" component={OurWork} />
    </Switch>
  );
}

export default App;
