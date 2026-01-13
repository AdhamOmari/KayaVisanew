'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import '@/styles/contact.css';

const contactData = require('@/data/contact.json');

export default function ContactPage() {
  const { locale, dir } = useI18n();
  const data = contactData[locale];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visa_type: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setStatusMessage(data.form.success_message);
        setFormData({ name: '', email: '', phone: '', visa_type: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(result.error || data.form.error_message);
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage(data.form.error_message);
    }
  };

  return (
    <div dir={dir} className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-decorations">
          <i className="fas fa-plane hero-icon hero-icon-1"></i>
          <i className="fas fa-globe hero-icon hero-icon-2"></i>
          <i className="fas fa-passport hero-icon hero-icon-3"></i>
          <i className="fas fa-map-marked-alt hero-icon hero-icon-4"></i>
        </div>
        <div className="contact-hero-content">
          <h1>{data.hero.title}</h1>
          <p className="contact-hero-subtitle">{data.hero.subtitle}</p>
          <p className="contact-hero-description">{data.hero.description}</p>
        </div>
      </section>

      <div className="contact-container">
        <div className="contact-grid">
          {/* Contact Information - Left Side */}
          <div className="contact-sidebar">
            {/* Contact Info Cards */}
            <div>
              <h2 className="contact-info-title">{data.contact_info.title}</h2>

              {/* Phone */}
              <div className="contact-info-card">
                <div className="contact-info-header">
                  <div className="contact-info-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <strong className="contact-info-label">{data.contact_info.phone.label}</strong>
                </div>
                <a href={`tel:${data.contact_info.phone.link}`} className="contact-info-value">
                  {data.contact_info.phone.value}
                </a>
              </div>

              {/* Email */}
              <div className="contact-info-card">
                <div className="contact-info-header">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <strong className="contact-info-label">{data.contact_info.email.label}</strong>
                </div>
                <a href={`mailto:${data.contact_info.email.link}`} className="contact-info-value">
                  {data.contact_info.email.value}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="contact-info-card">
                <div className="contact-info-header">
                  <div className="contact-info-icon">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <strong className="contact-info-label">{data.contact_info.whatsapp.label}</strong>
                </div>
                <a 
                  href={`https://wa.me/${data.contact_info.whatsapp.link}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-value"
                >
                  {data.contact_info.whatsapp.value}
                </a>
              </div>

              {/* Address */}
              <div className="contact-info-card">
                <div className="contact-info-header">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <strong className="contact-info-label">{data.contact_info.address.label}</strong>
                </div>
                <p className="contact-info-text">{data.contact_info.address.value}</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="working-hours-card">
              <h3 className="working-hours-title">
                <i className="fas fa-clock"></i>
                {data.working_hours.title}
              </h3>
              {data.working_hours.schedule.map((item: any, index: number) => (
                <div key={index} className="working-hours-item">
                  <span className="working-hours-day">{item.days}:</span>
                  <span className="working-hours-time">{item.hours}</span>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="social-media-card">
              <h3 className="social-media-title">
                {data.social_media.title}
              </h3>
              <div className="social-media-links">
                {data.social_media.platforms.map((platform: any, index: number) => (
                  <a
                    key={index}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-media-link"
                  >
                    <i className={platform.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div>
            <div className="contact-form-card">
              <h2 className="contact-form-title">
                {data.form.title}
              </h2>
              <p className="contact-form-subtitle">
                {data.form.subtitle}
              </p>

              {status === 'success' && (
                <div className="status-message success">
                  <i className="fas fa-check-circle status-icon"></i>
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="status-message error">
                  <i className="fas fa-exclamation-circle status-icon"></i>
                  <span>{statusMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="form-group">
                  <label className="form-label">
                    {data.form.fields.name.label} <span className="required-asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={data.form.fields.name.placeholder}
                    required
                    className="form-control"
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label className="form-label">
                    {data.form.fields.email.label} <span className="required-asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={data.form.fields.email.placeholder}
                    required
                    className="form-control"
                  />
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label className="form-label">
                    {data.form.fields.phone.label} <span className="required-asterisk">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={data.form.fields.phone.placeholder}
                    required
                    className="form-control"
                  />
                </div>

                {/* Visa Type */}
                <div className="form-group">
                  <label className="form-label">
                    {data.form.fields.visa_type.label}
                  </label>
                  <select
                    name="visa_type"
                    value={formData.visa_type}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="">{data.form.fields.visa_type.placeholder}</option>
                    {data.form.fields.visa_type.options.map((option: string, index: number) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label className="form-label">
                    {data.form.fields.message.label} <span className="required-asterisk">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={data.form.fields.message.placeholder}
                    required
                    rows={6}
                    className="form-control"
                  />
                </div>

                {/* Privacy Note */}
                <div className="privacy-note">
                  <i className="fas fa-lock"></i>
                  <span>{data.form.privacy_note}</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="submit-button"
                >
                  {status === 'submitting' ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      {locale === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane" style={{ marginInlineEnd: '10px' }}></i>
                      {data.form.button}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Why Choose Kaya Section */}
        <section className="why-choose-section">
          <h2 className="section-title">{data.why_choose.title}</h2>
          <div className="why-choose-grid">
            {data.why_choose.reasons.map((reason: any, index: number) => (
              <div key={index} className="why-choose-card">
                <div className="why-choose-icon">
                  <i className={`fas ${reason.icon}`}></i>
                </div>
                <h3 className="why-choose-title">{reason.title}</h3>
                <p className="why-choose-description">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Message */}
        <section className="final-message-section">
          <h2 className="final-message-title">{data.final_message.title}</h2>
          <p className="final-message-description">{data.final_message.description}</p>
          <p className="final-message-cta">
            <i className="fas fa-rocket"></i>
            {data.final_message.cta}
          </p>
        </section>
      </div>

    </div>
  );
}
