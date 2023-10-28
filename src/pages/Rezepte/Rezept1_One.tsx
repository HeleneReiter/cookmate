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
  IonToggle,
  IonButton
} from '@ionic/react';

const Rezept1_One: React.FC = () => {
  // Simulierte Rezeptdaten (ersetze diese mit echten Daten)
  const rezept = {
    name: 'Gemüsepfanne mit Huhn',
    zutaten: ['Huhn', 'Paprika', 'Zucchini', 'Zwiebeln', 'Gewürze']
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
                  <IonLabel>{zutat}</IonLabel>
                </IonItem>
              ))}
            </IonList>
            {showMoreText ? (
              <div>
                <p>Rezept mit den ganzen Anleitungen Schritt für Schritt</p>
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
