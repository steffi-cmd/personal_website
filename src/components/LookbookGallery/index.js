import React, { useState, useEffect, useCallback } from 'react';
import styles from './styles.module.css';

const DEFAULT_GALLERY_IMAGES = [
  { id: 1, src: '/img/A7R01304.jpg', alt: 'Dr. Stefanie Schinnerl: Natur, Klarheit und Bewegung' },
  { id: 2, src: '/img/A7R00615.jpg', alt: 'Movement, Vitalität und Achtsamkeit' },
  { id: 3, src: '/img/A7R01182.jpg', alt: 'Praxisraum und Mentoring in 1090 Wien' },
  { id: 4, src: '/img/A7R00105.jpg', alt: 'Business, Klarheit und Souveränität' },
  { id: 5, src: '/img/A7R01262.jpg', alt: 'Regeneration, Sonnenlicht und Fokus' },
  { id: 6, src: '/img/A7R00818.jpg', alt: 'Freude an Bewegung, Kraft und Balance' },
];

export default function LookbookGallery({ images = DEFAULT_GALLERY_IMAGES }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = images.length;

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  // Compute 3 visible slides: prev, current, next
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  return (
    <div
      className={styles.lookbookContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Standardized Section Header matching entire site */}
      <div className="ql-section-header" style={{ marginBottom: '3.5rem' }}>
        <span className="ql-kicker">EINBLICKE &amp; IMPRESSIONEN</span>
        <h2 className="ql-headline">Momente, Räume &amp; Bewegung</h2>
        <p className="ql-subtext">
          Ein visueller Eindruck aus Praxis, Bewegungseinheiten und Business-Impulsen.
        </p>
      </div>

      {/* 3-Slide Stage */}
      <div className={styles.stage}>
        {/* Left Faded Slide */}
        <div className={`${styles.slide} ${styles.slideLeft}`} onClick={prevSlide}>
          <img src={images[prevIndex].src} alt={images[prevIndex].alt} loading="lazy" />
          <div className={styles.fadeOverlay}></div>
        </div>

        {/* Left Arrow Button */}
        <button
          type="button"
          className={`${styles.navBtn} ${styles.navBtnPrev}`}
          onClick={prevSlide}
          aria-label="Vorheriges Foto"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
            <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Center Active Slide */}
        <div className={`${styles.slide} ${styles.slideCenter}`}>
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} loading="eager" />
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          className={`${styles.navBtn} ${styles.navBtnNext}`}
          onClick={nextSlide}
          aria-label="Nächstes Foto"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Right Faded Slide */}
        <div className={`${styles.slide} ${styles.slideRight}`} onClick={nextSlide}>
          <img src={images[nextIndex].src} alt={images[nextIndex].alt} loading="lazy" />
          <div className={styles.fadeOverlay}></div>
        </div>
      </div>

      {/* Indicator Dots */}
      <div className={styles.dots}>
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`${styles.dot} ${idx === currentIndex ? styles.dotActive : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Gehe zu Bild ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
