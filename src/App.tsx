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
import SchneidenRezept1_Two from "./pages/Rezeptseiten/Arbeitsschritte/SchneidenRezept1_Two";
import SchneidenRezept1_Three from "./pages/Rezeptseiten/Arbeitsschritte/SchneidenRezept1_Three";

import SchneidenRezept2 from "./pages/Rezeptseiten/Arbeitsschritte/SchneidenRezept2";
import SchneidenRezept2_Two from "./pages/Rezeptseiten/Arbeitsschritte/SchneidenRezept2_Two";
import SchneidenRezept2_Three from "./pages/Rezeptseiten/Arbeitsschritte/SchneidenRezept2_Three";

import SchneidenRezept3 from "./pages/Rezeptseiten/Arbeitsschritte/SchneidenRezept3";
import SchneidenRezept3_Two from "./pages/Rezeptseiten/Arbeitsschritte/SchneidenRezept3_Two";
import SchneidenRezept3_Three from "./pages/Rezeptseiten/Arbeitsschritte/SchneidenRezept3_Three";

import MarinierenLevel1 from "./pages/Levels/MarinierenLevel1";
import MarinierenLevel2 from "./pages/Levels/MarinierenLevel2";
import MarinierenLevel3 from "./pages/Levels/MarinierenLevel3";

import MarinierenRezept1 from "./pages/Rezeptseiten/Arbeitsschritte/MarinierenRezept1";
import MarinierenRezept4_Two from "./pages/Rezeptseiten/Arbeitsschritte/MarinierenRezept4_Two";
import MarinierenRezept4_Three from "./pages/Rezeptseiten/Arbeitsschritte/MarinierenRezept4_Three";

import MarinierenRezept5_One from "./pages/Rezeptseiten/Arbeitsschritte/MarinierenRezept5_One";
import MarinierenRezept5_Two from "./pages/Rezeptseiten/Arbeitsschritte/MarinierenRezept5_Two";
import MarinierenRezept5_Three from "./pages/Rezeptseiten/Arbeitsschritte/MarinierenRezept5_Three";

import MarinierenRezept6_One from "./pages/Rezeptseiten/Arbeitsschritte/MarinierenRezept6_One";
import MarinierenRezept6_Two from "./pages/Rezeptseiten/Arbeitsschritte/MarinierenRezept6_Two";
import MarinierenRezept6_Three from "./pages/Rezeptseiten/Arbeitsschritte/MarinierenRezept6_Three";

import BackenRezept7_One from "./pages/Rezeptseiten/Arbeitsschritte/BackenRezept7_One";
import BackenRezept7_Two from "./pages/Rezeptseiten/Arbeitsschritte/BackenRezept7_Two";
import BackenRezept7_Three from "./pages/Rezeptseiten/Arbeitsschritte/BackenRezept7_Three";

import BackenRezept8_One from "./pages/Rezeptseiten/Arbeitsschritte/BackenRezept8_One";
import BackenRezept8_Two from "./pages/Rezeptseiten/Arbeitsschritte/BackenRezept8_Two";
import BackenRezept8_Three from "./pages/Rezeptseiten/Arbeitsschritte/BackenRezept8_Three";

import BackenRezept9_One from "./pages/Rezeptseiten/Arbeitsschritte/BackenRezept9_One";
import BackenRezept9_Two from "./pages/Rezeptseiten/Arbeitsschritte/BackenRezept9_Two";
import BackenRezept9_Three from "./pages/Rezeptseiten/Arbeitsschritte/BackenRezept9_Three";


import Rezept1_One from "./pages/Rezeptseiten/Rezept1_One";
import Rezept1_Two from "./pages/Rezeptseiten/Rezept1_Two";
import Rezept1_Three from "./pages/Rezeptseiten/Rezept1_Three";

import Rezept2_One from "./pages/Rezeptseiten/Rezept2_One";
import Rezept2_Two from "./pages/Rezeptseiten/Rezept2_Two";
import Rezept2_Three from "./pages/Rezeptseiten/Rezept2_Three";

import Rezept3_One from "./pages/Rezeptseiten/Rezept3_One";
import Rezept3_Two from "./pages/Rezeptseiten/Rezept3_Two";
import Rezept3_Three from "./pages/Rezeptseiten/Rezept3_Three";

import Rezept4_One from "./pages/Rezeptseiten/Rezept4_One";
import Rezept4_Two from "./pages/Rezeptseiten/Rezept4_Two";
import Rezept4_Three from "./pages/Rezeptseiten/Rezept4_Three";

import Rezept5_One from "./pages/Rezeptseiten/Rezept5_One";
import Rezept5_Two from "./pages/Rezeptseiten/Rezept5_Two";
import Rezept5_Three from "./pages/Rezeptseiten/Rezept5_Three";

import Rezept6_One from "./pages/Rezeptseiten/Rezept6_One";
import Rezept6_Two from "./pages/Rezeptseiten/Rezept6_Two";
import Rezept6_Three from "./pages/Rezeptseiten/Rezept6_Three";

import Rezept7_One from "./pages/Rezeptseiten/Rezept7_One";
import Rezept7_Two from "./pages/Rezeptseiten/Rezept7_Two";
import Rezept7_Three from "./pages/Rezeptseiten/Rezept7_Three";

import Rezept8_One from "./pages/Rezeptseiten/Rezept8_One";
import Rezept8_Two from "./pages/Rezeptseiten/Rezept8_Two";
import Rezept8_Three from "./pages/Rezeptseiten/Rezept8_Three";

import Rezept9_One from "./pages/Rezeptseiten/Rezept9_One";
import Rezept9_Two from "./pages/Rezeptseiten/Rezept9_Two";
import Rezept9_Three from "./pages/Rezeptseiten/Rezept9_Three";

import Rezept10_One from "./pages/Rezeptseiten/Rezept10_One";
import Rezept10_Two from "./pages/Rezeptseiten/Rezept10_Two";
import Rezept10_Three from "./pages/Rezeptseiten/Rezept10_Three";

import Rezept11_One from "./pages/Rezeptseiten/Rezept11_One";
import Rezept11_Two from "./pages/Rezeptseiten/Rezept11_Two";
import Rezept11_Three from "./pages/Rezeptseiten/Rezept11_Three";

import Rezept12_One from "./pages/Rezeptseiten/Rezept12_One";
import Rezept12_Two from "./pages/Rezeptseiten/Rezept12_Two";
import Rezept12_Three from "./pages/Rezeptseiten/Rezept12_Three";

import Rezept13_One from "./pages/Rezeptseiten/Rezept13_One";
import Rezept13_Two from "./pages/Rezeptseiten/Rezept13_Two";
import Rezept13_Three from "./pages/Rezeptseiten/Rezept13_Three";

import Rezept14_One from "./pages/Rezeptseiten/Rezept14_One";
import Rezept14_Two from "./pages/Rezeptseiten/Rezept14_Two";
import Rezept14_Three from "./pages/Rezeptseiten/Rezept14_Three";

import Rezept15_One from "./pages/Rezeptseiten/Rezept15_One";
import Rezept15_Two from "./pages/Rezeptseiten/Rezept15_Two";
import Rezept15_Three from "./pages/Rezeptseiten/Rezept15_Three";

import Rezept16_One from "./pages/Rezeptseiten/Rezept16_One";
import Rezept16_Two from "./pages/Rezeptseiten/Rezept16_Two";
import Rezept16_Three from "./pages/Rezeptseiten/Rezept16_Three";

import Rezept17_One from "./pages/Rezeptseiten/Rezept17_One";
import Rezept17_Two from "./pages/Rezeptseiten/Rezept17_Two";
import Rezept17_Three from "./pages/Rezeptseiten/Rezept17_Three";

import Rezept18_One from "./pages/Rezeptseiten/Rezept18_One";
import Rezept18_Two from "./pages/Rezeptseiten/Rezept18_Two";
import Rezept18_Three from "./pages/Rezeptseiten/Rezept18_Three";

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

import AnrichtenRezept16_One from "./pages/Rezeptseiten/Arbeitsschritte/AnrichtenRezept16_One";
import AnrichtenRezept16_Two from "./pages/Rezeptseiten/Arbeitsschritte/AnrichtenRezept16_Two";
import AnrichtenRezept16_Three from "./pages/Rezeptseiten/Arbeitsschritte/AnrichtenRezept16_Three";

import AnrichtenRezept17_One from "./pages/Rezeptseiten/Arbeitsschritte/AnrichtenRezept17_One";
import AnrichtenRezept17_Two from "./pages/Rezeptseiten/Arbeitsschritte/AnrichtenRezept17_Two";
import AnrichtenRezept17_Three from "./pages/Rezeptseiten/Arbeitsschritte/AnrichtenRezept17_Three";

import AnrichtenRezept18_One from "./pages/Rezeptseiten/Arbeitsschritte/AnrichtenRezept18_One";
import AnrichtenRezept18_Two from "./pages/Rezeptseiten/Arbeitsschritte/AnrichtenRezept18_Two";
import AnrichtenRezept18_Three from "./pages/Rezeptseiten/Arbeitsschritte/AnrichtenRezept18_Three";

import Start from "./pages/Start";
import Loading from "./pages/Loading";
import Finish from "./pages/Finish";


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
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
          <Route exact path="/rezept1_Two" component={Rezept1_Two}></Route>
          <Route exact path="/rezept1_Three" component={Rezept1_Three}></Route>

          <Route exact path="/rezept2_One" component={Rezept2_One}></Route>
          <Route exact path="/rezept2_Two" component={Rezept2_Two}></Route>
          <Route exact path="/rezept2_Three" component={Rezept2_Three}></Route>

          <Route exact path="/rezept3_One" component={Rezept3_One}></Route>
          <Route exact path="/rezept3_Two" component={Rezept3_Two}></Route>
          <Route exact path="/rezept3_Three" component={Rezept3_Three}></Route>
          
          <Route exact path="/rezept4_One" component={Rezept4_One}></Route>
          <Route exact path="/rezept4_Two" component={Rezept4_Two}></Route>
          <Route exact path="/rezept4_Three" component={Rezept4_Three}></Route>

          <Route exact path="/rezept5_One" component={Rezept5_One}></Route>
          <Route exact path="/rezept5_Two" component={Rezept5_Two}></Route>
          <Route exact path="/rezept5_Three" component={Rezept5_Three}></Route>

          <Route exact path="/rezept6_One" component={Rezept6_One}></Route>
          <Route exact path="/rezept6_Two" component={Rezept6_Two}></Route>
          <Route exact path="/rezept6_Three" component={Rezept6_Three}></Route>

          <Route exact path="/rezept7_One" component={Rezept7_One}></Route>
          <Route exact path="/rezept7_Two" component={Rezept7_Two}></Route>
          <Route exact path="/rezept7_Three" component={Rezept7_Three}></Route>

          <Route exact path="/rezept8_One" component={Rezept8_One}></Route>
          <Route exact path="/rezept8_Two" component={Rezept8_Two}></Route>
          <Route exact path="/rezept8_Three" component={Rezept8_Three}></Route>

          <Route exact path="/rezept9_One" component={Rezept9_One}></Route>
          <Route exact path="/rezept9_Two" component={Rezept9_Two}></Route>
          <Route exact path="/rezept9_Three" component={Rezept9_Three}></Route>

          <Route exact path="/rezept10_One" component={Rezept10_One}></Route>
          <Route exact path="/rezept10_Two" component={Rezept10_Two}></Route>
          <Route exact path="/rezept10_Three" component={Rezept10_Three}></Route>

          <Route exact path="/rezept11_One" component={Rezept11_One}></Route>
          <Route exact path="/rezept11_Two" component={Rezept11_Two}></Route>
          <Route exact path="/rezept11_Three" component={Rezept11_Three}></Route>

          <Route exact path="/rezept12_One" component={Rezept12_One}></Route>
          <Route exact path="/rezept12_Two" component={Rezept12_Two}></Route>
          <Route exact path="/rezept12_Three" component={Rezept12_Three}></Route>

          <Route exact path="/rezept13_One" component={Rezept13_One}></Route>
          <Route exact path="/rezept13_Two" component={Rezept13_Two}></Route>
          <Route exact path="/rezept13_Three" component={Rezept13_Three}></Route>

          <Route exact path="/rezept14_One" component={Rezept14_One}></Route>
          <Route exact path="/rezept14_Two" component={Rezept14_Two}></Route>
          <Route exact path="/rezept14_Three" component={Rezept14_Three}></Route>

          <Route exact path="/rezept15_One" component={Rezept15_One}></Route>
          <Route exact path="/rezept15_Two" component={Rezept15_Two}></Route>
          <Route exact path="/rezept15_Three" component={Rezept15_Three}></Route>

          <Route exact path="/rezept16_One" component={Rezept16_One}></Route>
          <Route exact path="/rezept16_Two" component={Rezept16_Two}></Route>
          <Route exact path="/rezept16_Three" component={Rezept16_Three}></Route>

          <Route exact path="/rezept17_One" component={Rezept17_One}></Route>
          <Route exact path="/rezept17_Two" component={Rezept17_Two}></Route>
          <Route exact path="/rezept17_Three" component={Rezept17_Three}></Route>

          <Route exact path="/rezept18_One" component={Rezept18_One}></Route>
          <Route exact path="/rezept18_Two" component={Rezept18_Two}></Route>
          <Route exact path="/rezept18_Three" component={Rezept18_Three}></Route>
        
          
          <Route exact path="/BasicSchneidenRezept1" component={BasicSchneidenRezept1}></Route>
          <Route exact path="/BasicMarinierenRezept1" component={BasicMarinierenRezept1}></Route>
          <Route exact path="/BasicTeigRezept1" component={BasicTeigRezept1}></Route>
          <Route exact path="/BasicGewürzeRezept1" component={BasicGewürzeRezept1}></Route>

          <Route exact path="/SchneidenRezept1" component={SchneidenRezept1}></Route>
          <Route exact path="/SchneidenRezept1_Two" component={SchneidenRezept1_Two}></Route>
          <Route exact path="/SchneidenRezept1_Three" component={SchneidenRezept1_Three}></Route>

          <Route exact path="/SchneidenRezept2" component={SchneidenRezept2}></Route>
          <Route exact path="/SchneidenRezept2_Two" component={SchneidenRezept2_Two}></Route>
          <Route exact path="/SchneidenRezept2_Three" component={SchneidenRezept2_Three}></Route>

          <Route exact path="/SchneidenRezept3" component={SchneidenRezept3}></Route>
          <Route exact path="/SchneidenRezept3_Two" component={SchneidenRezept3_Two}></Route>
          <Route exact path="/SchneidenRezept3_Three" component={SchneidenRezept3_Three}></Route>
          
          <Route exact path="/MarinierenRezept1" component={MarinierenRezept1}></Route>
          <Route exact path="/MarinierenRezept4_Two" component={MarinierenRezept4_Two}></Route>
          <Route exact path="/MarinierenRezept4_Three" component={MarinierenRezept4_Three}></Route>

          <Route exact path="/MarinierenRezept5_One" component={MarinierenRezept5_One}></Route>
          <Route exact path="/MarinierenRezept5_Two" component={MarinierenRezept5_Two}></Route>
          <Route exact path="/MarinierenRezept5_Three" component={MarinierenRezept5_Three}></Route>

          <Route exact path="/MarinierenRezept6_One" component={MarinierenRezept6_One}></Route>
          <Route exact path="/MarinierenRezept6_Two" component={MarinierenRezept6_Two}></Route>
          <Route exact path="/MarinierenRezept6_Three" component={MarinierenRezept6_Three}></Route>

          <Route exact path="/BackenRezept7_One" component={BackenRezept7_One}></Route>
          <Route exact path="/BackenRezept7_Two" component={BackenRezept7_Two}></Route>
          <Route exact path="/BackenRezept7_Three" component={BackenRezept7_Three}></Route>

          <Route exact path="/BackenRezept8_One" component={BackenRezept8_One}></Route>
          <Route exact path="/BackenRezept8_Two" component={BackenRezept8_Two}></Route>
          <Route exact path="/BackenRezept8_Three" component={BackenRezept8_Three}></Route>

          <Route exact path="/BackenRezept9_One" component={BackenRezept9_One}></Route>
          <Route exact path="/BackenRezept9_Two" component={BackenRezept9_Two}></Route>
          <Route exact path="/BackenRezept9_Three" component={BackenRezept9_Three}></Route>

          <Route exact path="/AnrichtenRezept16_One" component={AnrichtenRezept16_One}></Route>
          <Route exact path="/AnrichtenRezept16_Two" component={AnrichtenRezept16_Two}></Route>
          <Route exact path="/AnrichtenRezept16_Three" component={AnrichtenRezept16_Three}></Route>

          <Route exact path="/AnrichtenRezept17_One" component={AnrichtenRezept17_One}></Route>
          <Route exact path="/AnrichtenRezept17_Two" component={AnrichtenRezept17_Two}></Route>
          <Route exact path="/AnrichtenRezept17_Three" component={AnrichtenRezept17_Three}></Route>

          <Route exact path="/AnrichtenRezept18_One" component={AnrichtenRezept18_One}></Route>
          <Route exact path="/AnrichtenRezept18_Two" component={AnrichtenRezept18_Two}></Route>
          <Route exact path="/AnrichtenRezept18_Three" component={AnrichtenRezept18_Three}></Route>


          

          <Route exact path="/">
          <Redirect from="/" to="/start" exact />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
