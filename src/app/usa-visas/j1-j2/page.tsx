'use client'
import "@/styles/usa-visas.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { useI18n } from '@/lib/i18n'
import j1j2Data from '@/data/usa-visa-j1-j2.json'

export default function J1J2VisaPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? j1j2Data.ar : j1j2Data.en
  const isRTL = locale === 'ar'

  return (
    <>

      {/* MODERN HERO */}
      <section className="modern-hero">
        <div className="container">
          <div className="hero-content" dir={isRTL ? "rtl" : "ltr"}>
            <h1 className="hero-title">{data.title}</h1>
            <p className="hero-subtitle">{data.intro}</p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">14+</span>
                <span className="stat-label">
                  {isRTL ? "فئات البرامج" : "Program Categories"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">J2</span>
                <span className="stat-label">
                  {isRTL ? "تصريح عمل للمرافقين" : "Dependent Work Auth"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">$160</span>
                <span className="stat-label">
                  {isRTL ? "رسوم التأشيرة" : "Visa Fee"}
                </span>
              </div>
            </div>
            
            <div className="hero-actions">
              <a href="#categories" className="btn btn-modern-primary">
                {isRTL ? "فئات البرامج" : "Program Categories"} →
              </a>
              <a href="#requirements" className="btn btn-modern-secondary">
                {isRTL ? "المتطلبات" : "Requirements"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="section-modern soft-bg">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.overview.heading}
          </h2>
          <p className="section-subtitle" dir={isRTL ? "rtl" : "ltr"}>
            {data.overview.description}
          </p>
        </div>
      </section>

      {/* PROGRAM CATEGORIES */}
      <section id="categories" className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.program_categories.heading}
          </h2>
          
          <div className="row g-4 mt-5">
            {data.program_categories.categories.map((cat, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="modern-card text-center">
                  <div className="card-icon">
                    <i className={`fas fa-${
                      i === 0 ? 'suitcase-rolling' : 
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
                  <h5 className="mt-3">{cat.name}</h5>
                  <p className="text-muted small">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-modern soft-bg">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.why_choose.heading}
          </h2>
          
          <div className="row g-4 mt-5">
            {data.why_choose.reasons.map((reason, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="glass-card" dir={isRTL ? "rtl" : "ltr"}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="text-gold fs-4">
                      <i className="fas fa-star"></i>
                    </div>
                    <div>
                      <p className="text-white mb-0">{reason}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.how_to_apply.heading}
          </h2>
          
          <div className="process-timeline mt-5">
            {data.how_to_apply.steps.map((step, i) => (
              <div className="timeline-item" key={i}>
                <div className="modern-card">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span className="fs-2">
                      {i === 0 ? "🏢" : i === 1 ? "📄" : i === 2 ? "💰" : 
                       i === 3 ? "📝" : i === 4 ? "🗣️" : i === 5 ? "📋" : "✅"}
                    </span>
                    <span className="timeline-step">{i + 1}</span>
                  </div>
                  <h4 className="h5 mb-2">{step}</h4>
                  <p className="text-muted small mb-0">
                    {isRTL ? "خطوة أساسية للتبادل الثقافي" : 
                     "Essential step for cultural exchange"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* J2 DEPENDENT VISA */}
      <section className="section-modern soft-bg">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.j2_dependent_visa.heading}
          </h2>
          <p className="section-subtitle" dir={isRTL ? "rtl" : "ltr"}>
            {data.j2_dependent_visa.description}
          </p>
          
          <div className="row g-4 mt-5">
            {data.j2_dependent_visa.benefits.map((benefit, i) => (
              <div className="col-md-6" key={i}>
                <div className="modern-card">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-usa-navy bg-opacity-10 p-2 rounded-2">
                      <i className="fas fa-check text-primary"></i>
                    </div>
                    <div>
                      <p className="mb-0">{benefit}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements" className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.application_requirements.heading}
          </h2>
          
          <div className="row g-4 mt-5">
            {data.application_requirements.requirements.map((r, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="modern-card">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-usa-navy bg-opacity-10 p-2 rounded-2">
                      <i className="fas fa-check-circle text-primary"></i>
                    </div>
                    <div>
                      <p className="mb-0 small">{r}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO-YEAR RULE */}
      <section className="section-modern soft-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="glass-card" dir={isRTL ? "rtl" : "ltr"}>
                <div className="d-flex align-items-start gap-3">
                  <div className="text-gold fs-2">
                    <i className="fas fa-exclamation-triangle"></i>
                  </div>
                  <div>
                    <h4 className="text-white mb-3">
                      {isRTL ? "قاعدة السنتين" : "Two-Year Home Residency Requirement"}
                    </h4>
                    <p className="text-white mb-0">
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
      <section className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {isRTL ? "ملاحظات مهمة" : "Important Notes"}
          </h2>
          
          <div className="row g-4 mt-5 justify-content-center">
            {data.important_notes.map((note, i) => (
              <div className="col-md-6" key={i}>
                <div className="glass-card" dir={isRTL ? "rtl" : "ltr"}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="text-gold fs-4">
                      <i className="fas fa-info-circle"></i>
                    </div>
                    <div>
                      <p className="text-white mb-0">{note}</p>
                    </div>
                  </div>
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
          <p className="cta-subtitle">
            {isRTL ? "احصل على برنامج التبادل الثقافي المناسب لك بمساعدة خبرائنا" : 
             "Get the right cultural exchange program with help from our experts"}
          </p>
          
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
            <a href="/contact" className="btn btn-modern-primary px-5 py-3">
              <i className="fas fa-handshake me-2"></i>
              {isRTL ? "استشارة مجانية" : "Free Consultation"}
            </a>
            <a href="tel:+1234567890" className="btn btn-modern-secondary px-5 py-3">
              <i className="fas fa-phone-alt me-2"></i>
              {isRTL ? "اتصل الآن" : "Call Now"}
            </a>
          </div>
        </div>
      </section>

    </>
  )
}
