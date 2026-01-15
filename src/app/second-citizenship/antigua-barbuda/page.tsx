'use client'
import "@/styles/antigua.css"
import '@/styles/shard-style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useI18n } from '@/lib/i18n'
import antiguaData from '@/data/antigua-barbuda.json'
import { useState, useEffect } from 'react'
import GlobalLoading from '@/components/GlobalLoading'

export default function AntiguaBarbudaPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? antiguaData.ar : antiguaData.en
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
                <span className="stat-number">190+</span>
                <span className="stat-label">
                  {isRTL ? "دولة بدون تأشيرة" : "Visa-Free Countries"}
                </span>
              </div>
              <div className="stat-card">
                <span className="stat-number">3-6</span>
                <span className="stat-label">
                  {isRTL ? "أشهر المعالجة" : "Months Processing"}
                </span>
              </div>
              <div className="stat-card">
                <span className="stat-number">2013</span>
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
                  {isRTL ? "لماذا جنسية أنتيغوا وبربودا؟" : "Why Antigua & Barbuda Citizenship?"}
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
                      <p>{isRTL ? "شرق البحر الكاريبي، شمال غوادلوب وجنوب سانت كيتس" : "Eastern Caribbean, north of Guadeloupe and south of St. Kitts"}</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-globe-americas"></i>
                    </div>
                    <div className="info-content">
                      <h5>{isRTL ? "ترتيب جواز السفر" : "Passport Rank"}</h5>
                      <p>{isRTL ? "26 عالمياً (151 وجهة)" : "26th worldwide (151 destinations)"}</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-landmark"></i>
                    </div>
                    <div className="info-content">
                      <h5>{isRTL ? "العاصمة" : "Capital"}</h5>
                      <p>{isRTL ? "سانت جونز" : "St. John's"}</p>
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
                      <p>440 كم²</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-university"></i>
                    </div>
                    <div className="info-content">
                      <h5>{isRTL ? "نوع الحكم" : "Government"}</h5>
                      <p>{isRTL ? "ملكية دستورية برلمانية" : "Constitutional parliamentary monarchy"}</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-umbrella-beach"></i>
                    </div>
                    <div className="info-content">
                      <h5>{isRTL ? "الشواطئ" : "Beaches"}</h5>
                      <p>{isRTL ? "365 شاطئاً من الرمال البيضاء" : "365 white sand beaches"}</p>
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
              <div className="col-md-6" key={i}>
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
                          {isRTL ? "ابتداءً من 230,000 دولار أمريكي." : 
                           "Starting from $230,000 USD."}
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
                          {isRTL ? "حرية تنقل واسعة، مع إمكانية ضم العائلة في ملف واحد." : 
                           "Wide travel freedom, with the possibility of including family in one application."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="row mt-4">
                  <div className="col-12">
                    <div className="additional-options">
                      <h5 className="text-center mb-3">{isRTL ? "خيارات إضافية:" : "Additional Options:"}</h5>
                      <div className="options-grid">
                        <div className="option-item">
                          <i className="fas fa-building"></i>
                          <span>{isRTL ? "استثمار عقاري معتمد" : "Approved real estate investment"}</span>
                        </div>
                        <div className="option-item">
                          <i className="fas fa-donate"></i>
                          <span>{isRTL ? "تبرع لصندوق التنمية الوطني" : "Donation to National Development Fund"}</span>
                        </div>
                        <div className="option-item">
                          <i className="fas fa-graduation-cap"></i>
                          <span>{isRTL ? "مساهمة في جامعة الهند الغربية" : "Contribution to University of West Indies"}</span>
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
                <p className="mb-0 text-dark">{isRTL ? "6 إلى 9 أشهر." : "6 to 9 months."}</p>
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
            {isRTL ? "حرية التنقل بجواز أنتيغوا وبربودا" : "Travel Freedom with Antigua & Barbuda Passport"}
          </h2>
          
          <div className="visa-categories">
            <div className="visa-category visa-free">
              <div className="category-header">
                <h3>{isRTL ? "بدون تأشيرة (حوالي 120 دولة)" : "Visa-Free (Approx. 120 countries)"}</h3>
                <span className="badge">{isRTL ? "الحرية المطلقة" : "Absolute Freedom"}</span>
              </div>
              <div className="category-content">
                <div className="row">
                  <div className="col-md-4">
                    <h5>{isRTL ? "أوروبا" : "Europe"}</h5>
                    <ul>
                      <li>{isRTL ? "جميع دول منطقة شنغن" : "All Schengen Area countries"}</li>
                      <li>{isRTL ? "المملكة المتحدة وأيرلندا" : "United Kingdom and Ireland"}</li>
                      <li>{isRTL ? "دول البلقان" : "Balkan countries"}</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h5>{isRTL ? "الأمريكيتين" : "Americas"}</h5>
                    <ul>
                      <li>{isRTL ? "البرازيل، الأرجنتين، تشيلي" : "Brazil, Argentina, Chile"}</li>
                      <li>{isRTL ? "جميع دول الكاريبي" : "All Caribbean countries"}</li>
                      <li>{isRTL ? "كندا (بإذن إلكتروني)" : "Canada (with eTA)"}</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h5>{isRTL ? "آسيا وأفريقيا" : "Asia & Africa"}</h5>
                    <ul>
                      <li>{isRTL ? "سنغافورة، ماليزيا، الفلبين" : "Singapore, Malaysia, Philippines"}</li>
                      <li>{isRTL ? "هونغ كونغ، كوريا الجنوبية" : "Hong Kong, South Korea"}</li>
                      <li>{isRTL ? "جنوب إفريقيا، المغرب، تونس" : "South Africa, Morocco, Tunisia"}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="visa-category visa-on-arrival">
              <div className="category-header">
                <h3>{isRTL ? "عند الوصول (حوالي 30 دولة)" : "Visa on Arrival (Approx. 30 countries)"}</h3>
                <span className="badge">{isRTL ? "سهولة الوصول" : "Easy Access"}</span>
              </div>
              <div className="category-content">
                <p>{isRTL ? "نيبال، المالديف، كمبوديا، لاوس، تنزانيا، أوغندا، كينيا، مدغشقر، زامبيا، زيمبابوي، ملاوي، توغو، بنين، بوركينا فاسو، رواندا، جزر مارشال، بالاو، تيمور الشرقية، جزر القمر، سيشل، إيران، الأردن، بوليفيا، نيكاراغوا، جزر فيجي" : 
                  "Nepal, Maldives, Cambodia, Laos, Tanzania, Uganda, Kenya, Madagascar, Zambia, Zimbabwe, Malawi, Togo, Benin, Burkina Faso, Rwanda, Marshall Islands, Palau, East Timor, Comoros, Seychelles, Iran, Jordan, Bolivia, Nicaragua, Fiji Islands"}</p>
              </div>
            </div>
            
            <div className="visa-category eta">
              <div className="category-header">
                <h3>{isRTL ? "إلكترونية (eTA) (حوالي 5 دول)" : "Electronic (eTA) (Approx. 5 countries)"}</h3>
                <span className="badge">{isRTL ? "الطلب السريع" : "Quick Application"}</span>
              </div>
              <div className="category-content">
                <ul>
                  <li>{isRTL ? "كندا" : "Canada"}</li>
                  <li>{isRTL ? "أستراليا" : "Australia"}</li>
                  <li>{isRTL ? "نيوزيلندا" : "New Zealand"}</li>
                  <li>{isRTL ? "سريلانكا (eTA)" : "Sri Lanka (eTA)"}</li>
                  <li>{isRTL ? "كينيا (eTA)" : "Kenya (eTA)"}</li>
                </ul>
              </div>
            </div>
            
            <div className="visa-category evisa">
              <div className="category-header">
                <h3>{isRTL ? "تأشيرة إلكترونية مسبقة (eVisa) (حوالي 10 دول)" : "Pre-approved Electronic Visa (eVisa) (Approx. 10 countries)"}</h3>
                <span className="badge">{isRTL ? "الطلب المسبق" : "Pre-application"}</span>
              </div>
              <div className="category-content">
                <ul>
                  <li>{isRTL ? "الهند" : "India"}</li>
                  <li>{isRTL ? "باكستان" : "Pakistan"}</li>
                  <li>{isRTL ? "أذربيجان" : "Azerbaijan"}</li>
                  <li>{isRTL ? "فيتنام" : "Vietnam"}</li>
                  <li>{isRTL ? "ميانمار" : "Myanmar"}</li>
                  <li>{isRTL ? "تركيا" : "Turkey"}</li>
                  <li>{isRTL ? "إثيوبيا" : "Ethiopia"}</li>
                  <li>{isRTL ? "بنغلادش" : "Bangladesh"}</li>
                  <li>{isRTL ? "ساحل العاج" : "Ivory Coast"}</li>
                  <li>{isRTL ? "نيجيريا (eVisa)" : "Nigeria (eVisa)"}</li>
                </ul>
              </div>
            </div>
            
            <div className="visa-category visa-required">
              <div className="category-header">
                <h3>{isRTL ? "بتأشيرة مسبقة" : "Visa Required in Advance"}</h3>
                <span className="badge">{isRTL ? "يتطلب تخطيط" : "Requires Planning"}</span>
              </div>
              <div className="category-content">
                <div className="row">
                  <div className="col-md-6">
                    <h5>{isRTL ? "دول رئيسية" : "Major Countries"}</h5>
                    <ul>
                      <li>{isRTL ? "الولايات المتحدة الأمريكية" : "United States"}</li>
                      <li>{isRTL ? "الصين (باستثناء هونغ كونغ وماكاو)" : "China (except Hong Kong & Macau)"}</li>
                      <li>{isRTL ? "روسيا" : "Russia"}</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>{isRTL ? "دول أخرى" : "Other Countries"}</h5>
                    <ul>
                      <li>{isRTL ? "معظم دول الشرق الأوسط" : "Most Middle Eastern countries"}</li>
                      <li>{isRTL ? "بعض الدول الإفريقية" : "Some African countries"}</li>
                      <li>{isRTL ? "بعض دول آسيا الوسطى" : "Some Central Asian countries"}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODERN CTA */}
      <section className="modern-cta">
        <div className="cta-content" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="cta-title">
            {isRTL ? "احصل على جنسية أنتيغوا وبربودا الآن" : "Get Antigua & Barbuda Citizenship Now"}
          </h2>
          <p className="cta-subtitle">
            {isRTL ? "انضم إلى آلاف العائلات التي حصلت على جواز سفر أنتيغوا وبربودا. احجز استشارتك المجانية اليوم." : 
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

    </div>
  )
} 