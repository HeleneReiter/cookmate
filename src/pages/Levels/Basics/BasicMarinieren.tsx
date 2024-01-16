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

const BasicMarinieren: React.FC = () => {
  const handleCloseClick = () => {
    window.location.href = "/home";
  };

  const renderCardContent = () => {
    return (
      <>  
      <IonCard className="custom-ion-card">
          <div className="box">
          <p>Himbeersauce</p>
          <div className="info"><h2>Sauce Rezept1</h2></div> {/*besser korrigieren*/}
          </div>
          </IonCard>
          <div className="labelboxBasics">
          <IonChip className="labelVegan">
            <IonLabel>Vegan</IonLabel>
          </IonChip>
          <IonChip className="labelCategory">
            <IonLabel>Sauce</IonLabel>
          </IonChip>
          </div>
          </>
    );
  };

  return (
    <IonPage
      style={{
        background: `linear-gradient(to bottom, rgba(4,13,16,0.0), rgba(0,0,0,1)), url(/assets/Bildrecherche/marinieren_lvl1_himbeersauce.JPG)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <img className="logo" src="/assets/Elemente/Logo.png" alt="Logo" />
      

        <IonCardContent>
        <img
        onClick={handleCloseClick}
        className="close_dark"
        alt="schließen"
        src="/assets/Elemente/Close.png" style={{ position: 'absolute', right: '40px', top: '90px' }}
      />
          {renderCardContent()}
        </IonCardContent>

      <IonButton className="zumRezept" fill="clear" routerLink="/BasicRezept_Marinieren" >
        <p>Zum Rezept &gt;</p>
      </IonButton>
    </IonPage>
  );
};

export default BasicMarinieren;
