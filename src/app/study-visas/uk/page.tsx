'use client'
import "@/styles/shared-study.css"
import "@/styles/canada.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import studyUkDataImport from '@/data/study-uk.json'
import { useState, useEffect } from 'react'
import GlobalLoading from '@/components/GlobalLoading'

export default function StudyUkPage() {
  const { locale } = useI18n()
  const studyUkData: any = studyUkDataImport
  const data = locale === 'ar' ? studyUkData.ar : studyUkData.en
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
    <div className="study-country-page">

      {/* UK HERO */}
      <section className="study-hero uk-hero">
        <div className="container">
          <div className="hero-content" dir={isRTL ? "rtl" : "ltr"}>
            <div className="hero-flag">
            </div>
            <h1 className="hero-title">
              <span className="hero-title-main">{data.title}</span>
              <span className="hero-title-sub">{data.hero.subtitle}</span>
            </h1>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">#2</div>
                <div className="stat-label">
                  {isRTL ? "أفضل جامعات عالمية" : "World's Best Universities"}
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500K+</div>
                <div className="stat-label">
                  {isRTL ? "طلاب دوليين" : "International Students"}
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">94%</div>
                <div className="stat-label">
                  {isRTL ? "رضا الطلاب" : "Student Satisfaction"}
                </div>
              </div>
            </div>
            
            <div className="hero-cta">
              <a href="#application" className="btn-study-primary">
                <i className="bi bi-list-check me-2"></i>
                {isRTL ? "خطوات التقديم" : "Application Steps"}
              </a>
              <a href="/contact" className="btn-study-secondary">
                <i className="bi bi-mortarboard me-2"></i>
                {isRTL ? "استشارة مجانية" : "Free Consultation"}
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-decoration">
          <div className="decoration-item">
            <i className="bi bi-crown"></i>
          </div>
          <div className="decoration-item">
            <i className="bi bi-building"></i>
          </div>
          <div className="decoration-item">
            <i className="bi bi-book"></i>
          </div>
        </div>
      </section>

      {/* WHY UK */}
      <section className="section-country why-section uk-why">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "لماذا بريطانيا؟" : "Why the UK?"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "موطن التعليم العريق والجامعات العالمية" : "Home of historic education and world-class universities"}
            </p>
          </div>
          
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-award"></i>
              </div>
              <h4>{isRTL ? "جامعات عريقة عالمياً" : "Historic Global Universities"}</h4>
              <p>{isRTL ? "جامعات أوكسفورد وكامبريدج ضمن أفضل 10 جامعات عالمية" : "Oxford and Cambridge ranked among top 10 universities globally"}</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-clock"></i>
              </div>
              <h4>{isRTL ? "مدة الدراسة أقصر" : "Shorter Study Duration"}</h4>
              <p>{isRTL ? "البكالوريوس 3 سنوات والماجستير سنة واحدة فقط" : "Bachelor's in 3 years and Master's in just 1 year"}</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h4>{isRTL ? "فرص عمل بعد التخرج" : "Post-Study Work Opportunities"}</h4>
              <p>{isRTL ? "تأشيرة Graduate Route لمدة سنتين للبقاء والعمل" : "Graduate Route visa for 2 years to stay and work"}</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-globe"></i>
              </div>
              <h4>{isRTL ? "بيئة متعددة الثقافات" : "Multicultural Environment"}</h4>
              <p>{isRTL ? "أكثر من 500,000 طالب دولي سنوياً" : "Over 500,000 international students annually"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* AVAILABLE PROGRAMS */}
      <section className="section-country programs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "البرامج المتاحة" : "Available Programs"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "خيارات دراسية متنوعة تناسب جميع المستويات" : "Diverse study options for all levels"}
            </p>
          </div>
          
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-translate"></i>
              </div>
              <h4>{isRTL ? "معاهد اللغة الإنجليزية" : "English Language Institutes"}</h4>
              <p>{isRTL ? "برامج تحضيرية للغة الإنجليزية الأكاديمية" : "Preparatory programs for academic English"}</p>
              <div className="program-tag">
                <span>{isRTL ? "مرن" : "Flexible"}</span>
              </div>
            </div>
            
            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-award"></i>
              </div>
              <h4>{isRTL ? "البكالوريوس" : "Bachelor's Degree"}</h4>
              <p>{isRTL ? "برامج بكالوريوس مدتها 3 سنوات في مختلف التخصصات" : "3-year bachelor's programs in various fields"}</p>
              <div className="program-tag">
                <span>{isRTL ? "3 سنوات" : "3 Years"}</span>
              </div>
            </div>
            
            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-mortarboard"></i>
              </div>
              <h4>{isRTL ? "الماجستير" : "Master's Degree"}</h4>
              <p>{isRTL ? "برامج ماجستير مدتها سنة واحدة في معظم التخصصات" : "1-year master's programs in most fields"}</p>
              <div className="program-tag">
                <span>{isRTL ? "1 سنة" : "1 Year"}</span>
              </div>
            </div>
            
            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-person-arms-up"></i>
              </div>
              <h4>{isRTL ? "الدكتوراه" : "PhD"}</h4>
              <p>{isRTL ? "برامج بحثية متقدمة مدتها 3-4 سنوات" : "Advanced research programs lasting 3-4 years"}</p>
              <div className="program-tag">
                <span>{isRTL ? "3-4 سنوات" : "3-4 Years"}</span>
              </div>
            </div>
          </div>
          
          <div className="conditional-admission" dir={isRTL ? "rtl" : "ltr"}>
            <div>
              <i className="bi bi-bridge"></i>
            </div>
            <div className="ca-content">
              <h4>{isRTL ? "القبول المشروط" : "Conditional Admission"}</h4>
              <p>{isRTL ? "قبول جامعي بشرط إنهاء برنامج اللغة أو البرنامج التأسيسي أولاً. متاح للطلاب الذين يحتاجون لتحسين مهاراتهم اللغوية أو الأكاديمية قبل بدء البرنامج الرئيسي." : "University admission conditional on completing language or foundation program first. Available for students needing language or academic improvement before main program."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ESTIMATED COSTS */}
      <section className="section-country costs-section uk-costs">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "التكاليف التقديرية" : "Estimated Costs"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "تفاصيل الرسوم الدراسية وتكاليف المعيشة" : "Tuition fees and living expenses details"}
            </p>
          </div>
          
          <div className="costs-grid">
            <div className="cost-card">
              <div className="cost-header">
                <div className="cost-icon">
                  <i className="bi bi-cash-stack"></i>
                </div>
                <h4>{isRTL ? "الرسوم الدراسية" : "Tuition Fees"}</h4>
              </div>
              <div className="cost-content">
                <div className="cost-range">
                  <div className="range-item">
                    <div className="range-type">{isRTL ? "برامج اللغة" : "Language Programs"}</div>
                    <div className="range-value">£8,000 - £15,000</div>
                    <div className="range-period">{isRTL ? "سنوياً" : "Per Year"}</div>
                  </div>
                  <div className="range-item">
                    <div className="range-type">{isRTL ? "برامج البكالوريوس" : "Bachelor's Programs"}</div>
                    <div className="range-value">£11,000 - £25,000</div>
                    <div className="range-period">{isRTL ? "سنوياً" : "Per Year"}</div>
                  </div>
                  <div className="range-item">
                    <div className="range-type">{isRTL ? "برامج الماجستير" : "Master's Programs"}</div>
                    <div className="range-value">£12,000 - £35,000</div>
                    <div className="range-period">{isRTL ? "سنوياً" : "Per Year"}</div>
                  </div>
                  <div className="range-item">
                    <div className="range-type">{isRTL ? "برامج الدكتوراه" : "PhD Programs"}</div>
                    <div className="range-value">£15,000 - £45,000</div>
                    <div className="range-period">{isRTL ? "سنوياً" : "Per Year"}</div>
                  </div>
                </div>
                <p className="cost-note">
                  {isRTL ? "البرامج الطبية قد تصل إلى £45,000 سنوياً" : "Medical programs can reach up to £45,000 annually"}
                </p>
              </div>
            </div>
            
            <div className="cost-card">
              <div className="cost-header">
                <div className="cost-icon">
                  <i className="bi bi-house-door"></i>
                </div>
                <h4>{isRTL ? "تكاليف المعيشة" : "Living Expenses"}</h4>
              </div>
              <div className="cost-content">
                <div className="living-details">
                  <div className="detail-item">
                    <i className="bi bi-building"></i>
                    <div className="detail-content">
                      <span className="detail-title">{isRTL ? "السكن" : "Housing"}</span>
                      <span className="detail-price">£400 - £1,200</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-cup-hot"></i>
                    <div className="detail-content">
                      <span className="detail-title">{isRTL ? "الطعام" : "Food"}</span>
                      <span className="detail-price">£200 - £400</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-bus-front"></i>
                    <div className="detail-content">
                      <span className="detail-title">{isRTL ? "المواصلات" : "Transportation"}</span>
                      <span className="detail-price">£50 - £150</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-shield-check"></i>
                    <div className="detail-content">
                      <span className="detail-title">{isRTL ? "التأمين الصحي" : "Health Insurance"}</span>
                      <span className="detail-price">£470 - £1,400</span>
                      <span className="detail-period">{isRTL ? "سنوياً" : "Yearly"}</span>
                    </div>
                  </div>
                </div>
                <div className="total-cost">
                  <span className="total-label">{isRTL ? "المجموع الشهري:" : "Monthly Total:"}</span>
                  <span className="total-value">£650 - £1,750</span>
                </div>
                <p className="cost-note" style={{marginTop: '15px'}}>
                  {isRTL ? "المبلغ المطلوب إثباته للتأشيرة: خارج لندن £1,023 شهرياً، داخل لندن £1,334 شهرياً" : "Proof of funds required for visa: Outside London £1,023 monthly, Inside London £1,334 monthly"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR MAJORS */}
      <section className="section-country majors-section uk-majors">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "التخصصات الأكثر طلباً" : "Most Popular Majors"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "مجالات الدراسة الأكثر نمواً وطلباً في سوق العمل البريطاني" : "Fastest growing study fields with high job demand in the UK"}
            </p>
          </div>
          
          <div className="majors-grid">
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-cpu"></i>
              </div>
              <h4>{isRTL ? "علوم الكمبيوتر" : "Computer Science"}</h4>
              <p>{isRTL ? "الذكاء الاصطناعي، تحليل البيانات، أمن المعلومات" : "AI, Data Analytics, Cybersecurity"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h4>{isRTL ? "إدارة الأعمال" : "Business Administration"}</h4>
              <p>{isRTL ? "المالية، التسويق، ريادة الأعمال" : "Finance, Marketing, Entrepreneurship"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-heart-pulse"></i>
              </div>
              <h4>{isRTL ? "الطب والعلوم الصحية" : "Medicine & Health Sciences"}</h4>
              <p>{isRTL ? "الطب، التمريض، الصيدلة، العلاج الطبيعي" : "Medicine, Nursing, Pharmacy, Physiotherapy"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-gear"></i>
              </div>
              <h4>{isRTL ? "الهندسة" : "Engineering"}</h4>
              <p>{isRTL ? "ميكانيكية، مدنية، كهربائية، كمبيوتر" : "Mechanical, Civil, Electrical, Computer"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-bank"></i>
              </div>
              <h4>{isRTL ? "المالية والمحاسبة" : "Finance & Accounting"}</h4>
              <p>{isRTL ? "المحاسبة، التمويل، إدارة المخاطر" : "Accounting, Finance, Risk Management"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-people"></i>
              </div>
              <h4>{isRTL ? "القانون والعلاقات الدولية" : "Law & International Relations"}</h4>
              <p>{isRTL ? "القانون الدولي، العلاقات الدولية، السياسة" : "International Law, International Relations, Politics"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT LIFE */}
      <section className="section-country life-section uk-life">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "الحياة الطلابية في بريطانيا" : "Student Life in the UK"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "تجربة جامعية غنية في مدن تاريخية وعالمية" : "Rich university experience in historic and global cities"}
            </p>
          </div>
          
          <div className="cities-grid">
            <div className="city-card">
              <div className="city-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)'}}></div>
              <div className="city-content">
                <h4>{isRTL ? "لندن" : "London"}</h4>
                <p>{isRTL ? "عاصمة الثقافة والأعمال وموطن جامعة لندن" : "Capital of culture and business, home to University of London"}</p>
                <div className="city-tag">
                  <i className="bi bi-building"></i>
                  <span>{isRTL ? "العاصمة العالمية" : "Global Capital"}</span>
                </div>
              </div>
            </div>
            
            <div className="city-card">
              <div className="city-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)'}}></div>
              <div className="city-content">
                <h4>{isRTL ? "أكسفورد" : "Oxford"}</h4>
                <p>{isRTL ? "مدينة الجامعات التاريخية والجو الأكاديمي المميز" : "City of historic universities and unique academic atmosphere"}</p>
                <div className="city-tag">
                  <i className="bi bi-book"></i>
                  <span>{isRTL ? "مدينة المعرفة" : "City of Knowledge"}</span>
                </div>
              </div>
            </div>
            
            <div className="city-card">
              <div className="city-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1592841200221-7ef5d8a43428?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)'}}></div>
              <div className="city-content">
                <h4>{isRTL ? "مانشستر" : "Manchester"}</h4>
                <p>{isRTL ? "مدينة الموسيقى والرياضة والجامعات المرموقة" : "City of music, sports, and prestigious universities"}</p>
                <div className="city-tag">
                  <i className="bi bi-music-note-beamed"></i>
                  <span>{isRTL ? "عاصمة الموسيقى" : "Music Capital"}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon">
                <i className="bi bi-people"></i>
              </div>
              <h4>{isRTL ? "مجتمعات طلابية متنوعة" : "Diverse Student Communities"}</h4>
              <p>{isRTL ? "طلاب من أكثر من 200 دولة حول العالم" : "Students from over 200 countries worldwide"}</p>
            </div>
            
            <div className="activity-card">
              <div className="activity-icon">
                <i className="bi bi-calendar-event"></i>
              </div>
              <h4>{isRTL ? "فعاليات ثقافية مستمرة" : "Continuous Cultural Events"}</h4>
              <p>{isRTL ? "مهرجانات موسيقية، معارض فنية، وعروض مسرحية" : "Music festivals, art exhibitions, and theater shows"}</p>
            </div>
            
            <div className="activity-card">
              <div className="activity-icon">
                <i className="bi bi-trophy"></i>
              </div>
              <h4>{isRTL ? "أنشطة رياضية متنوعة" : "Diverse Sports Activities"}</h4>
              <p>{isRTL ? "من كرة القدم إلى التجديف في الأنهار" : "From football to river rowing"}</p>
            </div>
            
            <div className="activity-card">
              <div className="activity-icon">
                <i className="bi bi-hands-helping"></i>
              </div>
              <h4>{isRTL ? "دعم جامعي شامل" : "Comprehensive University Support"}</h4>
              <p>{isRTL ? "مكاتب دعم للطلاب الدوليين وخدمات متكاملة" : "International student support offices and integrated services"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK OPPORTUNITIES */}
      <section className="section-country work-section uk-work">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "فرص العمل أثناء الدراسة وبعدها" : "Work Opportunities During & After Studies"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "خيارات العمل القانونية وبرامج الهجرة بعد التخرج" : "Legal work options and post-graduation immigration programs"}
            </p>
          </div>
          
          <div className="work-opportunities">
            <div className="work-card during-studies">
              <div className="work-header">
                <div className="work-icon">
                  <i className="bi bi-briefcase"></i>
                </div>
                <h4>{isRTL ? "أثناء الدراسة" : "During Studies"}</h4>
              </div>
              <div className="work-content">
                <div className="work-option">
                  <h5>{isRTL ? "العمل أثناء الدراسة" : "Work During Studies"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "حتى 20 ساعة أسبوعياً خلال الفصل الدراسي" : "Up to 20 hours weekly during semester"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "بدوام كامل في العطل الرسمية" : "Full-time during official holidays"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "للطلاب الجامعيين وطلاب الدراسات العليا" : "For undergraduate and postgraduate students"}</li>
                  </ul>
                </div>
                
                <div className="work-option">
                  <h5>{isRTL ? "أنواع الوظائف" : "Job Types"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "مطاعم ومقاهي ومتاجر" : "Restaurants, cafes, and shops"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "وظائف مساعدة في الجامعات" : "Assistant jobs in universities"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "التدريس الخصوصي والمساعدة الأكاديمية" : "Private tutoring and academic assistance"}</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="work-card after-graduation">
              <div className="work-header">
                <div className="work-icon">
                  <i className="bi bi-person-arms-up"></i>
                </div>
                <h4>{isRTL ? "بعد التخرج" : "After Graduation"}</h4>
              </div>
              <div className="work-content">
                <div className="work-option">
                  <h5>Graduate Route {isRTL ? "(تأشيرة الخريجين)" : "(Graduate Visa)"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "عمل لمدة 2 سنة بعد التخرج" : "Work for 2 years after graduation"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "3 سنوات لخريجي الدكتوراه" : "3 years for PhD graduates"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "بدون قيود على نوع العمل" : "No restrictions on job type"}</li>
                  </ul>
                </div>
                
                <div className="work-option">
                  <h5>{isRTL ? "مسارات الهجرة الأخرى" : "Other Immigration Routes"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "Skilled Worker Visa" : "Skilled Worker Visa"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "Global Talent Visa" : "Global Talent Visa"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "Startup and Innovator Visas" : "Startup and Innovator Visas"}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION STEPS */}
      <section id="application" className="section-country steps-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "الخطوات الأساسية للتقديم" : "Basic Application Steps"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "دليل شامل للحصول على تأشيرة الدراسة البريطانية" : "Complete guide to obtaining UK study visa"}
            </p>
          </div>
          
          <div className="steps-timeline">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>{isRTL ? "الحصول على قبول جامعي (CAS)" : "University Admission (CAS)"}</h4>
                <p>{isRTL ? "الحصول على رقم CAS من جامعة بريطانية معتمدة" : "Get CAS number from accredited UK university"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>{isRTL ? "إثبات القدرة المالية" : "Proof of Financial Capability"}</h4>
                <p>{isRTL ? "كشف حساب بنكي لمدة 28 يوم يغطي السنة الأولى + المعيشة" : "28-day bank statement covering first year + living costs"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>{isRTL ? "التقديم عبر موقع UKVI" : "Apply through UKVI Website"}</h4>
                <p>{isRTL ? "إنشاء حساب وتعبئة استمارة طلب تأشيرة الدراسة" : "Create account and fill study visa application form"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>{isRTL ? "دفع الرسوم والتأمين الصحي" : "Pay Fees & Health Surcharge"}</h4>
                <p>{isRTL ? "دفع رسوم التأشيرة £490 + IHS £470 سنوياً" : "Pay visa fee £490 + IHS £470 annually"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">5</div>
              <div className="step-content">
                <h4>{isRTL ? "تقديم المستندات" : "Submit Documents"}</h4>
                <p>{isRTL ? "رفع جميع المستندات المطلوبة عبر النظام" : "Upload all required documents through the system"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">6</div>
              <div className="step-content">
                <h4>{isRTL ? "البصمات والفحص الطبي" : "Biometrics & Medical Exam"}</h4>
                <p>{isRTL ? "حجز موعد البصمات في مركز VFS" : "Schedule biometrics appointment at VFS center"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">7</div>
              <div className="step-content">
                <h4>{isRTL ? "انتظار القرار" : "Wait for Decision"}</h4>
                <p>{isRTL ? "معالجة الطلب (3-8 أسابيع) واستلام القرار" : "Application processing (3-8 weeks) and receive decision"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTS REQUIRED */}
      <section className="section-country documents-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "المستندات المطلوبة" : "Required Documents"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "تجهيز الملف الكامل للحصول على تأشيرة الدراسة" : "Prepare complete file for study visa application"}
            </p>
          </div>
          
          <div className="documents-grid">
            <div className="document-card">
              <div className="doc-icon">
                <i className="bi bi-passport"></i>
              </div>
              <h5>{isRTL ? "جواز سفر ساري" : "Valid Passport"}</h5>
            </div>
            
            <div className="document-card">
              <div className="doc-icon">
                <i className="bi bi-file-text"></i>
              </div>
              <h5>{isRTL ? "رقم CAS" : "CAS Number"}</h5>
            </div>
            
            <div className="document-card">
              <div className="doc-icon">
                <i className="bi bi-cash-coin"></i>
              </div>
              <h5>{isRTL ? "إثبات مالي" : "Financial Proof"}</h5>
            </div>
            
            <div className="document-card">
              <div className="doc-icon">
                <i className="bi bi-translate"></i>
              </div>
              <h5>{isRTL ? "شهادة لغة" : "Language Certificate"}</h5>
            </div>
            
            <div className="document-card">
              <div className="doc-icon">
                <i className="bi bi-camera"></i>
              </div>
              <h5>{isRTL ? "صور شخصية" : "Photographs"}</h5>
            </div>
            
            <div className="document-card">
              <div className="doc-icon">
                <i className="bi bi-award"></i>
              </div>
              <h5>{isRTL ? "الشهادات الأكاديمية" : "Academic Certificates"}</h5>
            </div>
            
            <div className="document-card">
              <div className="doc-icon">
                <i className="bi bi-file-earmark-medical"></i>
              </div>
              <h5>{isRTL ? "إثبات IHS" : "IHS Proof"}</h5>
            </div>
            
            <div className="document-card">
              <div className="doc-icon">
                <i className="bi bi-check-square"></i>
              </div>
              <h5>{isRTL ? "بيان عدم محكومية" : "Police Clearance"}</h5>
            </div>
          </div>
        </div>
      </section>

      {/* GOLDEN TIPS */}
      <section className="section-country tips-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "نصائح ذهبية للنجاح" : "Golden Tips for Success"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "نصائح عملية لضمان نجاح طلب تأشيرة الدراسة" : "Practical tips to ensure study visa application success"}
            </p>
          </div>
          
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-chat-left-text"></i>
              </div>
              <h5>{isRTL ? "كشف حساب واضح" : "Clear Bank Statement"}</h5>
              <p>{isRTL ? "تأكد أن الأموال في الحساب لمدة 28 يوماً متواصلة قبل التقديم" : "Ensure funds in account for 28 consecutive days before applying"}</p>
            </div>
            
            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-translate"></i>
              </div>
              <h5>{isRTL ? "ترجمة جميع المستندات" : "Translate All Documents"}</h5>
              <p>{isRTL ? "ترجمة كل المستندات للإنجليزية مع ختم المترجم المعتمد" : "Translate all documents to English with certified translator stamp"}</p>
            </div>
            
            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-bar-chart"></i>
              </div>
              <h5>{isRTL ? "حساب تكاليف دقيق" : "Accurate Cost Calculation"}</h5>
              <p>{isRTL ? "حسب تكاليف السنة الأولى بالكامل مع زيادة 10% للطوارئ" : "Calculate full first year costs plus 10% for emergencies"}</p>
            </div>
            
            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-person-check"></i>
              </div>
              <h5>{isRTL ? "تقديم مبكر" : "Early Submission"}</h5>
              <p>{isRTL ? "قدّم الطلب قبل 3 أشهر من بدء الدراسة للتمتع بوقت كاف" : "Submit application 3 months before study start for ample time"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WITH KAYA */}
      <section className="section-country kaya-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "مع كايا: طريقك إلى بريطانيا أسهل" : "With Kaya: Your Path to the UK is Easier"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "خدماتنا الشاملة لضمان نجاح رحلتك الدراسية" : "Our comprehensive services to ensure your study journey success"}
            </p>
          </div>
          
          <div className="kaya-services">
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-building"></i>
              </div>
              <h5>{isRTL ? "اختيار الجامعة والمدينة" : "Choosing University & City"}</h5>
              <p>{isRTL ? "حسب ميزانيتك وتخصصك وفرص العمل المستقبلية" : "Based on your budget, major, and future job opportunities"}</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-file-earmark-text"></i>
              </div>
              <h5>{isRTL ? "تجهيز ملف التأشيرة الكامل" : "Complete Visa File Preparation"}</h5>
              <p>{isRTL ? "بدون ثغرات مع متابعة كل التفاصيل" : "Without gaps with follow-up on every detail"}</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-hand-thumbs-up"></i>
              </div>
              <h5>{isRTL ? "دعم في إثبات القدرة المالية" : "Financial Capacity Support"}</h5>
              <p>{isRTL ? "تحضير الخطاب المالي وإثباتات الحساب البنكي" : "Preparing financial letter and bank account proofs"}</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-airplane-engines"></i>
              </div>
              <h5>{isRTL ? "متابعة بعد الوصول" : "Post-Arrival Follow-up"}</h5>
              <p>{isRTL ? "التسجيل، السكن، BRP، وأول فرصة عمل" : "Registration, housing, BRP, and first job opportunity"}</p>
            </div>
          </div>
          
          <div className="kaya-message" dir={isRTL ? "rtl" : "ltr"}>
            <div className="message-icon">
              <i className="bi bi-rocket-takeoff"></i>
            </div>
            <p className="message-text">
              {isRTL ? "مع كايا كل دولة هي فرصة جديدة لتجربة تعليمية وحياتية غنية، ونحن نرافقك خطوة بخطوة حتى تصل إلى حلمك." : 
               "With Kaya, every country is a new opportunity for a rich educational and life experience, and we accompany you step by step until you reach your dream."}
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="study-country-cta uk-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content" dir={isRTL ? "rtl" : "ltr"}>
              <h2 className="cta-title">
                {isRTL ? "استعد لدراستك في بريطانيا" : "Prepare for Your Study in the UK"}
              </h2>
              <p className="cta-subtitle">
                {isRTL ? "ابدأ رحلتك الأكاديمية مع خبراء الدراسة في بريطانيا" : "Start your academic journey with UK study experts"}
              </p>
              
              <div className="cta-buttons">
                <a href="/contact" className="btn-cta-primary">
                  <i className="bi bi-calendar-check me-2"></i>
                  {isRTL ? "احجز استشارة مجانية" : "Book Free Consultation"}
                </a>
                <Link href="/study-visas" className="btn-cta-secondary">
                  <i className="bi bi-arrow-left me-2"></i>
                  {isRTL ? "وجهات أخرى" : "Other Destinations"}
                </Link>
              </div>
              
              <div className="cta-features">
                <div className="feature-item">
                  <i className="bi bi-shield-check"></i>
                  <span>{isRTL ? "ضمان القبول" : "Admission Guarantee"}</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-clock"></i>
                  <span>24/7 {isRTL ? "الدعم" : "Support"}</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-percent"></i>
                  <span>96% {isRTL ? "نجاح التأشيرة" : "Visa Success"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}