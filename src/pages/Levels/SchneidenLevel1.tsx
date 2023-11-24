import React from 'react';
import {
  IonContent,
  IonPage,
} from '@ionic/react';

import RecipeCard from '../eigeneKomponenten/RecipeCard'; // Stellen Sie sicher, dass der Importpfad korrekt ist

import Apfelstrudel from '../Rezeptseiten/Rezepte/Apfelstrudel.json'; 

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
          descriptionOne= "gebratene Nudeln"
          recipeCategoryLabelOne= "Hauptspeise"
          recipeCategoryColorOne= "default"
          imgOne="assets/Bildrecherche/schneiden_lvl1_gebratenenudeln_.JPG"
          
          titleTwo="Rezept 2"
          descriptionTwo="Avocadotomatensalat"
          recipeCategoryLabelTwo="Hauptspeise"
          recipeCategoryColorTwo="default"
          imgTwo="assets/Bildrecherche/schneiden_lvl1_avocadotomatensalat.JPG"

          titleThree="Rezept 3"
          descriptionThree="Asiatisches Gemüse"
          recipeCategoryLabelThree="Hauptspeise"
          recipeCategoryColorThree="default"
          imgThree="assets/Bildrecherche/schneiden_lvl1_asiatischesgemüse.JPG"

          id="1_"
        />
      </IonContent>
    </IonPage>
  );
};

export default SchneidenLevel1;
