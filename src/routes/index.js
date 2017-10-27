import React from 'react';
import Route from 'react-router/lib/Route';
import Switch from 'react-router/lib/Route';
import App from '../components/App/App.jsx';
import Ondernemend from '../components/Ondernemend/Ondernemend.jsx';
import Betrokken from '../components/Betrokken/Betrokken.jsx';
import Onderzoekend from '../components/Ontwerpend/Ontwerpend.jsx';
import Ontwerpend from "../components/Onderzoekend/Onderzoekend.jsx";

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
}

export default routes;
