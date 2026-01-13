'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import '../styles/notFound.css';

export default function NotFound() {
  const { t } = useI18n();

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-section">
          <h1 className="error-code">404</h1>
          <h2 className="error-title">{t.notFound.title}</h2>
          <p className="error-message">
            {t.notFound.message}
          </p>
        </div>

        <div className="plane-decoration">✈️</div>

        <Link href="/" className="home-button">
          <i className="bi bi-house-door-fill"></i>
          <span>{t.notFound.backHome}</span>
        </Link>

        <div className="suggestions">
          <p>{t.notFound.suggestions}</p>
          <div className="quick-links">
            <Link href="/services">{t.notFound.services}</Link>
            <Link href="/programs">{t.notFound.programs}</Link>
            <Link href="/contact">{t.notFound.contact}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
