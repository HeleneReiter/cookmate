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

const BasicSchneiden: React.FC = () => {
  const handleCloseClick = () => {
    window.location.href = "/home";
  };

  const renderCardContent = () => {
    return (
      <>  
          <div className="box"></div>
          <div className="info"><h2>Gewurze | Rezept 1</h2></div> {/*besser korrigieren*/}
          <IonChip className="labelVeggie">
            <IonLabel>Vegetarisch</IonLabel>
          </IonChip>
          <IonChip className="labelCategory">
            <IonLabel>Salat</IonLabel>
          </IonChip>
          </>
    );
  };

  return (
    <IonPage
      style={{
        background: "url(/assets/Bildrecherche/schneiden_lvl1_griechischersalat.JPG)",
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

      <IonCard className="custom-ion-card">
        <IonCardContent>
          {renderCardContent()}
          <div className="box"></div>
        </IonCardContent>
      </IonCard>
      <IonButton className="zumRezept" fill="clear" routerLink="/BasicRezept_Schneiden" >
        <p>Zum Rezept &gt;</p>
      </IonButton>
    </IonPage>
  );
};


export default BasicSchneiden;
