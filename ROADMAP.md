# Spion Media — Site Tamamlama Yol Haritası

> Tasarım sistemi: `spion.css` + `spion-nav.js`
> Tamamlanan sayfalar: `index.html`, `products.html`, `contact/index.html`, `career/index.html`, `purplestore/index.html`

---

## Faz 1 — Kritik (Navbar'da link var, 404 verir)

| # | Durum | Sayfa | Dosya | Not |
|---|-------|-------|-------|-----|
| 1 | ⬜ | Portfolyo | `portfolio.html` | Yeni oluşturulacak |
| 2 | ⬜ | Vizyon & Misyon | `about/vision/index.html` | Yeni tasarıma taşınacak |
| 3 | ⬜ | Şirket Tarihçesi | `about/history/index.html` | Yeni tasarıma taşınacak |
| 4 | ⬜ | Ekip & Liderlik | `about/team/index.html` | Yeni tasarıma taşınacak |
| 5 | ⬜ | Hedefler | `about/goal/index.html` | Yeni tasarıma taşınacak |

---

## Faz 2 — İçerik (Mevcut içerik var, tasarım güncellenecek)

| # | Durum | Sayfa | Dosya | Not |
|---|-------|-------|-------|-----|
| 6  | ⬜ | Blog Listesi | `blog/index.html` | 5 yazı mevcut |
| 7  | ⬜ | Blog Yazısı 1 | `blog/sessiz-isgal-icerik-psikolojisi.html` | Yeni tasarıma taşınacak |
| 8  | ⬜ | Blog Yazısı 2 | `blog/algoritma-acigi-kucuk-markalar.html` | Yeni tasarıma taşınacak |
| 9  | ⬜ | Blog Yazısı 3 | `blog/drone-kobilar-icin-zorunlu.html` | Yeni tasarıma taşınacak |
| 10 | ⬜ | Blog Yazısı 4 | `blog/mersinden-kuresel-marka.html` | Yeni tasarıma taşınacak |
| 11 | ⬜ | Blog Yazısı 5 | `blog/yapay-zeka-muzik-produksiyonu.html` | Yeni tasarıma taşınacak |

---

## Faz 3 — Yasal & Destek

| # | Durum | Sayfa | Dosya | Not |
|---|-------|-------|-------|-----|
| 12 | ⬜ | Gizlilik Politikası | `legal/GP/index.html` | Yeni tasarıma taşınacak |
| 13 | ⬜ | Kullanım Koşulları | `legal/KK/index.html` | Yeni tasarıma taşınacak |
| 14 | ⬜ | Çerez Politikası | `legal/CP/index.html` | Yeni tasarıma taşınacak |
| 15 | ⬜ | SSS | `faq/index.html` | Yeni tasarıma taşınacak |

---

## Faz 4 — İş Geliştirme

| # | Durum | Sayfa | Dosya | Not |
|---|-------|-------|-------|-----|
| 16 | ⬜ | Yatırımcı | `investor/index.html` | Yeni tasarıma taşınacak |
| 17 | ⬜ | Sponsor | `sponsor/index.html` | Yeni tasarıma taşınacak |
| 18 | ⬜ | Fiyatlandırma | `pricing/index.html` | Yeni tasarıma taşınacak |

---

## Faz 5 — Temizlik

| # | Durum | İş | Not |
|---|-------|----|-----|
| 19 | ⬜ | `about/product/` klasörünü kaldır veya `products.html`'e yönlendir | Eski sayfa, artık `products.html` var |
| 20 | ⬜ | `froggpt/` — kalsın mı kaldırılsın mı karar ver | Bağımsız araç |
| 21 | ⬜ | `styles.css`, `main.js`, `chatbot.css`, `chatbot.js` eski dosyaları temizle | Artık `spion.css` + `spion-nav.js` kullanılıyor |
| 22 | ⬜ | `_tmp.html` sil | Geçici dosya |

---

## Tamamlanan Sayfalar ✅

| Sayfa | Dosya |
|-------|-------|
| ✅ Ana Sayfa | `index.html` |
| ✅ Hizmetler | `products.html` |
| ✅ İletişim | `contact/index.html` |
| ✅ Kariyer | `career/index.html` |
| ✅ Medya Store | `purplestore/index.html` |
| ✅ Global CSS | `spion.css` |
| ✅ Global JS | `spion-nav.js` |

---

## Notlar

- Her sayfa `spion.css` ve `spion-nav.js` kullanır
- Her sayfada breadcrumb navigasyon olacak
- Her sayfanın altında "Sonraki Adım" CTA bölümü olacak
- Tüm formlar `mailto:` protokolü ile çalışır (backend yok)
- Durum güncellemek için `⬜` → `🔄` (devam ediyor) → `✅` (tamamlandı)
