# Kampanya Banner Görsel Testi

## ✅ TAMAMLANAN ÖZELLİKLER

### 1. Veri Yapısı (data/campaign.json)
- ✅ `image.enabled` - Görseli aktif/pasif yapma
- ✅ `image.url` - Görsel URL'si
- ✅ `image.position` - Görsel konumu (left/right)
- ✅ `style.backgroundImage` - Arka plan görseli

### 2. Admin Panel (admin/dashboard.html + admin.js)
- ✅ Görsel aktif/pasif checkbox
- ✅ Görsel URL input alanı
- ✅ Görsel konum seçici (sağ/sol)
- ✅ Arka plan görseli input alanı
- ✅ Canlı önizleme (preview)
- ✅ Kaydetme fonksiyonu

### 3. Frontend (index.html)
- ✅ CSS stilleri (`.campaign-banner__image`)
- ✅ HTML elementi (`<img id="campaignImage">`)
- ✅ JavaScript yükleme kodu
- ✅ Görsel pozisyonlama (left/right)
- ✅ Arka plan görseli desteği
- ✅ Mobil responsive

## 🧪 TEST ADIMLARI

### Adım 1: Admin Panele Giriş
1. Tarayıcıda `http://localhost/spion-media-final/admin/index.html` açın
2. Şifre: `spion2025`
3. Sol menüden "Kampanya" seçin

### Adım 2: Görsel Ekleme
1. "Yan Görsel Ekle" checkbox'ını işaretleyin
2. Görsel URL alanına test görseli girin:
   ```
   https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400
   ```
   **📐 Önerilen Boyut: 400x400px (kare) • Max 500KB**
3. Görsel konumunu seçin (Sağda/Solda)
4. Önizlemede görselin konumunu kontrol edin
5. "Kaydet" butonuna tıklayın

### Adım 3: Ön İzleme Kontrolü
- Admin paneldeki önizleme alanında görsel görünmeli
- Görsel 120x120px boyutunda, yuvarlatılmış köşeli olmalı

### Adım 4: Ana Sayfa Kontrolü
1. Yeni sekmede `http://localhost/spion-media-final/index.html` açın
2. Sayfayı yenileyin (F5)
3. Slider'ın hemen altında kampanya banner'ı görünmeli
4. Banner içinde eklediğiniz görsel görünmeli

### Adım 5: Arka Plan Görseli Testi
1. Admin panele dönün
2. "Arka Plan Görseli" alanına URL girin:
   ```
   https://images.unsplash.com/photo-1557683316-973673baf926?w=1200
   ```
   **📐 Önerilen Boyut: 1920x400px (geniş) • Max 800KB**
3. Önizlemede arka plan görselini kontrol edin
4. Kaydet ve ana sayfayı yenileyin
5. Banner arka planında görsel + gradient karışımı görünmeli

## 📱 MOBİL TEST
1. Tarayıcı geliştirici araçlarını açın (F12)
2. Mobil görünüme geçin (Ctrl+Shift+M)
3. Görsel tam genişlikte, max 200px yükseklikte görünmeli

## 🎨 GÖRSEL BOYUT REHBERİ

### Yan Görsel (Kampanya İkonu)
- **Önerilen Boyut**: 400x400px (kare format)
- **Minimum**: 200x200px
- **Maksimum Dosya Boyutu**: 500KB
- **Format**: JPG, PNG, WebP
- **Görünüm**: Desktop'ta 200x200px, mobilde tam genişlik (max 200px yükseklik)
- **Kullanım**: Ürün görseli, logo, ikon, yüz fotoğrafı

### Arka Plan Görseli
- **Önerilen Boyut**: 1920x400px (geniş format)
- **Minimum**: 1200x300px
- **Maksimum Dosya Boyutu**: 800KB
- **Format**: JPG, PNG, WebP
- **Görünüm**: Gradient üzerine overlay, hafif şeffaf
- **Kullanım**: Doku, pattern, atmosfer görseli

### Optimizasyon İpuçları
1. **Sıkıştırma**: TinyPNG veya Squoosh kullanın
2. **Format**: WebP en iyi performansı verir
3. **Boyut**: Önerilen boyutlara yakın tutun (çok büyük görseller yavaşlatır)
4. **Kalite**: 80-85% JPEG kalitesi yeterlidir
5. **CDN**: Unsplash veya Cloudinary gibi CDN'ler hızlıdır

## 🎨 ÖRNEK GÖRSEL URL'LERİ

### Yan Görsel İçin (Küçük)
```
https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400
https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400
https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400
```

### Arka Plan İçin (Büyük)
```
https://images.unsplash.com/photo-1557683316-973673baf926?w=1200
https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200
https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=1200
```

## 🔧 SORUN GİDERME

### Görsel Görünmüyor
1. Tarayıcı konsolunu açın (F12)
2. Hata mesajı var mı kontrol edin
3. Görsel URL'sinin geçerli olduğundan emin olun
4. localStorage'ı temizleyin: `localStorage.removeItem('spion_campaign')`
5. Sayfayı yenileyin

### Görsel Pozisyonu Yanlış
1. Admin panelde pozisyonu değiştirin
2. Kaydedin
3. Ana sayfayı yenileyin (Ctrl+F5 - hard refresh)

### Arka Plan Görseli Görünmüyor
1. URL'nin doğru olduğundan emin olun
2. Gradient opacity ayarını kontrol edin (CSS'de `::before` opacity: 0.9)
3. Daha düşük opacity için CSS'i düzenleyin

## ✨ ÖZELLİKLER

### Görsel Stilleri
- Boyut: 200x200px (desktop), 100% genişlik (mobil)
- Border radius: 8px
- Box shadow: 0 8px 24px rgba(0,0,0,0.3)
- Border: 3px solid rgba(10,10,10,0.2)
- Object-fit: cover

### Pozisyonlama
- **Sağda**: `.campaign-banner__actions` içinde, butondan önce
- **Solda**: `.campaign-banner__content` içinde, en başta

### Arka Plan
- Gradient üzerine eklenir
- Background-size: cover
- Background-position: center
- Opacity kontrol: `::before` pseudo-element ile

## 📝 NOTLAR

1. Görsel URL'si mutlaka HTTPS olmalı
2. CORS hatası almamak için Unsplash, kendi sunucunuz veya CDN kullanın
3. Görsel boyutu optimize edilmeli (max 500KB önerilir)
4. Alt text otomatik olarak kampanya başlığından alınır
5. Görsel lazy loading desteklenmez (banner hemen yüklenir)

## 🎯 SONUÇ

Kampanya banner görsel sistemi **tamamen çalışır durumda**. Admin panelden kolayca görsel ekleyip, pozisyonunu değiştirebilir ve arka plan görseli ekleyebilirsiniz.

Herhangi bir sorun yaşarsanız yukarıdaki test adımlarını takip edin.
