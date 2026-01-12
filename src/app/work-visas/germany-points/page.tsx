'use client';

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import '@/styles/work-visas.css';

const content = require('@/data/work-germany-points.json');

export default function GermanyPointsPage() {
  const { locale } = useI18n();
  const data = content[locale];

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>

      {/* Hero Section */}
      <section className="work-visa-hero">
        <div className="container">
          <h1>{data.title}</h1>
          {data.subtitle && <p className="hero-subtitle">{data.subtitle}</p>}
        </div>
      </section>

      {/* Overview Section */}
      {data.overview && (
        <section className="work-visa-section overview-section">
          <div className="container">
            <h2>
              <i className="fas fa-info-circle"></i> {data.overview.title}
            </h2>
            <p>{data.overview.description}</p>
          </div>
        </section>
      )}

      {/* Requirements Section */}
      {data.requirements && (
        <section className="work-visa-section requirements-section">
          <div className="container">
            <h2>
              <i className="fas fa-clipboard-check"></i> {data.requirements.title}
            </h2>
            <ul className="requirements-list">
              {data.requirements.items.map((item: string, index: number) => (
                <li key={index}>
                  <i className="fas fa-check-circle"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Process Section */}
      {data.process && (
        <section className="work-visa-section process-section">
          <div className="container">
            <h2>
              <i className="fas fa-list-ol"></i> {data.process.title}
            </h2>
            <div className="process-steps">
              {data.process.steps.map((step: any, index: number) => (
                <div key={index} className="work-visa-card process-card">
                  <div className="step-number">{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Documents Section */}
      {data.documents && (
        <section className="work-visa-section documents-section">
          <div className="container">
            <h2>
              <i className="fas fa-file-alt"></i> {data.documents.title}
            </h2>
            <ul className="requirements-list">
              {data.documents.items.map((item: string, index: number) => (
                <li key={index}>
                  <i className="fas fa-file"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Processing Time & Validity Section */}
      {(data.processingTime || data.validity) && (
        <section className="work-visa-section info-grid-section">
          <div className="container">
            <div className="info-grid">
              {data.processingTime && (
                <div className="work-visa-card info-card">
                  <i className="fas fa-clock"></i>
                  <h3>{data.processingTime.title}</h3>
                  <p>{data.processingTime.duration}</p>
                </div>
              )}
              {data.validity && (
                <div className="work-visa-card info-card">
                  <i className="fas fa-calendar-alt"></i>
                  <h3>{data.validity.title}</h3>
                  <p>{data.validity.duration}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Fees Section */}
      {data.fees && (
        <section className="work-visa-section fees-section">
          <div className="container">
            <h2>
              <i className="fas fa-dollar-sign"></i> {data.fees.title}
            </h2>
            <ul className="requirements-list">
              {data.fees.items.map((item: string, index: number) => (
                <li key={index}>
                  <i className="fas fa-money-bill-wave"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {data.benefits && (
        <section className="work-visa-section benefits-section">
          <div className="container">
            <h2>
              <i className="fas fa-star"></i> {data.benefits.title}
            </h2>
            <ul className="requirements-list">
              {data.benefits.items.map((item: string, index: number) => (
                <li key={index}>
                  <i className="fas fa-check"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* With Kaya Section */}
      {data.withKaya && (
        <section className="work-visa-section with-kaya-section">
          <div className="container">
            <h2>
              <i className="fas fa-hands-helping"></i> {data.withKaya.title}
            </h2>
            <ul className="services-list">
              {data.withKaya.services.map((service: string, index: number) => (
                <li key={index}>
                  <i className="fas fa-check-circle"></i>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="work-visa-section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{locale === 'ar' ? 'هل أنت مستعد للبدء؟' : 'Ready to Get Started?'}</h2>
            <p>
              {locale === 'ar'
                ? 'تواصل معنا اليوم للحصول على استشارة مجانية'
                : 'Contact us today for a free consultation'}
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary">
                <i className="fas fa-envelope"></i>
                {locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </Link>
              <Link href="/work-visas" className="btn btn-secondary">
                <i className="fas fa-arrow-left"></i>
                {locale === 'ar' ? 'العودة إلى تأشيرات العمل' : 'Back to Work Visas'}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
