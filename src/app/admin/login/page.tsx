'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useI18n } from '@/lib/i18n';

export default function AdminLoginPage() {
  const { locale, dir } = useI18n();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const content = {
    ar: {
      title: 'تسجيل دخول المسؤول',
      subtitle: 'إدارة كايا للسفر',
      username: 'اسم المستخدم',
      password: 'كلمة المرور',
      usernamePlace: 'أدخل اسم المستخدم',
      passwordPlace: 'أدخل كلمة المرور',
      loggingIn: 'جاري تسجيل الدخول...',
      login: 'تسجيل الدخول',
      defaultCreds: 'بيانات الدخول الافتراضية: admin / admin123',
      backToSite: 'العودة للموقع',
    },
    en: {
      title: 'Admin Login',
      subtitle: 'KAYA Travel Administration',
      username: 'Username',
      password: 'Password',
      usernamePlace: 'Enter your username',
      passwordPlace: 'Enter your password',
      loggingIn: 'Logging in...',
      login: 'Login',
      defaultCreds: 'Default credentials: admin / admin123',
      backToSite: 'Back to Website',
    },
  };

  const t = content[locale as keyof typeof content];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        router.push('/admin/dashboard');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container} dir={dir}>
      <div style={styles.loginBox}>
        <div style={styles.logoSection}>
          <i className="fas fa-shield-alt" style={styles.logoIcon}></i>
          <h1 style={styles.title}>{t.title}</h1>
          <p style={styles.subtitle}>{t.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          {error && (
            <div style={styles.errorBox}>
              <i className="fas fa-exclamation-circle" style={{ marginRight: dir === 'rtl' ? '0' : '10px', marginLeft: dir === 'rtl' ? '10px' : '0' }}></i>
              {error}
            </div>
          )}

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              <i className="fas fa-user" style={styles.inputIcon}></i>
              {t.username}
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={t.usernamePlace}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              <i className="fas fa-lock" style={styles.inputIcon}></i>
              {t.password}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t.passwordPlace}
              required
              style={styles.input}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.submitButton,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin" style={{ marginRight: dir === 'rtl' ? '0' : '10px', marginLeft: dir === 'rtl' ? '10px' : '0' }}></i>
                {t.loggingIn}
              </>
            ) : (
              <>
                <i className="fas fa-sign-in-alt" style={{ marginRight: dir === 'rtl' ? '0' : '10px', marginLeft: dir === 'rtl' ? '10px' : '0' }}></i>
                {t.login}
              </>
            )}
          </button>
        </form>

        <div style={styles.footer}>
          <p style={styles.footerText}>{t.defaultCreds}</p>
          <a href="/" style={styles.backLink}>
            <i className="fas fa-arrow-left" style={{ marginRight: dir === 'rtl' ? '0' : '8px', marginLeft: dir === 'rtl' ? '8px' : '0' }}></i>
            {t.backToSite}
          </a>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)',
    padding: '20px',
  },
  loginBox: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    padding: '50px 40px',
    maxWidth: '450px',
    width: '100%',
  },
  logoSection: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  logoIcon: {
    fontSize: '3.5rem',
    background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '15px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: '8px',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#718096',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  errorBox: {
    backgroundColor: '#fed7d7',
    color: '#c53030',
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#1a202c',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  inputIcon: {
    color: '#667eea',
  },
  input: {
    padding: '14px 16px',
    fontSize: '1rem',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    outline: 'none',
    transition: 'all 0.3s',
  },
  submitButton: {
    padding: '14px',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#ffffff',
    background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    marginTop: '30px',
    textAlign: 'center',
    borderTop: '1px solid #e2e8f0',
    paddingTop: '20px',
  },
  footerText: {
    fontSize: '0.85rem',
    color: '#718096',
    marginBottom: '15px',
  },
  backLink: {
    color: '#667eea',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    display: 'inline-flex',
    alignItems: 'center',
  },
};
