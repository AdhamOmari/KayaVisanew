'use client'
import "@/styles/antigua.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { useI18n } from '@/lib/i18n'
import antiguaData from '@/data/antigua-barbuda.json'

export default function AntiguaBarbudaPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? antiguaData.ar : antiguaData.en
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
                <span className="stat-number">190+</span>
                <span className="stat-label">
                  {isRTL ? "دولة بدون تأشيرة" : "Visa-Free Countries"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3-6</span>
                <span className="stat-label">
                  {isRTL ? "أشهر المعالجة" : "Months Processing"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100K+</span>
                <span className="stat-label">
                  {isRTL ? "مواطن" : "Citizens"}
                </span>
              </div>
            </div>
            
            <div className="hero-actions">
              <a href="#benefits" className="btn btn-modern-primary">
                {isRTL ? "استكشاف المزايا" : "Explore Benefits"} →
              </a>
              <a href="#requirements" className="btn btn-modern-secondary">
                {isRTL ? "الشروط والمتطلبات" : "Requirements"}
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
            <div className="col-md-4">
              <div className="modern-card text-center">
                <div className="card-icon">
                  <i className="fas fa-globe-americas"></i>
                </div>
                <h3>{isRTL ? "الوصول العالمي" : "Global Access"}</h3>
                <p>
                  {isRTL ? "سفر بدون تأشيرة إلى أكثر من 190 دولة بما فيها المملكة المتحدة ومنطقة شنغن" : 
                   "Visa-free travel to 190+ countries including UK and Schengen Area"}
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="modern-card text-center">
                <div className="card-icon">
                  <i className="fas fa-user-shield"></i>
                </div>
                <h3>{isRTL ? "الخصوصية الكاملة" : "Full Privacy"}</h3>
                <p>
                  {isRTL ? "لا ضرائب على الدخل العالمي، ولا متطلبات الإقامة، وحماية تامة للخصوصية" : 
                   "No worldwide income tax, no residence requirements, complete privacy protection"}
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="modern-card text-center">
                <div className="card-icon">
                  <i className="fas fa-home"></i>
                </div>
                <h3>{isRTL ? "إقامة العائلة" : "Family Inclusion"}</h3>
                <p>
                  {isRTL ? "إمكانية إدراج الزوج والأبناء والآباء في طلب واحد" : 
                   "Include spouse, children, and parents in a single application"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="benefits" className="section-modern">
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
                        {isRTL ? "ميزة حصرية في برنامج أنتيغوا وباربودا" : 
                         "Exclusive benefit of Antigua & Barbuda program"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT OPTIONS */}
      <section className="section-modern soft-bg">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.qualification_options.heading}
          </h2>
          <p className="section-subtitle" dir={isRTL ? "rtl" : "ltr"}>
            {isRTL ? "اختر خيار الاستثمار المناسب لعائلتك" : 
             "Choose the investment option that fits your family"}
          </p>
          
          <div className="row g-4 mt-4">
            {data.qualification_options.options.map((opt, i) => (
              <div className="col-md-4" key={i}>
                <div className="modern-card text-center">
                  <div className="mb-4">
                    <span className="badge bg-gradient-gold text-dark px-3 py-2 rounded-pill fw-semibold">
                      {isRTL ? "الخيار" : "Option"} {i + 1}
                    </span>
                  </div>
                  <h3 className="h4 mb-3">{opt}</h3>
                  <div className="mt-4">
                    <div className="text-gold fw-bold display-6 mb-2">$230,000+</div>
                    <p className="text-muted small">
                      {isRTL ? "الحد الأدنى للاستثمار" : "Minimum investment"}
                    </p>
                  </div>
                  <button className="btn btn-outline-primary mt-3 w-100">
                    {isRTL ? "التفاصيل الكاملة" : "Full Details"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.how_to_obtain.heading}
          </h2>
          
          <div className="process-timeline mt-5">
            {[
              {title: "Initial Consultation", icon: "👥"},
              {title: "Document Preparation", icon: "📋"},
              {title: "Application Submission", icon: "📮"},
              {title: "Due Diligence", icon: "🔍"},
              {title: "Investment", icon: "💰"},
              {title: "Certificate Issuance", icon: "🎉"}
            ].map((step, i) => (
              <div className="timeline-item" key={i}>
                <div className="modern-card">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span className="fs-2">{step.icon}</span>
                    <span className="timeline-step">{i + 1}</span>
                  </div>
                  <h4 className="h5 mb-2">
                    {isRTL ? 
                      (i === 0 ? "الاستشارة الأولية" : 
                       i === 1 ? "إعداد المستندات" :
                       i === 2 ? "تقديم الطلب" :
                       i === 3 ? "الفحص الأمني" :
                       i === 4 ? "الاستثمار" : "إصدار الشهادة") :
                      step.title}
                  </h4>
                  <p className="text-muted small mb-0">
                    {isRTL ? "خطوة أساسية في عملية الحصول على الجنسية" : 
                     "Essential step in the citizenship process"}
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
                    <div className="bg-antigua-blue bg-opacity-10 p-2 rounded-2">
                      <i className={`fas fa-${
                        i === 0 ? 'passport' : 
                        i === 1 ? 'file-medical' : 
                        i === 2 ? 'balance-scale' : 
                        i === 3 ? 'money-check' : 
                        i === 4 ? 'user-check' : 'certificate'
                      } text-antigua-blue`}></i>
                    </div>
                    <div>
                      <h4 className="h6 mb-2 fw-semibold">{r}</h4>
                      <p className="text-muted small mb-0">
                        {isRTL ? "شرط أساسي مطلوب" : "Required essential condition"}
                      </p>
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
            {isRTL ? "ابدأ رحلتك نحو الجنسية الثانية" : "Start Your Second Citizenship Journey"}
          </h2>
          <p className="cta-subtitle">
            {isRTL ? "انضم إلى آلاف العائلات التي حصلت على جواز سفر أنتيغوا وباربودا. احجز استشارتك المجانية اليوم." : 
             "Join thousands of families who have obtained Antigua & Barbuda passport. Book your free consultation today."}
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
                  <i className="fas fa-shield-alt"></i>
                  <span>{isRTL ? "معتمدة رسمياً" : "Government Approved"}</span>
                </div>
              </div>
              <div className="col-auto">
                <div className="d-flex align-items-center gap-2 text-white opacity-75">
                  <i className="fas fa-lock"></i>
                  <span>{isRTL ? "معلومات آمنة" : "Secure Processing"}</span>
                </div>
              </div>
              <div className="col-auto">
                <div className="d-flex align-items-center gap-2 text-white opacity-75">
                  <i className="fas fa-clock"></i>
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