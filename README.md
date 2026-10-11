# Dr. Stefanie Schinnerl – Website (Business, Body & Mind)

Moderne, performante und rechtssichere Website für **Dr. Stefanie Schinnerl: Holistic Mentoring & Health Coaching**, gebaut mit [Astro](https://astro.build).

---

## 🚀 Lokale Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Lokalen Entwicklungsserver starten
npm run dev
```

Der Entwicklungsserver startet unter `http://localhost:4321/steffi_personal_website/`.  
Änderungen an Komponenten oder Seiten werden durch Hot-Module-Reloading sofort im Browser aktualisiert.

---

## 🏗️ Projektstruktur & Aufbau

```text
├── public/
│   ├── img/                   # Alle optimierten Fotos & Assets (82+ Bilder)
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Footer.astro       # Globaler Footer mit Social Links & Rechtlichem
│   │   └── LookbookGallery.astro # Touch-fähige, optimierte Galerie
│   ├── layouts/
│   │   └── Layout.astro       # Split-Navbar, Responsive Mobile-Drawer & SEO-Tags
│   ├── pages/
│   │   ├── index.astro        # Startseite mit allen Sektionen (Hero, Ansatz, Angebote, Über mich, B2B, Ablauf, Galerie, Kontakt)
│   │   ├── impressum.astro    # Rechtliches Impressum (§ 5 ECG / § 25 Mediengesetz Österreich)
│   │   └── datenschutz.astro  # DSGVO-konforme Datenschutzerklärung
│   └── styles/
│       └── custom.css         # Vollständiges, edles Designsystem
├── scripts/
│   ├── dev.mjs                # Lokaler Dev-Starter
│   └── optimize-images.mjs    # HEIC-Konverter & automatische Bildkomprimierung
├── astro.config.mjs           # Astro-Konfiguration (GitHub Pages Base-Path)
└── package.json
```

---

## 🖼️ Bilder tauschen & automatisch optimieren

Alle Fotos liegen im Ordner:
📁 `public/img/`

* **Neues Foto einbinden:** Bild in `public/img/` ablegen und in der jeweiligen Komponente (z. B. `src/pages/index.astro` oder `src/components/LookbookGallery.astro`) referenzieren.
* **Bilder automatisch komprimieren & HEIC konvertieren:**
  ```bash
  npm run optimize-images
  ```
  *(Konvertiert iPhone-HEIC-Fotos in Web-JPEGs und komprimiert große DSLR-Dateien verlustarm auf optimale Ladezeiten).*

---

## 📦 Produktions-Build testen

```bash
# Produktions-Build erzeugen
npm run build

# Gebaute Website lokal testen
npm run preview
```

---

## 🚢 Automatisches Deployment (GitHub Pages)

Die Website wird automatisch per **GitHub Actions** (`.github/workflows/deploy.yml`) gebaut und bereitgestellt, sobald Änderungen in den `main`-Branch fließen:

🌐 **Live-URL:** [https://stefanieschinnerl.com/](https://stefanieschinnerl.com/)
