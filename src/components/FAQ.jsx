import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/content';
import { IMAGES } from '../data/images';
import SafeImage from './SafeImage';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="faq section">
      <div className="container faq__grid">
        <div className="faq__intro">
          <span className="section-label">FAQs</span>
          <h2 className="section-title">Common clutch questions</h2>
          <p className="section-subtitle">
            Everything you need to know about affordable, professional clutch
            work in Birmingham.
          </p>
          <SafeImage
            src={IMAGES.faq}
            alt="Close-up of a vehicle clutch disc"
            className="faq__image"
            loading="lazy"
          />
        </div>

        <div className="faq__list">
          {faqs.map((item, index) => (
            <div
              key={item.q}
              className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
            >
              <button
                type="button"
                className="faq__question"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
              >
                {item.q}
                <ChevronDown size={20} />
              </button>
              <div className="faq__answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
