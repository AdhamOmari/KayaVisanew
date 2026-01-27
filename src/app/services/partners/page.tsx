'use client';

import { useI18n } from '@/lib/i18n';
import partnersData from '@/data/partners.json';
import Link from 'next/link';
import styles from './partners.module.css';

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
    <div dir={dir} className={styles.partnersContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* Background Image */}
        <div className={styles.heroBackground}>
          <img src="/destination-1.jpg" alt="Partners Hero Background" />
          <div className={styles.heroOverlay}></div>
        </div>

        {/* Content */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {t.hero.title}
          </h1>
          <p className={styles.heroSubtitle}>
            {t.hero.subtitle}
          </p>
          <p className={styles.heroDescription}>
            {t.hero.description}
          </p>
        </div>
      </section>

      {/* Offerings Section */}
      <section className={styles.section}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            {t.offerings.title}
          </h2>
          <div className={styles.offeringsGrid}>
            {t.offerings.items.map((item, index) => (
              <div key={index} className={styles.offeringCard}>
                <div className={styles.offeringIcon}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 className={styles.offeringTitle}>
                  {item.title}
                </h3>
                <p className={styles.offeringDescription}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className={`${styles.section} ${styles.partnersSection}`}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            {t.partners_section.title}
          </h2>
          <p className={styles.sectionSubtitle} style={{ color: 'var(--accent-color)' }}>
            {t.partners_section.description}
          </p>

          <div className={styles.partnersGrid}>
            {partnerCategories.map((category, index) => (
              <Link
                key={index}
                href={`/services/partners/${category.slug}`}
                className={styles.partnerCard}
              >
                <div className={styles.partnerIcon}>
                  <i className={`fas ${category.icon}`}></i>
                </div>
                <h3 className={styles.partnerTitle}>
                  {locale === 'ar' ? category.nameAr : category.nameEn}
                </h3>
                <div className={styles.partnerLink}>
                  {locale === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                  <i className={`fas fa-arrow-${dir === 'rtl' ? 'left' : 'right'}`}></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className={styles.section}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            {t.partner_types.title}
          </h2>
          <p className={styles.sectionSubtitle} style={{ color: 'var(--accent-color)' }}>
            {t.partner_types.description}
          </p>

          <div className={styles.partnerTypesGrid}>
            {t.partner_types.types.map((type, index) => (
              <div key={index} className={styles.partnerTypeCard}>
                <div className={styles.partnerTypeIcon}>
                  <i className={`fas ${type.icon}`}></i>
                </div>
                <h3 className={styles.partnerTypeTitle}>
                  {type.name}
                </h3>
                <p className={styles.partnerTypeDescription}>
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className={`${styles.section} ${styles.whyPartnerSection}`}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            {t.why_partner.title}
          </h2>

          <div className={styles.whyPartnerGrid}>
            {t.why_partner.reasons.map((reason, index) => (
              <div key={index} className={styles.whyPartnerCard}>
                <div className={styles.whyPartnerIcon}>
                  <i className={`fas ${reason.icon}`}></i>
                </div>
                <h3 className={styles.whyPartnerTitle}>
                  {reason.title}
                </h3>
                <p className={styles.whyPartnerDescription}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become Partner Section */}
      <section className={`${styles.section} ${styles.becomePartnerSection}`}>
        <div className={styles.becomePartnerContainer}>
          <h2 className={styles.becomePartnerTitle}>
            {t.become_partner.title}
          </h2>
          <p className={styles.becomePartnerDescription}>
            {t.become_partner.description}
          </p>

          <div className={styles.becomePartnerGrid}>
            {t.become_partner.benefits.map((benefit, index) => (
              <div key={index} className={styles.becomePartnerBenefit}>
                <div className={styles.becomePartnerIcon}>
                  <i className={`fas ${benefit.icon}`}></i>
                </div>
                <h3 className={styles.becomePartnerBenefitTitle}>
                  {benefit.title}
                </h3>
                <p className={styles.becomePartnerBenefitDescription}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className={styles.contactBox}>
            <p className={styles.contactLabel}>
              {t.become_partner.contact_label}
            </p>
            <a href={`mailto:${t.become_partner.contact_email}`} className={styles.contactEmail}>
              <i className="fas fa-envelope"></i>
              {t.become_partner.contact_email}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className={styles.section}>
        <div className={styles.contactInfoContainer}>
          <h2 className={styles.contactInfoTitle}>
            {t.contact_info.title}
          </h2>
          <p className={styles.contactInfoDescription}>
            {t.contact_info.description}
          </p>

          <div className={styles.contactButtons}>
            <a href={`mailto:${t.contact_info.email}`} className={`${styles.contactButton} ${styles.emailButton}`}>
              <i className="fas fa-envelope"></i>
              {t.contact_info.email}
            </a>

            <a href={`tel:${t.contact_info.phone.replace(/\s/g, '')}`} className={`${styles.contactButton} ${styles.phoneButton}`}>
              <i className="fas fa-phone"></i>
              {t.contact_info.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
