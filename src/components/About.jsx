import { Link } from 'react-router-dom';
import { Wrench, Users, Award } from 'lucide-react';
import { BUSINESS_NAME } from '../data/content';
import { IMAGES } from '../data/images';
import SafeImage from './SafeImage';
import './About.css';

const features = [
  {
    icon: Wrench,
    title: 'Expert technicians',
    text: 'Years of clutch-only experience on every make and model.',
  },
  {
    icon: Users,
    title: 'Customer-first',
    text: 'Clear quotes, no hidden fees — you approve before we start.',
  },
  {
    icon: Award,
    title: 'Quality guaranteed',
    text: 'OE-spec parts and a 12-month warranty on every job.',
  },
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__grid">
        <div className="about__media">
          <SafeImage
            src={IMAGES.about}
            alt="Mechanic inspecting a car clutch assembly"
          />
          <div className="about__media-badge">
            <strong>15+</strong>
            <span>years serving Birmingham drivers</span>
          </div>
        </div>

        <div className="about__content">
          <span className="section-label">About us</span>
          <h2 className="section-title">
            Birmingham&apos;s affordable clutch specialists
          </h2>
          <p className="about__lead">
            Welcome to <strong>{BUSINESS_NAME}</strong> — your local team for
            cheap, dependable clutch repair and replacement across Birmingham and
            the West Midlands.
          </p>
          <p>
            Our qualified clutch technicians diagnose faults fast and complete
            repairs or full replacements efficiently, often the same day. We use
            only OE-quality parts so your car stays safe and performs as it
            should — without the main-dealer price tag.
          </p>
          <p>
            We match local prices and regularly beat competitor quotes. Every job
            includes our no-quibble 12-month, 12,000-mile warranty. Trust us to
            get you back on the road quickly, professionally, and affordably.
          </p>

          <div className="about__features">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="about__feature">
                <Icon size={22} />
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/contact" className="btn btn-primary">
            Request a free quote
          </Link>
        </div>
      </div>
    </section>
  );
}
