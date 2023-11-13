import React, { useState } from 'react';
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
  IonBackButton
} from '@ionic/react';
import { Link } from 'react-router-dom';

interface RecipeProps {
  id: string;
  titleOne: string;
  descriptionOne: string;
  recipeCategoryLabelOne: string;
  recipeCategoryColorOne: string;

  titleTwo: string;
  descriptionTwo: string;
  recipeCategoryLabelTwo: string;
  recipeCategoryColorTwo: string;

  titleThree: string;
  descriptionThree: string;
  recipeCategoryLabelThree: string;
  recipeCategoryColorThree: string;
}

const RecipeCard: React.FC<RecipeProps> = ({
  titleOne,
  descriptionOne,
  recipeCategoryLabelOne,
  recipeCategoryColorOne,
  
  titleTwo,
  descriptionTwo,
  recipeCategoryLabelTwo,
  recipeCategoryColorTwo,
  
  titleThree,
  descriptionThree,
  recipeCategoryLabelThree,
  recipeCategoryColorThree,
  id 

}) => {
  const [currentSegment, setCurrentSegment] = useState("One");

  const handleSegmentChange = (event: CustomEvent) => {
    const newSegmentValue = event.detail.value as string;
    setCurrentSegment(newSegmentValue);
  };

  const renderCardContent = () => {
    switch (currentSegment) {
      case "One":
        return (
          <>
            <h2>{titleOne}</h2>
            <p>{descriptionOne}</p>
            <IonChip>
            <IonLabel color="danger">Fleisch</IonLabel>
            </IonChip>
            <IonChip>
              <IonLabel color={recipeCategoryColorOne}>{recipeCategoryLabelOne}</IonLabel>
            </IonChip>
          </>
        );
      case "Two":
        return (
            <>
              <h2>{titleTwo}</h2>
              <p>{descriptionTwo}</p>
              <IonChip>
              <IonLabel color="success">Vegetarisch</IonLabel>
              </IonChip>
              <IonChip>
                <IonLabel color={recipeCategoryColorTwo}>{recipeCategoryLabelTwo}</IonLabel>
              </IonChip>
            </>
          );
      case "Three":
        return (
            <>
              <h2>{titleThree}</h2>
              <p>{descriptionThree}</p>
              <IonChip>
              <IonLabel color="primary">Vegan</IonLabel>
              </IonChip>
              <IonChip>
                <IonLabel color={recipeCategoryColorThree}>{recipeCategoryLabelThree}</IonLabel>
              </IonChip>
            </>
          );
      default:
        return null;
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonSegment swipe-gesture={true} value={currentSegment} onIonChange={handleSegmentChange}>
            <IonSegmentButton value="One">One</IonSegmentButton>
            <IonSegmentButton value="Two">Two</IonSegmentButton>
            <IonSegmentButton value="Three">Three</IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      <IonCard>
        <IonCardContent>
          {renderCardContent()}
          <div style={{ marginBottom: '16px' }}></div>
          <Link to={`/rezept${id}${currentSegment}`}>
            <IonButton fill="outline">Zum Rezept</IonButton>
          </Link>
        </IonCardContent>
      </IonCard>
    </IonPage>
  );
};

export default RecipeCard;
