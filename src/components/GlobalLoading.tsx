import React from 'react';
import '../styles/globalLoading.css';

export default function GlobalLoading() {
  return (
    <div className="global-loading-overlay">
      <div className="loading-content">
        {/* Background clouds */}
        <div className="cloud cloud-1">☁️</div>
        <div className="cloud cloud-2">☁️</div>
        
        <div className="plane-animation">
          ✈️
        </div>
        <div className="logo-container">
          <img 
            src="/kaya.png" 
            alt="Kaya Travel" 
            className="logo-image"
          />
        </div>
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
