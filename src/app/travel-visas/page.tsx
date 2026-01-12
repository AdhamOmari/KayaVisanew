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
    <>

      {/* MODERN HERO */}
      <section className="modern-hero">
        <div className="container">
          <div className="hero-content" dir={isRTL ? "rtl" : "ltr"}>
            <h1 className="hero-title">{data.title}</h1>
            <p className="hero-subtitle">{data.hero.subtitle}</p>
            <p className="lead text-white-50 mb-4">{data.hero.description}</p>
            
            <div className="hero-actions">
              <a href="#destinations" className="btn btn-modern-primary">
                {isRTL ? "استكشف الوجهات" : "Explore Destinations"} →
              </a>
              <a href="/contact" className="btn btn-modern-secondary">
                {isRTL ? "استشارة مجانية" : "Free Consultation"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VISA TYPES */}
      <section className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.visa_types.heading}
          </h2>
          
          <div className="row g-4 mt-5">
            {data.visa_types.types.map((type: any, i: number) => (
              <div className="col-md-4" key={i}>
                <div className="visa-type-card">
                  <div className="visa-type-icon">
                    <i className={`fas fa-${type.icon}`}></i>
                  </div>
                  <h4 className="mb-3">{type.name}</h4>
                  <p className="text-muted mb-0" dir={isRTL ? "rtl" : "ltr"}>{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="destinations" className="section-modern soft-bg">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.destinations.heading}
          </h2>
          
          <div className="row g-4 mt-5">
            {data.destinations.countries.map((country: any, i: number) => (
              <div className="col-lg-6" key={i}>
                <Link href={country.link} className="text-decoration-none">
                  <div className="country-visa-card">
                    <div className="d-flex align-items-start" dir={isRTL ? "rtl" : "ltr"}>
                      <div className="country-flag-icon me-3">
                        <i className={`fas fa-${country.icon}`}></i>
                      </div>
                      <div className="flex-grow-1">
                        <span className="country-code-badge">{country.code}</span>
                        <h4 className="mb-3">{country.name}</h4>
                        <ul className="visa-list">
                          {country.visas.map((visa: string, j: number) => (
                            <li key={j}>{visa}</li>
                          ))}
                        </ul>
                        <div className="mt-3">
                          <span className="text-travel-primary fw-bold">
                            {isRTL ? "اعرف المزيد" : "Learn More"} →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KAYA */}
      <section className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.why_kaya.heading}
          </h2>
          
          <div className="row g-4 mt-5">
            {data.why_kaya.reasons.map((reason: string, i: number) => (
              <div className="col-md-6" key={i}>
                <div className="why-kaya-card" dir={isRTL ? "rtl" : "ltr"}>
                  <div className="d-flex align-items-start">
                    <div className="text-travel-accent fs-3 me-3">
                      <i className={`fas fa-${
                        i === 0 ? 'award' : 
                        i === 1 ? 'user-check' : 
                        i === 2 ? 'sync-alt' : 
                        'headset'
                      }`}></i>
                    </div>
                    <p className="mb-0">{reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-modern">
        <div className="container">
          <div className="adventure-banner" dir={isRTL ? "rtl" : "ltr"}>
            <h2 className="display-5 fw-bold mb-4">{data.cta}</h2>
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
              <Link href="/contact" className="btn btn-modern-primary btn-lg px-5">
                <i className="fas fa-paper-plane me-2"></i>
                {isRTL ? "ابدأ رحلتك الآن" : "Start Your Journey"}
              </Link>
              <a href="tel:+1234567890" className="btn btn-modern-secondary btn-lg px-5">
                <i className="fas fa-phone-alt me-2"></i>
                {isRTL ? "تحدث معنا" : "Talk to Us"}
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
