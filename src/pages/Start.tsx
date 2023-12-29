import React from "react";
import { IonContent, IonButton, IonPage } from "@ionic/react";

import "./CSS/Start.css";

const Start: React.FC = () => {
  const handleStartClick = () => {
    window.location.href = "/Loading";
  };

  return (
    <IonPage>
      <IonContent style={{ overflow: 'hidden' }}>
        <div className="start">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              {/* Add the overlay element */}
              <div className="overlay"></div>

              <img
                className="logo-home"
                src="/assets/Elemente/Logo_ohnebackground.png"
              />

              <img
                className="chefs-touch"
                src="/assets/Elemente/ChefsTouchYourKitchen.svg"
              />

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
