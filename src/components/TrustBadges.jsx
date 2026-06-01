import { MapPin, Truck, ShieldCheck, BadgePoundSterling } from 'lucide-react';
import { trustBadges } from '../data/content';
import './TrustBadges.css';

const iconMap = {
  'map-pin': MapPin,
  truck: Truck,
  'shield-check': ShieldCheck,
  'badge-pound-sterling': BadgePoundSterling,
};

export default function TrustBadges() {
  return (
    <section className="trust">
      <div className="container">
        <div className="trust__grid">
          {trustBadges.map((badge) => {
            const Icon = iconMap[badge.icon];
            return (
              <article key={badge.title} className="trust__card">
                <div className="trust__icon">
                  <Icon size={26} />
                </div>
                <h3>{badge.title}</h3>
                <p>{badge.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
