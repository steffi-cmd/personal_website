import React from 'react';
import Link from '@docusaurus/Link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ql-footer">
      <div className="ql-footer__container">
        {/* Brand & Tagline */}
        <div className="ql-footer__brand-wrapper">
          <span className="ql-footer__brand">Dr. Stefanie Schinnerl</span>
          <span className="ql-footer__tagline">BUSINESS ✦ BODY ✦ MIND</span>
        </div>

        {/* Navigation Links */}
        <nav className="ql-footer__nav" aria-label="Footer Navigation">
          <ul className="ql-footer__links">
            <li><Link to="/#home">Home</Link></li>
            <li><Link to="/#mein-ansatz">Mein Ansatz</Link></li>
            <li><Link to="/#angebote">Angebote</Link></li>
            <li><Link to="/#ueber-mich">Über mich</Link></li>
            <li><Link to="/#b2b">B2B &amp; Keynotes</Link></li>
            <li><Link to="/#einblicke">Einblicke</Link></li>
            <li><Link to="/#kontakt">Kontakt</Link></li>
          </ul>
        </nav>

        {/* Social Icons (Instagram & LinkedIn) */}
        <div className="ql-footer__socials">
          <a
            href="https://www.instagram.com/bystefanieschinnerl/"
            target="_blank"
            rel="noopener noreferrer"
            className="ql-footer__social-link"
            aria-label="Instagram von Dr. Stefanie Schinnerl"
            title="Instagram"
          >
            <svg
              className="ql-footer__social-icon"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/stefanie-schinnerl"
            target="_blank"
            rel="noopener noreferrer"
            className="ql-footer__social-link"
            aria-label="LinkedIn von Dr. Stefanie Schinnerl"
            title="LinkedIn"
          >
            <svg
              className="ql-footer__social-icon"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="ql-footer__divider" />

        {/* Bottom Bar: Copyright & Legal */}
        <div className="ql-footer__bottom">
          <span className="ql-footer__copy">
            © {currentYear} Dr. Stefanie Schinnerl · Alle Rechte vorbehalten.
          </span>
          <div className="ql-footer__legal">
            <Link to="/impressum" className="ql-footer__legal-link">Impressum</Link>
            <span className="ql-footer__legal-separator">·</span>
            <Link to="/datenschutz" className="ql-footer__legal-link">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
