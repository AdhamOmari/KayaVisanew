'use client'
import "bootstrap/dist/css/bootstrap.min.css"
import { useI18n } from '@/lib/i18n'
import b1b2Data from '@/data/usa-visa-b1-b2.json'

export default function B1B2VisaPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? b1b2Data.ar : b1b2Data.en
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
                <div className="h2 fw-bold text-secondary mb-0">10</div>
                <div className="small opacity-75">{isRTL ? "سنوات الصلاحية" : "Years Validity"}</div>
              </div>
              <div className="text-center px-3 border-end border-white border-opacity-25 last-child-no-border">
                <div className="h2 fw-bold text-secondary mb-0">6</div>
                <div className="small opacity-75">{isRTL ? "أشهر لكل زيارة" : "Months Per Visit"}</div>
              </div>
              <div className="text-center px-3">
                <div className="h2 fw-bold text-secondary mb-0">$185</div>
                <div className="small opacity-75">{isRTL ? "رسوم التأشيرة" : "Visa Fee"}</div>
              </div>
            </div>

            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
              <a href="#requirements" className="btn btn-secondary btn-lg">
                {isRTL ? "المتطلبات" : "Requirements"} <i className={`fas fa-arrow-${isRTL ? 'left' : 'right'} ms-2`}></i>
              </a>
              <a href="#apply" className="btn btn-outline-light btn-lg border-2" style={{ borderRadius: '8px' }}>
                {isRTL ? "كيفية التقديم" : "How to Apply"}
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
              <div className="col-md-4" key={i}>
                <div className="card h-100 border-0 shadow-sm p-4 text-center hover-lift">
                  <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '70px', height: '70px' }}>
                    <i className={`fas fa-${i === 0 ? 'briefcase' : i === 1 ? 'plane' : 'passport'} fs-3`}></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">{type.name}</h3>
                  <p className="text-muted small mb-0">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="section bg-primary text-white">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title text-center text-white mb-5">{data.why_choose.heading}</h2>

          <div className="row g-4 mt-2">
            {data.why_choose.reasons.map((item, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="p-4 rounded-3 h-100 bg-white bg-opacity-10" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="text-secondary fs-4">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>
                      <h4 className="h6 mb-2 fw-bold">{item}</h4>
                      <p className="small opacity-75 mb-0">
                        {isRTL ? "ميزة مهمة لتأشيرة B1/B2" :
                          "Important benefit of B1/B2 visa"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section id="apply" className="section bg-light">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title text-center mb-5">{data.how_to_apply.heading}</h2>

          <div className="row g-4 justify-content-center mt-4">
            {data.how_to_apply.steps.map((step, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="card border-0 shadow-sm p-4 h-100 position-relative overflow-hidden">
                  <div className="position-absolute top-0 end-0 p-3 opacity-10">
                    <span className="display-1 fw-bold">{i + 1}</span>
                  </div>
                  <div className="h1 mb-3">
                    {i === 0 ? "📝" : i === 1 ? "💳" : i === 2 ? "📅" :
                      i === 3 ? "📋" : i === 4 ? "🗣️" : "✅"}
                  </div>
                  <h4 className="h5 fw-bold mb-2">{step}</h4>
                  <p className="text-muted small mb-0">
                    {isRTL ? "خطوة أساسية في عملية التقديم" :
                      "Essential step in the application process"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <div className="d-inline-flex align-items-center gap-3 p-4 rounded-4 bg-white shadow-sm border border-secondary border-opacity-25">
              <div className="bg-secondary bg-opacity-10 text-secondary p-3 rounded-circle">
                <i className="fas fa-clock fs-4"></i>
              </div>
              <div className="text-start">
                <h5 className="mb-1 fw-bold text-dark">
                  {isRTL ? "مدة المعالجة" : "Processing Time"}
                </h5>
                <p className="mb-0 text-muted">{data.processing_time}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements" className="section bg-white">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title text-center mb-5">{data.application_requirements.heading}</h2>

          <div className="row g-4 mt-4">
            {data.application_requirements.requirements.map((r, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="p-3 h-100 border rounded-3 hover-shadow transition">
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
                    <div>
                      <h4 className="small mb-0 fw-bold">{r}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERVIEW TIPS */}
      <section className="section bg-light">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title text-center mb-5">{data.interview_tips.heading}</h2>

          <div className="row g-4 mt-4">
            {data.interview_tips.tips.map((tip, i) => (
              <div className="col-md-6" key={i}>
                <div className="card border-0 shadow-sm p-4 h-100 border-start border-4 border-secondary">
                  <div className="d-flex align-items-start gap-3">
                    <div className="text-secondary fs-3">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <p className="mb-0 fw-medium">{tip}</p>
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
                      <i className="fas fa-exclamation-triangle"></i>
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
          <h2 className="h1 fw-bold mb-3">{isRTL ? "ابدأ طلب تأشيرتك الأمريكية اليوم" : "Start Your US Visa Application Today"}</h2>
          <p className="lead opacity-75 mb-5 mx-auto" style={{ maxWidth: '700px' }}>
            {isRTL ? "دعنا نساعدك في كل خطوة من خطوات عملية التقديم" :
              "Let us help you through every step of the application process"}
          </p>

          <div className="d-flex flex-column flex-md-row gap-4 justify-content-center align-items-center">
            <a href="/contact" className="btn btn-secondary btn-xl px-5 py-3 fs-5 fw-bold shadow-lg">
              <i className="fas fa-calendar-check me-2"></i>
              {isRTL ? "احجز استشارة مجانية" : "Book Free Consultation"}
            </a>
            <a href="tel:+1234567890" className="btn btn-outline-light btn-xl px-5 py-3 fs-5 fw-bold border-2">
              <i className="fas fa-phone-alt me-2"></i>
              {isRTL ? "اتصل بنا الآن" : "Call Now"}
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
