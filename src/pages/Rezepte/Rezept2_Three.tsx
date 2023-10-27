import React from "react";
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
} from "@ionic/react";

const Rezept2_Three: React.FC = () => {
  const rezept = {
    name: "Veganes Currysüppchen",
    zutaten: [
      "Kokosmilch",
      "Karotten",
      "Zucchini",
      "Kichererbsen",
      "Currygewürze",
    ],
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/marinieren" />
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
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Rezept2_Three;
