// MainPage.tsx

import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonCard, IonCardContent, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';

import '/Users/helenereiter/git/cookmate_test/src/pages/CSS/Home.css';

const Home: React.FC = () => {
  const categories = [
    { name: 'Basics', levels: [1, 2, 3, 4] },
    { name: 'Schneiden', levels: [1, 2, 3] },
    { name: 'Marinieren & Soßen', levels: [1, 2, 3] },
    { name: 'Backen', levels: [1, 2, 3] },
    { name: 'Teig', levels: [1, 2, 3] },
    { name: 'Gewürze', levels: [1, 2, 3] },
    { name: 'Anrichten', levels: [1, 2, 3] },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <h1>Home</h1>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {categories.map((category, index) => (
          <IonCard key={index} className="category-card">
            <IonCardContent >
              <h2 >{category.name}</h2>
              {category.levels.map((level, levelIndex) => (
                <Link key={levelIndex} to={`/${category.name.toLowerCase()}/level${level}`}>
                  <IonButton className='levelButton' key={levelIndex} fill='clear'>Level {level}</IonButton>
                </Link>
              ))}
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Home;
