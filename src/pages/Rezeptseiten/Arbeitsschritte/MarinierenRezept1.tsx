import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import '@ionic/react/css/ionic-swiper.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Rezept from '../Rezepte/saucen_lvl1_Schokosoße1.json';


interface SlideData {
  title: string;
  description: string;
  image: string;
}

const MarinierenRezept1: React.FC = () => {
  const rezept = {
    name: Rezept.name,
    portionen: Rezept.portionen,
    arbeitszeit: Rezept.arbeitszeit,
    arbeitsschritte: Rezept.arbeitsschritte,
    schwierigkeit: Rezept.schwierigkeit,
    zutaten: Rezept.zutaten,
    anleitung: Rezept.anleitung,
    label: Rezept.label,
    learning: Rezept.learning,
    kategorie: Rezept.kategorie,
  };

  const data: SlideData[] = Array.from({ length: rezept.arbeitsschritte }, (_, index) => ({
    title: `Schritt ${index + 1}`,
    description: rezept.anleitung[index],
    image: "/assets/Animation/Knoblauch_schneiden.gif", // später drurch rezept.bilder[index] ersetzen, muss bei Json hinzugefügt werden 
  }));

  const [swiper, setSwiper] = useState<any>(null);

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  }

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/marinieren/level1" />
          </IonButtons>
          <h1>Arbeitsschritte</h1>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollX>

        <Swiper
          onSwiper={setSwiper}
          spaceBetween={100}
          slidesPerView={1}
          scrollbar={{ draggable: false }}


        >
          {data.map((slide, index) => (
            <SwiperSlide key={`slide_${index}`}>
              <IonCard>
                <h2 className="" >{slide.title}</h2>
                <p>{slide.description}</p>
                <img src={slide.image} />
              </IonCard>
            </SwiperSlide>
          ))}

        </Swiper>
        <IonModal
          trigger="open-modal"
          isOpen={false}
          initialBreakpoint={0.92}
          breakpoints={[0, 0.25, 0.5, 0.75, 0.92]}
        >
          <IonContent className="ion-padding">
            <IonCardContent>
              <h2>{rezept.name}</h2>
              <h3>Zutaten:</h3>
              <IonList>
                {rezept.zutaten.map((zutat, index) => (
                  <IonItem key={index}>
                    <IonLabel>
                      {zutat.menge} {zutat.name}
                    </IonLabel>
                  </IonItem>
                ))}
              </IonList>
              <h3>Anleitung:</h3>
              <ol>
                {rezept.anleitung.map((schritt, index) => (
                  <li key={index}>{schritt}</li>
                ))}
              </ol>
            </IonCardContent>
          </IonContent>
        </IonModal>
      </IonContent>
      <IonFooter>
        <IonButton onClick={goPrev}>Prev</IonButton>
        <IonButton id="open-modal"> Rezept anzeigen
        </IonButton>
        <IonButton onClick={goNext}>Next</IonButton>
      </IonFooter>
    </IonPage>
  );
};


export default MarinierenRezept1;
