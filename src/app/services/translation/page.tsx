'use client';

import { useI18n } from '@/lib/i18n';
import Link from 'next/link';
import '@/styles/services.css';

export default function TranslationPage() {
  const { locale, dir } = useI18n();

  const data = {
    ar: {
      hero: {
        badge: 'ترجمة احترافية معتمدة',
        title: 'خدمات الترجمة المعتمدة',
        subtitle: 'نقدم خدمات ترجمة دقيقة ومعتمدة لجميع وثائقك الرسمية والشخصية بأعلى معايير الجودة والاحترافية'
      },
      stats: [
        { number: '25+', label: 'لغة' },
        { number: '5000+', label: 'وثيقة' },
        { number: '100%', label: 'دقة' },
        { number: '24', label: 'ساعة' }
      ],
      importance: {
        title: 'لماذا تحتاج الترجمة المعتمدة؟',
        items: [
          {
            icon: 'fa-passport',
            title: 'متطلب إلزامي للسفارات',
            description: 'الترجمة المعتمدة شرط أساسي لقبول وثائقك في السفارات والقنصليات'
          },
          {
            icon: 'fa-university',
            title: 'القبول الجامعي',
            description: 'الجامعات تشترط ترجمة معتمدة للشهادات والوثائق الأكاديمية'
          },
          {
            icon: 'fa-gavel',
            title: 'الإجراءات القانونية',
            description: 'الوثائق القانونية تتطلب ترجمة معتمدة من مترجم قانوني محلف'
          },
          {
            icon: 'fa-briefcase',
            title: 'التوظيف الدولي',
            description: 'الشركات العالمية تطلب ترجمة معتمدة للسير الذاتية والشهادات'
          },
          {
            icon: ' fa-check-square',
            title: 'الموثوقية والدقة',
            description: 'الترجمة المعتمدة تضمن دقة المحتوى وقبوله رسمياً'
          },
          {
            icon: 'fa-globe',
            title: 'الاعتراف الدولي',
            description: 'ترجمتنا معترف بها في جميع الدول والمؤسسات الرسمية'
          }
        ]
      },
      types: {
        title: 'أنواع الوثائق التي نترجمها',
        items: [
          {
            icon: 'fa-id-card',
            title: 'وثائق الهوية',
            description: 'جوازات السفر، بطاقات الهوية، دفاتر العائلة، شهادات الميلاد والزواج والوفاة'
          },
          {
            icon: 'fa-graduation-cap',
            title: 'الشهادات الأكاديمية',
            description: 'شهادات التخرج، كشوف الدرجات، شهادات الدورات، التوصيات الأكاديمية'
          },
          {
            icon: 'fa-file-contract',
            title: 'الوثائق القانونية',
            description: 'العقود، التوكيلات، الأحكام القضائية، الوثائق العدلية'
          },
          {
            icon: 'fa-file-medical',
            title: 'التقارير الطبية',
            description: 'التقارير الطبية، نتائج الفحوصات، الوصفات الطبية، السجلات الصحية'
          },
          {
            icon: 'fa-building',
            title: 'وثائق الشركات',
            description: 'عقود الشركات، التقارير المالية، شهادات التسجيل، اللوائح الداخلية'
          },
          {
            icon: 'fa-home',
            title: 'وثائق الملكية',
            description: 'عقود الإيجار والبيع، وثائق الملكية العقارية، كشوف الحسابات البنكية'
          }
        ]
      },
      features: {
        title: 'مميزات خدمة الترجمة لدينا',
        items: [
          {
            icon: 'fa-certificate',
            title: 'ترجمة معتمدة رسمياً',
            description: 'جميع ترجماتنا معتمدة من مترجمين محلفين ومعترف بها دولياً'
          },
          {
            icon: 'fa-user-tie',
            title: 'مترجمون متخصصون',
            description: 'فريق من المترجمين المحترفين المتخصصين في مختلف المجالات'
          },
          {
            icon: 'fa-clock',
            title: 'سرعة في التنفيذ',
            description: 'نلتزم بمواعيد التسليم مع إمكانية الترجمة الفورية عند الحاجة'
          },
          {
            icon: 'fa-dollar-sign',
            title: 'أسعار تنافسية',
            description: 'أسعار عادلة ومنافسة مع جودة عالية وخدمة احترافية'
          },
          {
            icon: 'fa-lock',
            title: 'سرية تامة',
            description: 'نحافظ على خصوصية وثائقك بأعلى معايير السرية والأمان'
          },
          {
            icon: 'fa-redo',
            title: 'مراجعة دقيقة',
            description: 'كل ترجمة تمر بمراجعة دقيقة من فريق الجودة لضمان الدقة'
          }
        ]
      },
      process: {
        title: 'خطوات الحصول على الترجمة المعتمدة',
        steps: [
          {
            icon: 'fa-file-upload',
            title: 'إرسال الوثيقة',
            description: 'أرسل لنا نسخة من الوثيقة المراد ترجمتها (صورة أو PDF)'
          },
          {
            icon: 'fa-search-dollar',
            title: 'تقييم وعرض السعر',
            description: 'نقوم بمراجعة الوثيقة وإرسال عرض السعر ومدة التنفيذ'
          },
          {
            icon: 'fa-handshake',
            title: 'الموافقة والدفع',
            description: 'بعد موافقتك على العرض، يتم الدفع والبدء بالترجمة'
          },
          {
            icon: 'fa-language',
            title: 'الترجمة والمراجعة',
            description: 'يقوم فريقنا بترجمة الوثيقة ومراجعتها بدقة'
          },
          {
            icon: 'fa-stamp',
            title: 'التصديق والختم',
            description: 'ختم الترجمة وتصديقها من المترجم المحلف'
          },
          {
            icon: 'fa-download',
            title: 'التسليم',
            description: 'تسليم الوثيقة المترجمة والمعتمدة إلكترونياً أو شخصياً'
          }
        ]
      },
      languages: {
        title: 'اللغات المتاحة',
        description: 'نقدم خدمات الترجمة من وإلى أكثر من 25 لغة عالمية',
        list: [
          'الإنجليزية',
          'التركية',
          'الألمانية',
          'الفرنسية',
          'الإسبانية',
          'الإيطالية',
          'الروسية',
          'الصينية',
          'اليابانية',
          'الكورية',
          'البرتغالية',
          'الهندية'
        ]
      },
      pricing: {
        title: 'معلومات التسعير',
        note: 'تختلف أسعار الترجمة حسب:',
        factors: [
          'نوع الوثيقة وتعقيدها',
          'عدد الصفحات وعدد الكلمات',
          'اللغة المطلوبة',
          'مدة التنفيذ المطلوبة',
          'الحاجة إلى تصديق إضافي'
        ]
      },
      tips: {
        title: 'نصائح مهمة',
        items: [
          'تأكد من وضوح الوثيقة الأصلية قبل إرسالها',
          'احجز خدمة الترجمة مبكراً لتجنب التأخير',
          'احتفظ بنسخة أصلية من الوثيقة المترجمة',
          'تحقق من متطلبات الجهة المقدم إليها الوثيقة',
          'استفسر عن الحاجة لتصديق إضافي من السفارة'
        ]
      },
      value: {
        title: 'الجودة والثقة',
        description: 'مع خدمة الترجمة المعتمدة من كايا، أنت تحصل على ترجمة دقيقة واحترافية معترف بها دولياً، تضمن قبول وثائقك في أي مكان حول العالم.'
      },
      cta: {
        title: 'هل تحتاج لترجمة وثائقك؟',
        description: 'تواصل معنا الآن واحصل على ترجمة معتمدة سريعة ودقيقة لجميع وثائقك',
        button: 'اطلب ترجمة الآن'
      }
    },
    en: {
      hero: {
        badge: 'Professional Certified Translation',
        title: 'Certified Translation Services',
        subtitle: 'We provide accurate and certified translation services for all your official and personal documents with the highest standards of quality and professionalism'
      },
      stats: [
        { number: '25+', label: 'Languages' },
        { number: '5000+', label: 'Documents' },
        { number: '100%', label: 'Accuracy' },
        { number: '24', label: 'Hours' }
      ],
      importance: {
        title: 'Why Do You Need Certified Translation?',
        items: [
          {
            icon: 'fa-passport',
            title: 'Mandatory Requirement for Embassies',
            description: 'Certified translation is essential for document acceptance at embassies and consulates'
          },
          {
            icon: 'fa-university',
            title: 'University Admission',
            description: 'Universities require certified translation of certificates and academic documents'
          },
          {
            icon: 'fa-gavel',
            title: 'Legal Procedures',
            description: 'Legal documents require certified translation from sworn legal translator'
          },
          {
            icon: 'fa-briefcase',
            title: 'International Employment',
            description: 'Global companies request certified translation of CVs and certificates'
          },
          {
            icon: 'fa-shield-check',
            title: 'Reliability and Accuracy',
            description: 'Certified translation ensures content accuracy and official acceptance'
          },
          {
            icon: 'fa-globe',
            title: 'International Recognition',
            description: 'Our translations are recognized in all countries and official institutions'
          }
        ]
      },
      types: {
        title: 'Types of Documents We Translate',
        items: [
          {
            icon: 'fa-id-card',
            title: 'Identity Documents',
            description: 'Passports, ID cards, family books, birth, marriage and death certificates'
          },
          {
            icon: 'fa-graduation-cap',
            title: 'Academic Certificates',
            description: 'Graduation certificates, transcripts, course certificates, academic recommendations'
          },
          {
            icon: 'fa-file-contract',
            title: 'Legal Documents',
            description: 'Contracts, powers of attorney, court judgments, notarial documents'
          },
          {
            icon: 'fa-file-medical',
            title: 'Medical Reports',
            description: 'Medical reports, test results, prescriptions, health records'
          },
          {
            icon: 'fa-building',
            title: 'Corporate Documents',
            description: 'Company contracts, financial reports, registration certificates, internal regulations'
          },
          {
            icon: 'fa-home',
            title: 'Property Documents',
            description: 'Rental and sale contracts, property deeds, bank statements'
          }
        ]
      },
      features: {
        title: 'Our Translation Service Features',
        items: [
          {
            icon: 'fa-certificate',
            title: 'Officially Certified Translation',
            description: 'All our translations are certified by sworn translators and internationally recognized'
          },
          {
            icon: 'fa-user-tie',
            title: 'Specialized Translators',
            description: 'Team of professional translators specialized in various fields'
          },
          {
            icon: 'fa-clock',
            title: 'Fast Delivery',
            description: 'We commit to delivery dates with possibility of urgent translation when needed'
          },
          {
            icon: 'fa-dollar-sign',
            title: 'Competitive Prices',
            description: 'Fair and competitive prices with high quality and professional service'
          },
          {
            icon: 'fa-lock',
            title: 'Complete Confidentiality',
            description: 'We maintain document privacy with highest confidentiality and security standards'
          },
          {
            icon: 'fa-redo',
            title: 'Accurate Review',
            description: 'Each translation goes through careful review by quality team to ensure accuracy'
          }
        ]
      },
      process: {
        title: 'Steps to Get Certified Translation',
        steps: [
          {
            icon: 'fa-file-upload',
            title: 'Send Document',
            description: 'Send us a copy of the document to be translated (image or PDF)'
          },
          {
            icon: 'fa-search-dollar',
            title: 'Assessment and Quote',
            description: 'We review the document and send price quote and execution time'
          },
          {
            icon: 'fa-handshake',
            title: 'Approval and Payment',
            description: 'After approving the quote, payment is made and translation begins'
          },
          {
            icon: 'fa-language',
            title: 'Translation and Review',
            description: 'Our team translates the document and reviews it carefully'
          },
          {
            icon: 'fa-stamp',
            title: 'Certification and Stamp',
            description: 'Stamp and certify the translation by sworn translator'
          },
          {
            icon: 'fa-download',
            title: 'Delivery',
            description: 'Deliver the translated and certified document electronically or in person'
          }
        ]
      },
      languages: {
        title: 'Available Languages',
        description: 'We provide translation services from and to more than 25 global languages',
        list: [
          'English',
          'Turkish',
          'German',
          'French',
          'Spanish',
          'Italian',
          'Russian',
          'Chinese',
          'Japanese',
          'Korean',
          'Portuguese',
          'Hindi'
        ]
      },
      pricing: {
        title: 'Pricing Information',
        note: 'Translation prices vary according to:',
        factors: [
          'Document type and complexity',
          'Number of pages and words',
          'Required language',
          'Required execution time',
          'Need for additional certification'
        ]
      },
      tips: {
        title: 'Important Tips',
        items: [
          'Ensure original document clarity before sending',
          'Book translation service early to avoid delays',
          'Keep original copy of translated document',
          'Check requirements of receiving authority',
          'Inquire about need for additional embassy certification'
        ]
      },
      value: {
        title: 'Quality and Trust',
        description: 'With Kaya\'s certified translation service, you get accurate and professional translation that is internationally recognized, ensuring your documents are accepted anywhere in the world.'
      },
      cta: {
        title: 'Need to Translate Your Documents?',
        description: 'Contact us now and get fast and accurate certified translation for all your documents',
        button: 'Request Translation Now'
      }
    }
  };

  const content = data[locale];

  return (
    <div className="service-page-base" dir={dir}>
      {/* Hero Section */}
      <section className="hero-translate">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>{content.hero.badge}</span>
            </div>
            
            <div className="hero-title">
              <h1 className="hero-title-main">{content.hero.title}</h1>
              <p className="hero-title-sub">{content.hero.subtitle}</p>
            </div>

            <div className="service-stats">
              {content.stats.map((stat: any, index: number) => (
                <div key={index} className="service-stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="hero-cta">
              <Link href="#importance" className="btn-service-primary">
                {locale === 'ar' ? 'لماذا الترجمة المعتمدة؟' : 'Why Certified?'}
              </Link>
              <Link href="/contact" className="btn-service-secondary">
                {locale === 'ar' ? 'اطلب ترجمة' : 'Request Translation'}
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
          <div className="service-feature-grid">
            {content.importance.items.map((item: any, index: number) => (
              <div key={index} className="feature-card">
                <div className="feature-icon" >
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Document Types Section */}
        <section className="service-section" style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <h2 className="section-title">{content.types.title}</h2>
          </div>
          <div className="service-feature-grid">
            {content.types.items.map((type: any, index: number) => (
              <div key={index} className="feature-card">
                <div className="feature-icon" >
                  <i className={`fas ${type.icon}`}></i>
                </div>
                <h4>{type.title}</h4>
                <p>{type.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="service-section" style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <h2 className="section-title">{content.features.title}</h2>
          </div>
          <div className="service-feature-grid">
            {content.features.items.map((feature: any, index: number) => (
              <div key={index} className="feature-card">
                <div className="feature-icon" >
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
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
                <div className="process-icon" >
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                <div className="process-step-number" >
                  <span style={{ color: '#FCD34D' }}>
                    {locale === 'ar' ? `خطوة ${index + 1}` : `Step ${index + 1}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section className="service-section" style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <h2 className="section-title">{content.languages.title}</h2>
            <p className="section-subtitle">{content.languages.description}</p>
          </div>
          <div className="service-notes-card" >
            <div className="row">
              {content.languages.list.map((language: string, index: number) => (
                <div key={index} className="col-md-3 col-sm-6 mb-3">
                  <div className="note-item">
                    <i className="fas fa-globe note-icon" style={{ color: '#FCD34D' }}></i>
                    <p className="note-text">{language}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="service-section" style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <h2 className="section-title">{content.pricing.title}</h2>
          </div>
          <div className="service-notes-card" >
            <h4 style={{ color: '#FCD34D', marginBottom: '20px', fontWeight: '600' }}>
              {content.pricing.note}
            </h4>
            <div className="row">
              {content.pricing.factors.map((factor: string, index: number) => (
                <div key={index} className="col-md-6 mb-3">
                  <div className="note-item">
                    <i className="fas fa-check-circle note-icon" style={{ color: '#FCD34D' }}></i>
                    <p className="note-text">{factor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="service-section" style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <h2 className="section-title">{content.tips.title}</h2>
          </div>
          <div className="service-notes-card" >
            <div className="row">
              {content.tips.items.map((tip: string, index: number) => (
                <div key={index} className="col-md-6 mb-3">
                  <div className="note-item">
                    <i className="fas fa-lightbulb note-icon" style={{ color: '#D97706' }}></i>
                    <p className="note-text">{tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Section */}
        <section className="service-section" style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <h2 className="section-title">{content.value.title}</h2>
          </div>
          <div className="value-card" >
            <div className="service-icon" style={{ 
              width: '80px',
              height: '80px',
              fontSize: '2rem'
            }}>
              <i className="fas fa-certificate"></i>
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
            <p>{content.cta.description}</p>
            <Link href="/contact" className="btn-cta" >
              <i className="fas fa-file-alt"></i>
              {content.cta.button}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}