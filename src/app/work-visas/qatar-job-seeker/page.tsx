"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import "@/styles/qatar-points.css"; // Changed to Qatar CSS file

export default function QatarFreelancePage() {
  const { locale } = useI18n();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const content = require("@/data/work-qatar-freelance.json");
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
      <div className="qatar-points-page">
        <div className="container text-center py-5">
          <div className="spinner-border qatar-spinner" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="qatar-points-page">
        <div className="container text-center py-5">
          <h2>Error loading content</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="qatar-points-page" dir={locale === "ar" ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="qatar-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge qatar-badge">
              <span>{locale === "ar" ? "إقامة عمل حرة – قطر" : "Freelance/Independent Work Residence – Qatar"}</span>
            </div>
            <div className="hero-title">
              <h1 className="hero-title-main qatar-main">{data?.title}</h1>
              {data?.hero?.subtitle && <p className="hero-title-sub qatar-sub">{data.hero.subtitle}</p>}
            </div>
          </div>
        </div>
        {/* Qatar Decoration */}
        <div className="qatar-decoration">
          <div className="decoration-item"><i className="fas fa-user-tie"></i></div>
          <div className="decoration-item"><i className="fas fa-briefcase"></i></div>
          <div className="decoration-item"><i className="fas fa-chart-line"></i></div>
          <div className="decoration-item"><i className="fas fa-building"></i></div>
        </div>
      </section>

      {/* Qatar Economy Highlight */}
      <section className="qatar-section economy-section">
        <div className="container">
          <div className="qatar-highlight-card">
            <h3>{locale === "ar" ? "اقتصاد قطر سريع النمو" : "Qatar's Fast-Growing Economy"}</h3>
            <p>
              {locale === "ar" 
                ? "قطر هي واحدة من أسرع الاقتصادات نمواً في المنطقة، خاصة في قطاعات الطاقة، الخدمات اللوجستية، البنية التحتية، والتعليم."
                : "Qatar is one of the fastest-growing economies in the region, particularly in energy, logistics, infrastructure, and education sectors."}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {data?.overview && (
        <section className="qatar-section overview-section">
          <div className="container">
            <div className="qatar-section-header">
              <h2 className="qatar-section-title">
                <i className="fas fa-info-circle me-3 info-blue"></i>
                {data.overview.title}
              </h2>
            </div>
            <div className="qatar-glass-card">
              <p className="mb-0">{data.overview.description}</p>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {data?.benefits?.items && data.benefits.items.length > 0 && (
        <section className="qatar-section benefits-section">
          <div className="container">
            <div className="qatar-section-header">
              <h2 className="qatar-section-title">
                <i className="fas fa-star me-3 star-yellow"></i> {data.benefits.title}
              </h2>
            </div>
            <div className="qatar-glass-card">
              <ul className="requirements-list qatar-requirements">
                {data.benefits.items.map((item: string, index: number) => (
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
      {data?.target_categories?.items && data.target_categories.items.length > 0 && (
        <section className="qatar-section target-section">
          <div className="container">
            <div className="qatar-section-header">
              <h2 className="qatar-section-title">
                <i className="fas fa-users me-3 info-blue"></i> {data.target_categories.title}
              </h2>
            </div>
            <div className="qatar-glass-card">
              <ul className="requirements-list qatar-requirements">
                {data.target_categories.items.map((item: string, index: number) => (
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
      {data?.fees && (
        <section className="qatar-section fees-section">
          <div className="container">
            <div className="qatar-section-header">
              <h2 className="qatar-section-title">
                <i className="fas fa-dollar-sign me-3 info-blue"></i> {locale === 'ar' ? 'الرسوم' : 'Fees'}
              </h2>
            </div>
            <div className="qatar-glass-card">
              <div className="fee-highlight">
                <h3>{locale === 'ar' ? 'تفاصيل الرسوم:' : 'Fee Details:'}</h3>
                <p>{locale === 'ar' ? 'تختلف حسب الفئة والخدمات الإضافية، وغالبًا تتراوح بين 600 – 2,000 ريال قطري وتشمل الطلب، الفحص الطبي، والبطاقة الشخصية (QID).' : 'Varies depending on category and additional services, usually ranges between QAR 600 - 2,000 Qatari Riyals including application, medical test, and ID card (QID).'}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Responsible Authorities */}
      {data?.fees?.responsible_authorities && data.fees.responsible_authorities.length > 0 && (
        <section className="qatar-section authorities-section">
          <div className="container">
            <div className="qatar-section-header">
              <h2 className="qatar-section-title">
                <i className="fas fa-landmark me-3 info-blue"></i> {locale === 'ar' ? 'الجهات المسؤولة' : 'Responsible Authorities'}
              </h2>
            </div>
            <div className="qatar-glass-card">
              <ul className="requirements-list qatar-requirements">
                {data.fees.responsible_authorities.map((authority: string, index: number) => (
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

      {/* Practical Advantages */}
      <section className="qatar-section practical-section">
        <div className="container">
          <div className="qatar-section-header">
            <h2 className="qatar-section-title">
              <i className="fas fa-bolt me-3 star-yellow"></i> {locale === 'ar' ? 'المزايا العملية' : 'Practical Advantages'}
            </h2>
          </div>
          <div className="qatar-glass-card">
            <ul className="requirements-list qatar-requirements">
              <li>
                <i className="fas fa-check-circle me-3 check-green"></i>
                <span>{locale === 'ar' ? 'حرية البحث عن وظيفة أثناء فترة الإقامة دون الحاجة لمغادرة الدولة' : 'Freedom to search for job during residency period without needing to leave the country'}</span>
              </li>
              <li>
                <i className="fas fa-check-circle me-3 check-green"></i>
                <span>{locale === 'ar' ? 'مرونة في الانتقال من الإقامة الحرة إلى إقامة عمل مرتبطة بشركة' : 'Flexibility to transition from independent residency to company-sponsored residency'}</span>
              </li>
              <li>
                <i className="fas fa-check-circle me-3 check-green"></i>
                <span>{locale === 'ar' ? 'إمكانية تأسيس عمل حر أو مشروع صغير خلال فترة الإقامة' : 'Possibility of establishing freelance work or small business during residency period'}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      {data?.difference && (
        <section className="qatar-section difference-section">
          <div className="container">
            <div className="qatar-section-header">
              <h2 className="qatar-section-title">
                <i className="fas fa-exchange-alt me-3 info-blue"></i> {data.difference.title}
              </h2>
            </div>
            <div className="qatar-glass-card">
              <div className="comparison-grid">
                <div className="comparison-card traditional-card">
                  <h4><i className="fas fa-building me-2 info-blue"></i> {locale === 'ar' ? 'التقليدية' : 'Traditional'}</h4>
                  <p>{data.difference.traditional}</p>
                </div>
                <div className="vs-text">
                  <span>VS</span>
                </div>
                <div className="comparison-card independent-card">
                  <h4><i className="fas fa-user-tie me-2 check-green"></i> {locale === 'ar' ? 'الحرة' : 'Independent'}</h4>
                  <p>{data.difference.independent}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Requirements Section */}
      {data?.requirements?.items && data.requirements.items.length > 0 && (
        <section className="qatar-section requirements-section">
          <div className="container">
            <div className="qatar-section-header">
              <h2 className="qatar-section-title">
                <i className="fas fa-clipboard-check me-3 info-blue"></i>
                {data.requirements.title}
              </h2>
            </div>
            <div className="qatar-glass-card">
              <ul className="requirements-list qatar-requirements">
                {data.requirements.items.map((item: string, index: number) => (
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
      {data?.documents?.items && data.documents.items.length > 0 && (
        <section className="qatar-section documents-section">
          <div className="container">
            <div className="qatar-section-header">
              <h2 className="qatar-section-title">
                <i className="fas fa-file-alt me-3 info-blue"></i> {data.documents.title}
              </h2>
            </div>
            <div className="qatar-glass-card">
              <ul className="requirements-list qatar-requirements">
                {data.documents.items.map((item: string, index: number) => (
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
        <section className="qatar-section process-section">
          <div className="container">
            <div className="qatar-section-header">
              <h2 className="qatar-section-title">
                <i className="fas fa-list-ol me-3 info-blue"></i> {data.process.title}
              </h2>
            </div>
            <div className="process-steps qatar-process">
              {data.process.steps.map((step: any, index: number) => (
                <div key={index} className="process-card qatar-card">
                  <div className="step-number qatar-step">{index + 1}</div>
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
        <section className="qatar-section arrival-section">
          <div className="container">
            <div className="qatar-section-header">
              <h2 className="qatar-section-title">
                <i className="fas fa-plane-arrival me-3 info-blue"></i> {data.upon_arrival.title}
              </h2>
            </div>
            <div className="qatar-glass-card">
              <ul className="requirements-list qatar-requirements">
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
        <section className="qatar-section info-grid-section">
          <div className="container">
            <div className="qatar-section-header">
              <h2 className="qatar-section-title">
                <i className="fas fa-cogs me-3 info-blue"></i> {locale === 'ar' ? 'المعلومات الأساسية' : 'Key Information'}
              </h2>
            </div>
            <div className="info-grid qatar-info-grid">
              {data.processingTime && (
                <div className="info-card qatar-info">
                  <div className="icon-circle qatar-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <h4>{data.processingTime.title || (locale === 'ar' ? 'وقت المعالجة' : 'Processing Time')}</h4>
                  <p>{data.processingTime.duration}</p>
                </div>
              )}
              {data.validity && (
                <div className="info-card qatar-info">
                  <div className="icon-circle qatar-icon">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <h4>{data.validity.title || (locale === 'ar' ? 'مدة الإقامة' : 'Residence Validity')}</h4>
                  <p>{data.validity.duration}</p>
                </div>
              )}
              <div className="info-card qatar-info">
                <div className="icon-circle qatar-icon">
                  <i className="fas fa-redo-alt"></i>
                </div>
                <h4>{locale === 'ar' ? 'التجديد والتحويل' : 'Renewal & Conversion'}</h4>
                <p>{locale === 'ar' ? 'سنتان قابلة للتجديد، مع إمكانية التحويل لاحقًا إلى إقامة عمل مرتبطة بعقد رسمي' : 'Two years renewable, with possibility of later conversion to employment residency linked to formal contract'}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Fees Details Section */}
      {data?.fees?.items && data.fees.items.length > 0 && (
        <section className="qatar-section fees-details-section">
          <div className="container">
            <div className="qatar-section-header">
              <h2 className="qatar-section-title">
                <i className="fas fa-money-bill-wave me-3 money-green"></i> {locale === 'ar' ? 'تفصيل التكاليف' : 'Cost Details'}
              </h2>
            </div>
            <div className="qatar-glass-card">
              <ul className="requirements-list qatar-requirements">
                {data.fees.items.map((item: string, index: number) => (
                  <li key={index}>
                    <i className="fas fa-receipt me-3 money-green"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Tips Section */}
      {data?.tips?.items && data.tips.items.length > 0 && (
        <section className="qatar-section tips-section">
          <div className="container">
            <div className="qatar-section-header">
              <h2 className="qatar-section-title">
                <i className="fas fa-lightbulb me-3 star-yellow"></i> {data.tips.title}
              </h2>
            </div>
            <div className="qatar-glass-card">
              <ul className="requirements-list qatar-requirements">
                {data.tips.items.map((item: string, index: number) => (
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
      {data?.withKaya?.services && data.withKaya.services.length > 0 && (
        <section className="qatar-section with-kaya-section">
          <div className="container">
            <div className="qatar-section-header">
              <h2 className="qatar-section-title">
                <i className="fas fa-hands-helping me-3 info-blue"></i> {data.withKaya.title}
              </h2>
            </div>
            <div className="qatar-glass-card">
              <ul className="services-list qatar-services">
                {data.withKaya.services.map((service: string, index: number) => (
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
      <section className="qatar-section summary-section">
        <div className="container">
          <div className="qatar-section-header">
            <h2 className="qatar-section-title">
              <i className="fas fa-file-contract me-3 info-blue"></i> {locale === 'ar' ? 'الخلاصة' : 'Summary'}
            </h2>
          </div>
          <div className="qatar-glass-card">
            <div className="qatar-highlight-card">
              <p className="mb-0 fs-5">
                {locale === 'ar' 
                  ? 'الإقامة الحرة في قطر تمنحك سنتين من الاستقرار القانوني والحرية الكاملة لاستكشاف سوق العمل، وهي بديل عملي ومرن عن التأشيرة التقليدية المرتبطة بالكفيل.'
                  : 'The independent residence in Qatar gives you two years of legal stability and complete freedom to explore the job market, and is a practical and flexible alternative to the traditional sponsor-tied visa.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="qatar-cta">
        <div className="container">
          <div className="professional-journey-banner qatar-banner">
            <h2>{data?.cta?.title || (locale === 'ar' ? 'ابدأ مسيرتك في قطر' : 'Start Your Qatar Career')}</h2>
            <p>
              {data?.cta?.description || (locale === 'ar' 
                ? 'الإقامة الحرة في قطر تمنحك سنتين من الاستقرار القانوني والحرية الكاملة لاستكشاف سوق العمل. ابدأ الآن رحلتك المهنية في قطر مع كايا — نحن نجهّز لك كل ما تحتاجه لتصل إلى سوق العمل بثقة.'
                : 'The independent residence in Qatar gives you two years of legal stability and complete freedom to explore the job market. Start your professional journey in Qatar now with Kaya — we prepare everything you need to confidently enter the job market.')}
            </p>
            <div className="cta-buttons qatar-buttons">
              <Link href="/contact" className="btn-cta-primary qatar-primary">
                <i className="fas fa-envelope"></i>
                {data?.cta?.button_text || (locale === 'ar' ? 'تواصل معنا' : 'Contact Us')}
              </Link>
              <Link href="/work-visas" className="btn-cta-secondary qatar-secondary">
                <i className="fas fa-arrow-left"></i>
                {locale === 'ar' ? 'العودة إلى تأشيرات العمل' : 'Back to Work Visas'}
              </Link>
            </div>
            <div className="cta-features qatar-features">
              <div className="feature-item qatar-feature">
                <i className="fas fa-check-circle"></i>
                <span>{locale === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}</span>
              </div>
              <div className="feature-item qatar-feature">
                <i className="fas fa-check-circle"></i>
                <span>{locale === 'ar' ? 'دعم الخبراء' : 'Expert Support'}</span>
              </div>
              <div className="feature-item qatar-feature">
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