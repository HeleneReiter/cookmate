import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Menu from "./components/menu";
import RezeptRoutes from './RezeptRoutes';
import SchneidenLevel1 from "./pages/Levels/SchneidenLevel1";
import SchneidenLevel2 from "./pages/Levels/SchneidenLevel2";
import SchneidenLevel3 from "./pages/Levels/SchneidenLevel3";
import MarinierenLevel1 from "./pages/Levels/MarinierenLevel1";
import SchneidenRezept1 from "./pages/Rezeptseiten/Arbeitsschritte/SchneidenRezept1";
import SchneidenRezept2 from "./pages/Rezeptseiten/Arbeitsschritte/SchneidenRezept2";
import SchneidenRezept3 from "./pages/Rezeptseiten/Arbeitsschritte/SchneidenRezept3";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Route exact path="/home">
            <Home />
          </Route>


          <Route exact path="/schneiden/level1" component={SchneidenLevel1}></Route>
          <Route exact path="/schneiden/level2" component={SchneidenLevel2}></Route>
          <Route exact path="/schneiden/level3" component={SchneidenLevel3}></Route>
          <Route exact path="/marinieren/level1" component={MarinierenLevel1}></Route>
         
          <Route exact path="/rezept1_One" component={RezeptRoutes}></Route>
          <Route exact path="/rezept1_Two" component={RezeptRoutes}></Route>
          <Route exact path="/rezept1_Three" component={RezeptRoutes}></Route>

          <Route exact path="/rezept2_One" component={RezeptRoutes}></Route>
          <Route exact path="/rezept2_Two" component={RezeptRoutes}></Route>
          <Route exact path="/rezept2_Three" component={RezeptRoutes}></Route>

          <Route exact path="/SchneidenRezept1" component={SchneidenRezept1}></Route>
          <Route exact path="/SchneidenRezept2" component={SchneidenRezept2}></Route>
          <Route exact path="/SchneidenRezept3" component={SchneidenRezept3}></Route>
          

          <Route exact path="/">
          <Redirect to="/home" />
          </Route>


        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
