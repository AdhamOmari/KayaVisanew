'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';

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
    <div dir={dir}>

      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0D9488 0%, #14B8A6 100%)',
        color: 'white',
        padding: '80px 0 60px',
        marginTop: '70px'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
            {data.hero.title}
          </h1>
          <p style={{ fontSize: '1.3rem', marginBottom: '15px', opacity: 0.95 }}>
            {data.hero.subtitle}
          </p>
          <p style={{ fontSize: '1.05rem', opacity: 0.9, maxWidth: '800px' }}>
            {data.hero.description}
          </p>
        </div>
      </section>

      <div className="container" style={{ marginTop: '60px', marginBottom: '60px' }}>
        <div className="row">
          {/* Contact Information - Left Side */}
          <div className="col-lg-4 mb-5">
            {/* Contact Info Cards */}
            <div style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '30px', color: '#1F2937' }}>
                {data.contact_info.title}
              </h2>

              {/* Phone */}
              <div style={{ 
                background: '#F3F4F6', 
                padding: '25px', 
                borderRadius: '12px',
                marginBottom: '20px',
                borderLeft: '4px solid #14B8A6'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <i className="fas fa-phone" style={{ color: '#14B8A6', fontSize: '1.5rem', marginInlineEnd: '15px' }}></i>
                  <strong style={{ color: '#1F2937' }}>{data.contact_info.phone.label}</strong>
                </div>
                <a href={`tel:${data.contact_info.phone.link}`} style={{ 
                  color: '#0D9488', 
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  display: 'block',
                  marginInlineStart: '40px'
                }}>
                  {data.contact_info.phone.value}
                </a>
              </div>

              {/* Email */}
              <div style={{ 
                background: '#F3F4F6', 
                padding: '25px', 
                borderRadius: '12px',
                marginBottom: '20px',
                borderLeft: '4px solid #F97316'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <i className="fas fa-envelope" style={{ color: '#F97316', fontSize: '1.5rem', marginInlineEnd: '15px' }}></i>
                  <strong style={{ color: '#1F2937' }}>{data.contact_info.email.label}</strong>
                </div>
                <a href={`mailto:${data.contact_info.email.link}`} style={{ 
                  color: '#EA580C', 
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  display: 'block',
                  marginInlineStart: '40px',
                  wordBreak: 'break-all'
                }}>
                  {data.contact_info.email.value}
                </a>
              </div>

              {/* WhatsApp */}
              <div style={{ 
                background: '#F3F4F6', 
                padding: '25px', 
                borderRadius: '12px',
                marginBottom: '20px',
                borderLeft: '4px solid #25D366'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <i className="fab fa-whatsapp" style={{ color: '#25D366', fontSize: '1.5rem', marginInlineEnd: '15px' }}></i>
                  <strong style={{ color: '#1F2937' }}>{data.contact_info.whatsapp.label}</strong>
                </div>
                <a 
                  href={`https://wa.me/${data.contact_info.whatsapp.link}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#25D366', 
                    fontSize: '1.1rem',
                    textDecoration: 'none',
                    display: 'block',
                    marginInlineStart: '40px'
                  }}
                >
                  {data.contact_info.whatsapp.value}
                </a>
              </div>

              {/* Address */}
              <div style={{ 
                background: '#F3F4F6', 
                padding: '25px', 
                borderRadius: '12px',
                borderLeft: '4px solid #8B5CF6'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <i className="fas fa-map-marker-alt" style={{ color: '#8B5CF6', fontSize: '1.5rem', marginInlineEnd: '15px' }}></i>
                  <strong style={{ color: '#1F2937' }}>{data.contact_info.address.label}</strong>
                </div>
                <p style={{ 
                  color: '#6B7280', 
                  fontSize: '1.1rem',
                  margin: 0,
                  marginInlineStart: '40px'
                }}>
                  {data.contact_info.address.value}
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div style={{ 
              background: '#FEF3C7', 
              padding: '25px', 
              borderRadius: '12px',
              marginBottom: '30px'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#92400E' }}>
                <i className="fas fa-clock" style={{ marginInlineEnd: '10px' }}></i>
                {data.working_hours.title}
              </h3>
              {data.working_hours.schedule.map((item: any, index: number) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                  <strong style={{ color: '#78350F' }}>{item.days}:</strong>
                  <span style={{ color: '#92400E', marginInlineStart: '10px' }}>{item.hours}</span>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#1F2937' }}>
                {data.social_media.title}
              </h3>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                {data.social_media.platforms.map((platform: any, index: number) => (
                  <a
                    key={index}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #0D9488, #14B8A6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.3rem',
                      transition: 'transform 0.3s',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <i className={platform.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="col-lg-8">
            <div style={{ 
              background: 'white', 
              padding: '40px', 
              borderRadius: '16px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
            }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: '#1F2937' }}>
                {data.form.title}
              </h2>
              <p style={{ color: '#6B7280', marginBottom: '30px' }}>
                {data.form.subtitle}
              </p>

              {status === 'success' && (
                <div style={{ 
                  background: '#D1FAE5', 
                  border: '1px solid #10B981',
                  color: '#065F46',
                  padding: '15px 20px',
                  borderRadius: '8px',
                  marginBottom: '25px'
                }}>
                  <i className="fas fa-check-circle" style={{ marginInlineEnd: '10px' }}></i>
                  {statusMessage}
                </div>
              )}

              {status === 'error' && (
                <div style={{ 
                  background: '#FEE2E2', 
                  border: '1px solid #EF4444',
                  color: '#991B1B',
                  padding: '15px 20px',
                  borderRadius: '8px',
                  marginBottom: '25px'
                }}>
                  <i className="fas fa-exclamation-circle" style={{ marginInlineEnd: '10px' }}></i>
                  {statusMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-4">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
                    {data.form.fields.name.label} <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={data.form.fields.name.placeholder}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '2px solid #E5E7EB',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#14B8A6'}
                    onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
                    {data.form.fields.email.label} <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={data.form.fields.email.placeholder}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '2px solid #E5E7EB',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#14B8A6'}
                    onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                  />
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
                    {data.form.fields.phone.label} <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={data.form.fields.phone.placeholder}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '2px solid #E5E7EB',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#14B8A6'}
                    onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                  />
                </div>

                {/* Visa Type */}
                <div className="mb-4">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
                    {data.form.fields.visa_type.label}
                  </label>
                  <select
                    name="visa_type"
                    value={formData.visa_type}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '2px solid #E5E7EB',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s',
                      backgroundColor: 'white'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#14B8A6'}
                    onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                  >
                    <option value="">{data.form.fields.visa_type.placeholder}</option>
                    {data.form.fields.visa_type.options.map((option: string, index: number) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
                    {data.form.fields.message.label} <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={data.form.fields.message.placeholder}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '2px solid #E5E7EB',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s',
                      resize: 'vertical'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#14B8A6'}
                    onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                  />
                </div>

                {/* Privacy Note */}
                <div style={{ 
                  background: '#EFF6FF', 
                  padding: '15px',
                  borderRadius: '8px',
                  marginBottom: '25px',
                  border: '1px solid #BFDBFE'
                }}>
                  <i className="fas fa-lock" style={{ color: '#3B82F6', marginInlineEnd: '10px' }}></i>
                  <span style={{ color: '#1E40AF', fontSize: '0.95rem' }}>
                    {data.form.privacy_note}
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: status === 'submitting' 
                      ? '#9CA3AF' 
                      : 'linear-gradient(135deg, #0D9488, #14B8A6)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    if (status !== 'submitting') {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  {status === 'submitting' ? (
                    <>
                      <i className="fas fa-spinner fa-spin" style={{ marginInlineEnd: '10px' }}></i>
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
        <section style={{ marginTop: '80px' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '50px', color: '#1F2937' }}>
            {data.why_choose.title}
          </h2>
          <div className="row">
            {data.why_choose.reasons.map((reason: any, index: number) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div style={{
                  textAlign: 'center',
                  padding: '30px 20px',
                  background: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  height: '100%',
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #0D9488, #14B8A6)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '1.8rem',
                    color: 'white'
                  }}>
                    <i className={`fas ${reason.icon}`}></i>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#1F2937' }}>
                    {reason.title}
                  </h3>
                  <p style={{ color: '#6B7280', fontSize: '0.95rem', margin: 0 }}>
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final Message */}
        <section style={{ 
          marginTop: '80px',
          background: 'linear-gradient(135deg, #0D9488, #14B8A6)',
          color: 'white',
          padding: '60px 40px',
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
            {data.final_message.title}
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: 0.95, maxWidth: '800px', margin: '0 auto 30px' }}>
            {data.final_message.description}
          </p>
          <p style={{ fontSize: '1.3rem', fontWeight: '600' }}>
            <i className="fas fa-rocket" style={{ marginInlineEnd: '10px' }}></i>
            {data.final_message.cta}
          </p>
        </section>
      </div>

    </div>
  );
}
