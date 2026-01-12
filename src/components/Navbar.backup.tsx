'use client'

import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const { t, locale, setLocale } = useI18n()
  const [expanded, setExpanded] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <strong>KAYA</strong> Travel
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link" onClick={() => setExpanded(false)}>
                {t.nav.home}
              </Link>
            </li>
            
            {/* Second Citizenship Mega Menu */}
            <li className="nav-item dropdown position-static">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                {t.nav.secondCitizenship}
              </a>
              <div className="dropdown-menu mega-menu p-4" style={{width: '100%', maxWidth: '900px'}}>
                <div className="row g-3">
                  <div className="col-12 mb-2">
                    <Link 
                      href="/second-citizenship" 
                      className="btn btn-outline-primary btn-sm w-100"
                      onClick={() => setExpanded(false)}
                    >
                      {t.nav.secondCitizenship} - {locale === 'ar' ? 'نظرة عامة' : 'Overview'}
                    </Link>
                  </div>
                  
                  {/* Antigua and Barbuda */}
                  <div className="col-md-6">
                    <Link 
                      href="/second-citizenship/antigua-barbuda" 
                      className="country-card"
                      onClick={() => setExpanded(false)}
                    >
                      <div className="d-flex align-items-center p-3 border rounded hover-shadow">
                        <img 
                          src="/2-  الجنسية الثانية/صفحات الدول المنفصله/1 أنتيغوا وبربودا/Antigua and Barbuda.webp" 
                          alt="Antigua and Barbuda"
                          className="country-flag me-3"
                          style={{width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px'}}
                        />
                        <div>
                          <h6 className="mb-0">{locale === 'ar' ? 'أنتيغوا وبربودا' : 'Antigua and Barbuda'}</h6>
                          <small className="text-muted">{locale === 'ar' ? '151 وجهة' : '151 destinations'}</small>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Dominica */}
                  <div className="col-md-6">
                    <Link 
                      href="/second-citizenship/dominica" 
                      className="country-card"
                      onClick={() => setExpanded(false)}
                    >
                      <div className="d-flex align-items-center p-3 border rounded hover-shadow">
                        <img 
                          src="/2-  الجنسية الثانية/صفحات الدول المنفصله/2 دومينيكا/Dominica.webp" 
                          alt="Dominica"
                          className="country-flag me-3"
                          style={{width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px'}}
                        />
                        <div>
                          <h6 className="mb-0">{locale === 'ar' ? 'دومينيكا' : 'Dominica'}</h6>
                          <small className="text-muted">{locale === 'ar' ? '143 وجهة' : '143 destinations'}</small>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Saint Kitts and Nevis */}
                  <div className="col-md-6">
                    <Link 
                      href="/second-citizenship/st-kitts-nevis" 
                      className="country-card"
                      onClick={() => setExpanded(false)}
                    >
                      <div className="d-flex align-items-center p-3 border rounded hover-shadow">
                        <img 
                          src="/2-  الجنسية الثانية/صفحات الدول المنفصله/3 سانت كيتس ونيفيس/Saint Kitts and Nevis.webp" 
                          alt="Saint Kitts and Nevis"
                          className="country-flag me-3"
                          style={{width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px'}}
                        />
                        <div>
                          <h6 className="mb-0">{locale === 'ar' ? 'سانت كيتس ونيفيس' : 'Saint Kitts and Nevis'}</h6>
                          <small className="text-muted">{locale === 'ar' ? '154 وجهة' : '154 destinations'}</small>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Saint Lucia */}
                  <div className="col-md-6">
                    <Link 
                      href="/second-citizenship/st-lucia" 
                      className="country-card"
                      onClick={() => setExpanded(false)}
                    >
                      <div className="d-flex align-items-center p-3 border rounded hover-shadow">
                        <img 
                          src="/2-  الجنسية الثانية/صفحات الدول المنفصله/4 سانت لوسيا/Saint Lucia.webp" 
                          alt="Saint Lucia"
                          className="country-flag me-3"
                          style={{width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px'}}
                        />
                        <div>
                          <h6 className="mb-0">{locale === 'ar' ? 'سانت لوسيا' : 'Saint Lucia'}</h6>
                          <small className="text-muted">{locale === 'ar' ? '142 وجهة' : '142 destinations'}</small>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Grenada */}
                  <div className="col-md-6">
                    <Link 
                      href="/second-citizenship/grenada" 
                      className="country-card"
                      onClick={() => setExpanded(false)}
                    >
                      <div className="d-flex align-items-center p-3 border rounded hover-shadow">
                        <img 
                          src="/2-  الجنسية الثانية/صفحات الدول المنفصله/5 غرينادا/Grenada.webp" 
                          alt="Grenada"
                          className="country-flag me-3"
                          style={{width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px'}}
                        />
                        <div>
                          <h6 className="mb-0">{locale === 'ar' ? 'غرينادا' : 'Grenada'}</h6>
                          <small className="text-muted">{locale === 'ar' ? '147 وجهة' : '147 destinations'}</small>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            {/* USA Visas Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                {t.nav.usaVisas}
              </a>
              <ul className="dropdown-menu">
                <li><Link href="/usa-visas" className="dropdown-item">{t.nav.usaVisas}</Link></li>
                <li><hr className="dropdown-divider" style={{borderColor: 'rgba(255,255,255,0.1)'}} /></li>
                <li><Link href="/usa-visas/tourism" className="dropdown-item">{t.usaVisas.tourismVisas}</Link></li>
                <li><Link href="/usa-visas/study" className="dropdown-item">{t.usaVisas.studyVisas}</Link></li>
                <li><Link href="/usa-visas/exchange" className="dropdown-item">{t.usaVisas.exchangeVisas}</Link></li>
              </ul>
            </li>

            {/* Schengen Visas */}
            <li className="nav-item">
              <Link href="/schengen-visas" className="nav-link" onClick={() => setExpanded(false)}>
                {t.nav.schengenVisas}
              </Link>
            </li>

            {/* Study Visas */}
            <li className="nav-item">
              <Link href="/study-visas" className="nav-link" onClick={() => setExpanded(false)}>
                {t.nav.studyVisas}
              </Link>
            </li>

            {/* Travel Visas */}
            <li className="nav-item">
              <Link href="/travel-visas" className="nav-link" onClick={() => setExpanded(false)}>
                {t.nav.travelVisas}
              </Link>
            </li>

            {/* Work Visas */}
            <li className="nav-item">
              <Link href="/work-visas" className="nav-link" onClick={() => setExpanded(false)}>
                {t.nav.workVisas}
              </Link>
            </li>

            {/* Programs */}
            <li className="nav-item">
              <Link href="/programs" className="nav-link" onClick={() => setExpanded(false)}>
                {t.nav.programs}
              </Link>
            </li>

            {/* Services */}
            <li className="nav-item">
              <Link href="/services" className="nav-link" onClick={() => setExpanded(false)}>
                {t.nav.services}
              </Link>
            </li>

            {/* Blog */}
            <li className="nav-item">
              <Link href="/blog" className="nav-link" onClick={() => setExpanded(false)}>
                {t.nav.blog}
              </Link>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <Link href="/contact" className="nav-link" onClick={() => setExpanded(false)}>
                {t.nav.contact}
              </Link>
            </li>

            {/* Language Switcher */}
            <li className="nav-item ms-3">
              <div className="lang-switcher">
                <button
                  className={`lang-btn ${locale === 'en' ? 'active' : ''}`}
                  onClick={() => setLocale('en')}
                >
                  EN
                </button>
                <button
                  className={`lang-btn ${locale === 'ar' ? 'active' : ''}`}
                  onClick={() => setLocale('ar')}
                >
                  AR
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
