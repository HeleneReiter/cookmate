import React, { useState } from "react";
import {
  IonCard,
  IonCardContent,
  IonChip,
  IonHeader,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonPage,
  IonToolbar,
  IonButton,
  IonButtons,
  IonBackButton,
} from "@ionic/react";


import '../CSS/Rezeptvorschau.css';

interface RecipeProps {
  id: string;
  titleOne: string;
  descriptionOne: string;
  recipeCategoryLabelOne: string;
  recipeCategoryColorOne: string;
  imgOne: string;

  titleTwo: string;
  descriptionTwo: string;
  recipeCategoryLabelTwo: string;
  recipeCategoryColorTwo: string;
  imgTwo: string;

  titleThree: string;
  descriptionThree: string;
  recipeCategoryLabelThree: string;
  recipeCategoryColorThree: string;
  imgThree: string;
}

const RecipeCard: React.FC<RecipeProps> = ({
  titleOne,
  descriptionOne,
  recipeCategoryLabelOne,
  recipeCategoryColorOne,
  imgOne,

  titleTwo,
  descriptionTwo,
  recipeCategoryLabelTwo,
  recipeCategoryColorTwo,
  imgTwo,

  titleThree,
  descriptionThree,
  recipeCategoryLabelThree,
  recipeCategoryColorThree,
  imgThree,
  id,
}) => {
  const [currentSegment, setCurrentSegment] = useState("One");

  const handleSegmentChange = (event: CustomEvent) => {
    const newSegmentValue = event.detail.value as string;
    setCurrentSegment(newSegmentValue);
  };

  const renderImage = () => {     {/*Refresh Browser wenn bild nicht cover ist!!*/}
    switch (currentSegment) {
      case "One":
        return imgOne;
      case "Two":
        return imgTwo;
      case "Three":
        return imgThree;
      default:
        return null;
    }
  };

  const handleCloseClick = () => {
    window.location.href = "/home"; 
  };

  const renderCardContent = () => {
    switch (currentSegment) {
      case "One":
        
        return (
          <>
            <p>{descriptionOne}</p>
            <div className="info"><h2>Schneiden | {titleOne}</h2></div> {/*besser korrigieren*/}
            <IonChip className="labelMeat">
              <IonLabel>Fleisch</IonLabel>
            </IonChip>
            <IonChip>
              <IonLabel className="labelCategory" color={recipeCategoryColorOne}>
                {recipeCategoryLabelOne.toUpperCase()}
              </IonLabel>
            </IonChip>
          </>
        );
      case "Two":
        return (
          <>
            <p>{descriptionTwo}</p>
            <div className="info"><h2>Schneiden | {titleTwo}</h2></div> {/*besser korrigieren*/}
            <IonChip className="labelVeggie">
              <IonLabel>Vegetarisch</IonLabel>
            </IonChip>
            <IonChip>
              <IonLabel className="labelCategory" color={recipeCategoryColorTwo}>
                {recipeCategoryLabelTwo.toUpperCase()}
              </IonLabel>
            </IonChip>
          </>
        );
      case "Three":
        return (
          <>
            <p>{descriptionThree}</p>
            <div className="info"><h2>Schneiden | {titleThree}</h2></div> {/*besser korrigieren*/}
            <IonChip className="labelVegan">
              <IonLabel>Vegan</IonLabel>
            </IonChip>
            <IonChip>
              <IonLabel className="labelCategory" color={recipeCategoryColorThree} >
                {recipeCategoryLabelThree.toUpperCase()}
              </IonLabel>
            </IonChip>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <IonPage
        style={{
          background: `linear-gradient(to bottom, rgba(4,13,16,0.0), rgba(0,0,0,1)), url(${renderImage()})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
      <img className="logo" src="/assets/Elemente/Logo.png" alt="Logo" />
      <img
        onClick={handleCloseClick}
        className="close"
        alt="schließen"
        src="/assets/Elemente/Close.png" style={{ position: 'absolute', right: '40px', top: '105px'}}
      />

      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonSegment
            swipe-gesture={true}
            value={currentSegment}
            onIonChange={handleSegmentChange}
          >
            <IonSegmentButton value="One">One</IonSegmentButton>
            <IonSegmentButton value="Two">Two</IonSegmentButton>
            <IonSegmentButton value="Three">Three</IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      <IonCard className="custom-ion-card">
        <IonCardContent>
          {renderCardContent()}
          <div className="box" ></div>
        </IonCardContent>
      </IonCard>
      <IonButton
            routerLink={`/rezept${id}${currentSegment}`}
            fill="clear"
            className="zumRezept"
          >
            <p>Zum Rezept</p>
          </IonButton>
    </IonPage>
  );
};

export default RecipeCard;