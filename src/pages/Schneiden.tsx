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
  IonButton,
  IonRouterOutlet,
  IonButtons,
  IonBackButton
} from '@ionic/react';
import { Link } from 'react-router-dom'; // Importieren Sie Link aus react-router-dom





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
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
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
          <div style={{ marginBottom: '16px' }}></div>
          <Link to={`/rezept${currentSegment}`}> {/* Erstellt den Link zu "/rezept1", "/rezept2", oder "/rezept3" basierend auf dem aktuellen Segment */}
            <IonButton fill='outline'>Zum Rezept</IonButton>
          </Link>
        </IonCardContent>
      </IonCard>
    </IonPage>
  );
}

export default Schneiden;
