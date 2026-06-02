import { IMAGES } from './images';

export const PHONE = '07405 851192';
export const PHONE_INTL = '+44 7405 851192';
export const WHATSAPP_NUMBER = '447405851192';
const whatsappText = encodeURIComponent(
  'Hi, I would like a free clutch repair quote from Birmingham Clutch Repair.'
);
/** All “Call” buttons open WhatsApp for this number */
export const PHONE_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;
/** Spread onto <a> tags for WhatsApp (opens app or web.whatsapp.com) */
export const WHATSAPP_LINK = {
  href: PHONE_HREF,
  target: '_blank',
  rel: 'noopener noreferrer',
};
export const FORM_RECIPIENT_EMAIL = 'labeebahmedsaeed@gmail.com';
export const EMAIL = 'info@birminghamclutchrepair.co.uk';
export const BUSINESS_NAME = 'Birmingham Clutch Repair';

export const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Services',
    children: [
      { label: 'Clutch Repairs', path: '/services/clutch-repairs' },
      { label: 'Clutch Replacement', path: '/services/clutch-replacement' },
      { label: 'Clutch Change', path: '/services/clutch-change' },
      { label: 'Clutch Fitting', path: '/services/clutch-fitting' },
    ],
  },
  {
    label: 'Why Us',
    children: [
      { label: 'Our Specialists', path: '/#about' },
      { label: 'Areas We Cover', path: '/#areas' },
      { label: 'Common Problems', path: '/#faq' },
    ],
  },
  { label: 'Pricing', path: '/#pricing' },
  { label: 'Contact', path: '/contact' },
];

export const trustBadges = [
  {
    icon: 'map-pin',
    title: 'Birmingham Based',
    text: 'Local garage serving Birmingham & the West Midlands',
  },
  {
    icon: 'truck',
    title: 'Free Collection & Delivery',
    text: 'We pick up and return your car at no extra cost*',
  },
  {
    icon: 'shield-check',
    title: '12-Month Warranty',
    text: '12,000-mile warranty on parts and labour',
  },
  {
    icon: 'badge-pound-sterling',
    title: 'Honest Low Prices',
    text: 'Up to 60% cheaper than main dealer quotes',
  },
];

export const services = [
  {
    slug: 'clutch-repairs',
    title: 'Clutch Repairs',
    short:
      'Expert diagnosis and repair — fix slipping, noise and wear without paying dealer prices.',
    image: IMAGES.clutchRepairs,
  },
  {
    slug: 'clutch-replacement',
    title: 'Clutch Replacement',
    short:
      'Full clutch kit replacement using quality OE-spec parts fitted by certified technicians.',
    image: IMAGES.clutchReplacement,
  },
  {
    slug: 'clutch-change',
    title: 'Clutch Change',
    short:
      'Fast same-day clutch changes on most vehicles — affordable rates, professional finish.',
    image: IMAGES.clutchChange,
  },
  {
    slug: 'clutch-fitting',
    title: 'Clutch Fitting',
    short:
      'Precision clutch fitting for all makes and models — from city cars to vans.',
    image: IMAGES.clutchFitting,
  },
];

export const serviceDetails = {
  'clutch-repairs': {
    title: 'Clutch Repairs in Birmingham',
    intro:
      'Slipping clutch, grinding gears or a burning smell? Our Birmingham technicians diagnose faults quickly and repair only what is needed — keeping your bill low without cutting corners.',
    points: [
      'Full clutch system inspection',
      'Hydraulic and cable clutch repairs',
      'Flywheel resurfacing where required',
      'Transparent quote before any work starts',
    ],
    image: IMAGES.clutchRepairsLarge,
  },
  'clutch-replacement': {
    title: 'Clutch Replacement Birmingham',
    intro:
      'When repair is not enough, we supply and fit complete clutch kits at prices well below main dealers. Every replacement is carried out by experienced clutch specialists.',
    points: [
      'OE-quality clutch kits',
      'Dual-mass flywheel replacement available',
      'Road test before handover',
      '12-month / 12,000-mile warranty',
    ],
    image: IMAGES.clutchReplacementLarge,
  },
  'clutch-change': {
    title: 'Clutch Change Services',
    intro:
      'Need a clutch change fast? Most jobs are completed within a day. We combine speed with meticulous workmanship so you get back on the road safely and affordably.',
    points: [
      'Same-day service on many vehicles',
      'All popular UK makes and models',
      'Competitive fixed-price quotes',
      'Free collection and delivery in Birmingham*',
    ],
    image: IMAGES.clutchChangeLarge,
  },
  'clutch-fitting': {
    title: 'Professional Clutch Fitting',
    intro:
      'Already have parts? We can fit customer-supplied clutches, or supply our own trusted brands. Our workshop is equipped for accurate, long-lasting clutch fitting.',
    points: [
      'Laser-aligned fitting process',
      'Torque-spec reassembly',
      'Post-fit bedding-in advice',
      'Fleet and trade welcome',
    ],
    image: IMAGES.clutchFittingLarge,
  },
};

export const faqs = [
  {
    q: 'What are the signs my clutch needs repair or replacement?',
    a: 'Watch for difficulty changing gear, clutch slip (revs rise but speed does not), grinding or squealing, a high biting point, or a burning smell. If you notice any of these in Birmingham traffic, book a free check with our team.',
  },
  {
    q: 'How long does a clutch replacement take?',
    a: 'Most clutch replacements take between 4 and 8 hours depending on your vehicle. We will give you an accurate timescale when you call with your registration number.',
  },
  {
    q: 'Why are you cheaper than main dealers?',
    a: 'We are an independent specialist with lower overheads, no franchise fees, and direct parts supply. You get the same professional standards and quality parts — without the premium showroom price tag.',
  },
  {
    q: 'Do you use genuine or OE-quality parts?',
    a: 'Yes. We fit OE-spec clutch kits from trusted manufacturers so your vehicle performs as the maker intended, backed by our 12-month warranty.',
  },
  {
    q: 'What areas around Birmingham do you cover?',
    a: 'We serve Birmingham city centre, Edgbaston, Erdington, Solihull, Sutton Coldfield, Smethwick, West Bromwich, and wider West Midlands. Free collection and delivery is available within our local service area.',
  },
  {
    q: 'What warranty do you offer?',
    a: 'All clutch repairs and replacements include a no-quibble 12-month or 12,000-mile warranty covering parts and labour for complete peace of mind.',
  },
];

export const areas = [
  'Birmingham City Centre',
  'Edgbaston',
  'Erdington',
  'Solihull',
  'Sutton Coldfield',
  'Harborne',
  'Moseley',
  'Smethwick',
  'West Bromwich',
  'Dudley',
];
