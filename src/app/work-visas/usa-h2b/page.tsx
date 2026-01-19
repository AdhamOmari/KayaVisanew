"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import "@/styles/uae-points.css";

export default function USAH2BPage() {
  const { locale } = useI18n();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const content = require("@/data/work-usa-h2b.json");
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
      <div className="uae-points-page">
        <div className="container text-center py-5">
          <div className="spinner-border uae-spinner" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="uae-points-page">
        <div className="container text-center py-5">
          <h2>Error loading content</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="uae-points-page" dir={locale === "ar" ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="uae-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge uae-badge">
              <span>{locale === "ar" ? "تأشيرة العمل H‑2B – الولايات المتحدة" : "H-2B Work Visa – United States"}</span>
            </div>
            <div className="hero-title">
              <h1 className="hero-title-main uae-main">{data?.title}</h1>
              {data?.hero?.subtitle && <p className="hero-title-sub uae-sub">{data.hero.subtitle}</p>}
            </div>
          </div>
        </div>
        {/* USA Decoration */}
        <div className="uae-decoration">
          <div className="decoration-item"><i className="fas fa-flag-usa"></i></div>
          <div className="decoration-item"><i className="fas fa-hammer"></i></div>
          <div className="decoration-item"><i className="fas fa-concierge-bell"></i></div>
          <div className="decoration-item"><i className="fas fa-hard-hat"></i></div>
        </div>
      </section>

      {/* Overview Section */}
      {data?.overview && (
        <section className="uae-section overview-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-info-circle me-3 info-blue"></i>
                {data.overview.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <p className="mb-0">{data.overview.description}</p>
            </div>
          </div>
        </section>
      )}

      {/* Duration & Validity Section */}
      {data?.duration_validity && (
        <section className="uae-section duration-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-calendar-alt me-3 info-blue"></i> {data.duration_validity.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <ul className="requirements-list uae-requirements">
                {data.duration_validity.items.map((item: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-clock me-3 check-green"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Family & Accompanying Section */}
      {data?.family_accompanying && (
        <section className="uae-section family-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-users me-3 info-blue"></i> {data.family_accompanying.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <div className="points-highlight uae-highlight">
                <p className="mb-0">{data.family_accompanying.description}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {data?.benefits?.list && data.benefits.list.length > 0 && (
        <section className="uae-section benefits-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-star me-3 star-yellow"></i> {data.benefits.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <ul className="requirements-list uae-requirements">
                {data.benefits.list.map((item: string, index: number) => (
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

      {/* Beneficiaries Section */}
      {data?.beneficiaries && (
        <section className="uae-section beneficiaries-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-user-check me-3 info-blue"></i> {data.beneficiaries.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <p className="mb-3">{data.beneficiaries.description}</p>
              <ul className="requirements-list uae-requirements">
                {data.beneficiaries.sectors.map((sector: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-building me-3 info-blue"></i>
                    <span>{sector}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {data?.process?.steps && data.process.steps.length > 0 && (
        <section className="uae-section process-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-list-ol me-3 info-blue"></i> {data.process.title}
              </h2>
            </div>
            <div className="process-steps uae-process">
              {data.process.steps.map((step: any, index: number) => (
                <div key={index} className="process-card uae-card">
                  <div className="step-number uae-step">{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Documents Section */}
      {data?.documents?.list && data.documents.list.length > 0 && (
        <section className="uae-section documents-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-file-alt me-3 info-blue"></i> {data.documents.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <ul className="requirements-list uae-requirements">
                {data.documents.list.map((item: string, index: number) => (
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

      {/* Fees Section */}
      {data?.fees && (
        <section className="uae-section fees-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-dollar-sign me-3 info-blue"></i> {data.fees.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              {data.fees.breakdown && data.fees.breakdown.length > 0 && (
                <div className="mb-4">
                  <ul className="requirements-list uae-requirements">
                    {data.fees.breakdown.map((fee: any, index: number) => (
                      <li key={index}>
                        <i className="fas fa-money-bill-wave me-3 money-green"></i>
                        <div>
                          <strong>{fee.item}:</strong> {fee.amount}
                          {fee.paid_by && <span className="d-block text-muted small mt-1">({locale === 'ar' ? 'يدفعها' : 'paid by'}: {fee.paid_by})</span>}
                          {fee.description && <span className="d-block text-muted small mt-1">{fee.description}</span>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {data.fees.note && (
                <div className="points-highlight uae-highlight">
                  <p className="mb-0">{data.fees.note}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Quota Section */}
      {data?.quota && (
        <section className="uae-section quota-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-chart-bar me-3 info-blue"></i> {data.quota.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <div className="points-highlight uae-highlight mb-4">
                <h4 className="mb-3">{locale === 'ar' ? 'التوزيع السنوي:' : 'Annual Distribution:'}</h4>
                <ul className="requirements-list uae-requirements mb-0">
                  {data.quota.annual_cap && (
                    <li>
                      <i className="fas fa-hashtag me-3 info-blue"></i>
                      <span><strong>{data.quota.annual_cap}</strong></span>
                    </li>
                  )}
                  {data.quota.allocation && data.quota.allocation.map((alloc: any, index: number) => (
                    <li key={index}>
                      <i className="fas fa-calendar me-3 check-green"></i>
                      <span>{alloc.period}: <strong>{alloc.amount}</strong></span>
                    </li>
                  ))}
                </ul>
              </div>
              {data.quota.notes && data.quota.notes.length > 0 && (
                <div className="mt-4">
                  <h4 className="mb-3">{locale === 'ar' ? 'ملاحظات هامة:' : 'Important Notes:'}</h4>
                  <ul className="requirements-list uae-requirements">
                    {data.quota.notes.map((note: string, index: number) => (
                      <li key={index}>
                        <i className="fas fa-info-circle me-3 info-blue"></i>
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

      {/* Processing Time & Validity Grid */}
      {(data.processingTime || data.validity) && (
        <section className="uae-section info-grid-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-cogs me-3 info-blue"></i> {locale === 'ar' ? 'المعلومات التقنية' : 'Technical Information'}
              </h2>
            </div>
            <div className="info-grid uae-info-grid">
              {data.processingTime && (
                <div className="info-card uae-info">
                  <div className="icon-circle uae-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <h4>{locale === 'ar' ? 'وقت المعالجة' : 'Processing Time'}</h4>
                  <p>{data.processingTime}</p>
                </div>
              )}
              {data.validity && (
                <div className="info-card uae-info">
                  <div className="icon-circle uae-icon">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <h4>{locale === 'ar' ? 'مدة الصلاحية' : 'Validity Period'}</h4>
                  <p>{data.validity}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Additional Notes Section */}
      {data?.additional_notes?.points && data.additional_notes.points.length > 0 && (
        <section className="uae-section additional-notes-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-sticky-note me-3 info-blue"></i> {data.additional_notes.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <ul className="requirements-list uae-requirements">
                {data.additional_notes.points.map((point: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-info-circle me-3 info-blue"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Summary Section */}
      {data?.summary && (
        <section className="uae-section summary-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-file-contract me-3 check-green"></i> {data.summary.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <div className="points-highlight uae-highlight">
                <p className="mb-0 fs-5">{data.summary.description}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* With Kaya Section */}
      {data?.with_kaya && (
        <section className="uae-section with-kaya-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-hands-helping me-3 info-blue"></i> {data.with_kaya.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              {data.with_kaya.services && data.with_kaya.services.length > 0 && (
                <ul className="services-list uae-services">
                  {data.with_kaya.services.map((service: string, index: number) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="uae-cta">
        <div className="container">
          <div className="professional-journey-banner uae-banner">
            <h2>{data?.cta?.title || (locale === 'ar' ? 'ابدأ تجربتك العملية الأميركية اليوم' : 'Start Your American Work Experience Today')}</h2>
            <p>
              {data?.cta?.description || (locale === 'ar' 
                ? 'تأشيرة H‑2B هي فرصة مثالية للعمالة الأجنبية المؤقتة لدخول سوق العمل الأميركي في القطاعات غير الزراعية. لكنها محدودة العدد (66,000 سنوياً) وتتطلب راعياً أميركياً وإجراءات دقيقة مع وزارة العمل وUSCIS. ابدأ رحلتك المهنية اليوم مع كايا — نفتح لك أبواب العالم بخطوة واحدة!'
                : 'The H-2B visa is an ideal opportunity for temporary foreign workers to enter the US labor market in non-agricultural sectors. However, it is quota-limited (66,000 annually) and requires a US sponsor and precise procedures with the DOL and USCIS. Start your professional journey today with Kaya — we open the doors of the world for you with one step!')}
            </p>
            <div className="cta-buttons uae-buttons">
              <Link href="/contact" className="btn-cta-primary uae-primary">
                <i className="fas fa-envelope"></i>
                {data?.cta?.button_text || (locale === 'ar' ? 'تواصل معنا' : 'Contact Us')}
              </Link>
              <Link href="/work-visas" className="btn-cta-secondary uae-secondary">
                <i className="fas fa-arrow-left"></i>
                {locale === 'ar' ? 'العودة إلى تأشيرات العمل' : 'Back to Work Visas'}
              </Link>
            </div>
            <div className="cta-features uae-features">
              <div className="feature-item uae-feature">
                <i className="fas fa-check-circle"></i>
                <span>{locale === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}</span>
              </div>
              <div className="feature-item uae-feature">
                <i className="fas fa-check-circle"></i>
                <span>{locale === 'ar' ? 'خبراء الهجرة' : 'Immigration Experts'}</span>
              </div>
              <div className="feature-item uae-feature">
                <i className="fas fa-check-circle"></i>
                <span>{locale === 'ar' ? 'نسبة نجاح عالية' : 'High Success Rate'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}