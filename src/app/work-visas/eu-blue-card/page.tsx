'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import '@/styles/eu-blue-card.css';

export default function EUBlueCardPage() {
  const { locale } = useI18n();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const content = require('@/data/work-eu-blue-card.json');
      setData(content[locale] || content.en || content);
    } catch (error) {
      console.error('Error loading data:', error);
      setData({});
    } finally {
      setLoading(false);
    }
  }, [locale]);

  if (loading) {
    return (
      <div className="eu-blue-card-page">
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
      <div className="eu-blue-card-page">
        <div className="container text-center py-5">
          <h2>Error loading content</h2>
        </div>
      </div>
    );
  }

  // Safe data access with fallbacks
  const requirements = data?.requirements?.items || [];
  const process = data?.process?.steps || [];
  const documents = data?.documents?.items || [];
  const fees = data?.fees?.items || [];
  const benefits = data?.benefits?.items || [];
  const withKaya = data?.withKaya?.services || [];
  const importance = data?.importance?.items || [];
  const countries = data?.countries?.items || [];
  const documentsNotes = data?.documents?.notes || [];
  const feesNotes = data?.fees?.notes || [];

  return (
    <div className="eu-blue-card-page" dir={locale === 'ar' ? 'rtl' : 'ltr'}>

      {/* Hero Section */}
      <section className="eu-blue-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge eu-blue-badge">
              <span>{locale === 'ar' ? 'تأشيرة العمل الأوروبية' : 'EU Work Visa'}</span>
            </div>
            
            <div className="hero-title eu-blue-title">
              <h1 className="hero-title-main eu-blue-main">{data?.title || 'EU Blue Card'}</h1>
              {data?.subtitle && <p className="hero-title-sub eu-blue-sub">{data.subtitle}</p>}
            </div>
          </div>
        </div>
        
        {/* Decoration Items */}
        <div className="eu-blue-decoration">
          <div className="decoration-item">
            <i className="fas fa-globe-europe"></i>
          </div>
          <div className="decoration-item">
            <i className="fas fa-id-card"></i>
          </div>
          <div className="decoration-item">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="decoration-item">
            <i className="fas fa-university"></i>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {data?.overview && (
        <section className="eu-section overview-section">
          <div className="container">
            <div className="eu-section-header">
              <h2 className="eu-section-title">
                <i className="fas fa-info-circle me-3 info-blue"></i>
                {data.overview.title || 'Overview'}
              </h2>
            </div>
            <div className="eu-glass-card">
              <p className="mb-0">{data.overview.description}</p>
            </div>
          </div>
        </section>
      )}

      {/* Importance Section */}
      {importance.length > 0 && (
        <section className="eu-section importance-section">
          <div className="container">
            <div className="eu-section-header">
              <h2 className="eu-section-title">
                <i className="fas fa-bolt me-3 info-blue"></i>
                {data.importance.title || 'Importance'}
              </h2>
            </div>
            <div className="eu-glass-card">
              <ul className="requirements-list eu-requirements">
                {importance.map((item: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-check-circle me-3 check-green"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Countries Section */}
      {countries.length > 0 && (
        <section className="eu-section countries-section">
          <div className="container">
            <div className="eu-section-header">
              <h2 className="eu-section-title">
                <i className="fas fa-globe me-3 info-blue"></i>
                {data.countries.title || 'Countries'}
              </h2>
            </div>
            <div className="eu-glass-card">
              <ul className="requirements-list eu-requirements">
                {countries.map((item: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-map-marker-alt me-3 check-cyan"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {data.countries.note && (
                <p className="mt-3 text-muted">{data.countries.note}</p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Requirements Section */}
      {requirements.length > 0 && (
        <section className="eu-section requirements-section">
          <div className="container">
            <div className="eu-section-header">
              <h2 className="eu-section-title">
                <i className="fas fa-clipboard-check me-3 info-blue"></i>
                {data?.requirements?.title || 'Requirements'}
              </h2>
            </div>
            <div className="eu-glass-card">
              <ul className="requirements-list eu-requirements">
                {requirements.map((item: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-check-circle me-3 check-green"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {process.length > 0 && (
        <section className="eu-section process-section">
          <div className="container">
            <div className="eu-section-header">
              <h2 className="eu-section-title">
                <i className="fas fa-list-ol me-3 info-blue"></i>
                {data?.process?.title || 'Application Process'}
              </h2>
            </div>
            <div className="process-steps eu-process">
              {process.map((step: any, index: number) => (
                <div key={index} className="process-card eu-card">
                  <div className="visa-card-icon eu-step-icon">{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Documents Section */}
      {documents.length > 0 && (
        <section className="eu-section documents-section">
          <div className="container">
            <div className="eu-section-header">
              <h2 className="eu-section-title">
                <i className="fas fa-file-alt me-3 info-blue"></i>
                {data?.documents?.title || 'Required Documents'}
              </h2>
            </div>
            <div className="eu-glass-card">
              <ul className="requirements-list eu-requirements">
                {documents.map((item: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-file me-3 file-yellow"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Documents Notes Section */}
      {documentsNotes.length > 0 && (
        <section className="eu-section documents-notes-section">
          <div className="container">
            <div className="eu-glass-card">
              <h3 className="mb-4" style={{ color: '#003366' }}>
                {locale === 'ar' ? 'ملاحظات حول المستندات' : 'Documents Notes'}
              </h3>
              <ul className="requirements-list eu-requirements">
                {documentsNotes.map((note: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-info-circle me-3 info-blue"></i>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Processing Time & Validity Section */}
      {(data?.processingTime || data?.validity) && (
        <section className="eu-section info-grid-section">
          <div className="container">
            <div className="eu-section-header">
              <h2 className="eu-section-title">
                <i className="fas fa-cogs me-3 info-blue"></i>
                {locale === 'ar' ? 'المعلومات الأساسية' : 'Key Information'}
              </h2>
            </div>
            <div className="info-grid eu-info-grid">
              {data?.processingTime && (
                <div className="info-card eu-info">
                  <div className="icon-circle eu-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <h4>{data.processingTime.title || 'Processing Time'}</h4>
                  <p>{data.processingTime.duration}</p>
                </div>
              )}
              {data?.validity && (
                <div className="info-card eu-info">
                  <div className="icon-circle eu-icon">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <h4>{data.validity.title || 'Visa Validity'}</h4>
                  <p>{data.validity.duration}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Fees Section */}
      {fees.length > 0 && (
        <section className="eu-section fees-section">
          <div className="container">
            <div className="eu-section-header">
              <h2 className="eu-section-title">
                <i className="fas fa-dollar-sign me-3 info-blue"></i>
                {data?.fees?.title || 'Fees'}
              </h2>
            </div>
            <div className="eu-glass-card">
              <ul className="requirements-list eu-requirements">
                {fees.map((item: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-money-bill-wave me-3 check-green"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Fees Notes Section */}
      {feesNotes.length > 0 && (
        <section className="eu-section fees-notes-section">
          <div className="container">
            <div className="eu-glass-card">
              <h3 className="mb-4" style={{ color: '#003366' }}>
                {locale === 'ar' ? 'ملاحظات حول الرسوم' : 'Fees Notes'}
              </h3>
              <ul className="requirements-list eu-requirements">
                {feesNotes.map((note: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-info-circle me-3 info-blue"></i>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {benefits.length > 0 && (
        <section className="eu-section benefits-section">
          <div className="container">
            <div className="eu-section-header">
              <h2 className="eu-section-title">
                <i className="fas fa-star me-3 info-blue"></i>
                {data?.benefits?.title || 'Benefits'}
              </h2>
            </div>
            <div className="eu-glass-card">
              <ul className="requirements-list eu-requirements">
                {benefits.map((item: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-check me-3 check-green"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* With Kaya Section */}
      {withKaya.length > 0 && (
        <section className="eu-section with-kaya-section">
          <div className="container">
            <div className="eu-section-header">
              <h2 className="eu-section-title">
                <i className="fas fa-hands-helping me-3 info-blue"></i>
                {data?.withKaya?.title || 'Why Choose Kaya?'}
              </h2>
            </div>
            <div className="eu-glass-card">
              <ul className="services-list eu-services">
                {withKaya.map((service: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-check-circle me-3 check-cyan"></i>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="eu-blue-cta">
        <div className="container">
          <div className="professional-journey-banner eu-banner">
            <h2>{locale === 'ar' ? 'هل أنت مستعد للبدء؟' : 'Ready to Get Started?'}</h2>
            <p>
              {locale === 'ar'
                ? 'تواصل معنا اليوم للحصول على استشارة مجانية'
                : 'Contact us today for a free consultation'}
            </p>
            <div className="cta-buttons eu-buttons">
              <Link href="/contact" className="btn-cta-primary eu-primary">
                <i className="fas fa-envelope me-2"></i>
                {locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </Link>
              <Link href="/work-visas" className="btn-cta-secondary eu-secondary">
                <i className="fas fa-arrow-left me-2"></i>
                {locale === 'ar' ? 'العودة إلى تأشيرات العمل' : 'Back to Work Visas'}
              </Link>
            </div>
            
            <div className="cta-features eu-features">
              <div className="feature-item eu-feature">
                <i className="fas fa-clock"></i>
                <span>{locale === 'ar' ? 'دعم 24/7' : '24/7 Support'}</span>
              </div>
              <div className="feature-item eu-feature">
                <i className="fas fa-shield-alt"></i>
                <span>{locale === 'ar' ? 'ضمان 100%' : '100% Guarantee'}</span>
              </div>
              <div className="feature-item eu-feature">
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