import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './styles.module.css';

const DEFAULT_GALLERY_IMAGES = [
  // 1. SOLO: 811 - Steffi fokussiert in Balance (Outdoor)
  {
    id: 1,
    src: '/img/A7R00811.jpg',
    alt: 'Dr. Stefanie Schinnerl: Balance, Fokus und Erdung',
    position: 'center 20%',
  },
  // 2. MIT ANDEREN: 625 - 1:1 Hands-on Coaching & Adjustment (Studio)
  {
    id: 2,
    src: '/img/A7R00625 copy.jpg',
    alt: 'Individuelle Betreuung und persönliches Alignment',
    position: 'center 15%',
  },
  // 3. SOLO: 615 - Steffi im Studio (Präsenz & Bewegung)
  {
    id: 3,
    src: '/img/A7R00615.jpg',
    alt: 'Klarheit, Bewegungsimpulse und Vitalität',
    position: 'center 20%',
  },
  // 4. MIT ANDEREN: 869 - 1:1 Haltungskorrektur & Präzision (Outdoor)
  {
    id: 4,
    src: '/img/A7R00869.jpg',
    alt: 'Präzise Anleitung und gemeinsame Bewegung',
    position: 'center 25%',
  },
  // 5. SOLO: 657 - Steffi zentriert im Schneidersitz / Meditation (Outdoor)
  {
    id: 5,
    src: '/img/A7R00657.jpg',
    alt: 'Innere Ruhe, Achtsamkeit und mentale Klarheit',
    position: 'center 35%',
  },
  // 6. MIT ANDEREN: 963 - 1:1 Mattentraining & Bridge Pose (Outdoor)
  {
    id: 6,
    src: '/img/A7R00963.jpg',
    alt: 'Kraftvolles Training mit Freude und Empathie',
    position: 'center 15%',
  },
  // 7. SOLO: 725 - Steffi im Krieger / Kraft & Ausrichtung (Outdoor)
  {
    id: 7,
    src: '/img/A7R00725.jpg',
    alt: 'Kraftvolle Haltung, Stabilität und Souveränität',
    position: 'center 15%',
  },
  // 8. MIT ANDEREN: 744 - Gruppen-Flow & Dynamik (Outdoor)
  {
    id: 8,
    src: '/img/A7R00744.jpg',
    alt: 'Gemeinsame Dynamik und Gruppenenergie in der Natur',
    position: '45% 40%',
  },
  // 9. SOLO / FOKUS: 795 - Herzlicher Blickkontakt & Lachen (Outdoor)
  {
    id: 9,
    src: '/img/A7R00795.jpg',
    alt: 'Lebensfreude, Leichtigkeit und Verbindung',
    position: '65% 25%',
  },
  // 10. MIT ANDEREN: 901 - 1:1 Armführung & herzliches Coaching (Outdoor)
  {
    id: 10,
    src: '/img/A7R00901.jpg',
    alt: '1:1 Coaching, präzise Haltungsführung und Freude am Movement',
    position: 'center 20%',
  },
  // 11. MIT ANDEREN: 998 - Herzliche Betreuung & Bein-Assist (Outdoor)
  {
    id: 11,
    src: '/img/A7R00998.jpg',
    alt: 'Einfühlsames Mentoring, Assist und ganzheitliche Begleitung',
    position: 'center 15%',
  },
];

export default function LookbookGallery({ images = DEFAULT_GALLERY_IMAGES }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const total = images.length;

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Autoplay with timer cleanup
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  return (
    <div
      className={styles.lookbookContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="ql-section-header" style={{ marginBottom: '2.8rem' }}>
        <span className="ql-kicker">GALERIE</span>
        <h2 className="ql-headline">Einblicke &amp; Impressionen</h2>
      </div>

      {/* 3-Slide Stage */}
      <div className={styles.stage}>
        {/* Left Preview Slide */}
        <div className={`${styles.slide} ${styles.slideLeft}`} onClick={prevSlide}>
          <img
            src={images[prevIndex].src}
            alt={images[prevIndex].alt}
            style={{ objectPosition: images[prevIndex].position || 'center' }}
            loading="lazy"
            decoding="async"
          />
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
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            style={{ objectPosition: images[currentIndex].position || 'center' }}
            loading="eager"
            decoding="async"
          />
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

        {/* Right Preview Slide */}
        <div className={`${styles.slide} ${styles.slideRight}`} onClick={nextSlide}>
          <img
            src={images[nextIndex].src}
            alt={images[nextIndex].alt}
            style={{ objectPosition: images[nextIndex].position || 'center' }}
            loading="lazy"
            decoding="async"
          />
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
