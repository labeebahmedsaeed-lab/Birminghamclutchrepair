import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { serviceDetails } from '../data/content';
import SafeImage from '../components/SafeImage';
import WhatsAppLink from '../components/WhatsAppLink';
import './ServicePage.css';

export default function ServicePage() {
  const { slug } = useParams();
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <div className="page-hero">
        <div className="container">
          <h1>Service not found</h1>
          <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="service-page__hero">
        <SafeImage src={service.image} alt={service.title} />
        <div className="service-page__hero-overlay" />
        <div className="container service-page__hero-content">
          <Link to="/#services" className="service-page__back">
            <ArrowLeft size={18} />
            All services
          </Link>
          <h1>{service.title}</h1>
        </div>
      </div>

      <section className="section">
        <div className="container service-page__body">
          <div className="service-page__main">
            <p className="service-page__intro">{service.intro}</p>
            <h2>What we offer</h2>
            <ul className="service-page__points">
              {service.points.map((point) => (
                <li key={point}>
                  <Check size={18} />
                  {point}
                </li>
              ))}
            </ul>
            <p className="service-page__note">
              Cheap doesn&apos;t mean cutting corners — every job is completed by
              qualified clutch specialists using quality parts, backed by our
              12-month warranty.
            </p>
            <div className="service-page__actions">
              <Link to="/contact" className="btn btn-primary">
                Get a free quote
              </Link>
              <WhatsAppLink className="btn btn-outline">WhatsApp us</WhatsAppLink>
            </div>
          </div>

          <aside className="service-page__sidebar">
            <div className="service-page__card">
              <h3>Why choose us?</h3>
              <ul>
                <li>Up to 60% less than dealers</li>
                <li>Professional Birmingham technicians</li>
                <li>OE-quality parts only</li>
                <li>12-month warranty</li>
                <li>Free collection &amp; delivery*</li>
              </ul>
              <WhatsAppLink className="btn btn-primary">WhatsApp now</WhatsAppLink>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
