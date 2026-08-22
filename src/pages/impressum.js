import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Footer from '../components/Footer';

export default function Impressum() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout
      title="Impressum | Dr. Stefanie Schinnerl"
      description="Impressum und rechtliche Angaben gemäß § 5 ECG und § 25 Mediengesetz von Dr. Stefanie Schinnerl."
    >
      {/* ——— NAVBAR ——— */}
      <header className={`ql-navbar ${isScrolled ? 'ql-navbar--scrolled' : ''}`}>
        <div className="ql-navbar__inner">
          <nav className="ql-navbar__nav--left" aria-label="Hauptnavigation links">
            <ul className="ql-navbar__links">
              <li><Link to="/#home" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/#mein-ansatz" onClick={closeMenu}>Mein Ansatz</Link></li>
              <li><Link to="/#angebote" onClick={closeMenu}>Angebote</Link></li>
              <li><Link to="/#ueber-mich" onClick={closeMenu}>Über mich</Link></li>
            </ul>
          </nav>

          <Link to="/" className="ql-navbar__brand" onClick={closeMenu}>
            <span className="ql-navbar__brand-name">Dr. Stefanie Schinnerl</span>
            <span className="ql-navbar__brand-sub">Business, Body &amp; Mind</span>
          </Link>

          <nav className="ql-navbar__nav--right" aria-label="Hauptnavigation rechts">
            <ul className="ql-navbar__links">
              <li><Link to="/#b2b" onClick={closeMenu}>B2B &amp; Keynotes</Link></li>
              <li><Link to="/#einblicke" onClick={closeMenu}>Einblicke</Link></li>
              <li><Link to="/#kontakt" className="ql-navbar__link-cta" onClick={closeMenu}>Kontakt</Link></li>
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
            <li><Link to="/#home" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/#mein-ansatz" onClick={closeMenu}>Mein Ansatz</Link></li>
            <li><Link to="/#angebote" onClick={closeMenu}>Angebote &amp; Coaching</Link></li>
            <li><Link to="/#ueber-mich" onClick={closeMenu}>Über mich &amp; Expertise</Link></li>
            <li><Link to="/#b2b" onClick={closeMenu}>B2B &amp; Corporate Health</Link></li>
            <li><Link to="/#einblicke" onClick={closeMenu}>Einblicke</Link></li>
            <li><Link to="/#kontakt" onClick={closeMenu} className="ql-navbar__mobile-cta">Erstgespräch anfragen</Link></li>
          </ul>
        </div>
      </header>

      <main className="ql-legal-page">
        <div className="ql-legal-container">
          {/* Header */}
          <div className="ql-legal-header">
            <span className="ql-kicker">RECHTLICHE HINWEISE</span>
            <h1 className="ql-headline">Impressum</h1>
            <p className="ql-subtext">
              Angaben gemäß § 5 E-Commerce-Gesetz (ECG) und § 25 Abs. 5 Mediengesetz (MedienG)
            </p>
          </div>

          <div className="ql-legal-card">
            {/* Medieninhaberin */}
            <section className="ql-legal-section">
              <h2 className="ql-legal-title">Medieninhaberin &amp; Diensteanbieterin</h2>
              <div className="ql-legal-content">
                <p className="ql-legal-highlight">
                  <strong>Dr. Stefanie Schinnerl, MSc (WU)</strong>
                </p>
                <p>
                  c/o The whole Space<br />
                  Nußdorfer Straße 52/5<br />
                  1090 Wien<br />
                  Österreich
                </p>
              </div>
            </section>

            {/* Kontakt */}
            <section className="ql-legal-section">
              <h2 className="ql-legal-title">Kontakt</h2>
              <div className="ql-legal-content">
                <p>
                  <strong>E-Mail:</strong>{' '}
                  <a href="mailto:stefanie.schinnerl.office@gmail.com" className="ql-legal-link">
                    stefanie.schinnerl.office@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Kontaktformular:</strong>{' '}
                  <Link to="/#kontakt" className="ql-legal-link">
                    Direkt zum Kontaktformular
                  </Link>
                </p>
              </div>
            </section>

            {/* Tätigkeitsbereich */}
            <section className="ql-legal-section">
              <h2 className="ql-legal-title">Tätigkeitsbereich</h2>
              <div className="ql-legal-content">
                <p>
                  Selbstständige Unterrichts- und Trainingstätigkeit in den Bereichen Bewegung, Fitness und Vitalität sowie Durchführung von Vorträgen und Workshops.
                </p>
              </div>
            </section>

            {/* Haftung für Inhalte und Verweise auf Dritte */}
            <section className="ql-legal-section">
              <h2 className="ql-legal-title">Haftung &amp; Verweise auf Dritte</h2>
              <div className="ql-legal-content">
                <p>
                  <strong>Haftung für eigene Inhalte:</strong> Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
                </p>
                <p>
                  <strong>Verweise und Links auf Webseiten Dritter:</strong> Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein Einfluss besteht. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend entfernt.
                </p>
              </div>
            </section>

            {/* Urheberrecht */}
            <section className="ql-legal-section ql-legal-section--last">
              <h2 className="ql-legal-title">Urheberrechtshinweis</h2>
              <div className="ql-legal-content">
                <p>
                  Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Die unerlaubte Nutzung, Vervielfältigung oder Weitergabe von Teilen oder des gesamten Inhalts ist untersagt.
                </p>
              </div>
            </section>

            {/* Back Button */}
            <div className="ql-legal-actions">
              <Link to="/" className="ql-btn ql-btn--primary">
                ← Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* ——— FOOTER ——— */}
      <Footer />
    </Layout>
  );
}
