'use client'
import "@/styles/usa-visas.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { useI18n } from '@/lib/i18n'
import f1f2Data from '@/data/usa-visa-f1-f2.json'

export default function F1F2VisaPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? f1f2Data.ar : f1f2Data.en
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
                <span className="stat-number">$535</span>
                <span className="stat-label">
                  {isRTL ? "رسوم التقديم" : "Application Fees"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">OPT</span>
                <span className="stat-label">
                  {isRTL ? "تصريح العمل" : "Work Permission"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2-4</span>
                <span className="stat-label">
                  {isRTL ? "أسابيع المعالجة" : "Weeks Processing"}
                </span>
              </div>
            </div>
            
            <div className="hero-actions">
              <a href="#requirements" className="btn btn-modern-primary">
                {isRTL ? "المتطلبات" : "Requirements"} →
              </a>
              <a href="#work-options" className="btn btn-modern-secondary">
                {isRTL ? "فرص العمل" : "Work Options"}
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
          
          <div className="row g-4 mt-5">
            {data.visa_types.types.map((type, i) => (
              <div className="col-md-6" key={i}>
                <div className="modern-card text-center">
                  <div className="card-icon">
                    <i className={`fas fa-${i === 0 ? 'graduation-cap' : 'users'}`}></i>
                  </div>
                  <h3>{type.name}</h3>
                  <p>{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STUDY IN USA */}
      <section className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.why_choose.heading}
          </h2>
          
          <div className="row g-4 mt-5">
            {data.why_choose.reasons.map((item, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="glass-card" dir={isRTL ? "rtl" : "ltr"}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="text-gold fs-4">
                      <i className="fas fa-star"></i>
                    </div>
                    <div>
                      <p className="text-white mb-0">{item}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="section-modern soft-bg">
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
                      {i === 0 ? "🎓" : i === 1 ? "📄" : i === 2 ? "💰" : 
                       i === 3 ? "📝" : i === 4 ? "💳" : i === 5 ? "🗣️" :
                       i === 6 ? "📋" : "✅"}
                    </span>
                    <span className="timeline-step">{i + 1}</span>
                  </div>
                  <h4 className="h5 mb-2">{step}</h4>
                  <p className="text-muted small mb-0">
                    {isRTL ? "خطوة أساسية للدراسة في الولايات المتحدة" : 
                     "Essential step for studying in the United States"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK OPPORTUNITIES */}
      <section id="work-options" className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.work_options.heading}
          </h2>
          
          <div className="row g-4 mt-5">
            {data.work_options.options.map((option, i) => (
              <div className="col-md-6" key={i}>
                <div className="modern-card">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-usa-navy bg-opacity-10 p-2 rounded-2">
                      <i className="fas fa-briefcase text-primary"></i>
                    </div>
                    <div>
                      <p className="mb-0">{option}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements" className="section-modern soft-bg">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.application_requirements.heading}
          </h2>
          
          <div className="row g-4 mt-5">
            {data.application_requirements.requirements.map((r, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="modern-card">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-usa-red bg-opacity-10 p-2 rounded-2">
                      <i className="fas fa-check-circle text-red"></i>
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
            {isRTL ? "احصل على قبول جامعي وتأشيرة طالب بمساعدة خبرائنا" : 
             "Get university admission and student visa with help from our experts"}
          </p>
          
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
            <a href="/contact" className="btn btn-modern-primary px-5 py-3">
              <i className="fas fa-graduation-cap me-2"></i>
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
