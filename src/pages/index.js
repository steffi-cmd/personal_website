import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@theme/Layout';
import LookbookGallery from '../components/LookbookGallery';

const FACET_DATA = [
  {
    id: 0,
    title: 'Bewegung & Vitalität',
    subtitle: 'Gesund- & Vitalcoach · Yoga & Pilates',
    img: '/img/A7R00851.jpg',
    alt: 'Dr. Stefanie Schinnerl: Freude an Bewegung & Yoga',
    pos: 'center 15%'
  },
  {
    id: 1,
    title: 'Business & Leadership',
    subtitle: 'Steuerberaterin · Promovierte Ökonomin',
    img: '/img/stefanie_00451_portrait.jpg',
    alt: 'Dr. Stefanie Schinnerl: Wirtschaft & Leadership',
    pos: 'center 20%'
  },
  {
    id: 2,
    title: 'Natur & Regeneration',
    subtitle: 'Präsenz & Gelassenheit im Alltag',
    img: '/img/A7R01328.jpg',
    alt: 'Dr. Stefanie Schinnerl: Natur & Regeneration',
    pos: 'center 20%'
  }
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeExpertiseTab, setActiveExpertiseTab] = useState(0);
  const [activeFacetTab, setActiveFacetTab] = useState(0);

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
      description="Dr. Stefanie Schinnerl: Holistic Mentoring, Health Coaching & Keynote Speaking für ambitionierte Frauen."
    >
      {/* ——— NAVBAR (Split Navigation: Left - Brand Center - Right) ——— */}
      <header className={`ql-navbar ${isScrolled ? 'ql-navbar--scrolled' : ''}`}>
        <div className="ql-navbar__inner">
          <nav className="ql-navbar__nav--left" aria-label="Hauptnavigation links">
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

          <nav className="ql-navbar__nav--right" aria-label="Hauptnavigation rechts">
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

        {/* Mobile Drawer */}
        <div className={`ql-navbar__mobile-drawer ${isMobileMenuOpen ? 'ql-navbar__mobile-drawer--open' : ''}`}>
          <ul className="ql-navbar__mobile-links">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#mein-ansatz" onClick={closeMenu}>Mein Ansatz</a></li>
            <li><a href="#angebote" onClick={closeMenu}>Angebote &amp; Coaching</a></li>
            <li><a href="#ueber-mich" onClick={closeMenu}>Über mich &amp; Expertise</a></li>
            <li><a href="#b2b" onClick={closeMenu}>B2B &amp; Corporate Health</a></li>
            <li><a href="#einblicke" onClick={closeMenu}>Einblicke</a></li>
            <li><a href="#kontakt" onClick={closeMenu} className="ql-navbar__mobile-cta">Erstgespräch anfragen</a></li>
          </ul>
        </div>
      </header>

      <main>
        {/* ——————————————————————————————————————————————
            ① HERO SECTION
           —————————————————————————————————————————————— */}
        <section className="ql-hero" id="home">
          <div className="ql-hero__bg-visual">
            <div className="ql-hero__fade-mask">
              <img
                src="/img/A7R01339.jpg"
                alt="Dr. Stefanie Schinnerl: Holistic Mentoring & Health Coaching"
                className="ql-hero__faded-img"
                loading="eager"
              />
              <div className="ql-hero__soft-overlay" />
            </div>
          </div>

          <div className="ql-hero__container">
            <div className="ql-hero__content-box">
              <span className="ql-hero__kicker">
                HOLISTIC MENTORING &amp; HEALTH COACHING
              </span>
              <h1 className="ql-hero__headline">
                Erfolg neu definieren.<br />Mit innerer Stärke und echter Vitalität.
              </h1>
              <p className="ql-hero__text">
                Ganzheitliches Mentoring &amp; Health Coaching für Frauen, die ihr Wohlbefinden, innere Ruhe und echte Vitalität wieder in den Mittelpunkt ihres Lebens stellen möchten.
              </p>
              <div className="ql-hero__cta-group">
                <a href="#kontakt" className="ql-btn ql-btn--primary">
                  Erstgespräch vereinbaren
                </a>
                <a href="#angebote" className="ql-btn ql-btn--outline">
                  Angebote entdecken
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ② MEIN ANSATZ: Storytelling & 3 Säulen
           —————————————————————————————————————————————— */}
        <section className="ql-ansatz ql-reveal" id="mein-ansatz">
          <div className="ql-ansatz__container">
            <div className="ql-ansatz__editorial">
              <div className="ql-ansatz__text-col">
                <span className="ql-kicker">MEIN ANSATZ</span>
                <h2 className="ql-headline">
                  Ganzheitlich gedacht. Für dein starkes Fundament.
                </h2>
                <p className="ql-ansatz__p">
                  Fragst du dich manchmal, wo du selbst bei all den Terminen, Verpflichtungen und Erwartungen bleibst? Wünschst du dir Klarheit, wie du deinen anspruchsvollen Alltag meisterst, ohne deinen Körper, deine Nerven und dein Wohlbefinden hintanzustellen?
                </p>
                <p className="ql-ansatz__p">
                  Genau dafür habe ich <em>Business, Body &amp; Mind</em> geschaffen. Ein Ort für Frauen, die viel Verantwortung tragen und ihr Leben neu ausrichten wollen: Nicht durch ständiges Überlasten und Funktionieren-Müssen, sondern getragen von innerer Stärke und echter Vitalität.
                </p>
                <p className="ql-ansatz__p">
                  Mein Schwerpunkt liegt auf der gesundheitlichen und vitalen Ebene. Meine Methoden basieren auf sport- und gesundheitswissenschaftlichen Ansätzen, gezieltem Stressmanagement und Bewegung. Gemeinsam entwickeln wir alltagstaugliche Systeme, die deinen Körper stärken, deinen Geist beruhigen und dir die Energie zurückgeben, die du für alles brauchst, was dir wichtig ist.
                </p>
                <p className="ql-ansatz__closing">
                  Schaffe dir den Raum für deine eigene Kraft.
                </p>
              </div>

              <div className="ql-ansatz__media-col">
                <div className="ql-ansatz__photo-wrap">
                  <div className="ql-ansatz__handwritten-greeting">
                    Schön, dass du da bist.
                  </div>
                  <div className="ql-ansatz__photo-frame">
                    <img
                      src="/img/A7R00276.jpg"
                      alt="Dr. Stefanie Schinnerl: Business, Body & Mind"
                      className="ql-ansatz__photo-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            TRANSITION: ATMOSPHERIC BANNER
           —————————————————————————————————————————————— */}
        <section className="ql-atmospheric-banner ql-reveal">
          <div className="ql-atmospheric-banner__bg">
            <img
              src="/img/A7R00690.jpg"
              alt="Dr. Stefanie Schinnerl: Atmosphäre und Raum für Entfaltung"
              className="ql-atmospheric-banner__img"
              style={{ objectPosition: 'center 32%' }}
              loading="lazy"
            />
            <div className="ql-atmospheric-banner__overlay"></div>
          </div>
          <div className="ql-atmospheric-banner__content">
            <p className="ql-atmospheric-banner__quote">
              „Nachhaltige Leistungsfähigkeit entsteht von innen. Gemeinsam schaffen wir die Balance aus Bewegung, mentaler Klarheit und nachhaltiger Regeneration.“
            </p>
            <span className="ql-atmospheric-banner__sub">
              Dr. Stefanie Schinnerl • Business, Body &amp; Mind
            </span>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ③ ANGEBOTE & FORMATE
           —————————————————————————————————————————————— */}
        <section className="ql-offers ql-reveal" id="angebote">
          <div className="ql-offers__container">
            <div className="ql-section-header ql-section-header--wide">
              <span className="ql-kicker">ANGEBOTE &amp; FORMATE</span>
              <h2 className="ql-headline">Gezielte Begleitung nach deinen Bedürfnissen</h2>
              <p className="ql-subtext">
                Ich begleite ambitionierte Frauen, die einem hohen Leistungsdruck unterliegen und ein anspruchsvolles Leben mit viel Verantwortung führen, dabei, aus dem ständigen Erschöpfungsmodus auszusteigen und Leistungsfähigkeit mit innerer Gelassenheit zu verbinden.
              </p>
              <p className="ql-subtext" style={{ marginTop: '0.85rem' }}>
                Ob im intensiven 1:1-Mentoring, in maßgeschneiderten Movement-Sessions oder bei gemeinsamen Workshops &amp; Retreats: Wir entwickeln Systeme, mit denen du deinen Alltag mit voller Souveränität meisterst und dich kraftvoll, gesund und lebendig fühlst. Wähle das Format, das am besten zu deinen Zielen und deiner aktuellen Lebensphase passt.
              </p>
            </div>

            <div className="ql-offers__grid">
              {/* Karte 1: Holistic Health Mentoring */}
              <div className="ql-offer-card ql-stagger">
                <div className="ql-offer-card__media">
                  <img
                    src="/img/A7R00199.jpg"
                    alt="Holistic Health Mentoring mit Dr. Stefanie Schinnerl"
                    className="ql-offer-card__img"
                    style={{ objectPosition: 'center 35%' }}
                    loading="lazy"
                  />
                </div>
                <div className="ql-offer-card__body">
                  <span className="ql-offer-card__kicker">1:1 VITALITÄT &amp; RESILIENZ</span>
                  <h3 className="ql-offer-card__title">Holistic Health Mentoring</h3>
                  <p className="ql-offer-card__desc">
                    Ganzheitliche Wissensvermittlung und strukturierte Methoden für Frauen mit hoher Verantwortung. Erlerne alltagstaugliche Strategien für nachhaltige Energie, gesunde Routinen und mentale Klarheit.
                  </p>
                  <ul className="ql-offer-card__bullets">
                    <li>Sport- &amp; gesundheitswissenschaftliche Vitalitätsanalyse</li>
                    <li>Gezielte Methoden zur Stress- &amp; Nervensystemregulation</li>
                    <li>Strukturierte Impulse für Erholung, Schlaf &amp; gesunde Routinen</li>
                    <li>Persönliche Einheiten im ruhigen Praxisraum (1090 Wien)</li>
                  </ul>
                  <div className="ql-offer-card__action">
                    <a href="#kontakt" className="ql-btn ql-btn--card">
                      <span>Erstgespräch anfragen</span>
                      <span className="ql-btn__arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Karte 2: Personal Movement & Training */}
              <div className="ql-offer-card ql-stagger">
                <div className="ql-offer-card__media">
                  <img
                    src="/img/A7R00636.jpg"
                    alt="Personal Movement und Training mit Dr. Stefanie Schinnerl"
                    className="ql-offer-card__img"
                    style={{ objectPosition: 'center 22%' }}
                    loading="lazy"
                  />
                </div>
                <div className="ql-offer-card__body">
                  <span className="ql-offer-card__kicker">1:1 MOVEMENT &amp; VITALITÄT</span>
                  <h3 className="ql-offer-card__title">Personal Movement &amp; Training</h3>
                  <p className="ql-offer-card__desc">
                    Individuell abgestimmter 1:1 Unterricht nach deinen Bedürfnissen. Ob eine reine Yoga-Einheit, gezieltes Pilates, funktionelle Kräftigung oder ein maßgeschneiderter Bewegungsmix, jede Einheit orientiert sich an deinem Körper.
                  </p>
                  <ul className="ql-offer-card__bullets">
                    <li>Fokus nach Wahl: Reine Praxis (Yoga, Pilates, Barre) oder kombinierter Mix</li>
                    <li>Vielseitiges Spektrum: Von Kraft &amp; Mobility über Faszien bis Lauftraining</li>
                    <li>Gezielte Regeneration: Ausgleichende Dehn-, Atem- und Entspannungssequenzen</li>
                    <li>Exklusiver Raum: Vor Ort in privater Atmosphäre (Nußdorfer Str., 1090 Wien)</li>
                  </ul>
                  <div className="ql-offer-card__action">
                    <a href="#kontakt" className="ql-btn ql-btn--card">
                      <span>Private Session anfragen</span>
                      <span className="ql-btn__arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Karte 3: Workshops & Retreats */}
              <div className="ql-offer-card ql-stagger">
                <div className="ql-offer-card__media">
                  <img
                    src="/img/A7R00474.jpg"
                    alt="Workshops und Retreats mit Dr. Stefanie Schinnerl"
                    className="ql-offer-card__img"
                    style={{ objectPosition: 'center 35%' }}
                    loading="lazy"
                  />
                </div>
                <div className="ql-offer-card__body">
                  <span className="ql-offer-card__kicker">EXKLUSIVE FORMATE</span>
                  <h3 className="ql-offer-card__title">Workshops &amp; Retreats</h3>
                  <p className="ql-offer-card__desc">
                    Gemeinsam praktizieren, regenerieren und neues Wissen vertiefen. Raum für Bewegung, fundierte Impulse und echte Auszeiten in inspirierender Umgebung.
                  </p>
                  <ul className="ql-offer-card__bullets">
                    <li>Ganzheitliche Verbindung aus Bewegung, Atmung &amp; mentaler Stärke</li>
                    <li>Exklusiver Kleingruppenrahmen für persönliche Atmosphäre &amp; Austausch</li>
                    <li>Nächster Workshop: „The Pre-Holiday Reset“ (22. November 2026, Wien)</li>
                    <li>Retreats: Mehrtägige Auszeiten an besonderen Orten (Planung 2027)</li>
                  </ul>
                  <div className="ql-offer-card__action">
                    <a href="#kontakt" className="ql-btn ql-btn--card">
                      <span>Infos &amp; Warteliste anfragen</span>
                      <span className="ql-btn__arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Live Schedule Card */}
            <div className="ql-studio-card ql-stagger">
              <div className="ql-studio-card__media">
                <img
                  src="/img/A7R00846.jpg"
                  alt="Gruppenklassen und Specials in Wien: Dr. Stefanie Schinnerl"
                  className="ql-studio-card__img"
                  style={{ objectPosition: 'center 35%' }}
                  loading="lazy"
                />
              </div>
              <div className="ql-studio-card__body">
                <div style={{ marginBottom: '1.75rem' }}>
                  <span className="ql-studio-card__kicker">GRUPPENKLASSEN &amp; SPECIALS</span>
                  <h3 className="ql-studio-card__title" style={{ margin: '0 0 0.65rem 0' }}>Gemeinsam praktizieren &amp; Energie tanken</h3>
                  <p className="ql-studio-card__desc">
                    Du möchtest die Dynamik einer gemeinsamen Praxis erleben? Ich unterrichte regelmäßig wechselnde Klassen und Specials in ausgewählten Studios in Wien.
                  </p>
                </div>

                <div className="ql-studio-card__columns">
                  {/* Spalte 1: Feste Klassen & Turnsaal Women */}
                  <div className="ql-studio-card__col ql-studio-card__col--left">
                    <div className="ql-studio-card__col-content">
                      <span className="ql-studio-card__kicker" style={{ color: 'var(--color-accent)' }}>
                        Turnsaal Women • 1090 Wien
                      </span>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-dark)', margin: '0 0 0.45rem 0', fontWeight: 500 }}>
                        Bodybalance
                      </h4>
                      <p className="ql-studio-card__desc">
                        Kräftigung, Haltung und tiefe Entspannung: Eine fließende Kombination aus Elementen von Yoga, Pilates und Barre für nachhaltige Vitalität.
                      </p>
                    </div>
                    <div className="ql-studio-card__col-actions">
                      <a
                        href="https://www.turnsaal-women.at"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ql-btn ql-btn--primary"
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        <span>Stundenplan &amp; Buchung</span>
                        <span>↗</span>
                      </a>
                    </div>
                  </div>

                  {/* Spalte 2: Specials, wechselnde Studios & Instagram */}
                  <div className="ql-studio-card__col">
                    <div className="ql-studio-card__col-content">
                      <span className="ql-studio-card__kicker" style={{ color: 'var(--color-accent)' }}>
                        Specials &amp; Formate
                      </span>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-dark)', margin: '0 0 0.45rem 0', fontWeight: 500 }}>
                        Specials &amp; Termine
                      </h4>
                      <p className="ql-studio-card__desc">
                        Neben festen Klassen unterrichte ich wechselnde Specials und Pop-up Einheiten in Wien.
                      </p>
                    </div>
                    <div className="ql-studio-card__col-actions">
                      <a
                        href="https://www.instagram.com/bystefanieschinnerl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ql-btn ql-btn--outline"
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        <span>Wochenplan auf Instagram</span>
                        <span>↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ④ ÜBER MICH & FUNDAMENT: 3-Foto Collage & Zentriertes Fundament
           —————————————————————————————————————————————— */}
        <section className="ql-about-voyage ql-reveal" id="ueber-mich">
          <div className="ql-about-voyage__container">
            
            {/* 1. STUFE: 3-Foto Collage (Links) & Story (Rechts) */}
            <div className="ql-about-voyage__stage">
              <div className="ql-about-voyage__photo-col ql-stagger">
                <div className="ql-about-voyage__collage">
                  {/* Foto 1: Oben Rechts: Sonnenlicht Natur */}
                  <img
                    src="/img/A7R01328.jpg"
                    alt="Dr. Stefanie Schinnerl in der Natur"
                    className="ql-about-voyage__collage-img ql-about-voyage__collage-img--top-right"
                    loading="lazy"
                  />
                  {/* Foto 2: Links Hero: Herzliches Lachen im Sportoutfit */}
                  <img
                    src="/img/A7R00851.jpg"
                    alt="Dr. Stefanie Schinnerl: Freude an Bewegung und Yoga"
                    className="ql-about-voyage__collage-img ql-about-voyage__collage-img--left"
                    loading="lazy"
                  />
                  {/* Foto 3: Unten Rechts: Yogamatte mit Laptop und Notizen */}
                  <img
                    src="/img/A7R01117.jpg"
                    alt="Dr. Stefanie Schinnerl: Expertise und Achtsamkeit"
                    className="ql-about-voyage__collage-img ql-about-voyage__collage-img--bottom-right"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="ql-about-voyage__content-col ql-stagger">
                <div className="ql-about-voyage__inner">
                  <span className="ql-kicker">
                    ÜBER MICH
                  </span>

                  <h2 className="ql-headline">
                    Dr. Stefanie Schinnerl
                  </h2>

                  <div className="ql-about-voyage__text">
                    <p>
                      Als Steuerberaterin, Führungskraft und Unternehmerin kenne ich den täglichen Spagat zwischen Deadlines, Teamverantwortung, eigenen Projekten und dem privaten Leben aus erster Hand. Lange Zeit war mein Antrieb geprägt von der ständigen Suche nach dem nächsten Meilenstein: noch ein Abschluss, noch ein Titel, noch mehr Leistung, immer in der Hoffnung, irgendwann das Gefühl zu haben, „angekommen“ zu sein. Erst eine schwere Erkrankung hat mich gezwungen, innezuhalten und radikal zu hinterfragen, wofür ich meine Energie eigentlich einsetzen möchte.
                    </p>
                    <p>
                      Meine Ambitionen sind geblieben, doch die Art, wie ich meine Ziele verfolge, hat sich grundlegend verändert: Ich habe gelernt, mir den Raum für meine eigenen Bedürfnisse zu nehmen und meine Ziele aus einer Haltung innerer Stärke und Gelassenheit zu verfolgen. Wahre Veränderung braucht keine extremen Umbrüche, sondern die Kraft kleiner, beständiger Routinen und den Mut zu klaren Grenzen. Denn langfristiger Erfolg und Freude am eigenen Weg funktionieren nur, wenn mentale und körperliche Gesundheit an erster Stelle stehen.
                    </p>
                    <p>
                      Genau das macht mich aus: Ich verbinde das Beste aus beiden Welten. Als promovierte Wirtschaftsexpertin und akademisch zertifizierte Gesundheits- und Vitalcoach spreche ich deine Sprache: analytisch, pragmatisch und frei von realitätsfremden Dogmen. Gemeinsam schaffen wir alltagstaugliche Systeme, die dir deine Energie zurückgeben: damit du beruflich mit voller Souveränität wirkst und dich privat kraftvoll, lebendig und ganz bei dir fühlst.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. STUFE: MEIN FUNDAMENT & EXPERTISE (Zentriert direkt darunter, dezent & edel) */}
            <div className="ql-about-voyage__fundament-center ql-stagger" id="qualifikationen">
              <div className="ql-about-voyage__fundament-center-header">
                <span className="ql-kicker">MEIN FUNDAMENT &amp; EXPERTISE</span>
                
                <div className="ql-about-voyage__tabs" role="tablist">
                  <button
                    type="button"
                    className={`ql-about-voyage__tab ${activeExpertiseTab === 0 ? 'is-active' : ''}`}
                    onClick={() => setActiveExpertiseTab(0)}
                    role="tab"
                    aria-selected={activeExpertiseTab === 0}
                  >
                    <span className="ql-about-voyage__tab-num">01</span>
                    <span>Steuern &amp; Wirtschaft</span>
                  </button>

                  <button
                    type="button"
                    className={`ql-about-voyage__tab ${activeExpertiseTab === 1 ? 'is-active' : ''}`}
                    onClick={() => setActiveExpertiseTab(1)}
                    role="tab"
                    aria-selected={activeExpertiseTab === 1}
                  >
                    <span className="ql-about-voyage__tab-num">02</span>
                    <span>Gesundheit &amp; Vitalität</span>
                  </button>

                  <button
                    type="button"
                    className={`ql-about-voyage__tab ${activeExpertiseTab === 2 ? 'is-active' : ''}`}
                    onClick={() => setActiveExpertiseTab(2)}
                    role="tab"
                    aria-selected={activeExpertiseTab === 2}
                  >
                    <span className="ql-about-voyage__tab-num">03</span>
                    <span>Bühne, Gremien &amp; Publikationen</span>
                  </button>
                </div>
              </div>

              <div className="ql-about-voyage__fundament-center-card">
                {/* Tab 0 */}
                {activeExpertiseTab === 0 && (
                  <div className="ql-about-voyage__tab-panel">
                    <ul className="ql-about-voyage__fundament-sublist">
                      <li>
                        <strong>Steuerberaterin</strong>
                        <span>Kammer der Steuerberater:innen und Wirtschaftsprüfer:innen (KSW) · Sonderberatung bei BDO Austria</span>
                      </li>
                      <li>
                        <strong>Doktorat (Dr. rer. soc. oec.)</strong>
                        <span>WU Wien · Promotion mit Auszeichnung an der Schnittstelle von Steuerrecht, Gesellschaftsrecht &amp; Rechnungslegung (Finanzierungsinstrumente &amp; Umgründungen)</span>
                      </li>
                      <li>
                        <strong>Master (MSc WU) &amp; Bachelor (BSc WU)</strong>
                        <span>Steuern &amp; Rechnungslegung / BWL · Gewinnerteam International Tax Moot Court</span>
                      </li>
                      <li>
                        <strong>Forschung &amp; Lehre</strong>
                        <span>Ehem. drittmittelfinanzierte Prae-Doc / Universitätsassistentin an der Wirtschaftsuniversität Wien</span>
                      </li>
                    </ul>
                  </div>
                )}

                {/* Tab 1 */}
                {activeExpertiseTab === 1 && (
                  <div className="ql-about-voyage__tab-panel">
                    <ul className="ql-about-voyage__fundament-sublist">
                      <li>
                        <strong>Health &amp; Fitness Instructorin (Gesund- &amp; Vitalcoach)</strong>
                        <span>Zertifikatsprogramm am Zentrum für Sportwissenschaft &amp; Universitätssport der Universität Wien (USI)</span>
                      </li>
                      <li>
                        <strong>Zertifizierte Yogalehrerin (RYT® 200)</strong>
                        <span>200h-Ausbildung nach Richtlinien der Yoga Alliance (Ashtanga Vinyasa &amp; Yin Yoga)</span>
                      </li>
                      <li>
                        <strong>Yoga für Frauen mit Krebserfahrung</strong>
                        <span>Spezialisierte Fachfortbildung beim Yoga Verband Österreich</span>
                      </li>
                      <li>
                        <strong>Barre, Piloxing® &amp; Group Fitness</strong>
                        <span>Seit 2021 über 230+ gehaltene Unterrichtsstunden in Wiener Studios</span>
                      </li>
                    </ul>
                  </div>
                )}

                {/* Tab 2 */}
                {activeExpertiseTab === 2 && (
                  <div className="ql-about-voyage__tab-panel">
                    <ul className="ql-about-voyage__fundament-sublist">
                      <li>
                        <strong>Vorträge, Moderation &amp; Podcasts</strong>
                        <span>
                          Fachvorträge, Schulungen, Moderationen &amp; Podcast-Gast (u. a.{' '}
                          <a
                            href="https://taxtech.at/3-fragen-an-unsere-ttk26-speakerinnen-stefanie-schinnerl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ql-about-voyage__inline-link"
                          >
                            Tax Tech Konferenz ↗
                          </a>{' '}
                          &amp;{' '}
                          <a
                            href="https://www.derstandard.at/story/3000000208394/frauen-in-fuehrungspositionen"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ql-about-voyage__inline-link"
                          >
                            Der Standard Podcast ↗
                          </a>
                          )
                        </span>
                      </li>
                      <li>
                        <strong>Fachautorin</strong>
                        <span>Zahlreiche Fachpublikationen zu Steuerrecht &amp; Rechnungslegung</span>
                      </li>
                      <li>
                        <strong>Interessensvertretung &amp; Gremien</strong>
                        <span>Ehem. Board Member bei Austrian Experts &amp; Young CEPLIS (Brüssel)</span>
                      </li>
                      <li>
                        <strong>Frauenförderung &amp; Netzwerke</strong>
                        <span>
                          Ehem. Arbeitsgruppe 'Diversity' (KSW) &amp; Jubiläumsinterview bei{' '}
                          <a
                            href="https://women-in-law.org/2025/02/16/10-jahre-women-in-law-jubilaeum-stefanie-schinnerl-im-interview/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ql-about-voyage__inline-link"
                          >
                            Women in Law ↗
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="ql-about-voyage__action-center">
                <a href="#kontakt" className="ql-btn ql-btn--primary">
                  <span>Erstgespräch vereinbaren</span>
                  <span className="ql-btn__arrow">→</span>
                </a>
              </div>
            </div>

          </div>
        </section>
 
        {/* ——————————————————————————————————————————————
            TRANSITION: ATMOSPHERIC BANNER (POST-ABOUT)
           —————————————————————————————————————————————— */}
        <section className="ql-atmospheric-banner ql-reveal">
          <div className="ql-atmospheric-banner__bg">
            <img
              src="/img/A7R01377.jpg"
              alt="Dr. Stefanie Schinnerl: Raum für nachhaltige Kraft und Entfaltung"
              className="ql-atmospheric-banner__img"
              style={{ objectPosition: 'center 15%' }}
              loading="lazy"
            />
            <div className="ql-atmospheric-banner__overlay"></div>
          </div>
          <div className="ql-atmospheric-banner__content">
            <p className="ql-atmospheric-banner__quote">
              „Du verdienst beruflichen Erfolg und Erfüllung, ohne dass deine Gesundheit, deine Lebensfreude oder deine innere Ruhe auf der Strecke bleiben.“
            </p>
            <span className="ql-atmospheric-banner__sub">
              Dr. Stefanie Schinnerl • Business, Body &amp; Mind
            </span>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ⑤ B2B & KEYNOTES
           —————————————————————————————————————————————— */}
        <section className="ql-b2b ql-reveal" id="b2b">
          <div className="ql-b2b__container">
            <div className="ql-section-header ql-section-header--wide">
              <span className="ql-kicker">B2B, KEYNOTES &amp; PANELS</span>
              <h2 className="ql-headline">Vorträge, Moderation &amp; Corporate Health</h2>
              <p className="ql-subtext">
                Spitzenleistung im anspruchsvollen Berufsalltag braucht ein starkes Fundament: Ich unterstütze Unternehmen und Netzwerke dabei, nachhaltige Leistungsfähigkeit und ganzheitliche Gesundheit in ihrer Arbeitskultur zu verankern, und gebe Führungskräften sowie Teams praxistaugliche Werkzeuge für Resilienz, Energie und mentale Klarheit an die Hand.
              </p>
              <p className="ql-subtext" style={{ marginTop: '0.85rem' }}>
                Ob als inspirierende Keynote auf Konferenzen, als souveräne Panel-Moderation oder im Rahmen maßgeschneiderter Corporate-Health-Workshops: Wissenschaftlich fundiert, praxisnah und mit echtem Mehrwert.
              </p>
            </div>

            <div className="ql-offers__grid" style={{ textAlign: 'left' }}>
              {/* Karte 1: Keynotes & Vorträge */}
              <div className="ql-offer-card ql-stagger">
                <div className="ql-offer-card__media">
                  <img
                    src="/img/IMG_4897.JPG"
                    alt="Keynotes und Vorträge auf Konferenzen mit Dr. Stefanie Schinnerl"
                    className="ql-offer-card__img ql-offer-card__img--keynote-zoom"
                    loading="lazy"
                  />
                </div>
                <div className="ql-offer-card__body">
                  <span className="ql-offer-card__kicker">KEYNOTES &amp; VORTRÄGE</span>
                  <h3 className="ql-offer-card__title">Impulse für Bühne &amp; Konferenzen</h3>
                  <p className="ql-offer-card__desc">
                    Inspirierende und wissenschaftlich fundierte Impulse zu Resilienz, Gesundheit und nachhaltiger Leistungsfähigkeit im anspruchsvollen Berufsalltag.
                  </p>
                  <ul className="ql-offer-card__bullets">
                    <li>Wissenschaftlich fundierte Keynotes zu High Performance &amp; Resilienz</li>
                    <li>Praxisnahe Strategien für mentale Klarheit &amp; Stresskompetenz</li>
                    <li>Maßgeschneiderte Vorträge für Konferenzen, Summits &amp; Firmenevents</li>
                  </ul>
                  <div className="ql-offer-card__action">
                    <a href="#kontakt" className="ql-btn ql-btn--card">
                      <span>Keynote anfragen</span>
                      <span className="ql-btn__arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Karte 2: Moderation & Panels */}
              <div className="ql-offer-card ql-stagger">
                <div className="ql-offer-card__media">
                  <img
                    src="/img/TTK26_14-22-57_292.jpg"
                    alt="Moderation und Paneldiskussionen mit Dr. Stefanie Schinnerl"
                    className="ql-offer-card__img ql-offer-card__img--panel-zoom"
                    loading="lazy"
                  />
                </div>
                <div className="ql-offer-card__body">
                  <span className="ql-offer-card__kicker">MODERATION &amp; PANELS</span>
                  <h3 className="ql-offer-card__title">Gesprächsführung mit Tiefe &amp; Struktur</h3>
                  <p className="ql-offer-card__desc">
                    Souveräne, charmante und fachlich fundierte Gesprächsführung für Fachtagungen, Panels und hochkarätige Business-Events.
                  </p>
                  <ul className="ql-offer-card__bullets">
                    <li>Professionelle Moderation von Fachtagungen &amp; Podiumsdiskussionen</li>
                    <li>Brücke zwischen Wirtschaft, Recht und ganzheitlicher Gesundheit</li>
                    <li>Strukturierte, lebendige und interaktive Gesprächsführung</li>
                  </ul>
                  <div className="ql-offer-card__action">
                    <a href="#kontakt" className="ql-btn ql-btn--card">
                      <span>Moderation anfragen</span>
                      <span className="ql-btn__arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Karte 3: Corporate Workshops */}
              <div className="ql-offer-card ql-stagger">
                <div className="ql-offer-card__media">
                  <img
                    src="/img/A7R01161.jpg"
                    alt="Corporate Workshops und Team-Performance mit Dr. Stefanie Schinnerl"
                    className="ql-offer-card__img"
                    style={{ objectPosition: '62% 48%' }}
                    loading="lazy"
                  />
                </div>
                <div className="ql-offer-card__body">
                  <span className="ql-offer-card__kicker">CORPORATE WORKSHOPS</span>
                  <h3 className="ql-offer-card__title">Health &amp; Performance für Teams</h3>
                  <p className="ql-offer-card__desc">
                    Praxisnahe Formate und Strategien zu Bewegung, Stressmanagement und Vitalität für Führungskräfte und Teams in Kanzleien und Unternehmen.
                  </p>
                  <ul className="ql-offer-card__bullets">
                    <li>Workshops zu Nervensystem-Regulation, Ergonomie &amp; Routinen</li>
                    <li>Flexible Formate: Inhouse-Workshops, Offsites oder interaktive Webinare</li>
                    <li>Nachhaltige Stärkung von Team-Energie und mentaler Widerstandskraft</li>
                  </ul>
                  <div className="ql-offer-card__action">
                    <a href="#kontakt" className="ql-btn ql-btn--card">
                      <span>Workshop anfragen</span>
                      <span className="ql-btn__arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ⑥ ABLAUF: In 3 Schritten
           —————————————————————————————————————————————— */}
        <section className="ql-process ql-reveal" id="ablauf">
          <div className="ql-process__container">
            <div className="ql-section-header">
              <span className="ql-kicker">ZUSAMMENARBEIT &amp; ABLAUF</span>
              <h2 className="ql-headline">In 3 Schritten zu deiner Begleitung</h2>
              <p className="ql-subtext">
                Persönlich, vertrauensvoll und mit vollem Fokus auf deine individuellen Bedürfnisse.
              </p>
            </div>

            <div className="ql-process__grid">
              <div className="ql-process__card ql-stagger">
                <div className="ql-process__card-header">
                  <span className="ql-process__step-num">01</span>
                  <span className="ql-process__step-badge">Schritt 1</span>
                </div>
                <h3 className="ql-process__card-title">Deine Kontaktaufnahme</h3>
                <p className="ql-process__card-text">
                  Schicke mir einfach eine Nachricht über das Kontaktformular mit deinem Anliegen, deinen Zielen oder ersten Fragen.
                </p>
              </div>

              <div className="ql-process__card ql-stagger">
                <div className="ql-process__card-header">
                  <span className="ql-process__step-num">02</span>
                  <span className="ql-process__step-badge">Schritt 2</span>
                </div>
                <h3 className="ql-process__card-title">Telefonisches Erstgespräch</h3>
                <p className="ql-process__card-text">
                  Wir besprechen dein Thema in Ruhe am Telefon, klären offene Punkte und vereinbaren einen passenden Termin für unser Treffen.
                </p>
              </div>

              <div className="ql-process__card ql-stagger">
                <div className="ql-process__card-header">
                  <span className="ql-process__step-num">03</span>
                  <span className="ql-process__step-badge">Schritt 3</span>
                </div>
                <h3 className="ql-process__card-title">Kennenlernen &amp; Start vor Ort</h3>
                <p className="ql-process__card-text">
                  Im geschützten, ruhigen Praxisraum (1090 Wien) nehmen wir uns Zeit, besprechen deine Ziele und starten deine Begleitung (Termine freitags &amp; abends).
                </p>
              </div>
            </div>

            {/* B2B Note */}
            <div className="ql-process__b2b-note ql-stagger">
              <div className="ql-process__b2b-icon">✦</div>
              <div className="ql-process__b2b-content">
                <strong className="ql-process__b2b-title">Für Unternehmen, Kanzleien &amp; Veranstalter:</strong>
                <p className="ql-process__b2b-text">
                  Ob Keynote, Podiumsmoderation oder Corporate Health Workshop: Im gemeinsamen Vorgespräch stimmen wir Zielgruppe, inhaltliche Schwerpunkte und den zeitlichen Rahmen exakt auf eure Organisation oder euer Event ab.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ⑦ KONTAKT
           —————————————————————————————————————————————— */}
        <section className="ql-contact-section ql-reveal" id="kontakt">
          <div className="ql-contact">
            <div className="ql-section-header">
              <span className="ql-kicker">KONTAKT</span>
              <h2 className="ql-headline">Lass uns sprechen.</h2>
              <p className="ql-subtext">
                Ob Coaching, Keynote Speaking oder ein gemeinsames Projekt: Ich freue mich auf deine Anfrage.
              </p>
            </div>

            <form className="ql-contact__form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" name="name" placeholder="Dein Name" required />
              <input type="email" name="email" placeholder="Deine E-Mail-Adresse" required />
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
              <textarea name="message" placeholder="Deine Nachricht: Worum geht es?" rows="5" required></textarea>
              <button type="submit" className="ql-btn ql-btn--primary ql-btn--full">
                Anfrage senden
              </button>
            </form>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ⑧ EINBLICKE & IMPRESSIONEN (Lookbook Gallery Carousel)
           —————————————————————————————————————————————— */}
        <section className="ql-reveal" id="einblicke">
          <LookbookGallery />
        </section>
      </main>

      {/* ——— FOOTER ——— */}
      <footer className="ql-footer">
        <span className="ql-footer__brand">Dr. Stefanie Schinnerl</span>
        <span className="ql-footer__tagline">High Performance von innen heraus</span>
        <ul className="ql-footer__links">
          <li><a href="#home">Home</a></li>
          <li><a href="#mein-ansatz">Mein Ansatz</a></li>
          <li><a href="#angebote">Angebote</a></li>
          <li><a href="#ueber-mich">Über mich</a></li>
          <li><a href="#b2b">B2B &amp; Keynotes</a></li>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/bystefanieschinnerl/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
        <span className="ql-footer__copy">
          © {new Date().getFullYear()} Dr. Stefanie Schinnerl · Alle Rechte vorbehalten.
        </span>
      </footer>
    </Layout>
  );
}
