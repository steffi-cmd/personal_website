import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@theme/Layout';
import ImageCarousel from '../components/ImageCarousel';

const EDITORIAL_IMAGES = [
  '/img/A7R01304.jpg',
  '/img/A7R00276.jpg',
  '/img/A7R01182.jpg',
  '/img/A7R01328.jpg',
  '/img/A7R00105.jpg',
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
              <li><a href="#qualifikationen" onClick={closeMenu}>Expertise</a></li>
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
            <li><a href="#ueber-mich" onClick={closeMenu}>Über mich</a></li>
            <li><a href="#qualifikationen" onClick={closeMenu}>Expertise</a></li>
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
                alt="Dr. Stefanie Schinnerl – Holistic Mentoring & Health Coaching"
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
            ② MEIN ANSATZ – Storytelling & 3 Säulen
           —————————————————————————————————————————————— */}
        <section className="ql-ansatz ql-reveal" id="mein-ansatz">
          <div className="ql-ansatz__container">
            <div className="ql-ansatz__intro">
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

            {/* 3 Säulen */}
            <div className="ql-ansatz__grid">
              <div className="ql-ansatz__pillar ql-stagger">
                <div className="ql-ansatz__badge">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1E1C1A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
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

              <div className="ql-ansatz__pillar ql-stagger">
                <div className="ql-ansatz__badge">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1E1C1A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
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

              <div className="ql-ansatz__pillar ql-stagger">
                <div className="ql-ansatz__badge">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1E1C1A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3a9 9 0 0 1 0 18A9 9 0 0 0 12 3z" />
                    <circle cx="12" cy="7.5" r="1.2" fill="#1E1C1A" stroke="none" />
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
            TRANSITION: ATMOSPHERIC BANNER
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
            ③ ANGEBOTE & FORMATE
           —————————————————————————————————————————————— */}
        <section className="ql-offers ql-reveal" id="angebote">
          <div className="ql-offers__container">
            <div className="ql-section-header">
              <span className="ql-kicker">ANGEBOTE &amp; FORMATE</span>
              <h2 className="ql-headline">Gezielte Begleitung nach deinen Bedürfnissen</h2>
              <p className="ql-subtext">
                Individuell und ganzheitlich: Wähle das Format, das am besten zu deinen Zielen und deiner aktuellen Lebensphase passt.
              </p>
            </div>

            <div className="ql-offers__grid">
              {/* Karte 1 */}
              <div className="ql-offer-card ql-stagger">
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
                </div>
                <div className="ql-offer-card__action">
                  <a href="#kontakt" className="ql-btn ql-btn--card">
                    <span>Erstgespräch anfragen</span>
                    <span className="ql-btn__arrow">→</span>
                  </a>
                </div>
              </div>

              {/* Karte 2 */}
              <div className="ql-offer-card ql-stagger">
                <div className="ql-offer-card__body">
                  <span className="ql-offer-card__kicker">1:1 MOVEMENT &amp; VITALITÄT</span>
                  <h3 className="ql-offer-card__title">Personal Movement &amp; Training</h3>
                  <p className="ql-offer-card__desc">
                    Individuell abgestimmter 1:1 Unterricht nach deinen Bedürfnissen. Ob eine reine Yoga-Einheit, gezieltes Pilates, funktionelle Kräftigung oder ein maßgeschneiderter Bewegungsmix – jede Einheit orientiert sich an deinem Körper.
                  </p>
                  <ul className="ql-offer-card__bullets">
                    <li>Fokus nach Wahl: Reine Praxis (Yoga, Pilates, Barre) oder kombinierter Mix</li>
                    <li>Vielseitiges Spektrum: Von Kraft &amp; Mobility über Faszien bis Lauftraining</li>
                    <li>Gezielte Regeneration: Ausgleichende Dehn-, Atem- und Entspannungssequenzen</li>
                    <li>Exklusiver Raum: Vor Ort in privater Atmosphäre (Nußdorfer Str., 1090 Wien)</li>
                  </ul>
                </div>
                <div className="ql-offer-card__action">
                  <a href="#kontakt" className="ql-btn ql-btn--card">
                    <span>Private Session anfragen</span>
                    <span className="ql-btn__arrow">→</span>
                  </a>
                </div>
              </div>

              {/* Karte 3 */}
              <div className="ql-offer-card ql-stagger">
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
                </div>
                <div className="ql-offer-card__action">
                  <a href="#kontakt" className="ql-btn ql-btn--card">
                    <span>Infos &amp; Warteliste anfragen</span>
                    <span className="ql-btn__arrow">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram Live Schedule Card */}
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
                  className="ql-btn ql-btn--primary"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Wochenplan auf Instagram</span>
                  <span>↗</span>
                </a>
                <span className="ql-studio-card__handle">@bystefanieschinnerl</span>
              </div>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ④ ÜBER MICH – 50/50 Editorial Split
           —————————————————————————————————————————————— */}
        <section className="ql-about-voyage ql-reveal" id="ueber-mich">
          <div className="ql-about-voyage__stage">
            <div className="ql-about-voyage__photo-col ql-stagger">
              <img
                src="/img/A7R01304.jpg"
                alt="Dr. Stefanie Schinnerl – Über mich"
                className="ql-about-voyage__photo"
                loading="lazy"
              />
            </div>

            <div className="ql-about-voyage__content-col ql-stagger">
              <div className="ql-about-voyage__inner">
                <span className="ql-kicker">
                  ÜBER MICH · DR. STEFANIE SCHINNERL
                </span>

                <h2 className="ql-headline">
                  Schön, dass du da bist.
                </h2>
                
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
                  <a href="#kontakt" className="ql-btn ql-btn--primary">
                    <span>Erstgespräch vereinbaren</span>
                    <span className="ql-btn__arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ⑤ FUNDAMENT & EXPERTISE
           —————————————————————————————————————————————— */}
        <section className="ql-credentials ql-reveal" id="qualifikationen">
          <div className="ql-credentials__container">
            <div className="ql-section-header">
              <span className="ql-kicker">FUNDAMENT &amp; EXPERTISE</span>
              <h2 className="ql-headline">Fundierte Expertise. Aus der Praxis für deine Praxis.</h2>
              <p className="ql-subtext">
                Die seltene Synthese aus universitärer Spitzenforschung, langjähriger Kanzleipraxis und zertifizierter Gesundheits-, Bewegungs- und Mentallehre.
              </p>
            </div>

            <div className="ql-credentials__grid">
              {/* Säule 1: Recht & Steuern */}
              <div className="ql-credentials__card ql-stagger">
                <div className="ql-credentials__card-top">
                  <span className="ql-credentials__num">01</span>
                  <span className="ql-credentials__pill">Wirtschaft &amp; Recht</span>
                </div>
                <h3 className="ql-credentials__card-title">
                  Steuerberaterin &amp; Dr. rer. soc. oec.
                </h3>
                <ul className="ql-credentials__list">
                  <li>
                    <strong>Steuerberaterin</strong>
                    <span>Kammer der Steuerberater:innen und Wirtschaftsprüfer:innen (KSW)</span>
                  </li>
                  <li>
                    <strong>Doktorat (Dr. rer. soc. oec.)</strong>
                    <span>Wirtschaftsuniversität Wien (WU) · Promotion mit Auszeichnung</span>
                  </li>
                  <li>
                    <strong>Master (MSc WU) &amp; Bachelor (BSc WU)</strong>
                    <span>Steuern &amp; Rechnungslegung · Gewinnerteam International Tax Moot Court</span>
                  </li>
                  <li>
                    <strong>Kanzlei- &amp; Universitätserfahrung</strong>
                    <span>Ehem. Managerin Corporate Tax bei BDO Austria &amp; Universitätsassistentin an der WU Wien</span>
                  </li>
                </ul>
              </div>

              {/* Säule 2: Gesundheit & Vitalität */}
              <div className="ql-credentials__card ql-stagger">
                <div className="ql-credentials__card-top">
                  <span className="ql-credentials__num">02</span>
                  <span className="ql-credentials__pill">Gesundheit &amp; Vitalität</span>
                </div>
                <h3 className="ql-credentials__card-title">
                  Zertifizierte Health- &amp; Vitalcoach
                </h3>
                <ul className="ql-credentials__list">
                  <li>
                    <strong>Akad. geprüfte Gesundheits- &amp; Vitalcoach</strong>
                    <span>Universitätslehrgang an der Universität Wien (USI)</span>
                  </li>
                  <li>
                    <strong>Yoga für Frauen mit Krebserfahrung</strong>
                    <span>Spezialisierte Fachfortbildung</span>
                  </li>
                  <li>
                    <strong>Zertifizierte Yoga-Lehrerin (200h)</strong>
                    <span>Anerkannter Standard der internationalen Yoga Alliance</span>
                  </li>
                  <li>
                    <strong>Barre, Group Fitness &amp; Piloxing</strong>
                    <span>Fundierte Trainerausbildungen mit Praxiserfahrung in Wiener Studios</span>
                  </li>
                </ul>
              </div>

              {/* Säule 3: Führung & Gremien */}
              <div className="ql-credentials__card ql-stagger">
                <div className="ql-credentials__card-top">
                  <span className="ql-credentials__num">03</span>
                  <span className="ql-credentials__pill">Gremien &amp; Leadership</span>
                </div>
                <h3 className="ql-credentials__card-title">
                  Gremien, Fachautorin &amp; Speakerin
                </h3>
                <ul className="ql-credentials__list">
                  <li>
                    <strong>Interessensvertretung &amp; Gremien</strong>
                    <span>Ehem. Board Member bei Austrian Experts &amp; Young CEPLIS (Brüssel)</span>
                  </li>
                  <li>
                    <strong>Frauenförderung &amp; Diversity</strong>
                    <span>Ehem. Arbeitsgruppe 'Diversity' (KSW) &amp; Leitung von Frauennetzwerk-Initiativen</span>
                  </li>
                  <li>
                    <strong>Fachautorin</strong>
                    <span>Zahlreiche Fachpublikationen im Steuer- und Wirtschaftsrecht</span>
                  </li>
                  <li>
                    <strong>Speakerin &amp; Medienpräsenz</strong>
                    <span>Keynotes &amp; Podcasts, u.a. Der Standard („Frauen in Führung“) &amp; Tax Tech Konferenz</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ⑥ EDITORIAL GALLERY & ZITATE
           —————————————————————————————————————————————— */}
        <section className="ql-editorial-gallery" id="einblicke">
          <div className="ql-editorial-gallery__quotes">
            <div className="ql-editorial-gallery__quote">
              <span className="ql-quote-mark">"</span>
              <p>
                Wahre Stärke zeigt sich nicht darin, nie zu fallen – sondern darin, jedes Mal bewusster aufzustehen.
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
            ⑦ B2B & KEYNOTES
           —————————————————————————————————————————————— */}
        <section className="ql-b2b ql-reveal" id="b2b">
          <div className="ql-b2b__container">
            <div className="ql-section-header">
              <span className="ql-kicker">B2B &amp; KEYNOTES</span>
              <h2 className="ql-headline">Vorträge, Moderation &amp; Corporate Health</h2>
              <p className="ql-subtext">
                Buchbar für Unternehmen, Konferenzen und Verbände. Meine Themen: Resilienz &amp; Vitalität, Female Leadership, High Performance &amp; Wellbeing – authentisch, fundiert und inspirierend.
              </p>
            </div>

            <div className="ql-b2b__grid">
              <div className="ql-b2b__pillar ql-stagger">
                <div className="ql-b2b__badge">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1E1C1A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
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

              <div className="ql-b2b__pillar ql-stagger">
                <div className="ql-b2b__badge">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1E1C1A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
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

              <div className="ql-b2b__pillar ql-stagger">
                <div className="ql-b2b__badge">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1E1C1A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
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
              <a href="#kontakt" className="ql-btn ql-btn--primary">
                <span>Vortrag oder B2B anfragen</span>
                <span className="ql-btn__arrow">→</span>
              </a>
            </div>

            {/* Social Proof Badges */}
            <div className="ql-b2b__refs ql-stagger">
              <span className="ql-b2b__refs-label">Referenzen &amp; Auftritte:</span>
              <div className="ql-b2b__refs-list">
                <a
                  href="https://www.derstandard.at/story/3000000208394/frauen-in-fuehrungspositionen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ql-b2b__ref-badge"
                >
                  <span>🎙️</span>
                  <span>Der Standard Podcast — Frauen in Führung</span>
                  <span className="ql-b2b__ref-arrow">↗</span>
                </a>
                <a
                  href="https://women-in-law.org/2025/02/16/10-jahre-women-in-law-jubilaeum-stefanie-schinnerl-im-interview/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ql-b2b__ref-badge"
                >
                  <span>⚖️</span>
                  <span>Women in Law — Jubiläumsinterview</span>
                  <span className="ql-b2b__ref-arrow">↗</span>
                </a>
                <a
                  href="https://taxtech.at/3-fragen-an-unsere-ttk26-speakerinnen-stefanie-schinnerl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ql-b2b__ref-badge"
                >
                  <span>🎤</span>
                  <span>Tax Tech Konferenz 2026 — Speakerin</span>
                  <span className="ql-b2b__ref-arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ⑧ ABLAUF – In 3 Schritten
           —————————————————————————————————————————————— */}
        <section className="ql-process ql-reveal" id="ablauf">
          <div className="ql-process__container">
            <div className="ql-section-header">
              <span className="ql-kicker">ZUSAMMENARBEIT &amp; ABLAUF</span>
              <h2 className="ql-headline">In 3 Schritten zu deiner Begleitung</h2>
              <p className="ql-subtext">
                Persönlich, unkompliziert und mit Raum für deine individuellen Anliegen.
              </p>
            </div>

            <div className="ql-process__grid">
              <div className="ql-process__card ql-stagger">
                <div className="ql-process__card-header">
                  <span className="ql-process__step-num">01</span>
                  <span className="ql-process__step-badge">Schritt 1</span>
                </div>
                <h3 className="ql-process__card-title">Kurze Anfrage</h3>
                <p className="ql-process__card-text">
                  Schicke mir eine Nachricht über das Kontaktformular mit deinen Wünschen oder ersten Fragen.
                </p>
              </div>

              <div className="ql-process__card ql-stagger">
                <div className="ql-process__card-header">
                  <span className="ql-process__step-num">02</span>
                  <span className="ql-process__step-badge">Schritt 2</span>
                </div>
                <h3 className="ql-process__card-title">Kurzes Telefonat</h3>
                <p className="ql-process__card-text">
                  Wir telefonieren kurz, um dein Thema abzustimmen und direkt einen passenden Termin für unser Treffen zu finden.
                </p>
              </div>

              <div className="ql-process__card ql-stagger">
                <div className="ql-process__card-header">
                  <span className="ql-process__step-num">03</span>
                  <span className="ql-process__step-badge">Schritt 3</span>
                </div>
                <h3 className="ql-process__card-title">Kennenlernen vor Ort</h3>
                <p className="ql-process__card-text">
                  Im ruhigen Praxisraum (1090 Wien) nehmen wir uns Zeit, besprechen alles in Ruhe und starten gemeinsam deine Begleitung.
                </p>
              </div>
            </div>

            {/* B2B Note */}
            <div className="ql-process__b2b-note ql-stagger">
              <div className="ql-process__b2b-icon">✦</div>
              <div className="ql-process__b2b-content">
                <strong className="ql-process__b2b-title">Unternehmen &amp; Kooperationen:</strong>
                <p className="ql-process__b2b-text">
                  Für Keynotes, Moderationen oder Corporate Health Workshops stimme ich Format, Inhalte und Rahmenbedingungen direkt im individuellen Vorgespräch mit dir ab.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ⑨ KONTAKT
           —————————————————————————————————————————————— */}
        <section className="ql-contact-section ql-reveal" id="kontakt">
          <div className="ql-contact">
            <div className="ql-section-header">
              <span className="ql-kicker">KONTAKT</span>
              <h2 className="ql-headline">Lass uns sprechen.</h2>
              <p className="ql-subtext">
                Ob Coaching, Keynote Speaking oder ein gemeinsames Projekt – ich freue mich auf deine Anfrage.
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
              <textarea name="message" placeholder="Deine Nachricht – worum geht es?" rows="5" required></textarea>
              <button type="submit" className="ql-btn ql-btn--primary ql-btn--full">
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
          <li><a href="#home">Home</a></li>
          <li><a href="#mein-ansatz">Mein Ansatz</a></li>
          <li><a href="#angebote">Angebote</a></li>
          <li><a href="#ueber-mich">Über mich</a></li>
          <li><a href="#b2b">B2B &amp; Keynotes</a></li>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/bystefanieschinnerl/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
        <span className="ql-footer__copy">
          © {new Date().getFullYear()} Dr. Stefanie Schinnerl — Alle Rechte vorbehalten.
        </span>
      </footer>
    </Layout>
  );
}
