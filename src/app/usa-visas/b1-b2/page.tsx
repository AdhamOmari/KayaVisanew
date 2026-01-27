'use client'
import "@/styles/usa-visa-premium.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useI18n } from '@/lib/i18n'
import b1b2Data from '@/data/usa-visa-b1-b2.json'

export default function B1B2VisaPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? b1b2Data.ar : b1b2Data.en
  const isRTL = locale === 'ar'

  return (
    <div className="usa-page-wrapper">
      {/* PREMIUM HERO */}
      <section className="usa-hero-suite">
        <div className="usa-hero-bg-suite" style={{ backgroundImage: 'url("/usa-hero.png")' }}></div>
        <div className="usa-hero-overlay-suite"></div>
        <div className="container usa-hero-container">
          <div className="row align-items-center">
            <div className="col-lg-8" dir={isRTL ? "rtl" : "ltr"}>
              <span className="usa-hero-label">B1/B2 Visa Suite</span>
              <h1 className="usa-hero-title-suite">{data.title}</h1>
              <p className="usa-hero-subtitle-suite">{data.intro}</p>

              <div className="usa-stats-row">
                <div className="usa-stat-box">
                  <span className="usa-stat-val">10</span>
                  <span className="usa-stat-desc">{isRTL ? "سنوات الصلاحية" : "Years Validity"}</span>
                </div>
                <div className="usa-stat-box">
                  <span className="usa-stat-val">6</span>
                  <span className="usa-stat-desc">{isRTL ? "أشهر لكل زيارة" : "Months Per Visit"}</span>
                </div>
                <div className="usa-stat-box">
                  <span className="usa-stat-val">$185</span>
                  <span className="usa-stat-desc">{isRTL ? "رسوم التأشيرة" : "Visa Fee"}</span>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3 mt-5">
                <a href="#requirements" className="btn-usa-primary">
                  {isRTL ? "المتطلبات" : "Requirements"}
                  <i className={`fas fa-arrow-${isRTL ? 'left' : 'right'}`}></i>
                </a>
                <a href="#apply" className="btn-usa-outline">
                  {isRTL ? "كيفية التقديم" : "How to Apply"}
                </a>
              </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="usa-section bg-white">
        <div className="container">
          <div className="usa-section-head" dir={isRTL ? "rtl" : "ltr"}>
            <h2 className="usa-section-heading">{data.overview.heading}</h2>
            <p className="usa-section-subheading mx-auto" style={{ maxWidth: '800px' }}>{data.overview.description}</p>
          </div>

          <div className="row g-4 mt-4" dir={isRTL ? "rtl" : "ltr"}>
            {data.visa_types.types.map((type, i) => (
              <div className="col-md-4" key={i}>
                <div className="usa-card-premium text-center">
                  <div className="usa-card-icon-wrap mx-auto">
                    <i className={`fas fa-${i === 0 ? 'briefcase' : i === 1 ? 'plane' : 'passport'}`}></i>
                  </div>
                  <h3 className="usa-card-title">{type.name}</h3>
                  <p className="usa-card-text small">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="usa-section usa-section-dark">
        <div className="container">
          <div className="usa-section-head usa-section-head-light" dir={isRTL ? "rtl" : "ltr"}>
            <h2 className="usa-section-heading">{data.why_choose.heading}</h2>
          </div>

          <div className="row g-4" dir={isRTL ? "rtl" : "ltr"}>
            {data.why_choose.reasons.map((item, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="text-secondary fs-4">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>
                      <h4 className="h6 mb-2 fw-bold text-white">{item}</h4>
                      <p className="small opacity-60 mb-0">
                        {isRTL ? "ميزة مهمة لطلبك" : "Crucial benefit for your application"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="apply" className="usa-section bg-white">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="usa-section-head">
            <h2 className="usa-section-heading">{data.how_to_apply.heading}</h2>
          </div>

          <div className="usa-process-grid">
            {data.how_to_apply.steps.map((step, i) => (
              <div className="usa-step-item" key={i}>
                <span className="usa-step-number">{i + 1}</span>
                <span className="usa-step-tag">Step {i + 1}</span>
                <h4 className="h5 fw-bold mb-3">{step}</h4>
                <p className="text-slate-500 small mb-0">
                  {isRTL ? "إجراء متطلب وضروري" : "Mandatory and essential procedure"}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <div className="d-inline-flex align-items-center gap-4 p-4 rounded-5 bg-light border-0 shadow-sm">
              <div className="usa-card-icon-wrap mb-0" style={{ background: 'var(--usa-gold-premium)', color: 'var(--usa-navy-deep)' }}>
                <i className="fas fa-clock fs-4"></i>
              </div>
              <div className="text-start">
                <h5 className="mb-1 fw-bold text-slate-900">
                  {isRTL ? "مدة المعالجة" : "Processing Time"}
                </h5>
                <p className="mb-0 text-slate-600 fw-medium">{data.processing_time}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements" className="usa-section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="usa-section-head">
            <h2 className="usa-section-heading">{data.application_requirements.heading}</h2>
          </div>

          <div className="row g-3">
            {data.application_requirements.requirements.map((r, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="p-4 h-100 bg-white border border-slate-200 rounded-4 shadow-sm hover:shadow-md transition-all">
                  <div className="d-flex align-items-center gap-3">
                    <div className="text-primary fs-5">
                      <i className={`fas fa-${i === 0 ? 'passport' :
                          i === 1 ? 'file-alt' :
                            i === 2 ? 'receipt' :
                              i === 3 ? 'camera' :
                                i === 4 ? 'money-bill' :
                                  i === 5 ? 'briefcase' :
                                    i === 6 ? 'hotel' :
                                      i === 7 ? 'home' : 'check-circle'
                        }`}></i>
                    </div>
                    <h4 className="small mb-0 fw-bold text-slate-800">{r}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERVIEW TIPS */}
      <section className="usa-section bg-white">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="usa-section-head">
            <h2 className="usa-section-heading">{data.interview_tips.heading}</h2>
          </div>

          <div className="row g-4">
            {data.interview_tips.tips.map((tip, i) => (
              <div className="col-md-6" key={i}>
                <div className="p-4 h-100 rounded-4 bg-light border-start border-4 border-secondary shadow-sm">
                  <div className="d-flex align-items-start gap-3">
                    <div className="text-secondary fs-3">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <p className="mb-0 fw-bold text-slate-700">{tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTES */}
      <section className="usa-section usa-section-dark">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="usa-section-head usa-section-head-light">
            <h2 className="usa-section-heading">{isRTL ? "ملاحظات مهمة" : "Important Notes"}</h2>
          </div>

          <div className="row g-4 justify-content-center">
            {data.important_notes.map((note, i) => (
              <div className="col-md-6" key={i}>
                <div className="p-5 rounded-5 bg-white bg-opacity-5 h-100 border border-white border-opacity-10">
                  <div className="d-flex align-items-start gap-4">
                    <div className="text-secondary fs-4 pt-1">
                      <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <p className="mb-0 text-slate-200 lead fw-medium">{note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="usa-section">
        <div className="container">
          <div className="usa-cta-box" dir={isRTL ? "rtl" : "ltr"}>
            <h2 className="display-4 fw-bold mb-4">{isRTL ? "ابدأ طلب تأشيرتك الأمريكية اليوم" : "Start Your US Visa Application Today"}</h2>
            <p className="lead opacity-80 mb-5 mx-auto" style={{ maxWidth: '700px' }}>
              {isRTL ? "دعنا نساعدك في كل خطوة من خطوات عملية التقديم" :
                "Let us help you through every step of the application process"}
            </p>
            <div className="d-flex flex-column flex-md-row gap-4 justify-content-center align-items-center mt-5">
              <a href="/contact" className="btn-usa-primary">
                <i className="fas fa-calendar-check"></i>
                {isRTL ? "احجز استشارة مجانية" : "Book Free Consultation"}
              </a>
              <a href="tel:+1234567890" className="btn-usa-outline">
                <i className="fas fa-phone-alt"></i>
                {isRTL ? "اتصل بنا الآن" : "Call Now"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
