import Link from 'next/link';

export default function HotelBookingsPage() {
  return (
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
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>

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
    </div>
  );
}
