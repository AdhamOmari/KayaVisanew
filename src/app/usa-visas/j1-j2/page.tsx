'use client'
import "@/styles/usa-visa-premium.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useI18n } from '@/lib/i18n'
import j1j2Data from '@/data/usa-visa-j1-j2.json'

export default function J1J2VisaPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? j1j2Data.ar : j1j2Data.en
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
              <span className="usa-hero-label">J1/J2 Exchange Suite</span>
              <h1 className="usa-hero-title-suite">{data.title}</h1>
              <p className="usa-hero-subtitle-suite">{data.intro}</p>

              <div className="usa-stats-row">
                <div className="usa-stat-box">
                  <span className="usa-stat-val">14+</span>
                  <span className="usa-stat-desc">{isRTL ? "فئات البرامج" : "Program Categories"}</span>
                </div>
                <div className="usa-stat-box">
                  <span className="usa-stat-val">J2</span>
                  <span className="usa-stat-desc">{isRTL ? "تصريح عمل" : "Work Auth"}</span>
                </div>
                <div className="usa-stat-box">
                  <span className="usa-stat-val">$160</span>
                  <span className="usa-stat-desc">{isRTL ? "رسوم التأشيرة" : "Visa Fee"}</span>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3 mt-5">
                <a href="#categories" className="btn-usa-primary">
                  {isRTL ? "فئات البرامج" : "Program Categories"}
                  <i className={`fas fa-arrow-${isRTL ? 'left' : 'right'}`}></i>
                </a>
                <a href="#requirements" className="btn-usa-outline">
                  {isRTL ? "المتطلبات" : "Requirements"}
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
        </div>
      </section>

      {/* PROGRAM CATEGORIES */}
      <section id="categories" className="usa-section bg-light">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="usa-section-head">
            <h2 className="usa-section-heading">{data.program_categories.heading}</h2>
          </div>

          <div className="row g-4 mt-4">
            {data.program_categories.categories.map((cat, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="usa-card-premium text-center">
                  <div className="usa-card-icon-wrap mx-auto">
                    <i className={`fas fa-${i === 0 ? 'suitcase-rolling' :
                        i === 1 ? 'campground' :
                          i === 2 ? 'user-tie' :
                            i === 3 ? 'laptop-code' :
                              i === 4 ? 'graduation-cap' :
                                i === 5 ? 'flask' :
                                  i === 6 ? 'chalkboard-teacher' :
                                    i === 7 ? 'microscope' :
                                      i === 8 ? 'user-md' :
                                        i === 9 ? 'globe' :
                                          i === 10 ? 'home' :
                                            i === 11 ? 'landmark' :
                                              i === 12 ? 'user-friends' :
                                                'atom'
                      }`}></i>
                  </div>
                  <h5 className="usa-card-title">{cat.name}</h5>
                  <p className="usa-card-text small mb-0">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="usa-section usa-section-dark">
        <div className="container">
          <div className="usa-section-head usa-section-head-light" dir={isRTL ? "rtl" : "ltr"}>
            <h2 className="usa-section-heading">{data.why_choose.heading}</h2>
          </div>

          <div className="row g-4" dir={isRTL ? "rtl" : "ltr"}>
            {data.why_choose.reasons.map((reason, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="d-flex align-items-start gap-3 text-white">
                    <div className="text-secondary fs-4">
                      <i className="fas fa-star"></i>
                    </div>
                    <div>
                      <p className="mb-0 fw-bold">{reason}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="usa-section bg-light">
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

      {/* J2 DEPENDENT VISA */}
      <section className="usa-section bg-white">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="usa-section-head">
            <h2 className="usa-section-heading">{data.j2_dependent_visa.heading}</h2>
            <p className="usa-section-subheading text-center mx-auto mb-0" style={{ maxWidth: '800px' }}>
              {data.j2_dependent_visa.description}
            </p>
          </div>

          <div className="row g-4 mt-4">
            {data.j2_dependent_visa.benefits.map((benefit, i) => (
              <div className="col-md-6" key={i}>
                <div className="usa-card-premium border-start border-4 border-primary p-4 shadow-sm">
                  <div className="d-flex align-items-center gap-4">
                    <div className="usa-card-icon-wrap mb-0" style={{ background: 'rgba(15, 23, 42, 0.05)' }}>
                      <i className="fas fa-check"></i>
                    </div>
                    <p className="mb-0 fw-bold text-slate-800 lead">{benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements" className="usa-section bg-light">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="usa-section-head">
            <h2 className="usa-section-heading">{data.application_requirements.heading}</h2>
          </div>

          <div className="row g-3">
            {data.application_requirements.requirements.map((r, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="p-4 h-100 bg-white border border-slate-200 rounded-4 shadow-sm hover:shadow-md transition-all">
                  <div className="d-flex align-items-center gap-3 text-slate-800">
                    <div className="text-secondary fs-5">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <p className="mb-0 small fw-bold">{r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO-YEAR RULE */}
      <section className="usa-section usa-section-dark">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="p-5 rounded-5 bg-white bg-opacity-5 border border-white border-opacity-10 shadow-2xl">
                <div className="d-flex flex-column flex-md-row align-items-center gap-5 text-center text-md-start">
                  <div className="text-secondary" style={{ fontSize: '5rem' }}>
                    <i className="fas fa-exclamation-triangle"></i>
                  </div>
                  <div>
                    <h3 className="h3 fw-bold text-secondary mb-4">
                      {isRTL ? "قاعدة السنتين" : "Two-Year Home Residency Requirement"}
                    </h3>
                    <p className="lead opacity-90 mb-0 fw-medium line-height-relaxed" style={{ lineHeight: '1.8' }}>
                      {data.two_year_rule}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTES */}
      <section className="usa-section bg-light">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="usa-section-head">
            <h2 className="usa-section-heading">{isRTL ? "ملاحظات مهمة" : "Important Notes"}</h2>
          </div>

          <div className="row g-4 mt-4 justify-content-center">
            {data.important_notes.map((note, i) => (
              <div className="col-md-6" key={i}>
                <div className="p-5 rounded-5 bg-white border border-slate-200 h-100 shadow-sm transition-all hover:border-secondary">
                  <div className="d-flex align-items-start gap-4 text-slate-700">
                    <div className="text-secondary fs-4">
                      <i className="fas fa-info-circle"></i>
                    </div>
                    <p className="mb-0 fw-bold lead">{note}</p>
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
            <h2 className="display-4 fw-bold mb-4">{data.cta}</h2>
            <p className="lead opacity-80 mb-5 mx-auto" style={{ maxWidth: '700px' }}>
              {isRTL ? "احصل على برنامج التبادل الثقافي المناسب لك بمساعدة خبرائنا" :
                "Get the right cultural exchange program with help from our experts"}
            </p>
            <div className="d-flex flex-column flex-md-row gap-4 justify-content-center align-items-center mt-5">
              <a href="/contact" className="btn-usa-primary">
                <i className="fas fa-handshake"></i>
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
