'use client'
import "bootstrap/dist/css/bootstrap.min.css"

import { useI18n } from '@/lib/i18n'
import campCounselorData from '@/data/usa-visa-j1-camp-counselor.json'

export default function CampCounselorPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? campCounselorData.ar : campCounselorData.en
  const isRTL = locale === 'ar'

  return (
    <>

      {/* HERO SECTION */}
      <section className="hero-section" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
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
                <div className="display-4 fw-bold text-white">8-10</div>
                <div className="text-white-50">
                  {isRTL ? "أسابيع" : "Weeks"}
                </div>
              </div>
              <div className="text-center">
                <div className="display-4 fw-bold text-white">50-60</div>
                <div className="text-white-50">
                  {isRTL ? "ساعة/أسبوع" : "Hours/Week"}
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
              <a href="#responsibilities" className="btn btn-primary">
                {isRTL ? "المسؤوليات" : "Responsibilities"}
              </a>
              <a href="#benefits" className="btn btn-secondary">
                {isRTL ? "المزايا" : "Benefits"}
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
            {data.eligibility.requirements.map((req, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100">
                  <div className="card-body text-center">
                    <div className="feature-icon mb-3">
                      <i className={`fas fa-${i === 0 ? 'calendar' : i === 1 ? 'heartbeat' : i === 2 ? 'child' : i === 3 ? 'language' : i === 4 ? 'passport' : i === 5 ? 'search' : 'clock'} fs-2 text-primary`}></i>
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
            {data.program_details.details.map((detail, i) => (
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

      {/* RESPONSIBILITIES */}
      <section id="responsibilities" className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.responsibilities.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.responsibilities.roles.map((role, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-start gap-3">
                      <div className="feature-icon">
                        <i className={`fas fa-${i === 0 ? 'eye' : i === 1 ? 'gamepad' : i === 2 ? 'book' : i === 3 ? 'shield-alt' : i === 4 ? 'tools' : i === 5 ? 'smile' : 'users'} text-success`}></i>
                      </div>
                      <div>
                        <p className="mb-0 small">{role}</p>
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
      <section id="benefits" className="section">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.benefits.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.benefits.benefits.map((benefit, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-start gap-3">
                      <div className="feature-icon">
                        <i className={`fas fa-${i === 0 ? 'crown' : i === 1 ? 'users' : i === 2 ? 'tree' : i === 3 ? 'globe' : i === 4 ? 'language' : i === 5 ? 'briefcase' : 'certificate'} text-primary`}></i>
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

      {/* CAMP TYPES */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.camp_types.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.camp_types.types.map((type, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card h-100">
                  <div className="card-body text-center">
                    <div className="feature-icon mb-3">
                      <i className={`fas fa-${i === 0 ? 'campground' : i === 1 ? 'star' : i === 2 ? 'church' : 'compass'} fs-2`}></i>
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

      {/* TRAINING */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.training.heading}
          </h2>
          <p className="section-subtitle text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.training.description}
          </p>

          <div className="row g-4 mt-5 justify-content-center">
            {data.training.topics.map((topic, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100">
                  <div className="card-body text-center">
                    <div className="feature-icon mb-3">
                      <i className={`fas fa-${i === 0 ? 'shield-alt' : i === 1 ? 'ambulance' : i === 2 ? 'bullhorn' : i === 3 ? 'hands' : 'clipboard-list'} fs-2 text-info`}></i>
                    </div>
                    <p className="card-text small">{topic}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="section bg-light">
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
                        {i === 0 ? "🔍" : i === 1 ? "📝" : i === 2 ? "💼" :
                         i === 3 ? "✅" : i === 4 ? "🗣️" : i === 5 ? "🎓" : "✈️"}
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

      {/* CHALLENGES */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.challenges.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.challenges.challenges.map((challenge, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-start gap-3">
                      <div className="feature-icon">
                        <i className={`fas fa-${i === 0 ? 'clock' : i === 1 ? 'mountain' : i === 2 ? 'cloud-rain' : i === 3 ? 'heart' : i === 4 ? 'dumbbell' : 'building'} text-warning`}></i>
                      </div>
                      <div>
                        <p className="mb-0 small">{challenge}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center" dir={isRTL ? "rtl" : "ltr"}>
            {data.success_stories.heading}
          </h2>

          <div className="row g-4 mt-5 justify-content-center">
            {data.success_stories.stories.map((story, i) => (
              <div className="col-md-6" key={i}>
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                        <i className="fas fa-user"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">{story.name}</h6>
                        <small className="text-muted">{story.country}</small>
                      </div>
                    </div>
                    <p className="mb-0 small">"{story.story}"</p>
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
              {isRTL ? "ابدأ رحلة مستشار المخيم اليوم" : "Start Your Camp Counselor Journey Today"}
            </h2>
            <p className="section-subtitle text-white-50">
              {isRTL ? "احصل على المساعدة للتقديم لبرنامج مستشار المخيم مع خبرائنا" :
               "Get help applying for the Camp Counselor program with our experts"}
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