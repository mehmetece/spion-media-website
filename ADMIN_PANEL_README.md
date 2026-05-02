# 🎛️ Spion Media - Admin Panel

## ✅ Kurulum Tamamlandı!

### 📦 Oluşturulan Dosyalar:

#### Admin Panel:
- `admin/index.html` - Giriş sayfası (şifre korumalı)
- `admin/dashboard.html` - Ana kontrol paneli
- `admin/admin.css` - Admin panel stilleri
- `admin/admin.js` - Admin panel JavaScript

#### Veri Dosyaları:
- `data/settings.json` - Genel ayarlar (site adı, iletişim, sosyal medya)
- `data/slider.json` - Ana sayfa slider içerikleri
- `data/blog.json` - Blog yazıları
- `data/products.json` - MEDYA Store ürünleri

---

## 🔐 GİRİŞ BİLGİLERİ

**URL:** `yoursite.com/admin/`

**Kullanıcı Adı:** `admin`  
**Şifre:** `spion2025`

⚠️ **ÖNEMLİ:** Şifreyi mutlaka değiştirin!  
Şifreyi değiştirmek için: `admin/index.html` dosyasında `ADMIN_PASSWORD` değişkenini düzenleyin.

---

## 🎯 ÖZELLİKLER

### ✅ Mevcut Özellikler:

1. **Dashboard**
   - Genel istatistikler (Slider, Blog, Ürün sayıları)
   - Hızlı erişim butonları
   - Hoş geldin mesajı

2. **Slider Yönetimi**
   - Tüm slider'ları listele
   - Slider düzenle/sil
   - Yeni slider ekle (yakında)

3. **Blog Yönetimi**
   - Tüm blog yazılarını listele
   - Blog düzenle/sil
   - Yeni blog ekle (yakında)

4. **Ürün Yönetimi**
   - Tüm ürünleri listele
   - Ürün düzenle/sil
   - Yeni ürün ekle (yakında)

5. **Kampanya Yönetimi** ⭐ YENİ
   - Kampanya banner aktif/pasif
   - İkon, başlık, açıklama düzenleme
   - CTA butonu özelleştirme
   - **Yan görsel ekleme** (400x400px önerilir)
   - **Görsel konumu** (sağda/solda)
   - **Arka plan görseli** (1920x400px önerilir)
   - Geri sayım özelliği
   - Gradient renk özelleştirme
   - **Canlı önizleme**

6. **Genel Ayarlar**
   - Site adı ve sloganı
   - İletişim bilgileri
   - Sosyal medya linkleri
   - SEO ayarları

7. **Güvenlik**
   - Şifre koruması
   - Session yönetimi (1 saat)
   - Otomatik çıkış

---

## 📋 YÖNETİLEBİLEN İÇERİKLER

### 1. Slider (Ana Sayfa)
```json
{
  "id": 1,
  "image": "images/slider/1.jpg",
  "label": "İSTANBUL & Mersin",
  "title": "TRENDİ BİZ YAZARIZ",
  "description": "Açıklama metni...",
  "buttons": [...],
  "active": true
}
```

### 2. Blog Yazıları
```json
{
  "id": 1,
  "slug": "blog-url",
  "title": "Blog Başlığı",
  "category": "Kategori",
  "excerpt": "Özet...",
  "image": "images/blog.jpg",
  "readTime": "5 dk okuma",
  "date": "2025-01-15",
  "active": true
}
```

### 3. Ürünler (MEDYA Store)
```json
{
  "id": 1,
  "category": "kamera",
  "name": "Ürün Adı",
  "description": "Açıklama",
  "price": "1.999",
  "image": "https://...",
  "shopierLink": "https://...",
  "isNew": true,
  "active": true
}
```

### 4. Genel Ayarlar
```json
{
  "siteName": "Spion Media",
  "siteTagline": "Trendi Biz Yazarız",
  "contact": {
    "email": "spionmediaglobal@gmail.com",
    "phone": "+905525515184"
  },
  "social": {
    "instagram": "https://...",
    "twitter": "https://...",
    ...
  }
}
```

### 5. Kampanya Banner ⭐ YENİ
```json
{
  "active": true,
  "closeable": true,
  "icon": "🔥",
  "title": "Kampanya Başlığı",
  "description": "Kampanya açıklaması",
  "buttonText": "Detayları Gör",
  "buttonLink": "products.html#ai",
  "image": {
    "enabled": true,
    "url": "https://...",
    "position": "right"
  },
  "countdown": {
    "enabled": false,
    "endDate": "2025-02-01T23:59:59"
  },
  "style": {
    "gradient": "linear-gradient(135deg, #c8a96e 0%, #8a7248 100%)",
    "textColor": "#0a0a0a",
    "backgroundImage": "https://..."
  }
}
```

**Görsel Boyut Rehberi:**
- **Yan Görsel**: 400x400px (kare) • Max 500KB
  - Desktop'ta 200x200px görünür
  - Mobilde tam genişlik (max 200px yükseklik)
- **Arka Plan**: 1920x400px (geniş) • Max 800KB
  - Gradient üzerine overlay olarak eklenir

---

## 🚀 KULLANIM

### Giriş Yapma:
1. `yoursite.com/admin/` adresine gidin
2. Şifrenizi girin: `spion2025`
3. "Giriş Yap" butonuna tıklayın

### İçerik Düzenleme:
1. Sol menüden düzenlemek istediğiniz bölümü seçin
2. Listeden düzenlemek istediğiniz öğeyi bulun
3. "Düzenle" butonuna tıklayın
4. Değişiklikleri yapın ve kaydedin

### İçerik Silme:
1. Silmek istediğiniz öğenin yanındaki "Sil" butonuna tıklayın
2. Onay mesajını kabul edin
3. İçerik silinecek

### Ayarları Güncelleme:
1. Sol menüden "Ayarlar" seçin
2. Formdaki alanları düzenleyin
3. "Kaydet" butonuna tıklayın

---

## 🔧 GELİŞTİRME NOTLARI

### Şu An Çalışan:
✅ Giriş sistemi (şifre koruması)
✅ Dashboard istatistikleri
✅ Veri listeleme (Slider, Blog, Ürünler)
✅ Veri silme
✅ Ayarlar düzenleme
✅ Toast bildirimleri
✅ Responsive tasarım

### Yakında Eklenecek:
🔜 Yeni içerik ekleme formları
🔜 İçerik düzenleme formları
🔜 Görsel yükleme sistemi
🔜 WYSIWYG editör (blog için)
🔜 Drag & drop sıralama
🔜 Önizleme özelliği
🔜 Backend API entegrasyonu

---

## 🎨 TASARIM

- **Renk Paleti:** Spion Media brand renkleri (Siyah + Altın)
- **Font:** Segoe UI (sistem fontu)
- **Stil:** Modern, minimal, profesyonel
- **Responsive:** Mobil, tablet, desktop uyumlu

---

## 🔒 GÜVENLİK

### Mevcut Güvenlik:
- ✅ Şifre koruması
- ✅ Session yönetimi (1 saat timeout)
- ✅ Otomatik çıkış
- ✅ Client-side validation

### Önerilen İyileştirmeler (Production için):
- 🔐 Backend API ile şifre kontrolü
- 🔐 JWT token authentication
- 🔐 HTTPS zorunluluğu
- 🔐 Rate limiting
- 🔐 CSRF protection
- 🔐 XSS protection
- 🔐 SQL injection koruması

---

## 📱 RESPONSIVE TASARIM

- **Desktop:** Tam özellikli sidebar + geniş içerik alanı
- **Tablet:** Daraltılmış sidebar
- **Mobil:** Hamburger menü + tam ekran içerik

---

## 🐛 SORUN GİDERME

### Giriş yapamıyorum:
- Şifrenin doğru olduğundan emin olun: `spion2025`
- Tarayıcı cache'ini temizleyin
- Session storage'ı kontrol edin

### Veriler yüklenmiyor:
- JSON dosyalarının `data/` klasöründe olduğundan emin olun
- Tarayıcı console'unda hata var mı kontrol edin
- JSON dosyalarının geçerli format olduğundan emin olun

### Değişiklikler kaydedilmiyor:
- Şu an veriler localStorage'a kaydediliyor (geçici)
- Production'da backend API kullanılmalı
- JSON dosyalarını manuel güncelleyebilirsiniz

---

## 📊 VERİ AKIŞI

```
Admin Panel → JSON Dosyaları → Website
     ↓              ↓              ↓
  Düzenle       Kaydet        Göster
```

**Şu an:** JSON dosyaları manuel güncelleniyor  
**Gelecek:** Backend API ile otomatik senkronizasyon

---

## 🎯 SONRAKI ADIMLAR

1. **Backend API Geliştir**
   - Node.js + Express veya PHP
   - RESTful API endpoints
   - Veritabanı entegrasyonu (MySQL/MongoDB)

2. **Dosya Yükleme Sistemi**
   - Görsel yükleme
   - Dosya boyutu kontrolü
   - Otomatik resize/optimize

3. **WYSIWYG Editör**
   - TinyMCE veya Quill.js
   - Markdown desteği
   - Kod highlighting

4. **Gelişmiş Özellikler**
   - Drag & drop sıralama
   - Toplu işlemler
   - Arama ve filtreleme
   - Export/Import

---

## 💡 İPUÇLARI

- **Düzenli Yedekleme:** JSON dosyalarını düzenli yedekleyin
- **Şifre Güvenliği:** Güçlü bir şifre kullanın
- **Test Ortamı:** Değişiklikleri önce test ortamında deneyin
- **Tarayıcı Uyumluluğu:** Modern tarayıcılar kullanın (Chrome, Firefox, Safari, Edge)

---

## 📞 DESTEK

Sorun yaşarsanız veya özellik talepleriniz varsa:
- 📧 Email: spionmediaglobal@gmail.com
- 💬 Telegram: @spionmedia

---

**🎉 Admin Panel Hazır!**

Artık sitenizi kod yazmadan yönetebilirsiniz!
