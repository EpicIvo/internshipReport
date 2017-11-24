import React from 'react';
import Route from 'react-router/lib/Route';
import Switch from 'react-router/lib/Route';
import Util from 'util-is';

import App from '../components/App/App.jsx';
import Ondernemend from '../components/Ondernemend/Ondernemend.jsx';
import Betrokken from '../components/Betrokken/Betrokken.jsx';
import Onderzoekend from '../components/Onderzoekend/Onderzoekend.jsx';
import Ontwerpend from "../components/Ontwerpend/Ontwerpend.jsx";
import Ninlaro from "../components/detail-pages/Ninlaro.jsx";
import Davidoff from "../components/detail-pages/Davidoff.jsx";
import Mentos from "../components/detail-pages/Mentos.jsx";
import Hero from "../components/detail-pages/Hero.jsx";
import Schwartau from "../components/detail-pages/Schwartau.jsx";

const routes = (
  <Switch>
    <Route path="/" component={App}/>,
    <Route path="ontwerpend" components={Ontwerpend}/>,
    <Route path="onderzoekend" components={Onderzoekend}/>,
    <Route path="ondernemend" components={Ondernemend}/>,
    <Route path="betrokken" components={Betrokken}/>,
    {/*Detail pages*/}
    <Route path="ninlaro" components={Ninlaro}/>,
    <Route path="zino-davidoff" components={Davidoff}/>,
    <Route path="mentos" components={Mentos}/>,
    <Route path="hero" components={Hero}/>,
    <Route path="schwartau" components={Schwartau}/>,
  </Switch>
);

// HMR
if (module.hot) {
  require('../components/Ondernemend/Ondernemend.jsx');
  require('../components/Onderzoekend/Onderzoekend.jsx');
  require('../components/Ontwerpend/Ontwerpend.jsx');
  require('../components/Betrokken/Betrokken.jsx');
  require('../components/detail-pages/Ninlaro.jsx');
  require('../components/detail-pages/Davidoff.jsx');
  require('../components/detail-pages/Mentos.jsx');
  require('../components/detail-pages/Hero.jsx');
  require('../components/detail-pages/Schwartau.jsx');

  // Avoid errors

  const isString = Util.isString;

  const orgError = console.error; // eslint-disable-line no-console
  console.error = (...args) => { // eslint-disable-line no-console
    if (args && args.length === 1 && isString(args[0]) && args[0].indexOf('You cannot change <Router routes>;') > -1) {
      // React route changed
    } else {
      // Log the error as normally
      orgError.apply(console, args);
    }
  };
}

export default routes;
