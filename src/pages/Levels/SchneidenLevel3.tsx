import React from 'react';
import {
  IonContent,
  IonPage,
} from '@ionic/react';

import RecipeCard from '../eigeneKomponenten/RecipeCard'; 

const SchneidenLevel3: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <RecipeCard
          titleOne="Rezept1"
          descriptionOne="Beef Tatar"
          labelOne="Fleisch"
          classnameOne="labelMeat"
          recipeCategoryLabelOne="Hauptspeise"
          recipeCategoryColorOne="default"
          imgOne="/assets/Bildrecherche/schneiden_lvl3_beeftartare.jpeg"

          titleTwo="Rezept2"
          descriptionTwo="Grichischer Salat"
          labelTwo="Vegetarisch"
          classnameTwo="labelVeggie"
          recipeCategoryLabelTwo="Hauptspeise"
          recipeCategoryColorTwo="default"
          imgTwo="/assets/Bildrecherche/schneiden_lvl1_griechischersalat.JPG"

          titleThree="Rezept3"
          descriptionThree="Chili con Carne"
          labelThree="Fleisch"
          classnameThree="labelMeat"
          recipeCategoryLabelThree="Hauptspeise"
          recipeCategoryColorThree="default"
          imgThree="/assets/Bildrecherche/schneiden_lvl3_chiliconcarne.JPG"

          id="3_"
        />
      </IonContent>
    </IonPage>
  );
};

export default SchneidenLevel3;
