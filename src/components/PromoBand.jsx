import Marquee from './Marquee';
import TrustBadges from './TrustBadges';
import './PromoBand.css';

/** Marquee + trust cards as separate stacked rows (no overlap). */
export default function PromoBand() {
  return (
    <div className="promo-band">
      <Marquee />
      <TrustBadges />
    </div>
  );
}
