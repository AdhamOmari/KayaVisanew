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
        title: 'تأمين السفر الصحي (Health Travel Insurance)',
        description: 'تأمين السفر الصحي هو الحماية التي توفر لك الاطمئنان خلال رحلتك. يُغطي التكاليف الطبية في حالات الطوارئ، ويُعد متطلبًا إلزاميًا للحصول على تأشيرات شنغن، كندا، أستراليا، وغيرها.'
      },
      importance: {
        title: 'لماذا يُعتبر تأمين السفر الصحي ضروريًا؟',
        points: [
          'متطلب إلزامي: معظم السفارات تطلبه كشرط أساسي للموافقة على التأشيرة',
          'حماية مالية: يُغطي التكاليف الطبية في حالات الطوارئ، والتي قد تكون باهظة جدًا في الخارج',
          'راحة نفسية: يمنحك الأمان والاطمئنان أثناء السفر',
          'تغطية شاملة: يشمل الحوادث، الأمراض المفاجئة، إلغاء الرحلات، وأحيانًا فقدان الأمتعة'
        ]
      },
      advantages: {
        title: 'مميزات الحصول على تأمين السفر مع كايا',
        items: [
          {
            icon: 'fa-certificate',
            title: 'خطط معتمدة من السفارات',
            description: 'نوفر لك تأمينًا صحيًا معتمدًا ومطابقًا لمتطلبات جميع السفارات'
          },
          {
            icon: 'fa-shield-alt',
            title: 'تغطية شاملة',
            description: 'يشمل الطوارئ الطبية، الحوادث، الإقامة في المستشفى، وأحيانًا فقدان الأمتعة'
          },
          {
            icon: 'fa-headset',
            title: 'خدمات إضافية',
            description: 'دعم على مدار الساعة عند الحاجة، وإجراءات سريعة في حالات الطوارئ'
          },
          {
            icon: 'fa-calendar-check',
            title: 'مرونة في الخطط',
            description: 'نقدم خططًا قصيرة أو طويلة المدى حسب احتياجاتك'
          },
          {
            icon: 'fa-hands-helping',
            title: 'دعم مستمر',
            description: 'نساعدك في اختيار الخطة الأنسب، ونتابع معك لضمان حصولك على التغطية المطلوبة'
          }
        ]
      },
      services_list: {
        title: 'الخدمات التي نقدمها في كايا',
        items: [
          'توفير تأمين صحي مُعتمد من السفارات',
          'تغطية الطوارئ الطبية والحوادث',
          'تأمين إلغاء الرحلات (حسب الخطة)',
          'تأمين فقدان الأمتعة (اختياري)',
          'خطط تأمين قصيرة أو طويلة المدى حسب احتياجاتك'
        ]
      },
      process: {
        title: 'كيف تعمل الخدمة؟',
        steps: [
          { icon: 'fa-comments', title: 'التواصل', description: 'نتعرف على تفاصيل رحلتك ونوع التأشيرة' },
          { icon: 'fa-clipboard-list', title: 'اختيار الخطة', description: 'نساعدك في اختيار التأمين الأنسب' },
          { icon: 'fa-file-signature', title: 'التسجيل', description: 'نُجهز لك التأمين ونُصدر الوثائق' },
          { icon: 'fa-certificate', title: 'الحصول على الشهادة', description: 'تحصل على شهادة التأمين المعتمدة' },
          { icon: 'fa-headset', title: 'الدعم المستمر', description: 'نقدم لك الدعم عند الحاجة' }
        ]
      },
      value: {
        title: 'القيمة المضافة لك مع كايا',
        description: 'نوفر لك تأمينًا صحيًا معتمدًا يُلبي متطلبات السفارات، مع تغطية شاملة تمنحك راحة البال وحماية مالية أثناء رحلتك.'
      },
      cta: {
        title: 'هل تريد تأمين سفر معتمد يحميك ويزيد من فرص قبول تأشيرتك؟',
        button: 'احصل على تأمينك الآن'
      }
    },
    en: {
      title: 'Travel Insurance Service',
      hero: {
        title: 'Health Travel Insurance',
        description: 'Health travel insurance is the protection that provides you peace of mind during your trip. It covers medical costs in emergencies and is a mandatory requirement for obtaining Schengen, Canada, Australia visas, and others.'
      },
      importance: {
        title: 'Why is Health Travel Insurance Essential?',
        points: [
          'Mandatory requirement: Most embassies require it as a basic condition for visa approval',
          'Financial protection: Covers medical costs in emergencies, which can be very expensive abroad',
          'Peace of mind: Gives you security and reassurance while traveling',
          'Comprehensive coverage: Includes accidents, sudden illnesses, trip cancellations, and sometimes lost luggage'
        ]
      },
      advantages: {
        title: 'Advantages of Getting Travel Insurance with Kaya',
        items: [
          {
            icon: 'fa-certificate',
            title: 'Embassy-Approved Plans',
            description: 'We provide embassy-approved health insurance that meets all requirements'
          },
          {
            icon: 'fa-shield-alt',
            title: 'Comprehensive Coverage',
            description: 'Includes medical emergencies, accidents, hospital stays, and sometimes lost luggage'
          },
          {
            icon: 'fa-headset',
            title: 'Additional Services',
            description: '24/7 support when needed, and quick procedures in emergencies'
          },
          {
            icon: 'fa-calendar-check',
            title: 'Flexible Plans',
            description: 'We offer short or long-term plans according to your needs'
          },
          {
            icon: 'fa-hands-helping',
            title: 'Continuous Support',
            description: 'We help you choose the most suitable plan and follow up to ensure you get the required coverage'
          }
        ]
      },
      services_list: {
        title: 'Services We Provide at Kaya',
        items: [
          'Providing embassy-approved health insurance',
          'Coverage for medical emergencies and accidents',
          'Trip cancellation insurance (plan-dependent)',
          'Lost luggage insurance (optional)',
          'Short or long-term insurance plans according to your needs'
        ]
      },
      process: {
        title: 'How Does the Service Work?',
        steps: [
          { icon: 'fa-comments', title: 'Consultation', description: 'We learn about your trip details and visa type' },
          { icon: 'fa-clipboard-list', title: 'Plan Selection', description: 'We help you choose the most suitable insurance' },
          { icon: 'fa-file-signature', title: 'Registration', description: 'We prepare your insurance and issue documents' },
          { icon: 'fa-certificate', title: 'Get Certificate', description: 'You receive the approved insurance certificate' },
          { icon: 'fa-headset', title: 'Ongoing Support', description: 'We provide support when needed' }
        ]
      },
      value: {
        title: 'Added Value with Kaya',
        description: 'We provide you with approved health insurance that meets embassy requirements, with comprehensive coverage that gives you peace of mind and financial protection during your trip.'
      },
      cta: {
        title: 'Want approved travel insurance that protects you and increases your visa approval chances?',
        button: 'Get Your Insurance Now'
      }
    }
  };

  const content = data[locale];

  return (
    <div dir={dir}>
      {/* Hero Section */}
      <section className="service-hero" style={{ background: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)' }}>
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: '20px', opacity: 0.9 }}>
            <Link href="/" style={{ color: 'white' }}>{locale === 'ar' ? 'الرئيسية' : 'Home'}</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            <Link href="/services" style={{ color: 'white' }}>{locale === 'ar' ? 'خدماتنا' : 'Our Services'}</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            <span>{content.title}</span>
          </div>
          <h1>{content.hero.title}</h1>
          <p className="hero-description">{content.hero.description}</p>
        </div>
      </section>

      <div className="container" style={{ marginTop: '60px', marginBottom: '60px' }}>
        {/* Importance Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 className="section-title">{content.importance.title}</h2>
          <ul className="reasons-list">
            {content.importance.points.map((point: string, index: number) => (
              <li key={index}>
                <i className="fas fa-check-circle" style={{ color: '#EF4444', marginInlineEnd: '10px' }}></i>
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* Advantages Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 className="section-title">{content.advantages.title}</h2>
          <div className="row">
            {content.advantages.items.map((advantage: any, index: number) => (
              <div key={index} className="col-md-4 col-sm-6 mb-4">
                <div className="feature-card" style={{ height: '100%', textAlign: 'center' }}>
                  <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #EF4444, #F87171)' }}>
                    <i className={`fas ${advantage.icon}`}></i>
                  </div>
                  <h3>{advantage.title}</h3>
                  <p>{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services List */}
        <section style={{ marginBottom: '60px', background: '#FEE2E2', padding: '40px', borderRadius: '12px' }}>
          <h2 className="section-title">{content.services_list.title}</h2>
          <ul className="reasons-list">
            {content.services_list.items.map((service: string, index: number) => (
              <li key={index}>
                <i className="fas fa-shield-alt" style={{ color: '#EF4444', marginInlineEnd: '10px' }}></i>
                {service}
              </li>
            ))}
          </ul>
        </section>

        {/* Process Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 className="section-title">{content.process.title}</h2>
          <div className="row">
            {content.process.steps.map((step: any, index: number) => (
              <div key={index} className="col-md-4 col-sm-6 mb-4">
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #EF4444, #F87171)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '2rem',
                    color: 'white'
                  }}>
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#1F2937' }}>{step.title}</h3>
                  <p style={{ color: '#6B7280' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Value Section */}
        <section style={{ background: '#F3F4F6', padding: '40px', borderRadius: '12px', marginBottom: '60px' }}>
          <h2 className="section-title">{content.value.title}</h2>
          <p style={{ fontSize: '1.1rem', color: '#6B7280', lineHeight: '1.8' }}>{content.value.description}</p>
        </section>

        {/* CTA Section */}
        <section style={{ textAlign: 'center', padding: '40px 20px', background: 'linear-gradient(135deg, #EF4444, #F87171)', borderRadius: '16px', color: 'white' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{content.cta.title}</h2>
          <Link href="/contact" className="btn btn-light" style={{ 
            padding: '15px 40px',
            fontSize: '1.1rem',
            background: 'white',
            color: '#EF4444',
            border: 'none',
            marginTop: '20px'
          }}>
            <i className="fas fa-phone" style={{ marginInlineEnd: '10px' }}></i>
            {content.cta.button}
          </Link>
        </section>
      </div>
    </div>
  );
}
