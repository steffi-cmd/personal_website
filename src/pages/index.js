import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Strategie & Resilienz"
      description="Dr. Stefanie Schinnerl – Steuerberaterin, Autorin, Gesundheits- & Vitalcoach. Strategie trifft Vitalität."
    >
      {/* ——— NAVBAR ——— */}
      <header className="ql-navbar">
        <a href="#home" className="ql-navbar__brand">
          Dr. Stefanie Schinnerl
        </a>
        <nav>
          <ul className="ql-navbar__links">
            <li><a href="#profil">Profil</a></li>
            <li><a href="#zwei-welten">Zwei Welten</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* ——————————————————————————————————————————————
            ① HERO – Wer bist du?
           —————————————————————————————————————————————— */}
        <section
          className="ql-hero"
          id="home"
          style={{
            backgroundImage: `url('/img/Schinnerl Stefanie_Original.jpg')`,
          }}
        >
          <div className="ql-hero__overlay" />
          <div className="ql-hero__content">
            <h1 className="ql-hero__title">
              Strategie trifft Vitalität.
            </h1>
            <p className="ql-hero__subtitle">
              Dr. Stefanie Schinnerl – Steuerberaterin, PhD Economics, Fachautorin, Speakerin,
              Fitness- &amp; Vitalcoach.
            </p>
            <a href="#kontakt" className="ql-btn ql-btn--accent">
              Kontakt aufnehmen
            </a>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ② TRUST BAR – Wer bist du auf einen Blick?
           —————————————————————————————————————————————— */}
        <div className="ql-trust">
          <span>Steuerberaterin</span>
          <span className="ql-about__dot">◆</span>
          <span>PhD Economics</span>
          <span className="ql-about__dot">◆</span>
          <span>Fachautorin</span>
          <span className="ql-about__dot">◆</span>
          <span>Speakerin</span>
          <span className="ql-about__dot">◆</span>
          <span>FitnessVitalcoach</span>
        </div>

        {/* ——————————————————————————————————————————————
            ③ ÜBER MICH – Was ist deine Geschichte?
           —————————————————————————————————————————————— */}
        <section className="ql-section" id="profil">
          <div className="ql-about">
            <div className="ql-about__image">
              <img
                src="/img/steffi_professionell.jpg"
                alt="Dr. Stefanie Schinnerl"
                loading="lazy"
              />
            </div>
            <div className="ql-about__text">
              <p className="ql-section__label">Über mich</p>
              <h2 className="ql-about__name">Dr. Stefanie Schinnerl</h2>
              <p className="ql-about__roles">
                Steuerberaterin <span className="ql-about__dot">◆</span> PhD Economics{' '}
                <span className="ql-about__dot">◆</span> Fachautorin{' '}
                <span className="ql-about__dot">◆</span> Speakerin{' '}
                <span className="ql-about__dot">◆</span> Fitness &amp; Vitalcoach
              </p>
              <h3 className="ql-about__headline">Zwei Welten, eine Haltung.</h3>
              <p className="ql-section__text">
                Ich kenne die Anforderungen des echten Business-Alltags, die Deadlines, den Druck und die Erwartungshaltung. Als promovierte Wirtschaftswissenschaftlerin und Steuerberaterin mit langjähriger Kanzleierfahrung und heute bei BDO weiß ich, was es bedeutet, in diesem Umfeld dauerhaft zu <em>performen.</em> {' '}
                {' '}
              </p>
              <p className="ql-section__text">
                Ich weiß aber auch, wie schnell man dabei vergisst, dass der Körper keine Maschine ist. Meine eigene Brustkrebsdiagnose hat das für mich unübersehbar gemacht. Sie hat meinen Blick auf Leistung fundamental verändert: Wahre High-Performance bedeutet nicht, sich auszubrennen, sondern die eigene Vitalität als Grundlage für alles andere zu begreifen.
              </p>
              <p className="ql-section__text">
                Diesen Ansatz lebe ich. Neben meiner Kanzleitätigkeit bin ich zertifizierte Trainerin in mehreren Disziplinen, von Yoga und Barre bis Gruppenfitness, und ausgebildete Fitness- und Vitalcoach. Bewegung, Resilienz und gesunde Leistungsfähigkeit sind für mich kein Widerspruch zur Karriere. Sie sind deren Fundament.
              </p>
              <p className="ql-section__text">
                Darüber hinaus engagiere ich mich für Themen, die über den Schreibtisch hinausgehen, vor allem für Gleichstellung und die Sichtbarkeit von Frauen in Wirtschaft und Gesellschaft.
              </p>
              <p className="ql-section__text">
                Das alles formt, wer ich bin und was ich in eine Beratung, einen Vortrag oder einen Raum mitbringe.
              </p>
              <p className="ql-about__signature">Stefanie Schinnerl</p>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ④ ZWEI WELTEN – Was macht dich einzigartig?
           —————————————————————————————————————————————— */}
        <section className="ql-section ql-section--centered" id="zwei-welten">
          <div className="ql-section__inner">
            <p className="ql-section__label">Meine Expertise</p>
            <h2 className="ql-section__title">Zwei Welten. Eine Vision.</h2>

            <div className="ql-worlds">
              {/* Business Karte */}
              <article className="ql-worlds__card">
                <div className="ql-worlds__header">
                  <div className="ql-worlds__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      {/* Elegant pen – writing & expertise */}
                      <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                      <path d="M15 5l4 4" />
                    </svg>
                  </div>
                  <h3>Business</h3>
                </div>
                <p className="ql-worlds__claim">
                  Tax &amp; Business Excellence. Expertin für komplexe steuerliche
                  Strukturen und strategische Weitsicht.
                </p>

                <div className="ql-worlds__section">
                  <h4>Qualifikationen</h4>
                  <ul>
                    <li>Steuerberaterin</li>
                    <li>Dr. in Wirtschafts- &amp; Sozialwissenschaften (WU Wien)</li>
                    <li>MSc in Steuern &amp; Rechnungslegung</li>
                    <li>Autorin von Fachbeiträgen (LexisNexis, Linde, RDB)</li>
                    <li>Fachvortragende</li>
                  </ul>
                </div>

                <div className="ql-worlds__section">
                  <h4>Was ich anbiete</h4>
                  <ul className="ql-worlds__offers">
                    <li>Strategische Steuerberatung</li>
                    <li>Fachvorträge &amp; Keynotes</li>
                    <li>Moderation &amp; Hosting</li>
                    <li>Interviews &amp; Fachbeiträge</li>
                  </ul>
                </div>
              </article>

              {/* Body Karte */}
              <article className="ql-worlds__card">
                <div className="ql-worlds__header">
                  <div className="ql-worlds__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      {/* Yoga tree pose – body & vitality */}
                      <circle cx="12" cy="4" r="2" />
                      <path d="M12 6v6" />
                      <path d="M12 22v-6" />
                      <path d="M9 10l3-2 3 2" />
                      <path d="M8 22c0-4 4-4 4-6" />
                      <path d="M16 22c0-4-4-4-4-6" />
                    </svg>
                  </div>
                  <h3>Body</h3>
                </div>
                <p className="ql-worlds__claim">
                  Vitality &amp; Resilience. Biologisches Fundament und mentale
                  Stärke für nachhaltige High-Performance.
                </p>

                <div className="ql-worlds__section">
                  <h4>Qualifikationen</h4>
                  <ul>
                    <li>Gesundheits- &amp; Vitalcoach i.A. (Universität Wien)</li>
                    <li>RYT-200 Ashtanga Vinyasa Yoga Teacher</li>
                    <li>Barre Revolution Instructor</li>
                    <li>PILOXING® Instructor</li>
                    <li>Group Fitness Instructor</li>
                  </ul>
                </div>

                <div className="ql-worlds__section">
                  <h4>Was ich anbiete</h4>
                  <ul className="ql-worlds__offers">
                    <li>High-Performance Coaching</li>
                    <li>Yoga &amp; Mobility Training</li>
                    <li>Resilienz-Strategien</li>
                    <li>Fitness &amp; Vitalität</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ⑤ EXPERTISE & ENGAGEMENT – Wo bist du sichtbar?
           —————————————————————————————————————————————— */}
        <section className="ql-section ql-section--centered" id="expertise">
          <div className="ql-section__inner">
            <p className="ql-section__label">Expertise &amp; Engagement</p>
            <h2 className="ql-section__title">Sichtbar &amp; Engagiert</h2>
            <div className="ql-engagement">
              <article className="ql-engagement__card">
                <div className="ql-engagement__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Abstract sound ripples – voice & media */}
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 2a10 10 0 0 1 0 20" />
                    <path d="M12 5a7 7 0 0 1 0 14" />
                    <path d="M12 8a4 4 0 0 1 0 8" />
                  </svg>
                </div>
                <h3>Media</h3>
                <p>Der Standard Podcast: Frauen in Führung →</p>
                <p>Women in Law: 10-Jahres-Jubiläumsinterview →</p>
                <span className="ql-engagement__sub">Expertise teilen &amp; Sichtbarkeit schaffen</span>
              </article>

              <article className="ql-engagement__card">
                <div className="ql-engagement__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Organic interlocking rings – networks */}
                    <circle cx="8" cy="10" r="5" />
                    <circle cx="16" cy="10" r="5" />
                    <circle cx="12" cy="16" r="5" />
                  </svg>
                </div>
                <h3>Networks</h3>
                <p>Austrian Experts: Vorstand &amp; Video-Beitrag →</p>
                <p>Young CEPLIS: International Reports &amp; Hosting →</p>
                <span className="ql-engagement__sub">Netzwerke stärken &amp; Brücken bauen</span>
              </article>

              <article className="ql-engagement__card">
                <div className="ql-engagement__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Compass rose – guidance & mentoring */}
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3v4" />
                    <path d="M12 17v4" />
                    <path d="M3 12h4" />
                    <path d="M17 12h4" />
                    <polygon points="12 8 14 12 12 16 10 12" fill="currentColor" opacity="0.25" />
                  </svg>
                </div>
                <h3>Mentoring</h3>
                <p>Women in Tax &amp; AI: Die Zukunft der KI →</p>
                <p>BDO Frauennetzwerk: Kooperations-Lead →</p>
                <span className="ql-engagement__sub">Zukunft gestalten &amp; Potenziale fördern</span>
              </article>

              <article className="ql-engagement__card">
                <div className="ql-engagement__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Open pages – research & knowledge */}
                    <path d="M2 4c3-1 5-1 10 1v16c-5-2-7-2-10-1V4z" />
                    <path d="M22 4c-3-1-5-1-10 1v16c5-2 7-2 10-1V4z" />
                  </svg>
                </div>
                <h3>Research</h3>
                <p>Tax Moot Court: Weltspitze mit dem WU-Team →</p>
                <p>WU Wien: Ehemalige Mitarbeiterin →</p>
                <span className="ql-engagement__sub">Wissen vertiefen &amp; Fundamente setzen</span>
              </article>
            </div>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ⑥ ZITAT-BAND – Emotionaler Anker
           —————————————————————————————————————————————— */}
        <section className="ql-quote-band">
          <div className="ql-quote-band__item ql-quote-band__item--quote">
            <span className="ql-quote-band__mark">"</span>
            <p>
              Wahre Stärke zeigt sich nicht darin, nie zu fallen – sondern
              darin, jedes Mal bewusster aufzustehen.
            </p>
          </div>
          <div className="ql-quote-band__item ql-quote-band__item--image">
            <img
              src="/img/Schinnerl Stefanie_Original.jpg"
              alt="Dr. Stefanie Schinnerl"
              loading="lazy"
            />
          </div>
          <div className="ql-quote-band__item ql-quote-band__item--quote">
            <span className="ql-quote-band__mark">"</span>
            <p>
              You never regret investing in yourself.
            </p>
          </div>
        </section>

        {/* ——————————————————————————————————————————————
            ⑦ KONTAKT – Wie erreiche ich dich?
           —————————————————————————————————————————————— */}
        <section className="ql-section ql-section--centered" id="kontakt">
          <div className="ql-contact">
            <p className="ql-section__label">Kontakt</p>
            <h2 className="ql-section__title">Lassen Sie uns sprechen.</h2>
            <p className="ql-section__text">
              Ob Steuerberatung, Coaching, Moderation oder Fachbeitrag –
              ich freue mich auf Ihre Anfrage.
            </p>
            <form className="ql-contact__form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="E-Mail" required />
              <select name="inquiry" defaultValue="" required>
                <option value="" disabled>
                  Anfrage für …
                </option>
                <option value="steuerberatung">Steuerberatung</option>
                <option value="coaching">Coaching / Training</option>
                <option value="moderation">Moderation / Speaking</option>
                <option value="interview">Interview / Podcast</option>
                <option value="fachbeitrag">Fachbeitrag</option>
                <option value="sonstiges">Sonstiges</option>
              </select>
              <button type="submit" className="ql-btn">
                Anfrage senden
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* ——— FOOTER ——— */}
      <footer className="ql-footer">
        <span className="ql-footer__copy">
          © {new Date().getFullYear()} Dr. Stefanie Schinnerl
        </span>
        <ul className="ql-footer__links">
          <li><a href="/impressum">Impressum</a></li>
          <li><a href="/datenschutz">Datenschutz</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </footer>
    </Layout>
  );
}
