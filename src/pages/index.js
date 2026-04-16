import React from 'react';
import Layout from '@theme/Layout';
import ImageCarousel from '../components/ImageCarousel';

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
            <li><a href="#engagement">Engagement</a></li>
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
          <span>Fitness- &Vitalcoach</span>
        </div>

        {/* ——————————————————————————————————————————————
            ③ ÜBER MICH – Was ist deine Geschichte?
           —————————————————————————————————————————————— */}
        <section className="ql-section" id="profil">
          <div className="ql-about">
            <div className="ql-about__image">
              <ImageCarousel />
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
            <h2 className="ql-section__title" style={{ marginBottom: '1.5rem' }}>Zwei Welten. Eine Vision.</h2>
            <p className="ql-section__text" style={{ margin: '0 auto 1.5rem auto', maxWidth: '650px' }}>
              Wirtschaftliche Exzellenz und persönliche Vitalität sind keine Gegensätze, 
              sondern bedingen einander. Wer dauerhaft auf höchstem Niveau <em>performen</em> will, 
              braucht ein unerschütterliches physisches und mentales Fundament. Meine Vision ist es, 
              diese beiden Welten zu vereinen – für nachhaltige High-Performance und Leadership, 
              das von innen kommt.
            </p>
            <p className="ql-section__text" style={{ margin: '0 auto 4rem auto', maxWidth: '650px', fontStyle: 'italic', opacity: 0.85 }}>
              Diese gelebte Dualität bildet das Fundament meiner Arbeit und spiegelt sich direkt in 
              meinen Ausbildungen und Kernkompetenzen wider:
            </p>

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
            ⑤ ENGAGEMENT – Wo bist du sichtbar?
           —————————————————————————————————————————————— */}
        <section className="ql-section ql-section--centered" id="engagement">
          <div className="ql-section__inner">
            <p className="ql-section__label">Mein Engagement</p>
            <h2 className="ql-section__title" style={{ marginBottom: '1.5rem' }}>Sichtbar &amp; Engagiert</h2>
            <p className="ql-section__text" style={{ margin: '0 auto 4rem auto', maxWidth: '700px' }}>
              Meine Arbeit endet nicht am Schreibtisch. Die Verbindung aus strategischer Exzellenz, wissenschaftlichem Fundament und ganzheitlicher Vitalität ist für mich gelebte Praxis. Dieser Abschnitt bietet Ihnen einen konkreten Einblick in mein Portfolio und bisheriges Schaffen. Von Podcast-Interviews und Speaker-Auftritten über Fachpublikationen bis hin zu meiner aktiven Rolle in Netzwerken und als Mentorin: Hier finden Sie gebündelte Referenzen und aktuelle Projekte, die zeigen, wie und wo ich meine Expertise konkret in die Tat umsetze.
            </p>
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
                <p><a href="https://www.derstandard.at/story/3000000208394/frauen-in-fuehrungspositionen" target="_blank" rel="noopener noreferrer">Der Standard Podcast: Frauen in Führung →</a></p>
                <p><a href="https://women-in-law.org/2025/02/16/10-jahre-women-in-law-jubilaeum-stefanie-schinnerl-im-interview/" target="_blank" rel="noopener noreferrer">Women in Law: 10-Jahres-Jubiläumsinterview →</a></p>
                <p><a href="https://taxtech.at/3-fragen-an-unsere-ttk26-speakerinnen-stefanie-schinnerl/" target="_blank" rel="noopener noreferrer">Tax Tech Konferenz 2026: Speaker-Interview →</a></p>
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
                <p><a href="https://www.youtube.com/watch?v=1vVHKa60oHY" target="_blank" rel="noopener noreferrer">Austrian Experts: Vorstand &amp; Video-Beitrag →</a></p>
                <p><a href="https://www.freie-berufe.at/hosting-ceplis-2024/" target="_blank" rel="noopener noreferrer">Young CEPLIS: International Reports &amp; Hosting →</a></p>
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
                <p><a href="https://women-in-law.org/2024/02/26/women-in-law-the-future-of-ai-in-tax/" target="_blank" rel="noopener noreferrer">Women in Tax &amp; AI: Die Zukunft der KI →</a></p>
                <p><a href="https://women-in-law.org/2024/01/03/dr-stefanie-schinnerl-im-interview/" target="_blank" rel="noopener noreferrer">Mentoring-Programm: Interview →</a></p>
                <p><a href="https://women-in-law.org/2024/01/22/unser-jahrespartner-bdo-austria-hat-ein-eigenes-frauennetzwerk-etabliert/" target="_blank" rel="noopener noreferrer">BDO Frauennetzwerk: Kooperations-Lead →</a></p>
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
        <section className="ql-section ql-section--centered" id="kontakt">
          <div className="ql-contact">
            <p className="ql-section__label">Kontakt</p>
            <h2 className="ql-section__title">Lassen Sie uns sprechen.</h2>
            <p className="ql-section__text">
              Ob Steuerberatung, Coaching, Moderation oder Fachbeitrag –
              ich freue mich auf Ihre Anfrage. Ich melde mich daraufhin gerne per E-Mail oder telefonisch bei Ihnen.
            </p>
            <form className="ql-contact__form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="E-Mail" required />
              <input type="tel" name="phone" placeholder="Telefonnummer (optional)" />
              <select name="inquiry" defaultValue="" required>
                <option value="" disabled>
                  Themenbereich auswählen …
                </option>
                <option value="steuerberatung">Steuerberatung</option>
                <option value="coaching">Coaching / Training</option>
                <option value="moderation">Moderation / Speaking</option>
                <option value="interview">Interview / Podcast</option>
                <option value="fachbeitrag">Fachbeitrag</option>
                <option value="sonstiges">Sonstiges</option>
              </select>
              <textarea name="message" placeholder="Ihre Nachricht – worum geht es konkret?" rows="5" required></textarea>
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
