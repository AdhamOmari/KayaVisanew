'use client'
import "bootstrap/dist/css/bootstrap.min.css"
import { useI18n } from '@/lib/i18n'
import f1f2Data from '@/data/usa-visa-f1-f2.json'

export default function F1F2VisaPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? f1f2Data.ar : f1f2Data.en
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
                <div className="h2 fw-bold text-secondary mb-0">$535</div>
                <div className="small opacity-75">{isRTL ? "رسوم التقديم" : "Application Fees"}</div>
              </div>
              <div className="text-center px-3 border-end border-white border-opacity-25 last-child-no-border">
                <div className="h2 fw-bold text-secondary mb-0">OPT</div>
                <div className="small opacity-75">{isRTL ? "تصريح العمل" : "Work Permission"}</div>
              </div>
              <div className="text-center px-3">
                <div className="h2 fw-bold text-secondary mb-0">2-4</div>
                <div className="small opacity-75">{isRTL ? "أسابيع المعالجة" : "Weeks Processing"}</div>
              </div>
            </div>

            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
              <a href="#requirements" className="btn btn-secondary btn-lg">
                {isRTL ? "المتطلبات" : "Requirements"} <i className={`fas fa-arrow-${isRTL ? 'left' : 'right'} ms-2`}></i>
              </a>
              <a href="#work-options" className="btn btn-outline-light btn-lg border-2" style={{ borderRadius: '8px' }}>
                {isRTL ? "فرص العمل" : "Work Options"}
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

          <div className="row g-4 mt-4">
            {data.visa_types.types.map((type, i) => (
              <div className="col-md-6" key={i}>
                <div className="card h-100 border-0 shadow-sm p-4 text-center hover-lift">
                  <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '70px', height: '70px' }}>
                    <i className={`fas fa-${i === 0 ? 'graduation-cap' : 'users'} fs-3`}></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">{type.name}</h3>
                  <p className="text-muted small mb-0">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STUDY IN USA */}
      <section className="section bg-primary text-white">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title text-center text-white mb-5">{data.why_choose.heading}</h2>

          <div className="row g-4 mt-2">
            {data.why_choose.reasons.map((item, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="p-4 rounded-3 h-100 bg-white bg-opacity-10" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="text-secondary fs-4">
                      <i className="fas fa-star"></i>
                    </div>
                    <div>
                      <p className="mb-0 fw-medium">{item}</p>
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
                    {i === 0 ? "🎓" : i === 1 ? "📄" : i === 2 ? "💰" :
                      i === 3 ? "📝" : i === 4 ? "💳" : i === 5 ? "🗣️" :
                        i === 6 ? "📋" : "✅"}
                  </div>
                  <h4 className="h6 fw-bold mb-2"><span className="text-secondary me-2">{i + 1}.</span> {step}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK OPPORTUNITIES */}
      <section id="work-options" className="section bg-white">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title text-center mb-5">{data.work_options.heading}</h2>

          <div className="row g-4 mt-4">
            {data.work_options.options.map((option, i) => (
              <div className="col-md-6" key={i}>
                <div className="card border-0 shadow-sm p-4 h-100 border-start border-4 border-primary">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary bg-opacity-10 text-primary p-2 rounded-2">
                      <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="mb-0 fw-medium">{option}</p>
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

      {/* IMPORTANT NOTES */}
      <section className="section bg-dark text-white">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title text-center text-white mb-5">{isRTL ? "ملاحظات مهمة" : "Important Notes"}</h2>

          <div className="row g-4 mt-4 justify-content-center">
            {data.important_notes.map((note, i) => (
              <div className="col-md-6" key={i}>
                <div className="p-4 rounded-4 bg-white bg-opacity-10 h-100" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="text-secondary fs-4">
                      <i className="fas fa-info-circle"></i>
                    </div>
                    <p className="mb-0 opacity-90">{note}</p>
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
            {isRTL ? "احصل على قبول جامعي وتأشيرة طالب بمساعدة خبرائنا" :
              "Get university admission and student visa with help from our experts"}
          </p>

          <div className="d-flex flex-column flex-md-row gap-4 justify-content-center align-items-center">
            <a href="/contact" className="btn btn-secondary btn-xl px-5 py-3 fs-5 fw-bold shadow-lg">
              <i className="fas fa-graduation-cap me-2"></i>
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
