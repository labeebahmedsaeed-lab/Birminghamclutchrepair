import { MapPin } from 'lucide-react';
import { areas } from '../data/content';
import './Areas.css';

export default function Areas() {
  return (
    <section id="areas" className="areas section">
      <div className="container areas__inner">
        <div className="areas__content">
          <span className="section-label">Coverage</span>
          <h2 className="section-title">Serving Birmingham &amp; the West Midlands</h2>
          <p className="section-subtitle">
            Based in Birmingham with free collection and delivery across our local
            service area. Wherever you are in the city, we make clutch repair
            convenient and affordable.
          </p>
        </div>
        <ul className="areas__list">
          {areas.map((area) => (
            <li key={area}>
              <MapPin size={16} />
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
