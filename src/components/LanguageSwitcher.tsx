'use client';

import { useI18n } from '@/lib/i18n';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'ENGLISH', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (code: string) => {
    setLocale(code as 'en' | 'ar');
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} style={styles.container}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={styles.button}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#1a202c';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <span style={styles.flag}>{currentLanguage.flag}</span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`} style={styles.chevron}></i>
      </button>

      {isOpen && (
        <div style={styles.dropdown}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              style={{
                ...styles.option,
                backgroundColor: locale === lang.code ? '#f7fafc' : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (locale !== lang.code) {
                  e.currentTarget.style.backgroundColor = '#f7fafc';
                }
              }}
              onMouseLeave={(e) => {
                if (locale !== lang.code) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span style={styles.optionFlag}>{lang.flag}</span>
              <span style={styles.optionName}>{lang.name}</span>
              {locale === lang.code && (
                <i className="fas fa-check" style={styles.checkIcon}></i>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'relative',
    display: 'inline-block',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    color: '#ffffff',
  },
  flag: {
    fontSize: '1.5rem',
  },
  chevron: {
    fontSize: '0.8rem',
    color: '#cbd5e0',
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    right: '0',
    marginTop: '8px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
    minWidth: '220px',
    overflow: 'hidden',
    zIndex: 1000,
    animation: 'fadeIn 0.2s ease',
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 20px',
    width: '100%',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'all 0.2s',
    textAlign: 'left',
  },
  optionFlag: {
    fontSize: '1.8rem',
  },
  optionName: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#2d3748',
    flex: 1,
  },
  checkIcon: {
    fontSize: '1rem',
    color: '#48bb78',
  },
};
