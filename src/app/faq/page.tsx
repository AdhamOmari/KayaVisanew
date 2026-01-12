'use client';

import { useI18n } from '@/lib/i18n';
import { useState, useEffect } from 'react';

interface FAQ {
  id: string;
  category: { en: string; ar: string };
  question: { en: string; ar: string };
  answer: { en: string; ar: string };
}

export default function FAQPage() {
  const { locale, dir } = useI18n();
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/footer');
      const data = await response.json();
      setFaqs(data.sections.faq || []);
    } catch (error) {
      console.error('Error fetching FAQ:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredFaqs = faqs.filter(faq => {
    const question = faq.question[locale as keyof typeof faq.question].toLowerCase();
    const answer = faq.answer[locale as keyof typeof faq.answer].toLowerCase();
    return question.includes(searchTerm.toLowerCase()) || answer.includes(searchTerm.toLowerCase());
  });

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

  return (
    <div dir={dir} style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)', color: 'white', padding: '100px 20px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>
            <i className="fas fa-question-circle"></i>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '15px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            {locale === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.95 }}>
            {locale === 'ar' ? 'نجيب على أسئلتك الأكثر شيوعاً' : 'Answers to your most common questions'}
          </p>
        </div>
      </section>

      {/* Search */}
      <section style={{ padding: '40px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder={locale === 'ar' ? 'ابحث في الأسئلة...' : 'Search questions...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 50px 16px 20px',
                fontSize: '1.1rem',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                outline: 'none',
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
            <i className="fas fa-search" style={{ position: 'absolute', right: dir === 'rtl' ? 'auto' : '20px', left: dir === 'rtl' ? '20px' : 'auto', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', fontSize: '1.2rem' }}></i>
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section style={{ padding: '20px 20px 80px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {filteredFaqs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#9ca3af' }}>
              <i className="fas fa-search" style={{ fontSize: '3rem', marginBottom: '20px' }}></i>
              <p style={{ fontSize: '1.2rem' }}>
                {locale === 'ar' ? 'لم يتم العثور على نتائج' : 'No results found'}
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                style={{
                  marginBottom: '20px',
                  backgroundColor: '#f7fafc',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '2px solid',
                  borderColor: openId === faq.id ? '#667eea' : '#e2e8f0',
                  transition: 'all 0.3s',
                }}
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  style={{
                    width: '100%',
                    padding: '24px',
                    border: 'none',
                    background: 'transparent',
                    textAlign: dir === 'rtl' ? 'right' : 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.85rem', color: '#667eea', fontWeight: '600', marginBottom: '8px' }}>
                      {faq.category[locale as keyof typeof faq.category]}
                    </div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#1a202c' }}>
                      {faq.question[locale as keyof typeof faq.question]}
                    </div>
                  </div>
                  <i
                    className={`fas fa-chevron-${openId === faq.id ? 'up' : 'down'}`}
                    style={{
                      fontSize: '1.2rem',
                      color: '#667eea',
                      transition: 'transform 0.3s',
                    }}
                  ></i>
                </button>
                {openId === faq.id && (
                  <div
                    style={{
                      padding: '0 24px 24px',
                      fontSize: '1.05rem',
                      lineHeight: '1.8',
                      color: '#48bb78',
                      animation: 'fadeIn 0.3s',
                    }}
                  >
                    <style jsx>{`
                      @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                      }
                    `}</style>
                    {faq.answer[locale as keyof typeof faq.answer]}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '60px 20px', background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '20px' }}>
            {locale === 'ar' ? 'لم تجد إجابتك؟' : "Didn't find your answer?"}
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.95 }}>
            {locale === 'ar' ? 'فريقنا جاهز للإجابة على جميع استفساراتك' : 'Our team is ready to answer all your questions'}
          </p>
          <a
            href="/contact"
            style={{
              padding: '16px 40px',
              backgroundColor: 'white',
              color: '#667eea',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <i className="fas fa-envelope"></i>
            {locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </a>
        </div>
      </section>
    </div>
  );
}
