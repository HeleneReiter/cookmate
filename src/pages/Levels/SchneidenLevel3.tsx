import React from 'react';
import {
  IonContent,
  IonPage,
} from '@ionic/react';

import RecipeCard from '../eigeneKomponenten/RecipeCard'; // Stellen Sie sicher, dass der Importpfad korrekt ist

const SchneidenLevel3: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <RecipeCard
          titleOne="Rezept 1"
          descriptionOne="Chili con Carne"
          recipeCategoryLabelOne="Hauptspeise"
          recipeCategoryColorOne="default"
          imgOne="assets/Bildrecherche/schneiden_lvl3_chiliconcarne.JPG"

          titleTwo="Rezept 2"
          descriptionTwo="Chili con Carne"
          recipeCategoryLabelTwo="Hauptspeise"
          recipeCategoryColorTwo="default"
          imgTwo="assets/Bildrecherche/schneiden_lvl3_chiliconcarne.JPG"

          titleThree="Rezept 3"
          descriptionThree="Chili con Carne"
          recipeCategoryLabelThree="Hauptspeise"
          recipeCategoryColorThree="default"
          imgThree="assets/Bildrecherche/schneiden_lvl3_chiliconcarne.JPG"

          id="3_"
        />
      </IonContent>
    </IonPage>
  );
};

export default SchneidenLevel3;
