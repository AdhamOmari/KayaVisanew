'use client'
import "@/styles/travel-visas.css"
// "bootstrap/dist/css/bootstrap.min.css" removed (in layout)



import { useI18n } from '@/lib/i18n'
import Link from 'next/link'

export default function SchengenVisasPage() {
  const { locale } = useI18n()
  const isRTL = locale === 'ar'

  const countries = [
    { nameEn: 'Germany', nameAr: 'ألمانيا', slug: 'germany' },
    { nameEn: 'France', nameAr: 'فرنسا', slug: 'france' },
    { nameEn: 'Italy', nameAr: 'إيطاليا', slug: 'italy' },
    { nameEn: 'Spain', nameAr: 'إسبانيا', slug: 'spain' },
    { nameEn: 'Portugal', nameAr: 'البرتغال', slug: 'portugal' },
    { nameEn: 'Netherlands', nameAr: 'هولندا', slug: 'netherlands' },
    { nameEn: 'Austria', nameAr: 'النمسا', slug: 'austria' },
    { nameEn: 'Greece', nameAr: 'اليونان', slug: 'greece' },
    { nameEn: 'Switzerland', nameAr: 'سويسرا', slug: 'switzerland' },
    { nameEn: 'Hungary', nameAr: 'المجر', slug: 'hungary' },
    { nameEn: 'Sweden', nameAr: 'السويد', slug: 'sweden' },
    { nameEn: 'Norway', nameAr: 'النرويج', slug: 'norway' },
    { nameEn: 'Iceland', nameAr: 'آيسلندا', slug: 'iceland' },
    { nameEn: 'Finland', nameAr: 'فنلندا', slug: 'finland' },
    { nameEn: 'Denmark', nameAr: 'الدنمارك', slug: 'denmark' },
    { nameEn: 'Luxembourg', nameAr: 'لوكسمبورغ', slug: 'luxembourg' },
    { nameEn: 'Belgium', nameAr: 'بلجيكا', slug: 'belgium' },
    { nameEn: 'Czech Republic', nameAr: 'التشيك', slug: 'czech' },
    { nameEn: 'Croatia', nameAr: 'كرواتيا', slug: 'croatia' },
    { nameEn: 'Estonia', nameAr: 'إستونيا', slug: 'estonia' },
    { nameEn: 'Poland', nameAr: 'بولندا', slug: 'poland' },
    { nameEn: 'Slovenia', nameAr: 'سلوفينيا', slug: 'slovenia' },
    { nameEn: 'Lithuania', nameAr: 'ليتوانيا', slug: 'lithuania' },
    { nameEn: 'Liechtenstein', nameAr: 'ليختنشتاين', slug: 'liechtenstein' },
    { nameEn: 'Malta', nameAr: 'مالطا', slug: 'malta' },
    { nameEn: 'Latvia', nameAr: 'لاتفيا', slug: 'latvia' },
    { nameEn: 'Slovakia', nameAr: 'سلوفاكيا', slug: 'slovakia' },
    { nameEn: 'Bulgaria', nameAr: 'بلغاريا', slug: 'bulgaria' },
    { nameEn: 'Romania', nameAr: 'رومانيا', slug: 'romania' },
  ]

  // All countries now have data available
  const availableCountriesSlugs = [
    'germany', 'france', 'italy', 'spain', 'portugal', 'netherlands', 'austria', 'greece',
    'switzerland', 'hungary', 'sweden', 'norway', 'iceland', 'finland', 'denmark', 'luxembourg',
    'belgium', 'czech', 'croatia', 'estonia', 'poland', 'slovenia', 'lithuania', 'liechtenstein',
    'malta', 'latvia', 'slovakia', 'bulgaria', 'romania'
  ]

  // Mark countries as available or coming soon
  const allCountries = countries.map(country => ({
    ...country,
    available: availableCountriesSlugs.includes(country.slug)
  }))

  return (
    <>

      {/* HERO SECTION */}
      <section className="modern-hero">
        <div className="container">
          <div className="hero-content" dir={isRTL ? "rtl" : "ltr"}>
            <h1 className="hero-title">
              {isRTL ? "تأشيرات الشنغن" : "Schengen Visas"}
            </h1>
            <p className="hero-subtitle">
              {isRTL
                ? "السفر بحرية عبر 27 دولة أوروبية بتأشيرة واحدة"
                : "Travel freely across 27 European countries with a single visa"
              }
            </p>

            <div className="hero-actions">
              <a href="#countries" className="btn btn-modern-primary">
                {isRTL ? "استكشف الدول" : "Explore Countries"} →
              </a>
              <a href="/contact" className="btn btn-modern-secondary">
                {isRTL ? "استشارة مجانية" : "Free Consultation"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTRIES SECTION */}
      <section id="countries" className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {isRTL ? "دول الشنغن المتاحة" : "Available Schengen Countries"}
          </h2>

          <div className="row g-4 mt-5">
            {allCountries.map((country, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                {country.available ? (
                  <Link href={`/schengen-visas/${country.slug}`} className="text-decoration-none">
                    <div className="country-visa-card">
                      <div className="d-flex align-items-start" dir={isRTL ? "rtl" : "ltr"}>
                        <div className="country-flag-icon me-3">
                          <i className="fas fa-flag"></i>
                        </div>
                        <div className="flex-grow-1">
                          <h4 className="mb-3">{isRTL ? country.nameAr : country.nameEn}</h4>
                          <div className="mt-3">
                            <span className="text-travel-primary fw-bold">
                              {isRTL ? "اعرف المزيد" : "Learn More"} →
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="country-visa-card coming-soon">
                    <div className="d-flex align-items-start" dir={isRTL ? "rtl" : "ltr"}>
                      <div className="country-flag-icon me-3">
                        <i className="fas fa-clock"></i>
                      </div>
                      <div className="flex-grow-1">
                        <h4 className="mb-3">{isRTL ? country.nameAr : country.nameEn}</h4>
                        <div className="mt-3">
                          <span className="text-muted fw-bold">
                            {isRTL ? "قريباً" : "Coming Soon"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section-modern">
        <div className="container">
          <div className="cta-content" dir={isRTL ? "rtl" : "ltr"}>
            <h2>
              {isRTL
                ? "ابدأ رحلتك الأوروبية اليوم"
                : "Start Your European Journey Today"
              }
            </h2>
            <Link href="/contact" className="btn btn-light btn-lg">
              {isRTL ? "اتصل بنا الآن" : "Contact Us Now"}
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
