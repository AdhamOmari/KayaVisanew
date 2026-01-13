'use client';

import { useI18n } from '@/lib/i18n';
import '@/styles/programs.css';
import { useState, useEffect } from 'react';

export default function Programs() {
  const { locale } = useI18n();
  const [programsData, setProgramsData] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Load data dynamically
    import('@/data/programs-data.json')
      .then((data) => setProgramsData(data.default))
      .catch((error) => console.error('Error loading programs data:', error));
  }, []);

  const content = programsData?.[locale as 'ar' | 'en'] || programsData?.ar;

  const nextSlide = () => {
    if (content?.programs?.length) {
      setCurrentIndex((prev) => (prev + 1) % content.programs.length);
    }
  };

  const prevSlide = () => {
    if (content?.programs?.length) {
      setCurrentIndex((prev) => (prev - 1 + content.programs.length) % content.programs.length);
    }
  };

  if (!content || !content.programs) {
    return null;
  }

  return (
    <section className="programs-section">
      <div className="programs-container">
        <div className="programs-header">
          <span className="programs-badge">{locale === 'ar' ? 'برامجنا' : 'Our Programs'}</span>
          <p className="programs-subtitle">{content.subtitle}</p>
        </div>

        <div className="programs-slider-wrapper">
          <button className="slider-arrow slider-arrow-prev" onClick={prevSlide} aria-label="Previous">
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="programs-slider">
            <div 
              className="programs-track" 
              style={{ 
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >
              {content.programs.map((program, idx) => (
                <div key={program.id} className="program-card-wrapper">
                  <div className="program-card">
                    <div className="program-card-header">
                      <div className="program-flag-large">{program.flag}</div>
                      <span className="program-country-tag">{program.country}</span>
                    </div>

                    <div className="program-card-body">
                      <h3 className="program-card-title">{program.title}</h3>
                      <p className="program-card-description">{program.description}</p>

                      <ul className="program-features-list">
                        {program.features.map((feature, fidx) => (
                          <li key={fidx} className="program-feature-item">
                            <i className="fas fa-check-circle"></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="program-card-footer">
                      <div className="program-price-badge">
                        {program.currency} {program.price}
                      </div>

                      <div className="program-meta-info">
                        <div className="meta-item">
                          <i className="fas fa-calendar-alt"></i>
                          <span>{program.duration}</span>
                        </div>
                        <div className="meta-item">
                          <i className="fas fa-user"></i>
                          <span>{program.persons}</span>
                        </div>
                      </div>

                      <a href="/contact" className="program-cta-btn">
                        <span>{content.learnMore}</span>
                        <i className="fas fa-arrow-left"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-arrow slider-arrow-next" onClick={nextSlide} aria-label="Next">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="slider-dots">
          {content.programs.map((_, idx) => (
            <button
              key={idx}
              className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
