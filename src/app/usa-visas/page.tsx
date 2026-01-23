'use client'
import "@/styles/usa-visa-premium.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import usaVisasData from '@/data/usa-visas-main.json'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export default function USAVisasPage() {
  const { locale } = useI18n()
  const data = locale === 'ar' ? usaVisasData.ar : usaVisasData.en
  const isRTL = locale === 'ar'

  // PRECISE 50-STATE IMAGE REPOSITORY (Verified Unsplash & Local Assets)
  const stateImages: Record<string, string> = {
    // English Keys
    "Alabama": "https://images.unsplash.com/photo-1541416972235-9611db9f96b9?auto=format&fit=crop&q=80&w=1200",
    "Alaska": "https://images.unsplash.com/photo-1440582096070-fa5961d9d682?auto=format&fit=crop&q=80&w=1200",
    "Arizona": "/us_states_arizona_canyon.png",
    "Arkansas": "https://images.unsplash.com/photo-1563908304602-53413da0592a?auto=format&fit=crop&q=80&w=1200",
    "California": "/us_states_slider_1_california.png",
    "Colorado": "https://images.unsplash.com/photo-1549405164-900ffeddef45?auto=format&fit=crop&q=80&w=1200",
    "Connecticut": "https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&q=80&w=1200",
    "Delaware": "https://images.unsplash.com/photo-1621255651815-4a690f0ca9b6?auto=format&fit=crop&q=80&w=1200",
    "Florida": "/us_states_slider_3_florida.png",
    "Georgia": "https://images.unsplash.com/photo-1523633580190-6750974ed173?auto=format&fit=crop&q=80&w=1200",
    "Hawaii": "/us_states_hawaii_beach.png",
    "Idaho": "https://images.unsplash.com/photo-1516900441532-3fc5c3036495?auto=format&fit=crop&q=80&w=1200",
    "Illinois": "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&q=80&w=1200",
    "Indiana": "https://images.unsplash.com/photo-1558231575-b65fb7bb3a0c?auto=format&fit=crop&q=80&w=1200",
    "Iowa": "https://images.unsplash.com/photo-1559406041-0164626194b6?auto=format&fit=crop&q=80&w=1200",
    "Kansas": "https://images.unsplash.com/photo-1541416972235-9611db9f96b9?auto=format&fit=crop&q=80&w=1200",
    "Kentucky": "https://images.unsplash.com/photo-1496354452033-c702c2e5668e?auto=format&fit=crop&q=80&w=1200",
    "Louisiana": "https://images.unsplash.com/photo-1533282960533-51328aa49826?auto=format&fit=crop&q=80&w=1200",
    "Maine": "https://images.unsplash.com/photo-1501949997128-2fbb9f6429f1?auto=format&fit=crop&q=80&w=1200",
    "Maryland": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200",
    "Massachusetts": "https://images.unsplash.com/photo-1473163928189-39a0c8a95743?auto=format&fit=crop&q=80&w=1200",
    "Michigan": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200",
    "Minnesota": "https://images.unsplash.com/photo-1574341517406-8153ce2b9183?auto=format&fit=crop&q=80&w=1200",
    "Mississippi": "https://images.unsplash.com/photo-1621255651815-4a690f0ca9b6?auto=format&fit=crop&q=80&w=1200",
    "Missouri": "https://images.unsplash.com/photo-1545167622-3a6ac756aff4?auto=format&fit=crop&q=80&w=1200",
    "Montana": "https://images.unsplash.com/photo-1499244015902-aac01efee479?auto=format&fit=crop&q=80&w=1200",
    "Nebraska": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
    "Nevada": "/us_states_slider_4_nevada.png",
    "New Hampshire": "https://images.unsplash.com/photo-1627311140026-6a56f6583995?auto=format&fit=crop&q=80&w=1200",
    "New Jersey": "https://images.unsplash.com/photo-1558231575-b65fb7bb3a0c?auto=format&fit=crop&q=80&w=1200",
    "New Mexico": "https://images.unsplash.com/photo-1541416972235-9611db9f96b9?auto=format&fit=crop&q=80&w=1200",
    "New York": "/us_states_slider_2_newyork.png",
    "North Carolina": "https://images.unsplash.com/photo-1549405164-900ffeddef45?auto=format&fit=crop&q=80&w=1200",
    "North Dakota": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1200",
    "Ohio": "https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?auto=format&fit=crop&q=80&w=1200",
    "Oklahoma": "https://images.unsplash.com/photo-1547394830-af2964f87ef4?auto=format&fit=crop&q=80&w=1200",
    "Oregon": "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1200",
    "Pennsylvania": "https://images.unsplash.com/photo-1570126618953-d437176e8c79?auto=format&fit=crop&q=80&w=1200",
    "Rhode Island": "https://images.unsplash.com/photo-1543831343-73d8a17688fc?auto=format&fit=crop&q=80&w=1200",
    "South Carolina": "https://images.unsplash.com/photo-1616422315682-9653ca26871c?auto=format&fit=crop&q=80&w=1200",
    "South Dakota": "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&q=80&w=1200",
    "Tennessee": "https://images.unsplash.com/photo-1547014762-b13c7a36c934?auto=format&fit=crop&q=80&w=1200",
    "Texas": "/us_states_texas_skyline.png",
    "Utah": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200",
    "Vermont": "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&q=80&w=1200",
    "Virginia": "https://images.unsplash.com/photo-1570126618953-d437176e8c79?auto=format&fit=crop&q=80&w=1200",
    "Washington": "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&q=80&w=1200",
    "West Virginia": "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1200",
    "Wisconsin": "https://images.unsplash.com/photo-1621255850935-0f0f5b902095?auto=format&fit=crop&q=80&w=1200",
    "Wyoming": "https://images.unsplash.com/photo-1621255452326-0e452be4be88?auto=format&fit=crop&q=80&w=1200",

    // Arabic Map
    "كاليفورنيا": "/us_states_slider_1_california.png",
    "نيويورك": "/us_states_slider_2_newyork.png",
    "فلوريدا": "/us_states_slider_3_florida.png",
    "نيفادا": "/us_states_slider_4_nevada.png",
    "تكساس": "/us_states_texas_skyline.png",
    "أريزونا": "/us_states_arizona_canyon.png",
    "هاواي": "/us_states_hawaii_beach.png",
    "ألاسكا": "https://images.unsplash.com/photo-1440582096070-fa5961d9d682?auto=format&fit=crop&q=80&w=1200",
    "ألاباما": "https://images.unsplash.com/photo-1541416972235-9611db9f96b9?auto=format&fit=crop&q=80&w=1200",
    "أركنساس": "https://images.unsplash.com/photo-1563908304602-53413da0592a?auto=format&fit=crop&q=80&w=1200",
    "كولورادو": "https://images.unsplash.com/photo-1549405164-900ffeddef45?auto=format&fit=crop&q=80&w=1200",
    "كونيتيكت": "https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&q=80&w=1200",
    "ديلاوير": "https://images.unsplash.com/photo-1621255651815-4a690f0ca9b6?auto=format&fit=crop&q=80&w=1200",
    "جورجيا": "https://images.unsplash.com/photo-1523633580190-6750974ed173?auto=format&fit=crop&q=80&w=1200",
    "آيداهو": "https://images.unsplash.com/photo-1516900441532-3fc5c3036495?auto=format&fit=crop&q=80&w=1200",
    "إلينوي": "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&q=80&w=1200",
    "إنديانا": "https://images.unsplash.com/photo-1558231575-b65fb7bb3a0c?auto=format&fit=crop&q=80&w=1200",
    "آيوا": "https://images.unsplash.com/photo-1559406041-0164626194b6?auto=format&fit=crop&q=80&w=1200",
    "كانساس": "https://images.unsplash.com/photo-1541416972235-9611db9f96b9?auto=format&fit=crop&q=80&w=1200",
    "كنتاكي": "https://images.unsplash.com/photo-1496354452033-c702c2e5668e?auto=format&fit=crop&q=80&w=1200",
    "لويزيانا": "https://images.unsplash.com/photo-1533282960533-51328aa49826?auto=format&fit=crop&q=80&w=1200",
    "ماين": "https://images.unsplash.com/photo-1501949997128-2fbb9f6429f1?auto=format&fit=crop&q=80&w=1200",
    "ماريلاند": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200",
    "ماساتشوستس": "https://images.unsplash.com/photo-1473163928189-39a0c8a95743?auto=format&fit=crop&q=80&w=1200",
    "ميشيغان": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200",
    "مينيسوتا": "https://images.unsplash.com/photo-1574341517406-8153ce2b9183?auto=format&fit=crop&q=80&w=1200",
    "ميسيسيبي": "https://images.unsplash.com/photo-1621255651815-4a690f0ca9b6?auto=format&fit=crop&q=80&w=1200",
    "ميزوري": "https://images.unsplash.com/photo-1545167622-3a6ac756aff4?auto=format&fit=crop&q=80&w=1200",
    "مونتانا": "https://images.unsplash.com/photo-1499244015902-aac01efee479?auto=format&fit=crop&q=80&w=1200",
    "نبراسكا": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
    "نيوهامبشير": "https://images.unsplash.com/photo-1627311140026-6a56f6583995?auto=format&fit=crop&q=80&w=1200",
    "نيوجيرسي": "https://images.unsplash.com/photo-1558231575-b65fb7bb3a0c?auto=format&fit=crop&q=80&w=1200",
    "نيو مكسيكو": "https://images.unsplash.com/photo-1541416972235-9611db9f96b9?auto=format&fit=crop&q=80&w=1200",
    "نورث كارولاينا": "https://images.unsplash.com/photo-1549405164-900ffeddef45?auto=format&fit=crop&q=80&w=1200",
    "نورث داكوتا": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1200",
    "أوهايو": "https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?auto=format&fit=crop&q=80&w=1200",
    "أوكلاهوما": "https://images.unsplash.com/photo-1547394830-af2964f87ef4?auto=format&fit=crop&q=80&w=1200",
    "أوريغون": "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1200",
    "بنسلفانيا": "https://images.unsplash.com/photo-1570126618953-d437176e8c79?auto=format&fit=crop&q=80&w=1200",
    "رود آيلاند": "https://images.unsplash.com/photo-1543831343-73d8a17688fc?auto=format&fit=crop&q=80&w=1200",
    "ساوث كارولاينا": "https://images.unsplash.com/photo-1616422315682-9653ca26871c?auto=format&fit=crop&q=80&w=1200",
    "ساوث داكوتا": "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&q=80&w=1200",
    "تينيسي": "https://images.unsplash.com/photo-1547014762-b13c7a36c934?auto=format&fit=crop&q=80&w=1200",
    "يوتا": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200",
    "فيرمونت": "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&q=80&w=1200",
    "فيرجينيا": "https://images.unsplash.com/photo-1570126618953-d437176e8c79?auto=format&fit=crop&q=80&w=1200",
    "واشنطن": "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&q=80&w=1200",
    "ويست فيرجينيا": "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1200",
    "ويسكونسن": "https://images.unsplash.com/photo-1621255850935-0f0f5b902095?auto=format&fit=crop&q=80&w=1200",
    "وايومنغ": "https://images.unsplash.com/photo-1621255452326-0e452be4be88?auto=format&fit=crop&q=80&w=1200"
  }

  // Featured states for the slider (10 selected for high-quality visuals)
  const featuredStateNames = [
    "California", "New York", "Florida", "Texas", "Nevada",
    "Arizona", "Hawaii", "Alaska", "Illinois", "Washington"
  ];
  const featuredArabicNames = [
    "كاليفورنيا", "نيويورك", "فلوريدا", "تكساس", "نيفادا",
    "أريزونا", "هاواي", "ألاسكا", "إلينوي", "واشنطن"
  ];
  const featuredNames = isRTL ? featuredArabicNames : featuredStateNames;

  // Split data.states.list into Featured and Remaining
  const featuredStates = data.states.list.filter(state => featuredNames.includes(state));
  const remainingStates = data.states.list.filter(state => !featuredNames.includes(state));

  return (
    <div className="usa-page-wrapper">
      {/* PREMIUM HERO */}
      <section className="usa-hero-suite">
        <div className="usa-hero-bg-suite" style={{ backgroundImage: 'url("/usa-hero.png")' }}></div>
        <div className="usa-hero-overlay-suite"></div>
        <div className="container usa-hero-container">
          <div className="row align-items-center">
            <div className="col-lg-8" dir={isRTL ? "rtl" : "ltr"}>
              <span className="usa-hero-label">{isRTL ? "الولايات المتحدة الأمريكية" : "United States of America"}</span>
              <h1 className="usa-hero-title-suite">{data.title}</h1>
              <p className="usa-hero-subtitle-suite">{data.hero.subtitle}</p>

              <div className="usa-stats-row">
                <div className="usa-stat-box">
                  <span className="usa-stat-val">50</span>
                  <span className="usa-stat-desc">{isRTL ? "ولاية" : "States"}</span>
                </div>
                <div className="usa-stat-box">
                  <span className="usa-stat-val">6+</span>
                  <span className="usa-stat-desc">{isRTL ? "أنواع التأشيرات" : "Visa Types"}</span>
                </div>
                <div className="usa-stat-box">
                  <span className="usa-stat-val">1776</span>
                  <span className="usa-stat-desc">{isRTL ? "تأسست" : "Founded"}</span>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3 mt-5">
                <a href="#visa-types" className="btn-usa-primary">
                  {isRTL ? "استكشف التأشيرات" : "Explore Visas"}
                  <i className={`fas fa-arrow-${isRTL ? 'left' : 'right'}`}></i>
                </a>
                <Link href="/contact" className="btn-usa-outline">
                  {isRTL ? "احصل على استشارة" : "Get Consultation"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="usa-section bg-white">
        <div className="container">
          <div className="usa-section-head" dir={isRTL ? "rtl" : "ltr"}>
            <h2 className="usa-section-heading">{data.overview.heading}</h2>
            <p className="usa-section-subheading">{isRTL ? "نظرة شاملة على بلاد الفرص والفرص التعليمية والمهنية" : "A comprehensive look at the land of opportunities, educational and professional prospects"}</p>
          </div>
          <div className="row g-5" dir={isRTL ? "rtl" : "ltr"}>
            <div className="col-lg-6">
              <div className="p-4 rounded-4 bg-light border-start border-4 border-primary shadow-sm">
                <p className="lead fw-normal mb-0" style={{ lineHeight: '1.8', color: '#334155' }}>
                  {data.overview.description}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-4 rounded-4 bg-light border-start border-4 border-primary shadow-sm">
                <p className="lead fw-normal mb-0" style={{ lineHeight: '1.8', color: '#334155' }}>
                  {data.overview.additional}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATES SLIDER SECTION */}
      <section className="usa-section" style={{ backgroundColor: '#0f172a', paddingBottom: '100px' }}>
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="usa-section-head usa-section-head-light mb-5">
            <span className="usa-hero-label mb-3">{isRTL ? "اكتشف أمريكا" : "Discover America"}</span>
            <h2 className="usa-section-heading">{data.states.heading}</h2>
            <p className="usa-section-subheading mx-auto" style={{ maxWidth: '700px' }}>
              {isRTL ? "استعرض أهم الوجهات السياحية والاقتصادية في الولايات المتحدة" : "Explore the primary tourist and economic destinations in the USA"}
            </p>
          </div>

          <div className="usa-states-slider-wrap">
            <Swiper
              key={locale}
              dir={isRTL ? 'rtl' : 'ltr'}
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1.2}
              loop={true}
              speed={1000}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
              }}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 }
              }}
              className="statesSwiper"
              style={{ paddingBottom: '80px' }}
            >
              {featuredStates.map((state, i) => {
                const imageUrl = stateImages[state] || 'https://images.unsplash.com/photo-1501949997128-2fbb9f6429f1?auto=format&fit=crop&q=40&w=800';
                return (
                  <SwiperSlide key={i}>
                    <div className="usa-state-card">
                      <div className="usa-state-img" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                      <div className="usa-state-overlay"></div>
                      <div className="usa-state-content">
                        <span className="usa-state-tag">{isRTL ? "ولاية مميزة" : "Featured State"}</span>
                        <h3 className="usa-state-name">{state}</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* LIST OF REMAINING STATES */}
          <div className="mt-5 pt-5 border-top border-secondary border-opacity-25">
            <h4 className="text-white mb-4 fw-bold text-center" style={{ opacity: 0.8 }}>
              {isRTL ? "باقي الولايات الأمريكية" : "Remaining US States"}
            </h4>
            <div className="usa-states-names-grid">
              {remainingStates.map((state, i) => (
                <div key={i} className="usa-state-name-item">
                  <i className="fas fa-map-marker-alt me-2 text-primary opacity-50"></i>
                  {state}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REASONS SECTION */}
      <section className="usa-section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="usa-section-head" dir={isRTL ? "rtl" : "ltr"}>
            <h2 className="usa-section-heading">{data.why_travel.heading}</h2>
          </div>

          <div className="row g-4" dir={isRTL ? "rtl" : "ltr"}>
            {data.why_travel.reasons.map((reason, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="usa-card-premium">
                  <div className="usa-card-icon-wrap">
                    <i className="fas fa-check-double"></i>
                  </div>
                  <p className="usa-card-text fw-bold">{reason}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 text-center">
            <p className="usa-section-subheading fst-italic mx-auto" style={{ maxWidth: '800px' }}>
              "{data.why_travel.conclusion}"
            </p>
          </div>
        </div>
      </section>

      {/* VISA CATEGORIES SECTION */}
      <section id="visa-types" className="usa-section bg-white">
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="usa-section-head">
            <h2 className="usa-section-heading">{data.visa_categories.heading}</h2>
          </div>

          <div className="mb-5 p-5 rounded-5 shadow-lg border-0 bg-white">
            <div className="row align-items-center mb-5">
              <div className="col-lg-12">
                <div className="d-flex align-items-center gap-4 mb-4">
                  <div className="usa-card-icon-wrap mb-0" style={{ background: 'rgba(15, 23, 42, 0.05)' }}>
                    <i className="fas fa-passport"></i>
                  </div>
                  <h3 className="h2 fw-bold mb-0">{data.visa_categories.immigrant.title}</h3>
                </div>
                <p className="usa-section-subheading text-start mb-0" style={{ maxWidth: '100%' }}>{data.visa_categories.immigrant.description}</p>
              </div>
            </div>

            <div className="row g-4">
              {data.visa_categories.immigrant.types.map((type, i) => (
                <div className="col-md-4" key={i}>
                  <div className="p-4 rounded-4 h-100 bg-light border-0 transition-all hover:bg-slate-100">
                    <h5 className="fw-bold mb-3 text-primary">{type.name}</h5>
                    <p className="text-slate-600 small mb-0">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="usa-pathway-note">
              <div className="usa-pathway-icon">
                <i className="fas fa-flag-usa"></i>
              </div>
              <p className="usa-pathway-text">{data.visa_categories.immigrant.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY VISAS - GRID */}
      <section className="usa-section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="usa-section-head">
            <h2 className="usa-section-heading">{data.key_visas.heading}</h2>
          </div>

          <div className="row g-4">
            {data.key_visas.visas.map((visa, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <Link href={visa.link} className="text-decoration-none">
                  <div className="usa-card-premium">
                    <div className="d-flex justify-content-between align-items-start mb-4">
                      <div className="usa-card-icon-wrap mb-0">
                        <i className={`fas fa-${visa.icon}`}></i>
                      </div>
                      <span className="badge bg-primary rounded-pill px-4 py-2 fw-bold">{visa.code}</span>
                    </div>
                    <h5 className="usa-card-title">{visa.name}</h5>
                    <p className="usa-card-text mb-4">{visa.description}</p>
                    <div className="mt-auto pt-4 border-top d-flex align-items-center text-primary fw-bold">
                      {isRTL ? "عرض التفاصيل" : "View Details"}
                      <i className={`fas fa-chevron-${isRTL ? 'left' : 'right'} ms-2`}></i>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM SUITE CTA */}
      <section className="usa-section-cta-premium">
        <div className="usa-cta-bg-glow"></div>
        <div className="container" dir={isRTL ? "rtl" : "ltr"}>
          <div className="usa-cta-content-suite">
            <div className="usa-cta-glass-box">
              <h2 className="usa-cta-title-suite">{data.cta}</h2>
              <p className="usa-cta-subtitle-suite">
                {isRTL ? "فريق خبراء Kaya Visa جاهز لمساعدتك في الحصول على تأشيرتك الأمريكية بأمان وسرعة. انطلق نحو مستقبلك الآن." : "Kaya Visa's expert team is ready to help you get your US visa safely and quickly. Step towards your future now."}
              </p>
              <div className="d-flex flex-column flex-md-row gap-4 justify-content-center align-items-center">
                <Link href="/contact" className="btn-usa-primary">
                  <i className="fas fa-headset"></i>
                  {isRTL ? "ابدأ استشارتك الآن" : "Start Consultation Now"}
                </Link>
                <a href="tel:+1234567890" className="btn-usa-outline">
                  <i className="fas fa-phone-alt"></i>
                  {isRTL ? "تحدث مع خبير" : "Talk to Expert"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
