import Link from 'next/link';
<<<<<<< HEAD
import '@/styles/services.css';


const hotelData = require('@/data/service-hotel-bookings.json');
=======
>>>>>>> 0e7421f (Add visa pages data and services)

export default function HotelBookingsPage() {
  return (
<<<<<<< HEAD
    <div dir={dir} className="hotel-page">

      {/* Hero */}
      <section className="hotel-hero">
        <div className="hotel-container">
          <h1>{data.hero.title}</h1>
          <p className="hotel-hero-description">{data.hero.description}</p>
        </div>
      </section>

      <div className="hotel-container">

        {/* Advantages */}
        <section className="hotel-section">
          <h2 className="hotel-section-title">{data.advantages.title}</h2>
          <div className="hotel-row">
            {data.advantages.list.map((adv: any, index: number) => (
              <div key={index} className="hotel-col-md-4 hotel-col-sm-6 hotel-mb-4">
                <div className="hotel-feature-card">
                  <div className="hotel-feature-icon">
                    <i className={`fas ${adv.icon}`}></i>
                  </div>
                  <h3>{adv.title}</h3>
                  <p>{adv.description}</p>
                </div>
              </div>
            ))}
=======
    <div>
      {/* Hero Section */}
      <section className="service-hero" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)', padding: '100px 0', color: 'white' }}>
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: '20px', opacity: 0.9 }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            <Link href="/services" style={{ color: 'white' }}>Our Services</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            <span>Hotel Bookings</span>
          </div>
          <h1>Hotel Bookings</h1>
          <p className="hero-description">Find the perfect accommodation for your stay with Kaya's hotel booking services</p>
          <div className="mt-4">
            <Link href="/contact" className="btn btn-light me-3">Book Now</Link>
            <Link href="/services" className="btn btn-outline-light">Our Services</Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2>Hotel Booking Services</h2>
              <p className="lead">
                At Kaya, we help you find the perfect hotel accommodation for your business or leisure travel needs.
              </p>
              <p>
                Our extensive network of hotels worldwide ensures you get the best rates and locations for your stay.
              </p>
            </div>
>>>>>>> 0e7421f (Add visa pages data and services)
          </div>
        </div>
      </section>

<<<<<<< HEAD
        {/* Services */}
        <section className="hotel-section hotel-services-box">
          <h2 className="hotel-section-title">{data.services.title}</h2>
          <ul className="hotel-reasons-list">
            {data.services.list.map((item: string, index: number) => (
              <li key={index}>
                <i className="fas fa-hotel hotel-reason-icon"></i>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Value */}
        <section className="hotel-section">
          <h2 className="hotel-section-title">{data.value.title}</h2>
          <p className="hotel-text">{data.value.description}</p>
        </section>

        {/* Process */}
        <section className="hotel-section">
          <h2 className="hotel-section-title">{data.process.title}</h2>
          <div className="hotel-row">
            {data.process.steps.map((step: any, index: number) => (
              <div key={index} className="hotel-col-md-4 hotel-col-sm-6 hotel-mb-4">
                <div className="hotel-process-step">
                  <div className="hotel-process-icon">
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                  <h3 className="hotel-process-title">{step.title}</h3>
                  <p className="hotel-process-description">{step.description}</p>
                </div>
              </div>
            ))}
=======
      {/* Services Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3 className="text-center mb-4">Our Hotel Booking Services Include:</h3>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="fas fa-check text-success me-3"></i>
                  Worldwide hotel reservations
                </li>
                <li className="mb-3">
                  <i className="fas fa-check text-success me-3"></i>
                  Best price guarantee
                </li>
                <li className="mb-3">
                  <i className="fas fa-check text-success me-3"></i>
                  Flexible cancellation policies
                </li>
                <li className="mb-3">
                  <i className="fas fa-check text-success me-3"></i>
                  24/7 booking support
                </li>
                <li className="mb-3">
                  <i className="fas fa-check text-success me-3"></i>
                  Special corporate rates
                </li>
              </ul>
            </div>
>>>>>>> 0e7421f (Add visa pages data and services)
          </div>
        </div>
      </section>

<<<<<<< HEAD
        {/* CTA */}
        <section className="hotel-cta-section">
          <h2 className="hotel-cta-title">{data.cta.title}</h2>
          <Link href="/contact" className="hotel-cta-button">
            <i className="fas fa-phone hotel-cta-icon"></i>
            {data.cta.button}
          </Link>
        </section>

      </div>
=======
      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h3 className="mb-3">Ready to Book Your Hotel?</h3>
          <p className="mb-4">Contact our travel experts today for personalized hotel booking assistance.</p>
          <Link href="/contact" className="btn btn-light btn-lg">
            <i className="fas fa-hotel me-2"></i>
            Book Your Hotel Now
          </Link>
        </div>
      </section>
>>>>>>> 0e7421f (Add visa pages data and services)
    </div>
  );
}
