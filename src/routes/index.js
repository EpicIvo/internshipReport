import React from 'react';
import Route from 'react-router/lib/Route';
import Switch from 'react-router/lib/Route';
import Util from 'util-is';

import App from '../components/App/App.jsx';
import CategoryOverview from '../components/categories/CategoryOverview.jsx';
{/*Detail pages*/}
import DetailPage from "../components/detail-pages/DetailPage.jsx";
{/*Criteria detail pages*/}
import CriteriaDetail from '../components/categories/criteria-detail/CriteriaDetail.jsx'

const routes = (
  <Switch>
    <Route path="/" component={App}/>,
    <Route path="ontwikkelend" components={CategoryOverview} category="ontwikkelend"/>,
    <Route path="ontwerpend" components={CategoryOverview} category="ontwerpend"/>,
    <Route path="onderzoekend" components={CategoryOverview} category="onderzoekend"/>,
    <Route path="ondernemend" components={CategoryOverview} category="ondernemend"/>,
    <Route path="betrokken" components={CategoryOverview} category="betrokken"/>,
    {/*Detail pages*/}
    <Route path="ninlaro" components={DetailPage} project="ninlaro"/>,
    <Route path="zino-davidoff" components={DetailPage} project="davidoff"/>,
    <Route path="mentos" components={DetailPage} project="mentos"/>,
    <Route path="hero" components={DetailPage} project="hero"/>,
    <Route path="schwartau" components={DetailPage} project="schwartau"/>,
    {/*Criteria detail pages*/}
    <Route path="ontwikkelend/technische-kennis-en-analyse" components={CriteriaDetail} category="ontwikkelend" routePath="/ontwikkelend/technische-kennis-en-analyse"/>,
    <Route path="ontwikkelend/testen-en-implementeren" components={CriteriaDetail} category="ontwikkelend" routePath="/ontwikkelend/testen-en-implementeren"/>,
    <Route path="ontwikkelend/ontwikkelen-en-prototypen" components={CriteriaDetail} category="ontwikkelend" routePath="/ontwikkelend/ontwikkelen-en-prototypen"/>,
    <Route path="onderzoekend/onderzoeken-en-analyseren" components={CriteriaDetail} category="onderzoekend" routePath="/onderzoekend/onderzoeken-en-analyseren"/>,
    <Route path="ontwerpend/conceptualiseren" components={CriteriaDetail} category="ontwerpend" routePath="/ontwerpend/conceptualiseren"/>,
    <Route path="ontwerpend/ontwerpen-en-prototypen" components={CriteriaDetail} category="ontwerpend" routePath="/ontwerpend/ontwerpen-en-prototypen"/>,
    <Route path="ondernemend/ondernemende-houding" components={CriteriaDetail} category="ondernemend" routePath="/ondernemend/ondernemende-houding"/>,
    <Route path="ondernemend/ondernemende-vaardigheden" components={CriteriaDetail} category="ondernemend" routePath="/ondernemend/ondernemende-vaardigheden"/>,
    <Route path="ondernemend/projectmatig-werken" components={CriteriaDetail} category="ondernemend" routePath="/ondernemend/projectmatig-werken"/>,
    <Route path="betrokken/lerend-vermogen" components={CriteriaDetail} category="betrokken" routePath="/betrokken/lerend-vermogen"/>,
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
