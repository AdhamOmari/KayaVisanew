'use client';

import { useI18n } from '@/lib/i18n';
import { useState, useEffect } from 'react';
import '@/styles/footer-pages.css';

export default function TermsPage() {
  const { locale, dir } = useI18n();
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/footer');
      const data = await response.json();
      setContent(data.sections.terms[locale as keyof typeof data.sections.terms]);
    } catch (error) {
      console.error('Error fetching terms:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="footer-loading">
        <div className="footer-spinner" />
      </div>
    );
  }

  if (!content) return null;

  return (
    <div dir={dir} className="footer-page">
      {/* Hero */}
      <section className="footer-hero">
        <div className="footer-hero-content">
          <div className="footer-hero-icon">
            <i className="fas fa-file-contract"></i>
          </div>
          <h1>{content.title}</h1>
          <p className="footer-hero-subtitle">{content.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="footer-content">
        <div className="footer-content-container">
          <p className="footer-intro">{content.intro}</p>

          {/* What We Offer */}
          <div className="footer-section" style={{ '--section-index': 0 } as React.CSSProperties}>
            <h2 className="footer-section-title">
              <i className="fas fa-gift footer-section-icon"></i>
              {content.whatWeOffer.title}
            </h2>
            <ul className="footer-list">
              {content.whatWeOffer.items.map((item: string, idx: number) => (
                <li key={idx} className="footer-list-item">
                  <i className="fas fa-check-circle footer-list-icon"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Expect */}
          <div className="footer-section" style={{ '--section-index': 1 } as React.CSSProperties}>
            <h2 className="footer-section-title">
              <i className="fas fa-user-check footer-section-icon"></i>
              {content.whatWeExpect.title}
            </h2>
            <ul className="footer-list">
              {content.whatWeExpect.items.map((item: string, idx: number) => (
                <li key={idx} className="footer-list-item">
                  <i className="fas fa-check-circle footer-list-icon"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Liability */}
          <div className="footer-section" style={{ '--section-index': 2 } as React.CSSProperties}>
            <h2 className="footer-section-title">
              <i className="fas fa-shield-alt footer-section-icon"></i>
              {content.liability.title}
            </h2>
            <ul className="footer-list">
              {content.liability.items.map((item: string, idx: number) => (
                <li key={idx} className="footer-list-item">
                  <i className="fas fa-exclamation-triangle footer-list-icon"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Amendments */}
          <div className="footer-section" style={{ '--section-index': 3 } as React.CSSProperties}>
            <h2 className="footer-section-title">
              <i className="fas fa-edit footer-section-icon"></i>
              {content.amendments.title}
            </h2>
            <p style={{ fontSize: '1.08rem', lineHeight: '1.8', color: '#475569', padding: '15px', background: '#f8fafc', borderRadius: '10px' }}>
              {content.amendments.text}
            </p>
          </div>

          {/* Summary */}
          <div className="footer-summary">
            <p>{content.summary}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
