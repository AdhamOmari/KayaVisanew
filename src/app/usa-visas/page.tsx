'use client'
import "bootstrap/dist/css/bootstrap.min.css"
import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import usaVisasData from '@/data/usa-visas-main.json'

export default function USAVisasPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? usaVisasData.ar : usaVisasData.en
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
            <p className="hero-subtitle mb-4">{data.hero.subtitle}</p>

            <div className="d-flex justify-content-center gap-4 mb-5">
              <div className="text-center px-3 border-end border-white border-opacity-25 last-child-no-border">
                <div className="h2 fw-bold text-secondary mb-0">50</div>
                <div className="small opacity-75">{isRTL ? "ولاية" : "States"}</div>
              </div>
              <div className="text-center px-3 border-end border-white border-opacity-25 last-child-no-border">
                <div className="h2 fw-bold text-secondary mb-0">6+</div>
                <div className="small opacity-75">{isRTL ? "أنواع التأشيرات" : "Visa Types"}</div>
              </div>
              <div className="text-center px-3">
                <div className="h2 fw-bold text-secondary mb-0">1776</div>
                <div className="small opacity-75">{isRTL ? "تأسست" : "Founded"}</div>
              </div>
            </div>

            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
              <a href="#visa-types" className="btn btn-secondary btn-lg">
                {isRTL ? "استكشف التأشيرات" : "Explore Visas"} <i className={`fas fa-arrow-${isRTL ? 'left' : 'right'} ms-2`}></i>
              </a>
              <Link href="/contact" className="btn btn-outline-light btn-lg border-2" style={{ borderRadius: '8px' }}>
                {isRTL ? "احصل على استشارة" : "Get Consultation"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="section bg-white">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="row align-items-center g-5">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title text-center mx-auto">{data.overview.heading}</h2>
              <div className="section-underline mx-auto" style={{
                width: '80px',
                height: '4px',
                background: 'var(--secondary-color)',
                marginTop: '-1rem',
                marginBottom: '3rem'
              }}></div>
            </div>
            <div className="col-lg-6">
              <p className="lead fw-normal text-muted" style={{ lineHeight: '1.8' }}>
                {data.overview.description}
              </p>
            </div>
            <div className="col-lg-6">
              <p className="lead fw-normal text-muted" style={{ lineHeight: '1.8' }}>
                {data.overview.additional}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRAVEL TO USA */}
      <section className="section" style={{ backgroundColor: '#f0f2f5' }}>
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title text-center mb-5">{data.why_travel.heading}</h2>

          <div className="row g-4 mt-2">
            {data.why_travel.reasons.map((reason, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100 shadow-sm border-0 p-4 hover-shadow">
                  <div className="d-flex align-items-start gap-3">
                    <div className="text-secondary fs-4">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>
                      <p className="mb-0 fw-medium">{reason}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 text-center px-lg-5">
            <p className="lead text-muted fst-italic mx-auto" style={{ maxWidth: '800px' }}>
              "{data.why_travel.conclusion}"
            </p>
          </div>
        </div>
      </section>

      {/* VISA CATEGORIES */}
      <section id="visa-types" className="section bg-white">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title text-center mb-5">{data.visa_categories.heading}</h2>

          {/* IMMIGRANT VISAS */}
          <div className="mb-5 p-4 p-md-5 rounded-4 shadow-sm" style={{ border: '1px solid #eee' }}>
            <div className="row align-items-center mb-4">
              <div className="col-lg-12">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="bg-primary text-white p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                    <i className="fas fa-home fs-4"></i>
                  </div>
                  <h3 className="h4 mb-0 fw-bold">{data.visa_categories.immigrant.title}</h3>
                </div>
                <p className="lead text-muted mb-4">{data.visa_categories.immigrant.description}</p>
              </div>
            </div>

            <div className="row g-4">
              {data.visa_categories.immigrant.types.map((type, i) => (
                <div className="col-md-4" key={i}>
                  <div className="h-100 p-4 rounded-3 bg-light border-start border-4 border-primary">
                    <h5 className="fw-bold mb-2">{type.name}</h5>
                    <p className="text-muted small mb-0">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-primary bg-opacity-10 rounded-3 text-primary d-flex align-items-center gap-3">
              <i className="fas fa-info-circle fs-5"></i>
              <span className="fw-medium">{data.visa_categories.immigrant.note}</span>
            </div>
          </div>

          <div className="mt-5 text-center">
            <h3 className="h4 mb-3 fw-bold">
              <i className="fas fa-plane-departure me-2 text-secondary"></i>
              {data.visa_categories.nonimmigrant.title}
            </h3>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              {data.visa_categories.nonimmigrant.description}
            </p>
          </div>
        </div>
      </section>

      {/* KEY VISA TYPES */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title text-center mb-5">{data.key_visas.heading}</h2>

          <div className="row g-4 mt-2">
            {data.key_visas.visas.map((visa, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <Link href={visa.link} className="text-decoration-none">
                  <div className="card h-100 p-4 border-0 shadow-sm hover-lift">
                    <div className="d-flex justify-content-between align-items-start mb-4">
                      <div className="bg-secondary bg-opacity-10 text-secondary p-3 rounded-3">
                        <i className={`fas fa-${visa.icon} fs-4`}></i>
                      </div>
                      <span className="badge bg-primary px-3 py-2">{visa.code}</span>
                    </div>
                    <h5 className="fw-bold text-dark mb-3">{visa.name}</h5>
                    <p className="text-muted small mb-4" style={{ lineHeight: '1.6' }}>{visa.description}</p>
                    <div className="mt-auto pt-3 border-top d-flex align-items-center text-primary fw-bold">
                      {isRTL ? "اعرف المزيد" : "Learn More"}
                      <i className={`fas fa-chevron-${isRTL ? 'left' : 'right'} ms-2`}></i>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* US STATES */}
      <section className="section bg-dark text-white overflow-hidden position-relative">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-25"></div>
        <div className="container position-relative z-index-2" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title text-center text-white mb-5">{data.states.heading}</h2>

          <div className="row g-2 mt-4">
            {data.states.list.map((state, i) => (
              <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={i}>
                <div className="p-2 text-center rounded bg-white bg-opacity-10 hover-bg-secondary transition" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <small className="fw-medium">{state}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODERN CTA */}
      <section className="section bg-primary text-white text-center">
        <div className="container py-4 fade-in-up" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="h1 fw-bold mb-4" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {data.cta}
          </h2>

          <div className="d-flex flex-column flex-md-row gap-4 justify-content-center align-items-center mt-5">
            <Link href="/contact" className="btn btn-secondary btn-xl px-5 py-3 fs-5 fw-bold shadow-lg">
              <i className="fas fa-comments me-2"></i>
              {isRTL ? "احصل على استشارة مجانية" : "Get Free Consultation"}
            </Link>
            <a href="tel:+1234567890" className="btn btn-outline-light btn-xl px-5 py-3 fs-5 fw-bold border-2">
              <i className="fas fa-phone-alt me-2"></i>
              {isRTL ? "اتصل بنا الآن" : "Call Us Now"}
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .last-child-no-border:last-child {
          border-right: none !important;
        }
        .hover-bg-secondary:hover {
          background-color: var(--secondary-color) !important;
          color: var(--primary-color) !important;
          transform: translateY(-2px);
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
