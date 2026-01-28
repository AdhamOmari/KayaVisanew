'use client'
import "bootstrap/dist/css/bootstrap.min.css"

import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import m1m2Data from '@/data/usa-visa-m1-m2.json'

export default function M1M2VisaPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? m1m2Data.ar : m1m2Data.en
  const isRTL = locale === 'ar'

  return (
    <>

      {/* HERO SECTION */}
      <section className="hero-section" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="hero-overlay" style={{background: 'rgba(26, 32, 44, 0.7)'}}></div>
        <div className="container">
          <div className="hero-content text-center" dir={isRTL ? "rtl" : "ltr"}>
            <h1 className="hero-title">{data.title}</h1>
            <p className="hero-subtitle">{data.hero.subtitle}</p>

            <div className="d-flex justify-content-center gap-4 mt-5 flex-wrap">
              <div className="text-center">
                <div className="display-4 fw-bold text-white">M1-M2</div>
                <div className="text-white-50">
                  {isRTL ? "مهني" : "Vocational"}
                </div>
              </div>
              <div className="text-center">
                <div className="display-4 fw-bold text-white">6-24</div>
                <div className="text-white-50">
                  {isRTL ? "أشهر" : "Months"}
                </div>
              </div>
              <div className="text-center">
                <div className="display-4 fw-bold text-white">$350</div>
                <div className="text-white-50">
                  {isRTL ? "رسوم SEVIS" : "SEVIS Fee"}
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap">
              <a href="#program-types" className="btn btn-primary">
                {isRTL ? "أنواع البرامج" : "Program Types"}
              </a>
              <a href="#requirements" className="btn btn-secondary">
                {isRTL ? "المتطلبات" : "Requirements"}
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
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.visa_types.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.visa_types.types.map((type, i) => (
              <div className="col-md-6 col-lg-5" key={i}>
                <div className="card h-100">
                  <div className="card-body text-center">
                    <div className="feature-icon mb-3">
                      <i className={`fas fa-${type.icon} fs-2`}></i>
                    </div>
                    <h4 className="card-title h5">{type.name}</h4>
                    <p className="card-text small">{type.description}</p>
                    <div className="mt-3">
                      {type.features.slice(0, 2).map((feature, j) => (
                        <small key={j} className="d-block text-muted">
                          • {feature}
                        </small>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM TYPES */}
      <section id="program-types" className="section">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.program_types.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.program_types.programs.map((program, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card h-100">
                  <div className="card-body text-center">
                    <div className="feature-icon mb-3">
                      <i className={`fas fa-${program.icon} fs-2`}></i>
                    </div>
                    <h5 className="card-title">{program.name}</h5>
                    <p className="card-text small">{program.description}</p>
                    <div className="mt-auto">
                      <span className="badge bg-primary">{program.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements" className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.requirements.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-header text-center">
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

            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-header text-center">
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

            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-header text-center">
                  <i className="fas fa-file-alt me-2 text-info"></i>
                  {isRTL ? "متطلبات أخرى" : "Other Requirements"}
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    {data.requirements.other.map((req, i) => (
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
      <section className="section">
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
                         i === 3 ? "💻" : i === 4 ? "📅" : i === 5 ? "🗣️" : "✅"}
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

      {/* WORK AUTHORIZATION */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.work_options.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <ul className="list-unstyled">
                    {data.work_options.options.map((option, i) => (
                      <li key={i} className="mb-3 d-flex align-items-start gap-2">
                        <i className="fas fa-info-circle text-info mt-1"></i>
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

      {/* ADVANTAGES */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.advantages.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.advantages.benefits.map((benefit, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-start gap-3">
                      <div className="feature-icon">
                        <i className="fas fa-check-circle text-success"></i>
                      </div>
                      <div>
                        <p className="mb-0 small">{benefit}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTITUTIONS */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.institutions.heading}
          </h2>

          <div className="row g-3 mt-5 justify-content-center">
            {data.institutions.schools.map((school, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card">
                  <div className="card-body text-center">
                    <i className="fas fa-university text-primary mb-2"></i>
                    <h6 className="card-title mb-0">{school}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTES */}
      <section className="section">
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