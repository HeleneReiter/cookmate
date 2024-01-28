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
import Rezept from './Rezepte/Teig_lvl3_Krabbenchips.json';

const Rezept12_Two: React.FC = () => {
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
    classname: Rezept.classname,
  };

  const [showMoreText, setShowMoreText] = useState(false);
  const buttonLabel = showMoreText ? <p className='anzeigen'>Weniger anzeigen</p> : <p className='anzeigen'>Mehr anzeigen</p> ;

  const toggleShowMore = () => {
    setShowMoreText(!showMoreText);
  };

  const handleCloseClick = () => {
    window.location.href = "/teig/level3";
  };

  return (
    <IonPage
    style={{
      background: `linear-gradient(180deg, rgba(4, 13, 16, 0) 0%, rgb(4, 13, 16) 100%), url(${rezept.image})`,
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
            <h2>{rezept.name}</h2> 
            <div className='labelboxVorschau'>
            <div className={rezept.classname}>{rezept.label}</div>
              <div className='labelCategory'>{rezept.kategorie}</div>
              <div className='labeTime'>{rezept.arbeitszeit}</div>
            </div>
            <h3>Zutaten</h3> 

            <IonList>
              {rezept.zutaten.map((zutat, index) => (
                <IonItem key={index}>
                  <IonLabel className='listItem' style={{ fontFamily: 'BenguiatGothicStd-Book' }}> 
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
        <IonButton  className='buttonJetztKochen'> Jetzt Kochen! </IonButton>
      </IonContent>
    </IonPage>
  );
};
export default Rezept12_Two;
