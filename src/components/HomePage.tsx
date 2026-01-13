'use client';

import { useI18n } from '@/lib/i18n';
import { useMemo } from 'react';
import '@/styles/home.css';

export default function HomePage() {
  const { locale, dir } = useI18n();

  const content = {
    ar: {
      hero: {
        title: 'سافر بثقة… دعنا نهتم بالتأشيرة عنك',
        subtitle: 'في مكتب كايا، نؤمن أن رحلتك تبدأ من لحظة تقديم طلب التأشيرة. نحن هنا لنحوّل الإجراءات المعقدة إلى تجربة سهلة، سريعة ومضمونة.',
        cta1: 'ابدأ طلبك الآن',
        cta2: 'استشر خبيرنا مجاناً',
      },
      about: {
        title: 'من نحن؟',
        subtitle: 'فريق من المتخصصين يقود مسارك نحو التأشيرة.',
        description: 'مرحباً بك في كايا (Kaya)، حيث تلتقي الخبرة بالشغف لتبسيط مسار هجرتك وسفرك. نحن نؤمن بأن الحصول على تأشيرة لا ينبغي أن يكون رحلة معقدة أو مثيرة للقلق. ولهذا السبب، لم نكتفِ بكوننا مكتباً لخدمات التأشيرات، بل بنينا فريقاً من المستشارين المعتمدين الذين يعملون كشركاء لك، يوجهونك خلال كل خطوة بوضوح ودقة.',
        tagline: 'نحن من يجعل طريقك إلى التأشيرة أقصر وأكثر وضوحاً.',
        vision: 'أن نكون الشريك الموثوق الأول لكل طموح يسعى للانطلاق نحو العالمية، بتقديم حلول تأشيرات فعّالة وسهلة.',
      },
      why: {
        title: 'لماذا نحن؟',
        items: [
          { icon: 'fas fa-globe', title: 'خبرة عالمية', desc: 'سنوات من النجاح في استخراج التأشيرات لمختلف الوجهات' },
          { icon: 'fas fa-clock', title: 'سرعة ومرونة', desc: 'إجراءات مبسطة تناسب جدولك' },
          { icon: 'fas fa-user-shield', title: 'دعم شخصي', desc: 'فريق يتابعك خطوة بخطوة حتى استلام التأشيرة' },
          { icon: 'fas fa-lock', title: 'موثوقية وأمان', desc: 'بياناتك في أيدٍ أمينة ومعايير عالية من السرية' },
        ],
      },
      steps: {
        title: 'خطواتنا البسيطة',
        items: [
          { icon: 'fas fa-edit', text: 'املأ طلبك عبر الإنترنت' },
          { icon: 'fas fa-file-alt', text: 'دع خبرائنا يراجعون المستندات' },
          { icon: 'fas fa-check-circle', text: 'استلم تأشيرتك بكل سهولة' },
        ],
      },
      services: {
        title: 'الخدمات التي نضعها بين يديك',
        items: [
          { icon: 'card-text', title: 'الاستشارات وتجهيز متطلبات التأشيرة', desc: 'مع كايا، تبدأ رحلتك بخطوة واثقة. نوفّر لك استشارات دقيقة ونؤمّن جميع متطلبات التأشيرات لمختلف الوجهات العالمية.' },
          { icon: 'mortarboard', title: 'القبولات الجامعية', desc: 'نساعدك في الحصول على قبولات جامعية معتمدة في أرقى الجامعات العالمية، بخطوات سهلة ودعم مستمر.' },
          { icon: 'book', title: 'تأشيرات التبادل الثقافي', desc: 'احصل على تأشيرات التبادل الثقافي الأمريكية لتجربة الدراسة أو العمل أو التطوع بثقة.' },
          { icon: 'globe', title: 'خدمات الترجمة المعتمدة', desc: 'نقدّم لك ترجمة معتمدة لدى السفارات والجهات الرسمية داخل الأردن وخارجه، بدقة تفتح أمامك الأبواب دون تأخير.' },
          { icon: 'airplane', title: 'حجوزات الطيران', desc: 'نوفر لك تذاكر الطيران إلى مختلف دول العالم مع متابعة دقيقة لأفضل العروض والمواعيد.' },
          { icon: 'building', title: 'خدمات حجوزات الفنادق', desc: 'نوفر لك حجوزات فندقية حول العالم بأسعار تنافسية وخيارات تناسب جميع الأذواق.' },
          { icon: 'briefcase', title: 'خطة سفر متكاملة', desc: 'نصمّم لك خطة سفر شخصية تجمع بين رغباتك واحتياجاتك، بمرونة واحترافية.' },
          { icon: 'heart-pulse', title: 'تأمين سفر صحي', desc: 'نوفر باقات تأمين صحي شاملة لتغطية رحلاتك السياحية أو الدراسية أو العملية.' },
        ],
      },
      destinations: {
        title: 'وجهاتنا الشائعة',
        items: [
          { name: 'الولايات المتحدة', discount: 'خصم 25%', desc: 'اكتشف تنوّع الحياة بين ناطحات السحاب في نيويورك وسحر المدن الأمريكية الأخرى. رحلة مليئة بالفرص، الثقافة والتجارب التي لا تُنسى.', flag: '🇺🇸' },
          { name: 'المملكة المتحدة', discount: 'خصم 30%', desc: 'حيث يلتقي التاريخ العريق بروح الحداثة. من معالم لندن الشهيرة مثل ساعة بيغ بن وقصر باكنغهام، إلى سحر إدنبرة الاسكتلندية.', flag: '🇬🇧' },
          { name: 'كندا', discount: 'خصم 20%', desc: 'حيث يلتقي الحلم بالواقع. استمتع بسحر الطبيعة الخلابة، المدن العصرية متعددة الثقافات، والضيافة الكندية الأصيلة.', flag: '🇨🇦' },
          { name: 'أوروبا', discount: 'خصم 25%', desc: 'من شواطئ إسبانيا الدافئة إلى جبال سويسرا المهيبة، ومن تاريخ إيطاليا العريق إلى حداثة ألمانيا وفرنسا، تمنحك تأشيرة شنغن فرصة لاكتشاف أكثر من 25 دولة أوروبية.', flag: '🇪🇺' },
        ],
      },
      programs: {
        title: 'برامجنا',
        subtitle: 'برامج تأشيرات مصممة لتناسب احتياجاتك وتحقق طموحاتك.',
        items: [
          { country: 'كندا', title: 'تأشيرة كندا – فرص بلا حدود', features: ['متابعة دقيقة لملفك من البداية حتى استلام التأشيرة', 'دعم في تجهيز المستندات و خطاب الغرض من السفر'], price: 'JOD1490.00', rating: 5 },
          { country: 'أمريكا', title: 'تأشيرة الولايات المتحدة الأميركية – رحلتك إلى الحلم الأميركي', features: ['استشارات متخصصة لمقابلة السفارة', 'تعبئة النماذج الإلكترونية (DS-160) باحترافية'], price: 'JOD1490.00', rating: 5 },
          { country: 'بريطانيا', title: 'تأشيرة بريطانيا – قلب أوروبا النابض', features: ['تجهيز ملف متكامل مع حجوزات داعمة', 'متابعة سريعة لمواعيد البصمة والمقابلة'], price: 'JOD1490.00', rating: 5 },
          { country: 'ألمانيا', title: 'تأشيرة ألمانيا (شنغن) – بوابتك إلى أوروبا', features: ['تأشيرة متعددة الدخول لزيارة عدة دول أوروبية', 'دعم كامل في حجز المواعيد وتقديم الطلب'], price: 'JOD1490.00', rating: 5 },
        ],
      },
      testimonials: {
        title: 'آراء عملائنا',
        subtitle: 'بإمكانك تقييم خدماتنا عبر تقييمات جوجل أو من خلال فيسبوك ومشاركة تجربتك معنا.',
        items: [
          { name: 'أحمد، دبي', text: 'خدمتهم سريعة واحترافية… حصلت على تأشيرتي في وقت قياسي!' },
          { name: 'سارة، إسطنبول', text: 'أكثر ما أعجبني هو المتابعة المستمرة والشفافية.' },
        ],
      },
      cta: {
        title: 'رحلتك تبدأ بخطوة… اجعلها معنا.',
        button: 'ابدأ الآن',
      },
      contact: {
        title: 'اتصل بنا',
        subtitle: 'نحن هنا لمساعدتك في كل ما يتعلق بخدمات التأشيرات – من الاستشارة الأولى وحتى استلام التأشيرة.',
        form: {
          name: 'الاسم الكامل',
          namePlaceholder: 'أدخل اسمك كما هو في جواز السفر',
          email: 'البريد الإلكتروني',
          emailPlaceholder: 'للتواصل وإرسال التحديثات',
          phone: 'رقم الهاتف',
          phonePlaceholder: 'مع رمز الدولة لسهولة التواصل',
          visaType: 'نوع التأشيرة المطلوبة',
          message: 'رسالتك / استفسارك',
          messagePlaceholder: 'اكتب تفاصيل طلبك أو أسئلتك هنا',
          submit: 'إرسال الطلب',
          note: 'جميع استفساراتك سرية، وسيتم الرد عليك خلال 24 ساعة.',
        },
        info: {
          address: 'عمان, الأردن',
          phone: '+962779997096',
          email: 'info@kayavisa.org',
          hours: 'الأحد – الخميس | 9:00 صباحاً – 6:00 مساءً',
        },
      },
    },
    en: {
      hero: {
        title: 'Travel with Confidence... Let Us Handle Your Visa',
        subtitle: 'At Kaya Office, we believe your journey begins the moment you apply for your visa. We are here to transform complex procedures into an easy, fast, and guaranteed experience.',
        cta1: 'Start Your Application Now',
        cta2: 'Consult Our Expert for Free',
      },
      about: {
        title: 'Who We Are',
        subtitle: 'A team of specialists guiding your path to a successful visa application.',
        description: 'Welcome to Kaya, where expertise meets passion to simplify your immigration and travel journey. We believe that obtaining a visa should not be a complicated or anxious process. That\'s why we didn\'t stop at being just a visa service office; we built a team of certified consultants who act as your partners, guiding you through every step with clarity and precision.',
        tagline: 'We are the ones who make your road to the visa shorter and clearer.',
        vision: 'To be the first trusted partner for every ambition seeking to launch globally, by providing effective and straightforward visa solutions.',
      },
      why: {
        title: 'Why Choose Us?',
        items: [
          { icon: 'fas fa-globe', title: 'Global Expertise', desc: 'Years of success in securing visas for diverse destinations' },
          { icon: 'fas fa-clock', title: 'Speed and Flexibility', desc: 'Streamlined procedures that fit your schedule' },
          { icon: 'fas fa-user-shield', title: 'Personalized Support', desc: 'A dedicated team that follows up with you step-by-step until you receive your visa' },
          { icon: 'fas fa-lock', title: 'Reliability and Security', desc: 'Your data is in safe hands with high standards of confidentiality' },
        ],
      },
      steps: {
        title: 'Our Simple Steps',
        items: [
          { icon: 'fas fa-edit', text: 'Fill out your application online' },
          { icon: 'fas fa-file-alt', text: 'Let our experts review your documents' },
          { icon: 'fas fa-check-circle', text: 'Receive your visa with ease' },
        ],
      },
      services: {
        title: 'Services We Offer',
        items: [
          { icon: 'fas fa-passport', title: 'Visa Consultations and Requirement Preparation', desc: 'With Kaya, your journey starts with a confident step. We provide you with accurate consultations and secure all visa requirements for various global destinations.' },
          { icon: 'fas fa-language', title: 'Certified Translation Services', desc: 'Every document matters. That is why we offer certified translation services accepted by embassies and official bodies within and outside Jordan.' },
          { icon: 'fas fa-university', title: 'University Admissions', desc: 'Your academic ambition deserves the best opportunities. We assist you in securing accepted university admissions in the most prestigious global universities.' },
          { icon: 'fas fa-exchange-alt', title: 'U.S. Cultural Exchange Visas', desc: 'Open a window to the world. With Kaya, you get American cultural exchange visas to live new experiences.' },
          { icon: 'fas fa-hotel', title: 'Hotel Booking Services', desc: 'From a quick business trip to a family vacation or a luxury honeymoon, we provide you with hotel bookings worldwide at competitive prices.' },
          { icon: 'fas fa-map-marked-alt', title: 'Comprehensive Travel Plan', desc: 'Your trip is not just a ticket; it\'s a complete experience. We design a personalized travel plan that combines your desires and needs.' },
          { icon: 'fas fa-shield-alt', title: 'Health Travel Insurance', desc: 'Your safety is our priority. We offer comprehensive health insurance packages covering your tourist, study, or business trips.' },
          { icon: 'fas fa-plane-departure', title: 'Flight Bookings', desc: 'From the first take-off to the final landing, we provide you with flight tickets to various countries around the world.' },
        ],
      },
      destinations: {
        title: 'Our Popular Destinations',
        items: [
          { name: 'The United States', discount: '25% Discount', desc: 'Discover the diversity of life between the skyscrapers of New York and the charm of other American cities. A journey full of opportunities, culture, and unforgettable experiences.', flag: '🇺🇸' },
          { name: 'The United Kingdom', discount: '30% Discount', desc: 'Where ancient history meets the spirit of modernity. From famous London landmarks like Big Ben and Buckingham Palace, to the charm of Scottish Edinburgh.', flag: '🇬🇧' },
          { name: 'Canada', discount: '20% Discount', desc: 'Where the dream meets reality. Enjoy the magic of breathtaking nature, modern multicultural cities, and authentic Canadian hospitality.', flag: '🇨🇦' },
          { name: 'Europe', discount: '25% Discount', desc: 'From the warm beaches of Spain to the majestic mountains of Switzerland, and from the ancient history of Italy to the modernity of Germany and France, the Schengen visa gives you the opportunity to discover more than 25 European countries.', flag: '🇪🇺' },
        ],
      },
      programs: {
        title: 'Our Programs',
        subtitle: 'Visa programs designed to suit your needs and fulfill your ambitions.',
        items: [
          { country: 'Canada', title: 'Canada Visa – Unlimited Opportunities', features: ['Diligent follow-up of your file from start until visa receipt', 'Support in document preparation and purpose of travel letter'], price: 'JOD1490.00', rating: 5 },
          { country: 'USA', title: 'USA Visa – Your Journey to the American Dream', features: ['Specialized consultations for the embassy interview', 'Professional completion of electronic forms (DS-160)'], price: 'JOD1490.00', rating: 5 },
          { country: 'UK', title: 'UK Visa – The Pounding Heart of Europe', features: ['Preparation of a complete file with supporting reservations', 'Quick follow-up for biometric and interview appointments'], price: 'JOD1490.00', rating: 5 },
          { country: 'Germany', title: 'Germany Visa (Schengen) – Your Gateway to Europe', features: ['Multiple-entry visa to visit several European countries', 'Full support in booking appointments and submitting the application'], price: 'JOD1490.00', rating: 5 },
        ],
      },
      testimonials: {
        title: 'Our Clients\' Opinions',
        subtitle: 'You can evaluate our services via Google reviews or through Facebook and share your experience with us.',
        items: [
          { name: 'Ahmed, Dubai', text: 'Their service is fast and professional… I got my visa in record time!' },
          { name: 'Sarah, Istanbul', text: 'What I liked most was the continuous follow-up and transparency.' },
        ],
      },
      cta: {
        title: 'Your journey starts with one step… Make it with us.',
        button: 'Start Now',
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We are here to help you with everything related to visa services – from the first consultation until you receive your visa.',
        form: {
          name: 'Full Name',
          namePlaceholder: 'Enter your name as it appears in your passport',
          email: 'Email',
          emailPlaceholder: 'For communication and sending updates',
          phone: 'Phone Number',
          phonePlaceholder: 'Including country code for easy communication',
          visaType: 'Required Visa Type',
          message: 'Your Message / Inquiry',
          messagePlaceholder: 'Write the details of your request or your questions here',
          submit: 'Send Request',
          note: 'All your inquiries are confidential, and we will respond to you within 24 hours.',
        },
        info: {
          address: 'Amman, Jordan',
          phone: '+962779997096',
          email: 'info@kayavisa.org',
          hours: 'Sunday – Thursday | 9:00 AM – 6:00 PM',
        },
      },
    },
  };

  const t = content[locale as keyof typeof content];

  return (
    <div dir={dir} style={{ backgroundColor: '#fff' }}>
      {/* Hero Section */}
      <section className="hero-section">
        {/* Background Image */}
        <div className="hero-background">
          <img src="/bg-hero.jpg" alt="Hero Background" />
          <div className="hero-overlay"></div>
        </div>

        {/* Content */}
        <div className="hero-content">
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <div className="hero-buttons">
            <a href="/contact" className="btn-primary-gold">{t.hero.cta1}</a>
            <a href="/contact" className="btn-outline-white">{t.hero.cta2}</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <p className="section-label">{locale === 'ar' ? 'من نحن؟' : 'Who We Are?'}</p>
            <div className="section-underline"></div>
          </div>
          
          <div className="about-container" style={{ gridTemplateColumns: locale === 'ar' ? '1fr 1fr' : '1fr 1fr' }}>
            <div className="about-content" style={{ order: locale === 'ar' ? 2 : 1 }}>
              <h2 className="about-title">
                {locale === 'ar' ? (
                  <>فريق من <span className="text-accent-gold">المتخصصين</span> يقود مسارك نحو التأشيرة.</>
                ) : (
                  <>A team of <span className="text-accent-gold">specialists</span> guiding your visa journey.</>
                )}
              </h2>
              <p className="about-text">{t.about.description}</p>
              <p className="about-text" style={{ fontWeight: '600', color: '#1c3269' }}>{t.about.tagline}</p>
              <div className="vision-box">
                <h3>{locale === 'ar' ? 'رؤيتنا' : 'Our Vision'}</h3>
                <p>{t.about.vision}</p>
              </div>
            </div>
            <div className="about-image" style={{ order: locale === 'ar' ? 1 : 2 }}>
              <div className="about-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop" 
                  alt={locale === 'ar' ? 'عن كايا' : 'About Kaya'}
                  loading="lazy"
                />
                <div className="about-image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="why-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h6 className="why-section-title">{locale === 'ar' ? 'لماذا نحن؟' : 'Why Choose Us?'}</h6>
            <div className="why-section-underline"></div>
            <h2 className="why-section-heading">{t.why.title}</h2>
          </div>

          <div className="why-cards-grid">
            {t.why.items.map((item, idx) => (
              <div key={idx} className="why-card">
                <div className="why-icon-wrapper">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Simple Steps */}
      <section className="steps-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h6 className="section-label">{locale === 'ar' ? 'العملية' : 'Process'}</h6>
            <div className="section-underline"></div>
            <h2 className="why-section-heading">{t.steps.title}</h2>
          </div>
          <div className="steps-progress-container">
            <div className="progress-line"></div>
            <div className="progress-line-active"></div>
            <div className="steps-grid">
              {t.steps.items.map((step, idx) => (
                <div key={idx} className="step-card">
                  <div className="step-number">{idx + 1}</div>
                  <div className="step-icon-wrapper">
                    <i className={step.icon}></i>
                  </div>
                  <p className="step-text">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h6 className="section-label">{locale === 'ar' ? 'خدماتنا' : 'Our Services'}</h6>
            <div className="section-underline"></div>
            <h2 className="why-section-heading">{t.services.title}</h2>
          </div>

          <div className="services-grid">
            {t.services.items.map((service, idx) => (
              <div key={idx} className="service-card-item">
                <div className={`service-icon-circle ${idx === 2 ? 'gold' : 'dark-blue'}`}>
                  <i className={`bi bi-${service.icon}`}></i>
                </div>
                <h5>{service.title}</h5>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="destinations-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="why-section-heading">
              {locale === 'ar' ? 'وجهاتنا الشائعة' : 'Popular Destinations'}
            </h2>
            <div className="section-underline"></div>
          </div>

          <div style={{ display: 'grid', gap: '20px' }}>
            {/* First destination - Full width */}
            <div className="destination-card">
              <img src="/destination-4.jpg" alt={locale === 'ar' ? 'الولايات المتحدة' : 'United States'} loading="lazy" />
              <div className="destination-badge">
                {locale === 'ar' ? 'الولايات المتحدة – خصم 25%' : 'United States – 25% OFF'}
              </div>
              <div className="destination-overlay">
                <p>
                  {locale === 'ar' 
                    ? 'اكتشف تنوّع الحياة بين ناطحات السحاب في نيويورك وسحر المدن الأمريكية الأخرى. رحلة مليئة بالفرص، الثقافة والتجارب التي لا تُنسى.'
                    : 'Discover the diversity of life between New York skyscrapers and the charm of other American cities. A journey full of opportunities, culture, and unforgettable experiences.'}
                </p>
              </div>
            </div>

            {/* Three destinations in a row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {/* UK */}
              <div className="destination-card">
                <img src="/destination-2.jpg" alt={locale === 'ar' ? 'المملكة المتحدة' : 'United Kingdom'} loading="lazy" />
                <div className="destination-badge">
                  {locale === 'ar' ? 'المملكة المتحدة – خصم 30%' : 'United Kingdom – 30% OFF'}
                </div>
                <div className="destination-overlay">
                  <p>{locale === 'ar' ? 'حيث يلتقي التاريخ العريق بروح الحداثة.' : 'Where rich history meets modern spirit.'}</p>
                </div>
              </div>

              {/* Canada */}
              <div className="destination-card">
                <img src="/destination-3.jpg" alt={locale === 'ar' ? 'كندا' : 'Canada'} loading="lazy" />
                <div className="destination-badge">
                  {locale === 'ar' ? 'كندا – خصم 20%' : 'Canada – 20% OFF'}
                </div>
                <div className="destination-overlay">
                  <p>{locale === 'ar' ? 'استمتع بسحر الطبيعة والمدن الحديثة.' : 'Stunning nature and multicultural cities.'}</p>
                </div>
              </div>

              {/* Europe */}
              <div className="destination-card">
                <img src="/destination-1.jpg" alt={locale === 'ar' ? 'أوروبا' : 'Europe'} loading="lazy" />
                <div className="destination-badge">
                  {locale === 'ar' ? 'أوروبا – خصم 25%' : 'Europe – 25% OFF'}
                </div>
                <div className="destination-overlay">
                  <p>{locale === 'ar' ? 'اكتشف أكثر من 25 دولة أوروبية بتأشيرة شنغن واحدة.' : 'Explore more than 25 European countries with one visa.'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '15px' }}>{t.programs.title}</h2>
            <p style={{ fontSize: '1.2rem', color: '#48bb78' }}>{t.programs.subtitle}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {t.programs.items.map((program, idx) => (
              <div key={idx} style={{ padding: '30px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', border: '2px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea', marginBottom: '15px' }}>{program.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
                  {program.features.map((feature, fidx) => (
                    <li key={fidx} style={{ display: 'flex', gap: '10px', marginBottom: '10px', fontSize: '1rem', color: '#48bb78' }}>
                      <i className="fas fa-check-circle" style={{ color: '#48bb78', marginTop: '4px' }}></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
                  <div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1a202c' }}>{program.price}</div>
                    <div style={{ color: '#667eea' }}>
                      {[...Array(program.rating)].map((_, i) => <i key={i} className="fas fa-star" style={{ fontSize: '0.9rem' }}></i>)}
                    </div>
                  </div>
                  <a href="/contact" style={{ padding: '12px 25px', backgroundColor: '#667eea', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', transition: 'all 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5568d3'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#667eea'}>
                    {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Team Links */}
      <section style={{ padding: '80px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <a href="/partners" style={{ padding: '50px 40px', background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)', borderRadius: '16px', color: 'white', textDecoration: 'none', textAlign: 'center', transition: 'all 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <i className="fas fa-handshake" style={{ fontSize: '3rem', marginBottom: '20px', display: 'block' }}></i>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '10px' }}>{locale === 'ar' ? 'شركاؤنا' : 'Our Partners'}</h3>
              <p style={{ opacity: 0.95 }}>{locale === 'ar' ? 'تعرف على شركائنا حول العالم' : 'Meet our partners around the world'}</p>
            </a>
            <a href="/team" style={{ padding: '50px 40px', background: 'linear-gradient(135deg, #1a202c 0%, #667eea 100%)', borderRadius: '16px', color: 'white', textDecoration: 'none', textAlign: 'center', transition: 'all 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <i className="fas fa-users" style={{ fontSize: '3rem', marginBottom: '20px', display: 'block' }}></i>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '10px' }}>{locale === 'ar' ? 'فريق كايا' : 'Kaya Team'}</h3>
              <p style={{ opacity: 0.95 }}>{locale === 'ar' ? 'تعرف على فريقنا المحترف' : 'Meet our professional team'}</p>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)', color: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '15px' }}>{t.testimonials.title}</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '50px', opacity: 0.95 }}>{t.testimonials.subtitle}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {t.testimonials.items.map((testimonial, idx) => (
              <div key={idx} style={{ padding: '30px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
                <i className="fas fa-quote-left" style={{ fontSize: '2rem', marginBottom: '15px', opacity: 0.7 }}></i>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '20px' }}>{testimonial.text}</p>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 20px', backgroundColor: '#1a202c', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '30px' }}>{t.cta.title}</h2>
          <a href="/contact" style={{ padding: '18px 50px', backgroundColor: '#667eea', color: 'white', borderRadius: '50px', fontSize: '1.2rem', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(102,126,234,0.4)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '15px' }}>{t.contact.title}</h2>
            <p style={{ fontSize: '1.2rem', color: '#48bb78' }}>{t.contact.subtitle}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '30px' }}>{locale === 'ar' ? 'معلومات التواصل' : 'Contact Information'}</h3>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <i className="fas fa-map-marker-alt" style={{ fontSize: '1.5rem', color: '#667eea' }}></i>
                  <div>
                    <div style={{ fontWeight: '600', color: '#1a202c' }}>📍 {locale === 'ar' ? 'العنوان' : 'Address'}</div>
                    <div style={{ color: '#48bb78' }}>{t.contact.info.address}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <i className="fas fa-phone" style={{ fontSize: '1.5rem', color: '#667eea' }}></i>
                  <div>
                    <div style={{ fontWeight: '600', color: '#1a202c' }}>☎️ {locale === 'ar' ? 'الهاتف' : 'Phone'}</div>
                    <div style={{ color: '#48bb78' }}>{t.contact.info.phone}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <i className="fas fa-envelope" style={{ fontSize: '1.5rem', color: '#667eea' }}></i>
                  <div>
                    <div style={{ fontWeight: '600', color: '#1a202c' }}>✉️ {locale === 'ar' ? 'البريد' : 'Email'}</div>
                    <div style={{ color: '#48bb78' }}>{t.contact.info.email}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <i className="fas fa-clock" style={{ fontSize: '1.5rem', color: '#667eea' }}></i>
                  <div>
                    <div style={{ fontWeight: '600', color: '#1a202c' }}>🕒 {locale === 'ar' ? 'ساعات العمل' : 'Working Hours'}</div>
                    <div style={{ color: '#48bb78' }}>{t.contact.info.hours}</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <form>
                <input type="text" placeholder={t.contact.form.namePlaceholder} style={{ width: '100%', padding: '14px', marginBottom: '15px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }} />
                <input type="email" placeholder={t.contact.form.emailPlaceholder} style={{ width: '100%', padding: '14px', marginBottom: '15px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }} />
                <input type="tel" placeholder={t.contact.form.phonePlaceholder} style={{ width: '100%', padding: '14px', marginBottom: '15px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }} />
                <select style={{ width: '100%', padding: '14px', marginBottom: '15px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}>
                  <option>{t.contact.form.visaType}</option>
                  <option>{locale === 'ar' ? 'كندا' : 'Canada'}</option>
                  <option>{locale === 'ar' ? 'أمريكا' : 'USA'}</option>
                  <option>{locale === 'ar' ? 'بريطانيا' : 'UK'}</option>
                  <option>{locale === 'ar' ? 'ألمانيا/شنغن' : 'Germany/Schengen'}</option>
                </select>
                <textarea placeholder={t.contact.form.messagePlaceholder} rows={5} style={{ width: '100%', padding: '14px', marginBottom: '15px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit' }}></textarea>
                <button type="submit" style={{ width: '100%', padding: '16px', backgroundColor: '#667eea', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5568d3'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#667eea'}>
                  {t.contact.form.submit}
                </button>
                <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '15px', textAlign: 'center', fontStyle: 'italic' }}>{t.contact.form.note}</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
