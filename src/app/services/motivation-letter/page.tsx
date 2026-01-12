'use client';

import { useI18n } from '@/lib/i18n';
import Link from 'next/link';
import '@/styles/services.css';

export default function MotivationLetterPage() {
  const { locale, dir } = useI18n();

  const data = {
    ar: {
      title: 'خدمة رسالة الدافع',
      hero: {
        title: 'رسالة الدافع (Motivation Letter)',
        description: 'رسالة الدافع هي الوثيقة التي تُظهر شخصيتك، طموحاتك، وأسباب اختيارك لبرنامج دراسي. إنها صوتك الشخصي الذي يشرح لماذا أنت المرشح المناسب، وما الذي يجعلك مختلفًا عن الآخرين.'
      },
      importance: {
        title: 'أهمية رسالة الدافع',
        points: [
          'تُبرز شخصيتك وأهدافك بشكل واضح ومؤثر',
          'توضح دوافعك الحقيقية وراء اختيار الدراسة أو العمل في بلد معين',
          'تُظهر التزامك وجديتك أمام الجامعات والسفارات',
          'تزيد من فرص قبولك لأنها تمنح ملفك طابعًا إنسانيًا وشخصيًا يتجاوز الأوراق الرسمية'
        ]
      },
      notes: {
        title: 'ملاحظات مهمة',
        items: [
          'يجب أن تكون الرسالة شخصية ومحددة، تُظهر دوافعك الحقيقية',
          'لا تتجاوز عادةً صفحة واحدة',
          'يمكن تعديل الأقسام لتناسب نوع الطلب (دراسة، منحة، عمل تطوعي)',
          'من الأفضل أن تُبرز أهدافك المستقبلية وكيف ستستفيد من الفرصة'
        ]
      },
      services: {
        title: 'ماذا نقدم لك في كايا؟',
        items: [
          'صياغة احترافية لرسالة الدافع تعكس شخصيتك وطموحاتك',
          'إبراز نقاط القوة التي تدعم قبولك في الجامعة أو المؤسسة',
          'تنسيق مثالي للرسالة لتكون مقنعة وسهلة القراءة',
          'تخصيص الرسالة حسب نوع الطلب (دراسة، عمل، منحة، أو تدريب)'
        ]
      },
      difference: {
        title: 'الفرق بين رسالة الدافع ورسالة التغطية',
        motivation: 'رسالة الدافع (Motivation Letter): وثيقة شخصية تُبرز دوافعك وأهدافك المستقبلية، مثل رغبتك في دراسة تخصص معين. تركيزها على الجانب الشخصي والطموحات.',
        cover: 'رسالة التغطية (Cover Letter): وثيقة رسمية تُرفق مع طلبك للتأشيرة لتوضيح الغرض الأساسي من التقديم، مثل سبب السفر أو مدة الإقامة. تركيزها على الجانب الإداري والرسمي.',
        summary: 'ببساطة: رسالة الدافع تُجيب على سؤال "لماذا أنت الشخص المناسب لهذه الفرصة؟"، بينما رسالة التغطية تُجيب على سؤال "لماذا تقدم هذا الطلب؟".'
      },
      value: {
        title: 'القيمة المضافة لك مع كايا',
        description: 'مع كايا، نكتب لك رسالة دافع مقنعة ومصاغة باحترافية تُظهر شخصيتك وطموحاتك، وتزيد من فرص قبولك لدى الجامعات والسفارات.'
      },
      cta: {
        title: 'هل ترغب في إبراز شخصيتك وطموحاتك برسالة دافع احترافية؟',
        button: 'تواصل معنا الآن'
      }
    },
    en: {
      title: 'Motivation Letter Service',
      hero: {
        title: 'Motivation Letter Service',
        description: 'A motivation letter is a document that showcases your personality, ambitions, and reasons for choosing a study program. It\'s your personal voice explaining why you are the right candidate and what makes you different from others.'
      },
      importance: {
        title: 'Importance of a Motivation Letter',
        points: [
          'Highlights your personality and goals in a clear and impactful way',
          'Clarifies your genuine motives for choosing to study or work in a specific country',
          'Demonstrates your commitment and seriousness to universities and embassies',
          'Increases your chances of acceptance by giving your file a human and personal touch beyond official papers'
        ]
      },
      notes: {
        title: 'Important Notes',
        items: [
          'The letter should be personal and specific, showing your true motivations',
          'Usually should not exceed one page',
          'Sections can be adjusted to suit the application type (study, scholarship, volunteer work)',
          'Best to highlight your future goals and how you will benefit from the opportunity'
        ]
      },
      services: {
        title: 'What We Offer at Kaya',
        items: [
          'Professional drafting of motivation letters that reflect your personality and ambitions',
          'Highlighting strengths that support your acceptance at universities or institutions',
          'Perfect formatting to make the letter compelling and easy to read',
          'Customizing the letter according to application type (study, work, scholarship, or training)'
        ]
      },
      difference: {
        title: 'Difference Between Motivation Letter and Cover Letter',
        motivation: 'Motivation Letter: A personal document that highlights your motives and future goals, such as your desire to study a specific field. Focuses on personal aspects and ambitions.',
        cover: 'Cover Letter: An official document attached to your visa application to clarify the primary purpose of application, such as reason for travel or duration of stay. Focuses on administrative and official aspects.',
        summary: 'Simply put: A motivation letter answers "Why are you the right person for this opportunity?", while a cover letter answers "Why are you submitting this application?".'
      },
      value: {
        title: 'Added Value with Kaya',
        description: 'With Kaya, we write you a compelling and professionally drafted motivation letter that showcases your personality and ambitions, increasing your chances of acceptance at universities and embassies.'
      },
      cta: {
        title: 'Would you like to highlight your personality and ambitions with a professional motivation letter?',
        button: 'Contact Us Now'
      }
    }
  };

  const content = data[locale];

  return (
    <div dir={dir}>
      {/* Hero Section */}
      <section className="service-hero" style={{ background: 'linear-gradient(135deg, #0D9488 0%, #14B8A6 100%)' }}>
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
                <i className="fas fa-check-circle" style={{ color: '#14B8A6', marginInlineEnd: '10px' }}></i>
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* Important Notes */}
        <section style={{ marginBottom: '60px', background: '#F3F4F6', padding: '40px', borderRadius: '12px' }}>
          <h2 className="section-title">{content.notes.title}</h2>
          <ul className="reasons-list">
            {content.notes.items.map((item: string, index: number) => (
              <li key={index}>
                <i className="fas fa-info-circle" style={{ color: '#F97316', marginInlineEnd: '10px' }}></i>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section style={{ marginBottom: '60px' }}>
          <h2 className="section-title">{content.services.title}</h2>
          <div className="row">
            {content.services.items.map((service: string, index: number) => (
              <div key={index} className="col-md-6 mb-3">
                <div className="feature-card">
                  <i className="fas fa-file-signature" style={{ color: '#14B8A6', fontSize: '2rem', marginBottom: '15px' }}></i>
                  <p>{service}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Difference Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 className="section-title">{content.difference.title}</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div style={{ padding: '30px', background: 'linear-gradient(135deg, #0D9488, #14B8A6)', color: 'white', borderRadius: '12px', height: '100%' }}>
                <i className="fas fa-heart" style={{ fontSize: '2.5rem', marginBottom: '15px' }}></i>
                <p style={{ lineHeight: '1.8' }}>{content.difference.motivation}</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div style={{ padding: '30px', background: 'linear-gradient(135deg, #F97316, #FB923C)', color: 'white', borderRadius: '12px', height: '100%' }}>
                <i className="fas fa-file-alt" style={{ fontSize: '2.5rem', marginBottom: '15px' }}></i>
                <p style={{ lineHeight: '1.8' }}>{content.difference.cover}</p>
              </div>
            </div>
          </div>
          <div style={{ background: '#F3F4F6', padding: '25px', borderRadius: '12px', marginTop: '20px' }}>
            <p style={{ fontSize: '1.1rem', margin: 0, color: '#1F2937' }}>
              <i className="fas fa-lightbulb" style={{ color: '#F97316', marginInlineEnd: '10px' }}></i>
              {content.difference.summary}
            </p>
          </div>
        </section>

        {/* Value Section */}
        <section style={{ background: '#F3F4F6', padding: '40px', borderRadius: '12px', marginBottom: '60px' }}>
          <h2 className="section-title">{content.value.title}</h2>
          <p style={{ fontSize: '1.1rem', color: '#6B7280', lineHeight: '1.8' }}>{content.value.description}</p>
        </section>

        {/* CTA Section */}
        <section style={{ textAlign: 'center', padding: '40px 20px', background: 'linear-gradient(135deg, #0D9488, #14B8A6)', borderRadius: '16px', color: 'white' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{content.cta.title}</h2>
          <Link href="/contact" className="btn btn-light" style={{ 
            padding: '15px 40px',
            fontSize: '1.1rem',
            background: 'white',
            color: '#0D9488',
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
