import React from 'react';
import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import './CSS/Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY>

        <IonCard href='/schneiden' routerDirection='forward'>  
          <img src='assets/images/Cooking_image.jpg' alt="CookingImage"></img>
          <IonCardHeader>
            <IonCardSubtitle> Lerne richtig zu schneiden </IonCardSubtitle>
            <IonCardTitle> Schneiden</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p> hier kommen dann noch die schwierigkeitsgrade</p>
            <IonRouterLink href='/schneiden' routerDirection='forward'> Schneiden</IonRouterLink>
          </IonCardContent>
        </IonCard>

        <IonCard href='/marinieren' routerDirection='forward'>  
          <img src='assets/images/Cooking_image.jpg' alt="CookingImage"></img>
          <IonCardHeader>
            <IonCardSubtitle> Lerne Soßen anzurühren und richtig zu marinieren</IonCardSubtitle>
            <IonCardTitle> Marinieren und Soßen </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p> hier kommen dann noch die schwierigkeitsgrade</p>
            <IonRouterLink href='/marinieren' routerDirection='forward'> Marinieren und Soßen </IonRouterLink>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;

