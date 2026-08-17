import React, { useState, useEffect, useRef, useCallback } from 'react';
import Layout from '@theme/Layout';
import ImageCarousel from '../components/ImageCarousel';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-Reveal via Intersection Observer
  useEffect(() => {
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
          <nav className="ql-navbar__nav ql-navbar__nav--left">
            <ul className="ql-navbar__links">
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#angebote" onClick={closeMenu}>Angebote</a></li>
              <li><a href="#ueber-mich" onClick={closeMenu}>Über mich</a></li>
            </ul>
          </nav>

          <a href="#home" className="ql-navbar__brand" onClick={closeMenu}>
            <span className="ql-navbar__brand-name">Dr. Stefanie Schinnerl</span>
            <span className="ql-navbar__brand-sub">Business, Body &amp; Mind</span>
          </a>

          <nav className="ql-navbar__nav ql-navbar__nav--right">
            <ul className="ql-navbar__links">
              <li><a href="#keynote" onClick={closeMenu}>Keynotes</a></li>
              <li><a href="#einblicke" onClick={closeMenu}>Einblicke</a></li>
              <li><a href="#kontakt" className="ql-navbar__link-cta" onClick={closeMenu}>Kontakt</a></li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className={`ql-navbar__toggle ${isMobileMenuOpen ? 'ql-navbar__toggle--open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menü öffnen"
          >
            <span className="ql-navbar__toggle-icon"></span>
          </button>
        </div>

        {/* Mobile Fullscreen / Dropdown Menu */}
        <div className={`ql-navbar__mobile-drawer ${isMobileMenuOpen ? 'ql-navbar__mobile-drawer--open' : ''}`}>
          <ul className="ql-navbar__mobile-links">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#angebote" onClick={closeMenu}>Angebote &amp; Coaching</a></li>
            <li><a href="#keynote" onClick={closeMenu}>Keynotes &amp; Speaking</a></li>
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
                src="/img/stefanie_00451_portrait.jpg"
                alt="Dr. Stefanie Schinnerl – Holistic Mentoring & Health Coaching"
                className="ql-hero__faded-img"
              />
              <div className="ql-hero__soft-overlay" />
            </div>
          </div>

          <div className="ql-hero__container">
            {/* Left/Overlapping Content: Editorial Typography */}
            <div className="ql-hero__content-box">
              <div className="ql-hero__kicker">
                Holistic Mentoring &amp; Health Coaching
              </div>
              <h1 className="ql-hero__headline">
                Erfolg neu definieren.<br />Mit innerer Stärke und echter Vitalität.
              </h1>
              <p className="ql-hero__text">
                Für Frauen und Leaderinnen, die berufliche Souveränität mit Gesundheit, innerer Ruhe und nachhaltiger Energie verbinden möchten.
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
            ② INTRO / PHILOSOPHIE – Typographic Statement
           —————————————————————————————————————————————— */}
        <section className="ql-intro ql-reveal" id="philosophie">
          <div className="ql-intro__inner">
            <h2 className="ql-intro__title">
              Nachhaltiger Erfolg braucht ein starkes Fundament von innen.
            </h2>
            <p className="ql-intro__text">
              Körperliche Vitalität gibt dir die physische Kraft, mentale Stärke schenkt dir Gelassenheit, und strategischer Weitblick bringt deine Karriere voran. Gemeinsam bauen wir deine persönliche Struktur auf – für ein Leben voller Energie, Fokus und innerer Erfüllung.
            </p>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ③ COACHING – Photo left, Content right
           —————————————————————————————————————————————— */}
        <section className="ql-row ql-reveal" id="angebote">
          <div className="ql-row__wrap">
            <div className="ql-row__photo">
              <img src="/img/IMG_3690.jpg" alt="Dr. Stefanie Schinnerl – Holistic Mentoring & Health Coaching" />
            </div>
            <div className="ql-row__content">
              <div className="ql-row__kicker">Coaching</div>
              <h2 className="ql-row__title">Holistic Mentoring &amp; Health Coaching</h2>
              <p className="ql-row__desc">
                Für ambitionierte Frauen, die viel Verantwortung tragen und wieder lernen
                wollen, auch für sich selbst zu sorgen. Ich begleite dich mit fundiertem
                Health Coaching, Resilienztraining und mentaler Stärkung – individuell,
                ganzheitlich und auf Augenhöhe.
              </p>
              <a href="#kontakt" className="ql-row__cta">Erstgespräch buchen →</a>
              <div className="ql-row__credentials">
                <div className="ql-row__credentials-label">Qualifikationen &amp; Formate</div>
                <ul className="ql-row__credentials-list">
                  <li>Universitäre Ausbildung: Gesundheits- &amp; Vitalcoach</li>
                  <li>Zertifizierte Yoga-, Barre- &amp; Fitnesstrainerin (RYT-200)</li>
                  <li>1:1 Mentoring, Retreats &amp; Gruppenformate</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ③ KEYNOTE SPEAKING – Content left, Photo right (reversed)
           —————————————————————————————————————————————— */}
        <section className="ql-row ql-row--reverse ql-row--alt ql-reveal" id="keynote">
          <div className="ql-row__wrap">
            <div className="ql-row__photo">
              <img src="/img/IMG_5878.JPG" alt="Dr. Stefanie Schinnerl als Keynote Speakerin" />
            </div>
            <div className="ql-row__content">
              <div className="ql-row__kicker">Keynote Speaking</div>
              <h2 className="ql-row__title">Vorträge &amp; Moderation</h2>
              <p className="ql-row__desc">
                Buchbar für Unternehmen, Konferenzen und Verbände. Meine Themen:
                Resilienz &amp; Vitalität, Female Leadership, High Performance &amp;
                Wellbeing – authentisch, fundiert und inspirierend.
              </p>
              <a href="#kontakt" className="ql-row__cta">Vortrag anfragen →</a>
              <div className="ql-row__credentials">
                <div className="ql-row__credentials-label">Referenzen &amp; Auftritte</div>
                <ul className="ql-row__credentials-list">
                  <li>Der Standard Podcast — Frauen in Führung</li>
                  <li>Women in Law — 10-Jahres-Jubiläumsinterview</li>
                  <li>Tax Tech Konferenz 2026 — Speakerin</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ④ ÜBER MICH – Personal Story
           —————————————————————————————————————————————— */}
        <section className="ql-reveal" id="ueber-mich" style={{ borderBottom: '1px solid var(--color-accent)' }}>
          <div className="ql-about">
            <div className="ql-about__grid">
              <div className="ql-about__photo">
                <img src="/img/A7R01303.jpg" alt="Dr. Stefanie Schinnerl – Über mich" />
              </div>
              <div className="ql-about__body">
                <div className="ql-about__kicker">Über mich</div>
                <h2 className="ql-about__title">High Performance von innen heraus.</h2>
                <p className="ql-about__text">
                  Als promovierte Steuerrechtsexpertin und Managerin im dynamischen Kanzleialltag kenne ich die Corporate-Welt und die Anforderungen der High-Performance-Gesellschaft in- und auswendig. Ich weiß aus eigener Praxis, wie es sich anfühlt, unter hohem Leistungsdruck zu stehen, Deadlines zu jonglieren und gleichzeitig den Anspruch an Perfektion, Karriere und Erfolg zu wahren.
                </p>
                <p className="ql-about__text">
                  Doch echter Erfolg darf nicht auf Kosten der eigenen Gesundheit gehen. Eine persönliche Lebenskrise hat mir vor Augen geführt, dass nachhaltige Leistungsfähigkeit ein starkes Fundament braucht: Resilienz, Vitalität und mentale Stärke.
                </p>
                <p className="ql-about__text">
                  Aus dieser Erfahrung heraus habe ich meine Leidenschaft zum Beruf gemacht. Als akademisch zertifizierte Gesundheits- und Vitalcoach sowie ganzheitliche Mentorin zeige ich ambitionierten Frauen, wie sie die Werkzeuge moderner Struktur und mentaler Flexibilität nutzen, um ein erfülltes, gesundes und erfolgreiches Leben zu führen.
                </p>
                <p className="ql-about__text">
                  Ich verbinde die strukturierte Denkweise der Business-Welt mit fundiertem Health-Coaching, um dir zu helfen, deine Energie zurückzugewinnen, deinen Fokus zu schärfen und deinen eigenen Weg mit Souveränität und Freude zu gehen.
                </p>
              </div>
            </div>
            <h3 className="ql-about__fundament-label">Mein Fundament:</h3>
            <div className="ql-about__fundament">
              <div className="ql-about__fundament-card">
                <h4>
                  <svg className="ql-about__card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 4c3-1 5-1 10 1v16c-5-2-7-2-10-1V4z" />
                    <path d="M22 4c-3-1-5-1-10 1v16c5-2 7-2 10-1V4z" />
                  </svg>
                  Smart Professional
                </h4>
                <p>
                  Promotion im Steuerrecht (WU Wien), Fachbuchautorin und jahrelange Management-Erfahrung in der strategischen Beratung.
                </p>
              </div>
              <div className="ql-about__fundament-card">
                <h4>
                  <svg className="ql-about__card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3v4" />
                    <path d="M12 17v4" />
                    <path d="M3 12h4" />
                    <path d="M17 12h4" />
                    <polygon points="12 8 14 12 12 16 10 12" fill="currentColor" opacity="0.25" />
                  </svg>
                  Vitality &amp; Resilience
                </h4>
                <p>
                  Universitäre Ausbildung zur Gesundheits- und Vitalcoach, zertifizierte Yoga-, Barre- und Fitnesstrainerin.
                </p>
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
                    {/* Abstract sound ripples – voice & media */}
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
                    {/* Organic interlocking rings – networks */}
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
                    {/* Compass rose – guidance & mentoring */}
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
                    {/* Open pages – research & knowledge */}
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
        <section className="ql-editorial-gallery">
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
              images={[
                '/img/steffi_professionell.jpg',
                '/img/IMG_3690.jpg',
                '/img/IMG_5878.JPG',
                '/img/unnamed.jpg'
              ]}
            />
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ⑦ KONTAKT – Wie erreiche ich dich?
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
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
        <span className="ql-footer__copy">
          © {new Date().getFullYear()} Dr. Stefanie Schinnerl — Alle Rechte vorbehalten.
        </span>
      </footer>
    </Layout>
  );
}
