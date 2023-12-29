import React, { useState } from 'react';
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
  IonButton
} from '@ionic/react';
import GriechischerSalat from './Rezepte/Basics_Schneiden_Griechischer_Salat.json'; //zu grischischer salat ändern

const BasicRezept_Schneiden: React.FC = () => {
  const rezept = {
    name: GriechischerSalat.name,
    portionen: GriechischerSalat.portionen,
    arbeitszeit: GriechischerSalat.arbeitszeit,
    arbeitsschritte: GriechischerSalat.arbeitsschritte,
    schwierigkeit: GriechischerSalat.schwierigkeit,
    zutaten: GriechischerSalat.zutaten,
    anleitung: GriechischerSalat.anleitung,
    label: GriechischerSalat.label,
    learning: GriechischerSalat.learning,
    kategorie: GriechischerSalat.kategorie,
  };

  const [showMoreText, setShowMoreText] = useState(false);
  const buttonLabel = showMoreText ? 'Weniger anzeigen' : 'Mehr anzeigen';

  const toggleShowMore = () => {
    setShowMoreText(!showMoreText);
  };

  const handleCloseClick = () => {
    window.location.href = "/basics/Schneiden";
  };

  return (
    <IonPage
      style={{
      backgroundImage: `url("/assets/Bildrecherche/schneiden_lvl1_griechischersalat.JPG")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >
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
                  <IonLabel>
                    {zutat.menge} {zutat.name}
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
            {showMoreText ? (
              <div>
                <h3>Anleitung:</h3>
                <ol>
                  {rezept.anleitung.map((schritt, index) => (
                    <li key={index}>{schritt}</li>
                  ))}
                </ol>
              </div>
            ) : null}
            <p onClick={toggleShowMore}>{buttonLabel}</p>
            <IonButton routerLink='/BasicSchneidenRezept1'> Jetzt Kochen! </IonButton>
            
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default BasicRezept_Schneiden;
