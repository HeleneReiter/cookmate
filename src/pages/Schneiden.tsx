import React, { useState } from 'react';
import {
  IonCard,
  IonCardContent,
  IonChip,
  IonHeader,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonPage,
  IonToolbar
} from '@ionic/react';

function Schneiden() {
  const [currentSegment, setCurrentSegment] = useState("One"); // Initialer Segmentwert

  const handleSegmentChange = (event: CustomEvent) => {
    const newSegmentValue = event.detail.value as string; // Typumwandlung zu string
    setCurrentSegment(newSegmentValue);
  };

  // Funktion zum Rendern des Inhalts der IonCard basierend auf dem aktuellen Segmentwert
  const renderCardContent = () => {
    switch (currentSegment) {
      case "One":
        return (
          <>
            <h2>Card Titel - One</h2>
            <p>Card Text - One</p>
            <IonChip>
              <IonLabel>Chip Label - One</IonLabel>
            </IonChip>
          </>
        );
      case "Two":
        return (
          <>
            <h2>Card Titel - Two</h2>
            <p>Card Text - Two</p>
            <IonChip>
              <IonLabel>Chip Label - Two</IonLabel>
            </IonChip>
          </>
        );
      case "Three":
        return (
          <>
            <h2>Card Titel - Three</h2>
            <p>Card Text - Three</p>
            <IonChip>
              <IonLabel>Chip Label - Three</IonLabel>
            </IonChip>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
         <IonSegment scrollable={true} value={currentSegment} onIonChange={handleSegmentChange}>
            <IonSegmentButton value="One">
              One
            </IonSegmentButton>
            <IonSegmentButton value="Two">
              Two
            </IonSegmentButton>
            <IonSegmentButton value="Three">
              Three
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      
      {/* Hier wird der Inhalt der IonCard gerendert basierend auf dem aktuellen Segmentwert */}
      <IonCard>
        <IonCardContent>
          {renderCardContent()}
        </IonCardContent>
      </IonCard>
    </IonPage>
  );
}

export default Schneiden;
