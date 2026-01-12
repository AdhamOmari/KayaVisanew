'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useI18n } from '@/lib/i18n';
import '@/styles/blog.css';

export default function AdminLoginPage() {
  const router = useRouter();
  const { locale, dir, t } = useI18n();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.authenticated) {
        // Store user info in sessionStorage
        sessionStorage.setItem('admin-auth', JSON.stringify(data.user));
        router.push('/admin/blog');
      } else {
        setError(data.error || (locale === 'ar' ? 'البريد الإلكتروني أو كلمة المرور غير صحيحة' : 'Invalid email or password'));
      }
    } catch (error) {
      setError(locale === 'ar' ? 'فشل تسجيل الدخول' : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const text = {
    title: locale === 'ar' ? 'تسجيل دخول المسؤول' : 'Admin Login',
    email: locale === 'ar' ? 'البريد الإلكتروني' : 'Email',
    emailPlaceholder: locale === 'ar' ? 'أدخل البريد الإلكتروني' : 'Enter email address',
    password: locale === 'ar' ? 'كلمة المرور' : 'Password',
    passwordPlaceholder: locale === 'ar' ? 'أدخل كلمة المرور' : 'Enter password',
    loginButton: locale === 'ar' ? 'تسجيل الدخول' : 'Login',
    loggingIn: locale === 'ar' ? 'جاري تسجيل الدخول...' : 'Logging in...',
    credentials: locale === 'ar' ? 'بيانات الاعتماد الافتراضية' : 'Default Credentials',
    superAdmin: locale === 'ar' ? 'مسؤول رئيسي' : 'Super Admin',
    subAdmin: locale === 'ar' ? 'مسؤول فرعي' : 'Sub Admin',
  };

  return (
    <div className="login-container" dir={dir}>
      <div className="login-box">
        <h2>
          <i className="fas fa-lock" style={{ marginInlineEnd: '10px', color: '#7C3AED' }}></i>
          {text.title}
        </h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">{text.email}</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={text.emailPlaceholder}
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">{text.password}</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={text.passwordPlaceholder}
              required
              autoComplete="current-password"
            />
          </div>
          
          {error && (
            <div style={{ 
              padding: '12px', 
              background: '#FEE2E2', 
              color: '#DC2626', 
              borderRadius: '8px', 
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              {error}
            </div>
          )}
          
          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%' }}
            disabled={loading}
          >
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> {text.loggingIn}
              </>
            ) : (
              <>
                <i className="fas fa-sign-in-alt"></i> {text.loginButton}
              </>
            )}
          </button>
        </form>
        
        <div style={{ marginTop: '25px', padding: '15px', background: '#F3F4F6', borderRadius: '8px' }}>
          <p style={{ fontWeight: '600', color: '#1F2937', marginBottom: '10px', textAlign: 'center' }}>
            {text.credentials}
          </p>
          <div style={{ fontSize: '0.9rem', color: '#6B7280' }}>
            <p style={{ marginBottom: '8px' }}>
              <strong>{text.superAdmin}:</strong>
            </p>
            <p style={{ marginInlineStart: '10px', marginBottom: '5px' }}>
              <i className="far fa-envelope"></i> admin@kaya.com
            </p>
            <p style={{ marginInlineStart: '10px', marginBottom: '15px' }}>
              <i className="fas fa-key"></i> kaya-admin-2026
            </p>
            
            <p style={{ marginBottom: '8px' }}>
              <strong>{text.subAdmin}:</strong>
            </p>
            <p style={{ marginInlineStart: '10px', marginBottom: '5px' }}>
              <i className="far fa-envelope"></i> editor@kaya.com
            </p>
            <p style={{ marginInlineStart: '10px' }}>
              <i className="fas fa-key"></i> kaya-editor-2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
