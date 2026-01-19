"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import "@/styles/uae-points.css";

export default function USAH1BPage() {
  const { locale } = useI18n();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const content = require("@/data/work-usa-h1b.json");
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
              <span>{locale === "ar" ? "تأشيرة العمل H‑1B – الولايات المتحدة" : "H-1B Work Visa – United States"}</span>
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
          <div className="decoration-item"><i className="fas fa-briefcase"></i></div>
          <div className="decoration-item"><i className="fas fa-passport"></i></div>
          <div className="decoration-item"><i className="fas fa-graduation-cap"></i></div>
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
              <p className="mb-4">{data.overview.description}</p>
              {data.overview.quote && (
                <div className="points-highlight uae-highlight mt-4">
                  <p className="mb-0 fst-italic fs-5">{data.overview.quote}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Key Information Section */}
      {data?.key_info && (
        <section className="uae-section key-info-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-info-circle me-3 info-blue"></i> {locale === 'ar' ? 'المعلومات الأساسية' : 'Key Information'}
              </h2>
            </div>
            <div className="info-grid uae-info-grid">
              {data.key_info.duration && (
                <div className="info-card uae-info">
                  <div className="icon-circle uae-icon">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <h4>{locale === 'ar' ? 'المدة' : 'Duration'}</h4>
                  <p>{data.key_info.duration}</p>
                </div>
              )}
              {data.key_info.green_card && (
                <div className="info-card uae-info">
                  <div className="icon-circle uae-icon">
                    <i className="fas fa-id-card"></i>
                  </div>
                  <h4>{locale === 'ar' ? 'البطاقة الخضراء' : 'Green Card'}</h4>
                  <p>{data.key_info.green_card}</p>
                </div>
              )}
              {data.key_info.family && (
                <div className="info-card uae-info">
                  <div className="icon-circle uae-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <h4>{locale === 'ar' ? 'العائلة' : 'Family'}</h4>
                  <p>{data.key_info.family}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Green Card Information Section */}
      {data?.green_card && (
        <section className="uae-section green-card-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-id-card me-3 check-green"></i> {data.green_card.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <p className="mb-4">{data.green_card.description}</p>
              
              {/* Green Card Rights */}
              {data.green_card.rights && data.green_card.rights.length > 0 && (
                <div className="mb-4">
                  <h4 className="mb-3">{locale === 'ar' ? 'تمنح صاحبها الحق في:' : 'Grants the holder the right to:'}</h4>
                  <ul className="requirements-list uae-requirements">
                    {data.green_card.rights.map((right: string, index: number) => (
                      <li key={index}>
                        <i className="fas fa-check me-3 check-green"></i>
                        <span>{right}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Green Card Validity */}
              {data.green_card.validity && (
                <div className="mb-4">
                  <h4 className="mb-3">{locale === 'ar' ? 'مدة الصلاحية' : 'Validity Period'}</h4>
                  <p>{data.green_card.validity}</p>
                </div>
              )}

              {/* Green Card Methods */}
              {data.green_card.methods && data.green_card.methods.length > 0 && (
                <div className="mb-4">
                  <h4 className="mb-3">{locale === 'ar' ? 'طرق الحصول على البطاقة الخضراء' : 'Ways to Obtain a Green Card'}</h4>
                  <div className="process-steps uae-process">
                    {data.green_card.methods.map((method: any, index: number) => (
                      <div key={index} className="process-card uae-card">
                        <h3><i className="fas fa-route me-2 info-blue"></i> {method.method}</h3>
                        <p>{method.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Green Card Rights & Obligations */}
              {data.green_card.rights_obligations && (
                <div className="mt-4">
                  <h4 className="mb-3">{data.green_card.rights_obligations.title}</h4>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="process-card uae-card h-100">
                        <h3><i className="fas fa-check-circle me-2 check-green"></i> {locale === 'ar' ? 'الحقوق' : 'Rights'}</h3>
                        <ul className="requirements-list uae-requirements">
                          {data.green_card.rights_obligations.rights.map((right: string, index: number) => (
                            <li key={index}>
                              <i className="fas fa-check me-3 check-green"></i>
                              <span>{right}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="process-card uae-card h-100">
                        <h3><i className="fas fa-exclamation-circle me-2 info-blue"></i> {locale === 'ar' ? 'الواجبات' : 'Obligations'}</h3>
                        <ul className="requirements-list uae-requirements">
                          {data.green_card.rights_obligations.obligations.map((obligation: string, index: number) => (
                            <li key={index}>
                              <i className="fas fa-exclamation me-3 info-blue"></i>
                              <span>{obligation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
                <h4 className="mb-3">{locale === 'ar' ? 'العدد السنوي:' : 'Annual Quota:'}</h4>
                <ul className="requirements-list uae-requirements mb-0">
                  <li>
                    <i className="fas fa-hashtag me-3 info-blue"></i>
                    <span><strong>{data.quota.base_quota}</strong></span>
                  </li>
                  <li>
                    <i className="fas fa-graduation-cap me-3 check-green"></i>
                    <span><strong>{data.quota.additional_quota}</strong></span>
                  </li>
                </ul>
              </div>
              <p className="mb-0">{data.quota.selection_process}</p>
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
                <i className="fas fa-users me-3 info-blue"></i> {data.beneficiaries.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              {/* Beneficiary Categories */}
              {data.beneficiaries.categories && data.beneficiaries.categories.length > 0 && (
                <div className="mb-4">
                  <div className="process-steps uae-process">
                    {data.beneficiaries.categories.map((category: any, index: number) => (
                      <div key={index} className="process-card uae-card">
                        <h3><i className="fas fa-user-check me-2 check-green"></i> {category.category}</h3>
                        <p>{category.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Important Notes */}
              {data.beneficiaries.notes && data.beneficiaries.notes.length > 0 && (
                <div className="mt-4 pt-4 border-top">
                  <h4 className="mb-3">{locale === 'ar' ? 'ملاحظات مهمة:' : 'Important Notes:'}</h4>
                  <ul className="requirements-list uae-requirements">
                    {data.beneficiaries.notes.map((note: string, index: number) => (
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

      {/* Employer Conditions Section */}
      {data?.employer_conditions?.list && data.employer_conditions.list.length > 0 && (
        <section className="uae-section employer-conditions-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-building me-3 info-blue"></i> {data.employer_conditions.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <ul className="requirements-list uae-requirements">
                {data.employer_conditions.list.map((item: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-check-circle me-3 check-cyan"></i>
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
              {/* Fees Breakdown */}
              {data.fees.breakdown && data.fees.breakdown.length > 0 && (
                <div className="mb-4">
                  <ul className="requirements-list uae-requirements">
                    {data.fees.breakdown.map((fee: any, index: number) => (
                      <li key={index}>
                        <i className="fas fa-money-bill-wave me-3 money-green"></i>
                        <div>
                          <strong>{fee.item}:</strong> {fee.amount}
                          {fee.note && <span className="d-block text-muted small mt-1">{fee.note}</span>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Fee Note */}
              {data.fees.note && (
                <div className="points-highlight uae-highlight">
                  <p className="mb-0">{data.fees.note}</p>
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
                <i className="fas fa-cogs me-3 info-blue"></i> {locale === 'ar' ? 'التفاصيل التقنية' : 'Technical Details'}
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
      {data?.additional_notes?.list && data.additional_notes.list.length > 0 && (
        <section className="uae-section additional-notes-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-sticky-note me-3 star-yellow"></i> {data.additional_notes.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <ul className="requirements-list uae-requirements">
                {data.additional_notes.list.map((item: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-info-circle me-3 info-blue"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
              {data.with_kaya.description && (
                <div className="points-highlight uae-highlight mb-4">
                  <p className="mb-0">{data.with_kaya.description}</p>
                </div>
              )}
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
            <h2>{data?.cta?.title || (locale === 'ar' ? 'ابدأ حلمك الأميركي اليوم' : 'Start Your American Dream Today')}</h2>
            <p>
              {data?.cta?.description || (locale === 'ar' 
                ? 'تأشيرة H‑1B هي بوابة لمستقبل مهني مشرق في الولايات المتحدة. ابدأ الآن رحلتك مع كايا — نحن نجهّز لك كل ما تحتاجه للحصول على التأشيرة بنجاح.'
                : 'The H-1B visa is a gateway to a bright professional future in the United States. Start your journey now with Kaya — we prepare everything you need to successfully obtain the visa.')}
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