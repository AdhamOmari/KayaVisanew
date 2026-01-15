'use client';

import { useI18n } from '@/lib/i18n';
import Link from 'next/link';
import '@/styles/services.css';

export default function TravelPlanPage() {
  const { locale, dir } = useI18n();

  const data = {
    ar: {
      title: 'خدمة خطة السفر',
      hero: {
        title: 'خدمة خطة السفر (Travel Itinerary)',
        description: 'خطة السفر هي الوثيقة التي تُرفق عادةً مع طلبات التأشيرات، وتُظهر للسفارة أو الجهة الرسمية أن رحلتك منظمة ومخطط لها بدقة. إنها ليست مجرد جدول مواعيد، بل دليل على أنك مسافر مسؤول، تعرف وجهتك، وتملك خطة واضحة للإقامة والتنقل.'
      },
      importance: {
        title: 'أهمية خطة السفر',
        points: [
          'تعزز قوة ملفك أمام السفارات وتزيد من فرص قبول التأشيرة',
          'توضح تفاصيل رحلتك من مواعيد الطيران إلى حجوزات الفنادق والأنشطة اليومية',
          'تُظهر الجدية والالتزام في تنظيم رحلتك',
          'تمنحك راحة البال لأنك تعرف مسبقًا كل تفاصيل رحلتك'
        ]
      },
      notes: {
        title: 'ملاحظات مهمة',
        items: [
          'يجب أن تكون الخطة واقعية ومفصلة، مع ذكر التواريخ والأماكن بدقة',
          'تُرفق دائمًا مع المستندات الرسمية (حجوزات الطيران والفنادق، التأمين الصحي)',
          'لا يلزم أن تكون طويلة جدًا، لكن يجب أن تُظهر أن الرحلة منظمة ومخطط لها',
          'يجب تعديل الأنشطة حسب نوع الرحلة (سياحة، دراسة، عمل)'
        ]
      },
      studyWork: {
        title: 'ملاحظات خاصة بالدراسة والعمل',
        items: [
          'في حالة الدراسة: يجب أن تُظهر الخطة ارتباطك بالجامعة (مواعيد التسجيل، بداية المحاضرات، السكن الجامعي)',
          'في حالة العمل: يجب أن تُبرز تفاصيل عقد العمل، مواعيد الاجتماعات، وخطة الاندماج في بيئة العمل',
          'الخطة يجب أن تكون واقعية ومقنعة، مدعومة بالمستندات الرسمية (قبول جامعي، عقد عمل، حجوزات)',
          'كلما كانت الخطة دقيقة، زادت فرص قبول التأشيرة لأنها تُظهر أنك شخص منظم وملتزم'
        ]
      },
      services: {
        title: 'ماذا نقدم لك في كايا؟',
        items: [
          'إعداد خطة سفر مفصلة ومقنعة تتوافق مع متطلبات السفارات',
          'تضمين جميع التفاصيل الأساسية: مواعيد الرحلات، حجوزات الفنادق، الأنشطة، وخطوط التنقل',
          'صياغة احترافية تُظهر التنظيم والجدية',
          'تخصيص الخطة حسب نوع الرحلة (سياحة، عمل، دراسة)',
          'تنسيق متكامل مع خدماتنا الأخرى مثل حجوزات الطيران والفنادق والتأمين الصحي'
        ]
      },
      value: {
        title: 'القيمة المضافة لك',
        description: 'خطة السفر ليست مجرد ورقة، بل هي أداة استراتيجية تدعم ملفك أمام السفارات وتمنحك رحلة منظمة بلا مفاجآت. إنها دليل على أنك مستعد ومهتم بكل تفاصيل رحلتك.'
      },
      process: {
        title: 'كيف نعمل؟',
        steps: [
          { icon: 'fa-clipboard-list', title: 'استلام التفاصيل', description: 'نستلم تفاصيل رحلتك (الوجهة، المدة، الغرض)' },
          { icon: 'fa-map', title: 'إعداد الخطة', description: 'إعداد خطة أولية تشمل الرحلات والإقامة والأنشطة' },
          { icon: 'fa-search-check', title: 'المراجعة', description: 'مراجعة وتدقيق الخطة لتكون متوافقة مع متطلبات السفارة' },
          { icon: 'fa-file-download', title: 'التسليم', description: 'تسليم الخطة بشكل رسمي ومعتمد (ورقي أو إلكتروني)' },
          { icon: 'fa-headset', title: 'الدعم', description: 'دعم إضافي لتحديث الخطة عند الحاجة' }
        ]
      },
      cta: {
        title: 'هل ترغب في تعزيز ملفك بخطة سفر احترافية ومقنعة؟',
        button: 'تواصل معنا الآن'
      }
    },
    en: {
      title: 'Travel Plan Service',
      hero: {
        title: 'Travel Plan Service (Travel Itinerary)',
        description: 'A travel itinerary is a document that is typically attached to visa applications, showing the embassy or official authorities that your trip is well-organized and meticulously planned. It\'s not just a schedule, but proof that you\'re a responsible traveler who knows your destination and has a clear plan for accommodation and transportation.'
      },
      importance: {
        title: 'Importance of a Travel Plan',
        points: [
          'Strengthens your application file with embassies and increases visa approval chances',
          'Clarifies all details of your trip from flight times to hotel bookings and daily activities',
          'Shows seriousness and commitment in organizing your trip',
          'Gives you peace of mind because you know all trip details in advance'
        ]
      },
      notes: {
        title: 'Important Notes',
        items: [
          'The plan must be realistic and detailed, with accurate dates and locations',
          'Always attached with official documents (flight and hotel bookings, health insurance)',
          'Doesn\'t need to be very long, but should show that the trip is organized and planned',
          'Activities should be adjusted according to trip type (tourism, study, work)'
        ]
      },
      studyWork: {
        title: 'Special Notes for Study and Work',
        items: [
          'For study trips: The plan should show your connection to the university (registration dates, class start, university housing)',
          'For work trips: Should highlight work contract details, meeting schedules, and integration plan',
          'The plan must be realistic and convincing, supported by official documents (university acceptance, work contract, bookings)',
          'The more accurate the plan, the higher the visa approval chances as it shows you\'re organized and committed'
        ]
      },
      services: {
        title: 'What We Offer at Kaya?',
        items: [
          'Preparation of a detailed and convincing travel plan that meets embassy requirements',
          'Inclusion of all essential details: trip schedules, hotel bookings, activities, and transportation routes',
          'Professional formulation that shows organization and seriousness',
          'Customization of the plan according to trip type (tourism, work, study)',
          'Integrated coordination with our other services like flight bookings, hotels, and health insurance'
        ]
      },
      value: {
        title: 'Added Value for You',
        description: 'A travel plan is not just a paper; it\'s a strategic tool that supports your application with embassies and gives you an organized trip without surprises. It\'s proof that you\'re prepared and care about all details of your journey.'
      },
      process: {
        title: 'How We Work?',
        steps: [
          { icon: 'fa-clipboard-list', title: 'Details Collection', description: 'We receive your trip details (destination, duration, purpose)' },
          { icon: 'fa-map', title: 'Plan Preparation', description: 'Preparation of initial plan including trips, accommodation, and activities' },
          { icon: 'fa-search-check', title: 'Review', description: 'Review and auditing to ensure compliance with embassy requirements' },
          { icon: 'fa-file-download', title: 'Delivery', description: 'Delivery of the plan in official and certified format (paper or electronic)' },
          { icon: 'fa-headset', title: 'Support', description: 'Additional support to update the plan when needed' }
        ]
      },
      cta: {
        title: 'Want to strengthen your application with a professional and convincing travel plan?',
        button: 'Contact Us Now'
      }
    }
  };

  const content = data[locale];

  return (
    <div className="service-page-base" dir={dir}>
      {/* Hero Section with Purple Theme */}
      <section className=" purple-theme plan-hero">
        <div className="container ">
          <div className="hero-content ">
  
            
            <div className="hero-title">
              <h1 className="hero-title-main">{content.hero.title}</h1>
              <p className="hero-title-sub">{content.hero.description}</p>
            </div>

            <div className="service-stats">
              <div className="service-stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">{locale === 'ar' ? 'زيادة الفرص' : 'Chance Increase'}</span>
              </div>
              <div className="service-stat-item">
                <span className="stat-number">24</span>
                <span className="stat-label">{locale === 'ar' ? 'ساعة' : 'Hours Delivery'}</span>
              </div>
              <div className="service-stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">{locale === 'ar' ? 'مخصصة' : 'Customized'}</span>
              </div>
              <div className="service-stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">{locale === 'ar' ? 'دولة' : 'Countries'}</span>
              </div>
            </div>

            <div className="hero-cta">
              <Link href="#services" className="btn-service-primary">
                {locale === 'ar' ? 'تفاصيل الخدمة' : 'Service Details'}
              </Link>
              <Link href="/contact" className="btn-service-secondary">
                {locale === 'ar' ? 'اطلب الآن' : 'Order Now'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '80px', marginBottom: '80px' }}>
        {/* Importance Section */}
        <section className="service-section" style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <h2 className="section-title">{content.importance.title}</h2>
          </div>
          <div className="service-grid">
            {content.importance.points.map((point: string, index: number) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Important Notes */}
        <section className="service-section" style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <h2 className="section-title">{content.notes.title}</h2>
          </div>
          <div className="service-notes-card">
            <div className="row">
              {content.notes.items.map((item: string, index: number) => (
                <div key={index} className="col-md-6 mb-3">
                  <div className="note-item">
                    <i className="fas fa-info-circle note-icon"></i>
                    <p className="note-text">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Study/Work Specific Notes */}
        <section className="service-section" style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <h2 className="section-title">{content.studyWork.title}</h2>
          </div>
          <div className="service-grid">
            {content.studyWork.items.map((item: string, index: number) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <i className={index < 2 ? 'fas fa-graduation-cap' : 'fas fa-briefcase'}></i>
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Offered */}
        <section className="service-section" style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <h2 className="section-title">{content.services.title}</h2>
          </div>
          <div className="service-feature-grid">
            {content.services.items.map((service: string, index: number) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <h4>
                  {locale === 'ar' ? ['ميزة', 'تفاصيل', 'صياغة', 'تخصيص', 'تكامل'][index] : ['Feature', 'Details', 'Formulation', 'Customization', 'Integration'][index]}
                </h4>
                <p>{service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="service-section" style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <h2 className="section-title">{content.process.title}</h2>
          </div>
          <div className="service-feature-grid">
            {content.process.steps.map((step: any, index: number) => (
              <div key={index} className="process-card">
                <div className="process-icon">
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                <div className="process-step-number">
                  <span>{index + 1} {locale === 'ar' ? 'خطوة' : 'Step'}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Value Section */}
        <section className="service-section" style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <h2 className="section-title">{content.value.title}</h2>
          </div>
          <div className="value-card">
            <div className="service-icon">
              <i className="fas fa-star"></i>
            </div>
            <p>{content.value.description}</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="service-cta-section purple-theme">
          <div className="container">
            <div className="service-cta-banner">
              <h2>{content.cta.title}</h2>
              <p>
                {locale === 'ar' 
                  ? 'نحن هنا لمساعدتك في إعداد خطة سفر احترافية تعزز فرص قبول تأشيرتك'
                  : 'We\'re here to help you prepare a professional travel plan that enhances your visa approval chances'
                }
              </p>
              <Link href="/contact" className="btn-cta">
                <i className="fas fa-paper-plane me-2"></i>
                {content.cta.button}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}