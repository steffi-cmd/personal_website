import React, { useState, useEffect, useCallback } from 'react';
import styles from './styles.module.css';

const DEFAULT_GALLERY_IMAGES = [
  { id: 1, src: '/img/A7R01304.jpg', alt: 'Impression 1 – Dr. Stefanie Schinnerl' },
  { id: 2, src: '/img/A7R00276.jpg', alt: 'Impression 2 – Movement & Yoga' },
  { id: 3, src: '/img/A7R01182.jpg', alt: 'Impression 3 – Praxisraum & Vitalität' },
  { id: 4, src: '/img/A7R00105.jpg', alt: 'Impression 4 – Business & Coaching' },
  { id: 5, src: '/img/A7R01377.jpg', alt: 'Impression 5 – Fokus & Mindset' },
  { id: 6, src: '/img/A7R00636.jpg', alt: 'Impression 6 – Kraft & Balance' },
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
      {/* Header with elegant overlapping script title */}
      <div className={styles.header}>
        <span className={styles.kicker}>EINBLICKE &amp; IMPRESSIONEN</span>
        <h2 className={styles.title}>
          Gallery <span className={styles.scriptAccent}>Photo</span>
        </h2>
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
