'use client';

import { useI18n } from '@/lib/i18n';
import { useState, useMemo, useCallback } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { locale, dir } = useI18n();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          { name: 'تأشيرات الدراسة F-M', slug: 'f-m', sub: [
            { name: 'الدراسة الأكاديمية F1-F2', slug: 'f1-f2' },
            { name: 'الدراسة المهنية M1-M2', slug: 'm1-m2' },
          ]},
          { name: 'تأشيرات التبادل الثقافي J1-J2', slug: 'j1-j2', sub: [
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
          ]},
        ],
      },
      schengenVisas: {
        title: 'تأشيرات الشنغن',
        countries: [
          'ألمانيا', 'فرنسا', 'إيطاليا', 'سويسرا', 'إسبانيا', 'البرتغال', 'هولندا', 'اليونان',
          'النمسا', 'المجر', 'السويد', 'النرويج', 'آيسلندا', 'فنلندا', 'الدنمارك', 'لوكسمبورغ',
          'بلجيكا', 'التشيك', 'كرواتيا', 'إستونيا', 'بولندا', 'سلوفينيا', 'ليتوانيا', 'ليختنشتاين',
          'مالطا', 'لاتفيا', 'سلوفاكيا', 'بلغاريا', 'رومانيا'
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
          { name: 'تأشيرة العمل أمريكا H1B', slug: 'h1b' },
          { name: 'تأشيرة العمل أمريكا H2B', slug: 'h2b' },
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
          { name: 'برامجنا', slug: 'programs', icon: 'fas fa-graduation-cap' },
          { name: 'شركاؤنا', slug: 'partners', icon: 'fas fa-handshake' },
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
          { name: 'Study Visas F-M', slug: 'f-m', sub: [
            { name: 'Academic Study F1-F2', slug: 'f1-f2' },
            { name: 'Vocational Study M1-M2', slug: 'm1-m2' },
          ]},
          { name: 'Cultural Exchange J1-J2', slug: 'j1-j2', sub: [
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
          ]},
        ],
      },
      schengenVisas: {
        title: 'Schengen Visas',
        countries: [
          'Germany', 'France', 'Italy', 'Switzerland', 'Spain', 'Portugal', 'Netherlands', 'Greece',
          'Austria', 'Hungary', 'Sweden', 'Norway', 'Iceland', 'Finland', 'Denmark', 'Luxembourg',
          'Belgium', 'Czech Republic', 'Croatia', 'Estonia', 'Poland', 'Slovenia', 'Lithuania', 'Liechtenstein',
          'Malta', 'Latvia', 'Slovakia', 'Bulgaria', 'Romania'
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
          { name: 'USA Work Visa H1B', slug: 'h1b' },
          { name: 'USA Work Visa H2B', slug: 'h2b' },
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
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      borderTop: '3px solid #e2bc42',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
          {/* Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/kaya.png" alt="Kaya Travel" style={{ height: '50px', width: 'auto' }} />
          </a>

          {/* Desktop Menu */}
          <div style={{ gap: '5px' }} className="desktop-menu">
            {/* Home */}
            <a href="/" style={{ padding: '10px 15px', color: 'white', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', borderRadius: '6px', transition: 'all 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              {t.home}
            </a>

            {/* Second Citizenship Mega Menu */}
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setOpenMenu('citizenship')}
              onMouseLeave={() => setOpenMenu(null)}>
              <a href="/second-citizenship" style={{ padding: '10px 15px', color: 'white', backgroundColor: openMenu === 'citizenship' ? 'rgba(255,255,255,0.1)' : 'transparent', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', cursor: 'pointer', borderRadius: '6px', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '5px' }}>
                {t.secondCitizenship.title}
                <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem' }}></i>
              </a>
              {openMenu === 'citizenship' && (
                <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', color: '#1a202c', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', padding: '20px', minWidth: '280px', marginTop: '10px' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#667eea', marginBottom: '15px', textTransform: 'uppercase' }}>{t.secondCitizenship.title}</div>
                  {t.secondCitizenship.countries.map((country, idx) => (
                    <a key={idx} href={`/second-citizenship/${country.slug}`} style={{ display: 'block', padding: '10px 12px', color: '#1a202c', textDecoration: 'none', borderRadius: '6px', fontSize: '0.95rem', transition: 'all 0.2s', marginBottom: '5px' }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f7fafc'; e.currentTarget.style.paddingLeft = '20px'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.paddingLeft = '12px'; }}>
                      <i className="fas fa-passport" style={{ marginRight: dir === 'rtl' ? '0' : '8px', marginLeft: dir === 'rtl' ? '8px' : '0', color: '#667eea' }}></i>
                      {country.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* USA Visas Mega Menu */}
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setOpenMenu('usa')}
              onMouseLeave={() => setOpenMenu(null)}>
              <a href="/usa-visas" style={{ padding: '10px 15px', color: 'white', backgroundColor: openMenu === 'usa' ? 'rgba(255,255,255,0.1)' : 'transparent', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', cursor: 'pointer', borderRadius: '6px', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '5px' }}>
                {t.usaVisas.title}
                <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem' }}></i>
              </a>
              {openMenu === 'usa' && (
                <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', color: '#1a202c', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', padding: '25px', minWidth: '600px', marginTop: '10px', maxHeight: '500px', overflowY: 'auto' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#667eea', marginBottom: '20px', textTransform: 'uppercase' }}>{t.usaVisas.title}</div>
                  {t.usaVisas.categories.map((category, idx) => (
                    <div key={idx} style={{ marginBottom: '20px' }}>
                      <a href={`/usa-visas/${category.slug}`} style={{ display: 'block', padding: '10px 12px', color: '#1a202c', textDecoration: 'none', borderRadius: '6px', fontSize: '1rem', fontWeight: '600', transition: 'all 0.2s', marginBottom: '8px' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f7fafc'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                        <i className="fas fa-flag-usa" style={{ marginRight: dir === 'rtl' ? '0' : '8px', marginLeft: dir === 'rtl' ? '8px' : '0', color: '#667eea' }}></i>
                        {category.name}
                      </a>
                      {category.sub && (
                        <div style={{ paddingLeft: dir === 'rtl' ? '0' : '25px', paddingRight: dir === 'rtl' ? '25px' : '0', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                          {category.sub.map((sub, sidx) => (
                            <a key={sidx} href={`/usa-visas/${category.slug}/${sub.slug}`} style={{ display: 'block', padding: '8px 12px', color: '#48bb78', textDecoration: 'none', borderRadius: '6px', fontSize: '0.9rem', transition: 'all 0.2s' }}
                              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f7fafc'; e.currentTarget.style.color = '#667eea'; }}
                              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#48bb78'; }}>
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
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setOpenMenu('schengen')}
              onMouseLeave={() => setOpenMenu(null)}>
              <a href="/schengen-visas" style={{ padding: '10px 15px', color: 'white', backgroundColor: openMenu === 'schengen' ? 'rgba(255,255,255,0.1)' : 'transparent', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', cursor: 'pointer', borderRadius: '6px', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '5px' }}>
                {t.schengenVisas.title}
                <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem' }}></i>
              </a>
              {openMenu === 'schengen' && (
                <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', color: '#1a202c', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', padding: '25px', minWidth: '700px', marginTop: '10px', maxHeight: '500px', overflowY: 'auto' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#667eea', marginBottom: '20px', textTransform: 'uppercase' }}>{t.schengenVisas.title}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                    {t.schengenVisas.countries.map((country, idx) => (
                      <a key={idx} href={`/schengen-visas/${country.toLowerCase()}`} style={{ display: 'block', padding: '10px 12px', color: '#1a202c', textDecoration: 'none', borderRadius: '6px', fontSize: '0.9rem', transition: 'all 0.2s' }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f7fafc'; e.currentTarget.style.color = '#667eea'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1a202c'; }}>
                        <i className="fas fa-globe-europe" style={{ marginRight: dir === 'rtl' ? '0' : '6px', marginLeft: dir === 'rtl' ? '6px' : '0', fontSize: '0.8rem' }}></i>
                        {country}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Study Visas Mega Menu */}
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setOpenMenu('study')}
              onMouseLeave={() => setOpenMenu(null)}>
              <a href="/study-visas" style={{ padding: '10px 15px', color: 'white', backgroundColor: openMenu === 'study' ? 'rgba(255,255,255,0.1)' : 'transparent', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', cursor: 'pointer', borderRadius: '6px', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '5px' }}>
                {t.studyVisas.title}
                <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem' }}></i>
              </a>
              {openMenu === 'study' && (
                <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', color: '#1a202c', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', padding: '20px', minWidth: '280px', marginTop: '10px' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#667eea', marginBottom: '15px', textTransform: 'uppercase' }}>{t.studyVisas.title}</div>
                  {t.studyVisas.countries.map((country, idx) => (
                    <a key={idx} href={`/study-visas/${country.slug}`} style={{ display: 'block', padding: '10px 12px', color: '#1a202c', textDecoration: 'none', borderRadius: '6px', fontSize: '0.95rem', transition: 'all 0.2s', marginBottom: '5px' }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f7fafc'; e.currentTarget.style.paddingLeft = '20px'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.paddingLeft = '12px'; }}>
                      <i className="fas fa-graduation-cap" style={{ marginRight: dir === 'rtl' ? '0' : '8px', marginLeft: dir === 'rtl' ? '8px' : '0', color: '#667eea' }}></i>
                      {country.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Work Visas Mega Menu */}
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setOpenMenu('work')}
              onMouseLeave={() => setOpenMenu(null)}>
              <a href="/work-visas" style={{ padding: '10px 15px', color: 'white', backgroundColor: openMenu === 'work' ? 'rgba(255,255,255,0.1)' : 'transparent', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', cursor: 'pointer', borderRadius: '6px', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '5px' }}>
                {t.workVisas.title}
                <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem' }}></i>
              </a>
              {openMenu === 'work' && (
                <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', color: '#1a202c', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', padding: '20px', minWidth: '320px', marginTop: '10px' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#667eea', marginBottom: '15px', textTransform: 'uppercase' }}>{t.workVisas.title}</div>
                  {t.workVisas.types.map((type, idx) => (
                    <a key={idx} href={`/work-visas/${type.slug}`} style={{ display: 'block', padding: '10px 12px', color: '#1a202c', textDecoration: 'none', borderRadius: '6px', fontSize: '0.95rem', transition: 'all 0.2s', marginBottom: '5px' }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f7fafc'; e.currentTarget.style.paddingLeft = '20px'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.paddingLeft = '12px'; }}>
                      <i className="fas fa-briefcase" style={{ marginRight: dir === 'rtl' ? '0' : '8px', marginLeft: dir === 'rtl' ? '8px' : '0', color: '#667eea' }}></i>
                      {type.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Travel Visas Mega Menu */}
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setOpenMenu('travel')}
              onMouseLeave={() => setOpenMenu(null)}>
              <a href="/travel-visas" style={{ padding: '10px 15px', color: 'white', backgroundColor: openMenu === 'travel' ? 'rgba(255,255,255,0.1)' : 'transparent', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', cursor: 'pointer', borderRadius: '6px', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '5px' }}>
                {t.travelVisas.title}
                <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem' }}></i>
              </a>
              {openMenu === 'travel' && (
                <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', color: '#1a202c', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', padding: '20px', minWidth: '280px', marginTop: '10px' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#667eea', marginBottom: '15px', textTransform: 'uppercase' }}>{t.travelVisas.title}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                    {t.travelVisas.countries.map((country, idx) => (
                      <a key={idx} href={`/travel-visas/${country.slug}`} style={{ display: 'block', padding: '10px 12px', color: '#1a202c', textDecoration: 'none', borderRadius: '6px', fontSize: '0.9rem', transition: 'all 0.2s' }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f7fafc'; e.currentTarget.style.color = '#667eea'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1a202c'; }}>
                        <i className="fas fa-plane" style={{ marginRight: dir === 'rtl' ? '0' : '6px', marginLeft: dir === 'rtl' ? '6px' : '0', fontSize: '0.8rem' }}></i>
                        {country.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Services Mega Menu */}
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setOpenMenu('services')}
              onMouseLeave={() => setOpenMenu(null)}>
              <a href="/services" style={{ padding: '10px 15px', color: 'white', backgroundColor: openMenu === 'services' ? 'rgba(255,255,255,0.1)' : 'transparent', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', cursor: 'pointer', borderRadius: '6px', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '5px' }}>
                {t.services.title}
                <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem' }}></i>
              </a>
              {openMenu === 'services' && (
                <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', color: '#1a202c', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', padding: '25px', minWidth: '500px', marginTop: '10px' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#667eea', marginBottom: '20px', textTransform: 'uppercase' }}>{t.services.title}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                    {t.services.items.map((item, idx) => (
                      <a key={idx} href={`/services/${item.slug}`} style={{ display: 'block', padding: '12px 15px', color: '#1a202c', textDecoration: 'none', borderRadius: '8px', fontSize: '0.95rem', transition: 'all 0.2s', border: '1px solid #e2e8f0' }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#667eea'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = '#667eea'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1a202c'; e.currentTarget.style.borderColor = '#e2e8f0'; }}>
                        <i className={item.icon} style={{ marginRight: dir === 'rtl' ? '0' : '10px', marginLeft: dir === 'rtl' ? '10px' : '0', fontSize: '1.1rem' }}></i>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Blog */}
            <a href="/blog" style={{ padding: '10px 15px', color: 'white', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', borderRadius: '6px', transition: 'all 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              {t.blog}
            </a>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Contact */}
            <a href="/contact" style={{ padding: '10px 20px', backgroundColor: '#667eea', color: 'white', textDecoration: 'none', fontSize: '1rem', fontWeight: '600', borderRadius: '8px', transition: 'all 0.3s' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#5568d3'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#667eea'; e.currentTarget.style.transform = 'translateY(0)'; }}>
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
        @media (min-width: 1024px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 1023px) {
          .desktop-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
