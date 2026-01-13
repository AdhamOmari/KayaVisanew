'use client';

import { useI18n } from '@/lib/i18n';
import { useState, useEffect } from 'react';
import '@/styles/footer-pages.css';

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
      <div className="footer-loading">
        <div className="footer-spinner"></div>
      </div>
    );
  }

  return (
    <div dir={dir} className="footer-page">
      {/* Hero with integrated search */}
      <section className="faq-hero-section">
        <div className="faq-hero-container">
          <div className="faq-hero-badge">
            <i className="fas fa-headset"></i>
            <span>{locale === 'ar' ? 'دعم العملاء' : 'Customer Support'}</span>
          </div>
          <h1 className="faq-hero-title">
            {locale === 'ar' ? 'مركز المساعدة' : 'Help Center'}
          </h1>
          <p className="faq-hero-subtitle">
            {locale === 'ar' ? 'ابحث عن إجابات سريعة لأسئلتك أو تواصل مع فريق الدعم' : 'Find quick answers to your questions or contact our support team'}
          </p>
          
          <div className="faq-search-wrapper">
            <i className="fas fa-search faq-search-icon" style={{ left: dir === 'rtl' ? 'auto' : '25px', right: dir === 'rtl' ? '25px' : 'auto' }}></i>
            <input
              type="text"
              placeholder={locale === 'ar' ? 'ابحث في الأسئلة الشائعة...' : 'Search frequently asked questions...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="faq-search-input"
              style={{ paddingLeft: dir === 'rtl' ? '60px' : '60px', paddingRight: dir === 'rtl' ? '60px' : '60px' }}
            />
          </div>
          
          <div className="faq-stats">
            <div className="faq-stat-item">
              <i className="fas fa-question-circle"></i>
              <span className="faq-stat-number">{faqs.length}+</span>
              <span className="faq-stat-label">{locale === 'ar' ? 'سؤال شائع' : 'Questions'}</span>
            </div>
            <div className="faq-stat-item">
              <i className="fas fa-clock"></i>
              <span className="faq-stat-number">&lt;2</span>
              <span className="faq-stat-label">{locale === 'ar' ? 'دقيقة متوسط' : 'Min Avg Response'}</span>
            </div>
            <div className="faq-stat-item">
              <i className="fas fa-users"></i>
              <span className="faq-stat-number">24/7</span>
              <span className="faq-stat-label">{locale === 'ar' ? 'دعم متاح' : 'Support Available'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="faq-content-section">
        <div className="faq-content-container">
          <div className="faq-section-header">
            <h2>{locale === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</h2>
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="faq-empty-state">
              <div className="empty-state-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>{locale === 'ar' ? 'لم يتم العثور على نتائج' : 'No results found'}</h3>
              <p>{locale === 'ar' ? 'حاول البحث بكلمات مفتاحية أخرى' : 'Try searching with different keywords'}</p>
            </div>
          ) : (
            <div className="faq-list">
              {filteredFaqs.map((faq, index) => (
                <div key={faq.id} className="faq-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="faq-question-header"
                  >
                    <div className="faq-question-content">
                      <div className="faq-category-label">
                        {faq.category[locale as keyof typeof faq.category]}
                      </div>
                      <h3 className="faq-question-text">
                        {faq.question[locale as keyof typeof faq.question]}
                      </h3>
                    </div>
                    <div className={`faq-toggle-icon ${openId === faq.id ? 'open' : ''}`}>
                      <i className="fas fa-plus"></i>
                    </div>
                  </button>
                  {openId === faq.id && (
                    <div className="faq-answer">
                      <div className="faq-answer-content">
                        <i className="fas fa-check-circle faq-answer-icon"></i>
                        <p>{faq.answer[locale as keyof typeof faq.answer]}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="faq-cta-section">
        <div className="faq-cta-container">
          <div className="faq-cta-content">
            <div className="faq-cta-icon">
              <i className="fas fa-comments"></i>
            </div>
            <h2>{locale === 'ar' ? 'لم تجد إجابتك؟' : "Still have questions?"}</h2>
            <p>{locale === 'ar' ? 'فريق الدعم المتخصص لدينا متاح على مدار الساعة لمساعدتك' : 'Our dedicated support team is available 24/7 to help you'}</p>
            <div className="faq-cta-buttons">
              <a href="/contact" className="faq-cta-button primary">
                <i className="fas fa-envelope"></i>
                <span>{locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}</span>
              </a>
              <a href="tel:+1234567890" className="faq-cta-button secondary">
                <i className="fas fa-phone-alt"></i>
                <span>{locale === 'ar' ? 'اتصل بنا' : 'Call Us'}</span>
              </a>
            </div>
          </div>
          <div className="faq-cta-features">
            <div className="faq-feature">
              <i className="fas fa-bolt"></i>
              <div>
                <strong>{locale === 'ar' ? 'استجابة سريعة' : 'Fast Response'}</strong>
                <span>{locale === 'ar' ? 'رد خلال ساعتين' : 'Reply within 2 hours'}</span>
              </div>
            </div>
            <div className="faq-feature">
              <i className="fas fa-shield-alt"></i>
              <div>
                <strong>{locale === 'ar' ? 'دعم موثوق' : 'Reliable Support'}</strong>
                <span>{locale === 'ar' ? 'فريق محترف' : 'Professional team'}</span>
              </div>
            </div>
            <div className="faq-feature">
              <i className="fas fa-globe"></i>
              <div>
                <strong>{locale === 'ar' ? 'دعم متعدد اللغات' : 'Multilingual'}</strong>
                <span>{locale === 'ar' ? 'عربي وإنجليزي' : 'Arabic & English'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
