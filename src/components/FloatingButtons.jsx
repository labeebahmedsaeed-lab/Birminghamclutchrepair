import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/content';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 250);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="floating-buttons" aria-label="Quick actions">
      <button
        type="button"
        className={`floating-buttons__btn floating-buttons__btn--top ${
          showTop ? 'floating-buttons__btn--visible' : ''
        }`}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp size={22} />
      </button>

      <a
        {...WHATSAPP_LINK}
        className="floating-buttons__btn floating-buttons__btn--whatsapp"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
