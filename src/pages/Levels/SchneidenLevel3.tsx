import React from 'react';
import {
  IonContent,
  IonPage,
} from '@ionic/react';

import RecipeCard from '../eigeneKomponenten/RecipeCard'; 

const SchneidenLevel3: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <RecipeCard
          titleOne="Rezept 1"
          descriptionOne="Beef Tatar"
          recipeCategoryLabelOne="Hauptspeise"
          recipeCategoryColorOne="default"
          imgOne="/assets/Bildrecherche/schneiden_lvl3_beeftartare.jpeg"

          titleTwo="Rezept 2"
          descriptionTwo="Misosuppe"
          recipeCategoryLabelTwo="Hauptspeise"
          recipeCategoryColorTwo="default"
          imgTwo="/assets/Bildrecherche/schneiden_lvl2_misosuppe.JPG"

          titleThree="Rezept 3"
          descriptionThree="Moussaka"
          recipeCategoryLabelThree="Hauptspeise"
          recipeCategoryColorThree="default"
          imgThree="/assets/Bildrecherche/schneiden_lvl2_moussaka.JPG"

          id="3_"
        />
      </IonContent>
    </IonPage>
  );
};

export default SchneidenLevel3;
