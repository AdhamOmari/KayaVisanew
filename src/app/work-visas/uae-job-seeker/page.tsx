"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import "@/styles/uae-points.css";

export default function UAEJobSeekerPage() {
  const { locale } = useI18n();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const content = require("@/data/work-uae-job-seeker.json");
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
              <span>{locale === "ar" ? "إقامة عمل حرة – الإمارات" : "Freelance/Independent Work Residence – UAE"}</span>
            </div>
            <div className="hero-title">
              <h1 className="hero-title-main uae-main">{data?.title}</h1>
              {data?.hero?.subtitle && <p className="hero-title-sub uae-sub">{data.hero.subtitle}</p>}
            </div>
          </div>
        </div>
        <div className="uae-decoration">
          <div className="decoration-item"><i className="fas fa-building"></i></div>
          <div className="decoration-item"><i className="fas fa-search"></i></div>
          <div className="decoration-item"><i className="fas fa-passport"></i></div>
          <div className="decoration-item"><i className="fas fa-briefcase"></i></div>
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

      {/* Target Categories Section */}
      {data?.target_categories?.list && data.target_categories.list.length > 0 && (
        <section className="uae-section target-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-users me-3 info-blue"></i> {data.target_categories.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <ul className="requirements-list uae-requirements">
                {data.target_categories.list.map((item: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-user-check me-3 check-cyan"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Fees Section */}
      {data?.fees_section && (
        <section className="uae-section fees-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-dollar-sign me-3 info-blue"></i> {data.fees_section.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <div className="points-highlight uae-highlight">
                <h3>{data.fees_section.description}</h3>
                <p>{data.fees_section.amount}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Responsible Authorities Section */}
      {data?.responsible_authorities?.list && data.responsible_authorities.list.length > 0 && (
        <section className="uae-section authorities-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-landmark me-3 info-blue"></i> {data.responsible_authorities.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <ul className="requirements-list uae-requirements">
                {data.responsible_authorities.list.map((authority: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-building me-3 info-blue"></i>
                    <span>{authority}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Practical Advantages Section */}
      {data?.practical_advantages?.list && data.practical_advantages.list.length > 0 && (
        <section className="uae-section practical-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-bolt me-3 star-yellow"></i> {data.practical_advantages.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <ul className="requirements-list uae-requirements">
                {data.practical_advantages.list.map((item: string, index: number) => (
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

      {/* Difference Section */}
      {data?.difference && (
        <section className="uae-section difference-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-exchange-alt me-3 info-blue"></i> {data.difference.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="process-card uae-card h-100">
                    <h3><i className="fas fa-building me-2 info-blue"></i> {locale === 'ar' ? 'التقليدية' : 'Traditional'}</h3>
                    <p>{data.difference.traditional}</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="process-card uae-card h-100">
                    <h3><i className="fas fa-user-tie me-2 check-green"></i> {locale === 'ar' ? 'الحرة' : 'Independent'}</h3>
                    <p>{data.difference.independent}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Requirements Section */}
      {data?.requirements?.list && data.requirements.list.length > 0 && (
        <section className="uae-section requirements-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-clipboard-check me-3 info-blue"></i>
                {data.requirements.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <ul className="requirements-list uae-requirements">
                {data.requirements.list.map((item: string, index: number) => (
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

      {/* Upon Arrival Section */}
      {data?.upon_arrival?.steps && data.upon_arrival.steps.length > 0 && (
        <section className="uae-section arrival-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-plane-arrival me-3 info-blue"></i> {data.upon_arrival.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <ul className="requirements-list uae-requirements">
                {data.upon_arrival.steps.map((item: string, index: number) => (
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

      {/* Processing Time & Validity Grid */}
      {(data.processingTime || data.validity) && (
        <section className="uae-section info-grid-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-info-circle me-3 info-blue"></i> {locale === 'ar' ? 'معلومات إضافية' : 'Additional Information'}
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
                  <h4>{locale === 'ar' ? 'مدة الإقامة' : 'Residence Validity'}</h4>
                  <p>{data.validity}</p>
                </div>
              )}
              {data.fees?.amount && (
                <div className="info-card uae-info">
                  <div className="icon-circle uae-icon">
                    <i className="fas fa-dollar-sign"></i>
                  </div>
                  <h4>{locale === 'ar' ? 'الرسوم الإضافية' : 'Additional Fees'}</h4>
                  <p>{data.fees.amount}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Tips Section */}
      {data?.tips?.list && data.tips.list.length > 0 && (
        <section className="uae-section tips-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-lightbulb me-3 star-yellow"></i> {data.tips.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <ul className="requirements-list uae-requirements">
                {data.tips.list.map((item: string, index: number) => (
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
      {data?.with_kaya?.services && data.with_kaya.services.length > 0 && (
        <section className="uae-section with-kaya-section">
          <div className="container">
            <div className="uae-section-header">
              <h2 className="uae-section-title">
                <i className="fas fa-hands-helping me-3 info-blue"></i> {data.with_kaya.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <ul className="services-list uae-services">
                {data.with_kaya.services.map((service: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-check-circle"></i>
                    <span>{service}</span>
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
                <i className="fas fa-file-contract me-3 info-blue"></i> {data.summary.title}
              </h2>
            </div>
            <div className="uae-glass-card">
              <p className="mb-0 fs-5">{data.summary.description}</p>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="uae-cta">
        <div className="container">
          <div className="professional-journey-banner uae-banner">
            <h2>{data?.cta?.title || (locale === 'ar' ? 'ابدأ مسيرتك في الإمارات' : 'Start Your UAE Career')}</h2>
            <p>
              {data?.cta?.description || (locale === 'ar' 
                ? 'الإقامة الحرة في الإمارات هي فرصة مثالية للباحثين عن عمل أو أصحاب المهارات المستقلة. ابدأ الآن رحلتك المهنية في الإمارات مع كايا — نحن نجهّز لك كل ما تحتاجه لتصل إلى سوق العمل بثقة.'
                : 'Independent Residence in the UAE is an ideal opportunity for job seekers or specialized skilled professionals. Start your professional journey in the UAE now with Kaya — we prepare everything you need to confidently enter the job market.')}
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
                <span>{locale === 'ar' ? 'دعم الخبراء' : 'Expert Support'}</span>
              </div>
              <div className="feature-item uae-feature">
                <i className="fas fa-check-circle"></i>
                <span>{locale === 'ar' ? 'معالجة سريعة' : 'Fast Processing'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}