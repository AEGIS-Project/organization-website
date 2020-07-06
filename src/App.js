import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import HomePage from './pages/home-page.js';
import AboutUs from './pages/about-us.js';
import OurMission from './pages/our-mission.js';
import OurWork from './pages/our-work.js';
import SupportUs from './pages/support-us.js';

function App() {

  return (
  	<div>
  		<Helmet>
  			<title>The AEGIS Initiative</title>
  			<meta charSet="utf-8" />
  			<meta name="description"
  						content="Making education more accessible through technology" />
			</Helmet>
  			
	    <Switch>
	      <Route exact path="/" component={HomePage} />
	      <Route exact path="/who-we-are" component={AboutUs} />
	      <Route exact path="/what-we-do" component={OurMission} />
	      <Route exact path="/our-work" component={OurWork} />
        <Route exact path="/support-us" component={SupportUs} />
	    </Switch>
    </div>
  );
}

export default App;
