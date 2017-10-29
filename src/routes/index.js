import React from 'react';
import Route from 'react-router/lib/Route';
import Switch from 'react-router/lib/Route';
import Util from 'util-is';

import App from '../components/App/App.jsx';
import Ondernemend from '../components/Ondernemend/Ondernemend.jsx';
import Betrokken from '../components/Betrokken/Betrokken.jsx';
import Onderzoekend from '../components/Onderzoekend/Onderzoekend.jsx';
import Ontwerpend from "../components/Ontwerpend/Ontwerpend.jsx";

const routes = (
  <Switch>
    <Route path="/" component={App}/>,
    <Route path="ontwerpend" components={Ontwerpend}/>,
    <Route path="onderzoekend" components={Onderzoekend}/>,
    <Route path="ondernemend" components={Ondernemend}/>,
    <Route path="betrokken" components={Betrokken}/>
  </Switch>
);

// HMR
if (module.hot) {
  require('../components/Ondernemend/Ondernemend.jsx');
  require('../components/Onderzoekend/Onderzoekend.jsx');
  require('../components/Ontwerpend/Ontwerpend.jsx');
  require('../components/Betrokken/Betrokken.jsx');

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
