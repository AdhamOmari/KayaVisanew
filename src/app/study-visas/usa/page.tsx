'use client'
import "@/styles/usa.css"
import "@/styles/shared-study.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import studyUsaDataImport from '@/data/study-usa.json'
import { useState, useEffect } from 'react'
import GlobalLoading from '@/components/GlobalLoading'

export default function StudyUsaPage() {
  const { locale } = useI18n()
  const studyUsaData: any = studyUsaDataImport
  const data = locale === 'ar' ? studyUsaData.ar : studyUsaData.en
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
    <div className="study-country-page usa-page">

      {/* USA HERO */}
      <section className="usa-hero">
        <div className="container">
          <div className="hero-content" dir={isRTL ? "rtl" : "ltr"}>
            <div className="hero-flag">
              <img src="https://flagcdn.com/w160/us.png" alt="USA Flag" />
            </div>
            <h1 className="hero-title">
              <span className="hero-title-main">{data.title}</span>
              <span className="hero-title-sub">{data.hero.subtitle}</span>
            </h1>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">#1</div>
                <div className="stat-label">
                  {isRTL ? "جامعات عالمية" : "World Universities"}
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1M+</div>
                <div className="stat-label">
                  {isRTL ? "طلاب دوليين" : "International Students"}
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">$350B</div>
                <div className="stat-label">
                  {isRTL ? "تمويل بحثي" : "Research Funding"}
                </div>
              </div>
            </div>

            <div className="hero-cta">
              <a href="#application" className="btn-usa-primary">
                <i className="bi bi-list-check me-2"></i>
                {isRTL ? "خطوات التقديم" : "Application Steps"}
              </a>
              <a href="/contact" className="btn-usa-secondary">
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
            <i className="bi bi-thermometer"></i>
          </div>
          <div className="decoration-item">
            <i className="bi bi-person-arms-up"></i>
          </div>
        </div>
      </section>

      {/* WHY USA */}
      <section className="section-country why-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "لماذا أمريكا؟" : "Why USA?"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "موطن التعليم العالمي والابتكار" : "Home of global education and innovation"}
            </p>
          </div>

          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-building"></i>
              </div>
              <h4>{isRTL ? "أفضل الجامعات عالمياً" : "World's Best Universities"}</h4>
              <p>{isRTL ? "موطن لأفضل الجامعات عالمياً مثل Harvard، MIT، Stanford." : "Home to world's best universities like Harvard, MIT, Stanford."}</p>
            </div>

            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-people"></i>
              </div>
              <h4>{isRTL ? "تنوع ثقافي ضخم" : "Huge Cultural Diversity"}</h4>
              <p>{isRTL ? "يضم أكثر من مليون طالب دولي سنويًا من جميع أنحاء العالم." : "Hosts over 1 million international students annually from around the world."}</p>
            </div>

            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-thermometer"></i>
              </div>
              <h4>{isRTL ? "قوة في البحث العلمي" : "Research Powerhouse"}</h4>
              <p>{isRTL ? "تمويل ضخم وفرص بحثية متقدمة في جميع التخصصات." : "Massive funding and advanced research opportunities across all fields."}</p>
            </div>

            <div className="reason-card">
              <div className="reason-icon">
                <i className="bi bi-star"></i>
              </div>
              <h4>{isRTL ? "حياة جامعية نابضة" : "Vibrant Campus Life"}</h4>
              <p>{isRTL ? "أنشطة طلابية، جمعيات، وفعاليات ثقافية وفنية متنوعة." : "Student activities, clubs, and diverse cultural and artistic events."}</p>
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
              {isRTL ? "خيارات دراسية تناسب جميع المستويات" : "Study options for all levels"}
            </p>
          </div>

          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-translate"></i>
              </div>
              <h4>{isRTL ? "معاهد اللغة الإنجليزية" : "English Language Institutes"}</h4>
              <p>{isRTL ? "برامج ESL لتطوير المهارات اللغوية" : "ESL programs for language skills development"}</p>
              <div className="program-tag">
                <span>{isRTL ? "مرن" : "Flexible"}</span>
              </div>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <i className="bi bi-award"></i>
              </div>
              <h4>{isRTL ? "الدبلوم" : "Diploma"}</h4>
              <p>{isRTL ? "برامج مهنية متخصصة قصيرة المدة" : "Specialized vocational short-term programs"}</p>
              <div className="program-tag">
                <span>{isRTL ? "1-2 سنوات" : "1-2 Years"}</span>
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
              <p>{isRTL ? "قبول جامعي بشرط إنهاء برنامج اللغة الإنجليزية أولاً. مثالي للطلاب الذين يحتاجون لتحسين مهاراتهم اللغوية." : "University admission conditional on completing English language program first. Ideal for students needing language improvement."}</p>
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
                    <div className="range-value">$10,000 - $15,000</div>
                    <div className="range-period">{isRTL ? "سنوياً" : "Per Year"}</div>
                  </div>
                  <div className="range-item">
                    <div className="range-type">{isRTL ? "جامعات حكومية" : "Public Universities"}</div>
                    <div className="range-value">$25,000 - $45,000</div>
                    <div className="range-period">{isRTL ? "سنوياً" : "Per Year"}</div>
                  </div>
                  <div className="range-item">
                    <div className="range-type">{isRTL ? "جامعات خاصة مرموقة" : "Prestigious Private Universities"}</div>
                    <div className="range-value">$50,000 - $80,000</div>
                    <div className="range-period">{isRTL ? "سنوياً" : "Per Year"}</div>
                  </div>
                </div>
                <p className="cost-note">
                  {isRTL ? "تختلف التكاليف حسب التخصص والمؤسسة التعليمية" : "Costs vary by major and educational institution"}
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
                      <span className="detail-price">$800 - $2,500</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-cup-hot"></i>
                    <div className="detail-content">
                      <span className="detail-title">{isRTL ? "الطعام" : "Food"}</span>
                      <span className="detail-price">$400 - $800</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-bus-front"></i>
                    <div className="detail-content">
                      <span className="detail-title">{isRTL ? "المواصلات" : "Transportation"}</span>
                      <span className="detail-price">$100 - $300</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-shield-check"></i>
                    <div className="detail-content">
                      <span className="detail-title">{isRTL ? "التأمين الصحي" : "Health Insurance"}</span>
                      <span className="detail-price">$200 - $500</span>
                      <span className="detail-period">{isRTL ? "شهرياً" : "Monthly"}</span>
                    </div>
                  </div>
                </div>
                <div className="total-cost">
                  <span className="total-label">{isRTL ? "المجموع الشهري:" : "Monthly Total:"}</span>
                  <span className="total-value">$1,500 - $3,000</span>
                </div>
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
              {isRTL ? "مجالات الدراسة الأكثر نمواً وطلباً في سوق العمل" : "Fastest growing study fields with high job demand"}
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
              <p>{isRTL ? "الطب، التمريض، الصحة العامة" : "Medicine, Nursing, Public Health"}</p>
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
                <i className="bi bi-megaphone"></i>
              </div>
              <h4>{isRTL ? "التسويق" : "Marketing"}</h4>
              <p>{isRTL ? "التسويق الرقمي، تحليل البيانات، الإعلام" : "Digital Marketing, Data Analytics, Media"}</p>
            </div>

            <div className="major-card">
              <div className="major-icon">
                <i className="bi bi-people"></i>
              </div>
              <h4>{isRTL ? "العلوم الاجتماعية" : "Social Sciences"}</h4>
              <p>{isRTL ? "علم النفس، الاجتماع، العلاقات الدولية" : "Psychology, Sociology, International Relations"}</p>
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
              {isRTL ? "تجربة جامعية غنية ومتنوعة" : "Rich and diverse university experience"}
            </p>
          </div>

          <div className="cities-grid">
            <div className="city-card">
              <div className="city-image boston"></div>
              <div className="city-content">
                <h4>{isRTL ? "بوسطن" : "Boston"}</h4>
                <p>{isRTL ? "مدينة الجامعات: Harvard، MIT، Boston University" : "University City: Harvard, MIT, Boston University"}</p>
                <div className="city-tag">
                  <i className="bi bi-mortarboard"></i>
                  <span>{isRTL ? "عاصمة التعليم" : "Education Capital"}</span>
                </div>
              </div>
            </div>

            <div className="city-card">
              <div className="city-image newyork"></div>
              <div className="city-content">
                <h4>{isRTL ? "نيويورك" : "New York"}</h4>
                <p>{isRTL ? "مركز عالمي للأعمال والثقافة والفنون" : "Global center for business, culture and arts"}</p>
                <div className="city-tag">
                  <i className="bi bi-buildings"></i>
                  <span>{isRTL ? "عاصمة العالم" : "World Capital"}</span>
                </div>
              </div>
            </div>

            <div className="city-card">
              <div className="city-image california"></div>
              <div className="city-content">
                <h4>{isRTL ? "كاليفورنيا" : "California"}</h4>
                <p>{isRTL ? "قلب التكنولوجيا والابتكار (Silicon Valley)" : "Heart of technology and innovation (Silicon Valley)"}</p>
                <div className="city-tag">
                  <i className="bi bi-cpu"></i>
                  <span>{isRTL ? "عاصمة التكنولوجيا" : "Tech Capital"}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon">
                <i className="bi bi-people"></i>
              </div>
              <h4>{isRTL ? "جمعيات طلابية" : "Student Clubs"}</h4>
              <p>{isRTL ? "أكثر من 500 جمعية طلابية متنوعة" : "Over 500 diverse student clubs"}</p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">
                <i className="bi bi-controller"></i>
              </div>
              <h4>{isRTL ? "رياضات جامعية" : "University Sports"}</h4>
              <p>{isRTL ? "فرق رياضية ومباريات على مستوى عالٍ" : "High-level sports teams and competitions"}</p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">
                <i className="bi bi-music-note-beamed"></i>
              </div>
              <h4>{isRTL ? "فعاليات ثقافية" : "Cultural Events"}</h4>
              <p>{isRTL ? "حفلات موسيقية، معارض فنية، وعروض مسرحية" : "Music concerts, art exhibitions, theater shows"}</p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">
                <i className="bi bi-globe-americas"></i>
              </div>
              <h4>{isRTL ? "تنوع ثقافي" : "Cultural Diversity"}</h4>
              <p>{isRTL ? "مجتمع طلابي من أكثر من 150 دولة" : "Student community from over 150 countries"}</p>
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
              {isRTL ? "خيارات العمل القانونية للطلاب الدوليين" : "Legal work options for international students"}
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
                  <h5>{isRTL ? "العمل داخل الحرم الجامعي" : "On-Campus Work"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "حتى 20 ساعة أسبوعياً" : "Up to 20 hours weekly"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "بدوام كامل في العطل" : "Full-time during holidays"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "لا يحتاج تصريح عمل خاص" : "No special work permit needed"}</li>
                  </ul>
                </div>

                <div className="work-option">
                  <h5>CPT {isRTL ? "(التدريب العملي المنهجي)" : "(Curricular Practical Training)"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "عمل أو تدريب مرتبط بالتخصص" : "Work or training related to major"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "يمكن أن يكون داخل أو خارج الحرم" : "Can be on or off campus"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "يتطلب موافقة الجامعة" : "Requires university approval"}</li>
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
                  <h5>OPT {isRTL ? "(التدريب العملي الاختياري)" : "(Optional Practical Training)"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "عمل مؤقت لمدة 12 شهراً" : "Temporary work for 12 months"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "لطلاب STEM: حتى 3 سنوات" : "For STEM students: up to 3 years"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "يجب أن يكون العمل في مجال التخصص" : "Work must be in field of study"}</li>
                  </ul>
                </div>

                <div className="work-option">
                  <h5>H-1B {isRTL ? "تأشيرة العمل" : "Work Visa"}</h5>
                  <ul>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "خيار للبقاء والعمل بعد OPT" : "Option to stay and work after OPT"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "صالحة لمدة 3 سنوات قابلة للتجديد" : "Valid for 3 years renewable"}</li>
                    <li><i className="bi bi-check-lg"></i> {isRTL ? "تخضع لنظام القرعة السنوي" : "Subject to annual lottery system"}</li>
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
              {isRTL ? "دليل شامل للحصول على تأشيرة الدراسة الأمريكية" : "Complete guide to obtaining US study visa"}
            </p>
          </div>

          <div className="steps-timeline">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>{isRTL ? "القبول الجامعي ونموذج I-20" : "University Admission & Form I-20"}</h4>
                <p>{isRTL ? "الحصول على قبول من جامعة أمريكية معتمدة واستلام نموذج I-20" : "Get admission from accredited US university and receive Form I-20"}</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>{isRTL ? "دفع رسوم SEVIS ($350)" : "Pay SEVIS Fee ($350)"}</h4>
                <p>{isRTL ? "تسجيل بياناتك في نظام SEVIS وحفظ الإيصال للمقابلة" : "Register your data in SEVIS system and keep receipt for interview"}</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>{isRTL ? "تعبئة استمارة DS-160" : "Fill DS-160 Form"}</h4>
                <p>{isRTL ? "استمارة إلكترونية عبر موقع السفارة مع طباعة صفحة التأكيد" : "Online form through embassy website with confirmation page print"}</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>{isRTL ? "دفع رسوم التأشيرة ($160)" : "Pay Visa Fee ($160)"}</h4>
                <p>{isRTL ? "الدفع عبر البنك أو الإنترنت حسب تعليمات السفارة" : "Payment via bank or online as per embassy instructions"}</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">5</div>
              <div className="step-content">
                <h4>{isRTL ? "حجز موعد المقابلة" : "Schedule Interview Appointment"}</h4>
                <p>{isRTL ? "الحجز عبر موقع السفارة أو مركز التأشيرات" : "Booking through embassy website or visa center"}</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">6</div>
              <div className="step-content">
                <h4>{isRTL ? "حضور المقابلة" : "Attend Interview"}</h4>
                <p>{isRTL ? "أهم مرحلة مع جميع المستندات المطلوبة" : "Most important stage with all required documents"}</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">7</div>
              <div className="step-content">
                <h4>{isRTL ? "استلام التأشيرة" : "Receive Visa"}</h4>
                <p>{isRTL ? "انتظار القبول واستلام جواز السفر مع تأشيرة F-1" : "Wait for approval and receive passport with F-1 visa"}</p>
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
              {isRTL ? "تجهيز الملف الكامل للتقديم" : "Prepare complete application file"}
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
              <h5>{isRTL ? "نموذج I-20" : "Form I-20"}</h5>
            </div>

            <div className="document-card">
              <div className="doc-icon">
                <i className="bi bi-cash-coin"></i>
              </div>
              <h5>{isRTL ? "إثبات مالي" : "Financial Proof"}</h5>
            </div>

            <div className="document-card">
              <div className="doc-icon">
                <i className="bi bi-file-earmark-text"></i>
              </div>
              <h5>{isRTL ? "استمارة DS-160" : "DS-160 Form"}</h5>
            </div>

            <div className="document-card">
              <div className="doc-icon">
                <i className="bi bi-receipt"></i>
              </div>
              <h5>{isRTL ? "إيصال SEVIS" : "SEVIS Receipt"}</h5>
            </div>

            <div className="document-card">
              <div className="doc-icon">
                <i className="bi bi-camera"></i>
              </div>
              <h5>{isRTL ? "صور شخصية" : "Photographs"}</h5>
            </div>

            <div className="document-card">
              <div className="doc-icon">
                <i className="bi bi-translate"></i>
              </div>
              <h5>{isRTL ? "شهادة لغة" : "Language Certificate"}</h5>
            </div>

            <div className="document-card">
              <div className="doc-icon">
                <i className="bi bi-award"></i>
              </div>
              <h5>{isRTL ? "المؤهلات الأكاديمية" : "Academic Qualifications"}</h5>
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
              {isRTL ? "نصائح عملية لضمان نجاح طلب التأشيرة" : "Practical tips to ensure visa application success"}
            </p>
          </div>

          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-chat-left-text"></i>
              </div>
              <h5>{isRTL ? "حضّر إجابات واضحة" : "Prepare Clear Answers"}</h5>
              <p>{isRTL ? "عن سبب اختيار أمريكا وتخصصك وخطتك المستقبلية" : "About why you chose USA, your major, and future plans"}</p>
            </div>

            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-arrow-return-right"></i>
              </div>
              <h5>{isRTL ? "أبرز خطط العودة" : "Highlight Return Plans"}</h5>
              <p>{isRTL ? "أظهر أنك ستعود لبلدك بعد الدراسة" : "Show that you'll return to your country after studies"}</p>
            </div>

            <div className="tip-card">
              <div className="tip-icon">
                <i className="bi bi-bar-chart"></i>
              </div>
              <h5>{isRTL ? "إثبات مالي قوي" : "Strong Financial Proof"}</h5>
              <p>{isRTL ? "تأكد أن أوراقك المالية تغطي التكاليف" : "Ensure your financial documents cover all costs"}</p>
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
              {isRTL ? "مع كايا: طريقك إلى أمريكا أسهل" : "With Kaya: Your Path to USA is Easier"}
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
              <h5>{isRTL ? "اختيار الجامعة المناسبة" : "Choosing the Right University"}</h5>
              <p>{isRTL ? "حسب ميزانيتك وتخصصك وتفضيلاتك الشخصية" : "Based on your budget, major, and personal preferences"}</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-file-earmark-text"></i>
              </div>
              <h5>{isRTL ? "تجهيز ملف تأشيرة كامل" : "Complete Visa File Preparation"}</h5>
              <p>{isRTL ? "بدون ثغرات مع متابعة كل التفاصيل" : "Without gaps with follow-up on every detail"}</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-hand-thumbs-up"></i>
              </div>
              <h5>{isRTL ? "دعم في إثبات القدرة المالية" : "Financial Capacity Support"}</h5>
              <p>{isRTL ? "تحضير خطاب النية والإثباتات المالية" : "Preparing intent letter and financial proofs"}</p>
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
                {isRTL ? "استعد لدراستك في أمريكا" : "Prepare for Your Study in USA"}
              </h2>
              <p className="cta-subtitle">
                {isRTL ? "ابدأ رحلتك الأكاديمية مع خبراء الدراسة في أمريكا" : "Start your academic journey with USA study experts"}
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
                  <span>98% {isRTL ? "نجاح التأشيرة" : "Visa Success"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}