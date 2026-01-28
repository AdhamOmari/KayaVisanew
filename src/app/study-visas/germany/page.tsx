'use client'
import "@/styles/shared-study.css"
import "@/styles/canada.css"

import "bootstrap/dist/css/bootstrap.min.css"
import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import studyGermanyDataImport from '@/data/study-germany.json'
import { useState, useEffect } from 'react'
import GlobalLoading from '@/components/GlobalLoading'

export default function StudyGermanyPage() {
  const { locale } = useI18n()
  const studyGermanyData: any = studyGermanyDataImport
  const data = locale === 'ar' ? studyGermanyData.ar : studyGermanyData.en
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

      {/* GERMANY HERO */}
      <section className="study-hero gr-hero">
        <div className="container">
          <div className="hero-content" dir={isRTL ? "rtl" : "ltr"}>
            <div className="hero-flag">
              <img src="https://flagcdn.com/w160/de.png" alt="Germany Flag" />
            </div>
            <h1 className="hero-title">
              <span className="hero-title-main">{data.title}</span>
              <span className="hero-title-sub">{data.hero.subtitle}</span>
            </h1>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">#1</div>
                <div className="stat-label">
                  {isRTL ? "تعليم مجاني" : "Free Education"}
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">400K+</div>
                <div className="stat-label">
                  {isRTL ? "طلاب دوليين" : "International Students"}
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">120</div>
                <div className="stat-label">
                  {isRTL ? "يوم عمل سنوياً" : "Work Days Yearly"}
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
            <i className="bi bi-building"></i>
          </div>
          <div className="decoration-item">
            <i className="bi bi-gear"></i>
          </div>
          <div className="decoration-item">
            <i className="bi bi-book"></i>
          </div>
        </div>
      </section>

      {/* WHY GERMANY */}
      <section className="section-country why-section de-why">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "لماذا ألمانيا؟" : "Why Germany?"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "قوة التعليم والاقتصاد في قلب أوروبا" : "Education and economic power in the heart of Europe"}
            </p>
          </div>

          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-cash"></i>
              </div>
              <h4>{isRTL ? "تعليم شبه مجاني" : "Almost Free Education"}</h4>
              <p>{isRTL ? "معظم الجامعات الحكومية بدون رسوم دراسية" : "Most public universities with no tuition fees"}</p>
            </div>

            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-award"></i>
              </div>
              <h4>{isRTL ? "جودة أكاديمية عالية" : "High Academic Quality"}</h4>
              <p>{isRTL ? "جامعات مصنّفة عالمياً في الهندسة والطب" : "World-ranked universities in engineering and medicine"}</p>
            </div>

            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h4>{isRTL ? "فرص عمل واسعة" : "Wide Job Opportunities"}</h4>
              <p>{isRTL ? "120 يوم عمل كامل أو 240 نصف يوم سنوياً" : "120 full days or 240 half days work yearly"}</p>
            </div>

            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-globe-europe-africa"></i>
              </div>
              <h4>{isRTL ? "موقع استراتيجي" : "Strategic Location"}</h4>
              <p>{isRTL ? "قلب أوروبا وسهولة السفر بين دول الاتحاد" : "Heart of Europe, easy travel between EU countries"}</p>
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
              {isRTL ? "خيارات دراسية متنوعة باللغتين الألمانية والإنجليزية" : "Diverse study options in German and English"}
            </p>
          </div>

          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-translate"></i>
              </div>
              <h4>{isRTL ? "برامج اللغة الألمانية" : "German Language Programs"}</h4>
              <p>{isRTL ? "تحضيرية لشهادات TestDaF/DSH للدراسة" : "Preparatory for TestDaF/DSH certificates for study"}</p>
              <div className="program-tag">
                <span>{isRTL ? "تحضيري" : "Preparatory"}</span>
              </div>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-mortarboard"></i>
              </div>
              <h4>{isRTL ? "بكالوريوس" : "Bachelor's Degree"}</h4>
              <p>{isRTL ? "برامج بكالوريوس مدتها 3 سنوات في مختلف التخصصات" : "3-year bachelor's programs in various fields"}</p>
              <div className="program-tag">
                <span>{isRTL ? "3 سنوات" : "3 Years"}</span>
              </div>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-person-arms-up"></i>
              </div>
              <h4>{isRTL ? "ماجستير" : "Master's Degree"}</h4>
              <p>{isRTL ? "برامج ماجستير متقدمة باللغتين الألمانية والإنجليزية" : "Advanced master's programs in German and English"}</p>
              <div className="program-tag">
                <span>{isRTL ? "متقدم" : "Advanced"}</span>
              </div>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-search"></i>
              </div>
              <h4>{isRTL ? "دكتوراه" : "PhD"}</h4>
              <p>{isRTL ? "برامج بحثية متقدمة في مراكز أبحاث عالمية" : "Advanced research programs in global research centers"}</p>
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
              <h4>Studienkolleg {isRTL ? "(التحضيري الجامعي)" : "(University Preparation)"}</h4>
              <p>{isRTL ? "برنامج تحضيري لمعادلة الشهادات غير الألمانية. مطلوب للطلاب الذين يحتاجون إلى سنة تحضيرية قبل بدء الدراسة الجامعية في ألمانيا." : "Preparatory program for non-German certificate equivalency. Required for students needing preparatory year before university studies in Germany."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ESTIMATED COSTS */}
      <section className="section-country costs-section de-costs">
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
                    <div className="range-type">{isRTL ? "الجامعات الحكومية" : "Public Universities"}</div>
                    <div className="range-value">€0 - €350</div>
                    <div className="range-period">{isRTL ? "لكل فصل" : "Per Semester"}</div>
                  </div>
                  <div className="range-item">
                    <div className="range-type">{isRTL ? "الجامعات الخاصة" : "Private Universities"}</div>
                    <div className="range-value">€5,000 - €20,000</div>
                    <div className="range-period">{isRTL ? "سنوياً" : "Per Year"}</div>
                  </div>
                  <div className="range-item">
                    <div className="range-type">{isRTL ? "برامج اللغة" : "Language Programs"}</div>
                    <div className="range-value">€500 - €2,000</div>
                    <div className="range-period">{isRTL ? "لكل دورة" : "Per Course"}</div>
                  </div>
                  <div className="range-item">
                    <div className="range-type">{isRTL ? "رسوم الفصل الدراسي" : "Semester Fees"}</div>
                    <div className="range-value">€200 - €400</div>
                    <div className="range-period">{isRTL ? "لكل فصل" : "Per Semester"}</div>
                  </div>
                </div>
                <p className="cost-note">
                  {isRTL ? "تشمل رسوم الفصل تذاكر مواصلات مجانية في معظم المدن" : "Semester fees include free public transport in most cities"}
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
                      <span className="detail-price">€300 - €700</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-cup-hot"></i>
                    <div className="detail-content">
                      <span className="detail-title">{isRTL ? "الطعام" : "Food"}</span>
                      <span className="detail-price">€200 - €300</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-bus-front"></i>
                    <div className="detail-content">
                      <span className="detail-title">{isRTL ? "المواصلات" : "Transportation"}</span>
                      <span className="detail-price">€30 - €100</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-shield-check"></i>
                    <div className="detail-content">
                      <span className="detail-title">{isRTL ? "التأمين الصحي" : "Health Insurance"}</span>
                      <span className="detail-price">€80 - €120</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                </div>
                <div className="total-cost">
                  <span className="total-label">{isRTL ? "المجموع الشهري:" : "Monthly Total:"}</span>
                  <span className="total-value">€850 - €1,200</span>
                </div>
                <div className="blocked-account-info" style={{ marginTop: '20px', padding: '15px', background: '#f8f9fa', borderRadius: '10px' }}>
                  <h6 className="text-center" style={{ color: '#1c3269', fontWeight: '600' }}>
                    {isRTL ? "الحساب البنكي المغلق (Blocked Account)" : "Blocked Bank Account"}
                  </h6>
                  <p className="text-center mb-0" style={{ color: '#6c757d', fontSize: '0.9rem' }}>
                    {isRTL ? "مطلوب إيداع حوالي €11,208 لتغطية سنة كاملة" : "Required deposit of approximately €11,208 for one year"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR MAJORS */}
      <section className="section-country majors-section de-majors">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "التخصصات الأكثر طلباً" : "Most Popular Majors"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "مجالات الدراسة الأكثر نمواً في سوق العمل الألماني" : "Fastest growing study fields in German job market"}
            </p>
          </div>

          <div className="majors-grid">
            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-gear"></i>
              </div>
              <h4>{isRTL ? "الهندسة" : "Engineering"}</h4>
              <p>{isRTL ? "ميكانيكية، كهربائية، سيارات، صناعية" : "Mechanical, Electrical, Automotive, Industrial"}</p>
            </div>

            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-heart-pulse"></i>
              </div>
              <h4>{isRTL ? "الطب وعلوم الحياة" : "Medicine & Life Sciences"}</h4>
              <p>{isRTL ? "طب بشري، صيدلة، تكنولوجيا حيوية" : "Human Medicine, Pharmacy, Biotechnology"}</p>
            </div>

            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-cpu"></i>
              </div>
              <h4>{isRTL ? "علوم الكمبيوتر" : "Computer Science"}</h4>
              <p>{isRTL ? "ذكاء اصطناعي، أمن معلومات، برمجة" : "AI, Cybersecurity, Programming"}</p>
            </div>

            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h4>{isRTL ? "إدارة الأعمال والاقتصاد" : "Business & Economics"}</h4>
              <p>{isRTL ? "إدارة، تسويق، اقتصاد، مالية" : "Management, Marketing, Economics, Finance"}</p>
            </div>

            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-lightbulb"></i>
              </div>
              <h4>{isRTL ? "العلوم التطبيقية" : "Applied Sciences"}</h4>
              <p>{isRTL ? "كيمياء، فيزياء، رياضيات، إحصاء" : "Chemistry, Physics, Mathematics, Statistics"}</p>
            </div>

            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <h4>{isRTL ? "القانون والعلوم السياسية" : "Law & Political Science"}</h4>
              <p>{isRTL ? "قانون دولي، علاقات دولية، سياسة" : "International Law, International Relations, Politics"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT LIFE */}
      <section className="section-country life-section de-life">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "الحياة الطلابية في ألمانيا" : "Student Life in Germany"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "تجربة تعليمية استثنائية في مدن تاريخية وحديثة" : "Exceptional educational experience in historic and modern cities"}
            </p>
          </div>

          <div className="cities-grid">
            <div className="city-card">
              <div className="city-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559834138-03ff5c5d0a8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)' }}></div>
              <div className="city-content">
                <h4>{isRTL ? "برلين" : "Berlin"}</h4>
                <p>{isRTL ? "عاصمة الثقافة والفنون والتاريخ" : "Capital of culture, arts, and history"}</p>
                <div className="city-tag">
                  <i className="bi bi-palette"></i>
                  <span>{isRTL ? "عاصمة الثقافة" : "Culture Capital"}</span>
                </div>
              </div>
            </div>

            <div className="city-card">
              <div className="city-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)' }}></div>
              <div className="city-content">
                <h4>{isRTL ? "ميونخ" : "Munich"}</h4>
                <p>{isRTL ? "قلب الصناعة والتكنولوجيا والجامعات المرموقة" : "Heart of industry, technology, and prestigious universities"}</p>
                <div className="city-tag">
                  <i className="bi bi-gear"></i>
                  <span>{isRTL ? "عاصمة التكنولوجيا" : "Technology Capital"}</span>
                </div>
              </div>
            </div>

            <div className="city-card">
              <div className="city-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1575917649705-5c0e6b46f6b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)' }}></div>
              <div className="city-content">
                <h4>{isRTL ? "هايدلبرغ" : "Heidelberg"}</h4>
                <p>{isRTL ? "مدينة الجامعات التاريخية والأجواء الأكاديمية" : "City of historic universities and academic atmosphere"}</p>
                <div className="city-tag">
                  <i className="bi bi-book"></i>
                  <span>{isRTL ? "مدينة المعرفة" : "City of Knowledge"}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon">
                <i className="bi bi-people"></i>
              </div>
              <h4>{isRTL ? "نوادي طلابية متنوعة" : "Diverse Student Clubs"}</h4>
              <p>{isRTL ? "أكثر من 400,000 طالب دولي من مختلف الجنسيات" : "Over 400,000 international students from various nationalities"}</p>
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
              <p>{isRTL ? "كرة قدم، سباحة، جري، ركوب دراجات" : "Football, swimming, running, cycling"}</p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">
                <i className="bi bi-compass"></i>
              </div>
              <h4>{isRTL ? "سفر داخل أوروبا" : "Travel Within Europe"}</h4>
              <p>{isRTL ? "سهولة زيارة دول الاتحاد الأوروبي المجاورة" : "Easy visits to neighboring EU countries"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK OPPORTUNITIES */}
      <section className="section-country work-section de-work">
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
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "120 يوم عمل كامل سنوياً" : "120 full work days yearly"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "أو 240 نصف يوم عمل" : "Or 240 half work days"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "بدون تصريح عمل إضافي" : "Without additional work permit"}</li>
                  </ul>
                </div>

                <div className="work-option">
                  <h5>{isRTL ? "أنواع الوظائف" : "Job Types"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "وظائف في الجامعات والبحث العلمي" : "Jobs in universities and research"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "شركات صناعية وتكنولوجية" : "Industrial and technology companies"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "مجال الخدمات والضيافة" : "Service and hospitality sector"}</li>
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
                  <h5>{isRTL ? "إقامة البحث عن عمل" : "Job Seeker Residence Permit"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "18 شهراً للبحث عن عمل" : "18 months to search for job"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "مع إمكانية العمل خلالها" : "With ability to work during this period"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "للخريجين من الجامعات الألمانية" : "For graduates from German universities"}</li>
                  </ul>
                </div>

                <div className="work-option">
                  <h5>{isRTL ? "إقامة العمل الدائمة" : "Permanent Work Residence"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "بعد سنتين من العمل في ألمانيا" : "After 2 years of work in Germany"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "الإقامة الدائمة (Niederlassungserlaubnis)" : "Permanent residence (Niederlassungserlaubnis)"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "مواطنة ألمانية بعد 8 سنوات" : "German citizenship after 8 years"}</li>
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
              {isRTL ? "دليل شامل للحصول على تأشيرة الدراسة الألمانية" : "Complete guide to obtaining German study visa"}
            </p>
          </div>

          <div className="steps-timeline">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>{isRTL ? "اختيار البرنامج والجامعة" : "Choosing Program & University"}</h4>
                <p>{isRTL ? "البحث عبر DAAD والحصول على قبول جامعي" : "Research through DAAD and get university admission"}</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>{isRTL ? "فتح حساب بنكي مغلق" : "Open Blocked Bank Account"}</h4>
                <p>{isRTL ? "إيداع حوالي €11,208 لتغطية سنة المعيشة" : "Deposit approximately €11,208 for one year living"}</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>{isRTL ? "الحصول على تأمين صحي" : "Get Health Insurance"}</h4>
                <p>{isRTL ? "تأمين صحي للطلاب يغطي كامل فترة الدراسة" : "Student health insurance covering entire study period"}</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>{isRTL ? "حجز موعد في السفارة" : "Book Embassy Appointment"}</h4>
                <p>{isRTL ? "حجز موعد في السفارة/القنصلية الألمانية" : "Book appointment at German embassy/consulate"}</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">5</div>
              <div className="step-content">
                <h4>{isRTL ? "تجهيز وتقديم المستندات" : "Prepare & Submit Documents"}</h4>
                <p>{isRTL ? "تجهيز ملف كامل وتقديمه في المقابلة" : "Prepare complete file and submit in interview"}</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">6</div>
              <div className="step-content">
                <h4>{isRTL ? "دفع الرسوم والمقابلة" : "Pay Fees & Interview"}</h4>
                <p>{isRTL ? "دفع €75 والذهاب للمقابلة الشخصية" : "Pay €75 and attend personal interview"}</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">7</div>
              <div className="step-content">
                <h4>{isRTL ? "انتظار القرار" : "Wait for Decision"}</h4>
                <p>{isRTL ? "معالجة الطلب (6-12 أسبوع) واستلام التأشيرة" : "Application processing (6-12 weeks) and receive visa"}</p>
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
              <h5>{isRTL ? "خطاب القبول الجامعي" : "University Admission Letter"}</h5>
            </div>

            <div className="document-card">
              <div className="doc-icon">
                <i className="bi bi-cash-coin"></i>
              </div>
              <h5>{isRTL ? "حساب بنكي مغلق" : "Blocked Bank Account"}</h5>
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
                <i className="bi bi-translate"></i>
              </div>
              <h5>{isRTL ? "شهادة اللغة" : "Language Certificate"}</h5>
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
              <h5>{isRTL ? "حساب بنكي مغلق مسبقاً" : "Pre-opened Blocked Account"}</h5>
              <p>{isRTL ? "افتح الحساب قبل التقديم بفترة كافية" : "Open account well before applying"}</p>
            </div>

            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-translate"></i>
              </div>
              <h5>{isRTL ? "ترجمة وتصديق جميع المستندات" : "Translate & Certify All Documents"}</h5>
              <p>{isRTL ? "ترجمة ألمانية/إنجليزية مع تصديق وزارة الخارجية" : "German/English translation with foreign ministry certification"}</p>
            </div>

            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-calendar-check"></i>
              </div>
              <h5>{isRTL ? "تقديم مبكر جداً" : "Very Early Submission"}</h5>
              <p>{isRTL ? "قدم الطلب قبل 6 أشهر من بدء الدراسة" : "Submit application 6 months before study start"}</p>
            </div>

            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-file-earmark-medical"></i>
              </div>
              <h5>{isRTL ? "تأمين صحي مقبول" : "Accepted Health Insurance"}</h5>
              <p>{isRTL ? "تأكد من أن التأمين مقبول في ألمانيا" : "Ensure insurance is accepted in Germany"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WITH KAYA */}
      <section className="section-country kaya-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "مع كايا: طريقك إلى ألمانيا أسهل" : "With Kaya: Your Path to Germany is Easier"}
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
              <h5>{isRTL ? "اختيار الجامعة والبرنامج" : "Choosing University & Program"}</h5>
              <p>{isRTL ? "بما يتناسب مع ميزانيتك وخططك المهنية" : "Matching your budget and career plans"}</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-file-earmark-text"></i>
              </div>
              <h5>{isRTL ? "فتح الحساب البنكي المغلق" : "Opening Blocked Bank Account"}</h5>
              <p>{isRTL ? "مساعدتك في إجراءات الإيداع والتوثيق" : "Helping with deposit procedures and documentation"}</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-hand-thumbs-up"></i>
              </div>
              <h5>{isRTL ? "تجهيز التأمين الصحي" : "Preparing Health Insurance"}</h5>
              <p>{isRTL ? "تأمين صحي مقبول في ألمانيا بكامل التغطية" : "Accepted health insurance in Germany with full coverage"}</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-airplane-engines"></i>
              </div>
              <h5>{isRTL ? "متابعة بعد الوصول" : "Post-Arrival Follow-up"}</h5>
              <p>{isRTL ? "التسجيل، الإقامة، الحساب البنكي، السكن" : "Registration, residence permit, bank account, housing"}</p>
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
      <section className="study-country-cta de-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content" dir={isRTL ? "rtl" : "ltr"}>
              <h2 className="cta-title">
                {isRTL ? "استعد لدراستك في ألمانيا" : "Prepare for Your Study in Germany"}
              </h2>
              <p className="cta-subtitle">
                {isRTL ? "ابدأ رحلتك الأكاديمية مع خبراء الدراسة في ألمانيا" : "Start your academic journey with Germany study experts"}
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
                  <span>97% {isRTL ? "نجاح التأشيرة" : "Visa Success"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}