import React from 'react';
import {
  IonContent,
  IonPage,
} from '@ionic/react';

import RecipeCard from '../eigeneKomponenten/RecipeCard'; 

const SchneidenLevel1: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <RecipeCard
          titleOne="Rezept1"
          descriptionOne="Chinesisch gebratene Nudeln"
          recipeCategoryLabelOne="Hauptspeise"
          recipeCategoryColorOne="default"
          imgOne="/assets/Bildrecherche/schneiden_lvl1_gebratenenudeln_.JPG"

          titleTwo="Rezept2"
          descriptionTwo="Avocadotomatensalat"
          recipeCategoryLabelTwo="Hauptspeise"
          recipeCategoryColorTwo="default"
          imgTwo="/assets/Bildrecherche/schneiden_lvl1_avocadotomatensalat.JPG"

          titleThree="Rezept3"
          descriptionThree="Asiatisches Gemüse"
          recipeCategoryLabelThree="Hauptspeise"
          recipeCategoryColorThree="default"
          imgThree="/assets/Bildrecherche/schneiden_lvl1_asiatischesgemüse.JPG"

          id="1_"
        />
      </IonContent>
    </IonPage>
  );
};

export default SchneidenLevel1;
