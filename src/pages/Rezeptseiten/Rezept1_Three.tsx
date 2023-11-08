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

const Rezept1_Three: React.FC = () => {
  // Define the recipe data as an object
  const rezept = {
    name: "Apfelstrudel",
    portionen: 4,
    arbeitszeit: "30 min",
    arbeitsschritte: 8,
    schwierigkeit: "mittel",
    zutaten: [
      {
        name: "Äpfel",
        menge: "1 kg",
        einheit: ""
      },
      {
        name: "Zucker",
        menge: "100 g",
        einheit: ""
      },
      {
        name: "Zimt",
        menge: "1 TL",
        einheit: ""
      },
      {
        name: "Semmelbrösel",
        menge: "50 g",
        einheit: ""
      },
      {
        name: "Butter",
        menge: "100 g",
        einheit: ""
      },
      {
        name: "Strudelteig",
        menge: "1 Pkg.",
        einheit: ""
      }
    ],
    anleitung: [
      "Äpfel schälen, entkernen und in dünne Scheiben schneiden.",
      "Zucker und Zimt vermischen und über die Äpfel streuen.",
      "Semmelbrösel in Butter goldbraun rösten.",
      "Strudelteig ausrollen und mit der Butter-Semmelbrösel-Mischung bestreichen.",
      "Die Äpfel auf dem Teig verteilen und den Strudel einrollen.",
      "Den Strudel auf ein mit Backpapier ausgelegtes Backblech legen und im vorgeheizten Ofen bei 180°C ca. 40 Minuten backen.",
      "Den Apfelstrudel aus dem Ofen nehmen und etwas abkühlen lassen.",
      "Den Apfelstrudel in Stücke schneiden und servieren."
    ]
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
            <IonBackButton defaultHref="/schneiden" />
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

export default Rezept1_Three;
