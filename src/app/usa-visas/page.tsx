'use client'
import "@/styles/usa-visas.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import usaVisasData from '@/data/usa-visas-main.json'

export default function USAVisasPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? usaVisasData.ar : usaVisasData.en
  const isRTL = locale === 'ar'

  return (
    <>

      {/* MODERN HERO */}
      <section className="modern-hero">
        <div className="container">
          <div className="hero-content" dir={isRTL ? "rtl" : "ltr"}>
            <h1 className="hero-title">{data.title}</h1>
            <p className="hero-subtitle">{data.hero.subtitle}</p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50</span>
                <span className="stat-label">
                  {isRTL ? "ولاية" : "States"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">
                  {isRTL ? "أنواع التأشيرات" : "Visa Types"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1776</span>
                <span className="stat-label">
                  {isRTL ? "تأسست" : "Founded"}
                </span>
              </div>
            </div>
            
            <div className="hero-actions">
              <a href="#visa-types" className="btn btn-modern-primary">
                {isRTL ? "استكشف التأشيرات" : "Explore Visas"} →
              </a>
              <a href="/contact" className="btn btn-modern-secondary">
                {isRTL ? "احصل على استشارة" : "Get Consultation"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="section-modern soft-bg">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.overview.heading}
          </h2>
          <div className="row g-4 mt-4">
            <div className="col-lg-6">
              <p className="lead" dir={isRTL ? "rtl" : "ltr"}>
                {data.overview.description}
              </p>
            </div>
            <div className="col-lg-6">
              <p className="lead" dir={isRTL ? "rtl" : "ltr"}>
                {data.overview.additional}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRAVEL TO USA */}
      <section className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.why_travel.heading}
          </h2>
          
          <div className="row g-4 mt-5">
            {data.why_travel.reasons.map((reason, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="glass-card" dir={isRTL ? "rtl" : "ltr"}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="text-gold fs-4">
                      <i className="fas fa-star"></i>
                    </div>
                    <div>
                      <p className="text-white mb-0">{reason}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 text-center">
            <p className="lead text-muted" dir={isRTL ? "rtl" : "ltr"}>
              {data.why_travel.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* VISA CATEGORIES */}
      <section id="visa-types" className="section-modern soft-bg">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.visa_categories.heading}
          </h2>
          
          {/* IMMIGRANT VISAS */}
          <div className="mb-5">
            <div className="row align-items-center mb-4">
              <div className="col-lg-8">
                <h3 className="h4 mb-3" dir={isRTL ? "rtl" : "ltr"}>
                  <i className="fas fa-home me-2 text-usa-navy"></i>
                  {data.visa_categories.immigrant.title}
                </h3>
                <p className="text-muted" dir={isRTL ? "rtl" : "ltr"}>
                  {data.visa_categories.immigrant.description}
                </p>
              </div>
            </div>
            
            <div className="row g-4">
              {data.visa_categories.immigrant.types.map((type, i) => (
                <div className="col-md-4" key={i}>
                  <div className="modern-card">
                    <div className="card-icon mb-3">
                      <i className={`fas fa-${i === 0 ? 'users' : i === 1 ? 'briefcase' : 'globe-americas'}`}></i>
                    </div>
                    <h5 className="mb-2">{type.name}</h5>
                    <p className="text-muted small mb-0">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="alert alert-info mt-4" role="alert" dir={isRTL ? "rtl" : "ltr"}>
              <i className="fas fa-info-circle me-2"></i>
              {data.visa_categories.immigrant.note}
            </div>
          </div>

          {/* NON-IMMIGRANT VISAS */}
          <div className="mt-5">
            <div className="row align-items-center mb-4">
              <div className="col-lg-8">
                <h3 className="h4 mb-3" dir={isRTL ? "rtl" : "ltr"}>
                  <i className="fas fa-plane-departure me-2 text-usa-red"></i>
                  {data.visa_categories.nonimmigrant.title}
                </h3>
                <p className="text-muted" dir={isRTL ? "rtl" : "ltr"}>
                  {data.visa_categories.nonimmigrant.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY VISA TYPES */}
      <section className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.key_visas.heading}
          </h2>
          
          <div className="row g-4 mt-5">
            {data.key_visas.visas.map((visa, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <Link href={visa.link} className="text-decoration-none">
                  <div className="modern-card h-100 hover-lift">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="card-icon">
                        <i className={`fas fa-${visa.icon}`}></i>
                      </div>
                      <span className="badge bg-usa-navy">{visa.code}</span>
                    </div>
                    <h5 className="mb-3">{visa.name}</h5>
                    <p className="text-muted small mb-4">{visa.description}</p>
                    <div className="text-primary">
                      {isRTL ? "اعرف المزيد" : "Learn More"} →
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* US STATES */}
      <section className="section-modern soft-bg">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.states.heading}
          </h2>
          
          <div className="row g-3 mt-4">
            {data.states.list.map((state, i) => (
              <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={i}>
                <div className="glass-card text-center py-3">
                  <small className="text-white">{state}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODERN CTA */}
      <section className="modern-cta">
        <div className="cta-content" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="cta-title">
            {data.cta}
          </h2>
          
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center mt-4">
            <Link href="/contact" className="btn btn-modern-primary px-5 py-3">
              <i className="fas fa-comments me-2"></i>
              {isRTL ? "احصل على استشارة مجانية" : "Get Free Consultation"}
            </Link>
            <a href="tel:+1234567890" className="btn btn-modern-secondary px-5 py-3">
              <i className="fas fa-phone-alt me-2"></i>
              {isRTL ? "اتصل بنا الآن" : "Call Us Now"}
            </a>
          </div>
        </div>
      </section>

    </>
  )
}
