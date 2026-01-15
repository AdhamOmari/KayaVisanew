'use client'
import "@/styles/shared-study.css"
import "@/styles/canada.css"

import "bootstrap/dist/css/bootstrap.min.css"
import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import studyAustraliaDataImport from '@/data/study-australia.json'
import { useState, useEffect } from 'react'
import GlobalLoading from '@/components/GlobalLoading'

export default function StudyAustraliaPage() {
  const { locale } = useI18n()
  const studyAustraliaData: any = studyAustraliaDataImport
  const data = locale === 'ar' ? studyAustraliaData.ar : studyAustraliaData.en
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

      {/* AUSTRALIA HERO */}
      <section className="study-hero au-hero">
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
                <div className="stat-number">#3</div>
                <div className="stat-label">
                  {isRTL ? "جودة التعليم" : "Education Quality"}
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">700K+</div>
                <div className="stat-label">
                  {isRTL ? "طلاب دوليين" : "International Students"}
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">48</div>
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
            <i className="bi bi-umbrella"></i>
          </div>
          <div className="decoration-item">
            <i className="bi bi-tree"></i>
          </div>
        </div>
      </section>

      {/* WHY AUSTRALIA */}
      <section className="section-country why-section au-why">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "لماذا أستراليا؟" : "Why Australia?"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "وجهة التعليم العالمية بجودة حياة استثنائية" : "Global education destination with exceptional quality of life"}
            </p>
          </div>
          
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-award"></i>
              </div>
              <h4>{isRTL ? "جامعات عالمية المستوى" : "World-Class Universities"}</h4>
              <p>{isRTL ? "7 جامعات أسترالية ضمن أفضل 100 جامعة عالمية" : "7 Australian universities ranked in top 100 globally"}</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h4>{isRTL ? "فرص عمل أثناء الدراسة" : "Work During Studies"}</h4>
              <p>{isRTL ? "48 ساعة عمل كل أسبوعين خلال الدراسة" : "48 work hours every two weeks during studies"}</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-globe"></i>
              </div>
              <h4>{isRTL ? "تنوع ثقافي غني" : "Rich Cultural Diversity"}</h4>
              <p>{isRTL ? "أكثر من 700,000 طالب دولي سنوياً" : "Over 700,000 international students annually"}</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-house-heart"></i>
              </div>
              <h4>{isRTL ? "جودة حياة عالية" : "High Quality of Life"}</h4>
              <p>{isRTL ? "مدن آمنة وبيئة طبيعية خلابة وطقس معتدل" : "Safe cities, stunning nature, and mild climate"}</p>
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
              <p>{isRTL ? "برامج مكثفة للغة الإنجليزية الأكاديمية" : "Intensive academic English programs"}</p>
              <div className="program-tag">
                <span>{isRTL ? "مرن" : "Flexible"}</span>
              </div>
            </div>
            
            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-award"></i>
              </div>
              <h4>{isRTL ? "برامج VET المهنية" : "VET Professional Programs"}</h4>
              <p>{isRTL ? "دورات مهنية عملية مدتها 6-24 شهراً" : "Practical vocational courses 6-24 months"}</p>
              <div className="program-tag">
                <span>{isRTL ? "عملي" : "Practical"}</span>
              </div>
            </div>
            
            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-mortarboard"></i>
              </div>
              <h4>{isRTL ? "البكالوريوس" : "Bachelor's Degree"}</h4>
              <p>{isRTL ? "برامج بكالوريوس مدتها 3 سنوات في مختلف التخصصات" : "3-year bachelor's programs in various fields"}</p>
              <div className="program-tag">
                <span>{isRTL ? "3 سنوات" : "3 Years"}</span>
              </div>
            </div>
            
            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-person-arms-up"></i>
              </div>
              <h4>{isRTL ? "الماجستير والدكتوراه" : "Master's & PhD"}</h4>
              <p>{isRTL ? "برامج بحثية وتطبيقية متقدمة" : "Advanced research and applied programs"}</p>
              <div className="program-tag">
                <span>{isRTL ? "بحثي" : "Research"}</span>
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
      <section className="section-country costs-section au-costs">
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
                    <div className="range-type">{isRTL ? "معاهد اللغة" : "Language Institutes"}</div>
                    <div className="range-value">A$12,000 - A$18,000</div>
                    <div className="range-period">{isRTL ? "سنوياً" : "Per Year"}</div>
                  </div>
                  <div className="range-item">
                    <div className="range-type">{isRTL ? "برامج VET" : "VET Programs"}</div>
                    <div className="range-value">A$8,000 - A$22,000</div>
                    <div className="range-period">{isRTL ? "سنوياً" : "Per Year"}</div>
                  </div>
                  <div className="range-item">
                    <div className="range-type">{isRTL ? "البكالوريوس" : "Bachelor's Degree"}</div>
                    <div className="range-value">A$20,000 - A$45,000</div>
                    <div className="range-period">{isRTL ? "سنوياً" : "Per Year"}</div>
                  </div>
                  <div className="range-item">
                    <div className="range-type">{isRTL ? "الماجستير/الدكتوراه" : "Master's/PhD"}</div>
                    <div className="range-value">A$22,000 - A$50,000</div>
                    <div className="range-period">{isRTL ? "سنوياً" : "Per Year"}</div>
                  </div>
                </div>
                <p className="cost-note">
                  {isRTL ? "البرامج الطبية قد تصل إلى A$70,000 سنوياً" : "Medical programs can reach up to A$70,000 annually"}
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
                      <span className="detail-price">A$400 - A$1,200</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-cup-hot"></i>
                    <div className="detail-content">
                      <span className="detail-title">{isRTL ? "الطعام" : "Food"}</span>
                      <span className="detail-price">A$300 - A$500</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-bus-front"></i>
                    <div className="detail-content">
                      <span className="detail-title">{isRTL ? "المواصلات" : "Transportation"}</span>
                      <span className="detail-price">A$100 - A$200</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-shield-check"></i>
                    <div className="detail-content">
                      <span className="detail-title">OSHC</span>
                      <span className="detail-price">A$600 - A$1,500</span>
                      <span className="detail-period">{isRTL ? "سنوياً" : "Yearly"}</span>
                    </div>
                  </div>
                </div>
                <div className="total-cost">
                  <span className="total-label">{isRTL ? "المجموع الشهري:" : "Monthly Total:"}</span>
                  <span className="total-value">A$1,300 - A$2,400</span>
                </div>
                <p className="cost-note" style={{marginTop: '15px'}}>
                  {isRTL ? "المبلغ المطلوب إثباته للتأشيرة: A$24,505 سنوياً (تكاليف المعيشة)" : "Proof of funds required for visa: A$24,505 annually (living expenses)"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR MAJORS */}
      <section className="section-country majors-section au-majors">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "التخصصات الأكثر طلباً" : "Most Popular Majors"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "مجالات الدراسة الأكثر نمواً في سوق العمل الأسترالي" : "Fastest growing study fields in Australian job market"}
            </p>
          </div>
          
          <div className="majors-grid">
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-cpu"></i>
              </div>
              <h4>{isRTL ? "تكنولوجيا المعلومات" : "Information Technology"}</h4>
              <p>{isRTL ? "الذكاء الاصطناعي، أمن المعلومات، علوم البيانات" : "AI, Cybersecurity, Data Science"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-heart-pulse"></i>
              </div>
              <h4>{isRTL ? "التمريض والرعاية الصحية" : "Nursing & Healthcare"}</h4>
              <p>{isRTL ? "مهن طبية وتمريضية مطلوبة بشدة" : "Highly demanded medical and nursing professions"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-tools"></i>
              </div>
              <h4>{isRTL ? "التجارة والبناء" : "Trade & Construction"}</h4>
              <p>{isRTL ? "كهرباء، سباكة، بناء (مهن في قائمة المهارات)" : "Electrical, Plumbing, Construction (skills list)"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-gear"></i>
              </div>
              <h4>{isRTL ? "الهندسة" : "Engineering"}</h4>
              <p>{isRTL ? "مدنية، ميكانيكية، تعدين، طاقة متجددة" : "Civil, Mechanical, Mining, Renewable Energy"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-graph-up"></i>
              </div>
              <h4>{isRTL ? "إدارة الأعمال" : "Business Administration"}</h4>
              <p>{isRTL ? "المالية، التسويق، ريادة الأعمال" : "Finance, Marketing, Entrepreneurship"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-droplet"></i>
              </div>
              <h4>{isRTL ? "العلوم البيئية" : "Environmental Sciences"}</h4>
              <p>{isRTL ? "الاستدامة، الطاقة النظيفة، علوم المناخ" : "Sustainability, Clean Energy, Climate Science"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT LIFE */}
      <section className="section-country life-section au-life">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "الحياة الطلابية في أستراليا" : "Student Life in Australia"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "تجربة تعليمية استثنائية في مدن نابضة بالحياة" : "Exceptional educational experience in vibrant cities"}
            </p>
          </div>
          
          <div className="cities-grid">
            <div className="city-card">
              <div className="city-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)'}}></div>
              <div className="city-content">
                <h4>{isRTL ? "سيدني" : "Sydney"}</h4>
                <p>{isRTL ? "عاصمة الأعمال والشواطئ العالمية" : "Capital of business and global beaches"}</p>
                <div className="city-tag">
                  <i className="bi bi-building"></i>
                  <span>{isRTL ? "العاصمة الاقتصادية" : "Economic Capital"}</span>
                </div>
              </div>
            </div>
            
            <div className="city-card">
              <div className="city-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1545044846-351ba102b6d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)'}}></div>
              <div className="city-content">
                <h4>{isRTL ? "ملبورن" : "Melbourne"}</h4>
                <p>{isRTL ? "عاصمة الثقافة والفنون والجامعات المرموقة" : "Capital of culture, arts, and prestigious universities"}</p>
                <div className="city-tag">
                  <i className="bi bi-palette"></i>
                  <span>{isRTL ? "عاصمة الثقافة" : "Culture Capital"}</span>
                </div>
              </div>
            </div>
            
            <div className="city-card">
              <div className="city-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)'}}></div>
              <div className="city-content">
                <h4>{isRTL ? "بريزبن" : "Brisbane"}</h4>
                <p>{isRTL ? "طقس مشمس دافئ وتكاليف معيشة معقولة" : "Warm sunny weather and reasonable living costs"}</p>
                <div className="city-tag">
                  <i className="bi bi-sun"></i>
                  <span>{isRTL ? "مدينة الشمس" : "Sun City"}</span>
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
              <p>{isRTL ? "طلاب من أكثر من 140 دولة حول العالم" : "Students from over 140 countries worldwide"}</p>
            </div>
            
            <div className="activity-card">
              <div className="activity-icon">
                <i className="bi bi-calendar-event"></i>
              </div>
              <h4>{isRTL ? "فعاليات شاطئية وطبيعية" : "Beach & Nature Events"}</h4>
              <p>{isRTL ? "رحلات إلى الحاجز المرجاني العظيم والحدائق" : "Trips to Great Barrier Reef and parks"}</p>
            </div>
            
            <div className="activity-card">
              <div className="activity-icon">
                <i className="bi bi-trophy"></i>
              </div>
              <h4>{isRTL ? "أنشطة رياضية متنوعة" : "Diverse Sports Activities"}</h4>
              <p>{isRTL ? "سباحة، ركوب أمواج، كريكيت، رجبي" : "Swimming, surfing, cricket, rugby"}</p>
            </div>
            
            <div className="activity-card">
              <div className="activity-icon">
                <i className="bi bi-hands-helping"></i>
              </div>
              <h4>{isRTL ? "دعم طلابي متكامل" : "Comprehensive Student Support"}</h4>
              <p>{isRTL ? "مكاتب دعم دولية في جميع الجامعات" : "International support offices in all universities"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK OPPORTUNITIES */}
      <section className="section-country work-section au-work">
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
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "حتى 48 ساعة كل أسبوعين" : "Up to 48 hours every two weeks"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "بدوام كامل في العطل الرسمية" : "Full-time during official holidays"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "يمكن العمل في أي مجال" : "Can work in any field"}</li>
                  </ul>
                </div>
                
                <div className="work-option">
                  <h5>{isRTL ? "أنواع الوظائف" : "Job Types"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "الضيافة والمقاهي والمطاعم" : "Hospitality, cafes, restaurants"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "التجزئة والمتاجر الكبرى" : "Retail and major stores"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "مساعدة أكاديمية في الجامعات" : "Academic assistance in universities"}</li>
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
                  <h5>Temporary Graduate Visa {isRTL ? "(فئة 485)" : "(Subclass 485)"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "عمل لمدة 2-4 سنوات بعد التخرج" : "Work for 2-4 years after graduation"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "أقصر مدة للخريجين المهنيين" : "Shorter duration for vocational graduates"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "أطول مدة للباحثين والدراسات العليا" : "Longer for researchers and postgraduates"}</li>
                  </ul>
                </div>
                
                <div className="work-option">
                  <h5>{isRTL ? "مسارات الهجرة الدائمة" : "Permanent Migration Pathways"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "Skilled Independent Visa (189)" : "Skilled Independent Visa (189)"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "Skilled Nominated Visa (190)" : "Skilled Nominated Visa (190)"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "Employer Sponsorship" : "Employer Sponsorship"}</li>
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
              {isRTL ? "دليل شامل للحصول على تأشيرة الدراسة الأسترالية" : "Complete guide to obtaining Australian study visa"}
            </p>
          </div>
          
          <div className="steps-timeline">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>{isRTL ? "الحصول على قبول جامعي (CoE)" : "University Admission (CoE)"}</h4>
                <p>{isRTL ? "الحصول على خطاب CoE من جامعة/معهد معتمد" : "Get CoE letter from accredited university/institute"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>{isRTL ? "تأمين صحي للطلاب (OSHC)" : "Student Health Insurance (OSHC)"}</h4>
                <p>{isRTL ? "شراء تغطية تأمين صحي طوال فترة الدراسة" : "Purchase health insurance coverage for study duration"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>{isRTL ? "إثبات القدرة المالية" : "Proof of Financial Capability"}</h4>
                <p>{isRTL ? "كشف حساب يغطي الرسوم + A$24,505 سنوياً للمعيشة" : "Bank statement covering fees + A$24,505 yearly living"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>{isRTL ? "التقديم عبر ImmiAccount" : "Apply through ImmiAccount"}</h4>
                <p>{isRTL ? "إنشاء حساب وتعبئة استمارة Student Visa (Subclass 500)" : "Create account and fill Student Visa (Subclass 500)"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">5</div>
              <div className="step-content">
                <h4>{isRTL ? "دفع الرسوم" : "Pay Fees"}</h4>
                <p>{isRTL ? "دفع رسوم التأشيرة A$710 تقريباً" : "Pay visa fee approximately A$710"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">6</div>
              <div className="step-content">
                <h4>{isRTL ? "البصمات والفحص الطبي" : "Biometrics & Medical Exam"}</h4>
                <p>{isRTL ? "حجز موعد البصمات والفحص الطبي المعتمد" : "Schedule biometrics and approved medical exam"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">7</div>
              <div className="step-content">
                <h4>{isRTL ? "انتظار القرار" : "Wait for Decision"}</h4>
                <p>{isRTL ? "معالجة الطلب (4-8 أسابيع) واستلام القرار" : "Application processing (4-8 weeks) and receive decision"}</p>
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
              <h5>CoE {isRTL ? "(خطاب القبول)" : "(Confirmation of Enrolment)"}</h5>
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
              <h5>OSHC {isRTL ? "(التأمين الصحي)" : "(Health Insurance)"}</h5>
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
                <i className="bi bi-translate"></i>
              </div>
              <h5>{isRTL ? "شهادة اللغة الإنجليزية" : "English Certificate"}</h5>
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
              <h5>{isRTL ? "تغطية OSHC كاملة" : "Complete OSHC Coverage"}</h5>
              <p>{isRTL ? "اشترِ تأمين OSHC يغطي جميع مدة الدراسة" : "Purchase OSHC covering entire study duration"}</p>
            </div>
            
            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-translate"></i>
              </div>
              <h5>{isRTL ? "مستوى لغة واقعي" : "Realistic Language Level"}</h5>
              <p>{isRTL ? "IELTS 6.0 أو ما يعادله كحد أدنى للقبول" : "IELTS 6.0 or equivalent minimum for admission"}</p>
            </div>
            
            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-bar-chart"></i>
              </div>
              <h5>{isRTL ? "إثبات مالي صحيح" : "Correct Financial Proof"}</h5>
              <p>{isRTL ? "يجب أن تظهر الأموال لمدة 3 أشهر على الأقل" : "Funds should show for at least 3 months"}</p>
            </div>
            
            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-person-check"></i>
              </div>
              <h5>{isRTL ? "تقديم مبكر" : "Early Submission"}</h5>
              <p>{isRTL ? "قدّم الطلب قبل 3 أشهر من بدء الدراسة" : "Submit application 3 months before study start"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WITH KAYA */}
      <section className="section-country kaya-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "مع كايا: طريقك إلى أستراليا أسهل" : "With Kaya: Your Path to Australia is Easier"}
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
              <p>{isRTL ? "بما يتناسب مع ميزانيتك وخططك المهنية" : "Matching your budget and career plans"}</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-file-earmark-text"></i>
              </div>
              <h5>{isRTL ? "تجهيز ملف CoE والتأمين" : "Preparing CoE & Insurance"}</h5>
              <p>{isRTL ? "إعداد جميع المستندات الرسمية" : "Preparing all official documents"}</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-hand-thumbs-up"></i>
              </div>
              <h5>{isRTL ? "دعم مالي متكامل" : "Comprehensive Financial Support"}</h5>
              <p>{isRTL ? "تحضير الإثباتات المالية وخطابات الكفالة" : "Preparing financial proofs and sponsorship letters"}</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-airplane-engines"></i>
              </div>
              <h5>{isRTL ? "متابعة بعد الوصول" : "Post-Arrival Follow-up"}</h5>
              <p>{isRTL ? "التسجيل، TFN، الحساب البنكي، السكن" : "Registration, TFN, bank account, housing"}</p>
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
      <section className="study-country-cta au-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content" dir={isRTL ? "rtl" : "ltr"}>
              <h2 className="cta-title">
                {isRTL ? "استعد لدراستك في أستراليا" : "Prepare for Your Study in Australia"}
              </h2>
              <p className="cta-subtitle">
                {isRTL ? "ابدأ رحلتك الأكاديمية مع خبراء الدراسة في أستراليا" : "Start your academic journey with Australia study experts"}
              </p>
              
              <div className="cta-buttons">
                <a href="/contact" className="btn-cta-primary">
                  <i className="bi bi-calendar-check me-2"></i>
                  {isRTL ? "احجز استشارة مجانية" : "Book Free Consultation"}
                </a>
                <Link href="/study-visas" className="btn-cta-secondary">
                  <i className=" me-2"></i>
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