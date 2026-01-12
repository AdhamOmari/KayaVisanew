'use client';

import { useI18n } from '@/lib/i18n';
import { useState, useEffect } from 'react';

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
      <section style={{ background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)', color: 'white', padding: '100px 20px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>
            <i className="fas fa-shield-alt"></i>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '15px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>{content.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '60px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#48bb78', marginBottom: '40px' }}>{content.intro}</p>

          {/* Commitment */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <i className="fas fa-handshake" style={{ color: '#48bb78' }}></i>
              {content.commitment.title}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {content.commitment.items.map((item: string, idx: number) => (
                <li key={idx} style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '1.05rem', color: '#48bb78' }}>
                  <i className="fas fa-check-circle" style={{ color: '#48bb78', fontSize: '1.3rem', marginTop: '3px' }}></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Usage */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <i className="fas fa-cogs" style={{ color: '#48bb78' }}></i>
              {content.usage.title}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {content.usage.items.map((item: string, idx: number) => (
                <li key={idx} style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '1.05rem', color: '#48bb78' }}>
                  <i className="fas fa-arrow-right" style={{ color: '#48bb78', fontSize: '1.1rem', marginTop: '5px' }}></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Protection */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <i className="fas fa-lock" style={{ color: '#48bb78' }}></i>
              {content.protection.title}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {content.protection.items.map((item: string, idx: number) => (
                <li key={idx} style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '1.05rem', color: '#48bb78' }}>
                  <i className="fas fa-shield-alt" style={{ color: '#48bb78', fontSize: '1.3rem', marginTop: '3px' }}></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Rights */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <i className="fas fa-balance-scale" style={{ color: '#48bb78' }}></i>
              {content.rights.title}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {content.rights.items.map((item: string, idx: number) => (
                <li key={idx} style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '1.05rem', color: '#48bb78' }}>
                  <i className="fas fa-check-circle" style={{ color: '#48bb78', fontSize: '1.3rem', marginTop: '3px' }}></i>
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

          {/* Closing */}
          <div style={{ padding: '30px', backgroundColor: '#f0fdf4', border: '2px solid #48bb78', borderRadius: '12px', marginTop: '40px' }}>
            <p style={{ fontSize: '1.15rem', fontWeight: '600', color: '#1a202c', marginBottom: '15px' }}>{content.closing}</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#48bb78', margin: 0 }}>{content.tagline}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
