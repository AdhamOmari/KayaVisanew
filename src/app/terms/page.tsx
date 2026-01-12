'use client';

import { useI18n } from '@/lib/i18n';
import { useState, useEffect } from 'react';

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
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '50px', height: '50px', border: '5px solid #f3f3f3', borderTop: '5px solid #667eea', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto' }} />
          <style jsx>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }}`}</style>
        </div>
      </div>
    );
  }

  if (!content) return null;

  return (
    <div dir={dir} style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)', color: 'white', padding: '100px 20px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '15px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>{content.title}</h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.95 }}>{content.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '60px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#48bb78', marginBottom: '40px' }}>{content.intro}</p>

          {/* What We Offer */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '20px' }}>{content.whatWeOffer.title}</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {content.whatWeOffer.items.map((item: string, idx: number) => (
                <li key={idx} style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '1.05rem', color: '#48bb78' }}>
                  <i className="fas fa-check-circle" style={{ color: '#667eea', fontSize: '1.3rem', marginTop: '3px' }}></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Expect */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '20px' }}>{content.whatWeExpect.title}</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {content.whatWeExpect.items.map((item: string, idx: number) => (
                <li key={idx} style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '1.05rem', color: '#48bb78' }}>
                  <i className="fas fa-check-circle" style={{ color: '#667eea', fontSize: '1.3rem', marginTop: '3px' }}></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Liability */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '20px' }}>{content.liability.title}</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {content.liability.items.map((item: string, idx: number) => (
                <li key={idx} style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '1.05rem', color: '#48bb78' }}>
                  <i className="fas fa-exclamation-triangle" style={{ color: '#667eea', fontSize: '1.3rem', marginTop: '3px' }}></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Amendments */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '20px' }}>{content.amendments.title}</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#48bb78' }}>{content.amendments.text}</p>
          </div>

          {/* Summary */}
          <div style={{ padding: '30px', backgroundColor: '#f7fafc', borderLeft: '4px solid #667eea', borderRadius: '8px', marginTop: '40px' }}>
            <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#1a202c', margin: 0 }}>{content.summary}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
