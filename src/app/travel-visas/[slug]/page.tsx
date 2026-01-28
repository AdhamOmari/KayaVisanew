'use client'
import "@/styles/schengen-styles.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Image from 'next/image'
import { useParams, notFound } from 'next/navigation'

import { useI18n } from '@/lib/i18n'
import Link from 'next/link'

// Batch Import
import travelAustralia from '@/data/travel-australia.json'
import travelAustria from '@/data/travel-austria.json'
import travelBelgium from '@/data/travel-belgium.json'
import travelBulgaria from '@/data/travel-bulgaria.json'
import travelCanada from '@/data/travel-canada.json'
import travelChina from '@/data/travel-china.json'
import travelCroatia from '@/data/travel-croatia.json'
import travelCzech from '@/data/travel-czech.json'
import travelDenmark from '@/data/travel-denmark.json'
import travelEstonia from '@/data/travel-estonia.json'
import travelFinland from '@/data/travel-finland.json'
import travelFrance from '@/data/travel-france.json'
import travelGermany from '@/data/travel-germany.json'
import travelGreece from '@/data/travel-greece.json'
import travelHungary from '@/data/travel-hungary.json'
import travelIceland from '@/data/travel-iceland.json'
import travelItaly from '@/data/travel-italy.json'
import travelJapan from '@/data/travel-japan.json'
import travelLatvia from '@/data/travel-latvia.json'
import travelLiechtenstein from '@/data/travel-liechtenstein.json'
import travelLithuania from '@/data/travel-lithuania.json'
import travelLuxembourg from '@/data/travel-luxembourg.json'
import travelMalta from '@/data/travel-malta.json'
import travelMexico from '@/data/travel-mexico.json'
import travelNetherlands from '@/data/travel-netherlands.json'
import travelNorway from '@/data/travel-norway.json'
import travelPoland from '@/data/travel-poland.json'
import travelPortugal from '@/data/travel-portugal.json'
import travelQatar from '@/data/travel-qatar.json'
import travelRomania from '@/data/travel-romania.json'
import travelSlovakia from '@/data/travel-slovakia.json'
import travelSlovenia from '@/data/travel-slovenia.json'
import travelSpain from '@/data/travel-spain.json'
import travelSweden from '@/data/travel-sweden.json'
import travelSwitzerland from '@/data/travel-switzerland.json'
import travelUae from '@/data/travel-uae.json'
import travelUk from '@/data/travel-uk.json'
import travelUsa from '@/data/travel-usa.json'

const countryDataMap: Record<string, any> = {
    australia: travelAustralia,
    austria: travelAustria,
    belgium: travelBelgium,
    bulgaria: travelBulgaria,
    canada: travelCanada,
    china: travelChina,
    croatia: travelCroatia,
    czech: travelCzech,
    denmark: travelDenmark,
    estonia: travelEstonia,
    finland: travelFinland,
    france: travelFrance,
    germany: travelGermany,
    greece: travelGreece,
    hungary: travelHungary,
    iceland: travelIceland,
    italy: travelItaly,
    japan: travelJapan,
    latvia: travelLatvia,
    liechtenstein: travelLiechtenstein,
    lithuania: travelLithuania,
    luxembourg: travelLuxembourg,
    malta: travelMalta,
    mexico: travelMexico,
    netherlands: travelNetherlands,
    norway: travelNorway,
    poland: travelPoland,
    portugal: travelPortugal,
    qatar: travelQatar,
    romania: travelRomania,
    slovakia: travelSlovakia,
    slovenia: travelSlovenia,
    spain: travelSpain,
    sweden: travelSweden,
    switzerland: travelSwitzerland,
    uae: travelUae,
    uk: travelUk,
    usa: travelUsa,
}

// Hero background mapping
const heroImages: Record<string, string> = {
    usa: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=2000',
    uk: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2000',
    canada: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=2000',
    australia: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=2000',
    mexico: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80&w=2000',
    china: 'https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?auto=format&fit=crop&q=80&w=2000',
    japan: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=2000',
    uae: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000',
    qatar: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=2000',
    germany: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=2000',
    france: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=2000',
    italy: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=2000',
    spain: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80&w=2000',
}

export default function TravelCountryPage() {
    const { locale } = useI18n()
    const params = useParams()
    const isRTL = locale === 'ar'
    const slug = params.slug as string

    if (!countryDataMap[slug]) {
        notFound()
    }

    const countryData = countryDataMap[slug]
    const data = locale === 'ar' ? countryData.ar : countryData.en
    const heroImage = heroImages[slug] || 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=2000'

    return (
        <div className="schengen-page-wrapper">
            {/* PREMIUM HERO SECTION */}
            <section
                className="schengen-hero"
                style={{ backgroundImage: `url('${heroImage}')` }}
            >
                <div className="container">
                    <div className="schengen-hero-content" dir={isRTL ? "rtl" : "ltr"}>
                        <span className="schengen-hero-subtitle">{isRTL ? "وجهتك القادمة" : "Your Next Destination"}</span>
                        <h1 className="schengen-hero-title">{data.title}</h1>
                        <p className="lead text-white-50 fs-4 mb-5">
                            {data.hero.subtitle}
                        </p>

                        <div className="hero-actions d-flex gap-3 justify-content-center">
                            <a href="#requirements" className="s-btn-primary text-decoration-none">
                                {isRTL ? "المتطلبات" : "Requirements"}
                            </a>
                            <Link href="/contact" className="s-btn-outline text-decoration-none">
                                {isRTL ? "استشارة مجانية" : "Free Consultation"}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* VISA TYPES SECTION */}
            <section className="schengen-section">
                <div className="container" dir={isRTL ? "rtl" : "ltr"}>
                    <div className="schengen-header">
                        <h2 className="schengen-section-title">{isRTL ? "أنواع التأشيرات" : "Visa Types"}</h2>
                    </div>
                    <div className="row g-4">
                        {data.visa_types.map((visa: any, idx: number) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <div className="schengen-visa-card">
                                    <div className="schengen-card-icon">
                                        <i className={`fas fa-${visa.icon}`}></i>
                                    </div>
                                    <h4 className="fw-bold mb-3">{visa.name}</h4>
                                    <p className="text-muted mb-0">{visa.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ATTRACTIONS GRID */}
            {data.attractions && data.attractions.length > 0 && (
                <section className="schengen-section" style={{ backgroundColor: '#fff' }}>
                    <div className="container" dir={isRTL ? "rtl" : "ltr"}>
                        <div className="schengen-header">
                            <h2 className="schengen-section-title">{isRTL ? "أبرز المعالم السياحية" : "Top Tourist Attractions"}</h2>
                        </div>
                        <div className="row g-4">
                            {data.attractions.map((attraction: any, idx: number) => (
                                <div key={idx} className="col-lg-4 col-md-6">
                                    <div className="attraction-box">
                                        <div className="attraction-img-container">
                                            <Image
                                                src={attraction.image}
                                                alt={attraction.name}
                                                fill
                                                className="attraction-image"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                        <div className="attraction-label">{attraction.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* REQUIREMENTS SECTION */}
            <section id="requirements" className="schengen-section">
                <div className="container" dir={isRTL ? "rtl" : "ltr"}>
                    <div className="schengen-header">
                        <h2 className="schengen-section-title">{isRTL ? "المتطلبات الأساسية" : "Requirements"}</h2>
                    </div>
                    <div className="schengen-checklist">
                        {data.requirements.map((req: string, idx: number) => (
                            <div key={idx} className="schengen-check-item">
                                <i className="fas fa-check-circle"></i>
                                <span className="fw-medium">{req}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="schengen-section" style={{ backgroundColor: '#fff' }}>
                <div className="container" dir={isRTL ? "rtl" : "ltr"}>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="schengen-stat-card">
                                <div className="schengen-stat-icon"><i className="fas fa-clock"></i></div>
                                <h3>{isRTL ? "وقت المعالجة" : "Processing Time"}</h3>
                                <div className="schengen-stat-value">{data.processing_time}</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="schengen-stat-card" style={{ backgroundColor: '#2d3748' }}>
                                <div className="schengen-stat-icon"><i className="fas fa-calendar-alt"></i></div>
                                <h3>{isRTL ? "صلاحية التأشيرة" : "Visa Validity"}</h3>
                                <div className="schengen-stat-value">{data.validity}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TIPS & WITH KAYA SECTION */}
            <section className="schengen-section">
                <div className="container" dir={isRTL ? "rtl" : "ltr"}>
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <h3 className="fw-bold mb-4 border-bottom pb-3">{isRTL ? "نصائح مهمة" : "Important Tips"}</h3>
                            <div className="d-flex flex-column gap-3">
                                {data.tips.map((tip: string, idx: number) => (
                                    <div key={idx} className="schengen-tip-item">
                                        <div className="tip-number">{idx + 1}</div>
                                        <p className="mb-0">{tip}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="fw-bold mb-4 border-bottom pb-3">{isRTL ? "لماذا كايا؟" : "Why Choose Kaya?"}</h3>
                            <div className="row g-3">
                                {data.with_kaya.map((service: string, idx: number) => (
                                    <div key={idx} className="col-md-6">
                                        <div className="schengen-service-pill">
                                            <i className="fas fa-check"></i>
                                            <span>{service}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="schengen-cta-box">
                <div className="container" dir={isRTL ? "rtl" : "ltr"}>
                    <h2 className="display-4 fw-bold mb-5">{data.cta}</h2>
                    <Link href="/contact" className="s-btn-primary text-decoration-none px-5">
                        {isRTL ? "ابدأ طلبك الآن" : "Start Now"}
                    </Link>
                </div>
            </section>
        </div>
    )
}
