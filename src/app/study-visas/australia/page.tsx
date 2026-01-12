'use client'
import "@/styles/study-visas.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import studyAustraliaDataImport from '@/data/study-australia.json'

export default function StudyAustraliaPage() {
  const { locale } = useI18n()
  const studyAustraliaData: any = studyAustraliaDataImport
  const data = locale === 'ar' ? studyAustraliaData.ar : studyAustraliaData.en
  const isRTL = locale === 'ar'

  return (
    <>

      {/* MODERN HERO */}
      <section className="modern-hero">
        <div className="container">
          <div className="hero-content" dir={isRTL ? "rtl" : "ltr"}>
            <div className="hero-flag mb-4">
              <i className="fas fa-plane fs-1"></i>
            </div>
            <h1 className="hero-title">{data.title}</h1>
            <p className="hero-subtitle">{data.hero.subtitle}</p>
            
            <div className="hero-actions">
              <a href="#application" className="btn btn-modern-primary">
                {isRTL ? "خطوات التقديم" : "Application Steps"} →
              </a>
              <a href="/contact" className="btn btn-modern-secondary">
                {isRTL ? "استشارة مجانية" : "Free Consultation"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AUSTRALIA */}
      <section className="section-modern soft-bg">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.why_australia.heading}
          </h2>
          
          <div className="row g-4 mt-4">
            {data.why_australia.reasons.map((reason: string, i: number) => (
              <div className="col-md-6" key={i}>
                <div className="glass-card p-4" dir={isRTL ? "rtl" : "ltr"}>
                  <div className="text-gold fs-3 mb-3">
                    <i className={`fas fa-${
                      i === 0 ? 'university' : 
                      i === 1 ? 'graduation-cap' : 
                      i === 2 ? 'briefcase' : 
                      'city'
                    }`}></i>
                  </div>
                  <p className="text-white mb-0">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COSTS */}
      <section className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.costs.heading}
          </h2>
          
          <div className="row g-4 mt-5">
            <div className="col-lg-4">
              <div className="modern-card p-4 h-100" dir={isRTL ? "rtl" : "ltr"}>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-money-bill-wave text-study-primary fs-2 me-3"></i>
                  <h4 className="mb-0">{data.costs.tuition.title}</h4>
                </div>
                <ul className="list-unstyled">
                  {data.costs.tuition.details.map((detail: string, i: number) => (
                    <li key={i} className="mb-2">
                      <i className="fas fa-check-circle text-study-secondary me-2"></i>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="modern-card p-4 h-100" dir={isRTL ? "rtl" : "ltr"}>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-home text-study-primary fs-2 me-3"></i>
                  <h4 className="mb-0">{data.costs.living.title}</h4>
                </div>
                <ul className="list-unstyled">
                  {data.costs.living.details.map((detail: string, i: number) => (
                    <li key={i} className="mb-2">
                      <i className="fas fa-check-circle text-study-secondary me-2"></i>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="modern-card p-4 h-100" dir={isRTL ? "rtl" : "ltr"}>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-plus-circle text-study-primary fs-2 me-3"></i>
                  <h4 className="mb-0">{data.costs.additional.title}</h4>
                </div>
                <ul className="list-unstyled">
                  {data.costs.additional.details.map((detail: string, i: number) => (
                    <li key={i} className="mb-2">
                      <i className="fas fa-check-circle text-study-secondary me-2"></i>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK OPPORTUNITIES */}
      <section className="section-modern soft-bg">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.work_opportunities.heading}
          </h2>
          
          <div className="row g-4 mt-5">
            <div className="col-lg-6">
              <div className="modern-card p-4 h-100" dir={isRTL ? "rtl" : "ltr"}>
                <h4 className="text-study-primary mb-4">{data.work_opportunities.during.title}</h4>
                {data.work_opportunities.during.options.map((option: any, i: number) => (
                  <div key={i} className="mb-4">
                    <h6 className="fw-bold">{option.name}</h6>
                    <p className="text-muted mb-0">{option.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="modern-card p-4 h-100" dir={isRTL ? "rtl" : "ltr"}>
                <h4 className="text-study-primary mb-4">{data.work_opportunities.after.title}</h4>
                {data.work_opportunities.after.options.map((option: any, i: number) => (
                  <div key={i} className="mb-4">
                    <h6 className="fw-bold">{option.name}</h6>
                    <p className="text-muted mb-0">{option.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION STEPS */}
      <section id="application" className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.application_steps.heading}
          </h2>
          
          <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
              <div className="process-timeline" dir={isRTL ? "rtl" : "ltr"}>
                {data.application_steps.steps.map((step: string, i: number) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-marker">{i + 1}</div>
                    <div className="timeline-content">
                      <p className="mb-0">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="section-modern soft-bg">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.documents.heading}
          </h2>
          
          <div className="row justify-content-center mt-5">
            <div className="col-lg-8">
              <div className="modern-card p-4" dir={isRTL ? "rtl" : "ltr"}>
                <ul className="checklist-items">
                  {data.documents.list.map((doc: string, i: number) => (
                    <li key={i}>
                      <i className="fas fa-check-circle text-study-primary me-2"></i>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPON ARRIVAL */}
      <section className="section-modern">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.upon_arrival.heading}
          </h2>
          
          <div className="row justify-content-center mt-5">
            <div className="col-lg-8">
              <div className="modern-card p-4" dir={isRTL ? "rtl" : "ltr"}>
                <ul className="checklist-items">
                  {data.upon_arrival.steps.map((step: string, i: number) => (
                    <li key={i}>
                      <i className="fas fa-check-circle text-study-primary me-2"></i>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WITH KAYA */}
      <section className="section-modern soft-bg">
        <div className="container">
          <h2 className="section-title" dir={isRTL ? "rtl" : "ltr"}>
            {data.with_kaya.heading}
          </h2>
          
          <div className="row g-4 mt-5">
            {data.with_kaya.services.map((service: string, i: number) => (
              <div className="col-md-6" key={i}>
                <div className="modern-card p-4" dir={isRTL ? "rtl" : "ltr"}>
                  <div className="d-flex align-items-start">
                    <i className={`fas fa-${
                      i === 0 ? 'university' : 
                      i === 1 ? 'file-alt' : 
                      i === 2 ? 'hands-helping' : 
                      'plane-arrival'
                    } text-study-primary fs-3 me-3`}></i>
                    <p className="mb-0">{service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="modern-cta">
        <div className="cta-content" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="cta-title">{data.cta}</h2>
          
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center mt-4">
            <Link href="/contact" className="btn btn-modern-primary px-5 py-3">
              <i className="fas fa-graduation-cap me-2"></i>
              {isRTL ? "تواصل معنا" : "Contact Us"}
            </Link>
            <Link href="/study-visas" className="btn btn-modern-secondary px-5 py-3">
              <i className="fas fa-arrow-left me-2"></i>
              {isRTL ? "وجهات أخرى" : "Other Destinations"}
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
