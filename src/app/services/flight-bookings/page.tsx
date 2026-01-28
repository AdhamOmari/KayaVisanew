import Link from 'next/link';
import styles from './flight-bookings.module.css';

export default function FlightBookingsPage() {
  return (
    <div className={styles.flightContainer}>
      {/* Hero Section */}
      <section className={styles.flightHero}>
        <div className={styles.heroContent}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Our Services</Link>
            <span>/</span>
            <span>Flight Bookings</span>
          </div>
          <h1 className={styles.heroTitle}>Flight Bookings</h1>
          <p className={styles.heroSubtitle}>
            Soar to your dream destinations with our premium flight booking services.
            Experience seamless travel planning with expert assistance.
          </p>
          <div className={styles.heroButtons}>
            <a href="/contact" className={styles.btnPrimary}>
              <i className="fas fa-rocket"></i>
              Start Booking
            </a>
            <a href="/services" className={styles.btnSecondary}>
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.contentSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Why Choose Our Flight Services?</h2>
          <p className={styles.sectionSubtitle}>
            Experience world-class flight booking with personalized service, competitive prices,
            and seamless travel planning that takes you exactly where you want to go.
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-globe"></i>
              </div>
              <h3 className={styles.featureTitle}>Global Network</h3>
              <p className={styles.featureDescription}>
                Access to over 1000 airlines worldwide with connections to every major destination.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3 className={styles.featureTitle}>Best Prices</h3>
              <p className={styles.featureDescription}>
                Guaranteed lowest fares with exclusive deals and early bird discounts.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-clock"></i>
              </div>
              <h3 className={styles.featureTitle}>24/7 Support</h3>
              <p className={styles.featureDescription}>
                Round-the-clock assistance for booking changes, cancellations, and emergencies.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className={styles.featureTitle}>Secure Booking</h3>
              <p className={styles.featureDescription}>
                Bank-grade security with instant confirmations and flexible payment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Comprehensive Flight Services</h2>
          <p className={styles.sectionSubtitle}>
            From economy to first-class, we handle every aspect of your air travel needs
          </p>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className="fas fa-plane-departure"></i>
              </div>
              <h3 className={styles.serviceTitle}>International Flights</h3>
              <p className={styles.serviceDescription}>
                Global destinations with premium airlines, business class options, and long-haul comfort.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className="fas fa-home"></i>
              </div>
              <h3 className={styles.serviceTitle}>Domestic Flights</h3>
              <p className={styles.serviceDescription}>
                Efficient domestic connections with budget-friendly options and regional expertise.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className="fas fa-tags"></i>
              </div>
              <h3 className={styles.serviceTitle}>Group Bookings</h3>
              <p className={styles.serviceDescription}>
                Special corporate rates and group discounts for teams, families, and organizations.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className="fas fa-route"></i>
              </div>
              <h3 className={styles.serviceTitle}>Multi-City Itineraries</h3>
              <p className={styles.serviceDescription}>
                Complex route planning for business travelers and adventure seekers worldwide.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3 className={styles.serviceTitle}>Last-Minute Deals</h3>
              <p className={styles.serviceDescription}>
                Spontaneous travel opportunities with flash sales and instant confirmations.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className="fas fa-concierge-bell"></i>
              </div>
              <h3 className={styles.serviceTitle}>VIP Services</h3>
              <p className={styles.serviceDescription}>
                Premium assistance with lounge access, priority boarding, and personal concierge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Take Flight?</h2>
          <p className={styles.ctaDescription}>
            Join thousands of satisfied travelers who trust Kaya for their flight booking needs.
            Your journey to extraordinary destinations starts here.
          </p>
          <a href="/contact" className={styles.ctaButton}>
            <i className="fas fa-paper-plane"></i>
            Book Your Flight Today
          </a>
        </div>
      </section>
    </div>
  );
}
