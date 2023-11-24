import React from 'react';
import {
  IonContent,
  IonPage,
} from '@ionic/react';

import RecipeCard from '../eigeneKomponenten/RecipeCard'; // Stellen Sie sicher, dass der Importpfad korrekt ist

import Apfelstrudel from '/Users/helenereiter/git/cookmate_test/src/pages/Rezeptseiten/Rezepte/Apfelstrudel.json'; 

const SchneidenLevel1: React.FC = () => {
    const rezept2 = {
        name: Apfelstrudel.name,
        portionen: Apfelstrudel.portionen,
        arbeitszeit: Apfelstrudel.arbeitszeit,
        arbeitsschritte: Apfelstrudel.arbeitsschritte,
        schwierigkeit: Apfelstrudel.schwierigkeit,
        zutaten: Apfelstrudel.zutaten,
        anleitung: Apfelstrudel.anleitung,
        label: Apfelstrudel.label,
        learning: Apfelstrudel.learning,
        kategorie: Apfelstrudel.kategorie,
      };

    
  return (
    <IonPage>
      <IonContent>
        <RecipeCard
          titleOne="Rezept 1"
          descriptionOne= "Gericht mit Fleisch"
          recipeCategoryLabelOne= "Hauptspeise"
          recipeCategoryColorOne= "default"
          img="assets/Bildrecherche/schneiden_lvl1_asiatischesgemüse.JPG"

          titleTwo="Rezept 2"
          descriptionTwo={rezept2.name}
          recipeCategoryLabelTwo={rezept2.kategorie}
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

export default SchneidenLevel1;
