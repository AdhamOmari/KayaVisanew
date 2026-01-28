'use client'
import "@/styles/travel-visas.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import travelDataImport from '@/data/travel-visas-main.json'

export default function TravelVisasPage() {
  const { locale } = useI18n()
  const travelData: any = travelDataImport
  const data = locale === 'ar' ? travelData.ar : travelData.en
  const isRTL = locale === 'ar'

  return (
    <div className="travel-visas-page">
      {/* ULTRA MODERN HERO */}
      <section className="modern-hero">
        <div className="container">
          <div className="hero-content" dir={isRTL ? "rtl" : "ltr"}>
            <span className="hero-subtitle">{data.hero.subtitle}</span>
            <h1 className="hero-title">{data.title}</h1>
            <p className="hero-description">{data.hero.description}</p>

            <div className="hero-actions">
              <a href="#destinations" className="btn btn-modern-primary">
                {isRTL ? "استكشف الوجهات" : "Explore Destinations"}
                <i className={`fas fa-arrow-${isRTL ? 'left' : 'right'} ms-2`}></i>
              </a>
              <Link href="/contact" className="btn btn-modern-secondary">
                {isRTL ? "احجز استشارة مجانية" : "Book Free Consultation"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VISA TYPES - PROFESSIONAL GRID */}
      <section className="section-modern">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title">
            {data.visa_types.heading}
          </h2>

          <div className="row g-4 mt-2">
            {data.visa_types.types.map((type: any, i: number) => (
              <div className="col-md-4" key={i}>
                <div className="visa-type-card">
                  <div className="visa-type-icon">
                    <i className={`fas fa-${type.icon}`}></i>
                  </div>
                  <h4 className="fw-bold mb-3">{type.name}</h4>
                  <p className="text-muted mb-0">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS - PREMIUM GRID */}
      <section id="destinations" className="section-modern" style={{ backgroundColor: '#fff' }}>
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title">
            {data.destinations.heading}
          </h2>

          <div className="row g-4 mt-2">
            {data.destinations.countries.map((country: any, i: number) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <Link href={country.link} className="text-decoration-none">
                  <div className="country-visa-card">
                    <span className="country-code-badge">{country.code}</span>
                    <div className="country-flag-icon">
                      <i className={`fas fa-${country.icon}`}></i>
                    </div>
                    <h3 className="h4 fw-bold mb-3 text-dark">{country.name}</h3>
                    <ul className="visa-list">
                      {country.visas.map((visa: string, j: number) => (
                        <li key={j}>{visa}</li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-3 border-top d-flex align-items-center justify-content-between">
                      <span className="fw-bold text-dark">
                        {isRTL ? "التفاصيل" : "View Details"}
                      </span>
                      <i className={`fas fa-chevron-${isRTL ? 'left' : 'right'} text-primary opacity-50`}></i>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KAYA - BENEFITS */}
      <section className="section-modern">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="section-title">
            {data.why_kaya.heading}
          </h2>

          <div className="row g-4 mt-2">
            {data.why_kaya.reasons.map((reason: string, i: number) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="why-kaya-card h-100">
                  <div className="fs-1 mb-4" style={{ color: '#e2bc42' }}>
                    <i className={`fas fa-${i === 0 ? 'shield-alt' :
                        i === 1 ? 'user-clock' :
                          i === 2 ? 'sync' :
                            'headset'
                      }`}></i>
                  </div>
                  <p className="mb-0 fw-medium" style={{ lineHeight: '1.6' }}>{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER - HIGH IMPACT */}
      <section className="section-modern">
        <div className="container">
          <div className="adventure-banner" dir={isRTL ? "rtl" : "ltr"}>
            <h2 className="display-4 fw-bold mb-5" style={{ lineHeight: '1.2' }}>{data.cta}</h2>
            <div className="d-flex flex-column flex-md-row gap-4 justify-content-center align-items-center">
              <Link href="/contact" className="btn btn-modern-primary btn-lg px-5 py-3">
                <i className="fas fa-paper-plane me-3"></i>
                {isRTL ? "ابدأ طلب تأشيرتك الآن" : "Start Your Visa Request Now"}
              </Link>
              <a href="tel:+1234567890" className="btn btn-modern-secondary btn-lg px-5 py-3">
                <i className="fas fa-phone-alt me-3"></i>
                {isRTL ? "تحدث مع مستشار" : "Consult our Advisor"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
