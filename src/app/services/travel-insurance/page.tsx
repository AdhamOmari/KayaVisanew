'use client';

import { useI18n } from '@/lib/i18n';
import Link from 'next/link';
import '@/styles/services.css';

export default function TravelInsurancePage() {
  const { locale, dir } = useI18n();

  const data = {
    ar: {
      title: 'خدمة تأمين السفر',
      hero: {
        title: 'تأمين السفر الصحي',
        description: 'السفر تجربة رائعة، لكنه قد يحمل بعض المفاجآت غير المتوقعة مثل الوعكات الصحية، الحوادث الطارئة، أو الحاجة إلى رعاية طبية عاجلة. هنا يأتي دور تأمين السفر الصحي ليمنحك راحة البال ويضمن أنك محمي في أي مكان حول العالم.'
      },
      importance: {
        title: 'لماذا تأمين السفر الصحي ضروري؟',
        points: [
          'متطلب إلزامي للسفارات للحصول على التأشيرة',
          'حماية مالية من التكاليف الطبية المرتفعة في الخارج',
          'راحة البال والأمان خلال رحلتك',
          'تغطية شاملة للطوارئ الطبية والحوادث',
          'دعم فوري في الحالات الطارئة على مدار الساعة'
        ]
      },
      why_necessary: {
        title: 'امتلاك تأمين صحي أثناء السفر ليس مجرد خيار إضافي',
        description: 'بل هو شرط أساسي في العديد من الدول للحصول على التأشيرة، وهو الضمان الحقيقي لرحلة آمنة بلا قلق.'
      },
      advantages: {
        title: 'المزايا التي نقدمها لك في كايا',
        items: [
          {
            icon: 'fa-certificate',
            title: 'خطط معتمدة دوليًا',
            description: 'تأمين معتمد ومقبول لدى السفارات والجهات الرسمية في جميع الدول'
          },
          {
            icon: 'fa-shield-alt',
            title: 'تغطية شاملة',
            description: 'العلاج الطبي الطارئ، دخول المستشفيات، العمليات الجراحية، والأدوية'
          },
          {
            icon: 'fa-suitcase',
            title: 'خدمات إضافية',
            description: 'تغطية فقدان الأمتعة، إلغاء الرحلات، أو الحوادث الشخصية'
          },
          {
            icon: 'fa-credit-card',
            title: 'مرونة في الاختيار',
            description: 'باقات متعددة تناسب ميزانيتك ومدة سفرك'
          },
          {
            icon: 'fa-headset',
            title: 'دعم متواصل',
            description: 'مساعدتك في تقديم المطالبات والحصول على الخدمة الطبية بسرعة'
          }
        ]
      },
      services: {
        title: 'ماذا نقدم لك في كايا؟',
        items: [
          'استشارات متخصصة لاختيار خطة التأمين الأنسب لرحلتك',
          'تجهيز وثائق التأمين بشكل رسمي ومعتمد لتقديمها مع طلب التأشيرة',
          'متابعة دقيقة لضمان أن تغطيتك تشمل كل ما تحتاجه أثناء السفر',
          'دعم شخصي عند الحاجة لتنسيق الخدمات الطبية أو الطارئة في بلد الوجهة'
        ]
      },
      value: {
        title: 'القيمة المضافة لك',
        description: 'مع تأمين السفر الصحي من كايا، أنت لا تحصل فقط على وثيقة، بل على شبكة أمان متكاملة تحميك من أي طارئ صحي أو مالي أثناء رحلتك. إنه استثمار في راحة بالك وسلامتك وسلامة عائلتك.'
      },
      process: {
        title: 'كيف نعمل؟',
        steps: [
          { icon: 'fa-laptop', title: 'استلام الطلب', description: 'استلام طلبك إلكترونيًا' },
          { icon: 'fa-map-marked', title: 'تحليل الاحتياجات', description: 'مراجعة وجهة السفر ومدة الرحلة لتحديد الخطة الأنسب' },
          { icon: 'fa-file-contract', title: 'إصدار الوثيقة', description: 'إصدار وثيقة التأمين بشكل رسمي ومعتمد' },
          { icon: 'fa-download', title: 'التسليم', description: 'تسليم الوثيقة إلكترونيًا' },
          { icon: 'fa-user-shield', title: 'المتابعة', description: 'متابعة ودعم عند الحاجة أثناء السفر' }
        ]
      },
      cta: {
        title: 'هل ترغب في السفر بأمان وراحة بال؟',
        button: 'تواصل معنا الآن'
      }
    },
    en: {
      title: 'Travel Insurance Service',
      hero: {
        title: 'Health Travel Insurance',
        description: 'Travel is a wonderful experience, but it can bring unexpected surprises like health issues, emergency accidents, or urgent medical care needs. This is where health travel insurance comes in to give you peace of mind and ensure you\'re protected anywhere in the world.'
      },
      importance: {
        title: 'Why is Health Travel Insurance Necessary?',
        points: [
          'Mandatory requirement for embassies to obtain a visa',
          'Financial protection from high medical costs abroad',
          'Peace of mind and security during your trip',
          'Comprehensive coverage for medical emergencies and accidents',
          'Immediate support in emergency cases 24/7'
        ]
      },
      why_necessary: {
        title: 'Having health insurance during travel is not just an additional option',
        description: 'It\'s a basic requirement in many countries for obtaining a visa, and it\'s the real guarantee of a safe, worry-free journey.'
      },
      advantages: {
        title: 'Advantages We Offer at Kaya',
        items: [
          {
            icon: 'fa-certificate',
            title: 'Internationally Approved Plans',
            description: 'Insurance approved and accepted by embassies and official authorities in all countries'
          },
          {
            icon: 'fa-shield-alt',
            title: 'Comprehensive Coverage',
            description: 'Emergency medical treatment, hospital admissions, surgeries, and medications'
          },
          {
            icon: 'fa-suitcase',
            title: 'Additional Services',
            description: 'Lost luggage coverage, trip cancellation, or personal accidents'
          },
          {
            icon: 'fa-credit-card',
            title: 'Flexible Choices',
            description: 'Multiple packages that suit your budget and travel duration'
          },
          {
            icon: 'fa-headset',
            title: 'Continuous Support',
            description: 'Helping you submit claims and get medical services quickly'
          }
        ]
      },
      services: {
        title: 'What We Offer at Kaya?',
        items: [
          'Specialized consultations to choose the most suitable insurance plan for your trip',
          'Preparation of official and certified insurance documents to submit with visa application',
          'Careful follow-up to ensure your coverage includes everything you need during travel',
          'Personal support when needed to coordinate medical or emergency services in destination country'
        ]
      },
      value: {
        title: 'Added Value for You',
        description: 'With Kaya\'s travel health insurance, you\'re not just getting a document, but a complete safety network that protects you from any health or financial emergency during your trip. It\'s an investment in your peace of mind, safety, and your family\'s safety.'
      },
      process: {
        title: 'How We Work?',
        steps: [
          { icon: 'fa-laptop', title: 'Request Receipt', description: 'Receiving your request electronically' },
          { icon: 'fa-map-marked', title: 'Needs Analysis', description: 'Reviewing travel destination and duration to determine the most suitable plan' },
          { icon: 'fa-file-contract', title: 'Document Issuance', description: 'Issuing insurance documents in official and certified format' },
          { icon: 'fa-download', title: 'Delivery', description: 'Electronic document delivery' },
          { icon: 'fa-user-shield', title: 'Follow-up', description: 'Follow-up and support when needed during travel' }
        ]
      },
      cta: {
        title: 'Want to travel safely and with peace of mind?',
        button: 'Contact Us Now'
      }
    }
  };

  const content = data[locale];

  return (
    <div className="service-page-base" dir={dir}>
      {/* Hero Section - Using hero-insurance class */}
      <section className="hero-insurance">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>{locale === 'ar' ? 'حماية مضمونة' : 'Guaranteed Protection'}</span>
            </div>
            
            <div className="hero-title">
              <h1 className="hero-title-main">{content.hero.title}</h1>
              <p className="hero-title-sub">{content.hero.description}</p>
            </div>

            <div className="service-stats">
              <div className="service-stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">{locale === 'ar' ? 'موافقة' : 'Approval'}</span>
              </div>
              <div className="service-stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">{locale === 'ar' ? 'دعم' : 'Support'}</span>
              </div>
              <div className="service-stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">{locale === 'ar' ? 'دولة' : 'Countries'}</span>
              </div>
              <div className="service-stat-item">
                <span className="stat-number">30</span>
                <span className="stat-label">{locale === 'ar' ? 'دقيقة' : 'Minutes'}</span>
              </div>
            </div>

            <div className="hero-cta">
              <Link href="#importance" className="btn-service-primary">
                {locale === 'ar' ? 'لماذا التأمين؟' : 'Why Insurance?'}
              </Link>
              <Link href="/contact" className="btn-service-secondary">
                {locale === 'ar' ? 'احصل على تأمينك' : 'Get Insured Now'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '80px', marginBottom: '80px' }}>
        {/* Importance Section */}
        <section id="importance" className="service-section" style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <h2 className="section-title">{content.importance.title}</h2>
          </div>
          <div className="service-grid">
            {content.importance.points.map((point: string, index: number) => (
              <div key={index} className="service-card">
                <div className="service-icon" >
                  <i className="fas fa-check-circle"></i>
                </div>
                <p>{point}</p>
              </div>
            ))}
          </div>
          
          <div className="service-notes-card" style={{ 
            marginTop: '40px'
          }}>
            <h3 >
              {content.why_necessary.title}
            </h3>
            <p style={{ color: '#1c3269', margin: 0, fontSize: '1.1rem' }}>
              {content.why_necessary.description}
            </p>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="service-section" style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <h2 className="section-title">{content.advantages.title}</h2>
          </div>
          <div className="service-feature-grid">
            {content.advantages.items.map((advantage: any, index: number) => (
              <div key={index} className="feature-card">
                <div className="feature-icon" >
                  <i className={`fas ${advantage.icon}`}></i>
                </div>
                <h4>{advantage.title}</h4>
                <p>{advantage.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="service-section" style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <h2 className="section-title">{content.services.title}</h2>
          </div>
          <div className="service-notes-card">
            <div className="row">
              {content.services.items.map((service: string, index: number) => (
                <div key={index} className="col-md-6 mb-3">
                  <div className="note-item">
                    <i className="fas fa-shield-alt note-icon" ></i>
                    <p className="note-text">{service}</p>
                  </div>
                </div>
              ))}
            </div>
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
                <div className="process-icon" >
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                <div className="process-step-number" >
                  <span >
                    {index + 1} {locale === 'ar' ? 'خطوة' : 'Step'}
                  </span>
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
            <div className="service-icon" style={{ 
              width: '80px',
              height: '80px',
              fontSize: '2rem'
            }}>
              <i className="fas fa-heartbeat"></i>
            </div>
            <p>{content.value.description}</p>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="service-cta-section" style={{ 
      }}>
        <div className="container">
          <div className="service-cta-banner">
            <h2>{content.cta.title}</h2>
            <p>
              {locale === 'ar' 
                ? 'تواصل معنا للحصول على تأمين سفر صحي معتمد يلبي متطلبات السفارة ويحميك في كل خطوة'
                : 'Contact us to get approved health travel insurance that meets embassy requirements and protects you every step of the way'
              }
            </p>
            <Link href="/contact" className="btn-cta" style={{ 
              border: 'none',
              color: 'white'
            }}>
              <i className="fas fa-phone-alt"></i>
              {content.cta.button}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}