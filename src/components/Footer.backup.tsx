'use client'

import { useI18n } from '@/lib/i18n'
import Link from 'next/link'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* About */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>{t.footer.about}</h5>
            <p className="text-light opacity-75">{t.footer.aboutText}</p>
            <div className="social-icons mt-3">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>{t.footer.quickLinks}</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/">{t.nav.home}</Link></li>
              <li className="mb-2"><Link href="/second-citizenship">{t.nav.secondCitizenship}</Link></li>
              <li className="mb-2"><Link href="/usa-visas">{t.nav.usaVisas}</Link></li>
              <li className="mb-2"><Link href="/schengen-visas">{t.nav.schengenVisas}</Link></li>
              <li className="mb-2"><Link href="/programs">{t.nav.programs}</Link></li>
              <li className="mb-2"><Link href="/services">{t.nav.services}</Link></li>
              <li className="mb-2"><Link href="/blog">{t.nav.blog}</Link></li>
              <li className="mb-2"><Link href="/contact">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>{t.nav.services}</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/services#translation">{t.services.translation}</Link></li>
              <li className="mb-2"><Link href="/services#flight">{t.services.flightBooking}</Link></li>
              <li className="mb-2"><Link href="/services#hotel">{t.services.hotelBooking}</Link></li>
              <li className="mb-2"><Link href="/services#motivation">{t.services.motivationLetter}</Link></li>
              <li className="mb-2"><Link href="/services#insurance">{t.services.travelInsurance}</Link></li>
              <li className="mb-2"><Link href="/partners">{t.nav.partners}</Link></li>
              <li className="mb-2"><Link href="/team">{t.nav.team}</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>{t.footer.newsletter}</h5>
            <p className="text-light opacity-75">{t.footer.newsletterText}</p>
            <form className="mt-3">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder={t.footer.emailPlaceholder}
                />
                <button className="btn btn-secondary" type="submit">
                  {t.footer.subscribe}
                </button>
              </div>
            </form>
            <div className="mt-4">
              <h6>{t.footer.contactInfo}</h6>
              <p className="text-light opacity-75 mb-1">
                <i className="bi bi-envelope me-2"></i>
                info@kayatravel.com
              </p>
              <p className="text-light opacity-75 mb-1">
                <i className="bi bi-phone me-2"></i>
                +1 (555) 123-4567
              </p>
              <p className="text-light opacity-75">
                <i className="bi bi-geo-alt me-2"></i>
                123 Travel Street, Business District
              </p>
            </div>
          </div>
        </div>

        <hr style={{borderColor: 'rgba(255,255,255,0.1)'}} />

        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-light opacity-75">
              &copy; 2025 Kaya Travel Agency. {t.footer.allRightsReserved}
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link href="/privacy" className="text-light opacity-75 me-3">{t.footer.privacyPolicy}</Link>
            <Link href="/terms" className="text-light opacity-75">{t.footer.terms}</Link>
          </div>
        </div>
      </div>

      {/* Bootstrap Icons CDN */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    </footer>
  )
}
