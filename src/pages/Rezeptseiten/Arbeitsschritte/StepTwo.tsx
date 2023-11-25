import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonCard, IonCardContent, IonButton } from '@ionic/react';


const StepTwo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <h1>Arbeitsschritt 1</h1>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
           
            
            <img src="assets/Animation/Knoblaub_schneiden.gif" alt="Knoblauch" />

            <h2>Step One</h2>
            <p>Das Gemüse waschen und in kleine Stücke schneiden.</p>
            
            <IonButton routerLink='/StepTwo'>Weiter</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default StepTwo;
