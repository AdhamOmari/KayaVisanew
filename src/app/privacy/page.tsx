'use client';

import { useI18n } from '@/lib/i18n';
import { useState, useEffect } from 'react';
import '@/styles/footer-pages.css';

export default function PrivacyPage() {
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
      setContent(data.sections.privacy[locale as keyof typeof data.sections.privacy]);
    } catch (error) {
      console.error('Error fetching privacy:', error);
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
            <i className="fas fa-shield-alt"></i>
          </div>
          <h1>{content.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="footer-content">
        <div className="footer-content-container">
          <p className="footer-intro">{content.intro}</p>

          {/* Commitment */}
          <div className="footer-section" style={{ '--section-index': 0 } as React.CSSProperties}>
            <h2 className="footer-section-title">
              <i className="fas fa-handshake footer-section-icon"></i>
              {content.commitment.title}
            </h2>
            <ul className="footer-list">
              {content.commitment.items.map((item: string, idx: number) => (
                <li key={idx} className="footer-list-item">
                  <i className="fas fa-check-circle footer-list-icon"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Usage */}
          <div className="footer-section" style={{ '--section-index': 1 } as React.CSSProperties}>
            <h2 className="footer-section-title">
              <i className="fas fa-cogs footer-section-icon"></i>
              {content.usage.title}
            </h2>
            <ul className="footer-list">
              {content.usage.items.map((item: string, idx: number) => (
                <li key={idx} className="footer-list-item">
                  <i className="fas fa-arrow-right footer-list-icon"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Protection */}
          <div className="footer-section" style={{ '--section-index': 2 } as React.CSSProperties}>
            <h2 className="footer-section-title">
              <i className="fas fa-lock footer-section-icon"></i>
              {content.protection.title}
            </h2>
            <ul className="footer-list">
              {content.protection.items.map((item: string, idx: number) => (
                <li key={idx} className="footer-list-item">
                  <i className="fas fa-shield-alt footer-list-icon"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Rights */}
          <div className="footer-section" style={{ '--section-index': 3 } as React.CSSProperties}>
            <h2 className="footer-section-title">
              <i className="fas fa-balance-scale footer-section-icon"></i>
              {content.rights.title}
            </h2>
            <ul className="footer-list">
              {content.rights.items.map((item: string, idx: number) => (
                <li key={idx} className="footer-list-item">
                  <i className="fas fa-check-circle footer-list-icon"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Amendments */}
          <div className="footer-section" style={{ '--section-index': 4 } as React.CSSProperties}>
            <h2 className="footer-section-title">
              <i className="fas fa-edit footer-section-icon"></i>
              {content.amendments.title}
            </h2>
            <p style={{ fontSize: '1.08rem', lineHeight: '1.8', color: '#475569', padding: '15px', background: '#f8fafc', borderRadius: '10px' }}>
              {content.amendments.text}
            </p>
          </div>

          {/* Closing */}
          <div className="footer-summary">
            <p style={{ marginBottom: '15px' }}>{content.closing}</p>
            <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#e2bc42', margin: 0 }}>{content.tagline}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
