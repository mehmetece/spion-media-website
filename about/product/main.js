// Hidebar SECTION
document.querySelector('.respo').addEventListener('click', function () {
  const hidebarList = document.querySelector('.hidebar-list');
  hidebarList.style.display = hidebarList.style.display === 'block' ? 'none' : 'block';
});
// Hidebar SECTION

// Sidebar SECTION
document.addEventListener('DOMContentLoaded', function () {
  const hideBtn   = document.querySelector('.hide-btn');
  const sidebarList = document.querySelector('.sidebar-list');
  const openIcon  = document.querySelector('.open-icon');
  const closeIcon = document.querySelector('.close-icon');

  if (!hideBtn || !sidebarList || !openIcon || !closeIcon) return;

  hideBtn.addEventListener('click', function () {
    if (sidebarList.style.display === 'block') {
      sidebarList.style.display = 'none';
      openIcon.style.display  = 'inline';
      closeIcon.style.display = 'none';
    } else {
      sidebarList.style.display = 'block';
      openIcon.style.display  = 'none';
      closeIcon.style.display = 'inline';
    }
  });
});
// Sidebar SECTION

// Music Button
let isPlaying = false;
const audio = document.getElementById('background-music');
const icon  = document.querySelector('.music-button i');

function toggleMusic() {
  if (isPlaying) {
    audio.pause();
    icon.classList.replace('fa-pause', 'fa-play');
  } else {
    audio.play();
    icon.classList.replace('fa-play', 'fa-pause');
  }
  isPlaying = !isPlaying;
}
// Music Button

// ── DETAY MODAL ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('[data-modal-overlay]');
  if (!modal) return;

  const modalTitle   = modal.querySelector('[data-modal-title]');
  const modalKicker  = modal.querySelector('[data-modal-kicker]');
  const modalImage   = modal.querySelector('[data-modal-image]');
  const modalTagline = modal.querySelector('[data-modal-tagline]');
  const modalFor     = modal.querySelector('[data-modal-for]');
  const modalSteps   = modal.querySelector('[data-modal-steps]');
  const modalWhy     = modal.querySelector('[data-modal-why]');
  const closeBtn     = modal.querySelector('[data-modal-close]');

  // ── HİZMET VERİ TABANI ────────────────────────────────────────────────────
  const SERVICES = [
    {
      match: ['video prodüksiyon'],
      tagline: 'Kamera açar, hikâye başlar. Brief\'ten yayına tek çatı.',
      forWhom: [
        'Otel, beach club veya turizm işletmesi olarak tanıtım filmi çektirmek isteyenler',
        'Lojistik, gayrimenkul veya ihracat firması olarak kurumsal video ihtiyacı duyanlar',
        'Sosyal medya için düzenli, yüksek kaliteli video içerik üretmek isteyen markalar'
      ],
      steps: [
        'Brief & Keşif — Hedef, ton, platform ve bütçe netleştirilir',
        'Konsept & Senaryo — Hikâye kurgulanır, shot list hazırlanır',
        'Çekim — Saha ekibi sahaya iner; ışık, ses, kamera kurulur',
        'Kurgu & Post — Renk düzeltme, ses miksajı, motion grafik eklenir',
        'Onay & Teslimat — Yayın formatlarında teslim edilir'
      ],
      why: 'Ajanslar konsept satar, biz sonuç teslim ederiz. Çekim ekibimiz aynı zamanda kurgu ekibimizdir — araya giren kimse yok, mesaj kaybolmuyor. Otel lobisinden liman sahasına, her lokasyonda sahaya ineriz.'
    },
    {
      match: ['müzik prodüksiyon'],
      tagline: 'Müziğini değil hikâyeni dinlesinler.',
      forWhom: [
        'Reklam filmi veya kurumsal video için özgün müzik/jingle ihtiyacı olan markalar',
        'Sosyal medya içeriklerine özgün ses kimliği kazandırmak isteyen işletmeler',
        'Sanatçı olarak profesyonel prodüksiyon, mix-mastering veya dağıtım arayan bireyler'
      ],
      steps: [
        'Brief & Referans — Ton, tempo, kullanım amacı ve hedef kitle belirlenir',
        'Demo & Konsept — İlk taslak üretilir, yön onaylanır',
        'Prodüksiyon — Beste, aranje, kayıt ve enstrümantasyon tamamlanır',
        'Mix & Mastering — Ses dengesi ve yayın standartları sağlanır',
        'Teslimat — Tüm platformlara uygun formatlarda teslim edilir'
      ],
      why: 'Jingle fabrikası değiliz. Her ses, markanın kimliğine özel tasarlanır. Aynı çatı altında beste, kayıt ve dağıtım — dışarıya taşeron yok, kalite kontrolü bizde.'
    },
    {
      match: ['oyunlaştır'],
      tagline: 'İzleyici değil, oyuncu yarat. Fark ettirmeden etkile.',
      forWhom: [
        'Genç kitleye ulaşmak isteyen ama klasik reklamın işe yaramadığını gören markalar',
        'Sosyal medyada viral büyüme ve yüksek etkileşim hedefleyen işletmeler',
        'Müşteri sadakati ve tekrar satın alma oranını artırmak isteyen KOBİ\'ler'
      ],
      steps: [
        'Hedef & Kitle Analizi — Kim, nerede, ne zaman ve neden etkileşime girer?',
        'Oyun Mekaniği Tasarımı — Challenge, gizem, ödül veya hikâye akışı kurgulanır',
        'İçerik Üretimi — Video, grafik ve metin entegre şekilde üretilir',
        'Yayın & Yönetim — Zamanlama, platform ve etkileşim takibi yapılır',
        'Analiz & Optimizasyon — Veriye göre içerik güncellenir'
      ],
      why: 'Rakipler reklam yapar, biz deneyim tasarlarız. Hedef kitle ürünün pazarlandığını fark etmez — oyunun içinde hisseder. Bu fark, dönüşüm rakamlarına doğrudan yansır.'
    },
    {
      match: ['yapay zek', 'ai studio'],
      tagline: 'Yapay zekâyı araç değil, silah olarak kullanıyoruz.',
      forWhom: [
        'İçerik üretim maliyetini düşürmek ama kaliteyi korumak isteyen markalar',
        'Ses klonlama, görsel dönüştürme veya AI destekli video üretimi arayan işletmeler',
        'Otomasyon ve AI entegrasyonuyla iş süreçlerini hızlandırmak isteyen firmalar'
      ],
      steps: [
        'İhtiyaç Analizi — Hangi süreç otomatize edilecek veya AI ile güçlendirilecek?',
        'Araç & Model Seçimi — Göreve özel AI modeli ve pipeline belirlenir',
        'Üretim & Entegrasyon — Ses klonlama, görsel üretim veya içerik otomasyonu uygulanır',
        'Kalite Kontrolü — Çıktılar insan gözüyle denetlenir, ayarlanır',
        'Teslimat & Eğitim — Kullanıma hazır çıktı ve gerekirse kullanım rehberi teslim edilir'
      ],
      why: 'Rakipler hâlâ prompt yazarken biz çoktan teslim etmiş oluruz. AI\'ı dekorasyon için değil, gerçek iş yükünü azaltmak için kullanıyoruz. Ses, görüntü, metin — üçünü de aynı çatı altında üretiyoruz.'
    },
    {
      match: ['fenomen', 'algoritma', 'sıradaki'],
      tagline: 'Algoritmanın dengesini biz belirleriz. Kişiliğini önce çıkaralım.',
      forWhom: [
        'Sosyal medyada büyümek isteyen ama nereden başlayacağını bilmeyen bireyler',
        'Marka yüzü veya içerik üreticisi olarak konumlanmak isteyen girişimciler',
        'Mevcut takipçi kitlesini gelire dönüştürmek isteyen içerik üreticileri'
      ],
      steps: [
        'Karakter & Niş Analizi — Güçlü yönler, hedef kitle ve platform belirlenir',
        'İçerik Stratejisi — Format, ton, sıklık ve hook yapısı tasarlanır',
        'İçerik Üretimi — Video, reels, hikâye ve metin içerikleri üretilir',
        'Algoritma Optimizasyonu — Zamanlama, hashtag ve etkileşim stratejisi uygulanır',
        'Büyüme Takibi — Veriye göre strateji güncellenir, büyüme ivmesi korunur'
      ],
      why: 'Takipçi satmıyoruz, kitle inşa ediyoruz. Organik büyüme, doğru içerik ve algoritma bilgisiyle gerçek bir topluluk kuruyoruz. Rakamlar yükselirken müşteri bunun neden olduğunu anlamaya çalışır — biz zaten bir sonraki hamleyi planlamaktayız.'
    },
    {
      match: ['3d', 'animasyon'],
      tagline: 'Gerçek olmayan şeyleri gerçekten hissettiriyoruz.',
      forWhom: [
        'Ürün veya tesis tanıtımını 3D görsellerle güçlendirmek isteyen markalar',
        'Reklam filmlerine animasyon sahnesi veya motion grafik eklemek isteyen işletmeler',
        'Eğitim, sunum veya kurumsal içerik için animasyon ihtiyacı duyan firmalar'
      ],
      steps: [
        'Brief & Storyboard — Sahne akışı, stil ve teknik gereksinimler belirlenir',
        '3D Modelleme — Ürün, mekân veya karakter modelleri oluşturulur',
        'Rig & Animasyon — Hareket, fizik ve sahne kurgusu tamamlanır',
        'Render & Compositing — Işık, gölge ve efektler eklenir',
        'Teslimat — Yayın formatlarında teslim edilir'
      ],
      why: 'Animasyon herkes sever ama herkes iyi animasyon yapamaz. Teknik kalite ile anlatı gücünü birleştiriyoruz — izleyici sahneyi izlerken markanın mesajını içselleştiriyor.'
    },
    {
      match: ['marka mimar'],
      tagline: 'Marka inşa etmek, logo çizmekten çok daha fazlasıdır.',
      forWhom: [
        'Sıfırdan marka kimliği oluşturmak isteyen yeni girişimler ve KOBİ\'ler',
        'Mevcut markasını yenilemek veya yeniden konumlandırmak isteyen işletmeler',
        'Rakiplerinden görsel ve söylemsel olarak ayrışmak isteyen firmalar'
      ],
      steps: [
        'Keşif & Rekabet Analizi — Sektör, rakipler ve hedef kitle haritalanır',
        'Marka Stratejisi — Konum, ses tonu, değer önerisi ve mesaj mimarisi kurgulanır',
        'Görsel Kimlik — Logo, renk paleti, tipografi ve tasarım sistemi oluşturulur',
        'İçerik & Söylem — Marka dili, slogan ve iletişim şablonları yazılır',
        'Uygulama & Rehber — Marka kılavuzu teslim edilir, ekip eğitimi yapılır'
      ],
      why: 'Logo tasarımcısı değiliz, marka mimarıyız. Görsel kimliği stratejiyle, stratejiyi içerikle, içeriği sonuçla bağlıyoruz. Rakipler logo alır, müşterilerimiz sistem kazanır.'
    },
    {
      match: ['drone'],
      tagline: 'Yeryüzünden görünmeyeni yukarıdan gösteriyoruz.',
      forWhom: [
        'Otel, resort veya beach club olarak mekânını havadan tanıtmak isteyen işletmeler',
        'Lojistik tesis, tarım arazisi veya gayrimenkul projesini görselleştirmek isteyen firmalar',
        'Etkinlik veya kurumsal organizasyonunu sinematik drone görüntüsüyle belgelemek isteyenler'
      ],
      steps: [
        'Lokasyon Keşfi — Uçuş izinleri, hava koşulları ve çekim noktaları belirlenir',
        'Çekim Planı — Shot list, altın saat zamanlaması ve hareket rotaları kurgulanır',
        'Saha Çekimi — Drone ve yer ekibi koordineli çalışır',
        'Kurgu & Renk — Sinematik kurgu, renk düzeltme ve müzik eklenir',
        'Teslimat — Sosyal medya ve yayın formatlarında teslim edilir'
      ],
      why: 'Drone uçurmak kolay, iyi drone görüntüsü çekmek zor. Teknik yetkinliği sinematik bakış açısıyla birleştiriyoruz. Her çekim bir hikâye anlatır — sadece yukarıdan bir bakış değil.'
    },
    {
      match: ['dijital', 'hap', 'web'],
      tagline: 'Dijital yükünü bırak, işine bak.',
      forWhom: [
        'Web sitesi veya mobil uygulama ihtiyacı olan ama teknik süreçle uğraşmak istemeyen KOBİ\'ler',
        'Mevcut dijital altyapısını modernize etmek veya entegre etmek isteyen işletmeler',
        'Müşteri yönlendirme, rezervasyon veya e-ticaret sistemi kurmak isteyen firmalar'
      ],
      steps: [
        'İhtiyaç Analizi — Hedef, kullanıcı akışı ve teknik gereksinimler belirlenir',
        'Tasarım & Prototip — Kullanıcı arayüzü ve deneyimi tasarlanır',
        'Geliştirme — Web sitesi veya uygulama kodlanır, entegrasyonlar yapılır',
        'Test & Optimizasyon — Hız, güvenlik ve kullanılabilirlik testleri yapılır',
        'Yayın & Destek — Canlıya alınır, bakım ve güncelleme süreci başlar'
      ],
      why: 'Freelancer değiliz, ekibiz. Tasarım, geliştirme ve içerik aynı çatı altında — koordinasyon kaybı yok, zaman kaybı yok. Teslim ettiğimiz ürün çalışır, görünür ve dönüşüm sağlar.'
    }
  ];

  const getServiceData = (title, kicker) => {
    const key = ((title || '') + ' ' + (kicker || '')).toLowerCase();
    for (const svc of SERVICES) {
      if (svc.match.some(m => key.includes(m))) return svc;
    }
    return {
      tagline: 'Detaylar için bizimle iletişime geçin.',
      forWhom: ['Bu hizmet hakkında daha fazla bilgi almak için Telegram\'dan ulaşın.'],
      steps: ['Brief → Analiz → Üretim → Teslimat'],
      why: 'Spion Media olarak her projeye özel yaklaşım sergiliyoruz.'
    };
  };

  const renderList = (el, items) => {
    if (!el) return;
    el.innerHTML = items.map(i => `<li>${i}</li>`).join('');
  };

  const openModal = (card) => {
    const title  = (card.querySelector('.card__title')?.textContent || 'Hizmet Detayı').trim();
    const kicker = (card.querySelector('.kicker')?.textContent || '').trim();
    const img    = card.querySelector('.card__img');
    const data   = getServiceData(title, kicker);

    if (modalTitle)   modalTitle.textContent   = title;
    if (modalKicker)  modalKicker.textContent  = kicker;
    if (modalTagline) modalTagline.textContent = data.tagline;
    if (modalWhy)     modalWhy.textContent     = data.why;

    renderList(modalFor,   data.forWhom);
    renderList(modalSteps, data.steps);

    if (modalImage) {
      modalImage.src = img?.getAttribute('src') || '';
      modalImage.alt = img?.getAttribute('alt') || title;
    }

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-detail-btn]');
    if (!trigger) return;
    e.preventDefault();
    const card = trigger.closest('.card');
    if (card) openModal(card);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
});
// ── /DETAY MODAL ─────────────────────────────────────────────────────────────

// SCROLL SECTION
ScrollReveal().reveal('.navbar', {
  origin: 'left', distance: '50px', duration: 1000, delay: 100, reset: true,
});

ScrollReveal().reveal('.footer-container', {
  origin: 'left', distance: '80px', duration: 1200, delay: 300, reset: true,
});

ScrollReveal().reveal('.last-fot', {
  origin: 'bottom', distance: '80px', duration: 1200, delay: 300, reset: true,
});

ScrollReveal().reveal('.svc-hero', {
  origin: 'top', distance: '40px', duration: 900, delay: 100, reset: false,
});

ScrollReveal().reveal('.card', {
  origin: 'bottom', distance: '30px', duration: 700, delay: 80, interval: 80, reset: false,
});
// SCROLL SECTION
