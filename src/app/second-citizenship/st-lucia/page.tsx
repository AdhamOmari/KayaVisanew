'use client'
import "@/styles/st-lucia.css"
import '@/styles/shard-style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useI18n } from '@/lib/i18n'
import stLuciaData from '@/data/st-lucia.json'
import { useState, useEffect } from 'react'
import GlobalLoading from '@/components/GlobalLoading'

export default function StLuciaPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? stLuciaData.ar : stLuciaData.en
  const isRTL = locale === 'ar'
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <GlobalLoading />
  }

  return (
    <div className="dominica-page">

      {/* MODERN HERO */}
      <section className="hero-section">
        <div className="container">
          <div dir={isRTL ? "rtl" : "ltr"}>
            <h1>{data.title}</h1>
            <p className="hero-intro">{data.intro}</p>
            
            <div className="stats-container">
              <div className="stat-card">
                <span className="stat-number">146+</span>
                <span className="stat-label">
                  {isRTL ? "دولة بدون تأشيرة" : "Visa-Free Countries"}
                </span>
              </div>
              <div className="stat-card">
                <span className="stat-number">3-4</span>
                <span className="stat-label">
                  {isRTL ? "أشهر المعالجة" : "Months Processing"}
                </span>
              </div>
              <div className="stat-card">
                <span className="stat-number">2015</span>
                <span className="stat-label">
                  {isRTL ? "تأسيس البرنامج" : "Program Established"}
                </span>
              </div>
            </div>
            
            <div className="buttons-container">
              <a href="#benefits" className="hero-btn btn-secondary">
                {isRTL ? "استكشاف المزايا" : "Explore Benefits"} 
              </a>
              <a href="#requirements" className="hero-btn btn-secondary">
                {isRTL ? "الشروط والمتطلبات" : "Requirements"}
              </a>
              <a href="#visa-free" className="hero-btn btn-secondary">
                {isRTL ? "الدول بدون تأشيرة" : "Visa-Free Countries"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="section-modern intro-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 mx-auto">
              <div className="modern-card" dir={isRTL ? "rtl" : "ltr"}>
                <h2 className="text-center mb-4">
                  {isRTL ? "لماذا جنسية سانت لوسيا؟" : "Why St. Lucia Citizenship?"}
                </h2>
                <p className="lead text-center mb-5">
                  {isRTL ? "في عالم تتزايد فيه أهمية حرية التنقل والفرص العالمية، تمنحك برامج الجنسية عبر الاستثمار في دول الكاريبي فرصة استثنائية لتأمين مستقبل أكثر استقراراً لك ولعائلتك، مع جواز سفر قوي يفتح أمامك أبواب العالم." : 
                   "In a world where mobility and global opportunities are increasingly important, Caribbean citizenship by investment programs offer you an exceptional opportunity to secure a more stable future for yourself and your family, with a powerful passport that opens doors worldwide."}
                </p>
                
                <div className="country-info-grid">
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="info-content">
                      <h5>{isRTL ? "الموقع" : "Location"}</h5>
                      <p>{isRTL ? "شمال ترينيداد وتوباغو وجنوب مارتينيك" : "North of Trinidad & Tobago and south of Martinique"}</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-globe-americas"></i>
                    </div>
                    <div className="info-content">
                      <h5>{isRTL ? "ترتيب جواز السفر" : "Passport Rank"}</h5>
                      <p>{isRTL ? "32 عالميًا" : "32nd worldwide"}</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-landmark"></i>
                    </div>
                    <div className="info-content">
                      <h5>{isRTL ? "العاصمة" : "Capital"}</h5>
                      <p>{isRTL ? "كاستريس" : "Castries"}</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-language"></i>
                    </div>
                    <div className="info-content">
                      <h5>{isRTL ? "اللغة" : "Language"}</h5>
                      <p>{isRTL ? "الإنجليزية" : "English"}</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="info-content">
                      <h5>{isRTL ? "الوقت" : "Timezone"}</h5>
                      <p>GMT-4</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-expand-arrows-alt"></i>
                    </div>
                    <div className="info-content">
                      <h5>{isRTL ? "المساحة" : "Area"}</h5>
                      <p>617 كم²</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-university"></i>
                    </div>
                    <div className="info-content">
                      <h5>{isRTL ? "نوع الحكم" : "Government"}</h5>
                      <p>{isRTL ? "ملكية دستورية" : "Constitutional monarchy"}</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-mountain"></i>
                    </div>
                    <div className="info-content">
                      <h5>{isRTL ? "المعالم" : "Landmarks"}</h5>
                      <p>{isRTL ? "جبال بيتونز الشهيرة" : "Famous Pitons mountains"}</p>
                    </div>
                  </div>
                </div>
              </div>
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
                  <i className="fas fa-island-tropical"></i>
                </div>
                <h3>{isRTL ? "جزيرة الجمال" : "Nature's Paradise"}</h3>
                <p>
                  {isRTL ? "جزيرة استوائية خلابة تُعرف بجمالها الطبيعي الساحر" : 
                   "Stunning tropical island known for its natural beauty"}
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="modern-card text-center">
                <div className="card-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <h3>{isRTL ? "معالجة سريعة" : "Fast Processing"}</h3>
                <p>
                  {isRTL ? "واحدة من أسرع برامج الجنسية الاستثمارية في الكاريبي" : 
                   "One of the fastest citizenship programs in the Caribbean"}
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="modern-card text-center">
                <div className="card-icon">
                  <i className="fas fa-shield-check"></i>
                </div>
                <h3>{isRTL ? "استثمار آمن" : "Secure Investment"}</h3>
                <p>
                  {isRTL ? "برنامج معتمد حكومياً مع فحص دقيق وشامل" : 
                   "Government-approved program with thorough due diligence"}
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
              <div className="col-md-6" key={i}>
                <div className="glass-card" dir={isRTL ? "rtl" : "ltr"}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="text-gold fs-4">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>
                      <h4 className="h5 mb-2 text-white">{item}</h4>
                      <p className="text-light mb-0 small opacity-75">
                        {isRTL ? "ميزة حصرية في برنامج سانت لوسيا" : 
                         "Exclusive benefit of St. Lucia program"}
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
                    <div className="text-gold fw-bold display-6 mb-2">$100,000+</div>
                    <p className="text-muted small">
                      {isRTL ? "الحد الأدنى للاستثمار" : "Minimum investment"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* INVESTMENT DETAILS */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="modern-card">
                <h4 className="text-center mb-4">
                  {isRTL ? "تفاصيل الاستثمار" : "Investment Details"}
                </h4>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="investment-detail">
                      <div className="detail-icon">
                        <i className="fas fa-hand-holding-usd"></i>
                      </div>
                      <div className="detail-content">
                        <h5>{isRTL ? "قيمة الاستثمار" : "Investment Value"}</h5>
                        <p>
                          {isRTL ? "ابتداءً من 240,000 دولار أمريكي." : 
                           "Starting from $240,000 USD."}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="investment-detail">
                      <div className="detail-icon">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <div className="detail-content">
                        <h5>{isRTL ? "الأهمية" : "Importance"}</h5>
                        <p>
                          {isRTL ? "أحدث برامج الكاريبي وأكثرها مرونة." : 
                           "Newest Caribbean program with high flexibility."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="row mt-4">
                  <div className="col-12">
                    <div className="additional-options">
                      <h5 className="text-center mb-3">{isRTL ? "خيارات الاستثمار:" : "Investment Options:"}</h5>
                      <div className="options-grid">
                        <div className="option-item">
                          <i className="fas fa-donate"></i>
                          <span>{isRTL ? "مساهمة مالية لصندوق الاقتصاد الوطني" : "Financial contribution to National Economic Fund"}</span>
                        </div>
                        <div className="option-item">
                          <i className="fas fa-building"></i>
                          <span>{isRTL ? "استثمار عقاري" : "Real estate investment"}</span>
                        </div>
                        <div className="option-item">
                          <i className="fas fa-file-invoice-dollar"></i>
                          <span>{isRTL ? "سندات حكومية" : "Government bonds"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                <h5 className="mb-1 fw-semibold text-justify">
                  {isRTL ? "مدة المعالجة" : "Processing Time"}
                </h5>
                <p className="mb-0 text-dark">
                  {isRTL ? "6 إلى 9 أشهر قد تمتد أحياناً إلى 12 – 18 شهراً في حال وجود ضغط على الملفات أو تأخير في الفحص الأمني" : 
                   "6 to 9 months, sometimes extending to 12-18 months in case of file backlog or security check delays"}
                </p>
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
                    <div className="p-2 rounded-2">
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
          
          {/* GENERAL REQUIREMENTS */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="modern-card">
                <h4 className="text-center mb-4">
                  {isRTL ? "المتطلبات الأساسية للتقديم" : "General Application Requirements"}
                </h4>
                <p className="text-center mb-4">
                  {isRTL ? "قبل اختيار الدولة المناسبة، هناك شروط عامة يجب أن يستوفيها كل متقدم لبرامج الجنسية عبر الاستثمار في دول الكاريبي:" : 
                   "Before choosing the appropriate country, there are general requirements that every applicant for Caribbean citizenship by investment programs must meet:"}
                </p>
                <div className="requirements-grid">
                  <div className="requirement-item">
                    <div className="req-icon">
                      <i className="fas fa-birthday-cake"></i>
                    </div>
                    <div className="req-content">
                      <h5>{isRTL ? "السن القانوني" : "Legal Age"}</h5>
                      <p>{isRTL ? "يجب أن يكون مقدم الطلب الرئيسي قد أتم 18 عامًا." : "The main applicant must be at least 18 years old."}</p>
                    </div>
                  </div>
                  
                  <div className="requirement-item">
                    <div className="req-icon">
                      <i className="fas fa-user-check"></i>
                    </div>
                    <div className="req-content">
                      <h5>{isRTL ? "حسن السيرة والسلوك" : "Good Character"}</h5>
                      <p>{isRTL ? "يشترط أن يتمتع المتقدم بسمعة طيبة وشخصية سوية." : "The applicant must have a good reputation and sound character."}</p>
                    </div>
                  </div>
                  
                  <div className="requirement-item">
                    <div className="req-icon">
                      <i className="fas fa-gavel"></i>
                    </div>
                    <div className="req-content">
                      <h5>{isRTL ? "سجل جنائي نظيف" : "Clean Criminal Record"}</h5>
                      <p>{isRTL ? "لا يُقبل أي متقدم لديه سوابق جنائية أو قضايا معلقة." : "No applicant with criminal records or pending cases will be accepted."}</p>
                    </div>
                  </div>
                  
                  <div className="requirement-item">
                    <div className="req-icon">
                      <i className="fas fa-heartbeat"></i>
                    </div>
                    <div className="req-content">
                      <h5>{isRTL ? "الصحة الجيدة" : "Good Health"}</h5>
                      <p>{isRTL ? "يجب أن يكون المتقدم في حالة صحية جيدة وخالٍ من الأمراض المعدية الخطيرة." : "The applicant must be in good health and free from serious infectious diseases."}</p>
                    </div>
                  </div>
                  
                  <div className="requirement-item">
                    <div className="req-icon">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <div className="req-content">
                      <h5>{isRTL ? "القدرة المالية" : "Financial Capability"}</h5>
                      <p>{isRTL ? "إثبات مصدر الأموال بشكل قانوني وشفاف." : "Proof of legal and transparent source of funds."}</p>
                    </div>
                  </div>
                  
                  <div className="requirement-item">
                    <div className="req-icon">
                      <i className="fas fa-search"></i>
                    </div>
                    <div className="req-content">
                      <h5>{isRTL ? "اجتياز العناية الواجبة" : "Due Diligence"}</h5>
                      <p>{isRTL ? "يخضع جميع المتقدمين لفحص أمني ومالي دقيق لضمان المصداقية." : "All applicants undergo thorough security and financial checks to ensure credibility."}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISA-FREE COUNTRIES SECTION */}
      <section id="visa-free" className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {isRTL ? "حرية التنقل بجواز سانت لوسيا" : "Travel Freedom with St. Lucia Passport"}
          </h2>
          
          <div className="visa-categories">
            <div className="visa-category visa-free">
              <div className="category-header">
                <h3>{isRTL ? "بدون تأشيرة (حوالي 112 دولة)" : "Visa-Free (Approx. 112 countries)"}</h3>
                <span className="badge">{isRTL ? "الحرية المطلقة" : "Absolute Freedom"}</span>
              </div>
              <div className="category-content">
                <div className="row">
                  <div className="col-md-4">
                    <h5>{isRTL ? "أوروبا" : "Europe"}</h5>
                    <ul>
                      <li>{isRTL ? "جميع دول منطقة شنغن الأوروبية" : "All Schengen Area European countries"}</li>
                      <li>{isRTL ? "المملكة المتحدة وأيرلندا" : "United Kingdom and Ireland"}</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h5>{isRTL ? "الكاريبي" : "Caribbean"}</h5>
                    <ul>
                      <li>{isRTL ? "أنتيغوا وباربودا، دومينيكا" : "Antigua & Barbuda, Dominica"}</li>
                      <li>{isRTL ? "سانت كيتس ونيفيس، غرينادا، باربادوس" : "St. Kitts & Nevis, Grenada, Barbados"}</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h5>{isRTL ? "آسيا وأفريقيا" : "Asia & Africa"}</h5>
                    <ul>
                      <li>{isRTL ? "سنغافورة، كوريا الجنوبية، هونغ كونغ" : "Singapore, South Korea, Hong Kong"}</li>
                      <li>{isRTL ? "جنوب إفريقيا، المغرب، تونس، سيشل" : "South Africa, Morocco, Tunisia, Seychelles"}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="visa-category visa-on-arrival">
              <div className="category-header">
                <h3>{isRTL ? "عند الوصول (حوالي 25 دولة)" : "Visa on Arrival (Approx. 25 countries)"}</h3>
                <span className="badge">{isRTL ? "سهولة الوصول" : "Easy Access"}</span>
              </div>
              <div className="category-content">
                <p>{isRTL ? "نيبال، المالديف، كمبوديا، لاوس، كينيا، تنزانيا، أوغندا، مدغشقر، زامبيا، زيمبابوي، ملاوي، توغو، جزر مارشال، بالاو، ميكرونيزيا، فانواتو، فيجي، ساموا، بوليفيا، نيكاراغوا، إيران" : 
                  "Nepal, Maldives, Cambodia, Laos, Kenya, Tanzania, Uganda, Madagascar, Zambia, Zimbabwe, Malawi, Togo, Marshall Islands, Palau, Micronesia, Vanuatu, Fiji, Samoa, Bolivia, Nicaragua, Iran"}</p>
              </div>
            </div>
            
            <div className="visa-category eta">
              <div className="category-header">
                <h3>{isRTL ? "إلكترونية (3 دول)" : "Electronic (3 countries)"}</h3>
                <span className="badge">{isRTL ? "الطلب السريع" : "Quick Application"}</span>
              </div>
              <div className="category-content">
                <ul>
                  <li>{isRTL ? "كندا (eTA)" : "Canada (eTA)"}</li>
                  <li>{isRTL ? "أستراليا (eTA)" : "Australia (eTA)"}</li>
                  <li>{isRTL ? "نيوزيلندا (eTA)" : "New Zealand (eTA)"}</li>
                </ul>
              </div>
            </div>
            
            <div className="visa-category visa-required">
              <div className="category-header">
                <h3>{isRTL ? "بتأشيرة" : "Visa Required"}</h3>
                <span className="badge">{isRTL ? "يتطلب تخطيط" : "Requires Planning"}</span>
              </div>
              <div className="category-content">
                <ul>
                  <li>{isRTL ? "الولايات المتحدة الأمريكية" : "United States"}</li>
                  <li>{isRTL ? "الصين (باستثناء هونغ كونغ وماكاو)" : "China (except Hong Kong & Macau)"}</li>
                  <li>{isRTL ? "روسيا" : "Russia"}</li>
                  <li>{isRTL ? "معظم دول الشرق الأوسط" : "Most Middle Eastern countries"}</li>
                  <li>{isRTL ? "بعض الدول الإفريقية" : "Some African countries"}</li>
                  <li>{isRTL ? "بعض دول آسيا الوسطى" : "Some Central Asian countries"}</li>
                </ul>
              </div>
            </div>
            
            <div className="visa-category evisa">
              <div className="category-header">
                <h3>{isRTL ? "بتأشيرة إلكترونية مسبقة (eVisa) (حوالي 8 دول)" : "Pre-approved Electronic Visa (eVisa) (Approx. 8 countries)"}</h3>
                <span className="badge">{isRTL ? "الطلب المسبق" : "Pre-application"}</span>
              </div>
              <div className="category-content">
                <p>{isRTL ? "الهند، سريلانكا، تركيا، أذربيجان، فيتنام، إثيوبيا، بنغلادش، ساحل العاج" : 
                  "India, Sri Lanka, Turkey, Azerbaijan, Vietnam, Ethiopia, Bangladesh, Ivory Coast"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODERN CTA */}
      <section className="modern-cta">
        <div className="cta-content" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="cta-title">
            {isRTL ? "احصل على جنسية سانت لوسيا الآن" : "Get St. Lucia Citizenship Now"}
          </h2>
          <p className="cta-subtitle">
            {isRTL ? "انضم إلى آلاف العائلات التي حصلت على جواز سفر سانت لوسيا. احجز استشارتك المجانية اليوم." : 
             "Join thousands of families who have obtained St. Lucia passport. Book your free consultation today."}
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

    </div>
  )
}