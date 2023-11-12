import React from 'react';
import {
  IonContent,
  IonPage,
} from '@ionic/react';

import RecipeCard from '../eigeneKomponenten/RecipeCard'; // Stellen Sie sicher, dass der Importpfad korrekt ist

const SchneidenLevel2: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <RecipeCard
          titleOne="Rezept 1"
          descriptionOne="Muggle"
          recipeCategoryLabelOne="Hauptspeise"
          recipeCategoryColorOne="default"

          titleTwo="Rezept 2"
          descriptionTwo="Muggle"
          recipeCategoryLabelTwo="Hauptspeise"
          recipeCategoryColorTwo="default"

          titleThree="Rezept 3"
          descriptionThree="Muggle"
          recipeCategoryLabelThree="Hauptspeise"
          recipeCategoryColorThree="default"

          id="2_"
        />
      </IonContent>
    </IonPage>
  );
};

export default SchneidenLevel2;
