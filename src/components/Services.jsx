import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/content';
import SafeImage from './SafeImage';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services__header">
          <div>
            <span className="section-label">Our services</span>
            <h2 className="section-title">Popular clutch services</h2>
            <p className="section-subtitle">
              From minor repairs to full replacements — professional work at
              prices you can afford.
            </p>
          </div>
          <Link to="/contact" className="btn btn-outline services__header-cta">
            View all pricing
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article key={service.slug} className="services__card">
              <div className="services__card-image">
                <SafeImage src={service.image} alt={service.title} loading="lazy" />
                <div className="services__card-overlay" />
              </div>
              <div className="services__card-body">
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="services__link"
                >
                  Read more
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
