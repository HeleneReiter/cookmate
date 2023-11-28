import React from 'react';
import {
  IonContent,
  IonPage,
} from '@ionic/react';

import RecipeCard from '../eigeneKomponenten/RecipeCard'; // Stellen Sie sicher, dass der Importpfad korrekt ist

const MarinierenLevel1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <RecipeCard
          titleOne="Rezept 1"
          descriptionOne="Schokosoße"
          recipeCategoryLabelOne="Soße"
          recipeCategoryColorOne="default"
          imgOne="assets/Bildrecherche/marinieren_lvl1_schokosauce.JPG"

          titleTwo="Rezept 2"
          descriptionTwo="Joghurtsoße"
          recipeCategoryLabelTwo="Soße"
          recipeCategoryColorTwo="default"
          imgTwo="assets/Bildrecherche/marinieren_lvl1_joghurtsauce.JPG"

          titleThree="Rezept 3"
          descriptionThree="Bratensoße"
          recipeCategoryLabelThree="Soße"
          recipeCategoryColorThree="default"
          imgThree="assets/Bildrecherche/marinieren_lvl1_bratensauce.JPG"

          id="4_"
        />
      </IonContent>
    </IonPage>
  );
};

export default MarinierenLevel1;
