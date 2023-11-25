import {
  IonButton,
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

const StepOne: React.FC = () => {
  const data: SlideData[] = [
    {
      title: "Step 1",
      description: "Description",
      image: "/assets/Animation/Knoblaub_schneiden.gif",
    },
    {
      title: "Step 2",
      description: "Description",
      image: "/assets/Animation/Knoblaub_schneiden.gif",
    },
    {
      title: "Step 3",
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
          <h1>Arbeitsschritte</h1>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollX>
        <IonCard>
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={100}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}

        >
          {data.map((slide, index) => (
            <SwiperSlide key={`slide_${index}`}>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <img src={slide.image}  />
            </SwiperSlide>
          ))}
      
        </Swiper>
        </IonCard>
        <IonButton onClick={goPrev}>Prev</IonButton>
        <IonButton onClick={goNext}>Next</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default StepOne;
