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
    <IonPage>
      <IonContent>
        <IonCard className='custom-ion-card-rezeptvorschau'>
          <IonCardContent>
            <img
                onClick={handleCloseClick}
                className="close"
                alt="schließen"
                src="/assets/Elemente/close_white.png"
              />
            <h2 style={{ fontSize: '50px', lineHeight: '0.8'}}>{rezept.name}</h2> {/*geht nd mit .css*/}
            <h3 style={{ fontSize: '20px', lineHeight: '3', color:'white'}}>Zutaten</h3> {/*geht nd mit .css*/}
            <IonList>
              {rezept.zutaten.map((zutat, index) => (
                <IonItem key={index}>
                  <IonLabel className='listItem' style={{ fontFamily: 'BenguiatGothicStd-Book' }}> {/*geht nd mit .css*/}
                    –  {zutat.menge} {zutat.name}
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
            {showMoreText ? (
              <div>
                <h3 style={{ fontSize: '20px', lineHeight: '3', color:'white', marginTop:'20px', marginBottom: '-20px'}}>Anleitung:</h3>
                <ol>
                  {rezept.anleitung.map((schritt, index) => (
                    <li key={index}>{schritt}</li>
                  ))}
                </ol>
              </div>
            ) : null}
            <p onClick={toggleShowMore}>{buttonLabel}</p>
          </IonCardContent>
        </IonCard>
        <IonButton routerLink='/BasicSchneidenRezept1' className='buttonJetztKochen'> Jetzt Kochen! </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default BasicRezept_Schneiden;
