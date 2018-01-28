import React from 'react';
import Route from 'react-router/lib/Route';
import Switch from 'react-router/lib/Route';
import Util from 'util-is';

import App from '../components/App/App.jsx';
import CategoryOverview from '../components/categories/CategoryOverview.jsx';

{/*Detail pages*/
}
import DetailPage from "../components/detail-pages/DetailPage.jsx";

{/*Criteria detail pages*/
}
import CriteriaDetail from '../components/categories/criteria-detail/CriteriaDetail.jsx'
import BasicPage from "../components/basic-page/BasicPage.jsx";

const routes = (
  <Switch>
    <Route path="/" component={App}/>,
    <Route path="/:category" components={CategoryOverview}/>,
    <Route path="project/:project" components={DetailPage}/>,
    <Route path="general/:basicpage" components={BasicPage}/>,
    <Route path="/:category/:criteriadetail" components={CriteriaDetail}/>,
  </Switch>
);

// HMR
if (module.hot) {

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
