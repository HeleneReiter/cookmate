
import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonCard, IonCardContent, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';

import './CSS/Home.css';

const Home: React.FC = () => {
  const basics = [
    { name: 'Basics', categories: ['Schneiden', 'Marinieren/Soßen', 'Teig', 'Gewürze'] },
  ];
  const categories = [
    { name: 'Schneiden', levels: [1, 2, 3] },
    { name: 'Marinieren/Soßen', levels: [1, 2, 3] },
    { name: 'Backen', levels: [1, 2, 3] },
    { name: 'Teig', levels: [1, 2, 3] },
    { name: 'Gewürze', levels: [1, 2, 3] },
    { name: 'Anrichten', levels: [1, 2, 3] },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='home'>
          <h1>Home</h1>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {basics.map((category, index) => (
          <IonCard key={index} className="basics-card">
            <IonCardContent >
              <h2 >{category.name}</h2>
              {category.categories.map((basic, levelIndex) => (
                <Link key={levelIndex} to={`/${category.name.toLowerCase()}/level${basic}`}>
                  <IonButton className='basicsButton' key={levelIndex} fill='clear'>{basic}</IonButton>
                </Link>
              ))}
            </IonCardContent>
          </IonCard>
        ))}
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
