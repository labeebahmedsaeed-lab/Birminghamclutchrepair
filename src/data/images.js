/**
 * Verified Unsplash image IDs (HTTP 200). Use unsplash() for sized URLs.
 * Replace these with your own workshop photos when ready.
 */
const unsplash = (photoId, width = 800) =>
  `https://images.unsplash.com/${photoId}?w=${width}&q=80&auto=format&fit=crop`;

export const IMAGES = {
  hero: unsplash('photo-1489824904134-891ab64532f1', 1920),
  about: unsplash('photo-1581094794329-c8112a89af12', 800),
  contact: unsplash('photo-1560472354-b33ff0c44a43', 600),
  faq: unsplash('photo-1558618666-fcd25c85cd64', 600),
  clutchRepairs: unsplash('photo-1486262715619-67b85e0b08d3', 800),
  clutchRepairsLarge: unsplash('photo-1486262715619-67b85e0b08d3', 1200),
  clutchReplacement: unsplash('photo-1625047509248-ec889cbff17f', 800),
  clutchReplacementLarge: unsplash('photo-1625047509248-ec889cbff17f', 1200),
  clutchChange: unsplash('photo-1542362567-b07e54358753', 800),
  clutchChangeLarge: unsplash('photo-1542362567-b07e54358753', 1200),
  clutchFitting: unsplash('photo-1492144534655-ae79c964c9d7', 800),
  clutchFittingLarge: unsplash('photo-1492144534655-ae79c964c9d7', 1200),
  /** Shown if a remote image fails to load */
  fallback: unsplash('photo-1486262715619-67b85e0b08d3', 800),
};
