'use client'
import "@/styles/shared-study.css"
import "@/styles/canada.css"

import "bootstrap/dist/css/bootstrap.min.css"
import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import studyCanadaDataImport from '@/data/study-canada.json'
import { useState, useEffect } from 'react'
import GlobalLoading from '@/components/GlobalLoading'

export default function StudyCanadaPage() {
  const { locale } = useI18n()
  const studyCanadaData: any = studyCanadaDataImport
  const data = locale === 'ar' ? studyCanadaData.ar : studyCanadaData.en
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

      {/* CANADA HERO */}
      <section className="study-hero canada-hero">
        <div className="container">
          <div className="hero-content" dir={isRTL ? "rtl" : "ltr"}>
            <h1 className="hero-title">
              <span className="hero-title-main">{data.title}</span>
              <span className="hero-title-sub">{data.hero.subtitle}</span>
            </h1>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">#3</div>
                <div className="stat-label">
                  {isRTL ? "أفضل نظام تعليمي" : "Best Education System"}
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">600K+</div>
                <div className="stat-label">
                  {isRTL ? "طلاب دوليين" : "International Students"}
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">96%</div>
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
            <i className="bi bi-tree"></i>
          </div>
          <div className="decoration-item">
            <i className="bi bi-snow"></i>
          </div>
          <div className="decoration-item">
            <i className="bi bi-buildings"></i>
          </div>
        </div>
      </section>

      {/* WHY CANADA */}
      <section className="section-country why-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "لماذا كندا؟" : "Why Canada?"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "موطن التعليم العالمي والتنوع الثقافي" : "Home of global education and cultural diversity"}
            </p>
          </div>
          
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-building"></i>
              </div>
              <h4>{isRTL ? "جامعات مرموقة عالمياً" : "World's Prestigious Universities"}</h4>
              <p>{isRTL ? "جامعات مثل تورونتو، ماكغيل، UBC في قائمة أفضل 100 جامعة عالمياً." : "Universities like Toronto, McGill, UBC ranked among top 100 globally."}</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-currency-dollar"></i>
              </div>
              <h4>{isRTL ? "تكاليف معقولة وجودة عالية" : "Affordable Costs, High Quality"}</h4>
              <p>{isRTL ? "تكاليف أقل من أمريكا وبريطانيا مع جودة تعليم عالمية." : "Lower costs than USA and UK with world-class education quality."}</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-translate"></i>
              </div>
              <h4>{isRTL ? "بلد ثنائي اللغة" : "Bilingual Country"}</h4>
              <p>{isRTL ? "فرصة تعلم الإنجليزية والفرنسية، مما يمنحك ميزة إضافية." : "Opportunity to learn both English and French, giving you an extra advantage."}</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-people"></i>
              </div>
              <h4>{isRTL ? "فرص عمل وهجرة" : "Work & Immigration Opportunities"}</h4>
              <p>{isRTL ? "برامج الهجرة مثل PGWP وExpress Entry بعد التخرج." : "Immigration programs like PGWP and Express Entry after graduation."}</p>
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
              <h4>{isRTL ? "معاهد اللغة الإنجليزية/الفرنسية" : "English/French Language Institutes"}</h4>
              <p>{isRTL ? "برامج ESL/FSL لتطوير المهارات اللغوية" : "ESL/FSL programs for language skills development"}</p>
              <div className="program-tag">
                <span>{isRTL ? "مرن" : "Flexible"}</span>
              </div>
            </div>
            
            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-award"></i>
              </div>
              <h4>{isRTL ? "دبلوم ودبلوم متقدم" : "Diploma & Advanced Diploma"}</h4>
              <p>{isRTL ? "برامج مهنية متخصصة من 1-3 سنوات" : "Specialized vocational programs 1-3 years"}</p>
              <div className="program-tag">
                <span>{isRTL ? "1-3 سنوات" : "1-3 Years"}</span>
              </div>
            </div>
            
            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-mortarboard"></i>
              </div>
              <h4>{isRTL ? "البكالوريوس" : "Bachelor's"}</h4>
              <p>{isRTL ? "دراسة جامعية متكاملة لمدة 4 سنوات" : "Complete 4-year university education"}</p>
              <div className="program-tag">
                <span>{isRTL ? "4 سنوات" : "4 Years"}</span>
              </div>
            </div>
            
            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-person-arms-up"></i>
              </div>
              <h4>{isRTL ? "الماجستير والدكتوراه" : "Master's & PhD"}</h4>
              <p>{isRTL ? "برامج بحثية متقدمة وأكاديمية" : "Advanced research and academic programs"}</p>
              <div className="program-tag">
                <span>{isRTL ? "1-6 سنوات" : "1-6 Years"}</span>
              </div>
            </div>
          </div>
          
          <div className="conditional-admission" dir={isRTL ? "rtl" : "ltr"}>
            <div>
              <i className="bi bi-bridge"></i>
            </div>
            <div className="ca-content">
              <h4>{isRTL ? "الدراسة المشروطة" : "Conditional Admission"}</h4>
              <p>{isRTL ? "قبول جامعي بشرط إنهاء برنامج اللغة أولاً. متاح للطلاب الذين يحتاجون لتحسين مهاراتهم اللغوية قبل بدء البرنامج الأكاديمي." : "University admission conditional on completing language program first. Available for students needing language improvement before academic program."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ESTIMATED COSTS */}
      <section className="section-country costs-section">
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
                    <div className="range-type">{isRTL ? "كليات المجتمع" : "Community Colleges"}</div>
                    <div className="range-value">$13,000 - $20,000</div>
                    <div className="range-period">{isRTL ? "سنوياً" : "Per Year"}</div>
                  </div>
                  <div className="range-item">
                    <div className="range-type">{isRTL ? "جامعات عامة" : "Public Universities"}</div>
                    <div className="range-value">$15,000 - $30,000</div>
                    <div className="range-period">{isRTL ? "سنوياً" : "Per Year"}</div>
                  </div>
                  <div className="range-item">
                    <div className="range-type">{isRTL ? "جامعات مرموقة" : "Prestigious Universities"}</div>
                    <div className="range-value">$25,000 - $50,000</div>
                    <div className="range-period">{isRTL ? "سنوياً" : "Per Year"}</div>
                  </div>
                </div>
                <p className="cost-note">
                  {isRTL ? "تختلف التكاليف حسب التخصص والمقاطعة والجامعة" : "Costs vary by major, province, and university"}
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
                      <span className="detail-price">$500 - $1,500</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-cup-hot"></i>
                    <div className="detail-content">
                      <span className="detail-title">{isRTL ? "الطعام" : "Food"}</span>
                      <span className="detail-price">$300 - $600</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-bus-front"></i>
                    <div className="detail-content">
                      <span className="detail-title">{isRTL ? "المواصلات" : "Transportation"}</span>
                      <span className="detail-price">$80 - $200</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-shield-check"></i>
                    <div className="detail-content">
                      <span className="detail-title">{isRTL ? "التأمين الصحي" : "Health Insurance"}</span>
                      <span className="detail-price">$50 - $150</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                </div>
                <div className="total-cost">
                  <span className="total-label">{isRTL ? "المجموع الشهري:" : "Monthly Total:"}</span>
                  <span className="total-value">$930 - $2,450</span>
                </div>
                <p className="cost-note" style={{marginTop: '15px'}}>
                  {isRTL ? "المبلغ المطلوب إثباته للحصول على تصريح الدراسة: 10,000 دولار كندي سنوياً + رسوم السنة الأولى" : "Proof of funds required for study permit: $10,000 CAD annually + first year tuition"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR MAJORS */}
      <section className="section-country majors-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "التخصصات الأكثر طلباً" : "Most Popular Majors"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "مجالات الدراسة الأكثر نمواً وطلباً في سوق العمل الكندي" : "Fastest growing study fields with high job demand in Canada"}
            </p>
          </div>
          
          <div className="majors-grid">
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-code-slash"></i>
              </div>
              <h4>{isRTL ? "تكنولوجيا المعلومات" : "Information Technology"}</h4>
              <p>{isRTL ? "علوم الكمبيوتر، الذكاء الاصطناعي، أمن المعلومات" : "Computer Science, AI, Cybersecurity"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <h4>{isRTL ? "إدارة الأعمال" : "Business Administration"}</h4>
              <p>{isRTL ? "التسويق، المالية، ريادة الأعمال" : "Marketing, Finance, Entrepreneurship"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-heart-pulse"></i>
              </div>
              <h4>{isRTL ? "الطب والصحة" : "Medicine & Health"}</h4>
              <p>{isRTL ? "التمريض، الصيدلة، الصحة العامة" : "Nursing, Pharmacy, Public Health"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-gear"></i>
              </div>
              <h4>{isRTL ? "الهندسة" : "Engineering"}</h4>
              <p>{isRTL ? "ميكانيكية، كهربائية، مدنية، كمبيوتر" : "Mechanical, Electrical, Civil, Computer"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-snow"></i>
              </div>
              <h4>{isRTL ? "علوم البيئة" : "Environmental Sciences"}</h4>
              <p>{isRTL ? "الطاقة المتجددة، الاستدامة، علوم البيئة" : "Renewable Energy, Sustainability, Environmental Science"}</p>
            </div>
            
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-translate"></i>
              </div>
              <h4>{isRTL ? "اللغات والترجمة" : "Languages & Translation"}</h4>
              <p>{isRTL ? "الإنجليزية، الفرنسية، الترجمة، اللغويات" : "English, French, Translation, Linguistics"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT LIFE */}
      <section className="section-country life-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "الحياة الطلابية" : "Student Life"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "تجربة جامعية غنية ومتنوعة في أجمل مدن العالم" : "Rich and diverse university experience in world's most beautiful cities"}
            </p>
          </div>
          
          <div className="cities-grid">
            <div className="city-card">
              <div className="city-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)'}}></div>
              <div className="city-content">
                <h4>{isRTL ? "تورونتو" : "Toronto"}</h4>
                <p>{isRTL ? "العاصمة الاقتصادية وموطن جامعة تورونتو" : "Economic capital and home to University of Toronto"}</p>
                <div className="city-tag">
                  <i className="bi bi-buildings"></i>
                  <span>{isRTL ? "عاصمة كندا الاقتصادية" : "Canada's Economic Capital"}</span>
                </div>
              </div>
            </div>
            
            <div className="city-card">
              <div className="city-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)'}}></div>
              <div className="city-content">
                <h4>{isRTL ? "فانكوفر" : "Vancouver"}</h4>
                <p>{isRTL ? "طبيعة خلابة وموطن جامعة UBC" : "Stunning nature and home to UBC"}</p>
                <div className="city-tag">
                  <i className="bi bi-tree"></i>
                  <span>{isRTL ? "مدينة الطبيعة" : "Nature City"}</span>
                </div>
              </div>
            </div>
            
            <div className="city-card">
              <div className="city-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)'}}></div>
              <div className="city-content">
                <h4>{isRTL ? "مونتريال" : "Montreal"}</h4>
                <p>{isRTL ? "مدينة ثنائية اللغة وموطن جامعة ماكغيل" : "Bilingual city and home to McGill University"}</p>
                <div className="city-tag">
                  <i className="bi bi-translate"></i>
                  <span>{isRTL ? "مدينة الثقافة" : "Cultural City"}</span>
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
                <i className="bi bi-snow"></i>
              </div>
              <h4>{isRTL ? "أنشطة شتوية" : "Winter Activities"}</h4>
              <p>{isRTL ? "التزلج، الهوكي، ومهرجانات الشتاء" : "Skiing, hockey, and winter festivals"}</p>
            </div>
            
            <div className="activity-card">
              <div className="activity-icon">
                <i className="bi bi-music-note-beamed"></i>
              </div>
              <h4>{isRTL ? "مهرجانات وفعاليات" : "Festivals & Events"}</h4>
              <p>{isRTL ? "مهرجانات موسيقية، ثقافية، وفنية على مدار العام" : "Music, cultural, and art festivals year-round"}</p>
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
      <section className="section-country work-section">
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
                  <h5>{isRTL ? "العمل داخل وخارج الحرم الجامعي" : "On & Off-Campus Work"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "حتى 20 ساعة أسبوعياً خلال الفصل" : "Up to 20 hours weekly during semester"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "بدوام كامل في العطلات الرسمية" : "Full-time during official holidays"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "بدون تصريح عمل إضافي" : "No additional work permit needed"}</li>
                  </ul>
                </div>
                
                <div className="work-option">
                  <h5>{isRTL ? "التدريب العملي" : "Co-op Programs"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "برامج متكاملة مع الدراسة" : "Integrated programs with studies"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "خبرة عمل بأجر في مجال التخصص" : "Paid work experience in field of study"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "تصريح عمل مؤقت للتدريب" : "Temporary work permit for co-op"}</li>
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
                  <h5>PGWP {isRTL ? "(تصريح العمل بعد التخرج)" : "(Post-Graduation Work Permit)"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "عمل لمدة تصل إلى 3 سنوات" : "Work for up to 3 years"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "لجميع الخريجين من مؤسسات DLI" : "For all graduates from DLI institutions"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "خبرة تؤهل للإقامة الدائمة" : "Experience qualifies for permanent residence"}</li>
                  </ul>
                </div>
                
                <div className="work-option">
                  <h5>{isRTL ? "برامج الهجرة" : "Immigration Programs"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "Express Entry للنقاط العالية" : "Express Entry for high scores"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "برامج المقاطعات PNP" : "Provincial Nominee Programs (PNP)"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "خبرة العمل الكندية تزيد الفرص" : "Canadian work experience increases chances"}</li>
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
              {isRTL ? "دليل شامل للحصول على تصريح الدراسة الكندي" : "Complete guide to obtaining Canadian study permit"}
            </p>
          </div>
          
          <div className="steps-timeline">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>{isRTL ? "القبول الجامعي من مؤسسة DLI" : "University Admission from DLI Institution"}</h4>
                <p>{isRTL ? "الحصول على خطاب قبول من مؤسسة تعليمية معتمدة (DLI)" : "Get acceptance letter from designated learning institution (DLI)"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>{isRTL ? "إثبات القدرة المالية" : "Proof of Financial Capability"}</h4>
                <p>{isRTL ? "تجهيز كشوفات بنكية تغطي السنة الأولى + 10,000 دولار سنوياً" : "Prepare bank statements covering first year + $10,000 annually"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>{isRTL ? "التقديم عبر موقع IRCC" : "Apply through IRCC Website"}</h4>
                <p>{isRTL ? "إنشاء حساب وتعبئة استمارة طلب تصريح الدراسة" : "Create account and fill study permit application form"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>{isRTL ? "دفع الرسوم ($150)" : "Pay Fees ($150)"}</h4>
                <p>{isRTL ? "دفع رسوم تصريح الدراسة والبصمات ($85 إضافية)" : "Pay study permit and biometrics fees ($85 additional)"}</p>
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
                <p>{isRTL ? "حجز موعد البصمات وإجراء الفحص الطبي إذا لزم" : "Schedule biometrics appointment and medical exam if required"}</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">7</div>
              <div className="step-content">
                <h4>{isRTL ? "انتظار القرار" : "Wait for Decision"}</h4>
                <p>{isRTL ? "معالجة الطلب (6-12 أسبوعاً) واستلام القرار" : "Application processing (6-12 weeks) and receive decision"}</p>
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
              {isRTL ? "تجهيز الملف الكامل للحصول على تصريح الدراسة" : "Prepare complete file for study permit application"}
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
              <h5>{isRTL ? "خطاب القبول LOA" : "Letter of Acceptance (LOA)"}</h5>
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
              <h5>{isRTL ? "الفحص الطبي" : "Medical Exam"}</h5>
            </div>
            
            <div className="document-card">
              <div className="doc-icon">
                <i className="bi bi-file-earmark-text"></i>
              </div>
              <h5>{isRTL ? "CAQ (لكيبيك)" : "CAQ (for Quebec)"}</h5>
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
              {isRTL ? "نصائح عملية لضمان نجاح طلب تصريح الدراسة" : "Practical tips to ensure study permit application success"}
            </p>
          </div>
          
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-chat-left-text"></i>
              </div>
              <h5>{isRTL ? "خطاب نية قوي" : "Strong Statement of Purpose"}</h5>
              <p>{isRTL ? "اشرح أسباب اختيار كندا وتخصصك وخططك المستقبلية" : "Explain why you chose Canada, your major, and future plans"}</p>
            </div>
            
            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-arrow-return-right"></i>
              </div>
              <h5>{isRTL ? "روابط قوية ببلدك" : "Strong Home Country Ties"}</h5>
              <p>{isRTL ? "أظهر أن لديك أسباباً قوية للعودة بعد الدراسة" : "Show you have strong reasons to return after studies"}</p>
            </div>
            
            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-bar-chart"></i>
              </div>
              <h5>{isRTL ? "إثبات مالي واضح" : "Clear Financial Proof"}</h5>
              <p>{isRTL ? "تأكد أن أوراقك المالية حديثة ومترجمة" : "Ensure your financial documents are recent and translated"}</p>
            </div>
            
            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-person-check"></i>
              </div>
              <h5>{isRTL ? "ثقة وهدوء" : "Confidence & Calmness"}</h5>
              <p>{isRTL ? "كن واثقاً وهادئاً أثناء المقابلة" : "Be confident and calm during the interview"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WITH KAYA */}
      <section className="section-country kaya-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "مع كايا: طريقك إلى كندا أسهل" : "With Kaya: Your Path to Canada is Easier"}
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
              <h5>{isRTL ? "اختيار الجامعة والمقاطعة" : "Choosing University & Province"}</h5>
              <p>{isRTL ? "حسب ميزانيتك وتخصصك وفرص الهجرة المستقبلية" : "Based on your budget, major, and future immigration opportunities"}</p>
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
              <p>{isRTL ? "تحضير خطاب النية والإثباتات المالية" : "Preparing statement of purpose and financial proofs"}</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-airplane-engines"></i>
              </div>
              <h5>{isRTL ? "متابعة بعد الوصول" : "Post-Arrival Follow-up"}</h5>
              <p>{isRTL ? "التسجيل، السكن، وأول فرصة عمل" : "Registration, housing, and first job opportunity"}</p>
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
      <section className="study-country-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content" dir={isRTL ? "rtl" : "ltr"}>
              <h2 className="cta-title">
                {isRTL ? "استعد لدراستك في كندا" : "Prepare for Your Study in Canada"}
              </h2>
              <p className="cta-subtitle">
                {isRTL ? "ابدأ رحلتك الأكاديمية مع خبراء الدراسة في كندا" : "Start your academic journey with Canada study experts"}
              </p>
              
              <div className="cta-buttons">
                <a href="/contact" className="btn-cta-primary">
                  <i className="bi bi-calendar-check me-2"></i>
                  {isRTL ? "احجز استشارة مجانية" : "Book Free Consultation"}
                </a>
                <Link href="/study-visas" className="btn-cta-secondary">
                  <i className="bi  me-2"></i>
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