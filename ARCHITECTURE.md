# Spion Media — Site Mimarisi

> Saf HTML5 + CSS3 + Vanilla JS. Framework yok, build tool yok.
> Son güncelleme: Nisan 2025

---

## Dizin Yapısı (Temizlenmiş)

```
spion-media/
│
├── 📄 index.html                    ✅ Ana sayfa (yeni tasarım)
├── 📄 products.html                 ✅ Hizmetler (yeni tasarım)
├── 📄 portfolio.html                ⬜ Portfolyo (yapılacak)
├── 📄 ROADMAP.md                    ✅ Yol haritası
├── 📄 ARCHITECTURE.md               ✅ Bu dosya
│
├── 🎨 spion.css                     ✅ GLOBAL tasarım sistemi (tek kaynak)
├── ⚙️  spion-nav.js                  ✅ GLOBAL JS (navbar, reveal, lang toggle)
│
├── 📁 contact/
│   └── index.html                   ✅ İletişim (yeni tasarım)
│
├── 📁 career/
│   └── index.html                   ✅ Kariyer (yeni tasarım)
│
├── 📁 purplestore/
│   └── index.html                   ✅ Medya Store (yeni tasarım)
│
├── 📁 about/
│   ├── vision/index.html            ⬜ Vizyon & Misyon (taşınacak)
│   ├── history/index.html           ⬜ Şirket Tarihçesi (taşınacak)
│   ├── team/index.html              ⬜ Ekip & Liderlik (taşınacak)
│   ├── goal/index.html              ⬜ Hedefler (taşınacak)
│   └── product/                     🗑️  SİLİNECEK → products.html'e yönlendir
│
├── 📁 blog/
│   ├── index.html                   ⬜ Blog listesi (taşınacak)
│   ├── sessiz-isgal-icerik-psikolojisi.html   ⬜ (taşınacak)
│   ├── algoritma-acigi-kucuk-markalar.html    ⬜ (taşınacak)
│   ├── drone-kobilar-icin-zorunlu.html        ⬜ (taşınacak)
│   ├── mersinden-kuresel-marka.html           ⬜ (taşınacak)
│   └── yapay-zeka-muzik-produksiyonu.html     ⬜ (taşınacak)
│
├── 📁 legal/
│   ├── GP/index.html                ⬜ Gizlilik Politikası (taşınacak)
│   ├── KK/index.html                ⬜ Kullanım Koşulları (taşınacak)
│   └── CP/index.html                ⬜ Çerez Politikası (taşınacak)
│
├── 📁 faq/
│   └── index.html                   ⬜ SSS (taşınacak)
│
├── 📁 investor/
│   └── index.html                   ⬜ Yatırımcı (taşınacak)
│
├── 📁 sponsor/
│   └── index.html                   ⬜ Sponsor (taşınacak)
│
├── 📁 pricing/
│   └── index.html                   ⬜ Fiyatlandırma (taşınacak)
│
├── 📁 images/                       ✅ Tüm görseller (dokunma)
│   ├── about/        → about sayfaları için (1-13.jpg)
│   ├── clients/      → marquee logoları (1-6.png)
│   ├── item/         → eski item görselleri (kullanılmıyor olabilir)
│   ├── logos/        → favicon, footer, logo varyantları
│   ├── product/      → hizmet kartı görselleri (1-9.jpg)
│   ├── project/      → portfolyo görselleri
│   │   ├── about-item/   → about sayfaları için
│   │   └── blog-item1/   → blog/portfolyo için (1-6.jpg)
│   └── slider/       → eski slider görselleri (1-4.jpg)
│
├── 📁 items/
│   └── music/fon.mp3                🗑️  Arka plan müziği — kaldırılabilir
│
├── 📁 froggpt/                      ⚠️  Bağımsız araç — dokunma
│   ├── index.html
│   ├── code.js
│   ├── styles.css
│   └── images/
│
└── 📁 .git/                         → Git geçmişi (dokunma)
```

---

## Silinecek / Devre Dışı Dosyalar

| Dosya | Neden |
|-------|-------|
| `styles.css` | Eski tasarım sistemi. `spion.css` ile değiştirildi |
| `main.js` | Eski JS (slider, ScrollReveal, müzik). `spion-nav.js` ile değiştirildi |
| `lang-toggle.js` | `spion-nav.js` içine entegre edildi |
| `chatbot.css` | Chatbot devre dışı bırakıldı |
| `chatbot.js` | Chatbot devre dışı bırakıldı |
| `index-v2.html` | `index.html`'e yönlendirme yapıldı, silinebilir |
| `_tmp.html` | Geçici dosya, sil |
| `about/product/` | `products.html` ile aynı içerik, yönlendir ve sil |
| Her klasördeki `styles.css` | Eski sayfa stilleri (career, contact, blog vb.) |
| Her klasördeki `main.js` | Eski sayfa JS'leri |
| `purplestore/images/` | Eski store görselleri (video.mp4, YONKOBg.jpg) |
| `items/music/fon.mp3` | Arka plan müziği kaldırıldı |

---

## Global Tasarım Sistemi

### `spion.css` — Tek CSS Kaynağı

```
CSS Değişkenleri (renk, spacing, font, radius, transition)
    ↓
Reset & Base (*, html, body, h1-h6, a, ul, img, button)
    ↓
Layout (.container, .section, .section--dark, .section--sm)
    ↓
Tipografi (.section-label, .section-title, .section-title-line)
    ↓
Butonlar (.btn, .btn-primary, .btn-ghost, .btn-sm, .btn-lg)
    ↓
Navbar (.navbar, .navbar__inner, .navbar__logo, .navbar__menu,
        .navbar__dropdown, .navbar__hamburger, .navbar__mobile-overlay)
    ↓
Footer (.footer, .footer__grid, .footer__social, .footer__bottom,
        .footer__watermark)
    ↓
Bileşenler (.card, .badge, .breadcrumb, .next-step, .fab-telegram)
    ↓
Form Elemanları (.form-field, input, select, textarea)
    ↓
Sayfa Hero (.page-hero, .page-hero__title, .page-hero__sub)
    ↓
Animasyonlar (fadeUp, fadeIn, marquee, charReveal, .reveal)
    ↓
Utility (.text-accent, .text-muted, .grid-2/3/4, .sr-only)
    ↓
Responsive (1024px, 900px, 768px, 600px, 480px)
```

### `spion-nav.js` — Tek JS Kaynağı

```
Hamburger / Mobile Overlay toggle
    ↓
IntersectionObserver → .reveal sınıfı animasyonu
    ↓
Aktif navbar link tespiti (pathname bazlı)
    ↓
Google Translate dil toggle (TR/EN)
```

---

## Sayfa Şablonu (Her Yeni Sayfa İçin)

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>[Sayfa Adı] — Spion Media</title>
  <meta name="description" content="..."/>
  <link rel="icon" href="[../]images/logos/favicon.png"/>
  <link rel="stylesheet" href="[../]spion.css"/>
  <style>/* Sayfaya özel stiller buraya */</style>
</head>
<body>

  <!-- NAVBAR (kök veya alt klasöre göre href ayarla) -->
  <nav class="navbar">...</nav>
  <div class="navbar__mobile-overlay">...</div>

  <!-- PAGE HERO -->
  <div class="page-hero section--dark">
    <div class="container">
      <nav class="breadcrumb">Ana Sayfa / [Sayfa]</nav>
      <p class="section-label">Etiket</p>
      <h1 class="page-hero__title">BAŞLIK</h1>
      <p class="page-hero__sub">Alt başlık</p>
    </div>
  </div>

  <!-- MAIN CONTENT -->
  <main>
    <section class="section">
      <div class="container">
        <!-- İçerik -->
      </div>
    </section>
  </main>

  <!-- NEXT STEP CTA -->
  <div class="next-step">...</div>

  <!-- FOOTER -->
  <footer class="footer">...</footer>

  <script src="[../]spion-nav.js"></script>
</body>
</html>
```

---

## URL Yapısı

```
/                           → index.html
/products.html              → Hizmetler
/portfolio.html             → Portfolyo
/contact/                   → İletişim
/career/                    → Kariyer
/purplestore/               → Medya Store
/about/vision/              → Vizyon & Misyon
/about/history/             → Şirket Tarihçesi
/about/team/                → Ekip & Liderlik
/about/goal/                → Hedefler
/blog/                      → Blog listesi
/blog/[slug].html           → Blog yazısı
/legal/GP/                  → Gizlilik Politikası
/legal/KK/                  → Kullanım Koşulları
/legal/CP/                  → Çerez Politikası
/faq/                       → SSS
/investor/                  → Yatırımcı
/sponsor/                   → Sponsor
/pricing/                   → Fiyatlandırma
/froggpt/                   → FrogGPT (bağımsız araç)
```

---

## CSS Yolu Kuralı

| Klasör derinliği | spion.css yolu | spion-nav.js yolu |
|-----------------|----------------|-------------------|
| Kök (`/`) | `spion.css` | `spion-nav.js` |
| 1 seviye (`/contact/`) | `../spion.css` | `../spion-nav.js` |
| 2 seviye (`/about/team/`) | `../../spion.css` | `../../spion-nav.js` |

---

## Görsel Varlıklar

| Klasör | İçerik | Kullanım |
|--------|--------|----------|
| `images/logos/` | favicon.png, square.png, footer.png | Navbar logo, favicon |
| `images/clients/` | 1-6.png | Ana sayfa marquee |
| `images/product/` | 1-9.jpg | Hizmet kartları, store |
| `images/project/blog-item1/` | 1-6.jpg | Portfolyo, blog |
| `images/about/` | 1-13.jpg | About sayfaları |
| `images/slider/` | 1-4.jpg | Artık kullanılmıyor |
| `images/item/` | 1-6.png | Artık kullanılmıyor |

---

## Renk Paleti

| Token | Değer | Kullanım |
|-------|-------|----------|
| `--color-bg` | `#0a0a0a` | Sayfa arka planı |
| `--color-surface` | `#111111` | Kart, section arka planı |
| `--color-surface-2` | `#1a1a1a` | Hover yüzeyleri |
| `--color-border` | `#222222` | Kenarlıklar |
| `--color-accent` | `#c8a96e` | Altın vurgu — CTA, başlık |
| `--color-accent-dim` | `#8a7248` | Soluk altın — hover |
| `--color-text-primary` | `#f0ede8` | Ana metin |
| `--color-text-secondary` | `#888888` | İkincil metin |
| `--color-text-muted` | `#444444` | Soluk metin |

---

## Font Sistemi

| Kullanım | Font | CDN |
|----------|------|-----|
| Başlıklar (H1-H3) | Anton | Google Fonts |
| Gövde, etiket, form | Source Code Pro | Google Fonts |

```html
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Source+Code+Pro:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
```

---

## Bağımlılıklar

| Kütüphane | Versiyon | Kullanım | Durum |
|-----------|----------|----------|-------|
| Google Fonts | CDN | Anton + Source Code Pro | ✅ Aktif |
| Google Translate | CDN | TR/EN dil toggle | ✅ Aktif |
| Font Awesome | 6.6.0 | İkon (eski sayfalar) | ⚠️ Sadece eski sayfalarda |
| ScrollReveal | 4.0.0 | Eski sayfalarda | 🗑️ Kaldırılıyor (spion-nav.js içinde native) |

> Yeni tasarımda harici JS bağımlılığı **sıfır**. Tüm ikonlar inline SVG.
