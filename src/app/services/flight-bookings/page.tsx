'use client';

import { useI18n } from '@/lib/i18n';
import Link from 'next/link';
import '@/styles/services.css';

const flightData = require('@/data/service-flight-bookings.json');

export default function FlightBookingsPage() {
  const { locale, dir } = useI18n();
  const data = flightData[locale];

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
          <p className="hero-description">{data.hero.description}</p>
        </div>
      </section>

      <div className="container" style={{ marginTop: '60px', marginBottom: '60px' }}>
        {/* Advantages Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 className="section-title">{data.advantages.title}</h2>
          <div className="row">
            {data.advantages.items.map((advantage: any, index: number) => (
              <div key={index} className="col-md-4 col-sm-6 mb-4">
                <div className="feature-card" style={{ height: '100%', textAlign: 'center' }}>
                  <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #0D9488, #14B8A6)' }}>
                    <i className={`fas ${advantage.icon}`}></i>
                  </div>
                  <h3>{advantage.title}</h3>
                  <p>{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services List */}
        <section style={{ marginBottom: '60px', background: '#F3F4F6', padding: '40px', borderRadius: '12px' }}>
          <h2 className="section-title">{data.services_list.title}</h2>
          <ul className="reasons-list">
            {data.services_list.items.map((service: string, index: number) => (
              <li key={index}>
                <i className="fas fa-plane" style={{ color: '#14B8A6', marginInlineEnd: '10px' }}></i>
                {service}
              </li>
            ))}
          </ul>
        </section>

        {/* Value Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 className="section-title">{data.value.title}</h2>
          <p style={{ fontSize: '1.1rem', color: '#6B7280', lineHeight: '1.8' }}>{data.value.description}</p>
        </section>

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

        {/* CTA Section */}
        <section style={{ textAlign: 'center', padding: '40px 20px', background: 'linear-gradient(135deg, #0D9488, #14B8A6)', borderRadius: '16px', color: 'white' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{data.cta.title}</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '25px', opacity: 0.95 }}>{data.cta.subtitle}</p>
          <Link href="/contact" className="btn btn-light" style={{ 
            padding: '15px 40px',
            fontSize: '1.1rem',
            background: 'white',
            color: '#0D9488',
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
