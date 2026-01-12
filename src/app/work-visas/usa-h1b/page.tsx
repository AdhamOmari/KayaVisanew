'use client';

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import '@/styles/work-visas.css';

const content = require('@/data/work-usa-h1b.json');

const USAH1BPage = () => {
  const { locale } = useI18n();
  const data = content[locale];

  return (
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Hero Section */}
      <section className="work-visa-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">{content.title}</h1>
          <p className="hero-subtitle">{content.subtitle}</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="work-visa-section overview-section">
        <div className="container">
          <div className="section-header">
            <i className="fas fa-info-circle section-icon"></i>
            <h2>{content.overview.title}</h2>
          </div>
          <p className="overview-text">{content.overview.description}</p>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="work-visa-section requirements-section">
        <div className="container">
          <div className="section-header">
            <i className="fas fa-clipboard-check section-icon"></i>
            <h2>{content.requirements.title}</h2>
          </div>
          <ul className="requirements-list">
            {content.requirements.items.map((item: string, index: number) => (
              <li key={index}>
                <i className="fas fa-check-circle"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process Section */}
      <section className="work-visa-section process-section">
        <div className="container">
          <div className="section-header">
            <i className="fas fa-tasks section-icon"></i>
            <h2>{content.process.title}</h2>
          </div>
          <div className="process-steps">
            {content.process.steps.map((step: any, index: number) => (
              <div key={index} className="process-step-card">
                <div className="step-number">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      {content.documents && (
        <section className="work-visa-section documents-section">
          <div className="container">
            <div className="section-header">
              <i className="fas fa-file-alt section-icon"></i>
              <h2>{content.documents.title}</h2>
            </div>
            <ul className="documents-list">
              {content.documents.items.map((item: string, index: number) => (
                <li key={index}>
                  <i className="fas fa-file-pdf"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Processing Time & Validity Section */}
      <section className="work-visa-section info-grid-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <i className="fas fa-clock info-icon"></i>
              <h3>{content.processingTime.title}</h3>
              <p>{content.processingTime.description}</p>
            </div>
            <div className="info-card">
              <i className="fas fa-calendar-alt info-icon"></i>
              <h3>{content.validity.title}</h3>
              <p>{content.validity.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      {content.fees && (
        <section className="work-visa-section fees-section">
          <div className="container">
            <div className="section-header">
              <i className="fas fa-dollar-sign section-icon"></i>
              <h2>{content.fees.title}</h2>
            </div>
            <div className="fees-grid">
              {content.fees.items.map((item: any, index: number) => (
                <div key={index} className="fee-card">
                  <h4>{item.type}</h4>
                  <p className="fee-amount">{item.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="work-visa-section benefits-section">
        <div className="container">
          <div className="section-header">
            <i className="fas fa-star section-icon"></i>
            <h2>{content.benefits.title}</h2>
          </div>
          <ul className="benefits-list">
            {content.benefits.items.map((item: string, index: number) => (
              <li key={index}>
                <i className="fas fa-trophy"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Choose Kaya Section */}
      <section className="work-visa-section kaya-section">
        <div className="container">
          <div className="section-header">
            <i className="fas fa-handshake section-icon"></i>
            <h2>{content.whyKaya.title}</h2>
          </div>
          <ul className="kaya-list">
            {content.whyKaya.items.map((item: string, index: number) => (
              <li key={index}>
                <i className="fas fa-check"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="work-visa-section cta-section">
        <div className="container">
          <h2>{content.cta.title}</h2>
          <p>{content.cta.description}</p>
          <div className="cta-buttons">
            <Link href="/contact" className="cta-button primary">
              {content.cta.button}
            </Link>
            <Link href="/work-visas" className="cta-button secondary">
              {locale === 'ar' ? 'العودة إلى تأشيرات العمل' : 'Back to Work Visas'}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default USAH1BPage;
