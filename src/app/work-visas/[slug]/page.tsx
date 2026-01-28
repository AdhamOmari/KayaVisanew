'use client';

import React, { useState, useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import '@/styles/work-visas-modern.css';

// Import All JSONs
import workEuBlueCard from '@/data/work-eu-blue-card.json';
import workGermanyJobSeeker from '@/data/work-germany-job-seeker.json';
import workGermanyPoints from '@/data/work-germany-points.json';
import workQatarJobSeeker from '@/data/work-qatar-job-seeker.json';
import workUaeJobSeeker from '@/data/work-uae-job-seeker.json';
import workUsaH1b from '@/data/work-usa-h1b.json';
import workUsaH2b from '@/data/work-usa-h2b.json';

const visaDataMap: Record<string, any> = {
    'eu-blue-card': workEuBlueCard,
    'germany-job-seeker': workGermanyJobSeeker,
    'germany-points': workGermanyPoints,
    'qatar-job-seeker': workQatarJobSeeker,
    'uae-job-seeker': workUaeJobSeeker,
    'usa-h1b': workUsaH1b,
    'usa-h2b': workUsaH2b,
};

const heroImages: Record<string, string> = {
    'eu-blue-card': 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=2000',
    'germany-job-seeker': 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=2000',
    'germany-points': 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=2000',
    'qatar-job-seeker': 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=2000',
    'uae-job-seeker': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000',
    'usa-h1b': 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=2000',
    'usa-h2b': 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2000',
};

export default function WorkVisaCountryPage() {
    const { locale } = useI18n();
    const params = useParams();
    const slug = params.slug as string;
    const isRTL = locale === 'ar';

    const visaData = visaDataMap[slug];
    if (!visaData) notFound();

    const data = visaData[locale] || visaData.en;
    const heroImage = heroImages[slug] || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000';

    return (
        <div className="work-visas-page-wrapper">
            {/* PREMIUM HERO */}
            <section
                className="work-modern-hero"
                style={{ backgroundImage: `url('${heroImage}')` }}
            >
                <div className="container">
                    <div className="work-hero-content" dir={isRTL ? "rtl" : "ltr"}>
                        <span className="work-hero-badge">
                            {isRTL ? 'تأشيرة عمل تخصصية' : 'Specialized Work Visa'}
                        </span>
                        <h1 className="work-hero-title">{data.title}</h1>
                        <p className="work-hero-description">{data.subtitle || data.hero?.subtitle}</p>

                        <div className="hero-actions d-flex gap-3 justify-content-center">
                            <Link href="/contact" className="w-btn-primary text-decoration-none">
                                {isRTL ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
                            </Link>
                            <Link href="/work-visas" className="w-btn-outline text-decoration-none">
                                {isRTL ? 'العودة للمسارات' : 'Back to Paths'}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW */}
            <section className="work-section">
                <div className="container" dir={isRTL ? "rtl" : "ltr"}>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="work-section-header text-start mb-4">
                                <h2 className="work-section-title text-start">{data.overview?.title || (isRTL ? 'لمحة عامة' : 'Overview')}</h2>
                            </div>
                            <p className="lead text-muted">{data.overview?.description}</p>
                            {data.overview?.quote && (
                                <div className="p-4 bg-light border-start border-4 border-primary mt-4 italic">
                                    <p className="mb-0 fs-5">{data.overview.quote}</p>
                                </div>
                            )}
                        </div>
                        <div className="col-lg-6">
                            <div className="work-visa-item-card" style={{ backgroundColor: '#1e293b', color: '#fff' }}>
                                <h4 className="fw-bold mb-4 text-white">{isRTL ? 'معلومات سريعة' : 'Quick Information'}</h4>
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex justify-content-between border-bottom border-secondary pb-2">
                                        <span>{isRTL ? 'مدة الصلاحية' : 'Validity'}</span>
                                        <span className="fw-bold text-info">{data.validity?.duration || data.validity || 'N/A'}</span>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom border-secondary pb-2">
                                        <span>{isRTL ? 'وقت المعالجة' : 'Processing Time'}</span>
                                        <span className="fw-bold text-info">{data.processingTime?.duration || data.processing_time || 'N/A'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* REQUIREMENTS */}
            <section className="work-section" style={{ backgroundColor: '#fff' }}>
                <div className="container" dir={isRTL ? "rtl" : "ltr"}>
                    <div className="work-section-header">
                        <h2 className="work-section-title">{data.requirements?.title || (isRTL ? 'الشروط والمتطلبات' : 'Requirements')}</h2>
                    </div>
                    <div className="work-check-grid">
                        {(data.requirements?.items || data.requirements?.list || []).map((req: string, idx: number) => (
                            <div key={idx} className="work-check-item">
                                <i className="fas fa-check-double"></i>
                                <span className="fw-medium">{req}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS STEPS */}
            {data.process?.steps && (
                <section className="work-section">
                    <div className="container" dir={isRTL ? "rtl" : "ltr"}>
                        <div className="work-section-header">
                            <h2 className="work-section-title">{data.process.title}</h2>
                        </div>
                        <div className="row g-4">
                            {data.process.steps.map((step: any, idx: number) => (
                                <div key={idx} className="col-lg-4">
                                    <div className="work-visa-item-card">
                                        <div className="work-card-icon" style={{ backgroundColor: 'var(--w-secondary)', color: '#fff' }}>
                                            {idx + 1}
                                        </div>
                                        <h4 className="fw-bold mt-3 mb-3">{step.title}</h4>
                                        <p className="text-muted small mb-0">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* DOCUMENTS */}
            <section className="work-section" style={{ backgroundColor: '#fff' }}>
                <div className="container" dir={isRTL ? "rtl" : "ltr"}>
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <h3 className="h2 fw-bold mb-5 border-bottom pb-4">
                                {data.documents?.title || (isRTL ? 'المستندات المطلوبة' : 'Required Documents')}
                            </h3>
                            <div className="d-flex flex-column gap-3">
                                {(data.documents?.items || data.documents?.list || []).map((doc: string, idx: number) => (
                                    <div key={idx} className="work-check-item" style={{ border: 'none', background: 'transparent', padding: '0' }}>
                                        <i className="fas fa-file-invoice text-info"></i>
                                        <span>{doc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="work-visa-item-card">
                                <h3 className="fw-bold mb-4">{data.fees?.title || (isRTL ? 'التكاليف المتوقعة' : 'Expected Fees')}</h3>
                                <div className="d-flex flex-column gap-3">
                                    {(data.fees?.items || data.fees?.breakdown || []).map((fee: any, idx: number) => (
                                        <div key={idx} className="d-flex justify-content-between align-items-center">
                                            <span className="text-muted">{typeof fee === 'string' ? fee : fee.item}</span>
                                            <span className="fw-bold text-success">{typeof fee === 'string' ? '' : fee.amount}</span>
                                        </div>
                                    ))}
                                    {data.fees?.note && <p className="mt-4 small text-muted fst-italic">{data.fees.note}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WITH KAYA SECTION */}
            <section className="work-section">
                <div className="container" dir={isRTL ? "rtl" : "ltr"}>
                    <div className="work-visa-item-card" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', color: '#fff' }}>
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6">
                                <h2 className="display-5 fw-bold mb-4 text-white">
                                    {data.withKaya?.title || data.with_kaya?.title}
                                </h2>
                                <p className="lead text-white-50">
                                    {data.withKaya?.description || data.with_kaya?.description || (isRTL ? 'نحن نرافقك في كل خطوة للحصول على وظيفة أحلامك في الخارج.' : 'We accompany you every step of the way to land your dream job abroad.')}
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-3">
                                    {(data.withKaya?.services || data.with_kaya?.services || []).map((service: string, idx: number) => (
                                        <div key={idx} className="col-md-6">
                                            <div className="p-3 rounded-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                                <i className="fas fa-check-circle text-info me-2"></i>
                                                <span>{service}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="work-cta-banner">
                <div className="container" dir={isRTL ? "rtl" : "ltr"}>
                    <h2 className="display-4 fw-bold mb-4">{data.cta?.title || (isRTL ? 'هل أنت مستعد لبدء مسارك المهني؟' : 'Ready to start your professional path?')}</h2>
                    <Link href="/contact" className="w-btn-primary px-5 text-decoration-none">
                        {data.cta?.button_text || (isRTL ? 'تواصل معنا الآن' : 'Contact Us Now')}
                    </Link>
                </div>
            </section>
        </div>
    );
}
