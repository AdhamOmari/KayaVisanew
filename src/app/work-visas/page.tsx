// app/work-visas/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { WorkVisaPageContent, AvailableVisa, WorkVisaType, WhyKayaReason } from '@/types/work-visa';
import '@/styles/work-visas.css';

export default function WorkVisasPage() {
  const { locale } = useI18n();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load data
    const loadData = async () => {
      try {
        const content: WorkVisaPageContent = require('@/data/work-visas-main.json');
        setData(content[locale as keyof WorkVisaPageContent] || content.en);
      } catch (error) {
        console.error('Error loading work visa data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [locale]);

  if (loading) {
    return (
      <div className="study-country-page">
        <div className="container text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="study-country-page">
        <div className="container text-center py-5">
          <h2>Error loading content</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="work-visas-page" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Hero Section */}
      <section className="work-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>{locale === 'ar' ? 'فرص العمل العالمية' : 'Global Work Opportunities'}</span>
            </div>
            
            <div className="hero-title">
              <h1 className="hero-title-main">{data.title}</h1>
              <p className="hero-title-sub">{data.hero.subtitle}</p>
            </div>
            
            <p className="hero-description">{data.hero.description}</p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">{locale === 'ar' ? 'دولة' : 'Countries'}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">{locale === 'ar' ? 'معدل النجاح' : 'Success Rate'}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5000+</span>
                <span className="stat-label">{locale === 'ar' ? 'عملاء' : 'Clients'}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">{locale === 'ar' ? 'دعم' : 'Support'}</span>
              </div>
            </div>
            
            <div className="hero-cta">
              <Link href="/contact" className="btn-study-primary">
                {locale === 'ar' ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
              </Link>
              <Link href="#available-visas" className="btn-study-secondary">
                {locale === 'ar' ? 'استكشف التأشيرات' : 'Explore Visas'}
              </Link>
            </div>
          </div>
        </div>
        
        <div className="hero-decoration">
          <div className="decoration-item passport">
            <i className="fas fa-passport"></i>
          </div>
          <div className="decoration-item briefcase">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="decoration-item globe">
            <i className="fas fa-globe"></i>
          </div>
          <div className="decoration-item suitcase">
            <i className="fas fa-suitcase"></i>
          </div>
        </div>
      </section>

      {/* Visa Types Overview */}
      <section className="section-study visa-types-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {locale === 'ar' ? 'أنواع تأشيرات العمل' : 'Work Visa Types'}
            </h2>
            <p className="section-subtitle">
              {locale === 'ar' ? 'استكشف خيارات العمل المتاحة حول العالم' : 'Explore available work opportunities worldwide'}
            </p>
          </div>

          <div className="visa-types-grid">
            {data.visa_types.map((type: WorkVisaType, index: number) => (
              <Link href={type.link} key={index} className="visa-type-link">
                <div className="visa-type-card">
                  <div className="visa-type-icon">
                    <i className={`fas ${type.icon}`}></i>
                  </div>
                  <h3>{type.name}</h3>
                  <p>{type.description}</p>
                  <div className="visa-type-arrow">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Available Visas Grid */}
      <section id="available-visas" className="section-study available-visas-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {locale === 'ar' ? 'التأشيرات المتاحة حالياً' : 'Currently Available Visas'}
            </h2>
            <p className="section-subtitle">
              {locale === 'ar' ? 'اختر التأشيرة التي تناسب مؤهلاتك وطموحاتك' : 'Choose the visa that matches your qualifications and ambitions'}
            </p>
          </div>

          <div className="visas-grid">
            {data.available_visas.map((visa: AvailableVisa, index: number) => (
              <div key={index} className="work-visa-card">
                <span className="visa-country-badge">{visa.country}</span>
                
                <div className="d-flex align-items-center mb-4">
                  <div className="visa-card-icon">
                    <i className={`fas ${visa.icon}`}></i>
                  </div>
                  <h3 className="mb-0 ms-3">{visa.name}</h3>
                </div>
                
                <ul className="visa-highlights">
                  {visa.highlights.map((highlight: string, idx: number) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>

                <Link href={visa.link} className="btn-visa-details">
                  <i className="fas fa-arrow-right me-2"></i>
                  {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Target Audience */}
      <section className="section-study services-section">
        <div className="container">
          <div className="row g-5">
            {/* What We Offer */}
            <div className="col-lg-6">
              <div className="glass-card h-100">
                <div className="section-header mb-4">
                  <h3 className="section-title h2">
                    {data.services.title}
                  </h3>
                </div>
                <ul className="services-list">
                  {data.services.list.map((service: string, index: number) => (
                    <li key={index}>
                      <i className="fas fa-check-circle me-3" style={{color: '#ffd166'}}></i>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Who Can Benefit */}
            <div className="col-lg-6">
              <div className="glass-card h-100">
                <div className="section-header mb-4">
                  <h3 className="section-title h2">
                    {data.target_audience.title}
                  </h3>
                </div>
                <div className="row g-3">
                  {data.target_audience.categories.map((category: string, index: number) => (
                    <div key={index} className="col-md-6">
                      <div className="audience-card">
                        <i className="fas fa-user-check me-2"></i>
                        {category}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Important Alerts */}
          <div className="mt-5">
            <div className="glass-card alert-card">
              <div className="section-header mb-4">
                <h3 className="section-title h2">
                  {data.important_alerts.title}
                </h3>
              </div>
              <div className="row g-4">
                {data.important_alerts.alerts.map((alert: string, index: number) => (
                  <div key={index} className="col-md-6">
                    <div className="alert-item">
                      <p className="mb-0">{alert}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kaya */}
      <section id="why-kaya" className="section-study why-kaya-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{data.why_kaya.title}</h2>
            <p className="section-subtitle">{data.why_kaya.subtitle}</p>
          </div>

          <div className="why-kaya-grid">
            {data.why_kaya.reasons.map((reason: WhyKayaReason, index: number) => (
              <div key={index} className="why-kaya-card">
                <div className="icon-circle">
                  <i className={`fas ${reason.icon}`}></i>
                </div>
                <h4>{reason.title}</h4>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="work-visa-cta">
        <div className="container">
          <div className="professional-journey-banner">
            <h2>{data.cta.title}</h2>
            <p>{data.cta.description}</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn-cta-primary">
                <i className="fas fa-paper-plane me-2"></i>
                {data.cta.button_text}
              </Link>
              <Link href="tel:+1234567890" className="btn-cta-secondary">
                <i className="fas fa-phone me-2"></i>
                {locale === 'ar' ? 'اتصل بنا الآن' : 'Call Us Now'}
              </Link>
            </div>
            
            <div className="cta-features">
              <div className="feature-item">
                <i className="fas fa-clock"></i>
                <span>{locale === 'ar' ? 'دعم 24/7' : '24/7 Support'}</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-shield-alt"></i>
                <span>{locale === 'ar' ? 'ضمان 100%' : '100% Guarantee'}</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-award"></i>
                <span>{locale === 'ar' ? 'خبراء معتمدون' : 'Certified Experts'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}