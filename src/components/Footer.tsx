'use client';

import { useI18n } from '@/lib/i18n';
import { useMemo } from 'react';
import Link from 'next/link';

export default function Footer() {
  const { locale, dir } = useI18n();

  const content = {
    ar: {
      company: 'كايا للسفر',
      companyDesc: 'شريكك الموثوق في رحلتك نحو الهجرة والتأشيرات',
      quickLinks: 'روابط سريعة',
      services: 'خدماتنا',
      followUs: 'تابعنا',
      newsletter: 'اشترك في نشرتنا',
      newsletterDesc: 'احصل على آخر التحديثات والعروض',
      emailPlaceholder: 'بريدك الإلكتروني',
      subscribe: 'اشترك',
      copyright: '© 2026 كايا للسفر. جميع الحقوق محفوظة.',
      home: 'الرئيسية',
      about: 'من نحن',
      contact: 'تواصل معنا',
      blog: 'المدونة',
      terms: 'الشروط والأحكام',
      privacy: 'سياسة الخصوصية',
      faq: 'الأسئلة الشائعة'
    },
    en: {
      company: 'Kaya Travel',
      companyDesc: 'Your trusted partner in immigration and visa services',
      quickLinks: 'Quick Links',
      services: 'Our Services',
      followUs: 'Follow Us',
      newsletter: 'Newsletter',
      newsletterDesc: 'Get the latest updates and offers',
      emailPlaceholder: 'Your email',
      subscribe: 'Subscribe',
      copyright: '© 2026 Kaya Travel. All rights reserved.',
      home: 'Home',
      about: 'About Us',
      contact: 'Contact',
      blog: 'Blog',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      faq: 'FAQ'
    }
  };

  const t = content[locale as keyof typeof content];

  const services = [
    { name: { ar: 'الجنسية الثانية', en: 'Second Citizenship' }, href: '/second-citizenship' },
    { name: { ar: 'تأشيرات أمريكا', en: 'USA Visas' }, href: '/usa-visas' },
    { name: { ar: 'تأشيرات الشنغن', en: 'Schengen Visas' }, href: '/schengen-visas' },
    { name: { ar: 'تأشيرات الدراسة', en: 'Study Visas' }, href: '/study-visas' },
    { name: { ar: 'تأشيرات العمل', en: 'Work Visas' }, href: '/work-visas' }
  ];

  return (
    <footer dir={dir} style={styles.footer}>
      {/* Main Footer */}
      <div style={styles.mainFooter}>
        <div style={styles.container}>
          <div style={styles.grid}>
            {/* Company Info */}
            <div style={styles.column}>
              <div style={styles.logo}>
                <img src="/kaya.png" alt="Kaya Travel" style={{ height: '60px', width: 'auto', marginBottom: '15px' }} />
              </div>
              <p style={styles.description}>{t.companyDesc}</p>
              
              {/* Social Media */}
              <div style={styles.socialContainer}>
                <h3 style={styles.socialTitle}>{t.followUs}</h3>
                <div style={styles.socialIcons}>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div style={styles.column}>
              <h3 style={styles.columnTitle}>{t.quickLinks}</h3>
              <ul style={styles.linkList}>
                <li style={styles.linkItem}>
                  <Link href="/" style={styles.link}>
                    <i className="fas fa-chevron-right" style={styles.chevron}></i>
                    {t.home}
                  </Link>
                </li>
                <li style={styles.linkItem}>
                  <Link href="/about" style={styles.link}>
                    <i className="fas fa-chevron-right" style={styles.chevron}></i>
                    {t.about}
                  </Link>
                </li>
                <li style={styles.linkItem}>
                  <Link href="/blog" style={styles.link}>
                    <i className="fas fa-chevron-right" style={styles.chevron}></i>
                    {t.blog}
                  </Link>
                </li>
                <li style={styles.linkItem}>
                  <Link href="/contact" style={styles.link}>
                    <i className="fas fa-chevron-right" style={styles.chevron}></i>
                    {t.contact}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div style={styles.column}>
              <h3 style={styles.columnTitle}>{t.services}</h3>
              <ul style={styles.linkList}>
                {services.map((service, index) => (
                  <li key={index} style={styles.linkItem}>
                    <Link href={service.href} style={styles.link}>
                      <i className="fas fa-chevron-right" style={styles.chevron}></i>
                      {service.name[locale as keyof typeof service.name]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div style={styles.column}>
              <h3 style={styles.columnTitle}>{t.newsletter}</h3>
              <p style={styles.newsletterDesc}>{t.newsletterDesc}</p>
              <form style={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  style={styles.emailInput}
                  dir={dir}
                />
                <button type="submit" style={styles.subscribeBtn}>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={styles.bottomFooter}>
        <div style={styles.container}>
          <div style={styles.bottomContent}>
            <p style={styles.copyright}>{t.copyright}</p>
            <div style={styles.legalLinks}>
              <Link href="/terms" style={styles.legalLink}>{t.terms}</Link>
              <span style={styles.separator}>|</span>
              <Link href="/privacy" style={styles.legalLink}>{t.privacy}</Link>
              <span style={styles.separator}>|</span>
              <Link href="/faq" style={styles.legalLink}>{t.faq}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: '#1a202c',
    color: '#e2e8f0',
    marginTop: 'auto',
  },
  mainFooter: {
    padding: '60px 20px 40px',
    borderBottom: '1px solid #1a202c',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '20px',
  },
  logoIcon: {
    fontSize: '2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  description: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#cbd5e0',
    marginBottom: '25px',
  },
  socialContainer: {
    marginTop: '10px',
  },
  socialTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#ffffff',
  },
  socialIcons: {
    display: 'flex',
    gap: '12px',
  },
  socialLink: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#1a202c',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#e2e8f0',
    fontSize: '1rem',
    transition: 'all 0.3s',
    textDecoration: 'none',
  },
  columnTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#ffffff',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  linkItem: {
    marginBottom: '12px',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#cbd5e0',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'all 0.3s',
  },
  chevron: {
    fontSize: '0.7rem',
    color: '#667eea',
  },
  newsletterDesc: {
    fontSize: '0.9rem',
    color: '#cbd5e0',
    marginBottom: '20px',
    lineHeight: '1.5',
  },
  newsletterForm: {
    display: 'flex',
    gap: '10px',
  },
  emailInput: {
    flex: 1,
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #1a202c',
    backgroundColor: '#1a202c',
    color: '#ffffff',
    fontSize: '0.95rem',
    outline: 'none',
  },
  subscribeBtn: {
    padding: '12px 20px',
    borderRadius: '8px',
    border: 'none',
    background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)',
    color: '#ffffff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  bottomFooter: {
    padding: '25px 20px',
    backgroundColor: '#0f1419',
  },
  bottomContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  copyright: {
    fontSize: '0.9rem',
    color: '#a0aec0',
    margin: 0,
  },
  legalLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  legalLink: {
    color: '#cbd5e0',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.3s',
  },
  separator: {
    color: '#48bb78',
  },
};
