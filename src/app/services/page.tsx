'use client';

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import '@/styles/services.css';

const content = require('@/data/services-main.json');

export default function ServicesPage() {
  const { locale } = useI18n();
  const data = content[locale];

  return (
    <div className="services-page" dir={locale === 'ar' ? 'rtl' : 'ltr'}>

      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <div className="hero-content">
                <div className="hero-badge">
                  <span>{locale === 'ar' ? 'خدمات متكاملة' : 'Comprehensive Services'}</span>
                </div>
                
                <div className="hero-title">
                  <h1 className="hero-title-main">خدماتنا</h1>
                  <p className="hero-title-sub">
                    في كايا نؤمن أن السفر والدراسة في الخارج رحلة متكاملة تبدأ من أول ورقة وتستمر حتى وصولك إلى وجهتك.
                  </p>
                </div>

                <div className="services-stats">
                  <div className="services-stat-item">
                    <span className="stat-number">12+</span>
                    <span className="stat-label">{locale === 'ar' ? 'خدمة' : 'Services'}</span>
                  </div>
                  <div className="services-stat-item">
                    <span className="stat-number">98%</span>
                    <span className="stat-label">{locale === 'ar' ? 'رضا العملاء' : 'Satisfaction'}</span>
                  </div>
                  <div className="services-stat-item">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">{locale === 'ar' ? 'دولة' : 'Countries'}</span>
                  </div>
                  <div className="services-stat-item">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">{locale === 'ar' ? 'دعم' : 'Support'}</span>
                  </div>
                </div>

                <div className="hero-cta">
                  <Link href="#visa-services" className="btn-services-primary">
                    <i className="fas fa-passport me-2"></i>
                    {locale === 'ar' ? 'خدمات التأشيرات' : 'Visa Services'}
                  </Link>
                  <Link href="#support-services" className="btn-services-secondary">
                    <i className="fas fa-hands-helping me-2"></i>
                    {locale === 'ar' ? 'خدمات الدعم' : 'Support Services'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Services */}
      <section id="visa-services" className="section-services">
        <div className="container">
          <div className="category-header">
            <i className="fas fa-file-contract"></i>
            <h2>{locale === 'ar' ? 'خدمات التأشيرات' : 'Visa Services'}</h2>
          </div>

          <div className="services-grid">
            {/* Second Citizenship */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>{locale === 'ar' ? 'الجنسية الثانية' : 'Second Citizenship'}</h3>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الميزة' : 'Feature'}</strong>
                <p>برامج معتمدة للحصول على جنسية ثانية أو إقامة دائمة.</p>
              </div>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الفائدة' : 'Benefit'}</strong>
                <p>حرية تنقل أوسع، فرص استثمارية، ومستقبل أكثر أمانًا.</p>
              </div>
              
              <div className="service-value">
                <i className="fas fa-star"></i>
                {locale === 'ar' ? 'جوازك الثاني هو استثمار في حياتك وحياة عائلتك.' : 'Your second passport is an investment in your life and your family.'}
              </div>
              
              <Link href="/second-citizenship" className="btn-modern">
                <i className="fas fa-arrow-right me-2"></i>
                {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </Link>
            </div>

            {/* U.S. Visas */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-flag-usa"></i>
              </div>
              <h3>{locale === 'ar' ? 'تأشيرات أمريكا' : 'U.S. Visas'}</h3>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الميزة' : 'Feature'}</strong>
                <p>خبرة في استخراج جميع أنواع التأشيرات الأمريكية (سياحة، دراسة، عمل).</p>
              </div>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الفائدة' : 'Benefit'}</strong>
                <p>دخول أكبر سوق عالمي بفرص لا محدودة.</p>
              </div>
              
              <div className="service-value">
                <i className="fas fa-star"></i>
                {locale === 'ar' ? 'تسهيل الإجراءات المعقدة وضمان أعلى نسب قبول.' : 'Simplify complex procedures and ensure the highest acceptance rates.'}
              </div>
              
              <Link href="/usa-visas" className="btn-modern">
                <i className="fas fa-arrow-right me-2"></i>
                {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </Link>
            </div>

            {/* Schengen Visas */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3>{locale === 'ar' ? 'تأشيرات الشنغن' : 'Schengen Visas'}</h3>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الميزة' : 'Feature'}</strong>
                <p>خبرة في تجهيز ملفات قوية لتأشيرات أوروبا.</p>
              </div>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الفائدة' : 'Benefit'}</strong>
                <p>دخول 29 دولة أوروبية بتأشيرة واحدة.</p>
              </div>
              
              <div className="service-value">
                <i className="fas fa-star"></i>
                {locale === 'ar' ? 'منحك فرصة استكشاف أوروبا بسهولة وراحة.' : 'Give you the chance to explore Europe easily and comfortably.'}
              </div>
              
              <Link href="/schengen-visas" className="btn-modern">
                <i className="fas fa-arrow-right me-2"></i>
                {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </Link>
            </div>

            {/* Study Visas */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>{locale === 'ar' ? 'تأشيرات الدراسة' : 'Study Visas'}</h3>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الميزة' : 'Feature'}</strong>
                <p>تنسيق مع الجامعات والمعاهد العالمية للحصول على قبول أكاديمي وتأشيرة دراسة.</p>
              </div>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الفائدة' : 'Benefit'}</strong>
                <p>تعليم معتمد وفرص تطوير شخصية ومهنية.</p>
              </div>
              
              <div className="service-value">
                <i className="fas fa-star"></i>
                {locale === 'ar' ? 'مرافقتك من اختيار التخصص حتى الوصول إلى قاعة الدراسة.' : 'We accompany you from choosing your major until you reach the classroom.'}
              </div>
              
              <Link href="/study-visas" className="btn-modern">
                <i className="fas fa-arrow-right me-2"></i>
                {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </Link>
            </div>

            {/* Work Visas */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>{locale === 'ar' ? 'تأشيرات العمل' : 'Work Visas'}</h3>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الميزة' : 'Feature'}</strong>
                <p>دعم كامل في الحصول على عقود عمل وتأشيرات رسمية.</p>
              </div>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الفائدة' : 'Benefit'}</strong>
                <p>بداية مهنية جديدة في دول الخليج، أوروبا، أو أمريكا.</p>
              </div>
              
              <div className="service-value">
                <i className="fas fa-star"></i>
                {locale === 'ar' ? 'فتح أبواب المستقبل الوظيفي بخطوات واضحة وآمنة.' : 'Open the doors of your professional future with clear and secure steps.'}
              </div>
              
              <Link href="/work-visas" className="btn-modern">
                <i className="fas fa-arrow-right me-2"></i>
                {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </Link>
            </div>

            {/* Travel Visas */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-suitcase-rolling"></i>
              </div>
              <h3>{locale === 'ar' ? 'تأشيرات السفر' : 'Travel Visas'}</h3>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الميزة' : 'Feature'}</strong>
                <p>استخراج تأشيرات سياحية لمختلف الوجهات حول العالم.</p>
              </div>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الفائدة' : 'Benefit'}</strong>
                <p>رحلات سلسة بلا تعقيدات.</p>
              </div>
              
              <div className="service-value">
                <i className="fas fa-star"></i>
                {locale === 'ar' ? 'استمتع بتجربة سفر مريحة ومضمونة.' : 'Enjoy a comfortable and guaranteed travel experience.'}
              </div>
              
              <Link href="/travel-visas" className="btn-modern">
                <i className="fas fa-arrow-right me-2"></i>
                {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section id="support-services" className="section-services why-services-section">
        <div className="container">
          <div className="category-header">
            <i className="fas fa-hands-helping"></i>
            <h2>{locale === 'ar' ? 'خدمات الدعم' : 'Support Services'}</h2>
          </div>

          <div className="services-grid">
            {/* Translation Services */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-language"></i>
              </div>
              <h3>{locale === 'ar' ? 'خدمات الترجمة' : 'Translation Services'}</h3>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الميزة' : 'Feature'}</strong>
                <p>ترجمة معتمدة للوثائق الرسمية بعدة لغات.</p>
              </div>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الفائدة' : 'Benefit'}</strong>
                <p>ملفاتك جاهزة للتقديم بلا أخطاء.</p>
              </div>
              
              <div className="service-value">
                <i className="fas fa-star"></i>
                {locale === 'ar' ? 'ضمان قبول أوراقك في السفارات والجامعات.' : 'Guarantee the acceptance of your papers at embassies and universities.'}
              </div>
              
              <Link href="/translation" className="btn-modern">
                <i className="fas fa-arrow-right me-2"></i>
                {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </Link>
            </div>

            {/* Flight Bookings */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-plane"></i>
              </div>
              <h3>{locale === 'ar' ? 'حجوزات الطيران' : 'Flight Bookings'}</h3>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الميزة' : 'Feature'}</strong>
                <p>تنسيق رحلاتك بأفضل الأسعار والخيارات.</p>
              </div>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الفائدة' : 'Benefit'}</strong>
                <p>توفير وقت وجهد في البحث.</p>
              </div>
              
              <div className="service-value">
                <i className="fas fa-star"></i>
                {locale === 'ar' ? 'رحلات مريحة ومطابقة لخططك.' : 'Comfortable trips that match your plans.'}
              </div>
              
              <Link href="/flight-booking" className="btn-modern">
                <i className="fas fa-arrow-right me-2"></i>
                {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </Link>
            </div>

            {/* Hotel Bookings */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-hotel"></i>
              </div>
              <h3>{locale === 'ar' ? 'حجوزات الفنادق' : 'Hotel Bookings'}</h3>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الميزة' : 'Feature'}</strong>
                <p>شبكة واسعة من الفنادق العالمية.</p>
              </div>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الفائدة' : 'Benefit'}</strong>
                <p>إقامة مميزة تناسب ميزانيتك.</p>
              </div>
              
              <div className="service-value">
                <i className="fas fa-star"></i>
                {locale === 'ar' ? 'راحة وإقامة مثالية أينما كنت.' : 'Comfort and an ideal stay wherever you are.'}
              </div>
              
              <Link href="/hotel-booking" className="btn-modern">
                <i className="fas fa-arrow-right me-2"></i>
                {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </Link>
            </div>

            {/* Travel Insurance */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>{locale === 'ar' ? 'تأمين السفر الصحي' : 'Travel Health Insurance'}</h3>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الميزة' : 'Feature'}</strong>
                <p>خطط تأمين معتمدة تغطي الطوارئ.</p>
              </div>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الفائدة' : 'Benefit'}</strong>
                <p>سفر آمن بلا قلق صحي.</p>
              </div>
              
              <div className="service-value">
                <i className="fas fa-star"></i>
                {locale === 'ar' ? 'حماية لك ولعائلتك طوال الرحلة.' : 'Protection for you and your family throughout the trip.'}
              </div>
              
              <Link href="/travel-insurance" className="btn-modern">
                <i className="fas fa-arrow-right me-2"></i>
                {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </Link>
            </div>

            {/* Cover Letter */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-file-signature"></i>
              </div>
              <h3>{locale === 'ar' ? 'رسالة التغطية (Cover Letter)' : 'Cover Letter'}</h3>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الميزة' : 'Feature'}</strong>
                <p>صياغة احترافية لرسائل السفارات.</p>
              </div>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الفائدة' : 'Benefit'}</strong>
                <p>تعزيز قوة ملفك.</p>
              </div>
              
              <div className="service-value">
                <i className="fas fa-star"></i>
                {locale === 'ar' ? 'نكتب لك رسالة تقنع وتفتح الأبواب.' : 'We write a letter for you that persuades and opens doors.'}
              </div>
              
              <div className="note-text small mt-2">
                <strong>{locale === 'ar' ? 'ملاحظة:' : 'Note:'}</strong>
                {locale === 'ar' ? ' الفرق عن رسالة الدافع أن رسالة التغطية رسمية للسفارات، بينما رسالة الدافع أكاديمية للجامعات.' : ' The difference from the Motivation Letter is that the Cover Letter is formal for embassies, while the Motivation Letter is academic for universities.'}
              </div>
              
              <Link href="/cover-letter" className="btn-modern mt-3">
                <i className="fas fa-arrow-right me-2"></i>
                {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </Link>
            </div>

            {/* Motivation Letter */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-pen-fancy"></i>
              </div>
              <h3>{locale === 'ar' ? 'رسالة الدافع (Motivation Letter)' : 'Motivation Letter'}</h3>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الميزة' : 'Feature'}</strong>
                <p>كتابة رسائل شخصية مؤثرة للجامعات أو السفارات.</p>
              </div>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الفائدة' : 'Benefit'}</strong>
                <p>إبراز شخصيتك وأهدافك بوضوح.</p>
              </div>
              
              <div className="service-value">
                <i className="fas fa-star"></i>
                {locale === 'ar' ? 'نساعدك على ترك انطباع قوي ومؤثر.' : 'We help you leave a strong and impactful impression.'}
              </div>
              
              <Link href="/motivation-letter" className="btn-modern">
                <i className="fas fa-arrow-right me-2"></i>
                {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </Link>
            </div>

            {/* Travel Plan */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-route"></i>
              </div>
              <h3>{locale === 'ar' ? 'خطة السفر' : 'Travel Plan'}</h3>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الميزة' : 'Feature'}</strong>
                <p>إعداد خطط سفر مفصلة ومقنعة.</p>
              </div>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الفائدة' : 'Benefit'}</strong>
                <p>دعم ملفك أمام السفارات.</p>
              </div>
              
              <div className="service-value">
                <i className="fas fa-star"></i>
                {locale === 'ar' ? 'خطة واضحة تجعل رحلتك أكثر تنظيمًا واحترافية.' : 'A clear plan makes your trip more organized and professional.'}
              </div>
              
              <Link href="/travel-plan" className="btn-modern">
                <i className="fas fa-arrow-right me-2"></i>
                {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </Link>
            </div>

            {/* Our Programs */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>{locale === 'ar' ? 'برامجنا' : 'Our Programs'}</h3>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الميزة' : 'Feature'}</strong>
                <p>برامج تأشيرات مصممة لتناسب احتياجاتك وتحقق طموحاتك.</p>
              </div>
              
              <div className="service-feature">
                <strong>{locale === 'ar' ? 'الفائدة' : 'Benefit'}</strong>
                <p>متابعة دقيقة لملفك، تجهيز مستنداتك، ودعم كامل في كل خطوة حتى استلام التأشيرة.</p>
              </div>
              
              <div className="service-value">
                <i className="fas fa-star"></i>
                {locale === 'ar' ? 'رحلة مضمونة تبدأ من تجهيز ملفك وتنتهي بوصولك إلى وجهتك بثقة وراحة بال.' : 'A guaranteed journey that starts from preparing your file and ends with you reaching your destination with confidence and peace of mind.'}
              </div>
              
              <Link href="/programs" className="btn-modern">
                <i className="fas fa-arrow-right me-2"></i>
                {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Services Section */}
      <section className="section-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {locale === 'ar' ? 'لماذا تختار خدمات كايا؟' : 'Why Choose Kaya Services?'}
            </h2>
            <p className="section-subtitle">
              {locale === 'ar' ? 'مع كايا، خدماتنا ليست مجرد إجراءات، بل هي تجربة متكاملة نرافقك فيها خطوة بخطوة حتى تصل إلى هدفك بثقة وراحة بال.' : 'With Kaya, our services are not just procedures, but a complete experience where we accompany you step by step until you reach your goal with confidence and peace of mind.'}
            </p>
          </div>

          <div className="why-services-grid">
            <div className="why-service-card">
              <div className="why-service-icon">
                <i className="fas fa-user-check"></i>
              </div>
              <h4>{locale === 'ar' ? 'استشارة شخصية' : 'Personal Consultation'}</h4>
              <p>{locale === 'ar' ? 'نفهم احتياجاتك الفردية ونصمم الحلول المناسبة لك.' : 'We understand your individual needs and design suitable solutions for you.'}</p>
            </div>
            
            <div className="why-service-card">
              <div className="why-service-icon">
                <i className="fas fa-file-contract"></i>
              </div>
              <h4>{locale === 'ar' ? 'وثائق معتمدة' : 'Certified Documents'}</h4>
              <p>{locale === 'ar' ? 'نضمن أن جميع أوراقك ومستنداتك تكون رسمية ومقبولة.' : 'We ensure all your papers and documents are official and accepted.'}</p>
            </div>
            
            <div className="why-service-card">
              <div className="why-service-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h4>{locale === 'ar' ? 'دعم متواصل' : 'Continuous Support'}</h4>
              <p>{locale === 'ar' ? 'نبقى معك في كل خطوة، من البداية حتى تحقيق هدفك.' : 'We stay with you every step of the way, from start to achieving your goal.'}</p>
            </div>
            
            <div className="why-service-card">
              <div className="why-service-icon">
                <i className="fas fa-award"></i>
              </div>
              <h4>{locale === 'ar' ? 'جودة مضمونة' : 'Guaranteed Quality'}</h4>
              <p>{locale === 'ar' ? 'نسعى دائمًا لتقديم أفضل الخدمات بأعلى معايير الجودة.' : 'We always strive to provide the best services with the highest quality standards.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-services quick-links-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {locale === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h2>
            <p className="section-subtitle">
              {locale === 'ar' ? 'انتقل مباشرة إلى الخدمة التي تحتاجها' : 'Jump directly to the service you need'}
            </p>
          </div>

          <div className="quick-links">
            <Link href="/second-citizenship" className="quick-link-card">
              <i className="fas fa-globe"></i>
              <span>{locale === 'ar' ? 'الجنسية الثانية' : 'Second Citizenship'}</span>
            </Link>
            
            <Link href="/usa-visas" className="quick-link-card">
              <i className="fas fa-flag-usa"></i>
              <span>{locale === 'ar' ? 'تأشيرات أمريكا' : 'U.S. Visas'}</span>
            </Link>
            
            <Link href="/study-visas" className="quick-link-card">
              <i className="fas fa-graduation-cap"></i>
              <span>{locale === 'ar' ? 'تأشيرات الدراسة' : 'Study Visas'}</span>
            </Link>
            
            <Link href="/work-visas" className="quick-link-card">
              <i className="fas fa-briefcase"></i>
              <span>{locale === 'ar' ? 'تأشيرات العمل' : 'Work Visas'}</span>
            </Link>
            
            <Link href="/travel-visas" className="quick-link-card">
              <i className="fas fa-suitcase-rolling"></i>
              <span>{locale === 'ar' ? 'تأشيرات السفر' : 'Travel Visas'}</span>
            </Link>
            
            <Link href="/programs" className="quick-link-card">
              <i className="fas fa-star"></i>
              <span>{locale === 'ar' ? 'برامجنا' : 'Our Programs'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <div className="services-cta-banner">
            <h2>{locale === 'ar' ? 'ابدأ رحلتك اليوم' : 'Start Your Journey Today'}</h2>
            <p>{locale === 'ar' ? 'تواصل معنا لتحصل على استشارة مجانية وخطة مخصصة لتحقيق حلمك.' : 'Contact us for a free consultation and a customized plan to achieve your dream.'}</p>
            <Link href="/contact" className="btn-light">
              <i className="fas fa-paper-plane me-2"></i>
              {locale === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}