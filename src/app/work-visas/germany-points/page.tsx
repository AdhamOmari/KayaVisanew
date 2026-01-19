"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import "@/styles/germany-points.css";

export default function GermanyPointsPage() {
  const { locale } = useI18n();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const content = require("@/data/work-germany-points.json");
      setData(content[locale] || content.en || content);
    } catch (error) {
      console.error("Error loading data:", error);
      setData({});
    } finally {
      setLoading(false);
    }
  }, [locale]);

  if (loading) {
    return (
      <div className="germany-points-page">
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
      <div className="germany-points-page">
        <div className="container text-center py-5">
          <h2>Error loading content</h2>
        </div>
      </div>
    );
  }

  // Access data with proper structure
  const title = data?.title || "Germany Points Visa";
  const subtitle = data?.hero?.subtitle || "";
  const overview = data?.overview;
  const benefits = data?.benefits?.list || [];
  const pointsSystem = data?.points_system;
  const requirements = data?.requirements?.list || [];
  const process = data?.process?.steps || [];
  const documents = data?.documents?.list || [];
  const processingTime = data?.processing_time || "";
  const validity = data?.validity || "";
  const fees = data?.fees;
  const tips = data?.tips?.list || [];
  const withKaya = data?.with_kaya?.services || [];

  return (
    <div className="germany-points-page" dir={locale === "ar" ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="germany-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge germany-badge">
              <span>{locale === "ar" ? "تأشيرة النقاط ألمانيا" : "Germany Points Visa"}</span>
            </div>
            <div className="hero-title">
              <h1 className="hero-title-main germany-main">{title}</h1>
              {subtitle && <p className="hero-title-sub germany-sub">{subtitle}</p>}
            </div>
          </div>
        </div>
        
        {/* Germany Themed Decoration */}
        <div className="germany-decoration">
          <div className="decoration-item">
            <i className="fas fa-star"></i>
          </div>
          <div className="decoration-item">
            <i className="fas fa-medal"></i>
          </div>
          <div className="decoration-item">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="decoration-item">
            <i className="fas fa-language"></i>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {overview && (
        <section className="germany-section overview-section">
          <div className="container">
            <div className="germany-section-header">
              <h2 className="germany-section-title">
                <i className="fas fa-info-circle me-3 info-blue"></i>
                {overview.title || "Overview"}
              </h2>
            </div>
            <div className="germany-glass-card">
              <p className="mb-0">{overview.description}</p>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {benefits.length > 0 && (
        <section className="germany-section benefits-section">
          <div className="container">
            <div className="germany-section-header">
              <h2 className="germany-section-title">
                <i className="fas fa-star me-3 info-blue"></i>
                {data?.benefits?.title || "Key Benefits"}
              </h2>
            </div>
            <div className="germany-glass-card">
              <ul className="requirements-list germany-requirements">
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

      {/* Points System Section */}
      {pointsSystem && (
        <section className="germany-section points-system-section">
          <div className="container">
            <div className="germany-section-header">
              <h2 className="germany-section-title">
                <i className="fas fa-chart-line me-3 info-blue"></i>
                {pointsSystem.title || "Points System"}
              </h2>
            </div>
            <div className="germany-glass-card">
              <p className="mb-4">{pointsSystem.description}</p>
              {pointsSystem.criteria && pointsSystem.criteria.length > 0 && (
                <ul className="requirements-list germany-requirements">
                  {pointsSystem.criteria.map((criterion: any, index: number) => (
                    <li key={index}>
                      <i className="fas fa-calculator me-3 check-cyan"></i>
                      <div>
                        <strong>{criterion.category}:</strong> {criterion.points}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Requirements Section */}
      {requirements.length > 0 && (
        <section className="germany-section requirements-section">
          <div className="container">
            <div className="germany-section-header">
              <h2 className="germany-section-title">
                <i className="fas fa-clipboard-check me-3 info-blue"></i>
                {data?.requirements?.title || "Basic Requirements"}
              </h2>
            </div>
            <div className="germany-glass-card">
              <ul className="requirements-list germany-requirements">
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
        <section className="germany-section process-section">
          <div className="container">
            <div className="germany-section-header">
              <h2 className="germany-section-title">
                <i className="fas fa-list-ol me-3 info-blue"></i>
                {data?.process?.title || "Application Steps"}
              </h2>
            </div>
            <div className="process-steps germany-process">
              {process.map((step: any, index: number) => (
                <div key={index} className="process-card germany-card">
                  <div className="step-number germany-step">{index + 1}</div>
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
        <section className="germany-section documents-section">
          <div className="container">
            <div className="germany-section-header">
              <h2 className="germany-section-title">
                <i className="fas fa-file-alt me-3 info-blue"></i>
                {data?.documents?.title || "Required Documents"}
              </h2>
            </div>
            <div className="germany-glass-card">
              <ul className="requirements-list germany-requirements">
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

      {/* Processing Time & Validity Section */}
      {(processingTime || validity) && (
        <section className="germany-section info-grid-section">
          <div className="container">
            <div className="germany-section-header">
              <h2 className="germany-section-title">
                <i className="fas fa-cogs me-3 info-blue"></i>
                {locale === "ar" ? "المعلومات الأساسية" : "Key Information"}
              </h2>
            </div>
            <div className="info-grid germany-info-grid">
              {processingTime && (
                <div className="info-card germany-info">
                  <div className="icon-circle germany-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <h4>{"Processing Time"}</h4>
                  <p>{processingTime}</p>
                </div>
              )}
              {validity && (
                <div className="info-card germany-info">
                  <div className="icon-circle germany-icon">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <h4>{"Visa Validity"}</h4>
                  <p>{validity}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Fees Section */}
      {fees && (
        <section className="germany-section fees-section">
          <div className="container">
            <div className="germany-section-header">
              <h2 className="germany-section-title">
                <i className="fas fa-dollar-sign me-3 info-blue"></i>
                {fees.title || "Fees and Costs"}
              </h2>
            </div>
            <div className="germany-glass-card">
              {/* Official Fees */}
              {fees.official && fees.official.length > 0 && (
                <div className="mb-4">
                  <h4 className="mb-3" style={{ color: '#003366' }}>
                    <i className="fas fa-file-invoice me-2"></i>
                    {locale === 'ar' ? 'الرسوم الرسمية' : 'Official Fees'}
                  </h4>
                  <ul className="requirements-list germany-requirements">
                    {fees.official.map((item: string, index: number) => (
                      <li key={index}>
                        <i className="fas fa-euro-sign me-3 check-green"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Financial Proof */}
              {fees.financial_proof && fees.financial_proof.length > 0 && (
                <div className="mb-4">
                  <h4 className="mb-3" style={{ color: '#003366' }}>
                    <i className="fas fa-money-check-alt me-2"></i>
                    {locale === 'ar' ? 'الإثبات المالي' : 'Financial Proof'}
                  </h4>
                  <ul className="requirements-list germany-requirements">
                    {fees.financial_proof.map((item: string, index: number) => (
                      <li key={index}>
                        <i className="fas fa-wallet me-3 check-cyan"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Additional Costs */}
              {fees.additional && fees.additional.length > 0 && (
                <div className="mb-4">
                  <h4 className="mb-3" style={{ color: '#003366' }}>
                    <i className="fas fa-receipt me-2"></i>
                    {locale === 'ar' ? 'تكاليف إضافية' : 'Additional Costs'}
                  </h4>
                  <ul className="requirements-list germany-requirements">
                    {fees.additional.map((item: string, index: number) => (
                      <li key={index}>
                        <i className="fas fa-plus-circle me-3 file-yellow"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Notes */}
              {fees.notes && fees.notes.length > 0 && (
                <div className="mt-4 pt-4 border-top">
                  <h5 className="mb-3" style={{ color: '#003366' }}>
                    <i className="fas fa-info-circle me-2"></i>
                    {locale === 'ar' ? 'ملاحظات' : 'Notes'}
                  </h5>
                  <ul className="requirements-list germany-requirements">
                    {fees.notes.map((note: string, index: number) => (
                      <li key={index}>
                        <i className="fas fa-exclamation-circle me-3 info-blue"></i>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Tips Section */}
      {tips.length > 0 && (
        <section className="germany-section tips-section">
          <div className="container">
            <div className="germany-section-header">
              <h2 className="germany-section-title">
                <i className="fas fa-lightbulb me-3 info-blue"></i>
                {data?.tips?.title || "Important Tips"}
              </h2>
            </div>
            <div className="germany-glass-card">
              <ul className="requirements-list germany-requirements">
                {tips.map((item: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-tip me-3 check-green"></i>
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
        <section className="germany-section with-kaya-section">
          <div className="container">
            <div className="germany-section-header">
              <h2 className="germany-section-title">
                <i className="fas fa-hands-helping me-3 info-blue"></i>
                {data?.with_kaya?.title || "How Kaya Helps You"}
              </h2>
            </div>
            <div className="germany-glass-card">
              <ul className="services-list germany-services">
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
      <section className="germany-cta">
        <div className="container">
          <div className="professional-journey-banner germany-banner">
            <h2>{data?.cta?.title || (locale === 'ar' ? 'ابدأ مسيرتك الألمانية' : 'Start Your German Career')}</h2>
            <p>
              {data?.cta?.description || (locale === 'ar'
                ? 'تواصل معنا اليوم للحصول على استشارة مجانية'
                : 'Contact us today for a free consultation')}
            </p>
            <div className="cta-buttons germany-buttons">
              <Link href="/contact" className="btn-cta-primary germany-primary">
                <i className="fas fa-envelope me-2"></i>
                {data?.cta?.button_text || (locale === 'ar' ? 'تواصل معنا' : 'Contact Us')}
              </Link>
              <Link href="/work-visas" className="btn-cta-secondary germany-secondary">
                <i className="fas fa-arrow-left me-2"></i>
                {locale === 'ar' ? 'العودة إلى تأشيرات العمل' : 'Back to Work Visas'}
              </Link>
            </div>
            
            <div className="cta-features germany-features">
              <div className="feature-item germany-feature">
                <i className="fas fa-clock"></i>
                <span>{locale === 'ar' ? 'دعم 24/7' : '24/7 Support'}</span>
              </div>
              <div className="feature-item germany-feature">
                <i className="fas fa-shield-alt"></i>
                <span>{locale === 'ar' ? 'ضمان 100%' : '100% Guarantee'}</span>
              </div>
              <div className="feature-item germany-feature">
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