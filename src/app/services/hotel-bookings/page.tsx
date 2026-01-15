'use client';

import { useI18n } from '@/lib/i18n';
import Link from 'next/link';
import '@/styles/services.css';


const hotelData = require('@/data/service-hotel-bookings.json');

export default function HotelBookingsPage() {
  const { locale, dir } = useI18n();
  const data = hotelData[locale];

  return (
    <div dir={dir} className="hotel-page">

      {/* Hero */}
      <section className="hotel-hero">
        <div className="hotel-container">
          <h1>{data.hero.title}</h1>
          <p className="hotel-hero-description">{data.hero.description}</p>
        </div>
      </section>

      <div className="hotel-container">

        {/* Advantages */}
        <section className="hotel-section">
          <h2 className="hotel-section-title">{data.advantages.title}</h2>
          <div className="hotel-row">
            {data.advantages.list.map((adv: any, index: number) => (
              <div key={index} className="hotel-col-md-4 hotel-col-sm-6 hotel-mb-4">
                <div className="hotel-feature-card">
                  <div className="hotel-feature-icon">
                    <i className={`fas ${adv.icon}`}></i>
                  </div>
                  <h3>{adv.title}</h3>
                  <p>{adv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="hotel-section hotel-services-box">
          <h2 className="hotel-section-title">{data.services.title}</h2>
          <ul className="hotel-reasons-list">
            {data.services.list.map((item: string, index: number) => (
              <li key={index}>
                <i className="fas fa-hotel hotel-reason-icon"></i>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Value */}
        <section className="hotel-section">
          <h2 className="hotel-section-title">{data.value.title}</h2>
          <p className="hotel-text">{data.value.description}</p>
        </section>

        {/* Process */}
        <section className="hotel-section">
          <h2 className="hotel-section-title">{data.process.title}</h2>
          <div className="hotel-row">
            {data.process.steps.map((step: any, index: number) => (
              <div key={index} className="hotel-col-md-4 hotel-col-sm-6 hotel-mb-4">
                <div className="hotel-process-step">
                  <div className="hotel-process-icon">
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                  <h3 className="hotel-process-title">{step.title}</h3>
                  <p className="hotel-process-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="hotel-cta-section">
          <h2 className="hotel-cta-title">{data.cta.title}</h2>
          <Link href="/contact" className="hotel-cta-button">
            <i className="fas fa-phone hotel-cta-icon"></i>
            {data.cta.button}
          </Link>
        </section>

      </div>
    </div>
  );
}
