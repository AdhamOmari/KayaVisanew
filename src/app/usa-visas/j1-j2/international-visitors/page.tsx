'use client'
import "bootstrap/dist/css/bootstrap.min.css"

import { useI18n } from '@/lib/i18n'
import internationalVisitorsData from '@/data/usa-visa-j1-international-visitors.json'

export default function InternationalVisitorsPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? internationalVisitorsData.ar : internationalVisitorsData.en
  const isRTL = locale === 'ar'

  return (
    <>

      {/* HERO SECTION */}
      <section className="hero-section" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay" style={{background: 'rgba(26, 32, 44, 0.7)'}}></div>
        <div className="container">
          <div className="hero-content text-center" dir={isRTL ? "rtl" : "ltr"}>
            <h1 className="hero-title">{data.title}</h1>
            <p className="hero-subtitle">{data.hero.subtitle}</p>

            <div className="d-flex justify-content-center gap-4 mt-5 flex-wrap">
              <div className="text-center">
                <div className="display-4 fw-bold text-white">2-6</div>
                <div className="text-white-50">
                  {isRTL ? "أسابيع" : "Weeks"}
                </div>
              </div>
              <div className="text-center">
                <div className="display-4 fw-bold text-white">Professional</div>
                <div className="text-white-50">
                  {isRTL ? "مهني" : "Exchange"}
                </div>
              </div>
              <div className="text-center">
                <div className="display-4 fw-bold text-white">$160</div>
                <div className="text-white-50">
                  {isRTL ? "رسوم التأشيرة" : "Visa Fee"}
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap">
              <a href="#benefits" className="btn btn-primary">
                {isRTL ? "المزايا" : "Benefits"}
              </a>
              <a href="#application" className="btn btn-secondary">
                {isRTL ? "عملية التقديم" : "Application"}
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
          <div className="row g-4 mt-5 justify-content-center">
            <div className="col-lg-8">
              <p className="lead text-center" dir={isRTL ? "rtl" : "ltr"}>
                {data.overview.description}
              </p>
              <p className="text-center mt-4" dir={isRTL ? "rtl" : "ltr"}>
                {data.overview.additional}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY REQUIREMENTS */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.eligibility.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.eligibility.requirements.map((req: string, i: number) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100">
                  <div className="card-body text-center">
                    <div className="feature-icon mb-3">
                      <i className={`fas fa-${i === 0 ? 'briefcase' : i === 1 ? 'crown' : i === 2 ? 'language' : i === 3 ? 'share' : i === 4 ? 'shield-alt' : 'trophy'} fs-2 text-primary`}></i>
                    </div>
                    <p className="card-text small">{req}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM DETAILS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.program_details.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.program_details.details.map((detail: any, i: number) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card h-100">
                  <div className="card-header text-center">
                    <h6 className="mb-0">{detail.title}</h6>
                  </div>
                  <div className="card-body text-center">
                    <p className="small mb-0">{detail.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.benefits.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.benefits.benefits.map((benefit: string, i: number) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-start gap-3">
                      <div className="feature-icon">
                        <i className={`fas fa-${i === 0 ? 'network-wired' : i === 1 ? 'building' : i === 2 ? 'user-tie' : i === 3 ? 'heart' : i === 4 ? 'chart-line' : i === 5 ? 'users' : 'handshake'} text-primary`}></i>
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

      {/* APPLICATION PROCESS */}
      <section id="application" className="section">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.application_process.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.application_process.steps.map((step: string, i: number) => (
              <div className="col-md-10 col-lg-8" key={i}>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <span className="fs-2">
                        {i === 0 ? "🏢" : i === 1 ? "📝" : i === 2 ? "📧" : i === 3 ? "🗣️" : i === 4 ? "💰" : "🚀"}
                      </span>
                      <span className="fs-4 fw-bold badge bg-primary">{i + 1}</span>
                    </div>
                    <h4 className="h5 mb-2">{step}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTES */}
      <section className="section bg-warning bg-opacity-10">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            <i className="fas fa-exclamation-triangle text-warning me-2"></i>
            {isRTL ? "ملاحظات مهمة" : "Important Notes"}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.important_notes.map((note: string, i: number) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100 border-warning shadow-sm">
                  <div className="card-body">
                    <div className="d-flex align-items-start gap-3">
                      <div className="bg-warning bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                        <i className="fas fa-info-circle text-warning"></i>
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 fw-medium">{note}</p>
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
              {isRTL ? "ابدأ رحلة التبادل المهني اليوم" : "Start Your Professional Exchange Journey Today"}
            </h2>
            <p className="section-subtitle text-white-50">
              {isRTL ? "احصل على المساعدة للتقديم لبرنامج الزائرون الدوليون مع خبرائنا" :
               "Get help applying for the International Visitors program with our experts"}
            </p>

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
          </div>
        </div>
      </section>

    </>
  )
}