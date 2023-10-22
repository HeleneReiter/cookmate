// RezeptRoutes.tsx
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Rezept1 from './pages/Rezepte/RezeptOne';
import Rezept2 from './pages/Rezepte/RezeptTwo';
import Rezept3 from './pages/Rezepte/RezeptThree';

const RezeptRoutes = () => {
  return (
    <Switch>
      <Route path="/rezeptOne">
        <Rezept1 />
      </Route>
      <Route path="/rezeptTwo">
        <Rezept2 />
      </Route>
      <Route path="/rezeptThree">
        <Rezept3 />
      </Route>
    </Switch>
  );
};

export default RezeptRoutes;
