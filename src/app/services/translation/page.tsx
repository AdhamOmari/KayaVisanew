'use client';

import { useI18n } from '@/lib/i18n';
import Link from 'next/link';
import Image from 'next/image';
import '@/styles/services.css';

const translationData = require('@/data/service-translation.json');

export default function TranslationServicePage() {
  const { locale, dir } = useI18n();
  const data = translationData[locale];

  return (
    <div dir={dir}>
      {/* Hero Section */}
      <section className="service-hero" style={{ background: 'linear-gradient(135deg, #0D9488 0%, #14B8A6 100%)' }}>
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: '20px', opacity: 0.9 }}>
            <Link href="/" style={{ color: 'white' }}>{locale === 'ar' ? 'الرئيسية' : 'Home'}</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            <Link href="/services" style={{ color: 'white' }}>{locale === 'ar' ? 'خدماتنا' : 'Our Services'}</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            <span>{data.title}</span>
          </div>
          <h1>{data.hero.title}</h1>
          {data.tagline && (
            <p className="tagline" style={{ fontSize: '1.1rem', marginBottom: '15px', opacity: 0.95 }}>
              {data.tagline}
            </p>
          )}
          <p className="hero-description">{data.hero.description}</p>
        </div>
      </section>

      <div className="container" style={{ marginTop: '60px', marginBottom: '60px' }}>
        {/* Why Choose Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 className="section-title">{data.why_choose.title}</h2>
          <ul className="reasons-list">
            {data.why_choose.reasons.map((reason: string, index: number) => (
              <li key={index}>
                <i className="fas fa-check-circle" style={{ color: '#14B8A6', marginInlineEnd: '10px' }}></i>
                {reason}
              </li>
            ))}
          </ul>
        </section>

        {/* Services Grid */}
        <section style={{ marginBottom: '60px' }}>
          <h2 className="section-title">{locale === 'ar' ? 'خدمات الترجمة التي نقدمها في كايا' : 'Translation Services We Provide at Kaya'}</h2>
          <div className="row">
            {data.services.map((service: any, index: number) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="feature-card" style={{ height: '100%' }}>
                  <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #0D9488, #14B8A6)' }}>
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        {data.languages && (
          <section style={{ marginBottom: '60px', background: '#F3F4F6', padding: '40px', borderRadius: '12px' }}>
            <h2 className="section-title">{data.languages.title}</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '25px', color: '#6B7280' }}>{data.languages.subtitle}</p>
            <div className="row">
              {data.languages.list.map((language: string, index: number) => (
                <div key={index} className="col-md-3 col-sm-4 col-6 mb-3">
                  <div style={{ 
                    padding: '15px', 
                    background: 'white', 
                    borderRadius: '8px',
                    textAlign: 'center',
                    fontWeight: '600',
                    color: '#1F2937'
                  }}>
                    <i className="fas fa-language" style={{ color: '#14B8A6', marginInlineEnd: '8px' }}></i>
                    {language}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Process Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 className="section-title">{data.process.title}</h2>
          <div className="row">
            {data.process.steps.map((step: any, index: number) => (
              <div key={index} className="col-md-4 col-sm-6 mb-4">
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #0D9488, #14B8A6)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '2rem',
                    color: 'white'
                  }}>
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#1F2937' }}>{step.title}</h3>
                  <p style={{ color: '#6B7280' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ready Section */}
        <section style={{ background: 'linear-gradient(135deg, #0D9488, #14B8A6)', padding: '50px 40px', borderRadius: '16px', color: 'white', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>{data.ready.title}</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '25px', opacity: 0.95 }}>{data.ready.description}</p>
          <ul style={{ fontSize: '1.05rem', lineHeight: '2' }}>
            {data.ready.features.map((feature: string, index: number) => (
              <li key={index}>
                <i className="fas fa-check" style={{ marginInlineEnd: '10px' }}></i>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA Section */}
        <section style={{ textAlign: 'center', padding: '40px 20px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#1F2937' }}>{data.cta.title}</h2>
          <p style={{ fontSize: '1.1rem', color: '#6B7280', marginBottom: '25px' }}>{data.cta.subtitle}</p>
          <Link href="/contact" className="btn btn-primary" style={{ 
            padding: '15px 40px',
            fontSize: '1.1rem',
            background: 'linear-gradient(135deg, #0D9488, #14B8A6)',
            border: 'none'
          }}>
            <i className="fas fa-phone" style={{ marginInlineEnd: '10px' }}></i>
            {data.cta.button}
          </Link>
        </section>
      </div>
    </div>
  );
}
