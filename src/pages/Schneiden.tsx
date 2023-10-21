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
  IonToolbar,
  IonButton
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
            <h2>Rezept 1</h2>
            <p>Gemüsepfanne mit Huhn</p>
            <IonChip>
              <IonLabel color="danger">Fleisch</IonLabel>
            </IonChip>
            <IonChip>
              <IonLabel color="default">Hauptgericht</IonLabel>
            </IonChip>
            <IonButton fill='outline'>Wählen</IonButton>
          </>
        );
      case "Two":
        return (
          <>
            <h2>Rezept 2</h2>
            <p>Gemüseauflauf</p>
            <IonChip>
              <IonLabel color="success">Vegetarisch</IonLabel>
            </IonChip>
            <IonChip>
              <IonLabel color="default">Hauptgericht</IonLabel>
            </IonChip>
            <IonButton fill='outline'>Wählen</IonButton>
          </>
        );
      case "Three":
        return (
          <>
            <h2>Rezept 3</h2>
            <p>Gemüsebowl</p>
            <IonChip>
              <IonLabel color="primary">Vegan</IonLabel>
            </IonChip>
            <IonChip>
              <IonLabel color="default">Hauptgericht</IonLabel>
            </IonChip>
            <IonButton fill='outline'>Wählen</IonButton>
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
