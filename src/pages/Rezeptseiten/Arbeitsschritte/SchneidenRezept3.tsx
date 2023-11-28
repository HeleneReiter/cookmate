import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import '@ionic/react/css/ionic-swiper.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Rezept from '../Rezepte/Schneiden_lvl3_BeefTatar3.json';


interface SlideData {
  title: string;
  description: string;
  image: string;
}

const SchneidenRezept3: React.FC = () => {
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

  const data: SlideData[] = Array.from({ length: rezept.arbeitsschritte}, (_, index) => ({
    title: `Step ${index + 1}`,
    description: rezept.anleitung[index], 
    image: "/assets/Animation/Knoblaub_schneiden.gif", // später drurch rezept.bilder[index] ersetzen, muss bei Json hinzugefügt werden 
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
            <IonBackButton defaultHref="/schneiden/level3" />
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
              <img src={slide.image}  />
              </IonCard>
            </SwiperSlide>
          ))}
      
        </Swiper>
        
        <IonButton onClick={goPrev}>Prev</IonButton>
        <IonButton onClick={goNext}>Next</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SchneidenRezept3;
