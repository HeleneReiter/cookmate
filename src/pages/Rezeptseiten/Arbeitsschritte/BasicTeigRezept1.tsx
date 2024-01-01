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
import Rezept from '../Rezepte/Basics_Teig_Palatschinken.json';

import '../../CSS/Arbeitsschritte.css';
import { timeout } from "workbox-core/_private";


interface SlideData {
  title: string;
  description: string;
  image: string;
}

const BasicTeigRezept1: React.FC = () => {
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
  }

  const handleCloseClick = () => {
    window.location.href = "BasicRezept_Teig"; 
  };

  // timer
  // show Timer only when needed
  const [showTimer, setShowTimer] = useState(false);

  const handleSlideChange = () => {
    const currentSlideIndex = swiper.realIndex;
    setShowTimer(currentSlideIndex === 1);
  }

  // Settings for Timer
  const [seconds, setSeconds] = useState(600); // 10 minutes in seconds
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
    setSeconds(600);
    setIsActive(false);
  };

  return (
    <IonPage className="custom-page-background">
      <IonContent scrollX >
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={100}
          slidesPerView={1}
          scrollbar={{ draggable: false }}
          onSlideChange={handleSlideChange}
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

                {/* showTimer nur bei Seite mit Timer anzeigen -> index = 1 */}
                {showTimer && (

                  // Button um Zeit zu starten und zu stoppen -> zeigt auch gleichzeitig die Zeit an
                  <><IonButton className="buttonTimer" onClick={(toggleTimer)}>
                    {isActive ? formatTime(seconds) : 'Timer Starten'}</IonButton>
                    

                    {/* Button um Zeit zurückzusetzen */}
                    <IonButton className="buttonTimer" onClick={resetTimer}>reset </IonButton></>


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
export default BasicTeigRezept1;
