import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Footer from '../components/Footer';

export default function Datenschutz() {
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
      title="Datenschutzerklärung | Dr. Stefanie Schinnerl"
      description="Datenschutzerklärung und Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO von Dr. Stefanie Schinnerl."
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
            <span className="ql-kicker">DATENSCHUTZ</span>
            <h1 className="ql-headline">Datenschutzerklärung</h1>
            <p className="ql-subtext">
              Informationen über die Verarbeitung personenbezogener Daten gemäß Art. 13 &amp; 14 DSGVO
            </p>
          </div>

          <div className="ql-legal-card">
            {/* 1. Verantwortliche Person */}
            <section className="ql-legal-section">
              <h2 className="ql-legal-title">1. Verantwortliche Person</h2>
              <div className="ql-legal-content">
                <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                <p className="ql-legal-highlight">
                  <strong>Dr. Stefanie Schinnerl, MSc (WU)</strong>
                </p>
                <p>
                  c/o The whole Space<br />
                  Nußdorfer Straße 52/5<br />
                  1090 Wien<br />
                  Österreich
                </p>
                <p>
                  <strong>E-Mail:</strong>{' '}
                  <a href="mailto:stefanie.schinnerl.office@gmail.com" className="ql-legal-link">
                    stefanie.schinnerl.office@gmail.com
                  </a>
                </p>
              </div>
            </section>

            {/* 2. Bereitstellung der Website & Server-Logfiles */}
            <section className="ql-legal-section">
              <h2 className="ql-legal-title">2. Bereitstellung der Website &amp; Server-Logfiles (GitHub Pages)</h2>
              <div className="ql-legal-content">
                <p>
                  Diese Website wird über <strong>GitHub Pages</strong> gehostet. Anbieter ist die GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA (bzw. GitHub B.V., Vijzelstraat 68-72, 1017 HL Amsterdam, Niederlande).
                </p>
                <p>
                  Beim Aufrufen der Website werden durch den Webserver technisch bedingt automatisch Daten erhoben und in sogenannten Server-Logfiles gespeichert:
                </p>
                <ul>
                  <li>IP-Adresse des zugreifenden Geräts</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Aufgerufene Seite / Name der abgerufenen Datei</li>
                  <li>Browsertyp und Betriebssystem</li>
                  <li>Zuvor besuchte Website (Referrer URL)</li>
                </ul>
                <p>
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren, stabilen und fehlerfreien Bereitstellung der Website).
                </p>
                <p>
                  <strong>Drittlandübermittlung:</strong> Die Übermittlung in die USA ist über Standardvertragsklauseln der Europäischen Kommission sowie das Data Privacy Framework (DPF) abgesichert.
                </p>
              </div>
            </section>

            {/* 3. Kontaktaufnahme */}
            <section className="ql-legal-section">
              <h2 className="ql-legal-title">3. Kontaktaufnahme (Kontaktformular &amp; E-Mail)</h2>
              <div className="ql-legal-content">
                <p>
                  Wenn du über das Web-Formular oder per E-Mail Kontakt aufnimmst, werden deine übermittelten Daten (Name, E-Mail-Adresse, eventuell freiwillig angegebene Telefonnummer sowie deine Nachricht) zur Bearbeitung der Anfrage und für allfällige Anschlussfragen verarbeitet.
                </p>
                <ul>
                  <li>
                    <strong>Formular-Weiterleitung (Formspree):</strong> Die Daten aus dem Kontaktformular werden über den Dienst Formspree (Formspree Inc., USA) verarbeitet und direkt an mein Postfach weitergeleitet.
                  </li>
                  <li>
                    <strong>E-Mail-Postfach (Google Mail):</strong> Der Empfang und die Bearbeitung von E-Mails erfolgt über Google Mail (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland).
                  </li>
                </ul>
                <p>
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Erfüllung vorvertraglicher Maßnahmen bzw. Beantwortung von Anfragen) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kommunikation).
                </p>
                <p>
                  <strong>Speicherdauer:</strong> Daten aus Anfragen werden gelöscht, sobald der Zweck erfüllt ist und keine gesetzlichen Aufbewahrungsfristen entgegenstehen.
                </p>
              </div>
            </section>

            {/* 4. Social Media Links */}
            <section className="ql-legal-section">
              <h2 className="ql-legal-title">4. Links zu Social-Media-Profilen (Instagram, LinkedIn)</h2>
              <div className="ql-legal-content">
                <p>
                  Auf dieser Website sind Verlinkungen zu meinen Profilen bei Instagram und LinkedIn gesetzt. Hierbei handelt es sich um normale Hyperlinks und keine dynamischen Social-Plugins oder Tracking-Pixel. Erst wenn du aktiv auf das entsprechende Symbol oder den Link klickst, wirst du auf die externe Seite weitergeleitet.
                </p>
              </div>
            </section>

            {/* 5. Cookies */}
            <section className="ql-legal-section">
              <h2 className="ql-legal-title">5. Cookies</h2>
              <div className="ql-legal-content">
                <p>
                  Diese Website nutzt ausschließlich technisch erforderliche Funktionen zur Auslieferung der statischen Seiten. Es werden keine zustimmungspflichtigen Tracking-, Analyse- oder Marketing-Cookies eingesetzt.
                </p>
              </div>
            </section>

            {/* 6. Betroffenenrechte */}
            <section className="ql-legal-section ql-legal-section--last">
              <h2 className="ql-legal-title">6. Deine Rechte</h2>
              <div className="ql-legal-content">
                <p>Nach den Bestimmungen der DSGVO stehen dir bezüglich der dich betreffenden Daten folgende Rechte zu:</p>
                <ul>
                  <li><strong>Auskunftsrecht</strong> (Art. 15 DSGVO)</li>
                  <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
                  <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
                  <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
                  <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                  <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)</li>
                </ul>
                <p>
                  Wenn du der Meinung bist, dass die Verarbeitung deiner Daten gegen das Datenschutzrecht verstößt, kannst du dich an die Aufsichtsbehörde wenden:
                </p>
                <div className="ql-legal-highlight" style={{ marginTop: '0.8rem' }}>
                  <strong>Österreichische Datenschutzbehörde</strong><br />
                  Barichgasse 40–42, 1030 Wien<br />
                  Telefon: +43 1 52 152-0 | E-Mail:{' '}
                  <a href="mailto:dsb@dsb.gv.at" className="ql-legal-link">
                    dsb@dsb.gv.at
                  </a>{' '}
                  | Web:{' '}
                  <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="ql-legal-link">
                    https://www.dsb.gv.at
                  </a>
                </div>
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
