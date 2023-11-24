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
          descriptionOne="Thaikokossuppe"
          recipeCategoryLabelOne="Hauptspeise"
          recipeCategoryColorOne="default"
          imgOne="assets/Bildrecherche/schneiden_lvl2_thaikokossuppe.JPG"
        
          titleTwo="Rezept 2"
          descriptionTwo="Moussaka"
          recipeCategoryLabelTwo="Hauptspeise"
          recipeCategoryColorTwo="default"
          imgTwo="assets/Bildrecherche/schneiden_lvl2_moussaka.JPG"

          titleThree="Rezept 3"
          descriptionThree="Misosuppe"
          recipeCategoryLabelThree="Hauptspeise"
          recipeCategoryColorThree="default"
          imgThree="assets/Bildrecherche/schneiden_lvl2_misosuppe.JPG"

          id="2_"
        />
      </IonContent>
    </IonPage>
  );
};

export default SchneidenLevel2;
