import './Marquee.css';

const items = [
  'FREE QUOTE TODAY',
  'UP TO 60% OFF DEALER PRICES',
  'CLUTCH REPAIRS',
  'CLUTCH REPLACEMENT',
  'CLUTCH FITTING',
  'CLUTCH CHANGE',
  'BIRMINGHAM & WEST MIDLANDS',
  'PROFESSIONAL TECHNICIANS',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {doubled.map((text, i) => (
          <span key={`${text}-${i}`} className="marquee__item">
            {text}
            <span className="marquee__dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
