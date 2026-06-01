import { MessageCircle } from 'lucide-react';
import { PHONE, WHATSAPP_LINK } from '../data/content';

export default function WhatsAppLink({
  className,
  children,
  iconSize = 18,
  showIcon = true,
  style,
}) {
  return (
    <a {...WHATSAPP_LINK} className={className} style={style}>
      {showIcon && <MessageCircle size={iconSize} />}
      {children ?? `WhatsApp ${PHONE}`}
    </a>
  );
}
