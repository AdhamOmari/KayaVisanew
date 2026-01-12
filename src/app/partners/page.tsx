'use client';

import { useI18n } from '@/lib/i18n';
import partnersData from '@/data/partners.json';
import Link from 'next/link';

export default function PartnersPage() {
  const { locale, dir } = useI18n();
  const t = partnersData[locale as keyof typeof partnersData];

  // Define partner category links
  const partnerCategories = [
    { slug: 'airlines', nameEn: 'Airlines', nameAr: 'شركات الطيران', icon: 'fa-plane-departure' },
    { slug: 'hotels', nameEn: 'Hotels', nameAr: 'الفنادق', icon: 'fa-hotel' },
    { slug: 'universities', nameEn: 'Universities', nameAr: 'الجامعات', icon: 'fa-university' },
  ];

  return (
    <div dir={dir} style={{ backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)',
          color: 'white',
          padding: '100px 20px 80px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {t.hero.title}
          </h1>
          <p
            style={{
              fontSize: '1.5rem',
              marginBottom: '30px',
              opacity: 0.95,
            }}
          >
            {t.hero.subtitle}
          </p>
          <p
            style={{
              fontSize: '1.1rem',
              maxWidth: '900px',
              margin: '0 auto',
              lineHeight: '1.8',
              opacity: 0.9,
            }}
          >
            {t.hero.description}
          </p>
        </div>
      </section>

      {/* Offerings Section */}
      <section
        style={{
          padding: '80px 20px',
          backgroundColor: 'white',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '60px',
              color: '#1a202c',
            }}
          >
            {t.offerings.title}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
            }}
          >
            {t.offerings.items.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: '40px 30px',
                  borderRadius: '15px',
                  backgroundColor: '#f7fafc',
                  border: '2px solid #e2e8f0',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = '#667eea';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto 25px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    color: 'white',
                  }}
                >
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '15px',
                    color: '#1a202c',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#718096',
                    lineHeight: '1.7',
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        style={{
          padding: '80px 20px',
          backgroundColor: '#f7fafc',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '30px',
              color: '#1a202c',
            }}
          >
            {t.partners_section.title}
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 60px',
              color: '#48bb78',
              lineHeight: '1.8',
            }}
          >
            {t.partners_section.description}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
            }}
          >
            {partnerCategories.map((category, index) => (
              <Link
                key={index}
                href={`/partners/${category.slug}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div
                  style={{
                    padding: '40px 30px',
                    borderRadius: '12px',
                    backgroundColor: 'white',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                    textAlign: 'center',
                    border: '2px solid #e2e8f0',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    height: '100%',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#667eea';
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 25px rgba(102, 126, 234, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                  }}
                >
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      margin: '0 auto 20px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      color: 'white',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <i className={`fas ${category.icon}`}></i>
                  </div>
                  <h3
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '10px',
                    }}
                  >
                    {locale === 'ar' ? category.nameAr : category.nameEn}
                  </h3>
                  <div
                    style={{
                      marginTop: '15px',
                      color: '#667eea',
                      fontSize: '0.95rem',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                    }}
                  >
                    {locale === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                    <i className={`fas fa-arrow-${dir === 'rtl' ? 'left' : 'right'}`}></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section
        style={{
          padding: '80px 20px',
          backgroundColor: 'white',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '20px',
              color: '#1a202c',
            }}
          >
            {t.partner_types.title}
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto 60px',
              color: '#48bb78',
            }}
          >
            {t.partner_types.description}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px',
            }}
          >
            {t.partner_types.types.map((type, index) => (
              <div
                key={index}
                style={{
                  padding: '35px 25px',
                  borderRadius: '12px',
                  backgroundColor: '#f7fafc',
                  border: '2px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#667eea';
                  e.currentTarget.style.backgroundColor = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.backgroundColor = '#f7fafc';
                }}
              >
                <div
                  style={{
                    fontSize: '2.5rem',
                    color: '#667eea',
                    marginBottom: '20px',
                  }}
                >
                  <i className={`fas ${type.icon}`}></i>
                </div>
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    marginBottom: '12px',
                    color: '#1a202c',
                  }}
                >
                  {type.name}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#718096',
                    lineHeight: '1.6',
                  }}
                >
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section
        style={{
          padding: '80px 20px',
          backgroundColor: '#f7fafc',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '60px',
              color: '#1a202c',
            }}
          >
            {t.why_partner.title}
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '35px',
            }}
          >
            {t.why_partner.reasons.map((reason, index) => (
              <div
                key={index}
                style={{
                  padding: '35px 25px',
                  borderRadius: '12px',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.08)';
                }}
              >
                <div
                  style={{
                    fontSize: '2.5rem',
                    color: '#667eea',
                    marginBottom: '20px',
                  }}
                >
                  <i className={`fas ${reason.icon}`}></i>
                </div>
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    marginBottom: '12px',
                    color: '#1a202c',
                  }}
                >
                  {reason.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#718096',
                    lineHeight: '1.6',
                  }}
                >
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become Partner Section */}
      <section
        style={{
          padding: '80px 20px',
          background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)',
          color: 'white',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '2.8rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '30px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            {t.become_partner.title}
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              textAlign: 'center',
              marginBottom: '50px',
              lineHeight: '1.8',
              opacity: 0.95,
            }}
          >
            {t.become_partner.description}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '30px',
              marginBottom: '60px',
            }}
          >
            {t.become_partner.benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  padding: '30px 20px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div
                  style={{
                    fontSize: '2.2rem',
                    marginBottom: '15px',
                    color: 'white',
                  }}
                >
                  <i className={`fas ${benefit.icon}`}></i>
                </div>
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    opacity: 0.9,
                    lineHeight: '1.6',
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              textAlign: 'center',
              padding: '40px',
              borderRadius: '15px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <p
              style={{
                fontSize: '1.1rem',
                marginBottom: '15px',
                fontWeight: '500',
              }}
            >
              {t.become_partner.contact_label}
            </p>
            <a
              href={`mailto:${t.become_partner.contact_email}`}
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <i className="fas fa-envelope"></i>
              {t.become_partner.contact_email}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section
        style={{
          padding: '80px 20px',
          backgroundColor: 'white',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '25px',
              color: '#1a202c',
            }}
          >
            {t.contact_info.title}
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              marginBottom: '40px',
              color: '#48bb78',
              lineHeight: '1.8',
            }}
          >
            {t.contact_info.description}
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '30px',
              marginTop: '40px',
            }}
          >
            <a
              href={`mailto:${t.contact_info.email}`}
              style={{
                padding: '20px 40px',
                borderRadius: '12px',
                backgroundColor: '#667eea',
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#5568d3';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(102, 126, 234, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#667eea';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <i className="fas fa-envelope"></i>
              {t.contact_info.email}
            </a>

            <a
              href={`tel:${t.contact_info.phone.replace(/\s/g, '')}`}
              style={{
                padding: '20px 40px',
                borderRadius: '12px',
                backgroundColor: '#48bb78',
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#38a169';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(72, 187, 120, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#48bb78';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <i className="fas fa-phone"></i>
              {t.contact_info.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
