import React from 'react';
import {
  IonContent,
  IonPage,
} from '@ionic/react';

import RecipeCard from '../eigeneKomponenten/RecipeCard'; // Stellen Sie sicher, dass der Importpfad korrekt ist

const SchneidenLevel1: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <RecipeCard
          titleOne="Rezept 1"
          descriptionOne="Chinesisch gebratene Nudeln"
          recipeCategoryLabelOne="Hauptspeise"
          recipeCategoryColorOne="default"
          imgOne="assets/Bildrecherche/schneiden_lvl1_gebratenenudeln_.JPG"

          titleTwo="Rezept 2"
          descriptionTwo="Avocadotomatensalat"
          recipeCategoryLabelTwo="Hauptspeise"
          recipeCategoryColorTwo="default"
          imgTwo="assets/Bildrecherche/schneiden_lvl1_avocadotomatensalat.JPG"

          titleThree="Rezept 3"
          descriptionThree="Asiatisches Gemüse"
          recipeCategoryLabelThree="Hauptspeise"
          recipeCategoryColorThree="default"
          imgThree="assets/Bildrecherche/schneiden_lvl1_asiatischesgemüse.JPG"

          id="1_"
        />
      </IonContent>
    </IonPage>
  );
};

export default SchneidenLevel1;
