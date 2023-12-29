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

import '../eigeneKomponenten/Rezeptvorschau'


const Rezeptvorschau: React.FC = () => {
  // Simulierte Rezeptdaten (ersetze diese mit echten Daten)
  const rezept = {
    name: 'Gemüsepfanne mit Huhn',
    zutaten: ['Huhn', 'Paprika', 'Zucchini', 'Zwiebeln', 'Gewürze']
  };

  const handleCloseClick = () => {
    window.location.href = "/RecipeCard"; /* Stimmt hier nicht!!*/
  };
  
  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <img
            onClick={handleCloseClick}
            className="close"
            alt="schließen"
            src="/assets/Elemente/close_white.png" style={{ position: 'absolute', right: '20px'}}
            />
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