'use client';

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import '@/styles/programs.css';

const content = require('@/data/programs-main.json');

export default function ProgramsPage() {
  const { locale } = useI18n();
  const data = content[locale];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <i key={i} className="fas fa-star"></i>
    ));
  };

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
                <Link href="#programs" className="btn btn-modern btn-lg">
                  <i className="fas fa-list me-2"></i>
                  {locale === 'ar' ? 'تصفح البرامج' : 'Browse Programs'}
                </Link>
                <Link href="#process" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-route me-2"></i>
                  {locale === 'ar' ? 'كيف نعمل' : 'How It Works'}
                </Link>
                <Link href="/contact" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-phone me-2"></i>
                  {locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section id="programs" className="section-modern">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              {locale === 'ar' ? 'برامج التأشيرات المتاحة' : 'Available Visa Programs'}
            </h2>
            <p className="lead text-muted">
              {locale === 'ar' ? 'اختر البرنامج الذي يناسب وجهتك وطموحاتك' : 'Choose the program that matches your destination and ambitions'}
            </p>
          </div>

          <div className="row g-4">
            {data.programs.map((program: any, index: number) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="program-card">
                  <span className="program-flag">{program.flag}</span>
                  <h3>{program.name}</h3>
                  <p className="program-tagline">{program.tagline}</p>
                  
                  <div className="program-price">{program.price}</div>
                  
                  <div className="program-rating">
                    {renderStars(program.rating)}
                  </div>

                  <ul className="program-features">
                    {program.features.map((feature: string, idx: number) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>

                  <Link href={program.link} className="btn btn-modern w-100">
                    <i className="fas fa-arrow-right me-2"></i>
                    {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Programs */}
      <section className="section-modern soft-bg">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">{data.why_programs.title}</h2>
            <p className="lead text-muted">{data.why_programs.subtitle}</p>
          </div>

          <div className="row g-4">
            {data.why_programs.benefits.map((benefit: any, index: number) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className={`fas ${benefit.icon}`}></i>
                  </div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" className="section-modern">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">{data.process.title}</h2>
            <p className="lead text-muted">
              {locale === 'ar' ? 'رحلتك معنا من البداية إلى النهاية' : 'Your journey with us from start to finish'}
            </p>
          </div>

          <div className="row">
            <div className="col-lg-10 mx-auto">
              {data.process.steps.map((step: any, index: number) => (
                <div key={index} className="process-step">
                  <div className="step-number">{step.number}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-modern soft-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="pricing-box">
                <h3>{data.pricing.title}</h3>
                <div className="pricing-note">{data.pricing.note}</div>
                
                <ul className="pricing-includes">
                  {data.pricing.includes.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-modern">
        <div className="container">
          <div className="premium-cta-banner">
            <h2>{data.cta.title}</h2>
            <p>{data.cta.description}</p>
            <Link href="/contact" className="btn btn-light">
              <i className="fas fa-rocket me-2"></i>
              {data.cta.button_text}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
