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

const BasicTeig: React.FC = () => {
  return (
    <IonPage
      style={{
        background: "url(/assets/Bildrecherche/teig_lvl1_palatschinke.JPG)",
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
            <IonButton routerLink="/BasicRezept_Teig" fill="outline">
              Zum Rezept
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default BasicTeig;
