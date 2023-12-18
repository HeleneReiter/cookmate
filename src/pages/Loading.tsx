import React, { useEffect } from 'react';
import { IonContent } from '@ionic/react';

import "./CSS/Loading.css";

const Loading: React.FC = () => {
  useEffect(() => {
    window.location.href = '/home';
  }, []);

  return (
    <div className="introduction-loading">
      <div className="loading-wrapper">
        <img className="loading" alt="Loading" src="/assets/Elemente/Loadingscreen.png" />
      </div>
    </div>
  );
};

export default Loading;
