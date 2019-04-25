
import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from '../components/pages/NotFoundPage';
import Header from '../components/containers/Header';
import HomePage from '../components/pages/HomePage/index';
import FeaturePage from '../components/pages/FeaturePage';
import Footer from '../components/containers/Footer';
import RegistrationPage from '../components/pages/RegistrationPage';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="Geo Rent"
    >
      <meta name="description" content="Geo Rent" />
    </Helmet>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/features" component={FeaturePage} />
      <Route path="/signup" component={RegistrationPage} />
    </Switch>

  </div>
);

export default App;
