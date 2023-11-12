import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
} from '@ionic/react';
import Apfelstrudel from '/Users/helenereiter/git/cookmate_test/src/pages/Rezeptseiten/Rezepte/Apfelstrudel.json'; 

const Rezept1_One: React.FC = () => {
  // Define the recipe data as an object
  const rezept = {
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

  // Zustand für das Anzeigen des zusätzlichen Textes
  const [showMoreText, setShowMoreText] = useState(false);
  const buttonLabel = showMoreText ? 'Weniger anzeigen' : 'Mehr anzeigen';

  // Funktion zum Umschalten des Zustands
  const toggleShowMore = () => {
    setShowMoreText(!showMoreText);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/schneiden/level1" />
          </IonButtons>
          <h1>Rezeptvorschau</h1>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <h2>{rezept.name}</h2>
            <h3>Zutaten:</h3>
            <IonList>
              {rezept.zutaten.map((zutat, index) => (
                <IonItem key={index}>
                  <IonLabel>
                    {zutat.menge} {zutat.name}
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
            {showMoreText ? (
              <div>
                <h3>Anleitung:</h3>
                <ol>
                  {rezept.anleitung.map((schritt, index) => (
                    <li key={index}>{schritt}</li>
                  ))}
                </ol>
              </div>
            ) : null}
            <p onClick={toggleShowMore}>{buttonLabel}</p>
            <IonButton>Start</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Rezept1_One;
