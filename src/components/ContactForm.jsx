import { useRef, useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { PHONE, FORM_RECIPIENT_EMAIL, BUSINESS_NAME } from '../data/content';
import WhatsAppLink from './WhatsAppLink';
import { IMAGES } from '../data/images';
import SafeImage from './SafeImage';
import './ContactForm.css';

const FORM_ACTION = `https://formsubmit.co/${FORM_RECIPIENT_EMAIL}`;
const IFRAME_NAME = 'formsubmit-frame';

export default function ContactForm({ compact = false }) {
  const formRef = useRef(null);
  const pendingRef = useRef(false);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = () => {
    pendingRef.current = true;
    setStatus('sending');
  };

  const handleIframeLoad = () => {
    if (!pendingRef.current) return;

    pendingRef.current = false;
    setStatus('success');
    formRef.current?.reset();
    setTimeout(() => setStatus('idle'), 8000);
  };

  const handleIframeError = () => {
    if (!pendingRef.current) return;

    pendingRef.current = false;
    setStatus('error');
  };

  return (
    <div className={`contact-form ${compact ? 'contact-form--compact' : ''}`}>
      {!compact && (
        <div className="contact-form__info">
          <span className="section-label">Contact us</span>
          <h2 className="section-title">Get your free clutch quote</h2>
          <p>
            Fill in the form and we&apos;ll email you back as soon as possible.
            Prefer WhatsApp?{' '}
            <WhatsAppLink showIcon={false} className="contact-form__wa-inline">
              {PHONE}
            </WhatsAppLink>
            .
          </p>
          <SafeImage
            src={IMAGES.contact}
            alt="Customer contacting for a clutch repair quote"
            className="contact-form__image"
          />
        </div>
      )}

      {/* Hidden iframe: form POST avoids CORS (fetch to FormSubmit ajax does not) */}
      <iframe
        name={IFRAME_NAME}
        title="Form submission"
        className="contact-form__iframe"
        onLoad={handleIframeLoad}
        onError={handleIframeError}
      />

      <form
        ref={formRef}
        className="contact-form__form"
        action={FORM_ACTION}
        method="POST"
        target={IFRAME_NAME}
        onSubmit={handleSubmit}
      >
        <input
          type="hidden"
          name="_subject"
          value={`New clutch quote — ${BUSINESS_NAME}`}
        />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Thank you for your enquiry. We will contact you shortly."
        />

        <div className="contact-form__row">
          <label>
            Name *
            <input type="text" name="name" required placeholder="Your name" />
          </label>
          <label>
            Phone *
            <input type="tel" name="phone" required placeholder="07xxx xxxxxx" />
          </label>
        </div>
        <label>
          Email
          <input type="email" name="email" placeholder="you@email.com" />
        </label>
        <div className="contact-form__row">
          <label>
            Postcode *
            <input type="text" name="postcode" required placeholder="B1 1AA" />
          </label>
          <label>
            Registration
            <input type="text" name="reg" placeholder="AB12 CDE" />
          </label>
        </div>
        <label>
          Message
          <textarea
            name="message"
            rows={4}
            placeholder="Describe your clutch problem or vehicle details..."
          />
        </label>

        {status === 'success' && (
          <p className="contact-form__success" role="status">
            Thank you! Your enquiry has been sent — we&apos;ll get back to you soon.
          </p>
        )}

        {status === 'error' && (
          <p className="contact-form__error" role="alert">
            Something went wrong sending your message. Please try again or contact
            us on WhatsApp.
          </p>
        )}

        <button
          type="submit"
          className="btn btn-primary contact-form__submit"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? (
            <>
              <Loader2 size={18} className="contact-form__spin" />
              Sending…
            </>
          ) : (
            <>
              <Send size={18} />
              Send enquiry
            </>
          )}
        </button>

        {!compact && (
          <WhatsAppLink className="contact-form__call">Or message us on WhatsApp</WhatsAppLink>
        )}
      </form>
    </div>
  );
}
