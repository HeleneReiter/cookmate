import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonButton,
} from "@ionic/react";

import "./CSS/Home.css";

const Home: React.FC = () => {
  const basics = [
    {
      name: "Basics",
      categories: ["Schneiden", "Marinieren", "Teig", "Gewurze"],
    },
  ];
  const categories = [
    { name: "Schneiden", levels: [1, 2, 3] },
    { name: "Marinieren", levels: [1, 2, 3] },
    { name: "Backen", levels: [1, 2, 3] },
    { name: "Teig", levels: [1, 2, 3] },
    { name: "Gewurze", levels: [1, 2, 3] },
  ];
  const bonus = [
    { name: "Anrichten", levels: [1, 2, 3] },

  ];

  return (
    <IonPage>
      <IonHeader>
        {/*<IonToolbar className="home">
          <h1>Home</h1>
        </IonToolbar>
        */}
      </IonHeader>
      <IonContent>
        {basics.map((category, index) => (
          <IonCard key={index} className="basics-card">
            <IonCardContent>
              <h2>{category.name}</h2>
              <h3>Pflicht!</h3>
              {category.categories.map((basic, levelIndex) => (
                <IonButton
                  routerLink={`/${category.name.toLowerCase()}/${basic}`}
                  className="basicsButton"
                  key={levelIndex}
                  fill="clear"
                >
                  <div className="button-inner-content">
                    <span className="chapter">Kapitel</span>
                    {basic}
                  </div>
                </IonButton>
              ))}
            </IonCardContent>
          </IonCard>
        ))}
        {categories.map((category, index) => (
          <IonCard key={index} className="category-card">
            <IonCardContent>
              <h4>Kapitel</h4>
              <h2>{category.name}</h2>
              {category.levels.map((level, levelIndex) => (
                <IonButton
                  routerLink={`/${category.name.toLowerCase()}/level${level}`}
                  className="levelButton"
                  key={levelIndex}
                  fill="clear"
                >
                  LV{level}
                </IonButton>
              ))}
            </IonCardContent>
          </IonCard>
        ))}
        {bonus.map((category, index) => (
          <IonCard key={index} className="bonus-card">
            <IonCardContent>
              <h2>Bonus!</h2>
              <h3>{category.name}</h3>
              {category.levels.map((level, levelIndex) => (
                <IonButton
                  routerLink={`/${category.name.toLowerCase()}/level${level}`}
                  className="bonuslevel"
                  key={levelIndex}
                  fill="clear"
                >
                  LV{level}
                </IonButton>
              ))}
              <h4>Wow,</h4>
              <h4>geschafft!</h4>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Home;
