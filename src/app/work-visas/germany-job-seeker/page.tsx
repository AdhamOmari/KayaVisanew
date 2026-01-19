"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import "@/styles/germany-jobseeker.css"; // Import the new CSS file

export default function GermanyJobSeekerPage() {
  const { locale } = useI18n();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const content = require("@/data/work-germany-job-seeker.json");
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
      <div className="germany-jobseeker-page">
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
      <div className="germany-jobseeker-page">
        <div className="container text-center py-5">
          <h2>Error loading content</h2>
        </div>
      </div>
    );
  }

  // Access all data from JSON
  const title = data?.title || "Job Seeker Visa – Germany";
  const subtitle = data?.hero?.subtitle || "";
  const overview = data?.overview;
  const benefits = data?.benefits?.items || [];
  const requirements = data?.requirements?.items || [];
  const process = data?.process?.steps || [];
  const documents = data?.documents?.items || [];
  const uponArrival = data?.upon_arrival?.steps || [];
  const processingTime = data?.processingTime;
  const validity = data?.validity;
  const fees = data?.fees;
  const tips = data?.tips?.items || [];
  const withKaya = data?.withKaya?.items || [];
  const cta = data?.cta;

  return (
    <div className="germany-jobseeker-page" dir={locale === "ar" ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="germany-jobseeker-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge germany-jobseeker-badge">
              <span>{locale === "ar" ? "تأشيرة البحث عن عمل ألمانيا" : "Germany Job Seeker Visa"}</span>
            </div>
            <div className="hero-title">
              <h1 className="hero-title-main germany-jobseeker-main">{title}</h1>
              {subtitle && <p className="hero-title-sub germany-jobseeker-sub">{subtitle}</p>}
            </div>
          </div>
        </div>
        
        {/* Germany Themed Decoration */}
        <div className="germany-jobseeker-decoration">
          <div className="decoration-item">
            <i className="fas fa-search"></i>
          </div>
          <div className="decoration-item">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="decoration-item">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="decoration-item">
            <i className="fas fa-flag"></i>
          </div>
        </div>
      </section>

      {/* Job Search Highlight */}
      <section className="germany-jobseeker-section job-search-highlight-section">
        <div className="container">
          <div className="job-search-highlight">
            <h3>{locale === "ar" ? "فرصة البحث عن عمل في ألمانيا" : "Opportunity to Search for Jobs in Germany"}</h3>
            <p>
              {locale === "ar" 
                ? "ألمانيا تقدم فرص عمل متنوعة في قطاعات الهندسة، تكنولوجيا المعلومات، الرعاية الصحية، والعلوم."
                : "Germany offers diverse job opportunities in engineering, IT, healthcare, and science sectors."}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {overview && (
        <section className="germany-jobseeker-section overview-section">
          <div className="container">
            <div className="germany-jobseeker-section-header">
              <h2 className="germany-jobseeker-section-title">
                <i className="fas fa-info-circle me-3 info-blue"></i>
                {overview.title}
              </h2>
            </div>
            <div className="germany-jobseeker-glass-card">
              <p className="mb-0">{overview.description}</p>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {benefits.length > 0 && (
        <section className="germany-jobseeker-section benefits-section">
          <div className="container">
            <div className="germany-jobseeker-section-header">
              <h2 className="germany-jobseeker-section-title">
                <i className="fas fa-star me-3 info-blue"></i>
                {data?.benefits?.title || "Key Benefits"}
              </h2>
            </div>
            <div className="germany-jobseeker-glass-card">
              <ul className="requirements-list germany-jobseeker-requirements">
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

      {/* Requirements Section */}
      {requirements.length > 0 && (
        <section className="germany-jobseeker-section requirements-section">
          <div className="container">
            <div className="germany-jobseeker-section-header">
              <h2 className="germany-jobseeker-section-title">
                <i className="fas fa-clipboard-check me-3 info-blue"></i>
                {data?.requirements?.title || "Basic Requirements"}
              </h2>
            </div>
            <div className="germany-jobseeker-glass-card">
              <ul className="requirements-list germany-jobseeker-requirements">
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
        <section className="germany-jobseeker-section process-section">
          <div className="container">
            <div className="germany-jobseeker-section-header">
              <h2 className="germany-jobseeker-section-title">
                <i className="fas fa-list-ol me-3 info-blue"></i>
                {data?.process?.title || "Application Steps"}
              </h2>
            </div>
            <div className="process-steps germany-jobseeker-process">
              {process.map((step: any, index: number) => (
                <div key={index} className="process-card germany-jobseeker-card">
                  <div className="step-number germany-jobseeker-step">{index + 1}</div>
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
        <section className="germany-jobseeker-section documents-section">
          <div className="container">
            <div className="germany-jobseeker-section-header">
              <h2 className="germany-jobseeker-section-title">
                <i className="fas fa-file-alt me-3 info-blue"></i>
                {data?.documents?.title || "Required Documents"}
              </h2>
            </div>
            <div className="germany-jobseeker-glass-card">
              <ul className="requirements-list germany-jobseeker-requirements">
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

      {/* Upon Arrival Section */}
      {uponArrival.length > 0 && (
        <section className="germany-jobseeker-section upon-arrival-section">
          <div className="container">
            <div className="germany-jobseeker-section-header">
              <h2 className="germany-jobseeker-section-title">
                <i className="fas fa-plane-arrival me-3 info-blue"></i>
                {data?.upon_arrival?.title || "Upon Arrival in Germany"}
              </h2>
            </div>
            <div className="germany-jobseeker-glass-card">
              <ul className="requirements-list germany-jobseeker-requirements">
                {uponArrival.map((item: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-map-signs me-3 check-cyan"></i>
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
        <section className="germany-jobseeker-section info-grid-section">
          <div className="container">
            <div className="germany-jobseeker-section-header">
              <h2 className="germany-jobseeker-section-title">
                <i className="fas fa-cogs me-3 info-blue"></i>
                {locale === "ar" ? "المعلومات الأساسية" : "Key Information"}
              </h2>
            </div>
            <div className="info-grid germany-jobseeker-info-grid">
              {processingTime && (
                <div className="info-card germany-jobseeker-info">
                  <div className="icon-circle germany-jobseeker-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <h4>{processingTime.title || "Processing Time"}</h4>
                  <p>{processingTime.duration}</p>
                </div>
              )}
              {validity && (
                <div className="info-card germany-jobseeker-info">
                  <div className="icon-circle germany-jobseeker-icon">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <h4>{validity.title || "Visa Validity"}</h4>
                  <p>{validity.duration}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Fees Section */}
      {fees && (
        <section className="germany-jobseeker-section fees-section">
          <div className="container">
            <div className="germany-jobseeker-section-header">
              <h2 className="germany-jobseeker-section-title">
                <i className="fas fa-dollar-sign me-3 info-blue"></i>
                {fees.title || "Official Fees and Costs"}
              </h2>
            </div>
            <div className="germany-jobseeker-glass-card">
              <ul className="requirements-list germany-jobseeker-requirements">
                {fees.items && fees.items.map((item: string, index: number) => (
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

      {/* Tips Section */}
      {tips.length > 0 && (
        <section className="germany-jobseeker-section tips-section">
          <div className="container">
            <div className="germany-jobseeker-section-header">
              <h2 className="germany-jobseeker-section-title">
                <i className="fas fa-lightbulb me-3 info-blue"></i>
                {data?.tips?.title || "Important Tips"}
              </h2>
            </div>
            <div className="germany-jobseeker-glass-card">
              <ul className="requirements-list germany-jobseeker-requirements">
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
        <section className="germany-jobseeker-section with-kaya-section">
          <div className="container">
            <div className="germany-jobseeker-section-header">
              <h2 className="germany-jobseeker-section-title">
                <i className="fas fa-hands-helping me-3 info-blue"></i>
                {data?.withKaya?.title || "How Kaya Helps You"}
              </h2>
            </div>
            <div className="germany-jobseeker-glass-card">
              <ul className="services-list germany-jobseeker-services">
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
      <section className="germany-jobseeker-cta">
        <div className="container">
          <div className="professional-journey-banner germany-jobseeker-banner">
            <h2>{cta?.title || (locale === 'ar' ? 'ابدأ مسيرتك الألمانية' : 'Start Your German Career')}</h2>
            <p>
              {cta?.description || (locale === 'ar'
                ? 'تواصل معنا اليوم للحصول على استشارة مجانية'
                : 'Contact us today for a free consultation')}
            </p>
            <div className="cta-buttons germany-jobseeker-buttons">
              <Link href="/contact" className="btn-cta-primary germany-jobseeker-primary">
                <i className="fas fa-envelope me-2"></i>
                {cta?.button_text || (locale === 'ar' ? 'تواصل معنا' : 'Contact Us')}
              </Link>
              <Link href="/work-visas" className="btn-cta-secondary germany-jobseeker-secondary">
                <i className="fas fa-arrow-left me-2"></i>
                {locale === 'ar' ? 'العودة إلى تأشيرات العمل' : 'Back to Work Visas'}
              </Link>
            </div>
            
            <div className="cta-features germany-jobseeker-features">
              <div className="feature-item germany-jobseeker-feature">
                <i className="fas fa-clock"></i>
                <span>{locale === 'ar' ? 'دعم 24/7' : '24/7 Support'}</span>
              </div>
              <div className="feature-item germany-jobseeker-feature">
                <i className="fas fa-shield-alt"></i>
                <span>{locale === 'ar' ? 'ضمان 100%' : '100% Guarantee'}</span>
              </div>
              <div className="feature-item germany-jobseeker-feature">
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