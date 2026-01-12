'use client'

import { useI18n } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const { t } = useI18n()

  const services = [
    {
      title: t.nav.secondCitizenship,
      description: t.secondCitizenship.description,
      icon: 'bi-passport',
      link: '/second-citizenship',
      color: '#1a202c'
    },
    {
      title: t.nav.usaVisas,
      description: t.usaVisas.subtitle,
      icon: 'bi-flag-usa',
      link: '/usa-visas',
      color: '#667eea'
    },
    {
      title: t.nav.schengenVisas,
      description: t.schengenVisas.subtitle,
      icon: 'bi-globe-europe-africa',
      link: '/schengen-visas',
      color: '#1a202c'
    },
    {
      title: t.nav.studyVisas,
      description: t.studyVisas.subtitle,
      icon: 'bi-mortarboard',
      link: '/study-visas',
      color: '#667eea'
    },
    {
      title: t.nav.travelVisas,
      description: t.travelVisas.subtitle,
      icon: 'bi-airplane',
      link: '/travel-visas',
      color: '#1a202c'
    },
    {
      title: t.nav.workVisas,
      description: t.workVisas.subtitle,
      icon: 'bi-briefcase',
      link: '/work-visas',
      color: '#667eea'
    }
  ]

  const featuredServices = [
    {
      title: t.services.translation,
      description: t.services.translationDesc,
      icon: 'bi-translate'
    },
    {
      title: t.services.flightBooking,
      description: t.services.flightBookingDesc,
      icon: 'bi-airplane-engines'
    },
    {
      title: t.services.hotelBooking,
      description: t.services.hotelBookingDesc,
      icon: 'bi-building'
    },
    {
      title: t.services.travelInsurance,
      description: t.services.travelInsuranceDesc,
      icon: 'bi-shield-check'
    }
  ]

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(226, 188, 66, 0.85))'
      }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <h1 className="hero-title fade-in-up">{t.home.heroTitle}</h1>
          <p className="hero-subtitle fade-in-up" style={{animationDelay: '0.2s'}}>{t.home.heroSubtitle}</p>
          <div className="mt-4 fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link href="/contact" className="btn btn-secondary btn-lg me-3 mb-2">
              {t.home.heroCTA}
            </Link>
            <Link href="/services" className="btn btn-outline-light btn-lg mb-2">
              {t.home.learnMore}
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">{t.home.featuredServicesTitle}</h2>
            <p className="section-subtitle">{t.home.featuredServicesSubtitle}</p>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card h-100" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="card-body text-center p-4">
                    <div className="feature-icon mb-3" style={{color: service.color}}>
                      <i className={`bi ${service.icon}`} style={{fontSize: '3.5rem'}}></i>
                    </div>
                    <h3 className="h4 mb-3">{service.title}</h3>
                    <p className="text-muted mb-4">{service.description}</p>
                    <Link href={service.link} className="btn btn-primary">
                      {t.common.learnMore}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{background: 'white'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="section-title mb-4">Why Choose Kaya Travel?</h2>
              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-success me-3" style={{fontSize: '1.5rem'}}></i>
                <div>
                  <h5>Expert Guidance</h5>
                  <p className="text-muted">Professional consultation for all visa and citizenship matters</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-success me-3" style={{fontSize: '1.5rem'}}></i>
                <div>
                  <h5>Fast Processing</h5>
                  <p className="text-muted">Quick turnaround times with efficient document handling</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-success me-3" style={{fontSize: '1.5rem'}}></i>
                <div>
                  <h5>Trusted Partners</h5>
                  <p className="text-muted">Working with reputable organizations worldwide</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-4">
                <i className="bi bi-check-circle-fill text-success me-3" style={{fontSize: '1.5rem'}}></i>
                <div>
                  <h5>Complete Support</h5>
                  <p className="text-muted">End-to-end assistance from application to approval</p>
                </div>
              </div>
              <Link href="/about" className="btn btn-secondary btn-lg">
                {t.common.learnMore}
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <div style={{
                  width: '100%',
                  height: '400px',
                  background: 'linear-gradient(135deg, #1a202c 0%, #667eea 100%)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2rem',
                  fontWeight: 'bold'
                }}>
                  Professional Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">{t.services.title}</h2>
            <p className="section-subtitle">{t.services.subtitle}</p>
          </div>
          <div className="row g-4">
            {featuredServices.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="feature-card">
                  <i className={`bi ${service.icon} feature-icon`}></i>
                  <h4 className="mb-3">{service.title}</h4>
                  <p className="text-muted">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link href="/services" className="btn btn-primary btn-lg">
              {t.common.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #1a202c 0%, #2a4a8f 100%)',
        color: 'white'
      }}>
        <div className="container text-center">
          <h2 className="display-4 fw-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="lead mb-5">Contact us today and let our experts guide you through the process</p>
          <Link href="/contact" className="btn btn-secondary btn-lg">
            {t.contact.title}
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
