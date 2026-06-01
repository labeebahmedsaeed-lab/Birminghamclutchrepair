import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import WhatsAppLink from './WhatsAppLink';
import './Pricing.css';

const tiers = [
  {
    name: 'Clutch Repair',
    from: 'From £149',
    desc: 'Diagnosis, minor repairs and hydraulic fixes',
    features: ['Free inspection', 'OE-spec parts', 'Same-day when possible'],
  },
  {
    name: 'Clutch Replacement',
    from: 'From £399',
    desc: 'Full clutch kit supply and fit — most popular',
    features: ['Up to 60% vs dealers', '12-month warranty', 'Free collection*'],
    featured: true,
  },
  {
    name: 'Performance / DMF',
    from: 'Quote',
    desc: 'Dual-mass flywheel and specialist vehicles',
    features: ['Written estimate', 'Premium kits available', 'Fleet discounts'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <div className="pricing__intro">
          <span className="section-label">Transparent pricing</span>
          <h2 className="section-title">Cheap clutch work — no nasty surprises</h2>
          <p className="section-subtitle">
            Every quote is tailored to your vehicle. Call with your registration
            for an accurate price in minutes.
          </p>
        </div>

        <div className="pricing__grid">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`pricing__card ${tier.featured ? 'pricing__card--featured' : ''}`}
            >
              {tier.featured && <span className="pricing__badge">Best value</span>}
              <h3>{tier.name}</h3>
              <p className="pricing__from">{tier.from}</p>
              <p className="pricing__desc">{tier.desc}</p>
              <ul>
                {tier.features.map((f) => (
                  <li key={f}>
                    <Check size={16} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary">
                Get a quote
              </Link>
            </article>
          ))}
        </div>

        <p className="pricing__note">
          *Prices are indicative — final quote depends on vehicle make, model and
          parts required. Free collection &amp; delivery within Birmingham service area.
        </p>

        <div className="pricing__cta-bar">
          <div>
            <strong>Need a price right now?</strong>
            <span>Speak to a clutch specialist today</span>
          </div>
          <WhatsAppLink className="btn btn-primary">WhatsApp us</WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
