'use client';

import { useI18n } from '@/lib/i18n';
import { useState, useEffect } from 'react';
import '@/styles/admin-footer.css';

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
      <div className="loading-container">
        <div className="spinner" />
      </div>
    );
  }

  return (
    <div dir={dir} className="admin-footer-page">
      <div className="admin-container">
        {/* Header */}
        <div className="admin-header">
          <div className="admin-header-content">
            <h1>
              <i className="fas fa-cog admin-header-icon"></i>
              {locale === 'ar' ? 'إدارة محتوى الموقع' : 'Manage Site Content'}
            </h1>
            <p>
              {locale === 'ar' ? 'تحرير الشروط والأحكام، سياسة الخصوصية، والأسئلة الشائعة' : 'Edit Terms, Privacy Policy, and FAQs'}
            </p>
          </div>
          <button
            onClick={saveContent}
            disabled={saving}
            className="save-button"
          >
            <i className={`fas fa-${saving ? 'spinner fa-spin' : 'save'}`}></i>
            {saving ? (locale === 'ar' ? 'جارٍ الحفظ...' : 'Saving...') : (locale === 'ar' ? 'حفظ التغييرات' : 'Save Changes')}
          </button>
        </div>

        {/* Tabs */}
        <div className="admin-tabs">
          {(['terms', 'privacy', 'faq'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`admin-tab ${activeTab === tab ? 'active' : ''}`}
            >
              {tab === 'terms' && (locale === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions')}
              {tab === 'privacy' && (locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy')}
              {tab === 'faq' && (locale === 'ar' ? 'الأسئلة الشائعة' : 'FAQ')}
            </button>
          ))}
        </div>

        {/* Terms Tab */}
        {activeTab === 'terms' && termsData && (
          <div className="admin-content-card">
            <div className="content-grid">
              {/* English */}
              <div className="content-section">
                <h3><i className="fas fa-flag"></i> English Content</h3>
                
                <div className="form-group">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    value={termsData.en.title}
                    onChange={(e) => setTermsData({ ...termsData, en: { ...termsData.en, title: e.target.value } })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subtitle</label>
                  <input
                    type="text"
                    value={termsData.en.subtitle}
                    onChange={(e) => setTermsData({ ...termsData, en: { ...termsData.en, subtitle: e.target.value } })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Introduction</label>
                  <textarea
                    value={termsData.en.intro}
                    onChange={(e) => setTermsData({ ...termsData, en: { ...termsData.en, intro: e.target.value } })}
                    rows={4}
                    className="form-textarea"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Summary</label>
                  <textarea
                    value={termsData.en.summary}
                    onChange={(e) => setTermsData({ ...termsData, en: { ...termsData.en, summary: e.target.value } })}
                    rows={3}
                    className="form-textarea"
                  />
                </div>
              </div>

              {/* Arabic */}
              <div className="content-section" dir="rtl">
                <h3><i className="fas fa-flag"></i> المحتوى العربي</h3>
                
                <div className="form-group">
                  <label className="form-label">العنوان</label>
                  <input
                    type="text"
                    value={termsData.ar.title}
                    onChange={(e) => setTermsData({ ...termsData, ar: { ...termsData.ar, title: e.target.value } })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">العنوان الفرعي</label>
                  <input
                    type="text"
                    value={termsData.ar.subtitle}
                    onChange={(e) => setTermsData({ ...termsData, ar: { ...termsData.ar, subtitle: e.target.value } })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">المقدمة</label>
                  <textarea
                    value={termsData.ar.intro}
                    onChange={(e) => setTermsData({ ...termsData, ar: { ...termsData.ar, intro: e.target.value } })}
                    rows={4}
                    className="form-textarea"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">الملخص</label>
                  <textarea
                    value={termsData.ar.summary}
                    onChange={(e) => setTermsData({ ...termsData, ar: { ...termsData.ar, summary: e.target.value } })}
                    rows={3}
                    className="form-textarea"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Privacy Tab */}
        {activeTab === 'privacy' && privacyData && (
          <div className="admin-content-card">
            <div className="content-grid">
              {/* English */}
              <div className="content-section">
                <h3><i className="fas fa-flag"></i> English Content</h3>
                
                <div className="form-group">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    value={privacyData.en.title}
                    onChange={(e) => setPrivacyData({ ...privacyData, en: { ...privacyData.en, title: e.target.value } })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Introduction</label>
                  <textarea
                    value={privacyData.en.intro}
                    onChange={(e) => setPrivacyData({ ...privacyData, en: { ...privacyData.en, intro: e.target.value } })}
                    rows={4}
                    className="form-textarea"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Closing Statement</label>
                  <textarea
                    value={privacyData.en.closing}
                    onChange={(e) => setPrivacyData({ ...privacyData, en: { ...privacyData.en, closing: e.target.value } })}
                    rows={3}
                    className="form-textarea"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Tagline</label>
                  <input
                    type="text"
                    value={privacyData.en.tagline}
                    onChange={(e) => setPrivacyData({ ...privacyData, en: { ...privacyData.en, tagline: e.target.value } })}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Arabic */}
              <div className="content-section" dir="rtl">
                <h3><i className="fas fa-flag"></i> المحتوى العربي</h3>
                
                <div className="form-group">
                  <label className="form-label">العنوان</label>
                  <input
                    type="text"
                    value={privacyData.ar.title}
                    onChange={(e) => setPrivacyData({ ...privacyData, ar: { ...privacyData.ar, title: e.target.value } })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">المقدمة</label>
                  <textarea
                    value={privacyData.ar.intro}
                    onChange={(e) => setPrivacyData({ ...privacyData, ar: { ...privacyData.ar, intro: e.target.value } })}
                    rows={4}
                    className="form-textarea"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">البيان الختامي</label>
                  <textarea
                    value={privacyData.ar.closing}
                    onChange={(e) => setPrivacyData({ ...privacyData, ar: { ...privacyData.ar, closing: e.target.value } })}
                    rows={3}
                    className="form-textarea"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">الشعار</label>
                  <input
                    type="text"
                    value={privacyData.ar.tagline}
                    onChange={(e) => setPrivacyData({ ...privacyData, ar: { ...privacyData.ar, tagline: e.target.value } })}
                    className="form-input"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="admin-content-card">
            <div className="faq-header">
              <h3>
                <i className="fas fa-question-circle"></i>
                {locale === 'ar' ? 'إدارة الأسئلة الشائعة' : 'Manage FAQs'}
              </h3>
              <button
                onClick={handleAddFaq}
                className="add-faq-button"
              >
                <i className="fas fa-plus"></i>
                {locale === 'ar' ? 'إضافة سؤال' : 'Add FAQ'}
              </button>
            </div>

            <div style={{ display: 'grid', gap: '20px' }}>
              {faqData.map((faq) => (
                <div key={faq.id} className="faq-card">
                  <div className="faq-card-content">
                    <div className="faq-card-text">
                      <div className="faq-category">
                        {faq.category[locale as keyof typeof faq.category]}
                      </div>
                      <div className="faq-question">
                        {faq.question[locale as keyof typeof faq.question]}
                      </div>
                      <div className="faq-answer">
                        {faq.answer[locale as keyof typeof faq.answer]}
                      </div>
                    </div>
                    <div className="faq-actions">
                      <button
                        onClick={() => handleEditFaq(faq)}
                        className="edit-button"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        onClick={() => handleDeleteFaq(faq.id)}
                        className="delete-button"
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
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-header">
              <i className="fas fa-edit"></i>
              {editingFaq.question.en ? (locale === 'ar' ? 'تحرير السؤال' : 'Edit FAQ') : (locale === 'ar' ? 'سؤال جديد' : 'New FAQ')}
            </h3>

            <div className="content-grid">
              {/* English */}
              <div className="content-section">
                <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '20px', color: '#1c3269' }}>English</h4>
                
                <div className="form-group">
                  <label className="form-label">Category</label>
                  <input
                    type="text"
                    value={editingFaq.category.en}
                    onChange={(e) => setEditingFaq({ ...editingFaq, category: { ...editingFaq.category, en: e.target.value } })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Question</label>
                  <input
                    type="text"
                    value={editingFaq.question.en}
                    onChange={(e) => setEditingFaq({ ...editingFaq, question: { ...editingFaq.question, en: e.target.value } })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Answer</label>
                  <textarea
                    value={editingFaq.answer.en}
                    onChange={(e) => setEditingFaq({ ...editingFaq, answer: { ...editingFaq.answer, en: e.target.value } })}
                    rows={6}
                    className="form-textarea"
                  />
                </div>
              </div>

              {/* Arabic */}
              <div className="content-section" dir="rtl">
                <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '20px', color: '#1c3269' }}>العربية</h4>
                
                <div className="form-group">
                  <label className="form-label">الفئة</label>
                  <input
                    type="text"
                    value={editingFaq.category.ar}
                    onChange={(e) => setEditingFaq({ ...editingFaq, category: { ...editingFaq.category, ar: e.target.value } })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">السؤال</label>
                  <input
                    type="text"
                    value={editingFaq.question.ar}
                    onChange={(e) => setEditingFaq({ ...editingFaq, question: { ...editingFaq.question, ar: e.target.value } })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">الإجابة</label>
                  <textarea
                    value={editingFaq.answer.ar}
                    onChange={(e) => setEditingFaq({ ...editingFaq, answer: { ...editingFaq.answer, ar: e.target.value } })}
                    rows={6}
                    className="form-textarea"
                  />
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <button onClick={() => setShowModal(false)} className="cancel-button">
                {locale === 'ar' ? 'إلغاء' : 'Cancel'}
              </button>
              <button onClick={handleSaveFaq} className="save-modal-button">
                <i className="fas fa-save"></i>
                {locale === 'ar' ? 'حفظ' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
