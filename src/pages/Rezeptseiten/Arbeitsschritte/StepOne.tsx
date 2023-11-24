import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonCard, IonCardContent, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';

const StepOne: React.FC = () => {
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
            {/* Hier kannst du dein GIF einfügen */}
            <img src="dein_gif_url" alt="Arbeitsschritt 1 GIF" style={{ maxWidth: '100%' }} />

            <h2>Step One</h2>
            <p>Das Gemüse waschen und in kleine Stücke schneiden.</p>
            
            {/* Hier kannst du einen Button oder Link für die Weiterleitung einfügen */}
            <Link to="/nächster_schritt">
              <IonButton>Weiter zum nächsten Schritt</IonButton>
            </Link>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default StepOne;
