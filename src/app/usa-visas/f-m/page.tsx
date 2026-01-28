'use client'
import "bootstrap/dist/css/bootstrap.min.css"

import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import fmData from '@/data/usa-visa-f-m.json'

export default function FMVisaPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? fmData.ar : fmData.en
  const isRTL = locale === 'ar'

  return (
    <>

      {/* HERO SECTION */}
      <section className="hero-section" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="hero-overlay" style={{background: 'rgba(26, 32, 44, 0.7)'}}></div>
        <div className="container">
          <div className="hero-content text-center" dir={isRTL ? "rtl" : "ltr"}>
            <h1 className="hero-title">{data.title}</h1>
            <p className="hero-subtitle">{data.hero.subtitle}</p>

            <div className="d-flex justify-content-center gap-4 mt-5 flex-wrap">
              <div className="text-center">
                <div className="display-4 fw-bold text-white">F1-F2</div>
                <div className="text-white-50">
                  {isRTL ? "أكاديمي" : "Academic"}
                </div>
              </div>
              <div className="text-center">
                <div className="display-4 fw-bold text-white">M1-M2</div>
                <div className="text-white-50">
                  {isRTL ? "مهني" : "Vocational"}
                </div>
              </div>
              <div className="text-center">
                <div className="display-4 fw-bold text-white">OPT</div>
                <div className="text-white-50">
                  {isRTL ? "تدريب عملي" : "Work Training"}
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap">
              <a href="#visa-types" className="btn btn-primary">
                {isRTL ? "استكشف الأنواع" : "Explore Types"}
              </a>
              <a href="#comparison" className="btn btn-secondary">
                {isRTL ? "قارن التأشيرات" : "Compare Visas"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.overview.heading}
          </h2>
          <p className="section-subtitle text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.overview.description}
          </p>

          <div className="row g-4 mt-5 justify-content-center">
            <div className="col-md-8">
              <p className="lead text-center" dir={isRTL ? "rtl" : "ltr"}>
                {data.overview.additional}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISA TYPES */}
      <section id="visa-types" className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.visa_types.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.visa_types.types.map((type, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card text-center h-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className="feature-icon mb-3">
                      <i className={`fas fa-${type.icon} fs-2`}></i>
                    </div>
                    <h4 className="card-title h5">{type.name}</h4>
                    <p className="card-text small">{type.description}</p>
                    <div className="mt-auto">
                      <small className="text-muted">
                        {type.features.slice(0, 2).join(' • ')}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="row g-4 mt-5 justify-content-center">
            <div className="col-md-6">
              <Link href="/usa-visas/f1-f2" className="text-decoration-none">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <div className="feature-icon mb-3">
                      <i className="fas fa-graduation-cap text-primary fs-2"></i>
                    </div>
                    <h5 className="card-title">{isRTL ? "الدراسة الأكاديمية F1-F2" : "Academic Study F1-F2"}</h5>
                    <p className="card-text small text-muted">
                      {isRTL ? "تفاصيل كاملة عن التأشيرة الأكاديمية" : "Complete details about academic visa"}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6">
              <div className="card h-100 opacity-50">
                <div className="card-body text-center">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-tools text-secondary fs-2"></i>
                  </div>
                  <h5 className="card-title">{isRTL ? "الدراسة المهنية M1-M2" : "Vocational Study M1-M2"}</h5>
                  <p className="card-text small text-muted">
                    {isRTL ? "قريباً - سيتم توفير التفاصيل" : "Coming Soon - Details will be available"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section id="comparison" className="section">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.comparison.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {/* F Visa Column */}
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header bg-primary text-white text-center">
                  <i className="fas fa-graduation-cap me-2"></i>
                  {data.comparison.f_visa.title}
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <h6 className="text-success">
                      <i className="fas fa-plus-circle me-2"></i>
                      {isRTL ? "المزايا" : "Advantages"}
                    </h6>
                    <ul className="list-unstyled">
                      {data.comparison.f_visa.pros.map((pro, i) => (
                        <li key={i} className="mb-2">
                          <i className="fas fa-check text-success me-2"></i>
                          <small>{pro}</small>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h6 className="text-warning">
                      <i className="fas fa-minus-circle me-2"></i>
                      {isRTL ? "العيوب" : "Disadvantages"}
                    </h6>
                    <ul className="list-unstyled">
                      {data.comparison.f_visa.cons.map((con, i) => (
                        <li key={i} className="mb-2">
                          <i className="fas fa-times text-warning me-2"></i>
                          <small>{con}</small>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* M Visa Column */}
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header bg-secondary text-white text-center">
                  <i className="fas fa-tools me-2"></i>
                  {data.comparison.m_visa.title}
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <h6 className="text-success">
                      <i className="fas fa-plus-circle me-2"></i>
                      {isRTL ? "المزايا" : "Advantages"}
                    </h6>
                    <ul className="list-unstyled">
                      {data.comparison.m_visa.pros.map((pro, i) => (
                        <li key={i} className="mb-2">
                          <i className="fas fa-check text-success me-2"></i>
                          <small>{pro}</small>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h6 className="text-warning">
                      <i className="fas fa-minus-circle me-2"></i>
                      {isRTL ? "العيوب" : "Disadvantages"}
                    </h6>
                    <ul className="list-unstyled">
                      {data.comparison.m_visa.cons.map((con, i) => (
                        <li key={i} className="mb-2">
                          <i className="fas fa-times text-warning me-2"></i>
                          <small>{con}</small>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.requirements.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header">
                  <i className="fas fa-graduation-cap me-2 text-primary"></i>
                  {isRTL ? "المتطلبات الأكاديمية" : "Academic Requirements"}
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    {data.requirements.academic.map((req, i) => (
                      <li key={i} className="mb-2 d-flex align-items-start gap-2">
                        <i className="fas fa-check-circle text-success mt-1"></i>
                        <span className="small">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header">
                  <i className="fas fa-dollar-sign me-2 text-success"></i>
                  {isRTL ? "المتطلبات المالية" : "Financial Requirements"}
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    {data.requirements.financial.map((req, i) => (
                      <li key={i} className="mb-2 d-flex align-items-start gap-2">
                        <i className="fas fa-check-circle text-success mt-1"></i>
                        <span className="small">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.process.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.process.steps.map((step, i) => (
              <div className="col-md-10 col-lg-8" key={i}>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <span className="fs-2">
                        {i === 0 ? "🎓" : i === 1 ? "📄" : i === 2 ? "💰" :
                         i === 3 ? "💻" : i === 4 ? "📅" : "✅"}
                      </span>
                      <span className="fs-4 fw-bold badge bg-primary">{i + 1}</span>
                    </div>
                    <h4 className="h5 mb-2">{step}</h4>
                    <p className="text-muted small mb-0">
                      {isRTL ? "خطوة أساسية في عملية التقديم" :
                       "Essential step in the application process"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK OPPORTUNITIES */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.work_options.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header bg-primary text-white text-center">
                  <i className="fas fa-graduation-cap me-2"></i>
                  F {isRTL ? "تأشيرات" : "Visas"} - {isRTL ? "خيارات العمل" : "Work Options"}
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    {data.work_options.f_options.map((option, i) => (
                      <li key={i} className="mb-2 d-flex align-items-start gap-2">
                        <i className="fas fa-briefcase text-primary mt-1"></i>
                        <span className="small">{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header bg-secondary text-white text-center">
                  <i className="fas fa-tools me-2"></i>
                  M {isRTL ? "تأشيرات" : "Visas"} - {isRTL ? "خيارات العمل" : "Work Options"}
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    {data.work_options.m_options.map((option, i) => (
                      <li key={i} className="mb-2 d-flex align-items-start gap-2">
                        <i className="fas fa-wrench text-secondary mt-1"></i>
                        <span className="small">{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTES */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {isRTL ? "ملاحظات مهمة" : "Important Notes"}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.important_notes.map((note, i) => (
              <div className="col-md-6" key={i}>
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-start gap-3">
                      <div className="feature-icon">
                        <i className="fas fa-exclamation-triangle text-warning"></i>
                      </div>
                      <div>
                        <p className="mb-0 small">{note}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="text-center" dir={isRTL ? "rtl" : "ltr"}>
            <h2 className="section-title text-white">
              {data.cta}
            </h2>
            <p className="section-subtitle text-white-50">
              {isRTL ? "دعنا نساعدك في كل خطوة من خطوات عملية التقديم" :
               "Let us help you through every step of the application process"}
            </p>

            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center my-5">
              <Link href="/contact" className="btn btn-light text-primary">
                <i className="fas fa-calendar-check me-2"></i>
                {isRTL ? "احجز استشارة مجانية" : "Book Free Consultation"}
              </Link>
              <a href="tel:+1234567890" className="btn btn-outline-light">
                <i className="fas fa-phone-alt me-2"></i>
                {isRTL ? "اتصل بنا الآن" : "Call Now"}
              </a>
            </div>

            <div className="row g-4 justify-content-center">
              <div className="col-auto">
                <div className="d-flex align-items-center gap-2 text-white-75">
                  <i className="fas fa-check-circle"></i>
                  <span>{isRTL ? "معالجة سريعة" : "Fast Processing"}</span>
                </div>
              </div>
              <div className="col-auto">
                <div className="d-flex align-items-center gap-2 text-white-75">
                  <i className="fas fa-user-shield"></i>
                  <span>{isRTL ? "معلومات آمنة" : "Secure Information"}</span>
                </div>
              </div>
              <div className="col-auto">
                <div className="d-flex align-items-center gap-2 text-white-75">
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