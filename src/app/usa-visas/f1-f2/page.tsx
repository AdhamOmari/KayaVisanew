'use client'
import "@/styles/usa-visa-premium.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useI18n } from '@/lib/i18n'
import f1f2Data from '@/data/usa-visa-f1-f2.json'

export default function F1F2VisaPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? f1f2Data.ar : f1f2Data.en
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
              <span className="usa-hero-label">F1/F2 Student Suite</span>
              <h1 className="usa-hero-title-suite">{data.title}</h1>
              <p className="usa-hero-subtitle-suite">{data.intro}</p>

              <div className="usa-stats-row">
                <div className="usa-stat-box">
                  <span className="usa-stat-val">$535</span>
                  <span className="usa-stat-desc">{isRTL ? "رسوم التقديم" : "Application Fees"}</span>
                </div>
                <div className="usa-stat-box">
                  <span className="usa-stat-val">OPT</span>
                  <span className="usa-stat-desc">{isRTL ? "تصريح العمل" : "Work Permission"}</span>
                </div>
                <div className="usa-stat-box">
                  <span className="usa-stat-val">2-4</span>
                  <span className="usa-stat-desc">{isRTL ? "أسابيع المعالجة" : "Weeks Processing"}</span>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3 mt-5">
                <a href="#requirements" className="btn-usa-primary">
                  {isRTL ? "المتطلبات" : "Requirements"}
                  <i className={`fas fa-arrow-${isRTL ? 'left' : 'right'}`}></i>
                </a>
                <a href="#work-options" className="btn-usa-outline">
                  {isRTL ? "فرص العمل" : "Work Options"}
                </a>
              </div>
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
              <div className="col-md-6" key={i}>
                <div className="usa-card-premium text-center">
                  <div className="usa-card-icon-wrap mx-auto">
                    <i className={`fas fa-${i === 0 ? 'graduation-cap' : 'users'}`}></i>
                  </div>
                  <h3 className="usa-card-title">{type.name}</h3>
                  <p className="usa-card-text small">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STUDY IN USA */}
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
                      <i className="fas fa-star"></i>
                    </div>
                    <div>
                      <h4 className="h6 mb-2 fw-bold text-white">{item}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="usa-section bg-white">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="usa-section-head">
            <h2 className="usa-section-heading">{data.how_to_apply.heading}</h2>
          </div>

          <div className="usa-process-grid">
            {data.how_to_apply.steps.map((step, i) => (
              <div className="usa-step-item" key={i}>
                <span className="usa-step-number">{i + 1}</span>
                <span className="usa-step-tag">Step {i + 1}</span>
                <h4 className="h6 fw-bold mb-0">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK OPPORTUNITIES */}
      <section id="work-options" className="usa-section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="usa-section-head">
            <h2 className="usa-section-heading">{data.work_options.heading}</h2>
          </div>

          <div className="row g-4 mt-4">
            {data.work_options.options.map((option, i) => (
              <div className="col-md-6" key={i}>
                <div className="usa-card-premium border-start border-4 border-primary p-4">
                  <div className="d-flex align-items-center gap-4">
                    <div className="usa-card-icon-wrap mb-0">
                      <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="mb-0 fw-bold text-slate-800 lead">{option}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements" className="usa-section bg-white">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="usa-section-head">
            <h2 className="usa-section-heading">{data.application_requirements.heading}</h2>
          </div>

          <div className="row g-3">
            {data.application_requirements.requirements.map((r, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="p-3 h-100 border rounded-4 bg-light hover-shadow transition">
                  <div className="d-flex align-items-center gap-3">
                    <div className="text-secondary fs-5">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <p className="mb-0 small fw-bold text-slate-700">{r}</p>
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
                      <i className="fas fa-info-circle"></i>
                    </div>
                    <p className="mb-0 text-slate-200 lead fw-medium">{note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS CTA */}
      <section className="usa-section">
        <div className="container">
          <div className="usa-cta-box" dir={isRTL ? "rtl" : "ltr"}>
            <h2 className="display-4 fw-bold mb-4">{data.cta}</h2>
            <p className="lead opacity-80 mb-5 mx-auto" style={{ maxWidth: '700px' }}>
              {isRTL ? "احصل على قبول جامعي وتأشيرة طالب بمساعدة خبرائنا" :
                "Get university admission and student visa with help from our experts"}
            </p>
            <div className="d-flex flex-column flex-md-row gap-4 justify-content-center align-items-center mt-5">
              <a href="/contact" className="btn-usa-primary">
                <i className="fas fa-graduation-cap"></i>
                {isRTL ? "استشارة مجانية" : "Free Consultation"}
              </a>
              <a href="tel:+1234567890" className="btn-usa-outline">
                <i className="fas fa-phone-alt"></i>
                {isRTL ? "اتصل الآن" : "Call Now"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
