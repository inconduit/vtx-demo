/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import VTXDashboard from 'containers/VTXDashboard/index';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate=""
      defaultTitle=""
    >
      <meta name="description" content="" />
    </Helmet>

    <Switch>
      <Route path="" component={VTXDashboard} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
