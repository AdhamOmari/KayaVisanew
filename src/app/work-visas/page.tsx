'use client';

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import '@/styles/work-visas.css';

export default function WorkVisasPage() {
  const { locale, t } = useI18n();
  const content = require('@/data/work-visas-main.json');
  const data = content[locale];

  return (
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Hero Section */}
      <section className="modern-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">{data.title}</h1>
              <p className="lead mb-4">{data.hero.subtitle}</p>
              <p className="mb-5">{data.hero.description}</p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link href="#available-visas" className="btn btn-modern btn-lg">
                  <i className="fas fa-list me-2"></i>
                  {locale === 'ar' ? 'التأشيرات المتاحة' : 'Available Visas'}
                </Link>
                <Link href="#why-kaya" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-question-circle me-2"></i>
                  {locale === 'ar' ? 'لماذا كايا؟' : 'Why Kaya?'}
                </Link>
                <Link href="/contact" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-envelope me-2"></i>
                  {locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types Overview */}
      <section className="section-modern">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              {locale === 'ar' ? 'أنواع تأشيرات العمل' : 'Work Visa Types'}
            </h2>
            <p className="lead text-muted">
              {locale === 'ar' ? 'استكشف خيارات العمل المتاحة حول العالم' : 'Explore available work opportunities worldwide'}
            </p>
          </div>

          <div className="row g-4">
            {data.visa_types.map((type: any, index: number) => (
              <div key={index} className="col-md-6 col-lg-3">
                <Link href={type.link} className="text-decoration-none">
                  <div className="visa-type-card">
                    <div className="visa-type-icon">
                      <i className={`fas ${type.icon}`}></i>
                    </div>
                    <h3>{type.name}</h3>
                    <p>{type.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Visas Grid */}
      <section id="available-visas" className="section-modern soft-bg">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              {locale === 'ar' ? 'التأشيرات المتاحة حالياً' : 'Currently Available Visas'}
            </h2>
            <p className="lead text-muted">
              {locale === 'ar' ? 'اختر التأشيرة التي تناسب مؤهلاتك وطموحاتك' : 'Choose the visa that matches your qualifications and ambitions'}
            </p>
          </div>

          <div className="row g-4">
            {data.available_visas.map((visa: any, index: number) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="work-visa-card">
                  <span className="visa-country-badge">{visa.country}</span>
                  <div className="d-flex align-items-center mb-3">
                    <i className={`fas ${visa.icon} text-primary me-3`} style={{ fontSize: '2rem' }}></i>
                    <h3 className="mb-0">{visa.name}</h3>
                  </div>
                  
                  <ul className="visa-highlights">
                    {visa.highlights.map((highlight: string, idx: number) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>

                  <Link href={visa.link} className="btn btn-modern w-100 mt-3">
                    <i className="fas fa-arrow-right me-2"></i>
                    {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Target Audience */}
      <section className="section-modern">
        <div className="container">
          <div className="row g-5">
            {/* What We Offer */}
            <div className="col-lg-6">
              <div className="glass-card">
                <h3 className="h2 mb-4">
                  <i className="fas fa-hand-holding-heart text-primary me-3"></i>
                  {data.services.title}
                </h3>
                <ul className="services-list">
                  {data.services.list.map((service: string, index: number) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Who Can Benefit */}
            <div className="col-lg-6">
              <div className="glass-card">
                <h3 className="h2 mb-4">
                  <i className="fas fa-users text-primary me-3"></i>
                  {data.target_audience.title}
                </h3>
                <div className="row g-3">
                  {data.target_audience.categories.map((category: string, index: number) => (
                    <div key={index} className="col-md-6">
                      <div className="audience-card">
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
            <div className="glass-card">
              <h3 className="h2 mb-4">
                <i className="fas fa-exclamation-triangle text-warning me-3"></i>
                {data.important_alerts.title}
              </h3>
              <div className="row g-3">
                {data.important_alerts.alerts.map((alert: string, index: number) => (
                  <div key={index} className="col-12">
                    <div className="alert-item">
                      <p>{alert}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kaya */}
      <section id="why-kaya" className="section-modern soft-bg">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">{data.why_kaya.title}</h2>
            <p className="lead text-muted">{data.why_kaya.subtitle}</p>
          </div>

          <div className="row g-4">
            {data.why_kaya.reasons.map((reason: any, index: number) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="why-kaya-work-card">
                  <div className="icon-circle">
                    <i className={`fas ${reason.icon}`}></i>
                  </div>
                  <h4>{reason.title}</h4>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-modern">
        <div className="container">
          <div className="professional-journey-banner">
            <h2>{data.cta.title}</h2>
            <p>{data.cta.description}</p>
            <Link href="/contact" className="btn btn-light">
              <i className="fas fa-paper-plane me-2"></i>
              {data.cta.button_text}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
