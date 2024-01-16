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

import '../CSS/Rezeptvorschau.css';


import Rezept from './Rezepte/Schneiden_lvl1_GebrateneNudeln1.json';

const Rezept1_One: React.FC = () => {
  const rezept = {
    name: Rezept.name,
    portionen: Rezept.portionen,
    arbeitszeit: Rezept.arbeitszeit,
    arbeitsschritte: Rezept.arbeitsschritte,
    schwierigkeit: Rezept.schwierigkeit,
    zutaten: Rezept.zutaten,
    anleitung: Rezept.anleitung,
    label: Rezept.label,
    learning: Rezept.learning,
    kategorie: Rezept.kategorie,
    image: Rezept.image,
  };

  const [showMoreText, setShowMoreText] = useState(false);
  
  const buttonLabel = showMoreText ? 'Weniger anzeigen' : 'mehr anzeigen';

  const toggleShowMore = () => {
    setShowMoreText(!showMoreText);
  };

  const handleCloseClick = () => {
    window.location.href = "/schneiden/level1";
  };

  return (
    <IonPage
    style={{
      background: `linear-gradient(to bottom, rgba(4,13,16,0.0), rgba(0,0,0,1)), url(${Rezept.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
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
        <IonButton routerLink='/SchneidenRezept1' className='buttonJetztKochen'> Jetzt Kochen! </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Rezept1_One;