import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import WhatsAppLink from './WhatsAppLink';
import { PHONE } from '../data/content';
import { IMAGES } from '../data/images';
import SafeImage from './SafeImage';
import './Hero.css';

const highlights = [
  'Up to 60% less than main dealers',
  'Qualified clutch specialists',
  'Same-day service available',
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <SafeImage
          src={IMAGES.hero}
          alt="Professional mechanic working on a vehicle in a modern garage"
        />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Birmingham&apos;s trusted clutch garage
        </div>

        <h1 className="hero__title">
          Cheap &amp; reliable
          <span className="hero__title-accent"> clutch repair</span>
          <br />
          done by professionals
        </h1>

        <p className="hero__text">
          Expert clutch repairs, replacements and fitting across Birmingham —
          honest prices, quality OE parts, and work you can depend on.
        </p>

        <ul className="hero__highlights">
          {highlights.map((item) => (
            <li key={item}>
              <CheckCircle2 size={18} />
              {item}
            </li>
          ))}
        </ul>

        <div className="hero__actions">
          <WhatsAppLink className="btn btn-primary hero__btn-pulse" iconSize={20}>
            WhatsApp {PHONE}
          </WhatsAppLink>
          <Link to="/contact" className="btn btn-outline">
            Get a free quote
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="hero__stat-card">
          <div className="hero__stat">
            <strong>60%</strong>
            <span>avg. saving vs dealers</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <strong>12 mo</strong>
            <span>warranty included</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <strong>Same day</strong>
            <span>on many vehicles</span>
          </div>
        </div>
      </div>
    </section>
  );
}
