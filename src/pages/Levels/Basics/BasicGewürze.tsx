import React from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonChip,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonToolbar,
} from "@ionic/react";

const BasicGewürze: React.FC = () => {
  return (
    <IonPage
      style={{
        background: "url(/assets/Bildrecherche/gewuerze_lvl1_fetatomatenauflauf.JPG)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <h2>Rezept1</h2>
            <p>Description</p>
            <IonChip>
              <IonLabel color="success">Vegetarisch</IonLabel>
            </IonChip>
            <IonChip>
              <IonLabel color="default">Hauptspeise</IonLabel>
            </IonChip>
            <IonButton routerLink="/BasicRezept_Gewürze" fill="outline">
              Zum Rezept
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default BasicGewürze;
