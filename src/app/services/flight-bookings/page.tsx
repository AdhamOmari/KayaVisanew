'use client';

import { useI18n } from '@/lib/i18n';
import Link from 'next/link';
import '@/styles/services.css';

const flightData = require('@/data/service-flight-bookings.json');

export default function FlightBookingsPage() {
  const { locale, dir } = useI18n();
  const data = flightData[locale];

  return (
    <div dir={dir} className="flight-page">

      {/* Hero */}
      <section className="flight-hero">
        <div className="flight-container">
    

          <h1>{data.hero.title}</h1>
          <p className="flight-hero-description">{data.hero.description}</p>
        </div>
      </section>

      <div className="flight-container">

        {/* Advantages */}
        <section className="flight-section">
          <h2 className="flight-section-title">{data.advantages.title}</h2>
          <div className="flight-row">
{data.advantages.list.map((adv: any, index: number) => (
              <div key={index} className="flight-col-md-4 flight-col-sm-6 flight-mb-4">
                <div className="flight-feature-card">
                  <div className="flight-feature-icon">
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
<section className="flight-section">
  <h2 className="flight-section-title">{data.advantages.title}</h2>
  <div className="flight-row">
{data.advantages.list.map((adv: any, index: number) => (
      <div key={index} className="flight-col-md-4 flight-col-sm-6 flight-mb-4">
        <div className="flight-feature-card">
          <div className="flight-feature-icon">
            <i className={`fas ${adv.icon}`}></i>
          </div>
          <h3>{adv.title}</h3>
          <p>{adv.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>


        {/* Value */}
        <section className="flight-section">
          <h2 className="flight-section-title">{data.value.title}</h2>
          <p className="flight-text">{data.value.description}</p>
        </section>

        {/* Process */}
        <section className="flight-section">
          <h2 className="flight-section-title">{data.process.title}</h2>
          <div className="flight-row">
            {data.process.steps.map((step: any, index: number) => (
              <div key={index} className="flight-col-md-4 flight-col-sm-6 flight-mb-4">
                <div className="flight-process-step">
                  <div className="flight-process-icon">
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                  <h3 className="flight-process-title">{step.title}</h3>
                  <p className="flight-process-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="flight-cta-section">
          <h2 className="flight-cta-title">{data.cta.title}</h2>
          <p className="flight-cta-subtitle">{data.cta.subtitle}</p>
          <Link href="/contact" className="flight-cta-button">
            {data.cta.button}
          </Link>
        </section>

      </div>
    </div>
  );
}
