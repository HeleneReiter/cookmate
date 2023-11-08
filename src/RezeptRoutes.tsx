import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Rezept1_One from './pages/Rezeptseiten/Rezept1_One';
import Rezept1_Two from './pages/Rezeptseiten/Rezept1_Two';
import Rezept1_Three from './pages/Rezeptseiten/Rezept1_Three';
import Rezept2_One from './pages/Rezeptseiten/Rezept2_One';
import Rezept2_Two from './pages/Rezeptseiten/Rezept2_Two';
import Rezept2_Three from './pages/Rezeptseiten/Rezept2_Three';

const RezeptRoutes = () => {
  return (
    <Switch>
      <Route path="/rezept1_One">
        <Rezept1_One />
      </Route>
      <Route path="/rezept1_Two">
        <Rezept1_Two />
      </Route>
      <Route path="/rezept1_Three">
        <Rezept1_Three />
      </Route>

      <Route path="/rezept2_One">
        <Rezept2_One />
      </Route>
      <Route path="/rezept2_Two">
        <Rezept2_Two />
      </Route>
      <Route path="/rezept2_Three">
        <Rezept2_Three />
      </Route>
    </Switch>
  );
};

export default RezeptRoutes;
