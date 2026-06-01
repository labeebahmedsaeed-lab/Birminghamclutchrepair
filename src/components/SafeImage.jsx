import { useState } from 'react';
import { IMAGES } from '../data/images';

export default function SafeImage({ src, alt, className, loading }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => {
        if (currentSrc !== IMAGES.fallback) {
          setCurrentSrc(IMAGES.fallback);
        }
      }}
    />
  );
}
