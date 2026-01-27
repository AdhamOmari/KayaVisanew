'use client'
import "bootstrap/dist/css/bootstrap.min.css"

import { useI18n } from '@/lib/i18n'
import collegeStudentData from '@/data/usa-visa-j1-college-student.json'

export default function CollegeStudentPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? collegeStudentData.ar : collegeStudentData.en
  const isRTL = locale === 'ar'

  return (
    <>

      {/* HERO SECTION */}
      <section className="hero-section" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
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
                <div className="display-4 fw-bold text-white">1-4</div>
                <div className="text-white-50">
                  {isRTL ? "سنوات" : "Years"}
                </div>
              </div>
              <div className="text-center">
                <div className="display-4 fw-bold text-white">University</div>
                <div className="text-white-50">
                  {isRTL ? "دراسة" : "Education"}
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
              <a href="#academic-programs" className="btn btn-primary">
                {isRTL ? "البرامج الأكاديمية" : "Academic Programs"}
              </a>
              <a href="#university-types" className="btn btn-secondary">
                {isRTL ? "أنواع الجامعات" : "University Types"}
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
                      <i className={`fas fa-${i === 0 ? 'university' : i === 1 ? 'dollar-sign' : i === 2 ? 'language' : i === 3 ? 'passport' : i === 4 ? 'shield-alt' : 'home'} fs-2 text-primary`}></i>
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

      {/* ACADEMIC PROGRAMS */}
      <section id="academic-programs" className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.academic_programs.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.academic_programs.categories.map((category: any, i: number) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-start gap-3">
                      <div className="feature-icon">
                        <i className={`fas fa-${i === 0 ? 'book-open' : i === 1 ? 'flask' : i === 2 ? 'chart-line' : i === 3 ? 'heartbeat' : i === 4 ? 'palette' : 'briefcase'} fs-2 text-success`}></i>
                      </div>
                      <div>
                        <h5 className="card-title h6">{category.name}</h5>
                        <p className="card-text small">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
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
                        <i className={`fas fa-${i === 0 ? 'graduation-cap' : i === 1 ? 'microscope' : i === 2 ? 'users' : i === 3 ? 'laptop-code' : i === 4 ? 'language' : i === 5 ? 'briefcase' : i === 6 ? 'certificate' : 'user'} text-primary`}></i>
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

      {/* UNIVERSITY TYPES */}
      <section id="university-types" className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.university_types.heading}
          </h2>
          <p className="section-subtitle text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.university_types.description}
          </p>

          <div className="row g-4 mt-5 justify-content-center">
            {data.university_types.types.map((type: any, i: number) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card h-100">
                  <div className="card-body">
                    <div className="feature-icon mb-3">
                      <i className={`fas fa-${i === 0 ? 'university' : i === 1 ? 'school' : i === 2 ? 'building' : 'tools'} fs-2 text-info`}></i>
                    </div>
                    <h6 className="card-title">{type.name}</h6>
                    <p className="card-text small">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT LIFE */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.student_life.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.student_life.aspects.map((aspect: any, i: number) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card h-100">
                  <div className="card-body text-center">
                    <div className="feature-icon mb-3">
                      <i className={`fas fa-${i === 0 ? 'futbol' : i === 1 ? 'globe' : i === 2 ? 'user-friends' : 'home'} fs-2 text-success`}></i>
                    </div>
                    <h6 className="card-title">{aspect.name}</h6>
                    <p className="card-text small">{aspect.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST BREAKDOWN */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.cost_breakdown.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.cost_breakdown.items.map((item: any, i: number) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card h-100">
                  <div className="card-header text-center">
                    <h6 className="mb-0">{item.item}</h6>
                  </div>
                  <div className="card-body text-center">
                    <div className="display-6 text-primary fw-bold">{item.range.split(' ')[0]}</div>
                    <small className="text-muted">{item.range.split(' ').slice(1).join(' ')}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="section">
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
                        {i === 0 ? "🔍" : i === 1 ? "📄" : i === 2 ? "💰" : i === 3 ? "📝" : i === 4 ? "💳" : i === 5 ? "🗣️" : "🚀"}
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
              {isRTL ? "ابدأ رحلة التعليم الجامعي الأمريكي اليوم" : "Start Your American University Journey Today"}
            </h2>
            <p className="section-subtitle text-white-50">
              {isRTL ? "احصل على المساعدة للتقديم للجامعات الأمريكية مع خبرائنا" :
               "Get help applying to American universities with our experts"}
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