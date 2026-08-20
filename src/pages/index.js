import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@theme/Layout';
import ImageCarousel from '../components/ImageCarousel';

const EDITORIAL_IMAGES = [
  '/img/steffi_professionell.jpg',
  '/img/IMG_3690.jpg',
  '/img/IMG_5878.JPG',
  '/img/unnamed.jpg',
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-Reveal via Intersection Observer
  useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const reveals = document.querySelectorAll('.ql-reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ql-reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout
      title="Holistic Mentoring & Health Coaching"
      description="Dr. Stefanie Schinnerl – Holistic Mentoring, Health Coaching & Keynote Speaking für ambitionierte Frauen."
    >
      {/* ——— NAVBAR (Split Navigation: Links - Center Brand - Rights) ——— */}
      <header className={`ql-navbar ${isScrolled ? 'ql-navbar--scrolled' : ''}`}>
        <div className="ql-navbar__inner">
          <nav className="ql-navbar__nav ql-navbar__nav--left" aria-label="Hauptnavigation links">
            <ul className="ql-navbar__links">
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#mein-ansatz" onClick={closeMenu}>Mein Ansatz</a></li>
              <li><a href="#angebote" onClick={closeMenu}>Angebote</a></li>
              <li><a href="#ueber-mich" onClick={closeMenu}>Über mich</a></li>
            </ul>
          </nav>

          <a href="#home" className="ql-navbar__brand" onClick={closeMenu}>
            <span className="ql-navbar__brand-name">Dr. Stefanie Schinnerl</span>
            <span className="ql-navbar__brand-sub">Business, Body &amp; Mind</span>
          </a>

          <nav className="ql-navbar__nav ql-navbar__nav--right" aria-label="Hauptnavigation rechts">
            <ul className="ql-navbar__links">
              <li><a href="#b2b" onClick={closeMenu}>B2B &amp; Keynotes</a></li>
              <li><a href="#einblicke" onClick={closeMenu}>Einblicke</a></li>
              <li><a href="#kontakt" className="ql-navbar__link-cta" onClick={closeMenu}>Kontakt</a></li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className={`ql-navbar__toggle ${isMobileMenuOpen ? 'ql-navbar__toggle--open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menü öffnen"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="ql-navbar__toggle-icon"></span>
          </button>
        </div>

        {/* Mobile Fullscreen / Dropdown Menu */}
        <div className={`ql-navbar__mobile-drawer ${isMobileMenuOpen ? 'ql-navbar__mobile-drawer--open' : ''}`}>
          <ul className="ql-navbar__mobile-links">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#mein-ansatz" onClick={closeMenu}>Mein Ansatz</a></li>
            <li><a href="#angebote" onClick={closeMenu}>Angebote &amp; Coaching</a></li>
            <li><a href="#b2b" onClick={closeMenu}>B2B &amp; Corporate Health</a></li>
            <li><a href="#ueber-mich" onClick={closeMenu}>Über mich</a></li>
            <li><a href="#einblicke" onClick={closeMenu}>Einblicke</a></li>
            <li><a href="#kontakt" onClick={closeMenu} className="ql-navbar__mobile-cta">Erstgespräch anfragen</a></li>
          </ul>
        </div>
      </header>

      <main>
        {/* ——————————————————————————————————————————————
            ① HERO – Editorial Overlap with Soft Feathered Fade (A7R01303)
           —————————————————————————————————————————————— */}
        <section className="ql-hero ql-hero--overlap" id="home">
          {/* Expansive Background Image with Feathered Left Fade */}
          <div className="ql-hero__bg-visual">
            <div className="ql-hero__fade-mask">
              <img
                src="/img/A7R01339.jpg"
                alt="Dr. Stefanie Schinnerl – Holistic Mentoring & Health Coaching"
                className="ql-hero__faded-img"
                loading="eager"
              />
              <div className="ql-hero__soft-overlay" />
            </div>
          </div>

          <div className="ql-hero__container">
            {/* Left/Overlapping Content: Editorial Typography */}
            <div className="ql-hero__content-box">
              <div className="ql-hero__kicker">
                HOLISTIC MENTORING &amp; HEALTH COACHING
              </div>
              <h1 className="ql-hero__headline">
                Erfolg neu definieren.<br />Mit innerer Stärke und echter Vitalität.
              </h1>
              <p className="ql-hero__text">
                Ganzheitliches Mentoring &amp; Health Coaching für Frauen, die ihr Wohlbefinden, innere Ruhe und echte Vitalität wieder in den Mittelpunkt ihres Lebens stellen möchten.
              </p>
              <div className="ql-hero__cta-group">
                <a href="#kontakt" className="ql-hero__btn-luxury">
                  Erstgespräch vereinbaren
                </a>
                <a href="#angebote" className="ql-hero__btn-outline">
                  Angebote entdecken
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ② MEIN ANSATZ – Storytelling Intro & 3 Säulen
           —————————————————————————————————————————————— */}
        <section className="ql-ansatz ql-reveal" id="mein-ansatz">
          <div className="ql-ansatz__container">
            {/* Oberer Textblock: Intro & Storytelling */}
            <div className="ql-ansatz__intro">
              <span className="ql-ansatz__kicker">MEIN ANSATZ</span>
              <h2 className="ql-ansatz__headline">
                Ganzheitlich gedacht. Für dein starkes Fundament.
              </h2>
              <p className="ql-ansatz__p">
                Fragst du dich manchmal, wo du selbst bei all den Terminen, Verpflichtungen und Erwartungen bleibst? Wünschst du dir Klarheit, wie du deinen anspruchsvollen Alltag meisterst, ohne deinen Körper, deine Nerven und dein Wohlbefinden hintanzustellen?
              </p>
              <p className="ql-ansatz__p">
                Genau dafür habe ich Business, Body &amp; Mind geschaffen. Ein Ort für Frauen, die viel Verantwortung tragen und ihr Leben neu ausrichten wollen: Nicht durch ständiges Überlasten und Funktionieren-Müssen, sondern getragen von innerer Stärke und echter Vitalität.
              </p>
              <p className="ql-ansatz__p">
                Mein Schwerpunkt liegt auf der gesundheitlichen und vitalen Ebene. Meine Methoden basieren auf sport- und gesundheitswissenschaftlichen Ansätzen, gezieltem Stressmanagement und Bewegung. Gemeinsam entwickeln wir alltagstaugliche Systeme, die deinen Körper stärken, deinen Geist beruhigen und dir die Energie zurückgeben, die du für alles brauchst, was dir wichtig ist.
              </p>
              <p className="ql-ansatz__closing">
                Schaffe dir den Raum für deine eigene Kraft.
              </p>
            </div>

            {/* Unterer Block: Die 3 Säulen im Grid */}
            <div className="ql-ansatz__grid">
              {/* Säule 1 (Business & Struktur) */}
              <div className="ql-ansatz__pillar ql-stagger">
                <div className="ql-ansatz__badge">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3D3935" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <h3 className="ql-ansatz__pillar-title">STRATEGISCH &amp; KLAR</h3>
                <p className="ql-ansatz__pillar-text">
                  Alltagstaugliche Systeme und Strukturen, die dich im Alltag nachhaltig entlasten, statt neuen Druck aufzubauen.
                </p>
              </div>

              {/* Säule 2 (Body & Vitalität) */}
              <div className="ql-ansatz__pillar ql-stagger">
                <div className="ql-ansatz__badge">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3D3935" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="M4.93 4.93l1.41 1.41" />
                    <path d="M17.66 17.66l1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="M4.93 19.07l1.41-1.41" />
                    <path d="M17.66 6.34l1.41-1.41" />
                  </svg>
                </div>
                <h3 className="ql-ansatz__pillar-title">WISSENSCHAFTLICH FUNDIERT</h3>
                <p className="ql-ansatz__pillar-text">
                  Methoden auf Basis von Sport- und Gesundheitswissenschaften sowie Bewegung – für echte, spürbare Vitalität.
                </p>
              </div>

              {/* Säule 3 (Mind & Balance) */}
              <div className="ql-ansatz__pillar ql-stagger">
                <div className="ql-ansatz__badge">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3D3935" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3a9 9 0 0 1 0 18A9 9 0 0 0 12 3z" />
                    <circle cx="12" cy="7.5" r="1.2" fill="#3D3935" stroke="none" />
                    <circle cx="12" cy="16.5" r="1.2" fill="#FAF7F2" stroke="none" />
                  </svg>
                </div>
                <h3 className="ql-ansatz__pillar-title">RESILIENT &amp; GELASSEN</h3>
                <p className="ql-ansatz__pillar-text">
                  Gezieltes Stressmanagement und mentale Klarheit, um auch in fordernden Phasen innerlich ruhig und handlungsfähig zu bleiben.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ATMOSPHERIC BANNER – Visueller Ruhepol
           —————————————————————————————————————————————— */}
        <section className="ql-atmospheric-banner ql-reveal">
          <div className="ql-atmospheric-banner__bg">
            <img
              src="/img/A7R00690.jpg"
              alt="Atmosphäre & Raum für Entfaltung"
              className="ql-atmospheric-banner__img"
              loading="lazy"
            />
            <div className="ql-atmospheric-banner__overlay"></div>
          </div>
          <div className="ql-atmospheric-banner__content">
            <p className="ql-atmospheric-banner__quote">
              „Der Körper ist der Anker für alles, was du im Leben erschaffst.“
            </p>
            <span className="ql-atmospheric-banner__sub">
              Raum für Klarheit, Kraft &amp; Entfaltung
            </span>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ③ ANGEBOT & FORMATE – 3 Säulen
           —————————————————————————————————————————————— */}
        <section className="ql-offers ql-reveal" id="angebote">
          <div className="ql-offers__container">
            <h2 className="ql-offers__headline">Angebote &amp; Formate</h2>
            <p className="ql-offers__subtext">
              Individuell und ganzheitlich: wähle das Format, das am Besten zu deinen Zielen und deiner aktuellen Lebensphase passt
            </p>

            <div className="ql-offers__grid">
              {/* Karte 1: 1:1 Vitalität & Resilienz */}
              <div className="ql-offer-card ql-stagger">
                <div className="ql-offer-card__body">
                  <div className="ql-offer-card__kicker">1:1 VITALITÄT &amp; RESILIENZ</div>
                  <h3 className="ql-offer-card__title">Holistic Health Mentoring</h3>
                  <p className="ql-offer-card__desc">
                    Ganzheitliche Wissensvermittlung und strukturierte Methoden für Frauen mit hoher Verantwortung. Erlerne alltagstaugliche Strategien für nachhaltige Energie, gesunde Routinen und mentale Klarheit.
                  </p>
                  <ul className="ql-offer-card__bullets">
                    <li>✦ Sport- &amp; gesundheitswissenschaftliche Vitalitätsanalyse</li>
                    <li>✦ Gezielte Methoden zur Stress- &amp; Nervensystemregulation</li>
                    <li>✦ Strukturierte Impulse für Erholung, Schlaf &amp; gesunde Routinen</li>
                    <li>✦ Persönliche Einheiten im ruhigen Praxisraum (1090 Wien)</li>
                  </ul>
                </div>
                <div className="ql-offer-card__action">
                  <a href="#kontakt" className="ql-offer-card__btn">
                    Erstgespräch anfragen →
                  </a>
                </div>
              </div>

              {/* Karte 2: 1:1 Movement & Vitalität */}
              <div className="ql-offer-card ql-stagger">
                <div className="ql-offer-card__body">
                  <div className="ql-offer-card__kicker">1:1 MOVEMENT &amp; VITALITÄT</div>
                  <h3 className="ql-offer-card__title">Personal Movement &amp; Training</h3>
                  <p className="ql-offer-card__desc">
                    Individuell abgestimmter 1:1 Unterricht nach deinen Bedürfnissen. Ob eine reine Yoga-Einheit, gezieltes Pilates, funktionelle Kräftigung oder ein maßgeschneiderter Bewegungsmix – jede Einheit orientiert sich an deinem Körper und deiner Tagesform.
                  </p>
                  <ul className="ql-offer-card__bullets">
                    <li>✦ Fokus nach Wahl: Reine Praxis (Yoga, Pilates, Barre) oder kombinierter Mix</li>
                    <li>✦ Vielseitiges Spektrum: Von Kraft &amp; Mobility über Faszien bis Lauftraining</li>
                    <li>✦ Gezielte Regeneration: Ausgleichende Dehn-, Atem- und Entspannungssequenzen</li>
                    <li>✦ Exklusiver Raum: Vor Ort in privater Atmosphäre (Nußdorfer Str., 1090 Wien)</li>
                  </ul>
                </div>
                <div className="ql-offer-card__action">
                  <a href="#kontakt" className="ql-offer-card__btn">
                    Private Session anfragen →
                  </a>
                </div>
              </div>

              {/* Karte 3: Exklusive Formate */}
              <div className="ql-offer-card ql-stagger">
                <div className="ql-offer-card__body">
                  <div className="ql-offer-card__kicker">EXKLUSIVE FORMATE</div>
                  <h3 className="ql-offer-card__title">Workshops &amp; Retreats</h3>
                  <p className="ql-offer-card__desc">
                    Gemeinsam praktizieren, regenerieren und neues Wissen vertiefen. Raum für Bewegung, fundierte Impulse und echte Auszeiten in inspirierender Umgebung.
                  </p>
                  <ul className="ql-offer-card__bullets">
                    <li>✦ Ganzheitliche Verbindung aus Bewegung, Atmung &amp; mentaler Stärke</li>
                    <li>✦ Exklusiver Kleingruppenrahmen für persönliche Atmosphäre &amp; Austausch</li>
                    <li>✦ Nächster Workshop: „The Pre-Holiday Reset“ (22. November 2026, Wien)</li>
                    <li>✦ Retreats: Mehrtägige Auszeiten an besonderen Orten (Planung 2027)</li>
                  </ul>
                </div>
                <div className="ql-offer-card__action">
                  <a href="#kontakt" className="ql-offer-card__btn">
                    Infos &amp; Warteliste anfragen →
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Gruppenstunden & Instagram Live Schedule */}
            <div className="ql-studio-card ql-stagger">
              <div className="ql-studio-card__content">
                <span className="ql-studio-card__kicker">GRUPPENKLASSEN &amp; SPECIALS</span>
                <h3 className="ql-studio-card__title">Gemeinsam praktizieren &amp; Energie tanken</h3>
                <p className="ql-studio-card__desc">
                  Du möchtest die Dynamik einer gemeinsamen Praxis erleben? Ich unterrichte regelmäßig wechselnde Klassen und Specials in ausgewählten Studios in Wien. Da sich Zeiten, Locations und Formate flexibel gestalten, veröffentliche ich den aktuellen Stundenplan jede Woche direkt auf Instagram.
                </p>
              </div>
              <div className="ql-studio-card__cta-box">
                <a
                  href="https://www.instagram.com/bystefanieschinnerl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ql-studio-card__btn"
                >
                  <svg className="ql-studio-card__btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Wochenplan auf Instagram</span>
                  <span className="ql-studio-card__arrow">↗</span>
                </a>
                <span className="ql-studio-card__handle">@bystefanieschinnerl</span>
              </div>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ④ ÜBER MICH – 50/50 Full-Bleed Editorial Layout
           —————————————————————————————————————————————— */}
        <section className="ql-about-voyage ql-reveal" id="ueber-mich">
          <div className="ql-about-voyage__stage">
            
            {/* Linke Hälfte: Vollflächiges Bild (Full-Bleed bis zum linken Bildschirmrand) */}
            <div className="ql-about-voyage__photo-col ql-stagger">
              <img
                src="/img/stefanie_1303_portrait.jpg"
                alt="Dr. Stefanie Schinnerl – Über mich"
                className="ql-about-voyage__photo"
                loading="lazy"
              />
            </div>

            {/* Rechte Hälfte: Weißer Hintergrund & Typografie */}
            <div className="ql-about-voyage__content-col ql-stagger">
              <div className="ql-about-voyage__inner">
                
                {/* Großer Serif-Titel rein im Textbereich */}
                <h2 className="ql-about-voyage__headline">
                  Schön, dass du da bist!
                </h2>

                <span className="ql-about-voyage__kicker">
                  ÜBER MICH · DR. STEFANIE SCHINNERL
                </span>
                
                <p className="ql-about-voyage__lead">
                  Du verdienst beruflichen Erfolg und Erfüllung – ohne dass deine Gesundheit, deine Lebensfreude oder deine innere Ruhe auf der Strecke bleiben.
                </p>

                <div className="ql-about-voyage__text">
                  <p>
                    Als promovierte Steuerrechtsexpertin und langjährige Managerin im dynamischen Kanzleialltag kenne ich die Corporate-Welt und die Anforderungen der High-Performance-Gesellschaft in- und auswendig. Ich weiß aus eigener Praxis, wie es sich anfühlt, unter hohem Leistungsdruck zu stehen, Deadlines zu jonglieren und gleichzeitig den Anspruch an Perfektion, Karriere und Erfolg zu wahren.
                  </p>
                  <p>
                    Eine persönliche Lebenskrise hat mir vor Augen geführt, dass nachhaltige Spitzenleistung ein starkes inneres Fundament braucht: Resilienz, Vitalität und mentale Stärke sind die unverzichtbare Basis für alles, was wir schaffen.
                  </p>
                  <p>
                    Als akademisch zertifizierte Gesundheits- und Vitalcoach verbinde ich die strukturierte Denkweise der Business-Welt mit fundiertem Health-Coaching – damit du deine Energie zurückgewinnst, deinen Fokus schärfst und deinen eigenen Weg mit Souveränität gehst.
                  </p>
                </div>

                <div className="ql-about-voyage__action">
                  <a href="#kontakt" className="ql-about-voyage__btn">
                    Erstgespräch vereinbaren →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ⑤ ENGAGEMENT – Wo bist du sichtbar?
           —————————————————————————————————————————————— */}
        <section className="ql-section ql-section--centered ql-reveal" id="engagement">
          <div className="ql-section__inner">
            <p className="ql-section__label">Mein Engagement</p>
            <h2 className="ql-section__title ql-section__title--mb">Sichtbar &amp; Engagiert</h2>
            <p className="ql-section__text ql-section__text--intro-wide">
              Meine Arbeit endet nicht am Schreibtisch. Ob als Keynote-Speakerin, in Podcast-Interviews, durch Fachpublikationen oder im Rahmen gezielter Initiativen: Die Verbindung aus strategischer Exzellenz und ganzheitlicher Vitalität ist für mich gelebte Praxis.
            </p>
            <div className="ql-engagement">
              <article className="ql-engagement__card ql-stagger">
                <div className="ql-engagement__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 2a10 10 0 0 1 0 20" />
                    <path d="M12 5a7 7 0 0 1 0 14" />
                    <path d="M12 8a4 4 0 0 1 0 8" />
                  </svg>
                </div>
                <h3>Media</h3>
                <p><a href="https://www.derstandard.at/story/3000000208394/frauen-in-fuehrungspositionen" target="_blank" rel="noopener noreferrer">Der Standard Podcast: Frauen in Führung →</a></p>
                <p><a href="https://women-in-law.org/2025/02/16/10-jahre-women-in-law-jubilaeum-stefanie-schinnerl-im-interview/" target="_blank" rel="noopener noreferrer">Women in Law: 10-Jahres-Jubiläumsinterview →</a></p>
                <p><a href="https://taxtech.at/3-fragen-an-unsere-ttk26-speakerinnen-stefanie-schinnerl/" target="_blank" rel="noopener noreferrer">Tax Tech Konferenz 2026: Speaker-Interview →</a></p>
                <span className="ql-engagement__sub">Expertise teilen &amp; Sichtbarkeit schaffen</span>
              </article>

              <article className="ql-engagement__card ql-stagger">
                <div className="ql-engagement__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="10" r="5" />
                    <circle cx="16" cy="10" r="5" />
                    <circle cx="12" cy="16" r="5" />
                  </svg>
                </div>
                <h3>Networks</h3>
                <p><a href="https://www.youtube.com/watch?v=1vVHKa60oHY" target="_blank" rel="noopener noreferrer">Austrian Experts: Ehem. Board Member &amp; Video →</a></p>
                <p><a href="https://www.freie-berufe.at/hosting-ceplis-2024/" target="_blank" rel="noopener noreferrer">CEPLIS: Ehem. Committee-Mitglied →</a></p>
                <span className="ql-engagement__sub">Fokus auf Young Professionals &amp; Innovation</span>
              </article>

              <article className="ql-engagement__card ql-stagger">
                <div className="ql-engagement__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3v4" />
                    <path d="M12 17v4" />
                    <path d="M3 12h4" />
                    <path d="M17 12h4" />
                    <polygon points="12 8 14 12 12 16 10 12" fill="currentColor" opacity="0.25" />
                  </svg>
                </div>
                <h3>Diversity &amp; Mentoring</h3>
                <p><a href="https://women-in-law.org/2024/02/26/women-in-law-the-future-of-ai-in-tax/" target="_blank" rel="noopener noreferrer">Women in Tax &amp; AI: Panel / Mentoring →</a></p>
                <p><a href="https://women-in-law.org/2024/01/22/unser-jahrespartner-bdo-austria-hat-ein-eigenes-frauennetzwerk-etabliert/" target="_blank" rel="noopener noreferrer">BDO Frauennetzwerk: Kooperations-Lead →</a></p>
                <p><span style={{ color: 'var(--color-muted)', fontSize: '0.85rem' }}>KSW Arbeitskreis: Ehem. Mitglied (Diversity &amp; Gleichstellung)</span></p>
                <span className="ql-engagement__sub">Zukunft gestalten &amp; Potenziale fördern</span>
              </article>

              <article className="ql-engagement__card ql-stagger">
                <div className="ql-engagement__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 4c3-1 5-1 10 1v16c-5-2-7-2-10-1V4z" />
                    <path d="M22 4c-3-1-5-1-10 1v16c5-2 7-2 10-1V4z" />
                  </svg>
                </div>
                <h3>Research</h3>
                <p><a href="https://www.diepresse.com/5197618/erneut-ein-wu-team-an-der-weltspitze" target="_blank" rel="noopener noreferrer">Tax Moot Court: Weltspitze mit dem WU-Team →</a></p>
                <p><a href="https://www.wu.ac.at/am/ehemalige-mitarbeiterinnen/stefanie-schinnerl" target="_blank" rel="noopener noreferrer">WU Wien: Ehemalige Mitarbeiterin →</a></p>
                <span className="ql-engagement__sub">Wissen vertiefen &amp; Fundamente setzen</span>
              </article>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ⑥ EDITORIAL GALLERY – Emotionaler Anker
           —————————————————————————————————————————————— */}
        <section className="ql-editorial-gallery" id="einblicke">
          <div className="ql-editorial-gallery__quotes">
            <div className="ql-editorial-gallery__quote">
              <span className="ql-quote-mark">"</span>
              <p>
                Wahre Stärke zeigt sich nicht darin, nie zu fallen – sondern
                darin, jedes Mal bewusster aufzustehen.
              </p>
            </div>

            <div className="ql-editorial-gallery__divider"></div>

            <div className="ql-editorial-gallery__quote">
              <span className="ql-quote-mark">"</span>
              <p>
                You never regret investing in yourself.
              </p>
            </div>
          </div>

          <div className="ql-editorial-gallery__media">
            <ImageCarousel
              variant="fill"
              autoPlay={true}
              images={EDITORIAL_IMAGES}
            />
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ⑦ B2B & KEYNOTES – Vorträge & Moderation mit Referenzen
           —————————————————————————————————————————————— */}
        <section className="ql-b2b ql-reveal" id="b2b">
          <div className="ql-b2b__container">
            <span className="ql-b2b__kicker">B2B &amp; KEYNOTES</span>
            <h2 className="ql-b2b__headline">Vorträge &amp; Moderation</h2>
            <p className="ql-b2b__subtext">
              Buchbar für Unternehmen, Konferenzen und Verbände. Meine Themen: Resilienz &amp; Vitalität, Female Leadership, High Performance &amp; Wellbeing – authentisch, fundiert und inspirierend.
            </p>

            <div className="ql-b2b__grid">
              {/* Säule 1 (Keynotes & Vorträge) */}
              <div className="ql-b2b__pillar ql-stagger">
                <div className="ql-b2b__badge">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3D3935" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                    <line x1="8" y1="22" x2="16" y2="22" />
                  </svg>
                </div>
                <h3 className="ql-b2b__pillar-title">KEYNOTES &amp; VORTRÄGE</h3>
                <p className="ql-b2b__pillar-text">
                  Inspirierende und wissenschaftlich fundierte Impulse zu Resilienz, Gesundheit und nachhaltiger Leistungsfähigkeit.
                </p>
              </div>

              {/* Säule 2 (Moderation & Panels) */}
              <div className="ql-b2b__pillar ql-stagger">
                <div className="ql-b2b__badge">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3D3935" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <line x1="8" y1="9" x2="16" y2="9" />
                    <line x1="8" y1="13" x2="13" y2="13" />
                  </svg>
                </div>
                <h3 className="ql-b2b__pillar-title">MODERATION &amp; PANELS</h3>
                <p className="ql-b2b__pillar-text">
                  Souveräne, charmante und fachlich fundierte Gesprächsführung für Fachtagungen, Panels und Business-Events.
                </p>
              </div>

              {/* Säule 3 (Corporate Workshops) */}
              <div className="ql-b2b__pillar ql-stagger">
                <div className="ql-b2b__badge">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3D3935" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                    <circle cx="15" cy="15" r="2" />
                  </svg>
                </div>
                <h3 className="ql-b2b__pillar-title">CORPORATE WORKSHOPS</h3>
                <p className="ql-b2b__pillar-text">
                  Praxisnahe Formate und Strategien zu Bewegung, Stressmanagement und Vitalität für Teams und Führungskräfte.
                </p>
              </div>
            </div>

            <div className="ql-b2b__action-wrap">
              <a href="#kontakt" className="ql-b2b__cta-btn">
                Vortrag oder B2B anfragen →
              </a>
            </div>

            {/* Dezent & horizontal formatierte Referenzen-Leiste (Social-Proof Badges) */}
            <div className="ql-b2b__refs ql-stagger">
              <span className="ql-b2b__refs-label">Referenzen &amp; Auftritte:</span>
              <div className="ql-b2b__refs-list">
                <a
                  href="https://www.derstandard.at/story/3000000208394/frauen-in-fuehrungspositionen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ql-b2b__ref-badge"
                >
                  <span className="ql-b2b__ref-icon">🎙️</span>
                  <span>Der Standard Podcast — Frauen in Führung</span>
                  <span className="ql-b2b__ref-arrow">↗</span>
                </a>
                <a
                  href="https://women-in-law.org/2025/02/16/10-jahre-women-in-law-jubilaeum-stefanie-schinnerl-im-interview/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ql-b2b__ref-badge"
                >
                  <span className="ql-b2b__ref-icon">⚖️</span>
                  <span>Women in Law — Jubiläumsinterview</span>
                  <span className="ql-b2b__ref-arrow">↗</span>
                </a>
                <a
                  href="https://taxtech.at/3-fragen-an-unsere-ttk26-speakerinnen-stefanie-schinnerl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ql-b2b__ref-badge"
                >
                  <span className="ql-b2b__ref-icon">🎤</span>
                  <span>Tax Tech Konferenz 2026 — Speakerin</span>
                  <span className="ql-b2b__ref-arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ⑧ KONTAKT – Wie erreiche ich dich?
           —————————————————————————————————————————————— */}
        <section className="ql-section ql-section--centered ql-reveal" id="kontakt">
          <div className="ql-contact">
            <p className="ql-section__label">Kontakt</p>
            <h2 className="ql-section__title">Lass uns sprechen.</h2>
            <p className="ql-section__text">
              Ob Coaching, Keynote Speaking oder ein gemeinsames Projekt –
              ich freue mich auf deine Anfrage.
            </p>
            <form className="ql-contact__form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="E-Mail" required />
              <input type="tel" name="phone" placeholder="Telefonnummer (optional)" />
              <select name="inquiry" defaultValue="" required>
                <option value="" disabled>
                  Themenbereich auswählen …
                </option>
                <option value="coaching">Holistic Mentoring &amp; Coaching</option>
                <option value="b2b">B2B, Keynotes &amp; Corporate Health</option>
                <option value="speaking">Keynote Speaking / Moderation</option>
                <option value="interview">Interview / Podcast</option>
                <option value="sonstiges">Sonstiges</option>
              </select>
              <textarea name="message" placeholder="Deine Nachricht – worum geht es?" rows="5" required></textarea>
              <button type="submit" className="ql-btn">
                Anfrage senden
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* ——— FOOTER ——— */}
      <footer className="ql-footer">
        <span className="ql-footer__brand">Dr. Stefanie Schinnerl</span>
        <span className="ql-footer__tagline">High Performance von innen heraus</span>
        <ul className="ql-footer__links">
          <li><a href="/impressum">Impressum</a></li>
          <li><a href="/datenschutz">Datenschutz</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/bystefanieschinnerl/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
        <span className="ql-footer__copy">
          © {new Date().getFullYear()} Dr. Stefanie Schinnerl — Alle Rechte vorbehalten.
        </span>
      </footer>
    </Layout>
  );
}
