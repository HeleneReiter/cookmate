import React from 'react';
import { IonHeader, IonIcon, IonLabel, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react';

function Schneiden() {
    return (
        <IonSegment scrollable={true} value="One">

          <IonSegmentButton value="One">
            <IonHeader>One</IonHeader>
          </IonSegmentButton>

          <IonSegmentButton value="Two">
          <IonHeader>Two</IonHeader>
          </IonSegmentButton>

          <IonSegmentButton value="Three">
          <IonHeader>Two</IonHeader>
          </IonSegmentButton>
          
        </IonSegment>
      );
    }
export default Schneiden;