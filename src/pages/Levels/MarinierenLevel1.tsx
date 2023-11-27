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
          descriptionOne="Bratensoße"
          recipeCategoryLabelOne="Soße"
          recipeCategoryColorOne="default"
          imgOne="assets/Bildrecherche/marinieren_lvl1_bratensauce.JPG"

          titleTwo="Rezept 2"
          descriptionTwo="Himbeersoße"
          recipeCategoryLabelTwo="Soße"
          recipeCategoryColorTwo="default"
          imgTwo="assets/Bildrecherche/marinieren_lvl1_himbeersauce.JPG"

          titleThree="Rezept 3"
          descriptionThree="Schokosoße"
          recipeCategoryLabelThree="Soße"
          recipeCategoryColorThree="default"
          imgThree="assets/Bildrecherche/marinieren_lvl1_schokosauce.JPG"

          id="3_"
        />
      </IonContent>
    </IonPage>
  );
};

export default MarinierenLevel1;
