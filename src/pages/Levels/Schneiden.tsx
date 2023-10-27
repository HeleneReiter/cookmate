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
          recipeCategoryLabelOne="Fleisch"
          recipeCategoryColorOne="danger"

          titleTwo="Rezept 2"
          descriptionTwo="Veganes Currysüppchen"
          recipeCategoryLabelTwo="Vegetarisch"
          recipeCategoryColorTwo="success"

          titleThree="Rezept 3"
          descriptionThree="Veganes Currysüppchen"
          recipeCategoryLabelThree="Vegan"
          recipeCategoryColorThree="primary"

          id="1_"
        />
      </IonContent>
    </IonPage>
  );
};

export default Schneiden;
