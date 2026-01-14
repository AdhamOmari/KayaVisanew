'use client'

import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import '@/styles/second-citizenship.css'

export default function SecondCitizenshipPage() {
  const { t, locale } = useI18n()

  const countries = [
    {
      slug: 'antigua-barbuda',
      nameEn: 'Antigua and Barbuda',
      nameAr: 'أنتيغوا وبربودا',
      destinations: 151,
      flag: '🇦🇬'
    },
    {
      slug: 'dominica',
      nameEn: 'Dominica',
      nameAr: 'دومينيكا',
      destinations: 143,
      flag: '🇩🇲'
    },
    {
      slug: 'st-kitts-nevis',
      nameEn: 'St. Kitts & Nevis',
      nameAr: 'سانت كيتس ونيفيس',
      destinations: 154,
      flag: '🇰🇳'
    },
    {
      slug: 'st-lucia',
      nameEn: 'Saint Lucia',
      nameAr: 'سانت لوسيا',
      destinations: 142,
      flag: '🇱🇨'
    },
    {
      slug: 'grenada',
      nameEn: 'Grenada',
      nameAr: 'غرينادا',
      destinations: 147,
      flag: '🇬🇩'
    }
  ]

  return (
    <div className="second-citizenship-page">
      <div className="citizenship-container">
        {/* Hero Section */}
        <div className="citizenship-hero">
          <h1 className="citizenship-hero-title">
            {locale === 'ar' ? 'جواز سفر ثانٍ' : 'Second Passport'}
          </h1>
          <p className="citizenship-hero-subtitle">
            {locale === 'ar' 
              ? 'خطوتك نحو الجنسية الثانية وحياة أكثر حرية' 
              : 'Your Step Towards Second Citizenship and a Freer Life'}
          </p>
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
          <div className="citizenship-benefits-grid">
            <div className="citizenship-benefit-item">
              <span className="citizenship-benefit-icon">✓</span>
              <p className="citizenship-benefit-text">{locale === 'ar' ? 'حرية تنقل إلى أكثر من 140 دولة حول العالم' : 'Freedom of Movement to over 140 countries worldwide'}</p>
            </div>
            <div className="citizenship-benefit-item">
              <span className="citizenship-benefit-icon">✓</span>
              <p className="citizenship-benefit-text">{locale === 'ar' ? 'أمان مالي وقانوني لعائلتك' : 'Financial and Legal Security for your family'}</p>
            </div>
            <div className="citizenship-benefit-item">
              <span className="citizenship-benefit-icon">✓</span>
              <p className="citizenship-benefit-text">{locale === 'ar' ? 'فرص تعليم وعمل في بيئات مستقرة' : 'Education and Career Opportunities in stable environments'}</p>
            </div>
            <div className="citizenship-benefit-item">
              <span className="citizenship-benefit-icon">✓</span>
              <p className="citizenship-benefit-text">{locale === 'ar' ? 'مرونة ضريبية وحماية للأصول' : 'Tax Flexibility and Asset Protection'}</p>
            </div>
          </div>
        </div>

        {/* Countries Section */}
        <div className="citizenship-countries-section">
          <h2 className="citizenship-countries-title">
            {locale === 'ar' ? 'اختر وجهتك' : 'Choose Your Destination'}
          </h2>
          <div className="citizenship-countries-grid">
            {countries.map((country) => (
              <Link key={country.slug} href={`/second-citizenship/${country.slug}`} className="citizenship-country-card">
                <span className="citizenship-country-flag">
                  {country.flag}
                </span>
                <h3 className="citizenship-country-name">
                  {locale === 'ar' ? country.nameAr : country.nameEn}
                </h3>
                <div className="citizenship-country-badge">
                  {country.destinations}+ {locale === 'ar' ? 'وجهة' : 'Destinations'}
                </div>
                <button className="citizenship-country-button">
                  {locale === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
                </button>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="citizenship-cta-section">
          <div className="citizenship-cta-content">
            <h2 className="citizenship-cta-title">{locale === 'ar' ? 'ابدأ رحلتك اليوم' : 'Start Your Journey Today'}</h2>
            <p className="citizenship-cta-text">
              {locale === 'ar'
                ? 'مع كايا، جواز سفرك الثاني ليس مجرد وثيقة، بل مفتاح لعالم جديد من الفرص.'
                : "With Kaya, your second passport is not just a document; it's a key to a new world of opportunities."}
            </p>
            <a href="/contact" className="citizenship-cta-button">
              {locale === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
