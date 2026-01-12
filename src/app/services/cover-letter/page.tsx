'use client';

import { useI18n } from '@/lib/i18n';
import Link from 'next/link';
import '@/styles/services.css';

export default function CoverLetterPage() {
  const { locale, dir } = useI18n();

  const data = {
    ar: {
      title: 'خدمة رسالة التغطية',
      hero: {
        title: 'رسالة التغطية (Cover Letter)',
        description: 'رسالة التغطية هي الوثيقة الرسمية التي تُرفق مع طلبك للتأشيرة أو القبول، لتوضح الغرض الرئيسي من تقديمك، سبب السفر، أو مدة الإقامة. إنها البوابة التي تشرح للسفارات بوضوح ما تريد وما تحتاجه.'
      },
      importance: {
        title: 'أهمية رسالة التغطية',
        points: [
          'توضح الغرض الأساسي من طلب التأشيرة (سياحة، دراسة، عمل، زيارة عائلية)',
          'تُظهر التزامك بالعودة لبلدك بعد انتهاء الزيارة',
          'تقدم معلومات دقيقة ورسمية تسهل على موظف التأشيرات فهم ملفك',
          'تزيد من مصداقية طلبك وتقلل احتمالية الرفض'
        ]
      },
      notes: {
        title: 'ملاحظات مهمة',
        items: [
          'الاختصار: يجب أن تكون مختصرة وواضحة، لا تتجاوز صفحة واحدة',
          'الوضوح: يجب أن تحتوي على معلومات دقيقة وليست عامة',
          'الغرض: كل رسالة تغطية يجب أن تكون مخصصة حسب نوع الطلب',
          'الالتزام: يجب أن تُظهر أنك ملتزم بالعودة إلى بلدك بعد انتهاء المدة المسموحة'
        ]
      },
      services: {
        title: 'ماذا نقدم لك في كايا؟',
        items: [
          'صياغة رسالة تغطية احترافية تناسب نوع طلب التأشيرة',
          'إبراز الغرض الرسمي من السفر بوضوح ودقة',
          'تنسيق الرسالة بطريقة تتناسب مع متطلبات السفارات',
          'التأكد من أن الرسالة قصيرة، واضحة، ومقنعة'
        ]
      },
      difference: {
        title: 'الفرق بين رسالة التغطية ورسالة الدافع',
        cover: 'رسالة التغطية (Cover Letter): وثيقة رسمية تُرفق مع طلب التأشيرة، توضح الغرض من السفر والتفاصيل الإدارية. تركز على الجانب الرسمي والإداري.',
        motivation: 'رسالة الدافع (Motivation Letter): وثيقة شخصية تُبرز الطموحات والأهداف المستقبلية، مثل الدراسة أو التدريب. تركز على الجانب الشخصي والإنساني.',
        summary: 'باختصار: رسالة التغطية تجيب على "لماذا تقدم الطلب؟"، أما رسالة الدافع تجيب على "لماذا أنت الشخص المناسب؟".'
      },
      value: {
        title: 'القيمة المضافة لك مع كايا',
        description: 'نصيغ لك رسالة تغطية رسمية واضحة ومقنعة، تُسهل على السفارة فهم طلبك وتزيد من فرص قبولك.'
      },
      cta: {
        title: 'تحتاج إلى رسالة تغطية احترافية تزيد من فرص قبولك؟',
        button: 'تواصل معنا الآن'
      }
    },
    en: {
      title: 'Cover Letter Service',
      hero: {
        title: 'Cover Letter Service',
        description: 'A cover letter is the official document attached to your visa or admission application, clarifying the main purpose of your submission, reason for travel, or duration of stay. It\'s the gateway that clearly explains to embassies what you want and what you need.'
      },
      importance: {
        title: 'Importance of a Cover Letter',
        points: [
          'Clarifies the primary purpose of the visa application (tourism, study, work, family visit)',
          'Demonstrates your commitment to return to your country after the visit ends',
          'Provides accurate and official information that helps visa officers understand your file',
          'Increases the credibility of your application and reduces the likelihood of rejection'
        ]
      },
      notes: {
        title: 'Important Notes',
        items: [
          'Brevity: Should be concise and clear, not exceeding one page',
          'Clarity: Must contain accurate information, not general statements',
          'Purpose: Each cover letter should be customized according to application type',
          'Commitment: Must show that you are committed to returning to your country after the allowed period'
        ]
      },
      services: {
        title: 'What We Offer at Kaya',
        items: [
          'Professional drafting of cover letters suitable for your visa application type',
          'Highlighting the official purpose of travel with clarity and accuracy',
          'Formatting the letter in a way that meets embassy requirements',
          'Ensuring the letter is short, clear, and convincing'
        ]
      },
      difference: {
        title: 'Difference Between Cover Letter and Motivation Letter',
        cover: 'Cover Letter: An official document attached to visa applications, clarifying the purpose of travel and administrative details. Focuses on official and administrative aspects.',
        motivation: 'Motivation Letter: A personal document highlighting ambitions and future goals, such as studying or training. Focuses on personal and human aspects.',
        summary: 'In short: A cover letter answers "Why are you submitting this application?", while a motivation letter answers "Why are you the right person?".'
      },
      value: {
        title: 'Added Value with Kaya',
        description: 'We draft a clear and convincing official cover letter that makes it easier for the embassy to understand your application and increases your chances of acceptance.'
      },
      cta: {
        title: 'Need a professional cover letter to increase your chances of acceptance?',
        button: 'Contact Us Now'
      }
    }
  };

  const content = data[locale];

  return (
    <div dir={dir}>
      {/* Hero Section */}
      <section className="service-hero" style={{ background: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)' }}>
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
                <i className="fas fa-check-circle" style={{ color: '#F97316', marginInlineEnd: '10px' }}></i>
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* Important Notes */}
        <section style={{ marginBottom: '60px', background: '#FEF3C7', padding: '40px', borderRadius: '12px' }}>
          <h2 className="section-title">{content.notes.title}</h2>
          <ul className="reasons-list">
            {content.notes.items.map((item: string, index: number) => (
              <li key={index}>
                <i className="fas fa-exclamation-triangle" style={{ color: '#F97316', marginInlineEnd: '10px' }}></i>
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
                  <i className="fas fa-file-contract" style={{ color: '#F97316', fontSize: '2rem', marginBottom: '15px' }}></i>
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
              <div style={{ padding: '30px', background: 'linear-gradient(135deg, #F97316, #FB923C)', color: 'white', borderRadius: '12px', height: '100%' }}>
                <i className="fas fa-file-alt" style={{ fontSize: '2.5rem', marginBottom: '15px' }}></i>
                <p style={{ lineHeight: '1.8' }}>{content.difference.cover}</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div style={{ padding: '30px', background: 'linear-gradient(135deg, #0D9488, #14B8A6)', color: 'white', borderRadius: '12px', height: '100%' }}>
                <i className="fas fa-heart" style={{ fontSize: '2.5rem', marginBottom: '15px' }}></i>
                <p style={{ lineHeight: '1.8' }}>{content.difference.motivation}</p>
              </div>
            </div>
          </div>
          <div style={{ background: '#FEF3C7', padding: '25px', borderRadius: '12px', marginTop: '20px' }}>
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
        <section style={{ textAlign: 'center', padding: '40px 20px', background: 'linear-gradient(135deg, #F97316, #FB923C)', borderRadius: '16px', color: 'white' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{content.cta.title}</h2>
          <Link href="/contact" className="btn btn-light" style={{ 
            padding: '15px 40px',
            fontSize: '1.1rem',
            background: 'white',
            color: '#F97316',
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
