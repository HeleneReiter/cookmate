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
import '../CSS/RecipeCard.css';

interface SlideData {
  title: string;
  description: string;
  label: string;
  classname: string;
  recipeCategoryLabel: string;
  image: string;
}
import Rezept from '../Rezeptseiten/Rezepte/Levels/GewuerzeRezepte3.json';

const GewürzeLevel3 : React.FC = () => {


  const data: SlideData[] = Array.from({ length: 3 }, (_, index) => ({
    title: Rezept.titles[index],
    description: Rezept.descriptions[index],
    label: Rezept.labels[index],
    classname: Rezept.classnames[index],
    recipeCategoryLabel: Rezept.recipeCategoryLabels[index],
    image: Rezept.images[index],
  }));

  const circlesFilled = ["circleOneFilled", "circleTwoFilled", "circleThreeFilled"];
  const circles = ["circleOne", "circleTwo", "circleThree"];
  const recipes = ["/Rezept15_One", "/Rezept15_Two", "/Rezept15_Three"]


  const [swiper, setSwiper] = useState<any>(null);
  const [currentImage, setCurrentImage] = useState<string>(data[0].image);
  const [currentCircleFilled, setCurrentCircleFilled] = useState<string>(circlesFilled[0]);
  const [currentCircle, setCurrentCircle] = useState<string>(circles[0]);
  const [currentRecipe, setCurrentRecipe] = useState<string>(recipes[0]);


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



  const handleSlideChange = () => {
    const currentSlideIndex = swiper.realIndex;
    setCurrentImage(data[currentSlideIndex].image);
    setCurrentCircleFilled(circlesFilled[currentSlideIndex]);
    setCurrentCircle(circles[currentSlideIndex]);
    setCurrentRecipe(recipes[currentSlideIndex]);
  }


  return (
    <IonPage
      style={{
        background: `linear-gradient(to bottom, rgba(4,13,16,0.0), rgba(0,0,0,1)), url(${currentImage})`,
      }}
    >
      <IonContent
        scrollX={false}
        scrollY={false}>
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={100}
          slidesPerView={1}
          scrollbar={{ draggable: false }}
          onSlideChange={handleSlideChange}
          className="swiper"
        >

          <img className="logo" src="/assets/Elemente/Logo.png" alt="Logo" />
          <img
            onClick={handleCloseClick}
            className="close_dark"
            alt="schließen"
            src="/assets/Elemente/Close.png" style={{ position: 'absolute', right: '40px', top: '90px' }}
          />

          {data.map((slide, index) => (
            <SwiperSlide key={`slide_${index}`} className="swiper_slide">
              <IonCardContent>
                <>

                  <IonCard className="custom-ion-card">
                    <div className="box">
                      <p>{slide.description}</p>
                      <div className="info"><h2>Gewuerze {slide.title}</h2></div>
                    </div>
                  </IonCard>

                  <div className="labelbox">
                    <IonChip className={slide.classname}>
                      <IonLabel>{slide.label}</IonLabel>
                    </IonChip>
                    <IonChip className="labelCategory">
                      <IonLabel>{slide.recipeCategoryLabel}</IonLabel>
                    </IonChip>
                  </div>
                </>
                <img
                  onClick={handleCloseClick}
                  className="close_dark"
                  alt="schließen"
                  src="/assets/Elemente/Close.png" style={{ position: 'absolute', right: '40px', top: '90px', opacity: 0 }}
                />

              </IonCardContent>

            </SwiperSlide>
          ))}
        </Swiper>

      </IonContent>

      <div className="Circles">
        {circles.map((circle, index) => (
          <div key={`circle_${index}`} className={currentCircle === circle ? currentCircleFilled : circle} />
        ))}
      </div>
      <IonButton className="zumRezept" fill="clear" routerLink={currentRecipe} >
        <p>Zum Rezept &gt;</p>
      </IonButton>

    </IonPage>
  );
};
export default GewürzeLevel3;
