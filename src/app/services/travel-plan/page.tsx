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
        title: 'خطة السفر (Travel Itinerary)',
        description: 'خطة السفر هي وثيقة تفصيلية توضح برنامج رحلتك اليومي، بما في ذلك: تذاكر الطيران، حجوزات الفنادق، الأماكن التي ستزورها، والأنشطة المخططة. إنها الدليل الذي يُظهر للسفارة أنك مُنظم ومُستعد تمامًا لرحلتك.'
      },
      importance: {
        title: 'أهمية خطة السفر',
        points: [
          'تُظهر التزامك وجديتك أمام السفارة، لأنك مُخطط بوضوح لرحلتك',
          'توفر دليلاً واضحًا على غرض السفر (سياحة، زيارة عائلية، عمل)',
          'تزيد من مصداقية طلبك، لأنها تُبرز أنك لست مسافرًا عشوائيًا',
          'تُسهل على موظف التأشيرات فهم ملفك والموافقة عليه بسرعة'
        ]
      },
      notes: {
        title: 'ملاحظات مهمة',
        items: [
          'يجب أن تكون الخطة واقعية ومفصلة، بحيث تعكس رحلة حقيقية',
          'لا تُرفق خطة عامة أو غير مُحددة، لأن ذلك يُضعف طلبك',
          'يجب أن تتضمن: تذاكر الطيران، حجوزات الفنادق، الأماكن المخططة، والأنشطة اليومية',
          'مهم: خطة السفر تُقوي الطلب، خاصة لتأشيرات السياحة والزيارة'
        ]
      },
      specific: {
        title: 'متطلبات خاصة لرحلات الدراسة والعمل',
        items: [
          'رحلات الدراسة: يجب أن تتضمن الخطة جدول الدراسة، أو مواعيد الاختبارات، أو الإقامة قرب الجامعة',
          'رحلات العمل: يجب أن تتضمن مواعيد الاجتماعات، المؤتمرات، أو الفعاليات التي ستحضرها'
        ]
      },
      services: {
        title: 'ماذا نقدم لك في كايا؟',
        items: [
          'إعداد خطة سفر احترافية وواقعية مع حجوزات فنادق وطيران',
          'توضيح الأماكن السياحية أو الأنشطة المخططة خلال الرحلة',
          'تخصيص الخطة حسب نوع التأشيرة (سياحة، دراسة، عمل، زيارة عائلية)',
          'التأكد من أن الخطة منطقية ومفصلة، وتُظهر التزامك بالعودة'
        ]
      },
      process: {
        title: 'كيف تعمل الخدمة؟',
        steps: [
          { icon: 'fa-comments', title: 'التواصل', description: 'نستمع لتفاصيل رحلتك وأهدافك' },
          { icon: 'fa-plane', title: 'الحجز', description: 'نحجز تذاكر الطيران والفنادق المناسبة' },
          { icon: 'fa-calendar-alt', title: 'التخطيط', description: 'نُجهز خطة مفصلة يومية لرحلتك' },
          { icon: 'fa-check-circle', title: 'المراجعة', description: 'نراجع الخطة لضمان الدقة والواقعية' },
          { icon: 'fa-file-pdf', title: 'التسليم', description: 'نسلمك الخطة بصيغة PDF جاهزة للطباعة' }
        ]
      },
      value: {
        title: 'القيمة المضافة لك مع كايا',
        description: 'نُجهز لك خطة سفر احترافية ومفصلة، تُبرز جديتك وتُزيد من فرص قبولك لدى السفارة.'
      },
      cta: {
        title: 'هل تريد خطة سفر احترافية تزيد من فرص قبول تأشيرتك؟',
        button: 'تواصل معنا الآن'
      }
    },
    en: {
      title: 'Travel Plan Service',
      hero: {
        title: 'Travel Itinerary Service',
        description: 'A travel itinerary is a detailed document outlining your daily trip schedule, including: flight tickets, hotel reservations, places you will visit, and planned activities. It\'s the proof that shows the embassy you are organized and fully prepared for your trip.'
      },
      importance: {
        title: 'Importance of a Travel Plan',
        points: [
          'Shows your commitment and seriousness to the embassy, as you have clearly planned your trip',
          'Provides clear evidence of the purpose of travel (tourism, family visit, business)',
          'Increases the credibility of your application, as it shows you are not a random traveler',
          'Makes it easier for visa officers to understand your file and approve it quickly'
        ]
      },
      notes: {
        title: 'Important Notes',
        items: [
          'The plan should be realistic and detailed, reflecting a real journey',
          'Do not attach a general or vague plan, as that weakens your application',
          'Should include: flight tickets, hotel bookings, planned places, and daily activities',
          'Important: A travel plan strengthens the application, especially for tourism and visit visas'
        ]
      },
      specific: {
        title: 'Special Requirements for Study and Work Trips',
        items: [
          'Study trips: The plan should include study schedule, exam dates, or accommodation near the university',
          'Business trips: Should include meeting schedules, conferences, or events you will attend'
        ]
      },
      services: {
        title: 'What We Offer at Kaya',
        items: [
          'Preparing a professional and realistic travel plan with hotel and flight bookings',
          'Clarifying tourist places or planned activities during the trip',
          'Customizing the plan according to visa type (tourism, study, work, family visit)',
          'Ensuring the plan is logical and detailed, showing your commitment to return'
        ]
      },
      process: {
        title: 'How Does the Service Work?',
        steps: [
          { icon: 'fa-comments', title: 'Consultation', description: 'We listen to your trip details and goals' },
          { icon: 'fa-plane', title: 'Booking', description: 'We book appropriate flights and hotels' },
          { icon: 'fa-calendar-alt', title: 'Planning', description: 'We prepare a detailed daily itinerary' },
          { icon: 'fa-check-circle', title: 'Review', description: 'We review the plan for accuracy and realism' },
          { icon: 'fa-file-pdf', title: 'Delivery', description: 'We deliver the plan in print-ready PDF format' }
        ]
      },
      value: {
        title: 'Added Value with Kaya',
        description: 'We prepare a professional and detailed travel plan that highlights your seriousness and increases your chances of embassy approval.'
      },
      cta: {
        title: 'Want a professional travel plan to increase your visa approval chances?',
        button: 'Contact Us Now'
      }
    }
  };

  const content = data[locale];

  return (
    <div dir={dir}>
      {/* Hero Section */}
      <section className="service-hero" style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)' }}>
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
                <i className="fas fa-check-circle" style={{ color: '#8B5CF6', marginInlineEnd: '10px' }}></i>
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* Important Notes */}
        <section style={{ marginBottom: '60px', background: '#F3E8FF', padding: '40px', borderRadius: '12px' }}>
          <h2 className="section-title">{content.notes.title}</h2>
          <ul className="reasons-list">
            {content.notes.items.map((item: string, index: number) => (
              <li key={index}>
                <i className="fas fa-info-circle" style={{ color: '#8B5CF6', marginInlineEnd: '10px' }}></i>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Specific Requirements */}
        <section style={{ marginBottom: '60px' }}>
          <h2 className="section-title">{content.specific.title}</h2>
          <div className="row">
            {content.specific.items.map((item: string, index: number) => (
              <div key={index} className="col-md-6 mb-3">
                <div className="feature-card">
                  <i className="fas fa-graduation-cap" style={{ color: '#8B5CF6', fontSize: '2rem', marginBottom: '15px' }}></i>
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section style={{ marginBottom: '60px' }}>
          <h2 className="section-title">{content.services.title}</h2>
          <div className="row">
            {content.services.items.map((service: string, index: number) => (
              <div key={index} className="col-md-6 mb-3">
                <div className="feature-card">
                  <i className="fas fa-map-marked-alt" style={{ color: '#8B5CF6', fontSize: '2rem', marginBottom: '15px' }}></i>
                  <p>{service}</p>
                </div>
              </div>
            ))}
          </div>
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
                    background: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
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
        <section style={{ textAlign: 'center', padding: '40px 20px', background: 'linear-gradient(135deg, #8B5CF6, #A78BFA)', borderRadius: '16px', color: 'white' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{content.cta.title}</h2>
          <Link href="/contact" className="btn btn-light" style={{ 
            padding: '15px 40px',
            fontSize: '1.1rem',
            background: 'white',
            color: '#8B5CF6',
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
