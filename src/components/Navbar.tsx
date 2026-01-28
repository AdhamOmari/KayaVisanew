'use client';

import { useI18n } from '@/lib/i18n';
import { useState, useEffect, useMemo, useCallback } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { locale, dir } = useI18n();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    ar: {
      home: 'الصفحة الرئيسية',
      secondCitizenship: {
        title: 'الجنسية الثانية',
        countries: [
          { name: 'أنتيغوا وبربودا', slug: 'antigua-barbuda' },
          { name: 'دومينيكا', slug: 'dominica' },
          { name: 'سانت كيتس ونيفيس', slug: 'st-kitts-nevis' },
          { name: 'سانت لوسيا', slug: 'st-lucia' },
          { name: 'غرينادا', slug: 'grenada' },
        ],
      },
      usaVisas: {
        title: 'تأشيرات أمريكا',
        categories: [
          { name: 'تأشيرة السياحة والزيارة B1-B2', slug: 'b1-b2' },
          {
            name: 'تأشيرات الدراسة F-M', slug: 'f-m', sub: [
              { name: 'الدراسة الأكاديمية F1-F2', slug: 'f1-f2' },
              { name: 'الدراسة المهنية M1-M2', slug: 'm1-m2' },
            ]
          },
          {
            name: 'تأشيرات التبادل الثقافي J1-J2', slug: 'j1-j2', sub: [
              { name: 'سفر العمل الصيفي', slug: 'summer-work' },
              { name: 'مستشار المخيم', slug: 'camp-counselor' },
              { name: 'المتدرّبون المهنيون', slug: 'trainees' },
              { name: 'المتدربون', slug: 'interns' },
              { name: 'طالب الكلية والجامعة', slug: 'college-student' },
              { name: 'طالب في المرحلة الثانوية', slug: 'secondary-student' },
              { name: 'عالم بحث', slug: 'research-scholar' },
              { name: 'أستاذ جامعي', slug: 'professor' },
              { name: 'المعلّمون', slug: 'teachers' },
              { name: 'الأطباء', slug: 'physicians' },
              { name: 'المساعدون المنزليون', slug: 'au-pair' },
              { name: 'الزائرون الدوليون', slug: 'international-visitors' },
              { name: 'الزائرون الحكوميون', slug: 'government-visitors' },
              { name: 'المتخصصون', slug: 'specialists' },
              { name: 'الباحثون لفترة قصيرة', slug: 'short-term-scholars' },
              { name: 'مبادرات العلوم والتكنولوجيا', slug: 'science-tech' },
            ]
          },
        ],
      },
      schengenVisas: {
        title: 'تأشيرات الشنغن',
        countries: [
          { name: 'ألمانيا', slug: 'germany' },
          { name: 'فرنسا', slug: 'france' },
          { name: 'إيطاليا', slug: 'italy' },
          { name: 'سويسرا', slug: 'switzerland' },
          { name: 'إسبانيا', slug: 'spain' },
          { name: 'البرتغال', slug: 'portugal' },
          { name: 'هولندا', slug: 'netherlands' },
          { name: 'اليونان', slug: 'greece' },
          { name: 'النمسا', slug: 'austria' },
          { name: 'المجر', slug: 'hungary' },
          { name: 'السويد', slug: 'sweden' },
          { name: 'النرويج', slug: 'norway' },
          { name: 'آيسلندا', slug: 'iceland' },
          { name: 'فنلندا', slug: 'finland' },
          { name: 'الدنمارك', slug: 'denmark' },
          { name: 'لوكسمبورغ', slug: 'luxembourg' },
          { name: 'بلجيكا', slug: 'belgium' },
          { name: 'التشيك', slug: 'czech' },
          { name: 'كرواتيا', slug: 'croatia' },
          { name: 'إستونيا', slug: 'estonia' },
          { name: 'بولندا', slug: 'poland' },
          { name: 'سلوفينيا', slug: 'slovenia' },
          { name: 'ليتوانيا', slug: 'lithuania' },
          { name: 'ليختنشتاين', slug: 'liechtenstein' },
          { name: 'مالطا', slug: 'malta' },
          { name: 'لاتفيا', slug: 'latvia' },
          { name: 'سلوفاكيا', slug: 'slovakia' },
          { name: 'بلغاريا', slug: 'bulgaria' },
          { name: 'رومانيا', slug: 'romania' }
        ],
      },
      studyVisas: {
        title: 'تأشيرات الدراسة',
        countries: [
          { name: 'أمريكا', slug: 'usa' },
          { name: 'كندا', slug: 'canada' },
          { name: 'بريطانيا', slug: 'uk' },
          { name: 'استراليا', slug: 'australia' },
          { name: 'ألمانيا', slug: 'germany' },
          { name: 'إسبانيا', slug: 'spain' },
        ],
      },
      workVisas: {
        title: 'تأشيرات العمل',
        types: [
          { name: 'البطاقة الزرقاء EU', slug: 'eu-blue-card' },
          { name: 'تأشيرة العمل أمريكا H1B', slug: 'usa-h1b' },
          { name: 'تأشيرة العمل أمريكا H2B', slug: 'usa-h2b' },
          { name: 'تأشيرة النقاط ألمانيا', slug: 'germany-points' },
          { name: 'تأشيرة البحث عن عمل ألمانيا', slug: 'germany-job-seeker' },
          { name: 'تأشيرة البحث عن عمل الإمارات', slug: 'uae-job-seeker' },
          { name: 'تأشيرة البحث عن عمل قطر', slug: 'qatar-job-seeker' },
        ],
      },
      travelVisas: {
        title: 'تأشيرات السفر',
        countries: [
          { name: 'أمريكا', slug: 'usa' },
          { name: 'كندا', slug: 'canada' },
          { name: 'بريطانيا', slug: 'uk' },
          { name: 'استراليا', slug: 'australia' },
          { name: 'الصين', slug: 'china' },
          { name: 'اليابان', slug: 'japan' },
          { name: 'الإمارات', slug: 'uae' },
          { name: 'قطر', slug: 'qatar' },
        ],
      },
      services: {
        title: 'خدماتنا',
        items: [
          { name: 'الترجمة', slug: 'translation', icon: 'fas fa-language' },
          { name: 'حجوزات الطيران', slug: 'flight-bookings', icon: 'fas fa-plane' },
          { name: 'حجوزات الفنادق', slug: 'hotel-bookings', icon: 'fas fa-hotel' },
          { name: 'تأمين السفر الصحي', slug: 'travel-insurance', icon: 'fas fa-shield-alt' },
          { name: 'رسالة الدافع', slug: 'motivation-letter', icon: 'fas fa-file-alt' },
          { name: 'رسالة التغطية', slug: 'cover-letter', icon: 'fas fa-envelope' },
          { name: 'خطة السفر', slug: 'travel-plan', icon: 'fas fa-map-marked-alt' },
        ],
      },
      blog: 'المدونة',
      contact: 'اتصل بنا',
    },
    en: {
      home: 'Home',
      secondCitizenship: {
        title: 'Second Citizenship',
        countries: [
          { name: 'Antigua and Barbuda', slug: 'antigua-barbuda' },
          { name: 'Dominica', slug: 'dominica' },
          { name: 'St. Kitts and Nevis', slug: 'st-kitts-nevis' },
          { name: 'St. Lucia', slug: 'st-lucia' },
          { name: 'Grenada', slug: 'grenada' },
        ],
      },
      usaVisas: {
        title: 'USA Visas',
        categories: [
          { name: 'Tourism & Visit B1-B2', slug: 'b1-b2' },
          {
            name: 'Study Visas F-M', slug: 'f-m', sub: [
              { name: 'Academic Study F1-F2', slug: 'f1-f2' },
              { name: 'Vocational Study M1-M2', slug: 'm1-m2' },
            ]
          },
          {
            name: 'Cultural Exchange J1-J2', slug: 'j1-j2', sub: [
              { name: 'Summer Work Travel', slug: 'summer-work' },
              { name: 'Camp Counselor', slug: 'camp-counselor' },
              { name: 'Trainees', slug: 'trainees' },
              { name: 'Interns', slug: 'interns' },
              { name: 'College/University Student', slug: 'college-student' },
              { name: 'Secondary School Student', slug: 'secondary-student' },
              { name: 'Research Scholar', slug: 'research-scholar' },
              { name: 'Professor', slug: 'professor' },
              { name: 'Teachers', slug: 'teachers' },
              { name: 'Physicians', slug: 'physicians' },
              { name: 'Au Pair', slug: 'au-pair' },
              { name: 'International Visitors', slug: 'international-visitors' },
              { name: 'Government Visitors', slug: 'government-visitors' },
              { name: 'Specialists', slug: 'specialists' },
              { name: 'Short-term Scholars', slug: 'short-term-scholars' },
              { name: 'Science & Technology Initiatives', slug: 'science-tech' },
            ]
          },
        ],
      },
      schengenVisas: {
        title: 'Schengen Visas',
        countries: [
          { name: 'Germany', slug: 'germany' },
          { name: 'France', slug: 'france' },
          { name: 'Italy', slug: 'italy' },
          { name: 'Switzerland', slug: 'switzerland' },
          { name: 'Spain', slug: 'spain' },
          { name: 'Portugal', slug: 'portugal' },
          { name: 'Netherlands', slug: 'netherlands' },
          { name: 'Greece', slug: 'greece' },
          { name: 'Austria', slug: 'austria' },
          { name: 'Hungary', slug: 'hungary' },
          { name: 'Sweden', slug: 'sweden' },
          { name: 'Norway', slug: 'norway' },
          { name: 'Iceland', slug: 'iceland' },
          { name: 'Finland', slug: 'finland' },
          { name: 'Denmark', slug: 'denmark' },
          { name: 'Luxembourg', slug: 'luxembourg' },
          { name: 'Belgium', slug: 'belgium' },
          { name: 'Czech Republic', slug: 'czech' },
          { name: 'Croatia', slug: 'croatia' },
          { name: 'Estonia', slug: 'estonia' },
          { name: 'Poland', slug: 'poland' },
          { name: 'Slovenia', slug: 'slovenia' },
          { name: 'Lithuania', slug: 'lithuania' },
          { name: 'Liechtenstein', slug: 'liechtenstein' },
          { name: 'Malta', slug: 'malta' },
          { name: 'Latvia', slug: 'latvia' },
          { name: 'Slovakia', slug: 'slovakia' },
          { name: 'Bulgaria', slug: 'bulgaria' },
          { name: 'Romania', slug: 'romania' }
        ],
      },
      studyVisas: {
        title: 'Study Visas',
        countries: [
          { name: 'USA', slug: 'usa' },
          { name: 'Canada', slug: 'canada' },
          { name: 'UK', slug: 'uk' },
          { name: 'Australia', slug: 'australia' },
          { name: 'Germany', slug: 'germany' },
          { name: 'Spain', slug: 'spain' },
        ],
      },
      workVisas: {
        title: 'Work Visas',
        types: [
          { name: 'EU Blue Card', slug: 'eu-blue-card' },
          { name: 'USA Work Visa H1B', slug: 'usa-h1b' },
          { name: 'USA Work Visa H2B', slug: 'usa-h2b' },
          { name: 'Germany Points Visa', slug: 'germany-points' },
          { name: 'Germany Job Seeker Visa', slug: 'germany-job-seeker' },
          { name: 'UAE Job Seeker Visa', slug: 'uae-job-seeker' },
          { name: 'Qatar Job Seeker Visa', slug: 'qatar-job-seeker' },
        ],
      },
      travelVisas: {
        title: 'Travel Visas',
        countries: [
          { name: 'USA', slug: 'usa' },
          { name: 'Canada', slug: 'canada' },
          { name: 'UK', slug: 'uk' },
          { name: 'Australia', slug: 'australia' },
          { name: 'China', slug: 'china' },
          { name: 'Japan', slug: 'japan' },
          { name: 'UAE', slug: 'uae' },
          { name: 'Qatar', slug: 'qatar' },
        ],
      },
      services: {
        title: 'Our Services',
        items: [
          { name: 'Translation', slug: 'translation', icon: 'fas fa-language' },
          { name: 'Our Programs', slug: 'programs', icon: 'fas fa-graduation-cap' },
          { name: 'Our Partners', slug: 'partners', icon: 'fas fa-handshake' },
          { name: 'Flight Bookings', slug: 'flight-bookings', icon: 'fas fa-plane' },
          { name: 'Hotel Bookings', slug: 'hotel-bookings', icon: 'fas fa-hotel' },
          { name: 'Travel Insurance', slug: 'travel-insurance', icon: 'fas fa-shield-alt' },
          { name: 'Motivation Letter', slug: 'motivation-letter', icon: 'fas fa-file-alt' },
          { name: 'Cover Letter', slug: 'cover-letter', icon: 'fas fa-envelope' },
          { name: 'Travel Plan', slug: 'travel-plan', icon: 'fas fa-map-marked-alt' },
        ],
      },
      blog: 'Blog',
      contact: 'Contact Us',
    },
  };

  const t = content[locale as keyof typeof content];

  const toggleMenu = useCallback((menu: string) => {
    setOpenMenu(prev => prev === menu ? null : menu);
  }, []);

  return (
    <nav dir={dir} style={{
      backgroundColor: '#1c3269',
      color: 'white',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.2)' : '0 2px 10px rgba(0,0,0,0.1)',
      borderTop: '3px solid #e2bc42',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
          {/* Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/kaya.png" alt="Kaya Travel" style={{ height: '50px', width: 'auto' }} />
          </a>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            {/* Home */}
            <a href="/" className="nav-link">
              {t.home}
            </a>

            {/* Second Citizenship Mega Menu */}
            <div className="mega-menu-container"
              onMouseEnter={() => setOpenMenu('citizenship')}
              onMouseLeave={() => setOpenMenu(null)}>
              <a href="/second-citizenship" className={`nav-link ${openMenu === 'citizenship' ? 'active' : ''}`}>
                {t.secondCitizenship.title}
                <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem' }}></i>
              </a>
              {openMenu === 'citizenship' && (
                <div className={`mega-menu-content small-width ${dir === 'rtl' ? 'rtl-align' : ''}`}>
                  <div className="mega-menu-label">{t.secondCitizenship.title}</div>
                  {t.secondCitizenship.countries.map((country, idx) => (
                    <a key={idx} href={`/second-citizenship/${country.slug}`} className="mega-menu-item">
                      <i className="fas fa-passport" style={{ marginRight: dir === 'rtl' ? '0' : '8px', marginLeft: dir === 'rtl' ? '8px' : '0', color: '#667eea' }}></i>
                      {country.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* USA Visas Mega Menu */}
            <div className="mega-menu-container"
              onMouseEnter={() => setOpenMenu('usa')}
              onMouseLeave={() => setOpenMenu(null)}>
              <a href="/usa-visas" className={`nav-link ${openMenu === 'usa' ? 'active' : ''}`}>
                {t.usaVisas.title}
                <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem' }}></i>
              </a>
              {openMenu === 'usa' && (
                <div className={`mega-menu-content large-width ${dir === 'rtl' ? 'rtl-align' : ''}`}>
                  <div className="mega-menu-label">{t.usaVisas.title}</div>
                  {t.usaVisas.categories.map((category, idx) => (
                    <div key={idx} style={{ marginBottom: '20px' }}>
                      <a href={`/usa-visas/${category.slug}`} className="mega-menu-category-link">
                        <i className="fas fa-flag-usa" style={{ marginRight: dir === 'rtl' ? '0' : '8px', marginLeft: dir === 'rtl' ? '8px' : '0', color: '#667eea' }}></i>
                        {category.name}
                      </a>
                      {category.sub && (
                        <div className="mega-menu-sub-grid">
                          {category.sub.map((sub, sidx) => (
                            <a key={sidx} href={`/usa-visas/${category.slug}/${sub.slug}`} className="mega-menu-sub-link">
                              • {sub.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Schengen Visas Mega Menu */}
            <div className="mega-menu-container"
              onMouseEnter={() => setOpenMenu('schengen')}
              onMouseLeave={() => setOpenMenu(null)}>
              <a href="/schengen-visas" className={`nav-link ${openMenu === 'schengen' ? 'active' : ''}`}>
                {t.schengenVisas.title}
                <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem' }}></i>
              </a>
              {openMenu === 'schengen' && (
                <div className={`mega-menu-content xl-width ${dir === 'rtl' ? 'rtl-align' : ''}`}>
                  <div className="mega-menu-label">{t.schengenVisas.title}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                    {t.schengenVisas.countries.map((country: any, idx: number) => {
                      const countryName = typeof country === 'string' ? country : country.name;
                      const countrySlug = typeof country === 'string' ? country.toLowerCase().replace(/\s+/g, '-') : country.slug;
                      return (
                        <a key={idx} href={`/schengen-visas/${countrySlug}`} className="mega-menu-sub-link" style={{ color: '#1a202c' }}>
                          <i className="fas fa-globe-europe" style={{ marginRight: dir === 'rtl' ? '0' : '6px', marginLeft: dir === 'rtl' ? '6px' : '0', fontSize: '0.8rem' }}></i>
                          {countryName}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Study Visas Mega Menu */}
            <div className="mega-menu-container"
              onMouseEnter={() => setOpenMenu('study')}
              onMouseLeave={() => setOpenMenu(null)}>
              <a href="/study-visas" className={`nav-link ${openMenu === 'study' ? 'active' : ''}`}>
                {t.studyVisas.title}
                <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem' }}></i>
              </a>
              {openMenu === 'study' && (
                <div className={`mega-menu-content small-width ${dir === 'rtl' ? 'rtl-align' : ''}`}>
                  <div className="mega-menu-label">{t.studyVisas.title}</div>
                  {t.studyVisas.countries.map((country, idx) => (
                    <a key={idx} href={`/study-visas/${country.slug}`} className="mega-menu-item">
                      <i className="fas fa-graduation-cap" style={{ marginRight: dir === 'rtl' ? '0' : '8px', marginLeft: dir === 'rtl' ? '8px' : '0', color: '#667eea' }}></i>
                      {country.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Work Visas Mega Menu */}
            <div className="mega-menu-container"
              onMouseEnter={() => setOpenMenu('work')}
              onMouseLeave={() => setOpenMenu(null)}>
              <a href="/work-visas" className={`nav-link ${openMenu === 'work' ? 'active' : ''}`}>
                {t.workVisas.title}
                <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem' }}></i>
              </a>
              {openMenu === 'work' && (
                <div className={`mega-menu-content medium-width ${dir === 'rtl' ? 'rtl-align' : ''}`}>
                  <div className="mega-menu-label">{t.workVisas.title}</div>
                  {t.workVisas.types.map((type, idx) => (
                    <a key={idx} href={`/work-visas/${type.slug}`} className="mega-menu-item">
                      <i className="fas fa-briefcase" style={{ marginRight: dir === 'rtl' ? '0' : '8px', marginLeft: dir === 'rtl' ? '8px' : '0', color: '#667eea' }}></i>
                      {type.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Travel Visas Mega Menu */}
            <div className="mega-menu-container"
              onMouseEnter={() => setOpenMenu('travel')}
              onMouseLeave={() => setOpenMenu(null)}>
              <a href="/travel-visas" className={`nav-link ${openMenu === 'travel' ? 'active' : ''}`}>
                {t.travelVisas.title}
                <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem' }}></i>
              </a>
              {openMenu === 'travel' && (
                <div className={`mega-menu-content medium-width ${dir === 'rtl' ? 'rtl-align' : ''}`}>
                  <div className="mega-menu-label">{t.travelVisas.title}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                    {t.travelVisas.countries.map((country, idx) => (
                      <a key={idx} href={`/travel-visas/${country.slug}`} className="mega-menu-sub-link">
                        <i className="fas fa-plane" style={{ marginRight: dir === 'rtl' ? '0' : '6px', marginLeft: dir === 'rtl' ? '6px' : '0', fontSize: '0.8rem' }}></i>
                        {country.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Services Mega Menu */}
            <div className="mega-menu-container"
              onMouseEnter={() => setOpenMenu('services')}
              onMouseLeave={() => setOpenMenu(null)}>
              <a href="/services" className={`nav-link ${openMenu === 'services' ? 'active' : ''}`}>
                {t.services.title}
                <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem' }}></i>
              </a>
              {openMenu === 'services' && (
                <div className={`mega-menu-content large-width ${dir === 'rtl' ? 'rtl-align' : ''}`}>
                  <div className="mega-menu-label">{t.services.title}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                    {t.services.items.map((item, idx) => (
                      <a key={idx} href={`/services/${item.slug}`} className="mega-menu-card">
                        <i className={item.icon} style={{ marginRight: dir === 'rtl' ? '0' : '10px', marginLeft: dir === 'rtl' ? '10px' : '0', fontSize: '1.1rem' }}></i>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Blog */}
            <a href="/blog" className="nav-link">
              {t.blog}
            </a>

            {/* Language Switcher */}
            <div className="lang-switcher-wrapper">
              <LanguageSwitcher />
            </div>

            {/* Contact */}
            <a href="/contact" className="nav-contact-btn">
              {t.contact}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: 'block', padding: '10px', backgroundColor: 'transparent', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }} className="mobile-menu-btn">
            <i className={mobileOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ backgroundColor: '#1a202c', padding: '20px', maxHeight: '80vh', overflowY: 'auto' }} className="mobile-menu">
          <a href="/" onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '12px', color: 'white', textDecoration: 'none', fontSize: '1rem', borderRadius: '6px', marginBottom: '5px' }}>
            {t.home}
          </a>
          <a href="/second-citizenship" onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '12px', color: 'white', textDecoration: 'none', fontSize: '1rem', borderRadius: '6px', marginBottom: '5px' }}>
            {t.secondCitizenship.title}
          </a>
          <a href="/usa-visas" onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '12px', color: 'white', textDecoration: 'none', fontSize: '1rem', borderRadius: '6px', marginBottom: '5px' }}>
            {t.usaVisas.title}
          </a>
          <a href="/schengen-visas" onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '12px', color: 'white', textDecoration: 'none', fontSize: '1rem', borderRadius: '6px', marginBottom: '5px' }}>
            {t.schengenVisas.title}
          </a>
          <a href="/study-visas" onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '12px', color: 'white', textDecoration: 'none', fontSize: '1rem', borderRadius: '6px', marginBottom: '5px' }}>
            {t.studyVisas.title}
          </a>
          <a href="/work-visas" onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '12px', color: 'white', textDecoration: 'none', fontSize: '1rem', borderRadius: '6px', marginBottom: '5px' }}>
            {t.workVisas.title}
          </a>
          <a href="/travel-visas" onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '12px', color: 'white', textDecoration: 'none', fontSize: '1rem', borderRadius: '6px', marginBottom: '5px' }}>
            {t.travelVisas.title}
          </a>
          <a href="/services" onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '12px', color: 'white', textDecoration: 'none', fontSize: '1rem', borderRadius: '6px', marginBottom: '5px' }}>
            {t.services.title}
          </a>
          <a href="/blog" onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '12px', color: 'white', textDecoration: 'none', fontSize: '1rem', borderRadius: '6px', marginBottom: '5px' }}>
            {t.blog}
          </a>
          <a href="/contact" onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '12px', backgroundColor: '#667eea', color: 'white', textDecoration: 'none', fontSize: '1rem', borderRadius: '8px', fontWeight: '600', marginTop: '10px', textAlign: 'center' }}>
            {t.contact}
          </a>
          <div style={{ marginTop: '15px', padding: '12px', display: 'flex', justifyContent: 'center' }}>
            <LanguageSwitcher />
          </div>
        </div>
      )}

      <style jsx>{`
        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nav-link {
          padding: 10px 12px;
          color: white;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          border-radius: 6px;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
        }

        .nav-link:hover, .nav-link.active {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .nav-contact-btn {
          padding: 10px 18px;
          background-color: #667eea;
          color: white;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          border-radius: 8px;
          transition: all 0.3s;
          white-space: nowrap;
        }

        .nav-contact-btn:hover {
          background-color: #5568d3;
          transform: translateY(-2px);
        }

        .mega-menu-container {
          position: relative;
        }

        .mega-menu-content {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          color: #1a202c;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          padding: 25px;
          z-index: 1001;
        }

        .mega-menu-content::before {
          content: '';
          position: absolute;
          top: -15px;
          left: 0;
          width: 100%;
          height: 15px;
          background: transparent;
        }

        .mega-menu-content.rtl-align {
          left: auto;
          right: 0;
        }

        .small-width { min-width: 250px; }
        .medium-width { min-width: 350px; }
        .large-width { min-width: 550px; }
        .xl-width { min-width: 700px; }

        .mega-menu-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #667eea;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .mega-menu-item {
          display: block;
          padding: 10px 12px;
          color: #1a202c;
          text-decoration: none;
          border-radius: 6px;
          font-size: 0.95rem;
          transition: all 0.2s;
          margin-bottom: 5px;
        }

        .mega-menu-item:hover {
          background-color: #f7fafc;
          padding-inline-start: 20px;
        }

        .mega-menu-category-link {
          display: block;
          padding: 10px 12px;
          color: #1a202c;
          text-decoration: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .mega-menu-sub-grid {
          padding-inline-start: 25px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .mega-menu-sub-link {
          display: block;
          padding: 8px 12px;
          color: #48bb78;
          text-decoration: none;
          border-radius: 6px;
          font-size: 0.9rem;
          transition: all 0.2s;
        }

        .mega-menu-sub-link:hover {
          background-color: #f7fafc;
          color: #667eea !important;
        }

        .mega-menu-card {
           display: block;
           padding: 12px 15px;
           color: #1a202c;
           text-decoration: none;
           border-radius: 8px;
           font-size: 0.95rem;
           transition: all 0.2s;
           border: 1px solid #e2e8f0;
        }

        .mega-menu-card:hover {
          background-color: #667eea;
          color: white;
          border-color: #667eea;
        }

        @media (max-width: 1400px) {
          .desktop-menu { gap: 6px; }
          .nav-link { padding: 8px 8px; font-size: 0.9rem; }
          .nav-contact-btn { padding: 8px 14px; font-size: 0.9rem; }
        }

        @media (max-width: 1200px) {
          .desktop-menu { gap: 4px; }
          .nav-link { padding: 6px 6px; font-size: 0.85rem; }
          .nav-contact-btn { padding: 6px 10px; font-size: 0.85rem; }
        }

        @media (min-width: 1101px) {
          .desktop-menu { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }

        @media (max-width: 1100px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
