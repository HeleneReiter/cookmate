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
      <IonCard className="custom-ion-card">
          <p>Griechischer Salat</p>
          <div className="info"><h2>Schneiden Rezept1</h2></div> {/*besser korrigieren*/}
          </IonCard>
          <div className="labelbox">
          <IonChip className="labelVeggie">
            <IonLabel>Vegetarisch</IonLabel>
          </IonChip>
          <IonChip className="labelCategory">
            <IonLabel>Salat</IonLabel>
          </IonChip>
          </div>
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

     
        <IonCardContent>
          {renderCardContent()}
         
        </IonCardContent>
    
      <IonButton className="zumRezeptDark" fill="clear" routerLink="/BasicRezept_Schneiden" >
        <p>Zum Rezept &gt;</p>
      </IonButton>
    </IonPage>
  );
};


export default BasicSchneiden;
