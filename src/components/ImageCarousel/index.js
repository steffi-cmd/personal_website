import React, { useState, useEffect, useCallback } from 'react';
import styles from './styles.module.css';

const defaultSlides = [
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

export default function ImageCarousel({ images, variant = 'default' }) {
  const slides = images && images.length > 0
    ? images.map((src, idx) => ({ id: idx, src }))
    : defaultSlides;

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  return (
    <div className={`${styles.carouselContainer} ${variant === 'fill' ? styles.fillContainer : ''}`}>
      {/* Main Large Image */}
      <div className={`${styles.mainSlide} ${variant === 'fill' ? styles.fillSlide : ''}`}>
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <React.Fragment key={slide.id}>
              <img
                src={slide.src}
                alt={`Slide ${idx + 1}`}
                className={`${styles.slideImage} ${isActive ? styles.active : ''}`}
                loading={idx === 0 ? "eager" : "lazy"} // Eager load first image
              />
              <div className={`${styles.overlay} ${isActive ? styles['opacity-1'] : styles['opacity-0']}`}>
                {/* No text overlay as requested */}
                
                <div className={styles.arrows}>
                  <button 
                    className={styles.arrowBtn} 
                    onClick={prevSlide}
                    aria-label="Vorheriges Bild"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button 
                    className={styles.arrowBtn} 
                    onClick={nextSlide}
                    aria-label="Nächstes Bild"
                  >
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Dots underneath main image */}
      {variant !== 'fill' && (
        <div className={styles.dots}>
          {slides.map((slide, idx) => (
            <button
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
