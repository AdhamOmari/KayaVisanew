'use client'
import "@/styles/schengen-styles.css"

import Image from 'next/image'
import { useParams, notFound } from 'next/navigation'

import { useI18n } from '@/lib/i18n'
import Link from 'next/link'

// Import all country data files
import travelGermanyDataImport from '@/data/travel-germany.json'
import travelFranceDataImport from '@/data/travel-france.json'
import travelItalyDataImport from '@/data/travel-italy.json'
import travelSpainDataImport from '@/data/travel-spain.json'
import travelPortugalDataImport from '@/data/travel-portugal.json'
import travelNetherlandsDataImport from '@/data/travel-netherlands.json'
import travelAustriaDataImport from '@/data/travel-austria.json'
import travelGreeceDataImport from '@/data/travel-greece.json'
import travelSwitzerlandDataImport from '@/data/travel-switzerland.json'
import travelHungaryDataImport from '@/data/travel-hungary.json'
import travelSwedenDataImport from '@/data/travel-sweden.json'
import travelNorwayDataImport from '@/data/travel-norway.json'
import travelIcelandDataImport from '@/data/travel-iceland.json'
import travelFinlandDataImport from '@/data/travel-finland.json'
import travelDenmarkDataImport from '@/data/travel-denmark.json'
import travelLuxembourgDataImport from '@/data/travel-luxembourg.json'
import travelBelgiumDataImport from '@/data/travel-belgium.json'
import travelCzechDataImport from '@/data/travel-czech.json'
import travelCroatiaDataImport from '@/data/travel-croatia.json'
import travelEstoniaDataImport from '@/data/travel-estonia.json'
import travelPolandDataImport from '@/data/travel-poland.json'
import travelSloveniaDataImport from '@/data/travel-slovenia.json'
import travelLithuaniaDataImport from '@/data/travel-lithuania.json'
import travelLiechtensteinDataImport from '@/data/travel-liechtenstein.json'
import travelMaltaDataImport from '@/data/travel-malta.json'
import travelLatviaDataImport from '@/data/travel-latvia.json'
import travelSlovakiaDataImport from '@/data/travel-slovakia.json'
import travelBulgariaDataImport from '@/data/travel-bulgaria.json'
import travelRomaniaDataImport from '@/data/travel-romania.json'

// Country data mapping
const countryDataMap: Record<string, any> = {
  germany: travelGermanyDataImport,
  france: travelFranceDataImport,
  italy: travelItalyDataImport,
  spain: travelSpainDataImport,
  portugal: travelPortugalDataImport,
  netherlands: travelNetherlandsDataImport,
  austria: travelAustriaDataImport,
  greece: travelGreeceDataImport,
  switzerland: travelSwitzerlandDataImport,
  hungary: travelHungaryDataImport,
  sweden: travelSwedenDataImport,
  norway: travelNorwayDataImport,
  iceland: travelIcelandDataImport,
  finland: travelFinlandDataImport,
  denmark: travelDenmarkDataImport,
  luxembourg: travelLuxembourgDataImport,
  belgium: travelBelgiumDataImport,
  czech: travelCzechDataImport,
  croatia: travelCroatiaDataImport,
  estonia: travelEstoniaDataImport,
  poland: travelPolandDataImport,
  slovenia: travelSloveniaDataImport,
  lithuania: travelLithuaniaDataImport,
  liechtenstein: travelLiechtensteinDataImport,
  malta: travelMaltaDataImport,
  latvia: travelLatviaDataImport,
  slovakia: travelSlovakiaDataImport,
  bulgaria: travelBulgariaDataImport,
  romania: travelRomaniaDataImport,
}

const availableCountries = Object.keys(countryDataMap)

const countryHeroImages: Record<string, string> = {
  austria: '/schengen/austria/austria.webp',
  belgium: '/schengen/belgium/belgium.jpg',
  bulgaria: '/schengen/bulgaria/bulgaria.webp',
  croatia: '/schengen/croatia/croatia.jpg',
  czech: '/schengen/czech/czech.jpg',
  denmark: '/schengen/denmark/denmark.jpg',
  estonia: '/schengen/estonia/estonia.jpg',
  finland: '/schengen/finland/finland.jpg',
  france: '/schengen/france/france.jpg',
  germany: '/schengen/germany/germany.webp',
  greece: '/schengen/greece/greece.jpg',
  hungary: '/schengen/hungary/hungary.jpg',
  iceland: '/schengen/iceland/iceland.webp',
  italy: '/schengen/italy/italy.jpg',
  latvia: '/schengen/latvia/latvia.jpg',
  liechtenstein: '/schengen/liechtenstein/liechtenstein.jpg',
  lithuania: '/schengen/lithuania/lithuania.jpg',
  luxembourg: '/schengen/luxembourg/luxembourg.jpg',
  malta: '/schengen/malta/malta.webp',
  norway: '/schengen/norway/norway.jpg',
  poland: '/schengen/poland/poland.jpg',
  romania: '/schengen/romania/romania.jpg',
  slovakia: '/schengen/slovakia/slovakia.jpg',
  slovenia: '/schengen/slovenia/slovenia.jpeg',
  sweden: '/schengen/sweden/sweden.avif',
  switzerland: '/schengen/switzerland/switzerland.jpg',
}

export default function SchengenCountryPage() {
  const { locale } = useI18n()
  const params = useParams()
  const isRTL = locale === 'ar'
  const slug = params.slug as string

  if (!availableCountries.includes(slug)) {
    notFound()
  }

  const countryData = countryDataMap[slug]
  const data = locale === 'ar' ? countryData.ar : countryData.en
  const heroImage = countryHeroImages[slug] || '/schengen-hero.png'

  return (
    <div className="schengen-page-wrapper">
      {/* HERO SECTION */}
      <section
        className="schengen-hero"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <div className="container">
          <div className="schengen-hero-content" dir={isRTL ? "rtl" : "ltr"}>
            <span className="schengen-hero-subtitle">{isRTL ? "اكتشف أوروبا" : "Discover Europe"}</span>
            <h1 className="schengen-hero-title">{data.title}</h1>
            <p className="lead text-white-50 fs-4 mb-5">
              {data.hero.subtitle}
            </p>

            <div className="hero-actions d-flex gap-3 justify-content-center">
              <a href="#requirements" className="s-btn-primary text-decoration-none">
                {isRTL ? "المتطلبات" : "Requirements"}
              </a>
              <Link href="/contact" className="s-btn-outline text-decoration-none">
                {isRTL ? "استشارة مجانية" : "Free Consultation"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VISA TYPES */}
      <section className="schengen-section">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="schengen-header">
            <h2 className="schengen-section-title">{isRTL ? "أنواع التأشيرات" : "Visa Types"}</h2>
          </div>
          <div className="row g-4">
            {data.visa_types.map((visa: any, idx: number) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="schengen-visa-card">
                  <div className="schengen-card-icon">
                    <i className={`fas fa-${visa.icon}`}></i>
                  </div>
                  <h4 className="fw-bold mb-3">{visa.name}</h4>
                  <p className="text-muted mb-0">{visa.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATTRACTIONS */}
      {data.attractions && data.attractions.length > 0 && (
        <section className="schengen-section" style={{ backgroundColor: '#fff' }}>
          <div className="container" dir={isRTL ? "rtl" : "ltr"}>
            <div className="schengen-header">
              <h2 className="schengen-section-title">{isRTL ? "أبرز المعالم السياحية" : "Top Tourist Attractions"}</h2>
            </div>
            <div className="row g-4">
              {data.attractions.map((attraction: any, idx: number) => (
                <div key={idx} className="col-lg-4 col-md-6">
                  <div className="attraction-box">
                    <div className="attraction-img-container">
                      <Image
                        src={attraction.image}
                        alt={attraction.name}
                        fill
                        className="attraction-image"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="attraction-label">{attraction.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* REQUIREMENTS */}
      <section id="requirements" className="schengen-section">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="schengen-header">
            <h2 className="schengen-section-title">{isRTL ? "المتطلبات الأساسية" : "Requirements"}</h2>
          </div>
          <div className="schengen-checklist">
            {data.requirements.map((req: string, idx: number) => (
              <div key={idx} className="schengen-check-item">
                <i className="fas fa-check-circle"></i>
                <span className="fw-medium">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS / INFO */}
      <section className="schengen-section" style={{ backgroundColor: '#fff' }}>
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="schengen-stat-card">
                <div className="schengen-stat-icon"><i className="fas fa-clock"></i></div>
                <h3>{isRTL ? "وقت المعالجة" : "Processing Time"}</h3>
                <div className="schengen-stat-value">{data.processing_time}</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="schengen-stat-card" style={{ backgroundColor: '#2d3748' }}>
                <div className="schengen-stat-icon"><i className="fas fa-calendar-alt"></i></div>
                <h3>{isRTL ? "صلاحية التأشيرة" : "Visa Validity"}</h3>
                <div className="schengen-stat-value">{data.validity}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS & WITH KAYA */}
      <section className="schengen-section">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="row g-5">
            <div className="col-lg-6">
              <h3 className="fw-bold mb-4 border-bottom pb-3">{isRTL ? "نصائح مهمة" : "Important Tips"}</h3>
              <div className="d-flex flex-column gap-3">
                {data.tips.map((tip: string, idx: number) => (
                  <div key={idx} className="schengen-tip-item">
                    <div className="tip-number">{idx + 1}</div>
                    <p className="mb-0">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="fw-bold mb-4 border-bottom pb-3">{isRTL ? "لماذا كايا؟" : "Why Choose Kaya?"}</h3>
              <div className="row g-3">
                {data.with_kaya.map((service: string, idx: number) => (
                  <div key={idx} className="col-md-6">
                    <div className="schengen-service-pill">
                      <i className="fas fa-check"></i>
                      <span>{service}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="schengen-cta-box">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="display-4 fw-bold mb-5">{data.cta}</h2>
          <Link href="/contact" className="s-btn-primary text-decoration-none px-5">
            {isRTL ? "ابدأ طلبك الآن" : "Start Now"}
          </Link>
        </div>
      </section>
    </div>
  )
}
