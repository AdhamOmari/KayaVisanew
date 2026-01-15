'use client'
import "@/styles/shared-study.css"
import "@/styles/canada.css"

import "bootstrap/dist/css/bootstrap.min.css"
import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import studySpainDataImport from '@/data/study-spain.json'
import { useState, useEffect } from 'react'
import GlobalLoading from '@/components/GlobalLoading'

export default function StudySpainPage() {
  const { locale } = useI18n()
  const studySpainData: any = studySpainDataImport
  const data = locale === 'ar' ? studySpainData.ar : studySpainData.en
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

      {/* SPAIN HERO */}
      <section className="study-hero es-hero">
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
                  {isRTL ? "لغة عالمية" : "Global Language"}
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">200K+</div>
                <div className="stat-label">
                  {isRTL ? "طلاب دوليين" : "International Students"}
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">20</div>
                <div className="stat-label">
                  {isRTL ? "ساعة عمل أسبوعياً" : "Work Hours Weekly"}
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
            <i className="bi bi-sun"></i>
          </div>
          <div className="decoration-item">
            <i className="bi bi-palette"></i>
          </div>
          <div className="decoration-item">
            <i className="bi bi-umbrella"></i>
          </div>
        </div>
      </section>

      {/* WHY SPAIN */}
      <section className="section-country why-section es-why">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "لماذا إسبانيا؟" : "Why Spain?"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "تجربة حياة واستثمار في لغة وثقافة عالمية" : "Life experience and investment in a global language and culture"}
            </p>
          </div>
          
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-translate"></i>
              </div>
              <h4>{isRTL ? "لغة عالمية" : "Global Language"}</h4>
              <p>{isRTL ? "الإسبانية ثاني أكثر اللغات تحدثاً في العالم" : "Spanish is the second most spoken language worldwide"}</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-cash"></i>
              </div>
              <h4>{isRTL ? "تكاليف معيشة متوازنة" : "Balanced Living Costs"}</h4>
              <p>{isRTL ? "أقل من دول أوروبا الغربية مع جودة حياة عالية" : "Lower than Western Europe with high quality of life"}</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-palette"></i>
              </div>
              <h4>{isRTL ? "حياة طلابية غنية" : "Rich Student Life"}</h4>
              <p>{isRTL ? "مهرجانات، متاحف، فنون، وثقافة متنوعة" : "Festivals, museums, arts, and diverse culture"}</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h4>{isRTL ? "فرص عمل جزئي" : "Part-Time Job Opportunities"}</h4>
              <p>{isRTL ? "عمل قانوني أثناء الدراسة مع تنظيم واضح" : "Legal work during studies with clear regulations"}</p>
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
              {isRTL ? "خيارات دراسية متنوعة باللغتين الإسبانية والإنجليزية" : "Diverse study options in Spanish and English"}
            </p>
          </div>
          
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-translate"></i>
              </div>
              <h4>{isRTL ? "معاهد اللغة الإسبانية" : "Spanish Language Institutes"}</h4>
              <p>{isRTL ? "دورات مكثفة وبرامج تحضيرية لامتحان DELE" : "Intensive courses and DELE exam preparation"}</p>
              <div className="program-tag">
                <span>DELE</span>
              </div>
            </div>
            
            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-mortarboard"></i>
              </div>
              <h4>{isRTL ? "بكالوريوس" : "Bachelor's Degree"}</h4>
              <p>{isRTL ? "برامج بكالوريوس مدتها 4 سنوات في مختلف التخصصات" : "4-year bachelor's programs in various fields"}</p>
              <div className="program-tag">
                <span>{isRTL ? "4 سنوات" : "4 Years"}</span>
              </div>
            </div>
            
            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-person-arms-up"></i>
              </div>
              <h4>{isRTL ? "ماجستير" : "Master's Degree"}</h4>
              <p>{isRTL ? "برامج ماجستير متقدمة باللغتين الإسبانية والإنجليزية" : "Advanced master's programs in Spanish and English"}</p>
              <div className="program-tag">
                <span>{isRTL ? "1-2 سنوات" : "1-2 Years"}</span>
              </div>
            </div>
            
            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h4>{isRTL ? "برامج السياحة والضيافة" : "Tourism & Hospitality Programs"}</h4>
              <p>{isRTL ? "تدريب عملي في قطاع السياحة العالمي في إسبانيا" : "Practical training in Spain's global tourism sector"}</p>
              <div className="program-tag">
                <span>{isRTL ? "عملي" : "Practical"}</span>
              </div>
            </div>
          </div>
          
          <div className="conditional-admission" dir={isRTL ? "rtl" : "ltr"}>
            <div>
              <i className="bi bi-bridge"></i>
            </div>
            <div className="ca-content">
              <h4>{isRTL ? "برامج التبادل والتكامل الثقافي" : "Exchange & Cultural Integration Programs"}</h4>
              <p>{isRTL ? "فرص للاندماج الثقافي والتعرف على المجتمع الإسباني. برامج متاحة للطلاب الدوليين تشمل أنشطة ثقافية واجتماعية تسهل الاندماج وتطور مهارات اللغة الإسبانية." : "Opportunities for cultural integration and getting to know Spanish society. Programs available for international students include cultural and social activities that facilitate integration and develop Spanish language skills."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ESTIMATED COSTS */}
      <section className="section-country costs-section es-costs">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "التكاليف التقديرية" : "Estimated Costs"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "تفاصيل الرسوم الدراسية وتكاليف المعيشة في إسبانيا" : "Tuition fees and living expenses details in Spain"}
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
                    <div className="range-type">{isRTL ? "معاهد اللغة" : "Language Institutes"}</div>
                    <div className="range-value">€2,000 - €5,000</div>
                    <div className="range-period">{isRTL ? "سنوياً" : "Per Year"}</div>
                  </div>
                  <div className="range-item">
                    <div className="range-type">{isRTL ? "بكالوريوس" : "Bachelor's Degree"}</div>
                    <div className="range-value">€5,000 - €12,000</div>
                    <div className="range-period">{isRTL ? "سنوياً" : "Per Year"}</div>
                  </div>
                  <div className="range-item">
                    <div className="range-type">{isRTL ? "ماجستير" : "Master's Degree"}</div>
                    <div className="range-value">€6,000 - €18,000</div>
                    <div className="range-period">{isRTL ? "سنوياً" : "Per Year"}</div>
                  </div>
                  <div className="range-item">
                    <div className="range-type">{isRTL ? "جامعات خاصة" : "Private Universities"}</div>
                    <div className="range-value">€8,000 - €25,000</div>
                    <div className="range-period">{isRTL ? "سنوياً" : "Per Year"}</div>
                  </div>
                </div>
                <p className="cost-note">
                  {isRTL ? "تختلف الرسوم حسب الجامعة والتخصص والمدينة" : "Fees vary by university, major, and city"}
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
                      <span className="detail-price">€250 - €600</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-cup-hot"></i>
                    <div className="detail-content">
                      <span className="detail-title">{isRTL ? "الطعام" : "Food"}</span>
                      <span className="detail-price">€200 - €350</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-bus-front"></i>
                    <div className="detail-content">
                      <span className="detail-title">{isRTL ? "المواصلات" : "Transportation"}</span>
                      <span className="detail-price">€30 - €80</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-shield-check"></i>
                    <div className="detail-content">
                      <span className="detail-title">{isRTL ? "التأمين الصحي" : "Health Insurance"}</span>
                      <span className="detail-price">€40 - €100</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                </div>
                <div className="total-cost">
                  <span className="total-label">{isRTL ? "المجموع الشهري:" : "Monthly Total:"}</span>
                  <span className="total-value">€600 - €1,100</span>
                </div>
                <div className="visa-fee-info" style={{marginTop: '20px', padding: '15px', background: '#f8f9fa', borderRadius: '10px'}}>
                  <h6 className="text-center" style={{color: '#1c3269', fontWeight: '600'}}>
                    {isRTL ? "رسوم التأشيرة القنصلية" : "Consular Visa Fee"}
                  </h6>
                  <p className="text-center mb-0" style={{color: '#6c757d', fontSize: '0.9rem'}}>
                    {isRTL ? "تتراوح بين €60 - €80 حسب بلد التقديم" : "Ranges between €60 - €80 depending on application country"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR MAJORS */}
      <section className="section-country majors-section es-majors">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "التخصصات الأكثر طلباً" : "Most Popular Majors"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "مجالات الدراسة الأكثر نمواً في سوق العمل الإسباني" : "Fastest growing study fields in Spanish job market"}
            </p>
          </div>
          
          <div className="majors-grid">
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-airplane"></i>
              </div>
              <h4>{isRTL ? "السياحة والضيافة" : "Tourism & Hospitality"}</h4>
              <p>{isRTL ? "إدارة الفنادق، السياحة الدولية، الطيران" : "Hotel management, international tourism, aviation"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-palette"></i>
              </div>
              <h4>{isRTL ? "الفنون والتصميم" : "Arts & Design"}</h4>
              <p>{isRTL ? "فنون بصرية، تصميم جرافيك، أزياء" : "Visual arts, graphic design, fashion"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h4>{isRTL ? "إدارة الأعمال" : "Business Administration"}</h4>
              <p>{isRTL ? "ريادة أعمال، تسويق، إدارة عالمية" : "Entrepreneurship, marketing, global management"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-laptop"></i>
              </div>
              <h4>{isRTL ? "التسويق الرقمي" : "Digital Marketing"}</h4>
              <p>{isRTL ? "إعلانات رقمية، وسائل التواصل الاجتماعي" : "Digital advertising, social media"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-globe"></i>
              </div>
              <h4>{isRTL ? "العلاقات الدولية" : "International Relations"}</h4>
              <p>{isRTL ? "دبلوماسية، شؤون أوروبية، تعاون دولي" : "Diplomacy, European affairs, international cooperation"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-translate"></i>
              </div>
              <h4>{isRTL ? "ترجمة وتدريس الإسبانية" : "Spanish Translation & Teaching"}</h4>
              <p>{isRTL ? "ترجمة، تدريس، ثقافة إسبانية" : "Translation, teaching, Spanish culture"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT LIFE */}
      <section className="section-country life-section es-life">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "الحياة الطلابية في إسبانيا" : "Student Life in Spain"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "تجربة تعليمية استثنائية في مدن فنون وثقافة" : "Exceptional educational experience in cities of arts and culture"}
            </p>
          </div>
          
          <div className="cities-grid">
            <div className="city-card">
              <div className="city-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1543785735-0abcb6fdf497?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)'}}></div>
              <div className="city-content">
                <h4>{isRTL ? "مدريد" : "Madrid"}</h4>
                <p>{isRTL ? "عاصمة الثقافة والأعمال والجامعات الكبرى" : "Capital of culture, business, and major universities"}</p>
                <div className="city-tag">
                  <i className="bi bi-building"></i>
                  <span>{isRTL ? "العاصمة" : "Capital"}</span>
                </div>
              </div>
            </div>
            
            <div className="city-card">
              <div className="city-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)'}}></div>
              <div className="city-content">
                <h4>{isRTL ? "برشلونة" : "Barcelona"}</h4>
                <p>{isRTL ? "عاصمة الإبداع، التصميم، وريادة الأعمال" : "Capital of creativity, design, and entrepreneurship"}</p>
                <div className="city-tag">
                  <i className="bi bi-palette"></i>
                  <span>{isRTL ? "مدينة الإبداع" : "City of Creativity"}</span>
                </div>
              </div>
            </div>
            
            <div className="city-card">
              <div className="city-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1574698311155-f24ee302fcc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)'}}></div>
              <div className="city-content">
                <h4>{isRTL ? "فالنسيا" : "Valencia"}</h4>
                <p>{isRTL ? "جودة حياة عالية، تكاليف معقولة، وساحل خلاب" : "High quality of life, reasonable costs, stunning coast"}</p>
                <div className="city-tag">
                  <i className="bi bi-sun"></i>
                  <span>{isRTL ? "مدينة الشمس" : "City of Sun"}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon">
                <i className="bi bi-people"></i>
              </div>
              <h4>{isRTL ? "حياة ثقافية نابضة" : "Vibrant Cultural Life"}</h4>
              <p>{isRTL ? "مهرجانات، حفلات موسيقية، معارض فنية" : "Festivals, concerts, art exhibitions"}</p>
            </div>
            
            <div className="activity-card">
              <div className="activity-icon">
                <i className="bi bi-calendar-event"></i>
              </div>
              <h4>{isRTL ? "أنشطة شاطئية" : "Beach Activities"}</h4>
              <p>{isRTL ? "رياضات مائية، شواطئ، وأنشطة ساحلية" : "Water sports, beaches, coastal activities"}</p>
            </div>
            
            <div className="activity-card">
              <div className="activity-icon">
                <i className="bi bi-trophy"></i>
              </div>
              <h4>{isRTL ? "أنشطة رياضية" : "Sports Activities"}</h4>
              <p>{isRTL ? "كرة قدم، سلة، رياضات متنوعة" : "Football, basketball, various sports"}</p>
            </div>
            
            <div className="activity-card">
              <div className="activity-icon">
                <i className="bi bi-emoji-smile"></i>
              </div>
              <h4>{isRTL ? "حياة اجتماعية غنية" : "Rich Social Life"}</h4>
              <p>{isRTL ? "تقاليد إسبانية، حفلات، وأجواء دافئة" : "Spanish traditions, parties, warm atmosphere"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK OPPORTUNITIES */}
      <section className="section-country work-section es-work">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "فرص العمل أثناء الدراسة وبعدها" : "Work Opportunities During & After Studies"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "خيارات العمل القانونية في إسبانيا" : "Legal work options in Spain"}
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
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "حتى 20 ساعة عمل أسبوعياً" : "Up to 20 work hours weekly"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "يتطلب عقد عمل رسمي" : "Requires official work contract"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "مشروط بإنهاء السنة الأولى من الدراسة" : "Conditional on completing first year of study"}</li>
                  </ul>
                </div>
                
                <div className="work-option">
                  <h5>{isRTL ? "أنواع الوظائف" : "Job Types"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "السياحة والضيافة (مطاعم، فنادق)" : "Tourism & hospitality (restaurants, hotels)"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "خدمات اللغة والترجمة" : "Language services and translation"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "تدريب عملي في الشركات" : "Internships in companies"}</li>
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
                  <h5>{isRTL ? "تصريح البحث عن عمل" : "Job Search Permit"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "لمدة سنة واحدة بعد التخرج" : "For one year after graduation"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "يمكن العمل خلالها بدوام كامل" : "Can work full-time during this period"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "للخريجين من الجامعات الإسبانية" : "For graduates from Spanish universities"}</li>
                  </ul>
                </div>
                
                <div className="work-option">
                  <h5>{isRTL ? "خيارات البقاء الدائم" : "Permanent Stay Options"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "عقد عمل دائم" : "Permanent work contract"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "ريادة أعمال ومشاريع خاصة" : "Entrepreneurship and private projects"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "استكمال الدراسات العليا" : "Continuing postgraduate studies"}</li>
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
              {isRTL ? "دليل شامل للحصول على تأشيرة الدراسة الإسبانية" : "Complete guide to obtaining Spanish study visa"}
            </p>
          </div>
          
          <div className="steps-timeline">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>{isRTL ? "الحصول على قبول أكاديمي" : "Get Academic Admission"}</h4>
                <p>{isRTL ? "قبول من جامعة أو معهد معتمد في إسبانيا" : "Admission from accredited university/institute in Spain"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>{isRTL ? "إثبات القدرة المالية" : "Proof of Financial Capability"}</h4>
                <p>{isRTL ? "كشف حساب يغطي المعيشة (€600-€700 شهرياً)" : "Bank statement covering living expenses (€600-€700 monthly)"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>{isRTL ? "التأمين الصحي الشامل" : "Comprehensive Health Insurance"}</h4>
                <p>{isRTL ? "تأمين يغطي كامل فترة الإقامة في إسبانيا" : "Insurance covering entire stay period in Spain"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>{isRTL ? "حجز موعد في القنصلية" : "Book Consulate Appointment"}</h4>
                <p>{isRTL ? "حجز موعد في القنصلية/السفارة الإسبانية" : "Book appointment at Spanish consulate/embassy"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">5</div>
              <div className="step-content">
                <h4>{isRTL ? "تجهيز وتقديم المستندات" : "Prepare & Submit Documents"}</h4>
                <p>{isRTL ? "تجهيز ملف كامل مع ترجمة وتصديق" : "Prepare complete file with translation and certification"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">6</div>
              <div className="step-content">
                <h4>{isRTL ? "دفع الرسوم والمقابلة" : "Pay Fees & Interview"}</h4>
                <p>{isRTL ? "دفع €60-€80 رسوم واجتياز المقابلة" : "Pay €60-€80 fees and pass the interview"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">7</div>
              <div className="step-content">
                <h4>{isRTL ? "انتظار القرار" : "Wait for Decision"}</h4>
                <p>{isRTL ? "معالجة الطلب (4-8 أسابيع) واستلام التأشيرة" : "Application processing (4-8 weeks) and receive visa"}</p>
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
              <h5>{isRTL ? "خطاب القبول" : "Admission Letter"}</h5>
            </div>
            
            <div className="document-card">
              <div className="doc-icon">
                <i className="bi bi-cash-coin"></i>
              </div>
              <h5>{isRTL ? "إثبات مالي" : "Financial Proof"}</h5>
            </div>
            
            <div className="document-card">
              <div className="doc-icon">
                <i className="bi bi-heart-pulse"></i>
              </div>
              <h5>{isRTL ? "التأمين الصحي" : "Health Insurance"}</h5>
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
              <h5>{isRTL ? "شهادات أكاديمية" : "Academic Certificates"}</h5>
            </div>
            
            <div className="document-card">
              <div className="doc-icon">
                <i className="bi bi-file-medical"></i>
              </div>
              <h5>{isRTL ? "شهادة طبية" : "Medical Certificate"}</h5>
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
                <i className="bi bi-translate"></i>
              </div>
              <h5>{isRTL ? "ترجمة إسبانية معتمدة" : "Certified Spanish Translation"}</h5>
              <p>{isRTL ? "ترجمة جميع المستندات للإسبانية مع ختم مترجم معتمد" : "Translate all documents to Spanish with certified translator stamp"}</p>
            </div>
            
            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-calendar-check"></i>
              </div>
              <h5>{isRTL ? "تقديم مبكر" : "Early Submission"}</h5>
              <p>{isRTL ? "قدم الطلب قبل 4 أشهر على الأقل من بدء الدراسة" : "Submit application at least 4 months before study start"}</p>
            </div>
            
            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-house-check"></i>
              </div>
              <h5>{isRTL ? "إثبات سكن حقيقي" : "Real Housing Proof"}</h5>
              <p>{isRTL ? "عقد إيجار أو خطاب سكن موثق من المؤسسة التعليمية" : "Rental contract or housing letter certified by educational institution"}</p>
            </div>
            
            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <h5>{isRTL ? "تأمين صحي مقبول" : "Accepted Health Insurance"}</h5>
              <p>{isRTL ? "تأكد أن التأمين مقبول في إسبانيا ويغطي كل شيء" : "Ensure insurance is accepted in Spain and covers everything"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WITH KAYA */}
      <section className="section-country kaya-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "مع كايا: طريقك إلى إسبانيا أسهل" : "With Kaya: Your Path to Spain is Easier"}
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
              <h5>{isRTL ? "اختيار البرنامج المناسب" : "Choosing Suitable Program"}</h5>
              <p>{isRTL ? "بما يتناسب مع ميزانيتك وأهدافك اللغوية" : "Matching your budget and language goals"}</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-file-earmark-text"></i>
              </div>
              <h5>{isRTL ? "تجهيز ملف التأشيرة" : "Preparing Visa File"}</h5>
              <p>{isRTL ? "ترجمة، تصديق، وتجهيز جميع المستندات" : "Translation, certification, and preparation of all documents"}</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-hand-thumbs-up"></i>
              </div>
              <h5>{isRTL ? "ترتيب السكن والوصول" : "Arranging Housing & Arrival"}</h5>
              <p>{isRTL ? "حجز سكن، استقبال في المطار، وتسجيل أولي" : "Housing booking, airport pickup, and initial registration"}</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-airplane-engines"></i>
              </div>
              <h5>{isRTL ? "متابعة بعد الوصول" : "Post-Arrival Follow-up"}</h5>
              <p>{isRTL ? "بطاقة الإقامة (TIE)، فتح حساب، وتسجيل بلدي" : "Residence card (TIE), bank account, municipal registration"}</p>
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
      <section className="study-country-cta es-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content" dir={isRTL ? "rtl" : "ltr"}>
              <h2 className="cta-title">
                {isRTL ? "استعد لدراستك في إسبانيا" : "Prepare for Your Study in Spain"}
              </h2>
              <p className="cta-subtitle">
                {isRTL ? "ابدأ رحلتك الأكاديمية مع خبراء الدراسة في إسبانيا" : "Start your academic journey with Spain study experts"}
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
                  <span>95% {isRTL ? "نجاح التأشيرة" : "Visa Success"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}