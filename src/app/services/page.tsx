'use client';

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import '@/styles/services.css';

const content = require('@/data/services-main.json');

export default function ServicesPage() {
  const { locale } = useI18n();
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
                <Link href="#visa-services" className="btn btn-modern btn-lg">
                  <i className="fas fa-passport me-2"></i>
                  {locale === 'ar' ? 'خدمات التأشيرات' : 'Visa Services'}
                </Link>
                <Link href="#support-services" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-hands-helping me-2"></i>
                  {locale === 'ar' ? 'خدمات الدعم' : 'Support Services'}
                </Link>
                <Link href="/contact" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-phone-alt me-2"></i>
                  {locale === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {data.categories.map((category: any, catIndex: number) => (
        <section 
          key={catIndex} 
          id={catIndex === 0 ? 'visa-services' : 'support-services'}
          className={catIndex % 2 === 0 ? 'section-modern' : 'section-modern soft-bg'}
        >
          <div className="container">
            <div className="category-header">
              <h2>
                <i className={`fas ${category.icon}`}></i>
                {category.name}
              </h2>
            </div>

            <div className="services-grid">
              {category.services.map((service: any, index: number) => (
                <div key={index} className="service-card">
                  <div className="service-icon">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  
                  <h3>{service.name}</h3>

                  <div className="service-feature">
                    <strong>{locale === 'ar' ? 'الميزة' : 'Feature'}</strong>
                    <p>{service.feature}</p>
                  </div>

                  <div className="service-feature">
                    <strong>{locale === 'ar' ? 'الفائدة' : 'Benefit'}</strong>
                    <p>{service.benefit}</p>
                  </div>

                  <div className="service-value">
                    <i className="fas fa-star me-2"></i>
                    {service.value}
                  </div>

                  <Link href={service.link} className="btn btn-modern">
                    <i className="fas fa-arrow-right me-2"></i>
                    {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why Services Section */}
      <section className="section-modern">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">{data.why_services.title}</h2>
            <p className="lead text-muted">{data.why_services.subtitle}</p>
          </div>

          <div className="row g-4">
            {data.why_services.benefits.map((benefit: any, index: number) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="why-service-card">
                  <div className="why-service-icon">
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

      {/* Quick Links */}
      <section className="section-modern soft-bg">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              {locale === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h2>
            <p className="lead text-muted">
              {locale === 'ar' ? 'انتقل مباشرة إلى الخدمة التي تحتاجها' : 'Jump directly to the service you need'}
            </p>
          </div>

          <div className="quick-links">
            <Link href="/second-citizenship" className="quick-link-card">
              <i className="fas fa-globe"></i>
              {locale === 'ar' ? 'الجنسية الثانية' : 'Second Citizenship'}
            </Link>
            <Link href="/usa-visas" className="quick-link-card">
              <i className="fas fa-flag-usa"></i>
              {locale === 'ar' ? 'تأشيرات أمريكا' : 'U.S. Visas'}
            </Link>
            <Link href="/study-visas" className="quick-link-card">
              <i className="fas fa-graduation-cap"></i>
              {locale === 'ar' ? 'تأشيرات الدراسة' : 'Study Visas'}
            </Link>
            <Link href="/work-visas" className="quick-link-card">
              <i className="fas fa-briefcase"></i>
              {locale === 'ar' ? 'تأشيرات العمل' : 'Work Visas'}
            </Link>
            <Link href="/travel-visas" className="quick-link-card">
              <i className="fas fa-suitcase-rolling"></i>
              {locale === 'ar' ? 'تأشيرات السفر' : 'Travel Visas'}
            </Link>
            <Link href="/programs" className="quick-link-card">
              <i className="fas fa-star"></i>
              {locale === 'ar' ? 'برامجنا' : 'Our Programs'}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-modern">
        <div className="container">
          <div className="services-cta-banner">
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
