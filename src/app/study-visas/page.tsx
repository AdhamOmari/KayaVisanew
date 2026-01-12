'use client'
import "@/styles/study-visas.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import studyDataImport from '@/data/study-visas-main.json'

export default function StudyVisasPage() {
  const { locale } = useI18n()
  const studyData: any = studyDataImport
  const data = locale === 'ar' ? studyData.ar : studyData.en
  const isRTL = locale === 'ar'

  return (
    <>

      {/* MODERN HERO */}
      <section className="modern-hero">
        <div className="container">
          <div className="hero-content" dir={isRTL ? "rtl" : "ltr"}>
            <h1 className="hero-title">{data.title}</h1>
            <p className="hero-subtitle">{data.hero.subtitle}</p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">6</span>
                <span className="stat-label">
                  {isRTL ? "وجهات دراسية" : "Study Destinations"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">
                  {isRTL ? "مستويات تعليمية" : "Education Levels"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">
                  {isRTL ? "دعم كامل" : "Full Support"}
                </span>
              </div>
            </div>
            
            <div className="hero-actions">
              <a href="#destinations" className="btn btn-modern-primary">
                {isRTL ? "استكشف الوجهات" : "Explore Destinations"} →
              </a>
              <a href="/contact" className="btn btn-modern-secondary">
                {isRTL ? "استشارة مجانية" : "Free Consultation"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="section-modern soft-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="academic-banner text-center" dir={isRTL ? "rtl" : "ltr"}>
                <p className="lead mb-0">{data.intro}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.services.heading}
          </h2>
          <p className="text-center text-muted mb-5" dir={isRTL ? "rtl" : "ltr"}>
            {data.services.description}
          </p>
          
          <div className="row g-4 mt-4">
            {data.services.options.map((option: any, i: number) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="service-option text-center">
                  <div className="service-icon mx-auto">
                    <i className={`fas fa-${option.icon}`}></i>
                  </div>
                  <h5 className="mb-3">{option.name}</h5>
                  <p className="text-muted small mb-0">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONDITIONAL ADMISSION */}
      <section className="section-modern soft-bg">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.conditional_admission.heading}
          </h2>
          
          <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
              <div className="conditional-admission-box" dir={isRTL ? "rtl" : "ltr"}>
                <p className="lead mb-4">{data.conditional_admission.description}</p>
                
                <div className="mb-4 text-center">
                  {data.conditional_admission.countries.map((country: string, i: number) => (
                    <span key={i} className="country-tag">{country}</span>
                  ))}
                </div>
                
                <h5 className="mb-3">
                  {isRTL ? "الفوائد:" : "Benefits:"}
                </h5>
                <ul className="highlight-list">
                  {data.conditional_admission.benefits.map((benefit: string, i: number) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
                
                <div className="alert alert-info mt-4 mb-0" role="alert">
                  <i className="fas fa-lightbulb me-2"></i>
                  {data.conditional_admission.summary}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STUDY DESTINATIONS */}
      <section id="destinations" className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.destinations.heading}
          </h2>
          
          <div className="row g-4 mt-5">
            {data.destinations.countries.map((country: any, i: number) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <Link href={country.link} className="text-decoration-none">
                  <div className="destination-card h-100 p-4">
                    <div className="destination-icon">
                      <i className={`fas fa-${country.icon}`}></i>
                    </div>
                    
                    <div className="text-center mb-3">
                      <span className="badge bg-study-primary mb-2">{country.code}</span>
                      <h4>{country.name}</h4>
                    </div>
                    
                    <ul className="highlight-list">
                      {country.highlights.map((highlight: string, j: number) => (
                        <li key={j} className="small">{highlight}</li>
                      ))}
                    </ul>
                    
                    <div className="text-center mt-4">
                      <span className="text-study-primary fw-bold">
                        {isRTL ? "اعرف المزيد" : "Learn More"} →
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KAYA */}
      <section className="section-modern soft-bg">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.why_kaya.heading}
          </h2>
          
          <div className="row g-4 mt-5">
            {data.why_kaya.reasons.map((reason: string, i: number) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="glass-card text-center py-4 px-3" dir={isRTL ? "rtl" : "ltr"}>
                  <div className="text-gold fs-3 mb-3">
                    <i className={`fas fa-${
                      i === 0 ? 'award' : 
                      i === 1 ? 'user-check' : 
                      i === 2 ? 'handshake' : 
                      'life-ring'
                    }`}></i>
                  </div>
                  <p className="text-white mb-0 small">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODERN CTA */}
      <section className="modern-cta">
        <div className="cta-content" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="cta-title">
            {data.cta}
          </h2>
          
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center mt-4">
            <Link href="/contact" className="btn btn-modern-primary px-5 py-3">
              <i className="fas fa-graduation-cap me-2"></i>
              {isRTL ? "ابدأ رحلتك الآن" : "Start Your Journey"}
            </Link>
            <a href="tel:+1234567890" className="btn btn-modern-secondary px-5 py-3">
              <i className="fas fa-phone-alt me-2"></i>
              {isRTL ? "تحدث مع مستشار" : "Talk to Advisor"}
            </a>
          </div>
        </div>
      </section>

    </>
  )
}
