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
      <section className="hero-section" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="hero-overlay" style={{background: 'rgba(26, 32, 44, 0.7)'}}></div>
        <div className="container">
          <div className="hero-content text-center" dir={isRTL ? "rtl" : "ltr"}>
            <h1 className="hero-title">{data.title}</h1>
            <p className="hero-subtitle">{data.intro}</p>

            <div className="d-flex justify-content-center gap-4 mt-5 flex-wrap">
              <div className="text-center">
                <div className="display-4 fw-bold text-white">$185</div>
                <div className="text-white-50">
                  {isRTL ? "رسوم التأشيرة" : "Visa Fee"}
                </div>
              </div>
              <div className="text-center">
                <div className="display-4 fw-bold text-white">$350</div>
                <div className="text-white-50">
                  {isRTL ? "رسوم SEVIS" : "SEVIS Fee"}
                </div>
              </div>
              <div className="text-center">
                <div className="display-4 fw-bold text-white">OPT</div>
                <div className="text-white-50">
                  {isRTL ? "تصريح العمل" : "Work Permit"}
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap">
              <a href="#why-choose" className="btn btn-primary">
                {isRTL ? "لماذا أمريكا" : "Why America"}
              </a>
              <a href="#application-process" className="btn btn-secondary">
                {isRTL ? "عملية التقديم" : "Application Process"}
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
        </div>
      </section>

      {/* WHY CHOOSE AMERICA */}
      <section id="why-choose" className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.why_choose.heading}
          </h2>
          <p className="section-subtitle text-center mb-5" dir={isRTL ? "rtl" : "ltr"}>
            {data.why_choose.intro}
          </p>

          <div className="row g-4 justify-content-center">
            {data.why_choose.reasons.map((reason, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card h-100">
                  <div className="card-body text-center">
                    <div className="feature-icon mb-3">
                      <i className={`fas fa-${i === 0 ? 'university' : i === 1 ? 'globe-americas' : i === 2 ? 'lightbulb' : 'calendar-check'} fs-2`}></i>
                    </div>
                    <h5 className="card-title">{reason.title}</h5>
                    <p className="card-text small">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVAILABLE PROGRAMS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.available_programs.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.available_programs.programs.map((program, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100">
                  <div className="card-body text-center">
                    <div className="feature-icon mb-3">
                      <i className={`fas fa-${i === 0 ? 'language' : i === 1 ? 'graduation-cap' : 'clipboard-check'} fs-2`}></i>
                    </div>
                    <h5 className="card-title h6">{program}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTIMATED COSTS */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.estimated_costs.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header text-center">
                  <i className="fas fa-dollar-sign me-2 text-success"></i>
                  {data.estimated_costs.tuition_fees.title}
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    {data.estimated_costs.tuition_fees.details.map((detail, i) => (
                      <li key={i} className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        <small>{detail}</small>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header text-center">
                  <i className="fas fa-home me-2 text-info"></i>
                  {data.estimated_costs.living_expenses.title}
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    {data.estimated_costs.living_expenses.details.map((detail, i) => (
                      <li key={i} className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        <small>{detail}</small>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOST IN-DEMAND MAJORS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.in_demand_majors.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.in_demand_majors.majors.map((major, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card h-100">
                  <div className="card-body text-center">
                    <div className="feature-icon mb-3">
                      <i className={`fas fa-${i === 0 ? 'laptop-code' : i === 1 ? 'briefcase' : i === 2 ? 'stethoscope' : 'comments'} fs-2`}></i>
                    </div>
                    <h6 className="card-title">{major}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT LIFE */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.student_life.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header text-center">
                  <i className="fas fa-city me-2 text-primary"></i>
                  {data.student_life.major_cities.title}
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    {data.student_life.major_cities.cities.map((city, i) => (
                      <li key={i} className="mb-2">
                        <i className="fas fa-map-marker-alt text-primary me-2"></i>
                        <small>{city}</small>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header text-center">
                  <i className="fas fa-users me-2 text-success"></i>
                  {data.student_life.activities.title}
                </div>
                <div className="card-body">
                  <p className="small mb-0">{data.student_life.activities.description}</p>
                </div>
              </div>

              <div className="card h-100 mt-3">
                <div className="card-header text-center">
                  <i className="fas fa-globe-americas me-2 text-info"></i>
                  {data.student_life.diversity.title}
                </div>
                <div className="card-body">
                  <p className="small mb-0">{data.student_life.diversity.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK OPPORTUNITIES */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.work_opportunities.heading}
          </h2>

          {/* During Study */}
          <div className="mb-5">
            <h3 className="text-center mb-4" dir={isRTL ? "rtl" : "ltr"}>
              <i className="fas fa-book-open me-2 text-primary"></i>
              {data.work_opportunities.during_study.title}
            </h3>
            <div className="row g-4 justify-content-center">
              {data.work_opportunities.during_study.options.map((option, i) => (
                <div className="col-md-6" key={i}>
                  <div className="card h-100">
                    <div className="card-header">
                      <i className={`fas fa-${i === 0 ? 'building' : 'project-diagram'} me-2 text-primary`}></i>
                      {option.name}
                    </div>
                    <div className="card-body">
                      <p className="small mb-0">{option.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* After Graduation */}
          <div>
            <h3 className="text-center mb-4" dir={isRTL ? "rtl" : "ltr"}>
              <i className="fas fa-graduation-cap me-2 text-success"></i>
              {data.work_opportunities.after_graduation.title}
            </h3>
            <div className="row g-4 justify-content-center">
              {data.work_opportunities.after_graduation.options.map((option, i) => (
                <div className="col-md-4" key={i}>
                  <div className="card h-100">
                    <div className="card-header text-center">
                      <i className={`fas fa-${i === 0 ? 'briefcase' : i === 1 ? 'clock' : 'plane'} me-2 text-success`}></i>
                      {option.name}
                    </div>
                    <div className="card-body">
                      <p className="small text-center mb-0">{option.description}</p>
                    </div>
                  </div>
                </div>
              ))}
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
              <div className="col-md-6" key={i}>
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-start gap-3">
                      <div className="feature-icon">
                        <i className={`fas fa-${i === 0 ? 'graduation-cap' : 'users'} fs-2`}></i>
                      </div>
                      <div>
                        <h4 className="h5 mb-2">{type.name}</h4>
                        <p className="small mb-0">{type.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section id="application-process" className="section">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.application_process.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.application_process.steps.map((step, i) => (
              <div className="col-md-10 col-lg-8" key={i}>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <span className="fs-2">
                        {i === 0 ? "🎓" : i === 1 ? "💰" : i === 2 ? "💻" :
                         i === 3 ? "💵" : i === 4 ? "📅" : i === 5 ? "🗣️" : "✅"}
                      </span>
                      <span className="fs-4 fw-bold badge bg-primary">{i + 1}</span>
                    </div>
                    <h4 className="h5 mb-2">{step}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Explanation */}
          <div className="mt-5">
            <h3 className="text-center mb-4" dir={isRTL ? "rtl" : "ltr"}>
              {data.application_process.detailed_explanation.heading}
            </h3>
            <div className="accordion" id="applicationAccordion">
              {data.application_process.detailed_explanation.steps.map((step, i) => (
                <div className="accordion-item" key={i}>
                  <h4 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${i}`}>
                      {step.step}
                    </button>
                  </h4>
                  <div id={`collapse${i}`} className="accordion-collapse collapse" data-bs-parent="#applicationAccordion">
                    <div className="accordion-body">
                      {step.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GOLDEN TIPS */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.golden_tips.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.golden_tips.tips.map((tip, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-start gap-3">
                      <div className="feature-icon">
                        <i className="fas fa-lightbulb text-warning"></i>
                      </div>
                      <div>
                        <p className="mb-0 small">{tip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIRED DOCUMENTS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.required_documents.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.required_documents.documents.map((doc, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-start gap-3">
                      <div className="feature-icon">
                        <i className={`fas fa-${i === 0 ? 'passport' : i === 1 ? 'file-alt' : i === 2 ? 'money-bill' : i === 3 ? 'camera' : i === 4 ? 'receipt' : i === 5 ? 'image' : i === 6 ? 'language' : 'calendar'} text-primary`}></i>
                      </div>
                      <div>
                        <p className="mb-0 small">{doc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WITH KAYA */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="text-center" dir={isRTL ? "rtl" : "ltr"}>
            <h2 className="section-title text-white">
              {data.with_kaya.heading}
            </h2>

            <div className="row g-4 mt-5 justify-content-center">
              {data.with_kaya.services.map((service, i) => (
                <div className="col-md-6 col-lg-4" key={i}>
                  <div className="card bg-white text-dark h-100">
                    <div className="card-body text-center">
                      <div className="feature-icon mb-3">
                        <i className={`fas fa-${i === 0 ? 'search' : i === 1 ? 'file-signature' : i === 2 ? 'hands-helping' : 'plane'} text-primary fs-2`}></i>
                      </div>
                      <p className="card-text small">{service}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <p className="section-subtitle text-white-50">
                {data.with_kaya.conclusion}
              </p>
            </div>

            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center mt-5">
              <a href="/contact" className="btn btn-light text-primary">
                <i className="fas fa-calendar-check me-2"></i>
                {isRTL ? "احجز استشارة مجانية" : "Book Free Consultation"}
              </a>
              <a href="tel:+1234567890" className="btn btn-outline-light">
                <i className="fas fa-phone-alt me-2"></i>
                {isRTL ? "اتصل بنا الآن" : "Call Now"}
              </a>
            </div>

            <div className="row g-4 justify-content-center mt-5">
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
