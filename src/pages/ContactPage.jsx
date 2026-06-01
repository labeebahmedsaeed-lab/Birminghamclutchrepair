import ContactForm from '../components/ContactForm';
import { PHONE, WHATSAPP_LINK } from '../data/content';
import WhatsAppLink from '../components/WhatsAppLink';

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Contact</span>
          <h1>Get your free clutch quote</h1>
          <p>
            Tell us about your vehicle and we&apos;ll get back to you with an honest,
            competitive price — or message us on WhatsApp:{' '}
            <a {...WHATSAPP_LINK} style={{ color: 'var(--color-accent)' }}>
              {PHONE}
            </a>
            .
          </p>
          <WhatsAppLink className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
            WhatsApp {PHONE}
          </WhatsAppLink>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <ContactForm compact />
        </div>
      </section>
    </>
  );
}
