import React from 'react';
import {
  IonContent,
  IonPage,
} from '@ionic/react';

import RecipeCard from '../eigeneKomponenten/RecipeCard'; // Stellen Sie sicher, dass der Importpfad korrekt ist

const Marinieren: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <RecipeCard
          titleOne="Rezept 1"
          descriptionOne="Gemüsepfanne mit Huhn"
          recipeCategoryLabelOne="Fleisch"
          recipeCategoryColorOne="danger"

          titleTwo="Rezept 2"
          descriptionTwo="Gemüseauflauf"
          recipeCategoryLabelTwo="Vegetarisch"
          recipeCategoryColorTwo="success"

          titleThree="Rezept 3"
          descriptionThree="Gemüsebowl"
          recipeCategoryLabelThree="Vegan"
          recipeCategoryColorThree="primary"

          id="2_"
        />
      </IonContent>
    </IonPage>
  );
};

export default Marinieren;
