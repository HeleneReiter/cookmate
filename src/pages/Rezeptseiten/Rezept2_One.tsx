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
import Rezept from './Rezepte/Schneiden_lvl2_ThaiKokosSuppe2.json';

const Rezept2_One: React.FC = () => {
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
  };

  const [showMoreText, setShowMoreText] = useState(false);
  const buttonLabel = showMoreText ? 'Weniger anzeigen' : 'Mehr anzeigen';

  const toggleShowMore = () => {
    setShowMoreText(!showMoreText);
  };

  const handleCloseClick = () => {
    window.location.href = "/schneiden/level2";
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
        <IonButton routerLink='/SchneidenRezept2' className='buttonJetztKochen'> Jetzt Kochen! </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Rezept2_One;
