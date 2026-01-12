'use client';

import { useI18n } from '@/lib/i18n';
import { useState, useEffect } from 'react';

interface FAQ {
  id: string;
  category: { en: string; ar: string };
  question: { en: string; ar: string };
  answer: { en: string; ar: string };
}

export default function AdminFooterPage() {
  const { locale, dir } = useI18n();
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy' | 'faq'>('terms');
  const [termsData, setTermsData] = useState<any>(null);
  const [privacyData, setPrivacyData] = useState<any>(null);
  const [faqData, setFaqData] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/footer');
      const data = await response.json();
      setTermsData(data.sections.terms);
      setPrivacyData(data.sections.privacy);
      setFaqData(data.sections.faq || []);
    } catch (error) {
      console.error('Error fetching footer content:', error);
      alert('Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  const saveContent = async () => {
    setSaving(true);
    try {
      const response = await fetch('/api/footer', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sections: {
            terms: termsData,
            privacy: privacyData,
            faq: faqData,
          },
        }),
      });

      if (response.ok) {
        alert('Content saved successfully!');
      } else {
        alert('Failed to save content');
      }
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Error saving content');
    } finally {
      setSaving(false);
    }
  };

  const handleAddFaq = () => {
    setEditingFaq({
      id: Date.now().toString(),
      category: { en: '', ar: '' },
      question: { en: '', ar: '' },
      answer: { en: '', ar: '' },
    });
    setShowModal(true);
  };

  const handleEditFaq = (faq: FAQ) => {
    setEditingFaq({ ...faq });
    setShowModal(true);
  };

  const handleSaveFaq = () => {
    if (!editingFaq) return;

    const exists = faqData.find((f) => f.id === editingFaq.id);
    if (exists) {
      setFaqData(faqData.map((f) => (f.id === editingFaq.id ? editingFaq : f)));
    } else {
      setFaqData([...faqData, editingFaq]);
    }
    setShowModal(false);
    setEditingFaq(null);
  };

  const handleDeleteFaq = (id: string) => {
    if (confirm('Are you sure you want to delete this FAQ?')) {
      setFaqData(faqData.filter((f) => f.id !== id));
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

  return (
    <div dir={dir} style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '10px' }}>
              <i className="fas fa-cog" style={{ color: '#667eea', marginRight: dir === 'rtl' ? '0' : '15px', marginLeft: dir === 'rtl' ? '15px' : '0' }}></i>
              {locale === 'ar' ? 'إدارة محتوى الموقع' : 'Manage Site Content'}
            </h1>
            <p style={{ color: '#718096', fontSize: '1.1rem' }}>
              {locale === 'ar' ? 'تحرير الشروط والأحكام، سياسة الخصوصية، والأسئلة الشائعة' : 'Edit Terms, Privacy Policy, and FAQs'}
            </p>
          </div>
          <button
            onClick={saveContent}
            disabled={saving}
            style={{
              padding: '14px 35px',
              background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: saving ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.3s',
              opacity: saving ? 0.7 : 1,
            }}
            onMouseEnter={(e) => !saving && (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <i className={`fas fa-${saving ? 'spinner fa-spin' : 'save'}`}></i>
            {saving ? (locale === 'ar' ? 'جارٍ الحفظ...' : 'Saving...') : (locale === 'ar' ? 'حفظ التغييرات' : 'Save Changes')}
          </button>
        </div>

        {/* Tabs */}
        <div style={{ marginBottom: '30px', display: 'flex', gap: '10px', borderBottom: '2px solid #e2e8f0' }}>
          {(['terms', 'privacy', 'faq'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '15px 30px',
                border: 'none',
                background: 'transparent',
                color: activeTab === tab ? '#667eea' : '#718096',
                fontWeight: activeTab === tab ? 'bold' : 'normal',
                fontSize: '1.1rem',
                cursor: 'pointer',
                borderBottom: activeTab === tab ? '3px solid #667eea' : 'none',
                transition: 'all 0.3s',
              }}
            >
              {tab === 'terms' && (locale === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions')}
              {tab === 'privacy' && (locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy')}
              {tab === 'faq' && (locale === 'ar' ? 'الأسئلة الشائعة' : 'FAQ')}
            </button>
          ))}
        </div>

        {/* Terms Tab */}
        {activeTab === 'terms' && termsData && (
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              {/* English */}
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#1a202c' }}>English Content</h3>
                
                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>Title</div>
                  <input
                    type="text"
                    value={termsData.en.title}
                    onChange={(e) => setTermsData({ ...termsData, en: { ...termsData.en, title: e.target.value } })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </label>

                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>Subtitle</div>
                  <input
                    type="text"
                    value={termsData.en.subtitle}
                    onChange={(e) => setTermsData({ ...termsData, en: { ...termsData.en, subtitle: e.target.value } })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </label>

                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>Introduction</div>
                  <textarea
                    value={termsData.en.intro}
                    onChange={(e) => setTermsData({ ...termsData, en: { ...termsData.en, intro: e.target.value } })}
                    rows={4}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit' }}
                  />
                </label>

                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>Summary</div>
                  <textarea
                    value={termsData.en.summary}
                    onChange={(e) => setTermsData({ ...termsData, en: { ...termsData.en, summary: e.target.value } })}
                    rows={3}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit' }}
                  />
                </label>
              </div>

              {/* Arabic */}
              <div dir="rtl">
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#1a202c' }}>المحتوى العربي</h3>
                
                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>العنوان</div>
                  <input
                    type="text"
                    value={termsData.ar.title}
                    onChange={(e) => setTermsData({ ...termsData, ar: { ...termsData.ar, title: e.target.value } })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </label>

                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>العنوان الفرعي</div>
                  <input
                    type="text"
                    value={termsData.ar.subtitle}
                    onChange={(e) => setTermsData({ ...termsData, ar: { ...termsData.ar, subtitle: e.target.value } })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </label>

                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>المقدمة</div>
                  <textarea
                    value={termsData.ar.intro}
                    onChange={(e) => setTermsData({ ...termsData, ar: { ...termsData.ar, intro: e.target.value } })}
                    rows={4}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit' }}
                  />
                </label>

                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>الملخص</div>
                  <textarea
                    value={termsData.ar.summary}
                    onChange={(e) => setTermsData({ ...termsData, ar: { ...termsData.ar, summary: e.target.value } })}
                    rows={3}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit' }}
                  />
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Privacy Tab */}
        {activeTab === 'privacy' && privacyData && (
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              {/* English */}
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#1a202c' }}>English Content</h3>
                
                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>Title</div>
                  <input
                    type="text"
                    value={privacyData.en.title}
                    onChange={(e) => setPrivacyData({ ...privacyData, en: { ...privacyData.en, title: e.target.value } })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </label>

                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>Introduction</div>
                  <textarea
                    value={privacyData.en.intro}
                    onChange={(e) => setPrivacyData({ ...privacyData, en: { ...privacyData.en, intro: e.target.value } })}
                    rows={4}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit' }}
                  />
                </label>

                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>Closing Statement</div>
                  <textarea
                    value={privacyData.en.closing}
                    onChange={(e) => setPrivacyData({ ...privacyData, en: { ...privacyData.en, closing: e.target.value } })}
                    rows={3}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit' }}
                  />
                </label>

                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>Tagline</div>
                  <input
                    type="text"
                    value={privacyData.en.tagline}
                    onChange={(e) => setPrivacyData({ ...privacyData, en: { ...privacyData.en, tagline: e.target.value } })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </label>
              </div>

              {/* Arabic */}
              <div dir="rtl">
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#1a202c' }}>المحتوى العربي</h3>
                
                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>العنوان</div>
                  <input
                    type="text"
                    value={privacyData.ar.title}
                    onChange={(e) => setPrivacyData({ ...privacyData, ar: { ...privacyData.ar, title: e.target.value } })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </label>

                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>المقدمة</div>
                  <textarea
                    value={privacyData.ar.intro}
                    onChange={(e) => setPrivacyData({ ...privacyData, ar: { ...privacyData.ar, intro: e.target.value } })}
                    rows={4}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit' }}
                  />
                </label>

                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>البيان الختامي</div>
                  <textarea
                    value={privacyData.ar.closing}
                    onChange={(e) => setPrivacyData({ ...privacyData, ar: { ...privacyData.ar, closing: e.target.value } })}
                    rows={3}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit' }}
                  />
                </label>

                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>الشعار</div>
                  <input
                    type="text"
                    value={privacyData.ar.tagline}
                    onChange={(e) => setPrivacyData({ ...privacyData, ar: { ...privacyData.ar, tagline: e.target.value } })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </label>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>
                {locale === 'ar' ? 'إدارة الأسئلة الشائعة' : 'Manage FAQs'}
              </h3>
              <button
                onClick={handleAddFaq}
                style={{
                  padding: '12px 25px',
                  background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <i className="fas fa-plus"></i>
                {locale === 'ar' ? 'إضافة سؤال' : 'Add FAQ'}
              </button>
            </div>

            <div style={{ display: 'grid', gap: '20px' }}>
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  style={{
                    padding: '20px',
                    backgroundColor: '#f7fafc',
                    borderRadius: '12px',
                    border: '2px solid #e2e8f0',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '20px' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.9rem', color: '#667eea', fontWeight: '600', marginBottom: '8px' }}>
                        {faq.category[locale as keyof typeof faq.category]}
                      </div>
                      <div style={{ fontSize: '1.15rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '8px' }}>
                        {faq.question[locale as keyof typeof faq.question]}
                      </div>
                      <div style={{ fontSize: '1rem', color: '#48bb78', lineHeight: '1.6' }}>
                        {faq.answer[locale as keyof typeof faq.answer]}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={() => handleEditFaq(faq)}
                        style={{
                          padding: '8px 16px',
                          backgroundColor: '#667eea',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#5568d3')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#667eea')}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        onClick={() => handleDeleteFaq(faq.id)}
                        style={{
                          padding: '8px 16px',
                          backgroundColor: '#f56565',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e53e3e')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f56565')}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FAQ Modal */}
      {showModal && editingFaq && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '40px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '30px', color: '#1a202c' }}>
              {editingFaq.question.en ? (locale === 'ar' ? 'تحرير السؤال' : 'Edit FAQ') : (locale === 'ar' ? 'سؤال جديد' : 'New FAQ')}
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
              {/* English */}
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '20px', color: '#1a202c' }}>English</h4>
                
                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>Category</div>
                  <input
                    type="text"
                    value={editingFaq.category.en}
                    onChange={(e) => setEditingFaq({ ...editingFaq, category: { ...editingFaq.category, en: e.target.value } })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </label>

                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>Question</div>
                  <input
                    type="text"
                    value={editingFaq.question.en}
                    onChange={(e) => setEditingFaq({ ...editingFaq, question: { ...editingFaq.question, en: e.target.value } })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </label>

                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>Answer</div>
                  <textarea
                    value={editingFaq.answer.en}
                    onChange={(e) => setEditingFaq({ ...editingFaq, answer: { ...editingFaq.answer, en: e.target.value } })}
                    rows={6}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit' }}
                  />
                </label>
              </div>

              {/* Arabic */}
              <div dir="rtl">
                <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '20px', color: '#1a202c' }}>العربية</h4>
                
                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>الفئة</div>
                  <input
                    type="text"
                    value={editingFaq.category.ar}
                    onChange={(e) => setEditingFaq({ ...editingFaq, category: { ...editingFaq.category, ar: e.target.value } })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </label>

                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>السؤال</div>
                  <input
                    type="text"
                    value={editingFaq.question.ar}
                    onChange={(e) => setEditingFaq({ ...editingFaq, question: { ...editingFaq.question, ar: e.target.value } })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </label>

                <label style={{ display: 'block', marginBottom: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: '#48bb78' }}>الإجابة</div>
                  <textarea
                    value={editingFaq.answer.ar}
                    onChange={(e) => setEditingFaq({ ...editingFaq, answer: { ...editingFaq.answer, ar: e.target.value } })}
                    rows={6}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit' }}
                  />
                </label>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  padding: '12px 30px',
                  backgroundColor: '#e2e8f0',
                  color: '#1a202c',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#cbd5e0')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e2e8f0')}
              >
                {locale === 'ar' ? 'إلغاء' : 'Cancel'}
              </button>
              <button
                onClick={handleSaveFaq}
                style={{
                  padding: '12px 30px',
                  background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                {locale === 'ar' ? 'حفظ' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
