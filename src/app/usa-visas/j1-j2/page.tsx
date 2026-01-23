'use client'
import "bootstrap/dist/css/bootstrap.min.css"
import { useI18n } from '@/lib/i18n'
import j1j2Data from '@/data/usa-visa-j1-j2.json'

export default function J1J2VisaPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? j1j2Data.ar : j1j2Data.en
  const isRTL = locale === 'ar'

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero-section"
        style={{ backgroundImage: 'url("/usa-hero.png")' }}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center" dir={isRTL ? "rtl" : "ltr"}>
          <div className="fade-in-up">
            <h1 className="hero-title">{data.title}</h1>
            <p className="hero-subtitle mb-4">{data.intro}</p>

            <div className="d-flex justify-content-center gap-4 mb-5">
              <div className="text-center px-3 border-end border-white border-opacity-25 last-child-no-border">
                <div className="h2 fw-bold text-secondary mb-0">14+</div>
                <div className="small opacity-75">{isRTL ? "فئات البرامج" : "Program Categories"}</div>
              </div>
              <div className="text-center px-3 border-end border-white border-opacity-25 last-child-no-border">
                <div className="h2 fw-bold text-secondary mb-0">J2</div>
                <div className="small opacity-75">{isRTL ? "تصريح عمل" : "Work Auth"}</div>
              </div>
              <div className="text-center px-3">
                <div className="h2 fw-bold text-secondary mb-0">$160</div>
                <div className="small opacity-75">{isRTL ? "رسوم التأشيرة" : "Visa Fee"}</div>
              </div>
            </div>

            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
              <a href="#categories" className="btn btn-secondary btn-lg">
                {isRTL ? "فئات البرامج" : "Program Categories"} <i className={`fas fa-arrow-${isRTL ? 'left' : 'right'} ms-2`}></i>
              </a>
              <a href="#requirements" className="btn btn-outline-light btn-lg border-2" style={{ borderRadius: '8px' }}>
                {isRTL ? "المتطلبات" : "Requirements"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="section bg-white">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="text-center mb-5">
            <h2 className="section-title mx-auto">{data.overview.heading}</h2>
            <div className="section-underline mx-auto" style={{
              width: '80px',
              height: '4px',
              background: 'var(--secondary-color)',
              marginTop: '-1rem',
              marginBottom: '2rem'
            }}></div>
            <p className="section-subtitle mx-auto" style={{ maxWidth: '800px' }}>
              {data.overview.description}
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAM CATEGORIES */}
      <section id="categories" className="section bg-light">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title text-center mb-5">{data.program_categories.heading}</h2>

          <div className="row g-4 mt-4">
            {data.program_categories.categories.map((cat, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100 border-0 shadow-sm p-4 text-center hover-lift">
                  <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '60px', height: '60px' }}>
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
                      } fs-4`}></i>
                  </div>
                  <h5 className="fw-bold mb-3">{cat.name}</h5>
                  <p className="text-muted small mb-0">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section bg-primary text-white">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title text-center text-white mb-5">{data.why_choose.heading}</h2>

          <div className="row g-4 mt-2">
            {data.why_choose.reasons.map((reason, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="p-4 rounded-3 h-100 bg-white bg-opacity-10" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="text-secondary fs-4">
                      <i className="fas fa-star"></i>
                    </div>
                    <div>
                      <p className="mb-0 fw-medium">{reason}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="section bg-light">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title text-center mb-5">{data.how_to_apply.heading}</h2>

          <div className="row g-4 justify-content-center mt-4">
            {data.how_to_apply.steps.map((step, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="card border-0 shadow-sm p-4 h-100 position-relative">
                  <div className="h1 mb-3">
                    {i === 0 ? "🏢" : i === 1 ? "📄" : i === 2 ? "💰" :
                      i === 3 ? "📝" : i === 4 ? "🗣️" : i === 5 ? "📋" : "✅"}
                  </div>
                  <h4 className="h6 fw-bold mb-2"><span className="text-secondary me-2">{i + 1}.</span> {step}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* J2 DEPENDENT VISA */}
      <section className="section bg-white">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title text-center mb-5">{data.j2_dependent_visa.heading}</h2>
          <p className="section-subtitle text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
            {data.j2_dependent_visa.description}
          </p>

          <div className="row g-4 mt-4">
            {data.j2_dependent_visa.benefits.map((benefit, i) => (
              <div className="col-md-6" key={i}>
                <div className="card border-0 shadow-sm p-4 h-100 border-start border-4 border-primary">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary bg-opacity-10 text-primary p-2 rounded-2">
                      <i className="fas fa-check"></i>
                    </div>
                    <p className="mb-0 fw-medium">{benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements" className="section bg-light">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title text-center mb-5">{data.application_requirements.heading}</h2>

          <div className="row g-4 mt-4">
            {data.application_requirements.requirements.map((r, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="p-3 h-100 border rounded-3 bg-white hover-shadow transition">
                  <div className="d-flex align-items-center gap-3">
                    <div className="text-secondary fs-5">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <p className="mb-0 small fw-medium">{r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO-YEAR RULE */}
      <section className="section bg-dark text-white">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="p-5 rounded-4 bg-white bg-opacity-10 border border-white border-opacity-10 shadow-lg">
                <div className="d-flex flex-column flex-md-row align-items-center gap-4 text-center text-md-start">
                  <div className="text-secondary" style={{ fontSize: '4rem' }}>
                    <i className="fas fa-exclamation-triangle"></i>
                  </div>
                  <div>
                    <h3 className="h4 fw-bold text-secondary mb-3">
                      {isRTL ? "قاعدة السنتين" : "Two-Year Home Residency Requirement"}
                    </h3>
                    <p className="lead opacity-90 mb-0">
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
      <section className="section bg-light">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title text-center mb-5">{isRTL ? "ملاحظات مهمة" : "Important Notes"}</h2>

          <div className="row g-4 mt-4 justify-content-center">
            {data.important_notes.map((note, i) => (
              <div className="col-md-6" key={i}>
                <div className="card border-0 shadow-sm p-4 h-100 border-bottom border-4 border-secondary">
                  <div className="d-flex align-items-start gap-3">
                    <div className="text-secondary fs-4">
                      <i className="fas fa-info-circle"></i>
                    </div>
                    <p className="mb-0 fw-medium">{note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODERN CTA */}
      <section className="section bg-primary text-white text-center">
        <div className="container py-4 fade-in-up" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="h1 fw-bold mb-3">{data.cta}</h2>
          <p className="lead opacity-75 mb-5 mx-auto" style={{ maxWidth: '700px' }}>
            {isRTL ? "احصل على برنامج التبادل الثقافي المناسب لك بمساعدة خبرائنا" :
              "Get the right cultural exchange program with help from our experts"}
          </p>

          <div className="d-flex flex-column flex-md-row gap-4 justify-content-center align-items-center">
            <a href="/contact" className="btn btn-secondary btn-xl px-5 py-3 fs-5 fw-bold shadow-lg">
              <i className="fas fa-handshake me-2"></i>
              {isRTL ? "استشارة مجانية" : "Free Consultation"}
            </a>
            <a href="tel:+1234567890" className="btn btn-outline-light btn-xl px-5 py-3 fs-5 fw-bold border-2">
              <i className="fas fa-phone-alt me-2"></i>
              {isRTL ? "اتصل الآن" : "Call Now"}
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .last-child-no-border:last-child {
          border-right: none !important;
        }
        .transition {
          transition: var(--transition);
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg) !important;
        }
        .hover-shadow:hover {
          box-shadow: var(--shadow-md) !important;
        }
        @media (max-width: 768px) {
          .border-end {
            border-right: none !important;
          }
        }
      `}</style>
    </>
  )
}
