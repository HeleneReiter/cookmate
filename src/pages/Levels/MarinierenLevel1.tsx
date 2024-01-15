import React from 'react';
import {
  IonContent,
  IonPage,
} from '@ionic/react';

import RecipeCard from '../eigeneKomponenten/RecipeCard'; 

const MarinierenLevel1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <RecipeCard
          titleOne="Rezept1"
          descriptionOne="Schokosauce"
          labelOne="Vegetarisch"
          classnameOne="labelVeggie"
          recipeCategoryLabelOne="Sauce"
          recipeCategoryColorOne="default"
          imgOne="/assets/Bildrecherche/marinieren_lvl1_schokosauce.JPG"

          titleTwo="Rezept2"
          descriptionTwo="Joghurtsauce"
          labelTwo="Vegetarisch"
          classnameTwo="labelVeggie"
          recipeCategoryLabelTwo="Sauce"
          recipeCategoryColorTwo="default"
          imgTwo="/assets/Bildrecherche/marinieren_lvl1_joghurtsauce.JPG"

          titleThree="Rezept3"
          descriptionThree="Bratensauce"
          labelThree="Fleisch"
          classnameThree="labelMeat"
          recipeCategoryLabelThree="Sauce"
          recipeCategoryColorThree="default"
          imgThree="/assets/Bildrecherche/marinieren_lvl1_bratensauce.JPG"

          id="4_"
        />
      </IonContent>
    </IonPage>
  );
};

export default MarinierenLevel1;
