// ============================================================================
// FOOD GHARANA — Interactive Menu, Order Tray, Gallery & Form Validation
// Beginner-friendly JavaScript (ES6+)
// ============================================================================

const WHATSAPP_NUMBER = '919820451234';

// 1. Menu Data (Sample Homemade Dishes with Prices in INR)
const MENU_ITEMS = [
  {
    id: 'royal-gharana-thali',
    name: 'Royal Gharana Thali',
    category: 'thalis',
    categoryLabel: 'Gharana Thalis',
    jainAvailable: true,
    portion: 'Serves 1',
    price: 340,
    image: './src/assets/images/hero_gharana_thali_1795592335883.jpg',
    description:
      'Dal Makhani, Paneer Lababdar, saffron jeera pulao, 3 pure-ghee rotis, cucumber raita, pickle, and 2 warm gulab jamuns.',
  },
  {
    id: 'everyday-homestyle-thali',
    name: 'Homestyle Weekday Thali',
    category: 'thalis',
    categoryLabel: 'Gharana Thalis',
    jainAvailable: true,
    portion: 'Serves 1',
    price: 240,
    image: './src/assets/images/dish_dal_paneer_feast_1795592334977.jpg',
    description:
      'Yellow dal tadka, seasonal dry sabzi, steamed basmati rice, 4 soft phulkas with desi ghee, and roasted papad.',
  },
  {
    id: 'paneer-lababdar-handi',
    name: 'Slow-Simmered Paneer Lababdar',
    category: 'mains',
    categoryLabel: 'Royal Mains',
    jainAvailable: true,
    portion: '450g Handi (Serves 2)',
    price: 320,
    image: './src/assets/images/dish_dal_paneer_feast_1795592334977.jpg',
    description:
      'Soft homemade malai paneer cubes simmered in rich tomato-cashew gravy finished with kasuri methi and ginger juliennes.',
  },
  {
    id: 'overnight-dal-makhani',
    name: 'Overnight Gharana Dal Makhani',
    category: 'mains',
    categoryLabel: 'Royal Mains',
    jainAvailable: false,
    portion: '450g Handi (Serves 2)',
    price: 290,
    image: './src/assets/images/dish_dal_paneer_feast_1795592334977.jpg',
    description:
      'Whole black urad lentils slow-cooked for 12 hours with farm tomatoes, white butter, and a swirl of fresh cream.',
  },
  {
    id: 'zafrani-dum-biryani',
    name: 'Zafrani Clay-Pot Dum Biryani',
    category: 'biryani',
    categoryLabel: 'Biryani & Rice',
    jainAvailable: true,
    portion: '650g Handi (Serves 2)',
    price: 360,
    image: './src/assets/images/dish_saffron_biryani_1795592337063.jpg',
    description:
      'Aged long-grain basmati rice layered with spiced seasonal vegetables, Kashmiri saffron milk, toasted cashews, and mint raita.',
  },
  {
    id: 'kesar-jeera-pulao',
    name: 'Ghee-Roasted Kesar Jeera Pulao',
    category: 'biryani',
    categoryLabel: 'Biryani & Rice',
    jainAvailable: true,
    portion: '450g Box (Serves 2)',
    price: 210,
    image: './src/assets/images/hero_gharana_thali_1795592335883.jpg',
    description:
      'Fragrant basmati rice tempered with cumin seeds, whole green cardamom, and golden saffron strands in pure A2 ghee.',
  },
  {
    id: 'stuffed-paneer-paratha',
    name: 'Stuffed Aloo Paneer Paratha Platter',
    category: 'breads',
    categoryLabel: 'Breads & Sides',
    jainAvailable: false,
    portion: '2 Parathas + Curd',
    price: 190,
    image: './src/assets/images/dish_stuffed_paratha_breads_1795592338179.jpg',
    description:
      'Whole-wheat parathas stuffed with spiced paneer and herbs, pan-seared in desi ghee and served with white makhan, curd, and mango pickle.',
  },
  {
    id: 'flaky-laccha-paratha',
    name: 'Pure Ghee Flaky Laccha Paratha',
    category: 'breads',
    categoryLabel: 'Breads & Sides',
    jainAvailable: true,
    portion: 'Set of 2',
    price: 120,
    image: './src/assets/images/dish_stuffed_paratha_breads_1795592338179.jpg',
    description:
      'Crisp, multi-layered whole-wheat flatbreads brushed generously with homemade ghee. Ideal pairing for rich curries.',
  },
  {
    id: 'kesar-pistachio-rasmalai',
    name: 'Chilled Kesar Pistachio Rasmalai',
    category: 'mithai',
    categoryLabel: 'Homemade Mithai',
    jainAvailable: true,
    portion: '4 Pieces',
    price: 220,
    image: './src/assets/images/dish_kesar_mithai_1795592337775.jpg',
    description:
      'Delicate homemade chenna patties soaked in saffron-infused cardamom milk and garnished with slivered pistachios and rose petals.',
  },
  {
    id: 'gulab-jamun-besan-box',
    name: 'Festive Gulab Jamun & Besan Ladoo',
    category: 'mithai',
    categoryLabel: 'Homemade Mithai',
    jainAvailable: true,
    portion: '6 Assorted Pieces',
    price: 260,
    image: './src/assets/images/dish_kesar_mithai_1795592337775.jpg',
    description:
      'Warm khoya gulab jamuns in rose syrup paired with slow-roasted pure ghee besan ladoos topped with roasted nuts.',
  },
];

// 2. Gallery Items for Lightbox Preview
const GALLERY_ITEMS = [
  {
    src: './src/assets/images/hero_gharana_thali_1795592335883.jpg',
    alt: 'Royal Gharana Thali served on hammered brassware',
    caption: 'Royal Gharana Thali — Complete Homemade Meal',
  },
  {
    src: './src/assets/images/dish_dal_paneer_feast_1795592334977.jpg',
    alt: 'Slow-simmered Dal Makhani and Paneer Lababdar in copper handis',
    caption: 'Overnight Dal Makhani & Slow-Simmered Paneer Lababdar',
  },
  {
    src: './src/assets/images/dish_saffron_biryani_1795592337063.jpg',
    alt: 'Steaming Zafrani Dum Biryani in an earthen clay handi',
    caption: 'Zafrani Clay-Pot Dum Biryani with Mint Raita',
  },
  {
    src: './src/assets/images/dish_stuffed_paratha_breads_1795592338179.jpg',
    alt: 'Flaky homemade laccha and stuffed parathas with white butter',
    caption: 'Pure Ghee Stuffed & Laccha Parathas with Makhan',
  },
  {
    src: './src/assets/images/dish_kesar_mithai_1795592337775.jpg',
    alt: 'Kesar Rasmalai, Gulab Jamun, and Besan Ladoo on marble',
    caption: 'Homemade Kesar Rasmalai, Gulab Jamun & Besan Ladoo',
  },
];

// 3. Application State
let activeCategory = 'all';
let activeDiet = 'all';
let cart = {}; // Stores { itemId: quantity }
let currentGalleryIndex = 0;

// 4. DOM Elements
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileDrawer = document.getElementById('mobileDrawer');
const menuGrid = document.getElementById('menuGrid');
const menuEmpty = document.getElementById('menuEmpty');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const categoryTabs = document.querySelectorAll('.tab-btn');
const dietButtons = document.querySelectorAll('.diet-btn');

const orderTrayTrigger = document.getElementById('orderTrayTrigger');
const orderCountBadge = document.getElementById('orderCountBadge');
const orderTotalBadge = document.getElementById('orderTotalBadge');
const orderDrawerBackdrop = document.getElementById('orderDrawerBackdrop');
const closeOrderDrawer = document.getElementById('closeOrderDrawer');
const orderDrawerItems = document.getElementById('orderDrawerItems');
const drawerSubtotal = document.getElementById('drawerSubtotal');
const drawerWhatsappLink = document.getElementById('drawerWhatsappLink');
const clearOrderBtn = document.getElementById('clearOrderBtn');

const galleryCards = document.querySelectorAll('.gallery-card');
const lightboxBackdrop = document.getElementById('lightboxBackdrop');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeLightbox = document.getElementById('closeLightbox');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

const contactForm = document.getElementById('contactForm');
const sendFormWhatsappBtn = document.getElementById('sendFormWhatsappBtn');
const formSuccess = document.getElementById('formSuccess');

// ============================================================================
// MOBILE NAVIGATION DRAWER
// ============================================================================
function toggleMobileMenu(forceClose = false) {
  const isOpen = !mobileDrawer.hidden;
  const shouldOpen = forceClose ? false : !isOpen;
  mobileDrawer.hidden = !shouldOpen;
  mobileMenuToggle.setAttribute('aria-expanded', String(shouldOpen));
}

mobileMenuToggle?.addEventListener('click', () => toggleMobileMenu());

document.querySelectorAll('.mobile-nav-link').forEach((link) => {
  link.addEventListener('click', () => toggleMobileMenu(true));
});

// ============================================================================
// MENU RENDERING & FILTERING
// ============================================================================
function renderMenu() {
  const filtered = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesDiet = activeDiet === 'all' || (activeDiet === 'jain' && item.jainAvailable);
    return matchesCategory && matchesDiet;
  });

  if (filtered.length === 0) {
    menuGrid.innerHTML = '';
    menuEmpty.hidden = false;
    return;
  }

  menuEmpty.hidden = true;
  menuGrid.innerHTML = filtered
    .map((item) => {
      const qty = cart[item.id] || 0;
      const dietText = item.jainAvailable ? 'Pure Veg · Jain Option' : 'Pure Veg';

      const actionControl =
        qty > 0
          ? `
            <div class="qty-stepper" aria-label="Quantity for ${item.name}">
              <button type="button" class="qty-btn" data-action="decrease" data-id="${item.id}" aria-label="Remove one ${item.name}">&minus;</button>
              <span class="qty-value tabular-nums">${qty}</span>
              <button type="button" class="qty-btn" data-action="increase" data-id="${item.id}" aria-label="Add one more ${item.name}">+</button>
            </div>
          `
          : `
            <button type="button" class="btn btn-primary add-dish-btn" data-action="increase" data-id="${item.id}">
              + Add
            </button>
          `;

      return `
        <article class="menu-card">
          <div class="menu-card-media">
            <img src="${item.image}" alt="${item.name}" referrerpolicy="no-referrer" loading="lazy" />
            <div class="image-fallback" aria-hidden="true"><span>${item.name}</span></div>
          </div>
          <div class="menu-card-body">
            <div class="menu-card-meta">
              <span>${item.categoryLabel}</span>
              <span aria-hidden="true">&middot;</span>
              <span>${dietText}</span>
            </div>
            <h3 class="menu-card-title">${item.name}</h3>
            <p class="menu-card-desc">${item.description}</p>
            <div class="menu-card-footer">
              <div class="menu-price-group">
                <span class="menu-price tabular-nums">&#8377;${item.price}</span>
                <span class="menu-portion">${item.portion}</span>
              </div>
              ${actionControl}
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  attachImageFallbacks(menuGrid);
}

// Category tab clicks
categoryTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    activeCategory = tab.dataset.category || 'all';
    categoryTabs.forEach((btn) => {
      const isActive = btn === tab;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });
    renderMenu();
  });
});

// Diet filter clicks
dietButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    activeDiet = btn.dataset.diet || 'all';
    dietButtons.forEach((b) => b.classList.toggle('active', b === btn));
    renderMenu();
  });
});

// Reset filters
resetFiltersBtn?.addEventListener('click', () => {
  activeCategory = 'all';
  activeDiet = 'all';
  categoryTabs.forEach((btn) => {
    const isAll = btn.dataset.category === 'all';
    btn.classList.toggle('active', isAll);
    btn.setAttribute('aria-selected', String(isAll));
  });
  dietButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.diet === 'all'));
  renderMenu();
});

// Delegate Add / Increase / Decrease clicks on menu cards
menuGrid?.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;

  const { action, id } = button.dataset;
  if (!id) return;

  updateCartQuantity(id, action === 'increase' ? 1 : -1);
});

// ============================================================================
// ORDER CART & WHATSAPP MESSAGE BUILDER
// ============================================================================
function updateCartQuantity(itemId, delta) {
  const nextQty = (cart[itemId] || 0) + delta;
  if (nextQty <= 0) {
    delete cart[itemId];
  } else {
    cart[itemId] = nextQty;
  }
  renderMenu();
  updateOrderSummary();
}

function buildWhatsappOrderUrl(items, total) {
  const lines = [
    'Hello Food Gharana! I would like to place a homemade food order (Malad West):',
    '',
  ];
  items.forEach(({ item, qty }) => {
    lines.push(`• ${item.name} x ${qty} = ₹${item.price * qty}`);
  });
  lines.push('', `Estimated Total: ₹${total}`, 'Delivery Area (Malad West): ');

  const encodedText = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
}

function updateOrderSummary() {
  const selectedEntries = Object.entries(cart)
    .map(([id, qty]) => {
      const item = MENU_ITEMS.find((m) => m.id === id);
      return item ? { item, qty } : null;
    })
    .filter(Boolean);

  const totalCount = selectedEntries.reduce((sum, entry) => sum + entry.qty, 0);
  const totalAmount = selectedEntries.reduce((sum, entry) => sum + entry.item.price * entry.qty, 0);

  if (totalCount === 0) {
    orderTrayTrigger.hidden = true;
    if (!orderDrawerBackdrop.hidden) {
      orderDrawerBackdrop.hidden = true;
    }
    return;
  }

  orderTrayTrigger.hidden = false;
  orderCountBadge.textContent = totalCount === 1 ? '1 item' : `${totalCount} items`;
  orderTotalBadge.textContent = `₹${totalAmount}`;
  drawerSubtotal.textContent = `₹${totalAmount}`;
  drawerWhatsappLink.href = buildWhatsappOrderUrl(selectedEntries, totalAmount);

  orderDrawerItems.innerHTML = selectedEntries
    .map(
      ({ item, qty }) => `
        <div class="drawer-item-row">
          <div class="drawer-item-info">
            <strong>${item.name}</strong>
            <span class="tabular-nums">&#8377;${item.price} &times; ${qty} = &#8377;${item.price * qty}</span>
          </div>
          <div class="qty-stepper">
            <button type="button" class="qty-btn" data-drawer-action="decrease" data-id="${item.id}" aria-label="Remove one ${item.name}">&minus;</button>
            <span class="qty-value tabular-nums">${qty}</span>
            <button type="button" class="qty-btn" data-drawer-action="increase" data-id="${item.id}" aria-label="Add one more ${item.name}">+</button>
          </div>
        </div>
      `
    )
    .join('');
}

orderDrawerItems?.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-drawer-action]');
  if (!button) return;

  const action = button.dataset.drawerAction;
  const id = button.dataset.id;
  if (!id) return;

  updateCartQuantity(id, action === 'increase' ? 1 : -1);
});

orderTrayTrigger?.addEventListener('click', () => {
  orderDrawerBackdrop.hidden = false;
});

closeOrderDrawer?.addEventListener('click', () => {
  orderDrawerBackdrop.hidden = true;
});

orderDrawerBackdrop?.addEventListener('click', (event) => {
  if (event.target === orderDrawerBackdrop) {
    orderDrawerBackdrop.hidden = true;
  }
});

clearOrderBtn?.addEventListener('click', () => {
  cart = {};
  renderMenu();
  updateOrderSummary();
});

// ============================================================================
// GALLERY LIGHTBOX
// ============================================================================
function openLightbox(index) {
  currentGalleryIndex = (index + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
  const photo = GALLERY_ITEMS[currentGalleryIndex];
  lightboxImage.src = photo.src;
  lightboxImage.alt = photo.alt;
  lightboxCaption.textContent = photo.caption;
  lightboxBackdrop.hidden = false;
}

galleryCards.forEach((card) => {
  card.addEventListener('click', () => {
    const idx = Number(card.dataset.index || 0);
    openLightbox(idx);
  });
});

closeLightbox?.addEventListener('click', () => {
  lightboxBackdrop.hidden = true;
});

lightboxPrev?.addEventListener('click', () => openLightbox(currentGalleryIndex - 1));
lightboxNext?.addEventListener('click', () => openLightbox(currentGalleryIndex + 1));

lightboxBackdrop?.addEventListener('click', (event) => {
  if (event.target === lightboxBackdrop) {
    lightboxBackdrop.hidden = true;
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    lightboxBackdrop.hidden = true;
    orderDrawerBackdrop.hidden = true;
  } else if (!lightboxBackdrop.hidden && event.key === 'ArrowLeft') {
    openLightbox(currentGalleryIndex - 1);
  } else if (!lightboxBackdrop.hidden && event.key === 'ArrowRight') {
    openLightbox(currentGalleryIndex + 1);
  }
});

// ============================================================================
// CONTACT FORM VALIDATION & SUBMISSION
// ============================================================================
function validateContactForm() {
  const nameInput = document.getElementById('customerName');
  const phoneInput = document.getElementById('customerPhone');
  const emailInput = document.getElementById('customerEmail');
  const messageInput = document.getElementById('customerMessage');

  const nameError = document.getElementById('nameError');
  const phoneError = document.getElementById('phoneError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  let isValid = true;

  // Validate Name
  if (nameInput.value.trim().length < 2) {
    nameError.textContent = 'Please enter your full name.';
    nameInput.classList.add('invalid');
    isValid = false;
  } else {
    nameError.textContent = '';
    nameInput.classList.remove('invalid');
  }

  // Validate Phone (at least 10 digits)
  const digitsOnly = phoneInput.value.replace(/\D/g, '');
  if (digitsOnly.length < 10) {
    phoneError.textContent = 'Please enter a valid 10-digit phone or WhatsApp number.';
    phoneInput.classList.add('invalid');
    isValid = false;
  } else {
    phoneError.textContent = '';
    phoneInput.classList.remove('invalid');
  }

  // Validate Email (optional field, validate format if entered)
  const emailVal = emailInput.value.trim();
  if (emailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
    emailError.textContent = 'Please enter a valid email address.';
    emailInput.classList.add('invalid');
    isValid = false;
  } else {
    emailError.textContent = '';
    emailInput.classList.remove('invalid');
  }

  // Validate Message
  if (messageInput.value.trim().length < 8) {
    messageError.textContent = 'Please include a short note about your enquiry.';
    messageInput.classList.add('invalid');
    isValid = false;
  } else {
    messageError.textContent = '';
    messageInput.classList.remove('invalid');
  }

  return isValid;
}

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  formSuccess.hidden = true;

  if (!validateContactForm()) {
    return;
  }

  formSuccess.hidden = false;
  contactForm.reset();
});

sendFormWhatsappBtn?.addEventListener('click', () => {
  const name = document.getElementById('customerName').value.trim() || 'Guest';
  const phone = document.getElementById('customerPhone').value.trim();
  const enquiryType = document.getElementById('enquiryType').value;
  const message = document.getElementById('customerMessage').value.trim();

  const text = [
    `Hello Food Gharana!`,
    `Name: ${name}`,
    phone ? `Phone: ${phone}` : '',
    `Enquiry Type: ${enquiryType}`,
    message ? `Details: ${message}` : 'I would like to know more about your homemade food options in Malad West.',
  ]
    .filter(Boolean)
    .join('\n');

  const link = document.createElement('a');
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.click();
});

// ============================================================================
// GRACEFUL IMAGE FALLBACK HANDLER
// ============================================================================
function attachImageFallbacks(root = document) {
  root.querySelectorAll('img').forEach((img) => {
    if (img.dataset.fallbackBound === 'true') return;
    img.dataset.fallbackBound = 'true';
    img.addEventListener('error', () => {
      img.style.display = 'none';
    });
  });
}

// ============================================================================
// INITIALIZE PAGE
// ============================================================================
document.getElementById('currentYear').textContent = String(new Date().getFullYear());
attachImageFallbacks(document);
renderMenu();
updateOrderSummary();
