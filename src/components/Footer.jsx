import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { BUSINESS_NAME, PHONE, EMAIL, services } from '../data/content';
import WhatsAppLink from './WhatsAppLink';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-icon">BC</span>
            <strong>{BUSINESS_NAME}</strong>
          </Link>
          <p>
            Cheap, reliable clutch repair and replacement in Birmingham — carried
            out by professional technicians you can trust.
          </p>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Quick links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/#pricing">Pricing</a>
            </li>
            <li>
              <a href="/#faq">FAQs</a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Get in touch</h4>
          <WhatsAppLink showIcon iconSize={16}>
            WhatsApp {PHONE}
          </WhatsAppLink>
          <a href={`mailto:${EMAIL}`}>
            <Mail size={16} />
            {EMAIL}
          </a>
          <span>
            <MapPin size={16} />
            Birmingham, West Midlands, UK
          </span>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} {BUSINESS_NAME}. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
