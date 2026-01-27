'use client'
import "bootstrap/dist/css/bootstrap.min.css"

import { useI18n } from '@/lib/i18n'

export default function F1VisaPage() {
  const { locale } = useI18n()
  const isRTL = locale === 'ar'

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay" style={{background: 'rgba(26, 32, 44, 0.7)'}}></div>
        <div className="container">
          <div className="hero-content text-center" dir={isRTL ? "rtl" : "ltr"}>
            <h1 className="hero-title">
              {isRTL ? "تأشيرة F-1 للطلاب" : "F-1 Student Visa"}
            </h1>
            <p className="hero-subtitle">
              {isRTL ? "ابدأ رحلتك الأكاديمية في الولايات المتحدة" :
               "Begin your academic journey in the United States"}
            </p>

            <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap">
              <a href="#overview" className="btn btn-primary">
                {isRTL ? "نظرة عامة" : "Overview"}
              </a>
              <a href="#requirements" className="btn btn-secondary">
                {isRTL ? "المتطلبات" : "Requirements"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section id="overview" className="section">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {isRTL ? "حول تأشيرة F-1" : "About F-1 Visa"}
          </h2>
          <div className="row g-4 mt-5 justify-content-center">
            <div className="col-lg-8">
              <p className="lead text-center" dir={isRTL ? "rtl" : "ltr"}>
                {isRTL ?
                  "تأشيرة F-1 مخصصة للطلاب الدوليين الذين يرغبون في الدراسة بدوام كامل في مؤسسات تعليمية معتمدة في الولايات المتحدة." :
                  "The F-1 visa is designed for international students who wish to study full-time at accredited educational institutions in the United States."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements" className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {isRTL ? "متطلبات التأشيرة" : "Visa Requirements"}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-university fs-2 text-primary"></i>
                  </div>
                  <h6>{isRTL ? "قبول من جامعة" : "University Acceptance"}</h6>
                  <p className="small">{isRTL ? "يجب الحصول على قبول من جامعة معتمدة" : "Must be accepted by accredited university"}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-language fs-2 text-success"></i>
                  </div>
                  <h6>{isRTL ? "إتقان اللغة" : "English Proficiency"}</h6>
                  <p className="small">{isRTL ? "إثبات إتقان اللغة الإنجليزية" : "Proof of English language proficiency"}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-dollar-sign fs-2 text-warning"></i>
                  </div>
                  <h6>{isRTL ? "القدرة المالية" : "Financial Support"}</h6>
                  <p className="small">{isRTL ? "إثبات القدرة على تغطية التكاليف" : "Proof of financial ability to cover costs"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="text-center" dir={isRTL ? "rtl" : "ltr"}>
            <h2 className="section-title text-white">
              {isRTL ? "ابدأ رحلتك الأكاديمية اليوم" : "Start Your Academic Journey Today"}
            </h2>
            <p className="section-subtitle text-white-50">
              {isRTL ? "احصل على المساعدة للحصول على تأشيرة F-1 مع خبرائنا" :
               "Get help applying for your F-1 visa with our experts"}
            </p>

            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center mt-5">
              <a href="/contact" className="btn btn-light text-primary">
                <i className="fas fa-calendar-check me-2"></i>
                {isRTL ? "احجز استشارة مجانية" : "Book Free Consultation"}
              </a>
              <a href="tel:+1234567890" className="btn btn-outline-light">
                <i className="fas fa-phone-alt me-2"></i>
                {isRTL ? "اتصل بنا الآن" : "Call Now"}
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}