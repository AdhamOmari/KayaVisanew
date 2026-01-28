'use client';

import { useI18n } from '@/lib/i18n';
import '@/styles/programs.css';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Programs() {
  const { locale } = useI18n();
  const [programsData, setProgramsData] = useState<any>(null);

  useEffect(() => {
    // Load data dynamically
    import('@/data/programs-data.json')
      .then((data) => setProgramsData(data.default))
      .catch((error) => console.error('Error loading programs data:', error));
  }, []);

  const content = programsData?.[locale as 'ar' | 'en'] || programsData?.ar;

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
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="programs-swiper"
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
            key={locale} // Force re-render on locale change to update direction
          >
            {content.programs.map((program: any) => (
              <SwiperSlide key={program.id} style={{ height: 'auto', paddingBottom: '40px' }}>
                <div className="program-card">
                  <div className="program-card-header">
                    <div className="program-flag-large">{program.flag}</div>
                    <span className="program-country-tag">{program.country}</span>
                  </div>

                  <div className="program-card-body">
                    <h3 className="program-card-title">{program.title}</h3>
                    <p className="program-card-description">{program.description}</p>

                    <ul className="program-features-list">
                      {program.features.map((feature: any, fidx: number) => (
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
