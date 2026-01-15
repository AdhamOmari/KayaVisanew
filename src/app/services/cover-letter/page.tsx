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
    <div dir={dir} className="cover-page">

      {/* Hero */}
      <section className="cover-hero">
        <div className="cover-container">


          <h1>{content.hero.title}</h1>
          <p className="cover-hero-description">{content.hero.description}</p>
        </div>
      </section>

      <div className="cover-container">

        {/* Importance */}
        <section className="cover-section">
          <h2 className="cover-section-title">{content.importance.title}</h2>
          <ul className="cover-reasons-list">
            {content.importance.points.map((point, index) => (
              <li key={index}>
                <i className="fas fa-check-circle cover-check-icon"></i>
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* Notes */}
        <section className="cover-section cover-notes-box">
          <h2 className="cover-section-title">{content.notes.title}</h2>
          <ul className="cover-reasons-list">
            {content.notes.items.map((item, index) => (
              <li key={index}>
                <i className="fas fa-check-circle cover-check-icon"></i>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section className="cover-section">
          <h2 className="cover-section-title">{content.services.title}</h2>
          <div className="cover-row">
            {content.services.items.map((service, index) => (
              <div key={index} className="cover-col-md-6 cover-mb-3">
                <div className="cover-feature-card">
                  <i className="fas fa-file-contract cover-feature-icon"></i>
                  <p>{service}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Difference */}
        <section className="cover-section">
          <h2 className="cover-section-title">{content.difference.title}</h2>

          <div className="cover-row">
            <div className="cover-col-md-6 cover-mb-4">
              <div className="cover-diff-card cover-diff-cover">
                <i className="fas fa-file-alt cover-diff-icon"></i>
                <p>{content.difference.cover}</p>
              </div>
            </div>

            <div className="cover-col-md-6 cover-mb-4">
              <div className="cover-diff-card cover-diff-motivation">
                <i className="fas fa-heart cover-diff-icon"></i>
                <p>{content.difference.motivation}</p>
              </div>
            </div>
          </div>

          <div className="cover-diff-summary">
            <i className="fas fa-lightbulb cover-summary-icon"></i>
            {content.difference.summary}
          </div>
        </section>

        {/* Value */}
        <section className="cover-section cover-value-box">
          <h2 className="cover-section-title">{content.value.title}</h2>
          <p className="cover-text">{content.value.description}</p>
        </section>

        {/* CTA */}
        <section className="cover-cta-section">
          <h2 className="cover-cta-title">{content.cta.title}</h2>
          <Link href="/contact" className="cover-cta-button">
            {content.cta.button}
          </Link>
        </section>

      </div>
    </div>
  );
}
