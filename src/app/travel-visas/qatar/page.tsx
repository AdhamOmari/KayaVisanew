'use client'
import "@/styles/travel-visas.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import travelQatarDataImport from '@/data/travel-qatar.json'

export default function TravelQatarPage() {
  const { locale } = useI18n()
  const travelQatarData: any = travelQatarDataImport
  const data = locale === 'ar' ? travelQatarData.ar : travelQatarData.en
  const isRTL = locale === 'ar'

  return (
    <>

      {/* HERO SECTION */}
      <section className="modern-hero">
        <div className="container">
          <div className="hero-content" dir={isRTL ? "rtl" : "ltr"}>
            <div className="hero-flag mb-4">
              <i className="fas fa-flag fs-1"></i>
            </div>
            <h1 className="hero-title">{data.title}</h1>
            <p className="hero-subtitle">{data.hero.subtitle}</p>
            
            <div className="hero-actions">
              <a href="#requirements" className="btn btn-modern-primary">
                {isRTL ? "المتطلبات" : "Requirements"} →
              </a>
              <a href="/contact" className="btn btn-modern-secondary">
                {isRTL ? "استشارة مجانية" : "Free Consultation"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VISA TYPES SECTION */}
      <section className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {isRTL ? "أنواع التأشيرات" : "Visa Types"}
          </h2>
          
          <div className="row g-4 mt-4">
            {data.visa_types.map((visa: any, idx: number) => (
              <div key={idx} className="col-md-4">
                <div className="feature-card h-100">
                  <div className="feature-icon">
                    <i className={`fas fa-${visa.icon}`}></i>
                  </div>
                  <h3 dir={isRTL ? "rtl" : "ltr"}>{visa.name}</h3>
                  <p dir={isRTL ? "rtl" : "ltr"}>{visa.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS SECTION */}
      <section id="requirements" className="section-modern soft-bg">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {isRTL ? "المتطلبات الأساسية" : "Basic Requirements"}
          </h2>
          
          <div className="row justify-content-center mt-4">
            <div className="col-lg-8">
              <div className="checklist-modern">
                {data.requirements.map((req: string, idx: number) => (
                  <div key={idx} className="checklist-item" dir={isRTL ? "rtl" : "ltr"}>
                    <i className="fas fa-check-circle"></i>
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSING & VALIDITY SECTION */}
      <section className="section-modern">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="info-card-modern">
                <div className="info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3 dir={isRTL ? "rtl" : "ltr"}>
                  {isRTL ? "وقت المعالجة" : "Processing Time"}
                </h3>
                <p className="info-value" dir={isRTL ? "rtl" : "ltr"}>
                  {data.processing_time}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-card-modern">
                <div className="info-icon">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <h3 dir={isRTL ? "rtl" : "ltr"}>
                  {isRTL ? "صلاحية التأشيرة" : "Visa Validity"}
                </h3>
                <p className="info-value" dir={isRTL ? "rtl" : "ltr"}>
                  {data.validity}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS SECTION */}
      <section className="section-modern soft-bg">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {isRTL ? "نصائح مهمة" : "Important Tips"}
          </h2>
          
          <div className="row g-4 mt-4">
            {data.tips.map((tip: string, idx: number) => (
              <div key={idx} className="col-md-6">
                <div className="tip-card" dir={isRTL ? "rtl" : "ltr"}>
                  <div className="tip-number">{idx + 1}</div>
                  <p>{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WITH KAYA SECTION */}
      <section className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {isRTL ? "خدماتنا في كايا" : "Our Services at Kaya"}
          </h2>
          
          <div className="row g-4 mt-4">
            {data.with_kaya.map((service: string, idx: number) => (
              <div key={idx} className="col-md-6">
                <div className="service-card-modern" dir={isRTL ? "rtl" : "ltr"}>
                  <i className="fas fa-star"></i>
                  <span>{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section-modern">
        <div className="container">
          <div className="cta-content" dir={isRTL ? "rtl" : "ltr"}>
            <h2>{data.cta}</h2>
            <Link href="/contact" className="btn btn-light btn-lg">
              {isRTL ? "اتصل بنا الآن" : "Contact Us Now"}
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
