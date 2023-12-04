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


interface SlideData {
  title: string;
  description: string;
  image: string;
}

const BasicSchneidenRezept1: React.FC = () => {
  const data: SlideData[] = [
    {
      title: "Schritt 1",
      description: "Description",
      image: "/assets/Animation/Knoblaub_schneiden.gif",
    },
    {
      title: "Schritt 2",
      description: "Description",
      image: "/assets/Animation/Knoblaub_schneiden.gif",
    },
    {
      title: "Schritt 3",
      description: "Description",
      image: "/assets/Animation/Knoblaub_schneiden.gif",
    },
  ];

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
            <IonBackButton defaultHref="/basics/Schneiden/BasicRezept_Schneiden" />
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

export default BasicSchneidenRezept1;
