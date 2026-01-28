'use client'
import React from 'react';
import '../styles/globalLoading.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from '@/lib/i18n';

export default function GlobalLoading() {
  const { locale } = useI18n();
  const isRTL = locale === 'ar';

  return (
    <div className="global-loading-overlay">
      <div className="loading-content">
        <div className="logo-wrapper">
          {/* Animated rings around the logo */}
          <div className="loading-ring ring-outer"></div>
          <div className="loading-ring ring-inner"></div>

          {/* Plane circling the logo */}
          <div className="plane-path">
            <FontAwesomeIcon icon={faPlane} className="plane-icon-premium" />
          </div>

          <img
            src="/kaya.png"
            alt="Kaya Travel"
            className="logo-image-premium"
          />
        </div>

        <div className="loading-status">
          <div className="loading-text-premium">
            {isRTL ? 'جاري التحضير لرحلتك...' : 'Preparing your journey...'}
          </div>
          <div className="loading-bar-container">
            <div className="loading-bar-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
