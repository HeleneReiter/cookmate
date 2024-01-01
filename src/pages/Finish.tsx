import React, { useEffect } from 'react';
import { IonContent } from '@ionic/react';

import "./CSS/Loading.css";

const Finish: React.FC = () => {
  useEffect(() => {
    window.location.href = '/home';
  }, []);

  return (
    <div className="introduction-loading">
      <div className="loading-wrapper">
        <img className="finish" alt="Finish" src="/assets/Elemente/Endscreen.png" />
      </div>
    </div>
  );
};

export default Finish;
