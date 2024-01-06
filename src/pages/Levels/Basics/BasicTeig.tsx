import React from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonChip,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonToolbar,
} from "@ionic/react";

const BasicTeig: React.FC = () => {
 const handleCloseClick = () => {
    window.location.href = "/home";
  };

  const renderCardContent = () => {
    return (
      <>  
      <IonCard className="custom-ion-card">
          <div className="box"></div>
          <p>Palatschinken</p>
          <div className="info"><h2>Teig Rezept1</h2></div> {/*besser korrigieren*/}
        </IonCard>
          <div className="labelbox">
          <IonChip className="labelVeggie">
            <IonLabel>Vegetarisch</IonLabel>
          </IonChip>
          <IonChip className="labelCategory">
            <IonLabel>Hauptspeise</IonLabel>
          </IonChip>
          </div>
          </>
    );
  };

  return (
    <IonPage
      style={{
        background: `linear-gradient(to bottom, rgba(4,13,16,0.0), rgba(0,0,0,1)), url(/assets/Bildrecherche/teig_lvl1_palatschinke.JPG)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <img className="logo" src="/assets/Elemente/Logo.png" alt="Logo" />
      <img
        onClick={handleCloseClick}
        className="close_dark"
        alt="schließen"
        src="/assets/Elemente/Close.png" style={{ position: 'absolute', right: '40px', top: '90px' }}
      />
   
        <IonCardContent>
          {renderCardContent()}
        
        </IonCardContent>
     
      <IonButton className="zumRezept" fill="clear" routerLink="/BasicRezept_Teig" >
        <p>Zum Rezept &gt;</p>
      </IonButton>
    </IonPage>
  );
};

export default BasicTeig;
