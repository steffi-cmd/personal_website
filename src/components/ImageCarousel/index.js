import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styles from './styles.module.css';

const DEFAULT_SLIDES = [
  {
    id: 0,
    src: '/img/steffi_professionell.jpg',
  },
  {
    id: 1,
    src: '/img/IMG_4897.JPG',
  },
  {
    id: 2,
    src: '/img/IMG_4898.JPG',
  },
  {
    id: 3,
    src: '/img/IMG_7991.jpg',
  },
];

export default function ImageCarousel({ images, variant = 'default', autoPlay = false }) {
  const slides = useMemo(() => {
    return Array.isArray(images) && images.length > 0
      ? images.map((src, idx) => ({ id: idx, src }))
      : DEFAULT_SLIDES;
  }, [images]);

  const slideCount = slides.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Boundary check if slides length changes dynamically
  useEffect(() => {
    if (currentIndex >= slideCount && slideCount > 0) {
      setCurrentIndex(0);
    }
  }, [currentIndex, slideCount]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    if (slideCount <= 0) return;
    setCurrentIndex((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    if (slideCount <= 0) return;
    setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  // Autoplay logic with declarative cleanup
  useEffect(() => {
    if (!autoPlay || isPaused || slideCount <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideCount);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay, isPaused, slideCount]);

  if (slideCount === 0) {
    return null;
  }

  return (
    <div
      className={`${styles.carouselContainer} ${variant === 'fill' ? styles.fillContainer : ''}`}
      onMouseEnter={() => {
        if (autoPlay) setIsPaused(true);
      }}
      onMouseLeave={() => {
        if (autoPlay) setIsPaused(false);
      }}
    >
      {/* Main Large Image */}
      <div className={`${styles.mainSlide} ${variant === 'fill' ? styles.fillSlide : ''}`}>
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <img
              key={slide.id}
              src={slide.src}
              alt={`Slide ${idx + 1}`}
              className={`${styles.slideImage} ${isActive ? styles.active : ''}`}
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          );
        })}

        {/* Single Navigation Overlay */}
        <div className={`${styles.overlay} ${styles['opacity-1']}`}>
          <div className={styles.arrows}>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={prevSlide}
              aria-label="Vorheriges Bild"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={nextSlide}
              aria-label="Nächstes Bild"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dots underneath main image */}
      {variant !== 'fill' && (
        <div className={styles.dots}>
          {slides.map((slide, idx) => (
            <button
              type="button"
              key={`dot-${slide.id}`}
              className={`${styles.dot} ${idx === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Gehe zu Slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Thumbnails */}
      {variant !== 'fill' && (
        <div className={styles.thumbnails}>
          {slides.map((slide, idx) => (
            <button
              type="button"
              key={`thumb-${slide.id}`}
              className={`${styles.thumbBtn} ${idx === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Vorschau für Bild ${idx + 1}`}
            >
              <img src={slide.src} alt={`Thumbnail ${idx + 1}`} className={styles.thumbImage} loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
