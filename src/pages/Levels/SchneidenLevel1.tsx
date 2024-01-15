import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonChip,
  IonContent,
  IonLabel,
  IonPage,
} from "@ionic/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

interface SlideData {
  title: string;
  description: string;
  label: string;
  classname: string;
  recipeCategoryLabel: string;
  image: string;
}
import Rezept from '../Rezeptseiten/Rezepte/SchneidenRezepte1.json';

const SchneidenLevel1: React.FC = () => {


  const data: SlideData[] = Array.from({ length: 3 }, (_, index) => ({
    title: Rezept.titles[index],
    description: Rezept.descriptions[index],
    label: Rezept.labels[index],
    classname: Rezept.classnames[index],
    recipeCategoryLabel: Rezept.recipeCategoryLabels[index],
    image: Rezept.images[index],
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
    window.location.href = "/Home";

  };


  let index = 0;

  const handleSlideChange = () => {
    const currentSlideIndex = swiper.realIndex;
    index = currentSlideIndex;
  }


  const renderImage = () => {
    if (index === 0) {
      return Rezept.images[0];

    } else if (index === 1) {
      return Rezept.images[1];

    } else if (index === 2) {
      return Rezept.images[2];

    }
  }


  return (
    <IonPage
      style={{
        background: `linear-gradient(to bottom, rgba(4,13,16,0.0), rgba(0,0,0,1)), url(${renderImage()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <IonContent scrollX >
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={100}
          slidesPerView={1}
          scrollbar={{ draggable: false }}
          onSlideChange={handleSlideChange}
        >

      <img className="logo" src="/assets/Elemente/Logo.png" alt="Logo" />
      <img
        onClick={handleCloseClick}
        className="close_dark"
        alt="schließen"
        src="/assets/Elemente/Close.png" style={{ position: 'absolute', right: '40px', top: '90px' }}
      />

          {data.map((slide, index) => (
            <SwiperSlide key={`slide_${index}`} >
              <IonCardContent >


                <>
                  <IonCard className="custom-ion-card">
                    <div className="box"></div>
                    <p>{slide.description}</p>
                    <div className="info"><h2>Gewürze {slide.title}</h2></div> {/*besser korrigieren*/}
                  </IonCard>
                  <div className="labelbox">
                    <IonChip className={slide.classname}>
                      <IonLabel>{slide.label}</IonLabel>
                    </IonChip>
                    <IonChip className="labelCategory">
                      <IonLabel>{slide.recipeCategoryLabel}</IonLabel>
                    </IonChip>
                  </div>
                  <div className="circleOne"></div>
                </>



                {/* <IonButton onClick={goPrev}>&lt;</IonButton>

                <IonButton onClick={goNext}>&gt;</IonButton> */}


              </IonCardContent>
            </SwiperSlide>
          ))}
        </Swiper>
      </IonContent>

      <IonButton className="zumRezept" fill="clear" routerLink="/Rezept1_One" >
        <p>Zum Rezept &gt;</p>
      </IonButton>

    </IonPage>
  );
};
export default SchneidenLevel1;
