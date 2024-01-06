import React from 'react';
import {
  IonContent,
  IonPage,
} from '@ionic/react';

import RecipeCard from '../eigeneKomponenten/RecipeCard'; 

const SchneidenLevel2: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <RecipeCard
          titleOne="Rezept1"
          descriptionOne="Thaikokossuppe"
          recipeCategoryLabelOne="Hauptspeise"
          recipeCategoryColorOne="default"
          imgOne="/assets/Bildrecherche/schneiden_lvl2_thaikokossuppe.JPG"
        
          titleTwo="Rezept2"
          descriptionTwo="Moussaka"
          recipeCategoryLabelTwo="Hauptspeise"
          recipeCategoryColorTwo="default"
          imgTwo="/assets/Bildrecherche/schneiden_lvl2_moussaka.JPG"

          titleThree="Rezept3"
          descriptionThree="Misosuppe"
          recipeCategoryLabelThree="Hauptspeise"
          recipeCategoryColorThree="default"
          imgThree="/assets/Bildrecherche/schneiden_lvl2_misosuppe.JPG"

          id="2_"
        />
      </IonContent>
    </IonPage>
  );
};

export default SchneidenLevel2;
