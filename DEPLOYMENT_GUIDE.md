# 🚀 SPION MEDIA - YAYINLAMA REHBERİ

## ⚠️ YAYINLAMADAN ÖNCE MUTLAKA YAPIN!

### 1. Admin Şifresini Değiştirin
```
Dosya: admin/index.html
Satır: 73

ÖNCESİ:
const ADMIN_PASSWORD = 'spion2025';

SONRASI:
const ADMIN_PASSWORD = 'YeniGüçlüŞifreniz123!@#';
```

**Güçlü Şifre Önerileri**:
- Minimum 12 karakter
- Büyük + küçük harf + rakam + özel karakter
- Tahmin edilemez olmalı
- Örnek: `Sp!0nM3d!@2025#Adm`

---

### 2. Domain Adreslerini Güncelleyin

**Değiştirilmesi Gereken Dosyalar**:

1. **sitemap.xml** - Tüm `https://yoursite.com` adreslerini kendi domain'inizle değiştirin
2. **robots.txt** - `Sitemap: https://yoursite.com/sitemap.xml` satırını güncelleyin
3. **.htaccess** - Hotlink protection bölümünde domain'i güncelleyin (satır 103)

**Toplu Değiştirme** (VS Code veya text editor ile):
```
Bul: https://yoursite.com
Değiştir: https://www.spionmedia.com
```

---

### 3. Google Analytics Ekleyin (Opsiyonel)

Tüm HTML dosyalarının `</head>` etiketinden önce ekleyin:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Analytics ID Alma**:
1. https://analytics.google.com adresine gidin
2. Hesap oluşturun
3. Property ekleyin
4. Tracking ID'yi kopyalayın (G-XXXXXXXXXX)

---

## 📤 DOSYA YÜKLEME

### Yöntem 1: FTP ile Yükleme

**Gerekli Bilgiler**:
- FTP Host: ftp.yoursite.com
- Kullanıcı Adı: (hosting'den alın)
- Şifre: (hosting'den alın)
- Port: 21 (veya 22 SFTP için)

**Önerilen FTP Programları**:
- FileZilla (Ücretsiz)
- WinSCP (Ücretsiz)
- Cyberduck (Ücretsiz)

**Yükleme Adımları**:
1. FTP programını açın
2. Bağlantı bilgilerini girin
3. Sol taraf: Bilgisayarınızdaki dosyalar
4. Sağ taraf: Sunucudaki dosyalar
5. Tüm dosyaları `public_html` veya `www` klasörüne yükleyin
6. Klasör yapısını koruyun!

**Yüklenecek Dosyalar**:
```
✅ .htaccess
✅ robots.txt
✅ sitemap.xml
✅ 404.html
✅ 500.html
✅ index.html
✅ products.html
✅ portfolio.html
✅ /admin/ klasörü
✅ /blog/ klasörü
✅ /images/ klasörü
✅ /data/ klasörü
✅ /about/ klasörü
✅ /contact/ klasörü
✅ /legal/ klasörü
✅ /purplestore/ klasörü
✅ /froggpt/ klasörü
✅ /references/ klasörü
✅ spion.css
✅ spion-nav.js
✅ translate.css
✅ translate.js
```

---

### Yöntem 2: cPanel File Manager

1. cPanel'e giriş yapın
2. "File Manager" açın
3. `public_html` klasörüne gidin
4. "Upload" butonuna tıklayın
5. Tüm dosyaları seçip yükleyin
6. Zip dosyası yükleyip sunucuda açabilirsiniz (daha hızlı)

---

## 🔒 SSL SERTİFİKASI KURULUMU

### Let's Encrypt (Ücretsiz)

**cPanel ile**:
1. cPanel → SSL/TLS Status
2. Domain'i seçin
3. "Run AutoSSL" tıklayın
4. 5-10 dakika bekleyin

**Manuel Kurulum**:
```bash
# Certbot ile
sudo certbot --apache -d yoursite.com -d www.yoursite.com
```

### SSL Sonrası Kontrol

1. https://yoursite.com adresine gidin
2. Tarayıcıda kilit simgesi görünmeli
3. `.htaccess` HTTP'den HTTPS'e yönlendirme yapıyor

---

## 🧪 YAYINLAMA SONRASI TEST

### 1. Sayfa Testleri

**Ana Sayfa**:
- [ ] https://yoursite.com yükleniyor mu?
- [ ] Slider çalışıyor mu?
- [ ] Kampanya banner görünüyor mu?
- [ ] Animasyonlar çalışıyor mu?
- [ ] Floating butonlar (WhatsApp, Telegram) görünüyor mu?

**Hizmetler**:
- [ ] https://yoursite.com/products.html açılıyor mu?
- [ ] Arka plan görselleri yükleniyor mu?

**Blog**:
- [ ] https://yoursite.com/blog/index.html açılıyor mu?
- [ ] Blog kartları görünüyor mu?
- [ ] Blog detay sayfaları açılıyor mu?

**Admin Panel**:
- [ ] https://yoursite.com/admin/ açılıyor mu?
- [ ] Şifre ile giriş yapılıyor mu?
- [ ] Dashboard yükleniyor mu?
- [ ] Kampanya düzenleme çalışıyor mu?

---

### 2. Mobil Test

**Tarayıcı Geliştirici Araçları**:
1. F12 tuşuna basın
2. Ctrl+Shift+M (mobil görünüm)
3. Farklı cihaz boyutlarını test edin

**Gerçek Cihazlarda**:
- [ ] iPhone'da test edin
- [ ] Android'de test edin
- [ ] Tablet'te test edin

---

### 3. Performans Testi

**Google PageSpeed Insights**:
1. https://pagespeed.web.dev/ adresine gidin
2. Site URL'nizi girin
3. Skorunuzu kontrol edin (70+ iyi)

**GTmetrix**:
1. https://gtmetrix.com/ adresine gidin
2. Site URL'nizi girin
3. Yükleme süresini kontrol edin

---

### 4. SEO Testi

**Google Search Console**:
1. https://search.google.com/search-console adresine gidin
2. Property ekleyin
3. Sitemap gönderin: https://yoursite.com/sitemap.xml
4. URL inspection ile sayfaları test edin

**robots.txt Testi**:
- https://yoursite.com/robots.txt açılıyor mu?
- Admin klasörü engellenmiş mi?

---

### 5. Güvenlik Testi

**SSL Test**:
- https://www.ssllabs.com/ssltest/ adresine gidin
- Domain'inizi test edin
- A veya A+ almalısınız

**Security Headers**:
- https://securityheaders.com/ adresine gidin
- Domain'inizi test edin
- En az B notu almalısınız

---

## 🔧 SORUN GİDERME

### 1. .htaccess Çalışmıyor

**Sorun**: 500 Internal Server Error

**Çözüm**:
1. .htaccess dosyasını geçici olarak silin
2. Site açılıyor mu kontrol edin
3. .htaccess'i satır satır ekleyin
4. Hangi satırda hata verdiğini bulun

**Alternatif**: Hosting'iniz Apache değil Nginx kullanıyorsa .htaccess çalışmaz. Hosting desteğine başvurun.

---

### 2. Görseller Yüklenmiyor

**Sorun**: Görseller 404 hatası veriyor

**Çözüm**:
1. Görsel yollarını kontrol edin (büyük/küçük harf duyarlı)
2. Dosya izinlerini kontrol edin (644 olmalı)
3. Klasör izinlerini kontrol edin (755 olmalı)

**Dosya İzinleri Ayarlama** (cPanel):
```
Dosyalar: 644
Klasörler: 755
```

---

### 3. Admin Panele Girilemiy or

**Sorun**: Şifre kabul edilmiyor

**Çözüm**:
1. Tarayıcı cache'ini temizleyin
2. Farklı tarayıcıda deneyin
3. Şifreyi kontrol edin (büyük/küçük harf duyarlı)
4. `admin/index.html` dosyasını kontrol edin

---

### 4. Google Translate Çalışmıyor

**Sorun**: Dil değiştirme çalışmıyor

**Çözüm**:
1. İnternet bağlantısını kontrol edin
2. Tarayıcı konsolunu açın (F12)
3. Hata mesajı var mı kontrol edin
4. Google Translate API'si erişilebilir mi kontrol edin

---

### 5. Kampanya Banner Görünmüyor

**Sorun**: Ana sayfada kampanya banner yok

**Çözüm**:
1. Admin panelden kampanya aktif mi kontrol edin
2. localStorage'ı temizleyin: `localStorage.clear()`
3. Sayfayı yenileyin (Ctrl+F5)
4. Tarayıcı konsolunda hata var mı kontrol edin

---

## 📊 YAYINLAMA SONRASI YAPILACAKLAR

### İlk Gün:
- [ ] Tüm sayfaları test edin
- [ ] Mobil görünümü kontrol edin
- [ ] Formları test edin
- [ ] Admin paneli test edin
- [ ] Google Analytics çalışıyor mu kontrol edin

### İlk Hafta:
- [ ] Google Search Console'a sitemap gönderin
- [ ] Bing Webmaster Tools'a kayıt olun
- [ ] Sosyal medyada paylaşın
- [ ] İlk ziyaretçi verilerini inceleyin

### İlk Ay:
- [ ] SEO performansını kontrol edin
- [ ] Sayfa hızını optimize edin
- [ ] Kullanıcı geri bildirimlerini toplayın
- [ ] Gerekli düzeltmeleri yapın

---

## 🔄 DÜZENLI BAKIM

### Haftalık:
- Yedekleme yapın (dosyalar + veritabanı)
- Ziyaretçi istatistiklerini kontrol edin
- Hata loglarını kontrol edin

### Aylık:
- Güvenlik güncellemelerini kontrol edin
- Performans testleri yapın
- İçerikleri güncelleyin
- Ölü linkleri kontrol edin

### 3 Aylık:
- Tam sistem revizyonu
- SEO analizi
- Rakip analizi
- Kullanıcı deneyimi iyileştirmeleri

---

## 📞 DESTEK

### Hosting Sorunları:
- Hosting firmanızın destek ekibiyle iletişime geçin
- cPanel erişim bilgilerinizi hazır bulundurun

### Teknik Sorunlar:
- Tarayıcı konsolunu kontrol edin (F12)
- Hata mesajlarını kaydedin
- Ekran görüntüsü alın

### Acil Durum:
- Site tamamen çöktüyse: Yedekten geri yükleyin
- Hack saldırısı: Hemen şifreleri değiştirin ve hosting desteğine bildirin

---

## ✅ YAYINLAMA KONTROL LİSTESİ

### Yayınlamadan Önce:
- [ ] Admin şifresi değiştirildi
- [ ] Domain adresleri güncellendi
- [ ] SSL sertifikası kuruldu
- [ ] Google Analytics eklendi (opsiyonel)
- [ ] Tüm dosyalar yüklendi
- [ ] .htaccess çalışıyor
- [ ] robots.txt erişilebilir
- [ ] sitemap.xml erişilebilir

### Yayınladıktan Sonra:
- [ ] Ana sayfa açılıyor
- [ ] Tüm sayfalar test edildi
- [ ] Mobil görünüm test edildi
- [ ] Admin panel çalışıyor
- [ ] Formlar çalışıyor
- [ ] SSL aktif (https://)
- [ ] Google Search Console'a eklendi
- [ ] İlk yedekleme yapıldı

---

**🎉 Tebrikler! Siteniz yayında!**

Herhangi bir sorun yaşarsanız `PRODUCTION_CHECKLIST.md` dosyasına bakın.

