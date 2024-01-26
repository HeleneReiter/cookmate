import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "./theme/variables.css";

/* Theme variables */
import Menu from "./components/menu";

import BasicSchneiden from "./pages/Levels/Basics/BasicSchneiden";
import BasicMarinieren from "./pages/Levels/Basics/BasicMarinieren";
import BasicTeig from "./pages/Levels/Basics/BasicTeig";
import BasicGewürze from "./pages/Levels/Basics/BasicGewürze";

import BasicSchneidenRezept1 from "./pages/Rezeptseiten/Arbeitsschritte/BasicSchneidenRezept1";
import BasicRezept_Schneiden from "./pages/Rezeptseiten/BasicRezept_Schneiden";

import BasicMarinierenRezept1 from "./pages/Rezeptseiten/Arbeitsschritte/BasicMarinierenRezept1";
import BasicRezept_Marinieren from "./pages/Rezeptseiten/BasicRezept_Marinieren";

import BasicTeigRezept1 from "./pages/Rezeptseiten/Arbeitsschritte/BasicTeigRezept1";
import BasicRezept_Teig from "./pages/Rezeptseiten/BasicRezept_Teig";

import BasicGewürzeRezept1 from "./pages/Rezeptseiten/Arbeitsschritte/BasicGewürzeRezept1";
import BasicRezept_Gewürze from "./pages/Rezeptseiten/BasicRezept_Gewürze";

import SchneidenLevel1 from "./pages/Levels/SchneidenLevel1";
import SchneidenLevel2 from "./pages/Levels/SchneidenLevel2";
import SchneidenLevel3 from "./pages/Levels/SchneidenLevel3";
import SchneidenRezept1 from "./pages/Rezeptseiten/Arbeitsschritte/SchneidenRezept1";

import SchneidenRezept2 from "./pages/Rezeptseiten/Arbeitsschritte/SchneidenRezept2";
import SchneidenRezept3 from "./pages/Rezeptseiten/Arbeitsschritte/SchneidenRezept3";

import MarinierenLevel1 from "./pages/Levels/MarinierenLevel1";
import MarinierenLevel2 from "./pages/Levels/MarinierenLevel2";
import MarinierenLevel3 from "./pages/Levels/MarinierenLevel3";
import MarinierenRezept1 from "./pages/Rezeptseiten/Arbeitsschritte/MarinierenRezept1";

import Rezept1_One from "./pages/Rezeptseiten/Rezept1_One";
import Rezept2_One from "./pages/Rezeptseiten/Rezept2_One";
import Rezept3_One from "./pages/Rezeptseiten/Rezept3_One";
import Rezept4_One from "./pages/Rezeptseiten/Rezept4_One";

import BackenLevel1 from "./pages/Levels/BackenLevel1";
import BackenLevel2 from "./pages/Levels/BackenLevel2";
import BackenLevel3 from "./pages/Levels/BackenLevel3";

import TeigLevel1 from "./pages/Levels/TeigLevel1";
import TeigLevel2 from "./pages/Levels/TeigLevel2";
import TeigLevel3 from "./pages/Levels/TeigLevel3";

import GewürzeLevel1 from "./pages/Levels/GewürzeLevel1";
import GewürzeLevel2 from "./pages/Levels/GewürzeLevel2";
import GewürzeLevel3 from "./pages/Levels/GewürzeLevel3";

import AnrichtenLevel1 from "./pages/Levels/AnrichtenLevel1";
import AnrichtenLevel2 from "./pages/Levels/AnrichtenLevel2";
import AnrichtenLevel3 from "./pages/Levels/AnrichtenLevel3";

import Start from "./pages/Start";
import Loading from "./pages/Loading";
import Finish from "./pages/Finish";


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Route path="/start" component={Start} exact />
          <Route path="/loading" component={Loading} exact />
          <Route path="/finish" component={Finish} exact />

          <Route path="/home" component={Home} exact />
      

          <Route exact path="/basics/schneiden" component={BasicSchneiden}></Route>
          <Route exact path="/basics/marinieren" component={BasicMarinieren}></Route>
          <Route exact path="/basics/teig" component={BasicTeig}></Route>
          <Route exact path="/basics/gewurze" component={BasicGewürze}></Route>

          <Route exact path="/schneiden/level1" component={SchneidenLevel1}></Route>
          <Route exact path="/schneiden/level2" component={SchneidenLevel2}></Route>
          <Route exact path="/schneiden/level3" component={SchneidenLevel3}></Route>
          <Route exact path="/marinieren/level1" component={MarinierenLevel1}></Route>
          <Route exact path="/marinieren/level2" component={MarinierenLevel2}></Route>
          <Route exact path="/marinieren/level3" component={MarinierenLevel3}></Route>

          <Route exact path="/backen/level1" component={BackenLevel1}></Route>
          <Route exact path="/backen/level2" component={BackenLevel2}></Route>
          <Route exact path="/backen/level3" component={BackenLevel3}></Route>

          <Route exact path="/teig/level1" component={TeigLevel1}></Route>
          <Route exact path="/teig/level2" component={TeigLevel2}></Route>
          <Route exact path="/teig/level3" component={TeigLevel3}></Route>

          <Route exact path="/gewurze/level1" component={GewürzeLevel1}></Route>
          <Route exact path="/gewurze/level2" component={GewürzeLevel2}></Route>
          <Route exact path="/gewurze/level3" component={GewürzeLevel3}></Route>

          <Route exact path="/anrichten/level1" component={AnrichtenLevel1}></Route>
          <Route exact path="/anrichten/level2" component={AnrichtenLevel2}></Route>
          <Route exact path="/anrichten/level3" component={AnrichtenLevel3}></Route>
         
          <Route exact path="/BasicRezept_Schneiden" component={BasicRezept_Schneiden}></Route>
          <Route exact path="/BasicRezept_Marinieren" component={BasicRezept_Marinieren}></Route>
          <Route exact path="/BasicRezept_Teig" component={BasicRezept_Teig}></Route>
          <Route exact path="/BasicRezept_Gewürze" component={BasicRezept_Gewürze}></Route>

          <Route exact path="/rezept1_One" component={Rezept1_One}></Route>
          <Route exact path="/rezept2_One" component={Rezept2_One}></Route>
          <Route exact path="/rezept3_One" component={Rezept3_One}></Route>
          <Route exact path="/rezept4_One" component={Rezept4_One}></Route>
        
          
          <Route exact path="/BasicSchneidenRezept1" component={BasicSchneidenRezept1}></Route>
          <Route exact path="/BasicMarinierenRezept1" component={BasicMarinierenRezept1}></Route>
          <Route exact path="/BasicTeigRezept1" component={BasicTeigRezept1}></Route>
          <Route exact path="/BasicGewürzeRezept1" component={BasicGewürzeRezept1}></Route>

          <Route exact path="/SchneidenRezept1" component={SchneidenRezept1}></Route>
          <Route exact path="/SchneidenRezept2" component={SchneidenRezept2}></Route>
          <Route exact path="/SchneidenRezept3" component={SchneidenRezept3}></Route>
          <Route exact path="/MarinierenRezept1" component={MarinierenRezept1}></Route>
          

          <Route exact path="/">
          <Redirect from="/" to="/start" exact />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
