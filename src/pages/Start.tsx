import React from "react";
import { IonContent, IonButton, IonPage } from "@ionic/react";

import "./CSS/Start.css";

const Start: React.FC = () => {
  const handleStartClick = () => {
    window.location.href = "/loading";
  };
  return (
    <IonPage>
    <IonContent style={{ overflow: 'hidden' }}>
      <div className="start">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img
              onClick={handleStartClick}
              className="jetzt-starten"
              alt="Jetzt starten"
              src="/assets/Elemente/JetztStarten.png"
            />
          </div>
        </div>
      </div>
    </IonContent>
    </IonPage>
  );
};

export default Start;
