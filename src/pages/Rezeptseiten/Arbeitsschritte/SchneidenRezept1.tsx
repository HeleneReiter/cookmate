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

import '../../CSS/Arbeitsschritte.css';
import Rezept from '../Rezepte/Schneiden_lvl1_GebrateneNudeln1.json';

interface SlideData {
  title: string;
  description: string;
  image: string;
}

const SchneidenRezept1: React.FC = () => {
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
    title: `Schritt ${index + 1} von ${rezept.arbeitsschritte}`,
    image: rezept.bilder[index], 
    description: rezept.anleitung[index],
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
    window.location.href = "/schneiden/level1";  /*funktioniert nicht*/
  };

  return (
    <IonPage className="custom-page-background">
      <IonContent scrollX >
        <img
          onClick={handleCloseClick}
          className="close_dark"
          alt="schließen"
          src="/assets/Elemente/close_white.png" style={{ position: 'absolute', right: '40px', top: '60px'}}
        />
        <Swiper 
          onSwiper={setSwiper}
          spaceBetween={100}
          slidesPerView={1}
          scrollbar={{ draggable: false }}
        >
          {data.map((slide, index) => (
            <SwiperSlide key={`slide_${index}`} >
              <IonCard className="card">
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
        <IonButton id="open-modal" style={{border: 'none'}}>
          Übersicht
        </IonButton>
      </div>

    </IonPage>
  );
};

export default SchneidenRezept1;
