'use client'
import "@/styles/usa-visas.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { useI18n } from '@/lib/i18n'
import b1b2Data from '@/data/usa-visa-b1-b2.json'

export default function B1B2VisaPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? b1b2Data.ar : b1b2Data.en
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
                <span className="stat-number">10</span>
                <span className="stat-label">
                  {isRTL ? "سنوات الصلاحية" : "Years Validity"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6</span>
                <span className="stat-label">
                  {isRTL ? "أشهر لكل زيارة" : "Months Per Visit"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">$185</span>
                <span className="stat-label">
                  {isRTL ? "رسوم التأشيرة" : "Visa Fee"}
                </span>
              </div>
            </div>
            
            <div className="hero-actions">
              <a href="#requirements" className="btn btn-modern-primary">
                {isRTL ? "المتطلبات" : "Requirements"} →
              </a>
              <a href="#apply" className="btn btn-modern-secondary">
                {isRTL ? "كيفية التقديم" : "How to Apply"}
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
              <div className="col-md-4" key={i}>
                <div className="modern-card text-center">
                  <div className="card-icon">
                    <i className={`fas fa-${i === 0 ? 'briefcase' : i === 1 ? 'plane' : 'passport'}`}></i>
                  </div>
                  <h3>{type.name}</h3>
                  <p>{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
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
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>
                      <h4 className="h5 mb-2 text-white">{item}</h4>
                      <p className="text-light mb-0 small opacity-75">
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
      <section id="apply" className="section-modern soft-bg">
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
                      {i === 0 ? "📝" : i === 1 ? "💳" : i === 2 ? "📅" : 
                       i === 3 ? "📋" : i === 4 ? "🗣️" : "✅"}
                    </span>
                    <span className="timeline-step">{i + 1}</span>
                  </div>
                  <h4 className="h5 mb-2">{step}</h4>
                  <p className="text-muted small mb-0">
                    {isRTL ? "خطوة أساسية في عملية التقديم" : 
                     "Essential step in the application process"}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <div className="alert alert-gold bg-gradient-gold bg-opacity-10 border border-gold border-opacity-25 rounded-3 d-inline-flex align-items-center gap-3 px-4 py-3">
              <i className="fas fa-clock text-gold fs-4"></i>
              <div className="text-start">
                <h5 className="mb-1 fw-semibold">
                  {isRTL ? "مدة المعالجة" : "Processing Time"}
                </h5>
                <p className="mb-0 text-dark">{data.processing_time}</p>
              </div>
            </div>
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
                      <i className={`fas fa-${
                        i === 0 ? 'passport' : 
                        i === 1 ? 'file-alt' : 
                        i === 2 ? 'receipt' : 
                        i === 3 ? 'camera' : 
                        i === 4 ? 'money-bill' : 
                        i === 5 ? 'briefcase' :
                        i === 6 ? 'hotel' :
                        i === 7 ? 'home' : 'check-circle'
                      } text-primary`}></i>
                    </div>
                    <div>
                      <h4 className="h6 mb-2 fw-semibold">{r}</h4>
                      <p className="text-muted small mb-0">
                        {isRTL ? "مستند مطلوب" : "Required document"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERVIEW TIPS */}
      <section className="section-modern soft-bg">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.interview_tips.heading}
          </h2>
          
          <div className="row g-4 mt-5">
            {data.interview_tips.tips.map((tip, i) => (
              <div className="col-md-6" key={i}>
                <div className="modern-card">
                  <div className="d-flex align-items-start gap-3">
                    <div className="text-red fs-3">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <div>
                      <p className="mb-0">{tip}</p>
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
                      <i className="fas fa-exclamation-triangle"></i>
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
            {isRTL ? "ابدأ طلب تأشيرتك الأمريكية اليوم" : "Start Your US Visa Application Today"}
          </h2>
          <p className="cta-subtitle">
            {isRTL ? "دعنا نساعدك في كل خطوة من خطوات عملية التقديم" : 
             "Let us help you through every step of the application process"}
          </p>
          
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
            <a href="/contact" className="btn btn-modern-primary px-5 py-3">
              <i className="fas fa-calendar-check me-2"></i>
              {isRTL ? "احجز استشارة مجانية" : "Book Free Consultation"}
            </a>
            <a href="tel:+1234567890" className="btn btn-modern-secondary px-5 py-3">
              <i className="fas fa-phone-alt me-2"></i>
              {isRTL ? "اتصل بنا الآن" : "Call Now"}
            </a>
          </div>
          
          <div className="mt-5 pt-3">
            <div className="row g-4 justify-content-center">
              <div className="col-auto">
                <div className="d-flex align-items-center gap-2 text-white opacity-75">
                  <i className="fas fa-check-circle"></i>
                  <span>{isRTL ? "معالجة سريعة" : "Fast Processing"}</span>
                </div>
              </div>
              <div className="col-auto">
                <div className="d-flex align-items-center gap-2 text-white opacity-75">
                  <i className="fas fa-user-shield"></i>
                  <span>{isRTL ? "معلومات آمنة" : "Secure Information"}</span>
                </div>
              </div>
              <div className="col-auto">
                <div className="d-flex align-items-center gap-2 text-white opacity-75">
                  <i className="fas fa-headset"></i>
                  <span>24/7 {isRTL ? "الدعم" : "Support"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
