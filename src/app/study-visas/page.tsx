'use client'
import "@/styles/study-visas.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import studyDataImport from '@/data/study-visas-main.json'
import { useState, useEffect } from 'react'
import GlobalLoading from '@/components/GlobalLoading'
import Image from 'next/image'

export default function StudyVisasPage() {
  const { locale } = useI18n()
  const studyData: any = studyDataImport
  const data = locale === 'ar' ? studyData.ar : studyData.en
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
    <div className="study-visas-page">

      {/* STUDY HERO */}
      <section className="study-hero">
        <div className="container">
          <div className="hero-content" dir={isRTL ? "rtl" : "ltr"}>
            <div className="hero-badge">
              <span>{isRTL ? "الدراسة في الخارج" : "Study Abroad"}</span>
            </div>
            <h1 className="hero-title">
              <span className="hero-title-main">{data.title}</span>
              <span className="hero-title-sub">{data.hero.subtitle}</span>
            </h1>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">6</div>
                <div className="stat-label">
                  {isRTL ? "وجهات دراسية" : "Study Destinations"}
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4</div>
                <div className="stat-label">
                  {isRTL ? "مستويات تعليمية" : "Education Levels"}
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">
                  {isRTL ? "نجاح التأشيرات" : "Visa Success"}
                </div>
              </div>
            </div>
            
            <div className="hero-cta">
              <a href="#destinations" className="btn-study-primary">
                <i className="fas fa-compass me-2"></i>
                {isRTL ? "اكتشف الوجهات" : "Explore Destinations"}
              </a>
              <a href="/contact" className="btn-study-secondary">
                <i className="fas fa-graduation-cap me-2"></i>
                {isRTL ? "استشارة مجانية" : "Free Consultation"}
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-decoration">
          <div className="decoration-item book">
            <i className="fas fa-book-open"></i>
          </div>
          <div className="decoration-item globe">
            <i className="fas fa-globe-americas"></i>
          </div>
          <div className="decoration-item degree">
            <i className="fas fa-graduation-cap"></i>
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="section-study mission-section">
        <div className="container">
          <div className="mission-card" dir={isRTL ? "rtl" : "ltr"}>
            <div className="mission-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h2 className="mission-title">
              {isRTL ? "رحلتك الأكاديمية تبدأ من هنا" : "Your Academic Journey Starts Here"}
            </h2>
            <p className="mission-text">
              {isRTL ? "في كايا نؤمن أن التعليم في الخارج ليس مجرد دراسة، بل هو تجربة حياة متكاملة تفتح لك أبواب المستقبل. نحن نساعدك في الحصول على تأشيرات الدراسة لمجموعة من أبرز الوجهات العالمية، مع متابعة دقيقة لكل التفاصيل من لحظة اختيار البرنامج وحتى وصولك إلى مقعدك الدراسي." : 
               "At Kaya, we believe that studying abroad is not just about education, but a complete life experience that opens doors to your future. We help you obtain study visas for a range of leading global destinations, with careful follow-up of every detail from choosing the program until you reach your study seat."}
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION PROGRAMS */}
      <section className="section-study programs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "خدماتنا في تأشيرات الدراسة" : "Our Study Visa Services"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "نوفّر لك جميع الخيارات التعليمية التي تناسب أهدافك" : "We provide all educational options that suit your goals"}
            </p>
          </div>
          
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon language">
                <i className="fas fa-language"></i>
              </div>
              <h3>{isRTL ? "معاهد اللغات" : "Language Institutes"}</h3>
              <p>{isRTL ? "لتطوير مهاراتك اللغوية في بيئة ناطقة" : "To develop your language skills in a native environment"}</p>
              <div className="program-tag">
                <span>{isRTL ? "تأشيرة قصيرة الأمد" : "Short-term Visa"}</span>
              </div>
            </div>
            
            <div className="program-card">
              <div className="program-icon diploma">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>{isRTL ? "الدبلوم" : "Diploma"}</h3>
              <p>{isRTL ? "برامج مهنية متخصصة تفتح لك أبواب سوق العمل" : "Specialized vocational programs that open doors to the job market"}</p>
              <div className="program-tag">
                <span>{isRTL ? "1-2 سنوات" : "1-2 Years"}</span>
              </div>
            </div>
            
            <div className="program-card">
              <div className="program-icon bachelor">
                <i className="fas fa-university"></i>
              </div>
              <h3>{isRTL ? "البكالوريوس" : "Bachelor's"}</h3>
              <p>{isRTL ? "دراسة جامعية متكاملة في أفضل الجامعات العالمية" : "Complete university study at the best global universities"}</p>
              <div className="program-tag">
                <span>{isRTL ? "3-4 سنوات" : "3-4 Years"}</span>
              </div>
            </div>
            
            <div className="program-card">
              <div className="program-icon master">
                <i className="fas fa-user-graduate"></i>
              </div>
              <h3>{isRTL ? "الماجستير" : "Master's"}</h3>
              <p>{isRTL ? "برامج أكاديمية متقدمة تؤهلك للقيادة والبحث العلمي" : "Advanced academic programs that qualify you for leadership and scientific research"}</p>
              <div className="program-tag">
                <span>{isRTL ? "1-2 سنوات" : "1-2 Years"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONAL ADMISSION */}
      <section className="section-study conditional-section">
        <div className="container">
          <div className="conditional-card">
            <div className="conditional-header">
              <div className="conditional-badge">
                <i className="fas fa-star"></i>
                <span>{isRTL ? "ميزة حصرية" : "Exclusive Feature"}</span>
              </div>
              <h2 className="conditional-title">
                {isRTL ? "ميزة 'الدراسة المشروطة'" : "Conditional Admission"}
              </h2>
            </div>
            
            <div className="conditional-content">
              <div className="conditional-info">
                <div className="info-block">
                  <h4>{isRTL ? "متاحة في:" : "Available in:"}</h4>
                  <div className="countries-list">
                    {['USA', 'Canada', 'UK', 'Australia', 'Germany', 'Spain'].map((country, i) => (
                      <div className="country-item" key={i}>
                        <i className="fas fa-check"></i>
                        <span>{country}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="info-block">
                  <h4>{isRTL ? "المزايا الرئيسية:" : "Key Benefits:"}</h4>
                  <ul className="benefits-list">
                    <li>
                      <i className="fas fa-check-circle"></i>
                      <span>{isRTL ? "مرونة أكبر في بدء رحلتك الأكاديمية" : "Greater flexibility in starting your academic journey"}</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>
                      <span>{isRTL ? "زيادة فرص القبول في الجامعات المرموقة" : "Increased chances of admission to prestigious universities"}</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>
                      <span>{isRTL ? "انتقال سلس من دراسة اللغة إلى التخصص" : "Smooth transition from language study to specialization"}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="conditional-tip">
                <div className="tip-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <p>
                  {isRTL ? "الدراسة المشروطة هي جسر ذكي بينك وبين حلمك الجامعي، خصوصًا إذا كنت بحاجة إلى تقوية لغتك قبل الانطلاق في التخصص." : 
                   "Conditional admission is a smart bridge between you and your university dream, especially if you need to strengthen your language skills before starting your specialization."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STUDY DESTINATIONS - UPDATED WITH FLAG IMAGES */}
      <section id="destinations" className="section-study destinations-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "الوجهات الدراسية المتاحة" : "Available Study Destinations"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "اختر الوجهة التي تناسب أحلامك الأكاديمية" : "Choose the destination that fits your academic dreams"}
            </p>
          </div>
          
          <div className="destinations-grid">
            {[
              {
                name: 'USA',
                fullName: isRTL ? 'أمريكا' : 'United States',
                flag: 'https://flagcdn.com/w320/us.png',
                color: '#1c3269',
                highlights: [
                  isRTL ? 'دراسة اللغة، البكالوريوس، الماجستير' : 'Language study, Bachelor\'s, Master\'s',
                  isRTL ? 'ميزة CPT و OPT للعمل' : 'CPT & OPT work features',
                  isRTL ? 'تخصصات متنوعة: الهندسة، الطب، الأعمال' : 'Diverse specializations: Engineering, Medicine, Business'
                ],
                duration: isRTL ? '2-5 سنوات' : '2-5 Years'
              },
              {
                name: 'Canada',
                fullName: isRTL ? 'كندا' : 'Canada',
                flag: 'https://flagcdn.com/w320/ca.png',
                color: '#dc3545',
                highlights: [
                  isRTL ? 'نظام تعليمي عالمي بأسعار معقولة' : 'World-class education at affordable prices',
                  isRTL ? 'إمكانية العمل أثناء الدراسة' : 'Work permission during studies',
                  isRTL ? 'مسار للإقامة الدائمة بعد التخرج' : 'Pathway to permanent residence after graduation'
                ],
                duration: isRTL ? '1-4 سنوات' : '1-4 Years'
              },
              {
                name: 'UK',
                fullName: isRTL ? 'بريطانيا' : 'United Kingdom',
                flag: 'https://flagcdn.com/w320/gb.png',
                color: '#0052b4',
                highlights: [
                  isRTL ? 'برامج دراسية مركزة وقصيرة المدة' : 'Focused study programs with shorter duration',
                  isRTL ? 'جامعات عالمية مصنفة' : 'World-ranked universities',
                  isRTL ? 'تأشيرة عمل لمدة سنتين بعد التخرج' : '2-year work visa after graduation'
                ],
                duration: isRTL ? '3 سنوات' : '3 Years'
              },
              {
                name: 'Australia',
                fullName: isRTL ? 'أستراليا' : 'Australia',
                flag: 'https://flagcdn.com/w320/au.png',
                color: '#ffcd00',
                highlights: [
                  isRTL ? 'بيئة متعددة الثقافات' : 'Multicultural environment',
                  isRTL ? 'عمل 20 ساعة أسبوعياً' : '20 hours weekly work permission',
                  isRTL ? 'تأشيرة عمل مؤقتة بعد التخرج' : 'Temporary work visa after graduation'
                ],
                duration: isRTL ? '2-4 سنوات' : '2-4 Years'
              },
              {
                name: 'Germany',
                fullName: isRTL ? 'ألمانيا' : 'Germany',
                flag: 'https://flagcdn.com/w320/de.png',
                color: '#000000',
                highlights: [
                  isRTL ? 'تعليم شبه مجاني في الجامعات الحكومية' : 'Almost free education in public universities',
                  isRTL ? 'قوة في التخصصات الهندسية' : 'Strength in engineering fields',
                  isRTL ? 'فرص عمل ممتازة بعد التخرج' : 'Excellent job opportunities after graduation'
                ],
                duration: isRTL ? '3-4 سنوات' : '3-4 Years'
              },
              {
                name: 'Spain',
                fullName: isRTL ? 'إسبانيا' : 'Spain',
                flag: 'https://flagcdn.com/w320/es.png',
                color: '#c60b1e',
                highlights: [
                  isRTL ? 'وجهة مثالية لدراسة اللغة الإسبانية' : 'Perfect for Spanish language study',
                  isRTL ? 'تكاليف معيشة منخفضة' : 'Low cost of living',
                  isRTL ? 'تجربة ثقافية غنية' : 'Rich cultural experience'
                ],
                duration: isRTL ? '1-4 سنوات' : '1-4 Years'
              }
            ].map((country, i) => (
              <div className="destination-card" key={i}>
                <div className="destination-header" style={{ backgroundColor: country.color }}>
                  <div className="destination-flag">
                    <img 
                      src={country.flag} 
                      alt={`${country.name} flag`}
                      loading="lazy"
                      className="flag-img"
                    />
                  </div>
                  <div className="destination-title">
                    <h3>{country.name}</h3>
                    <p>{country.fullName}</p>
                  </div>
                </div>
                
                <div className="destination-body">
                  <div className="duration-tag">
                    <i className="fas fa-clock"></i>
                    <span>{country.duration}</span>
                  </div>
                  
                  <ul className="destination-highlights">
                    {country.highlights.map((highlight, j) => (
                      <li key={j}>
                        <i className="fas fa-check"></i>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="destination-cta">
                    <Link href={`/study-visas/${country.name.toLowerCase()}`} className="btn-destination">
                      <i className="fas fa-info-circle me-2"></i>
                      {isRTL ? "المزيد من التفاصيل" : "More Details"}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE KAYA */}
      <section className="section-study why-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isRTL ? "لماذا تختار كايا؟" : "Why Choose Kaya?"}
            </h2>
            <p className="section-subtitle">
              {isRTL ? "نحن شركاؤك في نجاح رحلتك الدراسية" : "We are your partners in study journey success"}
            </p>
          </div>
          
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon experience">
                <i className="fas fa-chart-line"></i>
              </div>
              <h4>{isRTL ? "خبرة واسعة" : "Extensive Experience"}</h4>
              <p>{isRTL ? "خبرة واسعة في استخراج تأشيرات الدراسة" : "Extensive experience in obtaining study visas"}</p>
            </div>
            
            <div className="why-card">
              <div className="why-icon support">
                <i className="fas fa-user-check"></i>
              </div>
              <h4>{isRTL ? "متابعة شخصية" : "Personal Follow-up"}</h4>
              <p>{isRTL ? "متابعة شخصية لملفك خطوة بخطوة" : "Personal follow-up of your file step by step"}</p>
            </div>
            
            <div className="why-card">
              <div className="why-icon partnerships">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>{isRTL ? "شراكات عالمية" : "Global Partnerships"}</h4>
              <p>{isRTL ? "شراكات مع جامعات ومعاهد معتمدة عالمياً" : "Partnerships with globally accredited universities and institutes"}</p>
            </div>
            
            <div className="why-card">
              <div className="why-icon complete">
                <i className="fas fa-life-ring"></i>
              </div>
              <h4>{isRTL ? "دعم كامل" : "Complete Support"}</h4>
              <p>{isRTL ? "دعم كامل قبل وأثناء وبعد السفر" : "Full support before, during, and after travel"}</p>
            </div>
          </div>
          
          <div className="success-message" dir={isRTL ? "rtl" : "ltr"}>
            <div className="success-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <p>
              {isRTL ? "مع كايا دراستك في الخارج ليست حلماً بعيداً، بل خطة واضحة تبدأ من هنا." : 
               "With Kaya, your study abroad is not a distant dream, but a clear plan that starts here."}
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="study-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content" dir={isRTL ? "rtl" : "ltr"}>
              <h2 className="cta-title">
                {isRTL ? "استعد لرحلتك الدراسية" : "Prepare for Your Study Journey"}
              </h2>
              <p className="cta-subtitle">
                {isRTL ? "ابدأ رحلتك الأكاديمية مع خبراء الدراسة في الخارج" : "Start your academic journey with study abroad experts"}
              </p>
              
              <div className="cta-buttons">
                <a href="/contact" className="btn-cta-primary">
                  <i className="fas fa-calendar-check me-2"></i>
                  {isRTL ? "احجز استشارة مجانية" : "Book Free Consultation"}
                </a>
                <a href="tel:+1234567890" className="btn-cta-secondary">
                  <i className="fas fa-headset me-2"></i>
                  {isRTL ? "تواصل مع مستشار" : "Contact Advisor"}
                </a>
              </div>
              
              <div className="cta-features">
                <div className="feature-item">
                  <i className="fas fa-shield-alt"></i>
                  <span>{isRTL ? "ضمان القبول" : "Admission Guarantee"}</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-clock"></i>
                  <span>24/7 {isRTL ? "الدعم" : "Support"}</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-percentage"></i>
                  <span>98% {isRTL ? "معدل النجاح" : "Success Rate"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}