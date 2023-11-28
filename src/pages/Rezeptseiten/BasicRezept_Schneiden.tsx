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
  IonButton
} from '@ionic/react';
import Apfelstrudel from './Rezepte/Apfelstrudel.json'; //zu grischischer salat ändern

const BasicRezept_Schneiden: React.FC = () => {
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

  const [showMoreText, setShowMoreText] = useState(false);
  const buttonLabel = showMoreText ? 'Weniger anzeigen' : 'Mehr anzeigen';

  const toggleShowMore = () => {
    setShowMoreText(!showMoreText);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/basics/Schneiden" />
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
            <IonButton routerLink='/BasicSchneidenRezept1'> Jetzt Kochen! </IonButton>
            
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default BasicRezept_Schneiden;
