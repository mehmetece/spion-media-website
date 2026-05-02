/* ═══════════════════════════════════════════════════════════
   SPION MEDIA — MULTI-LANGUAGE SYSTEM
   Google Translate Integration - 100+ Languages Support
   ═══════════════════════════════════════════════════════════ */

// Google Translate Widget Initialization
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'tr',
    includedLanguages: 'en,de,fr,es,it,ru,ar,zh-CN,ja,ko,pt,nl,pl,sv,no,da,fi,cs,el,he,hi,id,ms,th,vi,uk,ro,hu,tr',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false,
    multilanguagePage: true
  }, 'google_translate_element');
}

// Custom Language Switcher
document.addEventListener('DOMContentLoaded', function() {
  const langButton = document.querySelector('[data-lang-toggle]');
  const langLabel = document.querySelector('[data-lang-label]');
  
  if (!langButton) return;

  // Create custom language dropdown
  const langDropdown = document.createElement('div');
  langDropdown.className = 'lang-dropdown';
  langDropdown.innerHTML = `
    <div class="lang-dropdown__inner">
      <div class="lang-dropdown__header">
        <span class="lang-dropdown__title">Dil Seçin / Select Language</span>
        <button class="lang-dropdown__close" aria-label="Kapat">×</button>
      </div>
      <div class="lang-dropdown__grid">
        <button class="lang-item" data-lang="tr">🇹🇷 Türkçe</button>
        <button class="lang-item" data-lang="en">🇬🇧 English</button>
        <button class="lang-item" data-lang="de">🇩🇪 Deutsch</button>
        <button class="lang-item" data-lang="fr">🇫🇷 Français</button>
        <button class="lang-item" data-lang="es">🇪🇸 Español</button>
        <button class="lang-item" data-lang="it">🇮🇹 Italiano</button>
        <button class="lang-item" data-lang="ru">🇷🇺 Русский</button>
        <button class="lang-item" data-lang="ar">🇸🇦 العربية</button>
        <button class="lang-item" data-lang="zh-CN">🇨🇳 中文</button>
        <button class="lang-item" data-lang="ja">🇯🇵 日本語</button>
        <button class="lang-item" data-lang="ko">🇰🇷 한국어</button>
        <button class="lang-item" data-lang="pt">🇵🇹 Português</button>
        <button class="lang-item" data-lang="nl">🇳🇱 Nederlands</button>
        <button class="lang-item" data-lang="pl">🇵🇱 Polski</button>
        <button class="lang-item" data-lang="sv">🇸🇪 Svenska</button>
        <button class="lang-item" data-lang="no">🇳🇴 Norsk</button>
        <button class="lang-item" data-lang="da">🇩🇰 Dansk</button>
        <button class="lang-item" data-lang="fi">🇫🇮 Suomi</button>
        <button class="lang-item" data-lang="cs">🇨🇿 Čeština</button>
        <button class="lang-item" data-lang="el">🇬🇷 Ελληνικά</button>
        <button class="lang-item" data-lang="he">🇮🇱 עברית</button>
        <button class="lang-item" data-lang="hi">🇮🇳 हिन्दी</button>
        <button class="lang-item" data-lang="id">🇮🇩 Indonesia</button>
        <button class="lang-item" data-lang="ms">🇲🇾 Melayu</button>
        <button class="lang-item" data-lang="th">🇹🇭 ไทย</button>
        <button class="lang-item" data-lang="vi">🇻🇳 Tiếng Việt</button>
        <button class="lang-item" data-lang="uk">🇺🇦 Українська</button>
        <button class="lang-item" data-lang="ro">🇷🇴 Română</button>
        <button class="lang-item" data-lang="hu">🇭🇺 Magyar</button>
      </div>
    </div>
  `;
  document.body.appendChild(langDropdown);

  // Toggle dropdown
  langButton.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    langDropdown.classList.toggle('is-open');
    langButton.setAttribute('aria-pressed', langDropdown.classList.contains('is-open'));
  });

  // Close dropdown
  const closeBtn = langDropdown.querySelector('.lang-dropdown__close');
  closeBtn.addEventListener('click', function() {
    langDropdown.classList.remove('is-open');
    langButton.setAttribute('aria-pressed', 'false');
  });

  // Close on outside click
  document.addEventListener('click', function(e) {
    if (!langDropdown.contains(e.target) && !langButton.contains(e.target)) {
      langDropdown.classList.remove('is-open');
      langButton.setAttribute('aria-pressed', 'false');
    }
  });

  // Language selection
  const langItems = langDropdown.querySelectorAll('.lang-item');
  langItems.forEach(function(item) {
    item.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      const langName = this.textContent.trim().split(' ')[1];
      
      // Change language using Google Translate
      changeLanguage(lang);
      
      // Update button label
      if (langLabel) {
        langLabel.textContent = this.textContent.trim().split(' ')[0];
      }
      
      // Save preference
      localStorage.setItem('spion_lang', lang);
      
      // Close dropdown
      langDropdown.classList.remove('is-open');
      langButton.setAttribute('aria-pressed', 'false');
      
      // Show notification
      showNotification('Dil değiştirildi / Language changed: ' + langName);
    });
  });

  // Load saved language
  const savedLang = localStorage.getItem('spion_lang');
  if (savedLang && savedLang !== 'tr') {
    setTimeout(function() {
      changeLanguage(savedLang);
    }, 500);
  }
});

// Change language function
function changeLanguage(lang) {
  const selectField = document.querySelector('.goog-te-combo');
  if (selectField) {
    selectField.value = lang;
    selectField.dispatchEvent(new Event('change'));
  } else {
    // If widget not loaded yet, try again
    setTimeout(function() {
      changeLanguage(lang);
    }, 500);
  }
}

// Show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'lang-notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(function() {
    notification.classList.add('show');
  }, 10);
  
  setTimeout(function() {
    notification.classList.remove('show');
    setTimeout(function() {
      notification.remove();
    }, 300);
  }, 2000);
}

// Hide Google Translate default UI
window.addEventListener('load', function() {
  const style = document.createElement('style');
  style.textContent = `
    .goog-te-banner-frame,
    .goog-te-balloon-frame,
    .goog-logo-link,
    .goog-te-gadget {
      display: none !important;
    }
    body {
      top: 0 !important;
    }
    #google_translate_element {
      position: absolute;
      left: -9999px;
      opacity: 0;
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);
});
