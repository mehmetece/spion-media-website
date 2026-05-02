/* ═══════════════════════════════════════════════════════════
   SPION MEDIA — ADMIN PANEL JAVASCRIPT
   ═══════════════════════════════════════════════════════════ */

// Auth Check
(function checkAuth() {
  if (sessionStorage.getItem('spion_admin_auth') !== 'true') {
    window.location.href = 'index.html';
    return;
  }
  
  const loginTime = parseInt(sessionStorage.getItem('spion_admin_time'));
  const now = Date.now();
  const hourInMs = 3600000; // 1 saat
  
  if (now - loginTime > hourInMs) {
    sessionStorage.removeItem('spion_admin_auth');
    sessionStorage.removeItem('spion_admin_time');
    window.location.href = 'index.html';
  }
})();

// Global State
let sliderData = [];
let blogData = [];
let productsData = [];
let settingsData = {};
let campaignData = {};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initLogout();
  loadAllData();
});

// Navigation
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      const section = this.getAttribute('data-section');
      navigateTo(section);
    });
  });
}

function navigateTo(section) {
  // Update nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  document.querySelector(`[data-section="${section}"]`).classList.add('active');
  
  // Update content
  document.querySelectorAll('.content-section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(`section-${section}`).classList.add('active');
  
  // Update title
  const titles = {
    dashboard: 'Dashboard',
    slider: 'Slider Yönetimi',
    blog: 'Blog Yönetimi',
    products: 'Ürün Yönetimi',
    campaign: 'Kampanya Yönetimi',
    settings: 'Genel Ayarlar'
  };
  document.getElementById('pageTitle').textContent = titles[section];
  
  // Update URL
  window.location.hash = section;
}

// Logout
function initLogout() {
  document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Çıkış yapmak istediğinize emin misiniz?')) {
      sessionStorage.removeItem('spion_admin_auth');
      sessionStorage.removeItem('spion_admin_time');
      window.location.href = 'index.html';
    }
  });
}

// Load All Data
async function loadAllData() {
  try {
    // Load Slider
    const sliderRes = await fetch('../data/slider.json');
    sliderData = await sliderRes.json();
    renderSliderList();
    updateStats('slider', sliderData.slides.length);
    
    // Load Blog
    const blogRes = await fetch('../data/blog.json');
    blogData = await blogRes.json();
    renderBlogList();
    updateStats('blog', blogData.posts.length);
    
    // Load Products
    const productsRes = await fetch('../data/products.json');
    productsData = await productsRes.json();
    renderProductList();
    updateStats('products', productsData.products.length);
    
    // Load Settings
    const settingsRes = await fetch('../data/settings.json');
    settingsData = await settingsRes.json();
    renderSettingsForm();
    
    // Load Campaign
    const campaignRes = await fetch('../data/campaign.json');
    campaignData = await campaignRes.json();
    renderCampaignForm();
    updateCampaignStatus();
    
  } catch (error) {
    console.error('Veri yükleme hatası:', error);
    showToast('Veriler yüklenirken hata oluştu!', 'error');
  }
}

// Update Stats
function updateStats(type, count) {
  const ids = {
    slider: 'sliderCount',
    blog: 'blogCount',
    products: 'productCount'
  };
  
  const el = document.getElementById(ids[type]);
  if (el) el.textContent = count;
}

// Update Campaign Status
function updateCampaignStatus() {
  const statusEl = document.getElementById('campaignStatus');
  if (statusEl) {
    statusEl.textContent = campaignData.active ? 'Aktif' : 'Pasif';
    statusEl.style.color = campaignData.active ? '#2a7a4a' : '#8a2a2a';
  }
}

// Render Slider List
function renderSliderList() {
  const container = document.getElementById('sliderList');
  
  if (!sliderData.slides || sliderData.slides.length === 0) {
    container.innerHTML = '<p style="color:#888;text-align:center;padding:40px;">Henüz slider eklenmemiş.</p>';
    return;
  }
  
  container.innerHTML = sliderData.slides.map(slide => `
    <div class="data-item">
      <img src="../${slide.image}" alt="${slide.label}" class="data-item-image"/>
      <div class="data-item-content">
        <div class="data-item-title">${slide.label}</div>
        <div class="data-item-meta">Slide #${slide.id} • ${slide.active ? 'Aktif' : 'Pasif'}</div>
      </div>
      <div class="data-item-actions">
        <button class="btn-edit" onclick="editSlide(${slide.id})" title="Düzenle">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
        <button class="btn-delete" onclick="deleteSlide(${slide.id})" title="Sil">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

// Render Blog List
function renderBlogList() {
  const container = document.getElementById('blogList');
  
  if (!blogData.posts || blogData.posts.length === 0) {
    container.innerHTML = '<p style="color:#888;text-align:center;padding:40px;">Henüz blog yazısı eklenmemiş.</p>';
    return;
  }
  
  container.innerHTML = blogData.posts.map(post => `
    <div class="data-item">
      <img src="${post.image}" alt="${post.title}" class="data-item-image"/>
      <div class="data-item-content">
        <div class="data-item-title">${post.title}</div>
        <div class="data-item-meta">${post.category} • ${post.readTime} • ${post.date}</div>
      </div>
      <div class="data-item-actions">
        <button class="btn-edit" onclick="editBlog(${post.id})" title="Düzenle">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
        <button class="btn-delete" onclick="deleteBlog(${post.id})" title="Sil">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

// Render Product List
function renderProductList() {
  const container = document.getElementById('productList');
  
  if (!productsData.products || productsData.products.length === 0) {
    container.innerHTML = '<p style="color:#888;text-align:center;padding:40px;">Henüz ürün eklenmemiş.</p>';
    return;
  }
  
  container.innerHTML = productsData.products.map(product => `
    <div class="data-item">
      <img src="${product.image}" alt="${product.name}" class="data-item-image"/>
      <div class="data-item-content">
        <div class="data-item-title">${product.name}</div>
        <div class="data-item-meta">${product.category} • ${product.price}₺ • ${product.isNew ? 'Yeni' : ''}</div>
      </div>
      <div class="data-item-actions">
        <button class="btn-edit" onclick="editProduct(${product.id})" title="Düzenle">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
        <button class="btn-delete" onclick="deleteProduct(${product.id})" title="Sil">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

// Render Settings Form
function renderSettingsForm() {
  const container = document.getElementById('settingsForm');
  
  container.innerHTML = `
    <div class="form-group">
      <label>Site Adı</label>
      <input type="text" id="siteName" value="${settingsData.siteName || ''}" />
    </div>
    <div class="form-group">
      <label>Site Sloganı</label>
      <input type="text" id="siteTagline" value="${settingsData.siteTagline || ''}" />
    </div>
    <div class="form-group">
      <label>Site Açıklaması</label>
      <textarea id="siteDescription">${settingsData.siteDescription || ''}</textarea>
    </div>
    <div class="form-group">
      <label>E-posta</label>
      <input type="email" id="contactEmail" value="${settingsData.contact?.email || ''}" />
    </div>
    <div class="form-group">
      <label>Telefon</label>
      <input type="tel" id="contactPhone" value="${settingsData.contact?.phone || ''}" />
    </div>
    <div class="form-group">
      <label>Instagram</label>
      <input type="url" id="socialInstagram" value="${settingsData.social?.instagram || ''}" />
    </div>
    <div class="form-group">
      <label>Twitter/X</label>
      <input type="url" id="socialTwitter" value="${settingsData.social?.twitter || ''}" />
    </div>
    <div class="form-group">
      <label>WhatsApp</label>
      <input type="url" id="socialWhatsapp" value="${settingsData.social?.whatsapp || ''}" />
    </div>
  `;
  
  // Save button
  document.getElementById('saveSettingsBtn').onclick = saveSettings;
}

// Render Campaign Form
function renderCampaignForm() {
  const container = document.getElementById('campaignForm');
  
  container.innerHTML = `
    <div class="form-group">
      <label>
        <input type="checkbox" id="campaign_active" ${campaignData.active ? 'checked' : ''} onchange="updateCampaignPreview()" />
        Kampanya Aktif
      </label>
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" id="campaign_closeable" ${campaignData.closeable ? 'checked' : ''} />
        Kapatılabilir (X butonu)
      </label>
    </div>
    <div class="form-group">
      <label>İkon/Emoji</label>
      <input type="text" id="campaign_icon" value="${campaignData.icon || '🔥'}" maxlength="2" onchange="updateCampaignPreview()" />
    </div>
    <div class="form-group">
      <label>Başlık</label>
      <input type="text" id="campaign_title" value="${campaignData.title || ''}" onchange="updateCampaignPreview()" />
    </div>
    <div class="form-group">
      <label>Açıklama</label>
      <textarea id="campaign_description" rows="2" onchange="updateCampaignPreview()">${campaignData.description || ''}</textarea>
    </div>
    <div class="form-group">
      <label>Buton Metni</label>
      <input type="text" id="campaign_buttonText" value="${campaignData.buttonText || 'Detayları Gör'}" onchange="updateCampaignPreview()" />
    </div>
    <div class="form-group">
      <label>Buton Linki</label>
      <input type="url" id="campaign_buttonLink" value="${campaignData.buttonLink || '#'}" />
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" id="campaign_image_enabled" ${campaignData.image?.enabled ? 'checked' : ''} onchange="toggleImageFields()" />
        Yan Görsel Ekle
      </label>
    </div>
    <div id="imageFields" style="display:${campaignData.image?.enabled ? 'block' : 'none'};">
      <div class="form-group">
        <label>Yan Görsel URL</label>
        <input type="url" id="campaign_image_url" value="${campaignData.image?.url || ''}" placeholder="https://images.unsplash.com/..." onchange="updateCampaignPreview()" />
        <small style="color:#c8a96e;font-size:0.75rem;margin-top:4px;display:block;font-weight:600;">
          📐 Önerilen Boyut: 400x400px (kare) • Max 500KB
        </small>
        <small style="color:#888;font-size:0.7rem;margin-top:2px;display:block;">
          Desktop'ta 200x200px, mobilde tam genişlik olarak görünür
        </small>
      </div>
      <div class="form-group">
        <label>Görsel Konumu</label>
        <select id="campaign_image_position" onchange="updateCampaignPreview()">
          <option value="right" ${campaignData.image?.position === 'right' ? 'selected' : ''}>Sağda (Butondan Önce)</option>
          <option value="left" ${campaignData.image?.position === 'left' ? 'selected' : ''}>Solda (Başlıktan Önce)</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label>Arka Plan Görseli (Opsiyonel)</label>
      <input type="url" id="campaign_bg_image" value="${campaignData.style?.backgroundImage || ''}" placeholder="https://..." onchange="updateCampaignPreview()" />
      <small style="color:#c8a96e;font-size:0.75rem;margin-top:4px;display:block;font-weight:600;">
        📐 Önerilen Boyut: 1920x400px (geniş) • Max 800KB
      </small>
      <small style="color:#888;font-size:0.7rem;margin-top:2px;display:block;">
        Gradient üzerine overlay olarak eklenir, hafif şeffaf görünür
      </small>
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" id="campaign_countdown_enabled" ${campaignData.countdown?.enabled ? 'checked' : ''} onchange="toggleCountdownFields()" />
        Geri Sayım Aktif
      </label>
    </div>
    <div class="form-group" id="countdownDateField" style="display:${campaignData.countdown?.enabled ? 'flex' : 'none'};">
      <label>Bitiş Tarihi</label>
      <input type="datetime-local" id="campaign_countdown_date" value="${campaignData.countdown?.endDate ? campaignData.countdown.endDate.slice(0, 16) : ''}" />
    </div>
    <div class="form-group">
      <label>Gradient Renk 1</label>
      <input type="color" id="campaign_color1" value="#c8a96e" />
    </div>
    <div class="form-group">
      <label>Gradient Renk 2</label>
      <input type="color" id="campaign_color2" value="#8a7248" />
    </div>
  `;
  
  // Update preview
  updateCampaignPreview();
  
  // Save button
  document.getElementById('saveCampaignBtn').onclick = saveCampaign;
}

// Update Campaign Preview
function updateCampaignPreview() {
  const icon = document.getElementById('campaign_icon')?.value || '🔥';
  const title = document.getElementById('campaign_title')?.value || 'Kampanya Başlığı';
  const desc = document.getElementById('campaign_description')?.value || 'Kampanya açıklaması';
  const btnText = document.getElementById('campaign_buttonText')?.value || 'Buton Metni';
  const active = document.getElementById('campaign_active')?.checked;
  
  // Image
  const imageEnabled = document.getElementById('campaign_image_enabled')?.checked;
  const imageUrl = document.getElementById('campaign_image_url')?.value;
  const imagePosition = document.getElementById('campaign_image_position')?.value || 'right';
  const previewImage = document.getElementById('previewImage');
  const previewBanner = document.getElementById('previewBanner');
  
  if (imageEnabled && imageUrl) {
    previewImage.src = imageUrl;
    previewImage.classList.add('show');
    
    // Update position in preview
    if (imagePosition === 'left') {
      previewImage.style.order = '-1'; // Move to start
    } else {
      previewImage.style.order = '10'; // Move to end (before button)
    }
  } else {
    previewImage.classList.remove('show');
  }
  
  // Background image
  const bgImage = document.getElementById('campaign_bg_image')?.value;
  if (bgImage) {
    previewBanner.style.backgroundImage = `url('${bgImage}')`;
    previewBanner.style.backgroundSize = 'cover';
    previewBanner.style.backgroundPosition = 'center';
  } else {
    previewBanner.style.backgroundImage = '';
  }
  
  document.getElementById('previewIcon').textContent = icon;
  document.getElementById('previewTitle').textContent = title;
  document.getElementById('previewDesc').textContent = desc;
  document.getElementById('previewBtn').textContent = btnText;
  
  if (!active) {
    previewBanner.style.opacity = '0.5';
    previewBanner.style.filter = 'grayscale(100%)';
  } else {
    previewBanner.style.opacity = '1';
    previewBanner.style.filter = 'none';
  }
}

// Toggle Countdown Fields
function toggleCountdownFields() {
  const enabled = document.getElementById('campaign_countdown_enabled').checked;
  document.getElementById('countdownDateField').style.display = enabled ? 'flex' : 'none';
}

// Toggle Image Fields
function toggleImageFields() {
  const enabled = document.getElementById('campaign_image_enabled').checked;
  document.getElementById('imageFields').style.display = enabled ? 'block' : 'none';
}

// Save Campaign
function saveCampaign() {
  campaignData.active = document.getElementById('campaign_active').checked;
  campaignData.closeable = document.getElementById('campaign_closeable').checked;
  campaignData.icon = document.getElementById('campaign_icon').value;
  campaignData.title = document.getElementById('campaign_title').value;
  campaignData.description = document.getElementById('campaign_description').value;
  campaignData.buttonText = document.getElementById('campaign_buttonText').value;
  campaignData.buttonLink = document.getElementById('campaign_buttonLink').value;
  
  // Image settings
  const imageEnabled = document.getElementById('campaign_image_enabled').checked;
  const imageUrl = document.getElementById('campaign_image_url').value;
  const imagePosition = document.getElementById('campaign_image_position').value;
  
  campaignData.image = {
    enabled: imageEnabled,
    url: imageUrl,
    position: imagePosition
  };
  
  const countdownEnabled = document.getElementById('campaign_countdown_enabled').checked;
  const countdownDate = document.getElementById('campaign_countdown_date').value;
  
  campaignData.countdown = {
    enabled: countdownEnabled,
    endDate: countdownDate ? countdownDate + ':00' : ''
  };
  
  const color1 = document.getElementById('campaign_color1').value;
  const color2 = document.getElementById('campaign_color2').value;
  const bgImage = document.getElementById('campaign_bg_image').value;
  
  campaignData.style = {
    gradient: `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`,
    textColor: '#0a0a0a',
    backgroundImage: bgImage
  };
  
  // Save to localStorage
  localStorage.setItem('spion_campaign', JSON.stringify(campaignData));
  
  // Reset closed state
  localStorage.removeItem('spion_campaign_closed');
  
  // Update dashboard status
  updateCampaignStatus();
  
  showToast('Kampanya kaydedildi! Ana sayfayı yenileyin.');
}

// Save Settings
function saveSettings() {
  settingsData.siteName = document.getElementById('siteName').value;
  settingsData.siteTagline = document.getElementById('siteTagline').value;
  settingsData.siteDescription = document.getElementById('siteDescription').value;
  settingsData.contact.email = document.getElementById('contactEmail').value;
  settingsData.contact.phone = document.getElementById('contactPhone').value;
  settingsData.social.instagram = document.getElementById('socialInstagram').value;
  settingsData.social.twitter = document.getElementById('socialTwitter').value;
  settingsData.social.whatsapp = document.getElementById('socialWhatsapp').value;
  
  // Save to localStorage (gerçek uygulamada backend'e gönderilir)
  localStorage.setItem('spion_settings', JSON.stringify(settingsData));
  
  showToast('Ayarlar kaydedildi!');
}

// CRUD Functions (Placeholder - gerçek uygulamada backend API kullanılır)
function editSlide(id) {
  const slide = sliderData.slides.find(s => s.id === id);
  if (!slide) return;
  
  openModal('Slider Düzenle', `
    <div class="form-group">
      <label>Görsel URL</label>
      <input type="text" id="edit_image" value="${slide.image}" />
    </div>
    <div class="form-group">
      <label>Etiket</label>
      <input type="text" id="edit_label" value="${slide.label}" />
    </div>
    <div class="form-group">
      <label>Başlık (HTML destekler)</label>
      <textarea id="edit_title" rows="3">${slide.title}</textarea>
    </div>
    <div class="form-group">
      <label>Açıklama</label>
      <textarea id="edit_description" rows="3">${slide.description}</textarea>
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" id="edit_active" ${slide.active ? 'checked' : ''} />
        Aktif
      </label>
    </div>
  `, function() {
    slide.image = document.getElementById('edit_image').value;
    slide.label = document.getElementById('edit_label').value;
    slide.title = document.getElementById('edit_title').value;
    slide.description = document.getElementById('edit_description').value;
    slide.active = document.getElementById('edit_active').checked;
    
    localStorage.setItem('spion_slider', JSON.stringify(sliderData));
    renderSliderList();
    closeModal();
    showToast('Slider güncellendi!');
  });
}

function deleteSlide(id) {
  if (confirm('Bu slide\'ı silmek istediğinize emin misiniz?')) {
    sliderData.slides = sliderData.slides.filter(s => s.id !== id);
    localStorage.setItem('spion_slider', JSON.stringify(sliderData));
    renderSliderList();
    updateStats('slider', sliderData.slides.length);
    showToast('Slide silindi!');
  }
}

function editBlog(id) {
  const post = blogData.posts.find(p => p.id === id);
  if (!post) return;
  
  openModal('Blog Düzenle', `
    <div class="form-group">
      <label>Başlık</label>
      <input type="text" id="edit_title" value="${post.title}" />
    </div>
    <div class="form-group">
      <label>Slug (URL)</label>
      <input type="text" id="edit_slug" value="${post.slug}" />
    </div>
    <div class="form-group">
      <label>Kategori</label>
      <input type="text" id="edit_category" value="${post.category}" />
    </div>
    <div class="form-group">
      <label>Özet</label>
      <textarea id="edit_excerpt" rows="3">${post.excerpt}</textarea>
    </div>
    <div class="form-group">
      <label>Görsel URL</label>
      <input type="text" id="edit_image" value="${post.image}" />
    </div>
    <div class="form-group">
      <label>Okuma Süresi</label>
      <input type="text" id="edit_readTime" value="${post.readTime}" />
    </div>
    <div class="form-group">
      <label>Tarih</label>
      <input type="date" id="edit_date" value="${post.date}" />
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" id="edit_active" ${post.active ? 'checked' : ''} />
        Aktif
      </label>
    </div>
  `, function() {
    post.title = document.getElementById('edit_title').value;
    post.slug = document.getElementById('edit_slug').value;
    post.category = document.getElementById('edit_category').value;
    post.excerpt = document.getElementById('edit_excerpt').value;
    post.image = document.getElementById('edit_image').value;
    post.readTime = document.getElementById('edit_readTime').value;
    post.date = document.getElementById('edit_date').value;
    post.active = document.getElementById('edit_active').checked;
    
    localStorage.setItem('spion_blog', JSON.stringify(blogData));
    renderBlogList();
    closeModal();
    showToast('Blog güncellendi!');
  });
}

function deleteBlog(id) {
  if (confirm('Bu blog yazısını silmek istediğinize emin misiniz?')) {
    blogData.posts = blogData.posts.filter(p => p.id !== id);
    localStorage.setItem('spion_blog', JSON.stringify(blogData));
    renderBlogList();
    updateStats('blog', blogData.posts.length);
    showToast('Blog yazısı silindi!');
  }
}

function editProduct(id) {
  const product = productsData.products.find(p => p.id === id);
  if (!product) return;
  
  openModal('Ürün Düzenle', `
    <div class="form-group">
      <label>Ürün Adı</label>
      <input type="text" id="edit_name" value="${product.name}" />
    </div>
    <div class="form-group">
      <label>Kategori</label>
      <select id="edit_category">
        <option value="kamera" ${product.category === 'kamera' ? 'selected' : ''}>Kamera</option>
        <option value="drone" ${product.category === 'drone' ? 'selected' : ''}>Drone</option>
        <option value="ses" ${product.category === 'ses' ? 'selected' : ''}>Ses</option>
        <option value="isik" ${product.category === 'isik' ? 'selected' : ''}>Işık</option>
        <option value="tripod" ${product.category === 'tripod' ? 'selected' : ''}>Tripod</option>
        <option value="aksesuar" ${product.category === 'aksesuar' ? 'selected' : ''}>Aksesuar</option>
        <option value="studyo" ${product.category === 'studyo' ? 'selected' : ''}>Stüdyo</option>
        <option value="DİJİTAL" ${product.category === 'DİJİTAL' ? 'selected' : ''}>Dijital</option>
      </select>
    </div>
    <div class="form-group">
      <label>Açıklama</label>
      <textarea id="edit_description" rows="2">${product.description}</textarea>
    </div>
    <div class="form-group">
      <label>Fiyat (₺)</label>
      <input type="text" id="edit_price" value="${product.price}" />
    </div>
    <div class="form-group">
      <label>Görsel URL</label>
      <input type="text" id="edit_image" value="${product.image}" />
    </div>
    <div class="form-group">
      <label>Shopier Link</label>
      <input type="url" id="edit_shopierLink" value="${product.shopierLink}" />
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" id="edit_isNew" ${product.isNew ? 'checked' : ''} />
        Yeni Ürün
      </label>
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" id="edit_active" ${product.active ? 'checked' : ''} />
        Aktif
      </label>
    </div>
  `, function() {
    product.name = document.getElementById('edit_name').value;
    product.category = document.getElementById('edit_category').value;
    product.description = document.getElementById('edit_description').value;
    product.price = document.getElementById('edit_price').value;
    product.image = document.getElementById('edit_image').value;
    product.shopierLink = document.getElementById('edit_shopierLink').value;
    product.isNew = document.getElementById('edit_isNew').checked;
    product.active = document.getElementById('edit_active').checked;
    
    localStorage.setItem('spion_products', JSON.stringify(productsData));
    renderProductList();
    closeModal();
    showToast('Ürün güncellendi!');
  });
}

function deleteProduct(id) {
  if (confirm('Bu ürünü silmek istediğinize emin misiniz?')) {
    productsData.products = productsData.products.filter(p => p.id !== id);
    localStorage.setItem('spion_products', JSON.stringify(productsData));
    renderProductList();
    updateStats('products', productsData.products.length);
    showToast('Ürün silindi!');
  }
}

// Modal Functions
function openModal(title, bodyHTML, onSave) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = bodyHTML;
  document.getElementById('editModal').classList.add('show');
  
  document.getElementById('modalSaveBtn').onclick = onSave;
}

function closeModal() {
  document.getElementById('editModal').classList.remove('show');
}

// Toast Notification
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  
  if (type === 'error') {
    toast.style.background = '#8a2a2a';
    toast.style.color = '#fff';
  } else {
    toast.style.background = '#c8a96e';
    toast.style.color = '#0a0a0a';
  }
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Check URL hash on load
window.addEventListener('load', function() {
  const hash = window.location.hash.substring(1);
  if (hash && ['dashboard', 'slider', 'blog', 'products', 'settings'].includes(hash)) {
    navigateTo(hash);
  }
});
