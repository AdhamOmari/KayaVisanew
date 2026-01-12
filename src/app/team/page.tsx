'use client';

import { useI18n } from '@/lib/i18n';
import { useState, useEffect } from 'react';

interface TeamMember {
  id: string;
  name: { en: string; ar: string };
  position: { en: string; ar: string };
  image: string;
  bio: { en: string; ar: string };
  email: string;
  phone: string;
  role: string;
}

export default function TeamPage() {
  const { locale, dir } = useI18n();
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const response = await fetch('/api/team');
      const data = await response.json();
      setMembers(data.members || []);
    } catch (error) {
      console.error('Error fetching team:', error);
    } finally {
      setLoading(false);
    }
  };

  const content = {
    en: {
      title: 'Our Team',
      subtitle: 'Meet the Kaya Family',
      description: 'At Kaya, we believe that our success starts with our people. Our team comprises experts in visa processing, translation, marketing, travel, and educational consulting, all united by a single passion: serving our clients with the highest level of professionalism.',
      joinTitle: 'Join the Kaya Family',
      joinDescription: 'If you wish to be part of our team, apply now via the dedicated email address:',
      email: 'Email',
      phone: 'Phone',
      loading: 'Loading team members...',
    },
    ar: {
      title: 'فريقنا',
      subtitle: 'تعرف على أسرة كايا',
      description: 'في كايا، نؤمن أن نجاحنا يبدأ من الإنسان. فريقنا يضم خبراء في التأشيرات، الترجمة، التسويق، السفر والاستشارات التعليمية، يجمعهم شغف واحد: خدمة عملائنا بأعلى مستوى من الاحترافية.',
      joinTitle: 'انضم إلى أسرة كايا',
      joinDescription: 'إذا كنت ترغب أن تكون جزءًا من فريقنا، قدّم طلبك الآن عبر البريد المخصص:',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      loading: 'جاري تحميل أعضاء الفريق...',
    },
  };

  const t = content[locale as keyof typeof content];

  return (
    <div dir={dir} style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)',
          color: 'white',
          padding: '120px 20px 80px',
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
            {t.title}
          </h1>
          <p
            style={{
              fontSize: '1.5rem',
              marginBottom: '30px',
              opacity: 0.95,
            }}
          >
            {t.subtitle}
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
            {t.description}
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section
        style={{
          padding: '80px 20px',
          backgroundColor: 'white',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <div
                style={{
                  display: 'inline-block',
                  width: '50px',
                  height: '50px',
                  border: '5px solid #f3f3f3',
                  borderTop: '5px solid #667eea',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                }}
              />
              <p style={{ marginTop: '20px', color: '#718096', fontSize: '1.1rem' }}>
                {t.loading}
              </p>
              <style jsx>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '40px',
              }}
            >
              {members.map((member) => (
                <div
                  key={member.id}
                  style={{
                    backgroundColor: '#f7fafc',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                  }}
                >
                  {/* Image Container */}
                  <div
                    style={{
                      width: '100%',
                      height: '280px',
                      background: 'linear-gradient(135deg, #667eea 0%, #48bb78 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {member.image && member.image !== '/images/team/default-avatar.png' ? (
                      <img
                        src={member.image}
                        alt={member.name[locale as keyof typeof member.name]}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = '<i class="fas fa-user" style="font-size: 5rem; color: white;"></i>';
                        }}
                      />
                    ) : (
                      <i
                        className="fas fa-user"
                        style={{
                          fontSize: '5rem',
                          color: 'white',
                          opacity: 0.8,
                        }}
                      ></i>
                    )}
                    
                    {/* Role Badge */}
                    {member.role === 'admin' && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '15px',
                          right: dir === 'rtl' ? 'auto' : '15px',
                          left: dir === 'rtl' ? '15px' : 'auto',
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          color: '#667eea',
                          padding: '6px 14px',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                        }}
                      >
                        <i className="fas fa-crown"></i>
                        {locale === 'ar' ? 'مدير' : 'Admin'}
                      </div>
                    )}
                  </div>

                  {/* Info Container */}
                  <div style={{ padding: '25px' }}>
                    <h3
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        marginBottom: '8px',
                        color: '#1a202c',
                      }}
                    >
                      {member.name[locale as keyof typeof member.name]}
                    </h3>
                    <p
                      style={{
                        fontSize: '1rem',
                        color: '#667eea',
                        fontWeight: '600',
                        marginBottom: '15px',
                      }}
                    >
                      {member.position[locale as keyof typeof member.position]}
                    </p>
                    
                    {member.bio[locale as keyof typeof member.bio] && (
                      <p
                        style={{
                          fontSize: '0.9rem',
                          color: '#718096',
                          lineHeight: '1.6',
                          marginBottom: '15px',
                        }}
                      >
                        {member.bio[locale as keyof typeof member.bio]}
                      </p>
                    )}

                    {/* Contact Info */}
                    <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #e2e8f0' }}>
                      {member.email && (
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '8px',
                            fontSize: '0.9rem',
                            color: '#48bb78',
                          }}
                        >
                          <i className="fas fa-envelope" style={{ color: '#667eea', width: '18px' }}></i>
                          <a
                            href={`mailto:${member.email}`}
                            style={{
                              color: '#48bb78',
                              textDecoration: 'none',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = '#667eea';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = '#48bb78';
                            }}
                          >
                            {member.email}
                          </a>
                        </div>
                      )}
                      {member.phone && (
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '0.9rem',
                            color: '#48bb78',
                          }}
                        >
                          <i className="fas fa-phone" style={{ color: '#667eea', width: '18px' }}></i>
                          <a
                            href={`tel:${member.phone}`}
                            style={{
                              color: '#48bb78',
                              textDecoration: 'none',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = '#667eea';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = '#48bb78';
                            }}
                          >
                            {member.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join Section */}
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
            {t.joinTitle}
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              marginBottom: '40px',
              lineHeight: '1.8',
              opacity: 0.95,
            }}
          >
            {t.joinDescription}
          </p>
          <a
            href="mailto:HR@kayavisa.org"
            style={{
              padding: '18px 50px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#667eea',
              backgroundColor: 'white',
              border: 'none',
              borderRadius: '50px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
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
            <i className="fas fa-envelope"></i>
            HR@kayavisa.org
          </a>
        </div>
      </section>
    </div>
  );
}
