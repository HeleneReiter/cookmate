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
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import '@ionic/react/css/ionic-swiper.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../CSS/Arbeitsschritte.css';
import '../../CSS/Rezeptvorschau.css';
import Rezept from '../Rezepte/Teig_lvl3_Takoyaki.json';

interface SlideData {
  title: string;
  description: string;
}

const TeigRezept12_Three: React.FC = () => {
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
    title: `Schritt ${index + 1} von ${rezept.arbeitsschritte}`,
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
    window.location.href = "/rezept12_Three";
  };

  // timer
  // show Timer only when needed
  const [showTimer, setShowTimer] = useState(false);

  // Settings for Timer
  const [seconds, setSeconds] = useState(900); // 15 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isActive]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const resetTimer = () => {
    setSeconds(900);
    setIsActive(false);
  };

   // Finish
   const [showFinish, setShowFinish] = useState(false);

   const handleFinishClick = () => {
     window.location.href = "/finish";
 
   };
 
   const handleSlideChange = () => {
     const currentSlideIndex = swiper.realIndex;
     //setShowTimer(currentSlideIndex === 0);
     setShowFinish(currentSlideIndex === rezept.arbeitsschritte - 1);
   }

   return (
    <IonPage className="custom-page-background">
      <IonContent 
      scrollY={false}
   
      scrollX={false}>
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={100}
          slidesPerView={1}
          scrollbar={{ draggable: false }}
          onSlideChange={handleSlideChange}
        >
          {data.map((slide, index) => (
            <SwiperSlide key={`slide_${index}`} 
            className="swiperSchritte">
              <IonCard className="OhneBildcard">
              <img
                  onClick={handleCloseClick}
                  className="close_dark"
                  alt="schließen"
                  src="/assets/Elemente/close_white.png" style={{ position: 'absolute', right: '25px', top: '35px' }}
                />
                <div className="navigation-row">
                  <IonButton className="navigationbuttons" onClick={goPrev}>&lt;</IonButton>
                  <h2 className="step">{slide.title.toUpperCase()}</h2>
                  <IonButton className="navigationbuttons" onClick={goNext}>&gt;</IonButton>

                </div>
                <p>{slide.description}</p>
                {/* showFinish nur bei letzter Seite anzeigen*/}
                {showFinish && (
                  <IonButton className="buttonTimer" onClick={handleFinishClick}>Fertig!</IonButton>
                )}
              </IonCard>
            </SwiperSlide>
          ))}
        </Swiper>


        <IonModal
          trigger="open-modal"
          isOpen={false}
          initialBreakpoint={0.95}
          breakpoints={[0, 0.95]}
          className="custom-page-background"
          
        >
          <IonContent 
          className="ion-padding" 
          scrollY={true}>
            
            <IonCardContent className="custom-page-background">
              <h2>{rezept.name}</h2>
              <h3>Zutaten:</h3>
              <IonList >
                {rezept.zutaten.map((zutat, index) => (
                  <IonItem key={index}>
                    <IonLabel>
                      {zutat.menge} {zutat.name}
                    </IonLabel>
                  </IonItem>
                ))}
              </IonList>
              <br></br>
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

export default TeigRezept12_Three;
