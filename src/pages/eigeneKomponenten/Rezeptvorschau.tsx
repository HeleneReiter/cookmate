import React from 'react';
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
  IonLabel
} from '@ionic/react';

const Rezeptvorschau: React.FC = () => {
  // Simulierte Rezeptdaten (ersetze diese mit echten Daten)
  const rezept = {
    name: 'Gemüsepfanne mit Huhn',
    zutaten: ['Huhn', 'Paprika', 'Zucchini', 'Zwiebeln', 'Gewürze']
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
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Rezeptvorschau;
