/* ============================================================
   SPION MEDIA — GLOBAL NAVIGATION & UTILITIES
   ============================================================ */

(function () {
  'use strict';

  /* ── HAMBURGER / MOBILE OVERLAY ── */
  const hamburger = document.querySelector('.navbar__hamburger');
  const overlay   = document.querySelector('.navbar__mobile-overlay');

  if (hamburger && overlay) {
    hamburger.addEventListener('click', () => {
      const isOpen = overlay.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    overlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        overlay.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── SCROLL REVEAL ── */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => observer.observe(el));
  }

  /* ── ACTIVE NAV LINK ── */
  function setActiveLink() {
    const path = window.location.pathname;
    document.querySelectorAll('.navbar__link').forEach(link => {
      const href = link.getAttribute('href') || '';
      if (href && path.includes(href.replace(/^\//, '').split('/')[0]) && href !== '/') {
        link.classList.add('active');
      }
    });
  }

  /* ── LANG TOGGLE (Google Translate) ── */
  function initLangToggle() {
    const btn   = document.querySelector('[data-lang-toggle]');
    const label = document.querySelector('[data-lang-label]');
    if (!btn) return;

    const storageKey = 'spion-language';
    let currentLang  = localStorage.getItem(storageKey) || 'tr';
    let loadPromise;
    let applying = false;

    // Inject hidden GT element
    if (!document.getElementById('google_translate_element')) {
      const el = document.createElement('div');
      el.id = 'google_translate_element';
      el.setAttribute('aria-hidden', 'true');
      el.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;';
      document.body.appendChild(el);
    }

    // Hide GT banner
    const style = document.createElement('style');
    style.textContent = `
      .goog-te-banner-frame, .goog-te-menu-frame { display:none!important; }
      body { top:0!important; }
    `;
    document.head.appendChild(style);

    function updateLabel() {
      if (label) label.textContent = currentLang === 'tr' ? 'EN' : 'TR';
      btn.setAttribute('aria-pressed', currentLang === 'en' ? 'true' : 'false');
    }

    function loadGT() {
      if (loadPromise) return loadPromise;
      loadPromise = new Promise((resolve, reject) => {
        if (window.google?.translate?.TranslateElement) { resolve(); return; }
        window.googleTranslateElementInit = () => {
          new google.translate.TranslateElement(
            { pageLanguage: 'tr', includedLanguages: 'en,tr', autoDisplay: false },
            'google_translate_element'
          );
          resolve();
        };
        const s = document.createElement('script');
        s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        s.async = true;
        s.onerror = () => reject(new Error('GT load failed'));
        document.head.appendChild(s);
      });
      return loadPromise;
    }

    async function applyLang(lang) {
      if (applying) return;
      applying = true;
      btn.disabled = true;
      try {
        await loadGT();
        const combo = document.querySelector('select.goog-te-combo');
        if (!combo) throw new Error('GT combo not found');
        combo.value = lang === 'tr' ? '' : lang;
        combo.dispatchEvent(new Event('change'));
        currentLang = lang;
        localStorage.setItem(storageKey, lang);
        document.documentElement.setAttribute('lang', lang);
        updateLabel();
      } catch (e) {
        console.warn('[LangToggle]', e);
      } finally {
        btn.disabled = false;
        applying = false;
      }
    }

    btn.addEventListener('click', () => applyLang(currentLang === 'tr' ? 'en' : 'tr'));
    updateLabel();
    if (currentLang === 'en') applyLang('en');
    else loadGT().catch(() => {});
  }

  /* ── INIT ── */
  document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    setActiveLink();
    initLangToggle();
  });

})();
