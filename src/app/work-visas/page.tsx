'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import '@/styles/work-visas-modern.css';

export default function WorkVisasPage() {
  const { locale } = useI18n();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const isRTL = locale === 'ar';

  useEffect(() => {
    const loadData = async () => {
      try {
        const content: any = require('@/data/work-visas-main.json');
        setData(content[locale as keyof any] || content.en);
      } catch (error) {
        console.error('Error loading work visa data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [locale]);

  if (loading || !data) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="work-visas-page-wrapper">

      {/* ULTRA PREMIUM HERO */}
      <section
        className="work-modern-hero"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="container">
          <div className="work-hero-content" dir={isRTL ? "rtl" : "ltr"}>
            <span className="work-hero-badge">
              {isRTL ? 'فرص العمل العالمية' : 'Global Work Opportunities'}
            </span>
            <h1 className="work-hero-title">{data.title}</h1>
            <p className="work-hero-description">{data.hero.description}</p>

            <div className="hero-actions d-flex gap-3 justify-content-center flex-wrap">
              <Link href="/contact" className="w-btn-primary text-decoration-none">
                {isRTL ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
              </Link>
              <a href="#available-visas" className="w-btn-outline text-decoration-none">
                {isRTL ? 'استكشف التأشيرات' : 'Explore Visas'}
              </a>
            </div>

            <div className="work-stats-grid">
              <div className="work-stat-item">
                <span className="work-stat-number">50+</span>
                <span className="work-stat-label">{isRTL ? 'دولة' : 'Countries'}</span>
              </div>
              <div className="work-stat-item">
                <span className="work-stat-number">95%</span>
                <span className="work-stat-label">{isRTL ? 'معدل النجاح' : 'Success Rate'}</span>
              </div>
              <div className="work-stat-item">
                <span className="work-stat-number">5k+</span>
                <span className="work-stat-label">{isRTL ? 'عملاء' : 'Clients'}</span>
              </div>
              <div className="work-stat-item">
                <span className="work-stat-number">24/7</span>
                <span className="work-stat-label">{isRTL ? 'دعم' : 'Support'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISA CATEGORIES */}
      <section className="work-section">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="work-section-header">
            <h2 className="work-section-title">
              {isRTL ? 'أنواع تأشيرات العمل' : 'Work Visa Types'}
            </h2>
            <p className="text-muted lead mx-auto" style={{ maxWidth: '700px' }}>
              {isRTL ? 'استكشف خيارات العمل المتاحة حول العالم' : 'Explore available work opportunities worldwide'}
            </p>
          </div>

          <div className="row g-4">
            {data.visa_types.map((type: any, index: number) => (
              <div key={index} className="col-lg-4 col-md-6">
                <Link href={type.link} className="text-decoration-none">
                  <div className="work-visa-item-card">
                    <div className="work-card-icon">
                      <i className={`fas ${type.icon}`}></i>
                    </div>
                    <h3 className="fw-bold mb-3">{type.name}</h3>
                    <p className="text-muted mb-0">{type.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVAILABLE PROGRAMS */}
      <section id="available-visas" className="work-section" style={{ backgroundColor: '#fff' }}>
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="work-section-header">
            <h2 className="work-section-title">
              {isRTL ? 'التأشيرات والبرامج المتاحة' : 'Currently Available Visas'}
            </h2>
          </div>

          <div className="work-visa-grid">
            {data.available_visas.map((visa: any, index: number) => (
              <div key={index} className="work-visa-item-card">
                <span className="work-card-country">{visa.country}</span>
                <div className="d-flex align-items-center mb-4">
                  <div className="work-card-icon mb-0 me-3" style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}>
                    <i className={`fas ${visa.icon}`}></i>
                  </div>
                  <h4 className="fw-bold mb-0">{visa.name}</h4>
                </div>

                <ul className="work-list">
                  {visa.highlights.map((highlight: string, idx: number) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>

                <Link href={visa.link} className="w-btn-primary text-decoration-none text-center py-3">
                  {isRTL ? 'اعرف المزيد' : 'Learn More'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES & TARGET AUDIENCE */}
      <section className="work-section">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="row g-5">
            <div className="col-lg-6">
              <h3 className="h2 fw-bold mb-5 border-bottom pb-4">{data.services.title}</h3>
              <div className="work-check-grid">
                {data.services.list.map((service: string, index: number) => (
                  <div key={index} className="work-check-item">
                    <i className="fas fa-check-circle"></i>
                    <span className="fw-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="h2 fw-bold mb-5 border-bottom pb-4">{data.target_audience.title}</h3>
              <div className="row g-3">
                {data.target_audience.categories.map((category: string, index: number) => (
                  <div key={index} className="col-md-6">
                    <div className="work-check-item">
                      <i className="fas fa-user-tie"></i>
                      <span>{category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY KAYA */}
      <section className="work-section" style={{ backgroundColor: '#fff' }}>
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="work-section-header">
            <h2 className="work-section-title">{data.why_kaya.title}</h2>
          </div>

          <div className="row g-4">
            {data.why_kaya.reasons.map((reason: any, index: number) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="work-visa-item-card text-center align-items-center">
                  <div className="work-card-icon">
                    <i className={`fas ${reason.icon}`}></i>
                  </div>
                  <h4 className="fw-bold mb-3">{reason.title}</h4>
                  <p className="text-muted small">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="work-cta-banner">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="display-4 fw-bold mb-4">{data.cta.title}</h2>
          <p className="lead text-white-50 mb-5 mx-auto" style={{ maxWidth: '800px' }}>{data.cta.description}</p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link href="/contact" className="w-btn-primary px-5 text-decoration-none">
              {data.cta.button_text}
            </Link>
            <Link href="tel:+1234567890" className="w-btn-outline px-5 text-decoration-none">
              {isRTL ? 'اتصل بنا الآن' : 'Call Us Now'}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}