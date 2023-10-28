import React from 'react';
import {
  IonContent,
  IonPage,
} from '@ionic/react';

import RecipeCard from '../eigeneKomponenten/RecipeCard'; // Stellen Sie sicher, dass der Importpfad korrekt ist

const Schneiden: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <RecipeCard
          titleOne="Rezept 1"
          descriptionOne="Veganes Currysüppchen"
          recipeCategoryLabelOne="Hauptspeise"
          recipeCategoryColorOne="default"

          titleTwo="Rezept 2"
          descriptionTwo="Veganes Currysüppchen"
          recipeCategoryLabelTwo="Hauptspeise"
          recipeCategoryColorTwo="default"

          titleThree="Rezept 3"
          descriptionThree="Veganes Currysüppchen"
          recipeCategoryLabelThree="Hauptspeise"
          recipeCategoryColorThree="default"

          id="1_"
        />
      </IonContent>
    </IonPage>
  );
};

export default Schneiden;
