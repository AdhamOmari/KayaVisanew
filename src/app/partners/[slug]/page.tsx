'use client';

import { useI18n } from '@/lib/i18n';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// Import partner data
import airlinesData from '@/data/partner-airlines.json';
import hotelsData from '@/data/partner-hotels.json';
import universitiesData from '@/data/partner-universities.json';

const partnerDataMap: Record<string, any> = {
  airlines: airlinesData,
  hotels: hotelsData,
  universities: universitiesData,
};

export default function PartnerDetailPage() {
  const { locale, dir } = useI18n();
  const params = useParams();
  const slug = params.slug as string;

  const partnerData = partnerDataMap[slug];
  
  if (!partnerData) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Partner Category Not Found</h1>
        <Link href="/partners">
          <button style={{ marginTop: '20px', padding: '12px 30px', borderRadius: '8px', border: 'none', background: '#667eea', color: 'white', cursor: 'pointer' }}>
            Back to Partners
          </button>
        </Link>
      </div>
    );
  }

  const t = partnerData[locale as keyof typeof partnerData];

  return (
    <div dir={dir} style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)',
          color: 'white',
          padding: '120px 20px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '25px' }}>
            <Link
              href="/partners"
              style={{
                color: 'white',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '1rem',
                opacity: 0.9,
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.9')}
            >
              <i className="fas fa-arrow-left"></i>
              {locale === 'ar' ? 'العودة إلى الشركاء' : 'Back to Partners'}
            </Link>
          </div>
          <div
            style={{
              display: 'inline-block',
              padding: '8px 20px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '500',
              marginBottom: '20px',
            }}
          >
            {t.category}
          </div>
          <h1
            style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {t.title}
          </h1>
          <p
            style={{
              fontSize: '1.5rem',
              marginBottom: '30px',
              opacity: 0.95,
              fontWeight: '500',
            }}
          >
            {t.subtitle}
          </p>
          <p
            style={{
              fontSize: '1.1rem',
              maxWidth: '900px',
              lineHeight: '1.8',
              opacity: 0.9,
            }}
          >
            {t.description}
          </p>
        </div>
      </section>

      {/* Partners List Section */}
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
            {locale === 'ar' ? 'شركاؤنا المميزون' : 'Our Featured Partners'}
          </h2>
          <div
            style={{
              display: 'grid',
              gap: '40px',
            }}
          >
            {t.partners.map((partner: any, index: number) => (
              <div
                key={index}
                style={{
                  padding: '40px',
                  borderRadius: '15px',
                  backgroundColor: '#f7fafc',
                  border: '2px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#667eea';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '25px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        color: 'white',
                        flexShrink: 0,
                      }}
                    >
                      <i className={`fas ${slug === 'airlines' ? 'fa-plane' : slug === 'hotels' ? 'fa-hotel' : 'fa-graduation-cap'}`}></i>
                    </div>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                      <h3
                        style={{
                          fontSize: '1.8rem',
                          fontWeight: 'bold',
                          marginBottom: '8px',
                          color: '#1a202c',
                        }}
                      >
                        {partner.name}
                      </h3>
                      <p
                        style={{
                          fontSize: '1.05rem',
                          color: '#48bb78',
                          margin: 0,
                        }}
                      >
                        {partner.description}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '25px',
                      backgroundColor: 'white',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                    }}
                  >
                    <h4
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        marginBottom: '15px',
                        color: '#667eea',
                      }}
                    >
                      {locale === 'ar' ? 'المزايا:' : 'Benefits:'}
                    </h4>
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'grid',
                        gap: '12px',
                      }}
                    >
                      {partner.benefits.map((benefit: string, idx: number) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '12px',
                            fontSize: '1rem',
                            color: '#1a202c',
                          }}
                        >
                          <i
                            className="fas fa-check-circle"
                            style={{
                              color: '#48bb78',
                              fontSize: '1.2rem',
                              marginTop: '2px',
                              flexShrink: 0,
                            }}
                          ></i>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
            {t.benefits.title}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '35px',
            }}
          >
            {t.benefits.items.map((item: any, index: number) => (
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
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    marginBottom: '12px',
                    color: '#1a202c',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#718096',
                    lineHeight: '1.6',
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        style={{
          padding: '80px 20px',
          backgroundColor: 'white',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '60px',
              color: '#1a202c',
            }}
          >
            {t.how_it_works.title}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px',
            }}
          >
            {t.how_it_works.steps.map((step: any, index: number) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  position: 'relative',
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
                    fontWeight: 'bold',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    marginBottom: '12px',
                    color: '#1a202c',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#718096',
                    lineHeight: '1.6',
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: '80px 20px',
          background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)',
          color: 'white',
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
              fontSize: '2.8rem',
              fontWeight: 'bold',
              marginBottom: '25px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            {t.cta.title}
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              marginBottom: '40px',
              lineHeight: '1.8',
              opacity: 0.95,
            }}
          >
            {t.cta.description}
          </p>
          <Link href="/contact">
            <button
              style={{
                padding: '18px 50px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: '#667eea',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
              }}
            >
              {t.cta.button}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
