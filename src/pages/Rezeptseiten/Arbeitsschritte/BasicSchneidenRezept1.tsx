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
import Rezept from '../Rezepte/Basics_Schneiden_Griechischer_Salat.json';


interface SlideData {
  title: string;
  description: string;
  image: string;
}

const BasicSchneidenRezept1: React.FC = () => {
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
    bilder: Rezept.bilder,
  };

  const data: SlideData[] = Array.from({ length: rezept.arbeitsschritte }, (_, index) => ({
    title: `Schritt ${index + 1}`,
    description: rezept.anleitung[index],
    image: rezept.bilder[index],
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
 
  const handleCloseClick = () => {
    window.location.href = "/BasicRezept_Schneiden";

  };

  return (
    <IonPage className="custom-page-background">
      <IonContent scrollX >
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={100}
          slidesPerView={1}
          scrollbar={{ draggable: false }}
        >

          {data.map((slide, index) => (
            <SwiperSlide key={`slide_${index}`} >
              <IonCard className="card">
                <img
                  onClick={handleCloseClick}
                  className="close_dark"
                  alt="schließen"
                  src="/assets/Elemente/close_white.png" style={{ position: 'absolute', right: '25px', top: '35px' }}
                />
                <img src={slide.image} />
                <div className="navigation-row">
                  <IonButton className="navigationbuttons" onClick={goPrev}>&lt;</IonButton>
                  <h2 className="step">{slide.title.toUpperCase()}</h2>
                  <IonButton className="navigationbuttons" onClick={goNext}>&gt;</IonButton>
                </div>
                <p>{slide.description}</p>

              </IonCard>
            </SwiperSlide>
          ))}
        </Swiper>

        <IonModal
          trigger="open-modal"
          isOpen={false}
          initialBreakpoint={0.95}
          breakpoints={[0, 0.95]}
        >
          <IonContent className="ion-padding" >
            <IonCardContent >
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
      <div className="button-with-arrow">
        <img className="arrow-icon" src="/assets/Elemente/PfeilNachOben.png" alt="Pfeil nach oben" />
        <IonButton id="open-modal" style={{ border: 'none' }}>
          Übersicht
        </IonButton>
      </div>

    </IonPage>
  );
};

export default BasicSchneidenRezept1;
