'use client'

import { useI18n } from '@/lib/i18n'
import Link from 'next/link'

import '@/styles/second-citizenship-minimal.css'
import '@/styles/second-citizenship-antigua-barbuda.module.css'
import '@/styles/second-citizenship-dominica.module.css'
import '@/styles/second-citizenship-grenada.module.css'
import '@/styles/second-citizenship-st-kitts-nevis.module.css'
import '@/styles/second-citizenship-st-lucia.module.css'

export default function SecondCitizenshipPage() {
  const { t, locale } = useI18n()

  const countries = [
    {
      slug: 'antigua-barbuda',
      nameEn: 'Antigua and Barbuda',
      nameAr: 'أنتيغوا وبربودا',
      descriptionAr: 'افتح أبواب العالم بجواز واحد… أكثر من 151 وجهة بانتظارك!',
      descriptionEn: 'Open the doors to the world with one passport... Over 151 destinations await you!',
      destinations: 151,
      image: 'https://i.ibb.co/mrdjNdGv/Antigua-and-Barbuda-1.jpg'
    },
    {
      slug: 'dominica',
      nameEn: 'Dominica',
      nameAr: 'دومينيكا',
      descriptionAr: 'جنسيتك الجديدة هي تذكرتك إلى 141 وجهة بلا حدود.',
      descriptionEn: 'Your new citizenship is your ticket to 141 destinations without borders.',
      destinations: 141,
      image: 'https://i.ibb.co/Ps5stNX6/Dominica.jpg'
    },
    {
      slug: 'st-kitts-nevis',
      nameEn: 'St. Kitts & Nevis',
      nameAr: 'سانت كيتس ونيفيس',
      descriptionAr: 'من لحظة حصولك على الجنسية… ينفتح أمامك عالم يضم 154 وجهة وأكثر',
      descriptionEn: 'From the moment you obtain citizenship... a world of 154 destinations and more opens before you',
      destinations: 154,
      image: 'https://i.ibb.co/7tVj1D8W/Saint-Kitts-and-Nevis.jpg'
    },
    {
      slug: 'st-lucia',
      nameEn: 'Saint Lucia',
      nameAr: 'سانت لوسيا',
      descriptionAr: 'حرّك حدودك، وامضِ نحو 142 وجهة حول العالم بجنسية واحدة.',
      descriptionEn: 'Move your boundaries, and go towards 142 destinations around the world with one citizenship.',
      destinations: 142,
      image: 'https://i.ibb.co/bgMcT5Tx/Saint-Lucia.jpg'
    },
    {
      slug: 'grenada',
      nameEn: 'Grenada',
      nameAr: 'غرينادا',
      descriptionAr: 'جوازك الجديد… مفتاحك لعالم بلا قيود، مع أكثر من 145 وجهة.',
      descriptionEn: 'Your new passport... your key to a world without restrictions, with more than 145 destinations.',
      destinations: 145,
      image: 'https://i.ibb.co/6RHCD1wp/Grenada.jpg'
    }
  ]

  return (
    <div className="second-citizenship-page">
      <div className="citizenship-container">
        {/* Hero Section */}
        <div className="citizenship-hero">
          <img 
            src="https://i.ibb.co/wZbkQfhL/second-citizenship.jpg" 
            alt="Second Citizenship Background"
            className="citizenship-hero-bg"
            loading="lazy"
          />
          <div className="citizenship-hero-overlay"></div>
          <div className="citizenship-hero-content">
            <h1 className="citizenship-hero-title">
              {locale === 'ar' ? 'جواز سفر ثانٍ' : 'Second Passport'}
            </h1>
            <p className="citizenship-hero-subtitle">
              {locale === 'ar' 
                ? 'خطوتك نحو الجنسية الثانية وحياة أكثر حرية' 
                : 'Your Step Towards Second Citizenship and a Freer Life'}
            </p>
          </div>
        </div>

        {/* Intro Content Card */}
        <div className="citizenship-intro-card">
          <h2 className="citizenship-section-title">
            {locale === 'ar' ? 'جواز سفر ثانٍ… حريتك إلى عالم بلا حدود' : 'Second Passport... Your Freedom to a Borderless World'}
          </h2>
          <div className="citizenship-content-text" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <p>
              {locale === 'ar'
                ? 'في عالم اليوم، أصبح امتلاك جواز سفر ثانٍ أكثر من مجرد رفاهية؛ إنه استثمار استراتيجي في حرية التنقل، الأمان والمستقبل. عبر برامج الجنسية عن طريق الاستثمار في جزر الكاريبي، يمكنك أنت وعائلتك الحصول على جنسية ثانية تمنحكم فرصاً جديدة للسفر، التعليم والأعمال، بعيداً عن القيود التقليدية للتأشيرات.'
                : "In today's world, owning a second passport has become more than just a luxury; it is a strategic investment in freedom of movement, security, and the future. Through Citizenship by Investment (CBI) programs in the Caribbean islands, you and your family can obtain a second citizenship that grants you new opportunities for travel, education, and business, far from traditional visa restrictions."}
            </p>
          </div>

          <h3 className="citizenship-benefits-title">
            {locale === 'ar' ? 'لماذا جواز سفر ثانٍ؟' : 'Why a Second Passport?'}
          </h3>
          <div className="citizenship-content-text" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <p>
              {locale === 'ar'
                ? 'امتلاك جواز سفر ثانٍ يمنحك:'
                : 'Owning a second passport grants you:'}
            </p>
          </div>
          <div className="citizenship-benefits-grid" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <div className="citizenship-benefit-item">
              <span className="citizenship-benefit-icon">✈️</span>
              <p className="citizenship-benefit-text">{locale === 'ar' ? 'حرية تنقل إلى أكثر من 140 دولة حول العالم' : 'Freedom of Movement to over 140 countries worldwide'}</p>
            </div>
            <div className="citizenship-benefit-item">
              <span className="citizenship-benefit-icon">👨‍👩‍👧‍👦</span>
              <p className="citizenship-benefit-text">{locale === 'ar' ? 'أمان مالي وقانوني لعائلتك' : 'Financial and Legal Security for your family'}</p>
            </div>
            <div className="citizenship-benefit-item">
              <span className="citizenship-benefit-icon">📚</span>
              <p className="citizenship-benefit-text">{locale === 'ar' ? 'فرص تعليم وعمل في بيئات مستقرة' : 'Education and Career Opportunities in stable environments'}</p>
            </div>
            <div className="citizenship-benefit-item">
              <span className="citizenship-benefit-icon">💰</span>
              <p className="citizenship-benefit-text">{locale === 'ar' ? 'مرونة ضريبية وحماية للأصول' : 'Tax Flexibility and Asset Protection'}</p>
            </div>
          </div>

          <div className="citizenship-content-text" dir={locale === 'ar' ? 'rtl' : 'ltr'} style={{ marginTop: '40px' }}>
            <p>
              {locale === 'ar'
                ? 'في كايا، نساعدك بخبرة وشفافية على اختيار البرنامج الأنسب لك من بين أبرز خمس دول كاريبية تمنح جنسية ثانية:'
                : 'At Kaya, we help you with expertise and transparency to choose the most suitable program for you from among the top five Caribbean countries that grant second citizenship:'}
            </p>
          </div>
        </div>

        {/* Countries Section */}
        <div className="citizenship-countries-section">
          <div className="citizenship-countries-grid">
            {countries.map((country) => (
              <Link
                key={country.slug}
                href={`/second-citizenship/${country.slug}`}
                className={`citizenship-country-card ${country.slug}`}
              >
                <div className="citizenship-country-image">
                  <img
                    src={country.image}
                    alt={locale === 'ar' ? country.nameAr : country.nameEn}
                    className="country-img"
                    loading="lazy"
                  />
                </div>
                <h3 className="citizenship-country-name">
                  {locale === 'ar' ? country.nameAr : country.nameEn}
                </h3>
                <p className="citizenship-country-description" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                  {locale === 'ar' ? country.descriptionAr : country.descriptionEn}
                </p>
                <div className="citizenship-country-badge">
                  {country.destinations}+ {locale === 'ar' ? 'وجهة' : 'Destinations'}
                </div>
                <button className="citizenship-country-button">
                  {locale === 'ar' ? 'لمعرفة كافة الشروط والتفاصيل اضغط هنا' : 'Learn More'}
                </button>
              </Link>
            ))}
          </div>
        </div>

        {/* Important Notes Section */}
        <div className="citizenship-intro-card" style={{ marginTop: '60px' }}>
          <h3 className="citizenship-benefits-title">
            {locale === 'ar' ? 'ملاحظات مهمة' : 'Important Notes'}
          </h3>
          <div className="citizenship-benefits-grid" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <div className="citizenship-benefit-item">
              <span className="citizenship-benefit-icon">ℹ️</span>
              <p className="citizenship-benefit-text">
                {locale === 'ar'
                  ? 'القوائم التفصيلية (أسماء الدول لكل فئة) يتم تحديثها باستمرار من قبل الحكومات.'
                  : 'Detailed lists (country names for each category) are constantly updated by governments.'}
              </p>
            </div>
            <div className="citizenship-benefit-item">
              <span className="citizenship-benefit-icon">📋</span>
              <p className="citizenship-benefit-text">
                {locale === 'ar'
                  ? 'ننصح دائماً بالرجوع إلى موقعنا أو المصادر الرسمية للحصول على أحدث نسخة.'
                  : 'We always recommend referring to our website or official sources to get the latest version.'}
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Kaya Section */}
        <div className="citizenship-intro-card" style={{ marginTop: '40px' }}>
          <h2 className="citizenship-section-title">
            {locale === 'ar' ? 'لماذا تختار كايا للحصول على جنسية ثانية؟' : 'Why Choose Kaya for Your Second Citizenship?'}
          </h2>
          <div className="citizenship-benefits-grid" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <div className="citizenship-benefit-item">
              <span className="citizenship-benefit-icon">�</span>
              <div>
                <h4 style={{ color: 'var(--primary-blue)', fontWeight: 'bold', marginBottom: '8px' }}>
                  {locale === 'ar' ? 'خبرة محلية وعالمية' : 'Local and Global Expertise'}
                </h4>
                <p className="citizenship-benefit-text">
                  {locale === 'ar' ? 'نعرف متطلبات السوق ونترجمها إلى حلول عملية' : 'We understand market requirements and translate them into practical solutions'}
                </p>
              </div>
            </div>
            <div className="citizenship-benefit-item">
              <span className="citizenship-benefit-icon">🤝</span>
              <div>
                <h4 style={{ color: 'var(--primary-blue)', fontWeight: 'bold', marginBottom: '8px' }}>
                  {locale === 'ar' ? 'شفافية كاملة' : 'Complete Transparency'}
                </h4>
                <p className="citizenship-benefit-text">
                  {locale === 'ar' ? 'نرافقك خطوة بخطوة حتى استلام جوازك الثاني' : 'We accompany you step by step until you receive your second passport'}
                </p>
              </div>
            </div>
            <div className="citizenship-benefit-item">
              <span className="citizenship-benefit-icon">🎯</span>
              <div>
                <h4 style={{ color: 'var(--primary-blue)', fontWeight: 'bold', marginBottom: '8px' }}>
                  {locale === 'ar' ? 'حلول مخصصة' : 'Customized Solutions'}
                </h4>
                <p className="citizenship-benefit-text">
                  {locale === 'ar' ? 'سواء كنت رجل أعمال، عائلة تبحث عن مستقبل أفضل، أو فرد يسعى لحرية السفر، نصمم لك البرنامج الأمثل' : 'Whether you are a businessman, a family looking for a better future, or an individual seeking travel freedom, we design the optimal program for you'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="citizenship-cta-section">
          <div className="citizenship-cta-content">
            <h2 className="citizenship-cta-title">{locale === 'ar' ? 'ابدأ رحلتك اليوم' : 'Start Your Journey Today'}</h2>
            <p className="citizenship-cta-text">
              {locale === 'ar'
                ? 'مع كايا، جواز سفرك الثاني ليس مجرد وثيقة، بل مفتاح لعالم جديد من الفرص. اضمن لنفسك ولعائلتك حرية التنقل، أمان المستقبل ومرونة الاستثمار.'
                : "With Kaya, your second passport is not just a document; it's a key to a new world of opportunities. Guarantee yourself and your family freedom of movement, future security and investment flexibility."}
            </p>
            <a href="/contact" className="citizenship-cta-button">
              {locale === 'ar' ? 'تواصل معنا الآن لتحصل على استشارتك المجانية' : 'Contact Us Now for Your Free Consultation'}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
