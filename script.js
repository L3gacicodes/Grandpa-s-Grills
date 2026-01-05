// Menu data
const menuCategories = [
  {
    id: "shawarma",
    name: "Shawarma",
    icon: "🍖",
    subtitle: "Perfectly seasoned, slow-roasted, wrapped with love",
    items: [
      { name: "Chicken Shawarma", description: "Juicy, tender chicken marinated in aromatic Nigerian spices,sharwama wey go Harvard.", price: "₦3,500" },
      { name: "Beef Shawarma", description: "Premium cuts of beef, seasoned with our 7-spice blend and grilled to succulent perfection. Layered with cabbage, our delicious and creamy sauce, and wrapped in warm, fluffy pita bread.", price: "₦3,500" },
      { name: "Mini Shawarma", description: "All the flavor in a perfectly portioned package! Ideal for a quick bite or when you're craving that authentic shawarma taste without the commitment and sausage. Same premium ingredients, bite-sized delight.", price: "₦3,500" },
      { name: "Special Shawarma", description: "The chef's masterpiece — featuring double-stacked premium meat and chicken, a single sausage, caramelized onions, pepper, and Grandpa's legendary secret sauce that's been perfected over three generations.", price: "₦3,800" },
      { name: "Big Daddy Shawarma", description: "Go big or go home! This monster wrap is loaded with double meat and chicken, all the veggies, two sausages, and served with a side of fries. A meal that commands respect.", price: "₦4,500" },
    ],
  },
  {
    id: "burger",
    name: "Burger",
    icon: "🍔",
    subtitle: "Flame-grilled patties, juicy and irresistible",
    items: [
      { name: "Beef Burger", description: "100% premium beef, flame-grilled to your preference, topped with vine-ripened tomatoes,cucumbers and our world class sauce. Served on a toasted bun.", price: "₦3,600" },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    icon: "🥪",
    subtitle: "Hearty handhelds for every appetite",
    items: [
      { name: "Meshai (Fried Egg)", description: "The legendary breakfast sandwich the way the aboks intended it to be Two perfectly fried eggs with crispy edge, Pressed between golden-toasted bread.", price: "₦2,500" },
      { name: "Chicken Sandwich", description: "Tender, herb-marinated chicken in beteween toasted bread and our signature sauce .", price: "₦3,000" },
      { name: "Scrambled Egg Sandwich", description: "Silky,scrambled egg between lightly toasted bread.", price: "₦3,000" },
    ],
  },
  {
    id: "noodles",
    name: "Noodles",
    icon: "🍜",
    subtitle: "Nigerian goodness, street food style",
    items: [
      { name: "Noodles and Egg", description: "Springy egg noodles made at high heat with farm-fresh scrambled eggs or boiled eggs.", price: "₦4,000" },
      { name: "Noodles and Chicken", description: "Delicious stir-fried noodles and chicken, just the way mum makes it.", price: "₦2,800" },
    ],
  },
  {
    id: "pancakes",
    name: "Pancakes",
    icon: "🥞",
    subtitle: "Fluffy stacks of golden sweetness",
    items: [
      { name: "Pancakes", description: "Six pieces of delicious pancakes. Pure comfort on a plate.", price: "₦2,500" },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    icon: "🥤",
    subtitle: "Refreshing sips to complete your meal",
    items: [
      { name: "Milkshake", description: "Ultra-thick, creamy milkshakes made with premium Banana, milk and Grandpa's special touch — the perfect sweet finish.", price: "₦3000" },
      { name: "Smoothie", description: "Vibrant, refreshing blends of Banana, pineapple, apple, watermelon and milk. Packed with vitamins and natural goodness.", price: "₦2,200" },
      { name: "Yoghurt", description: "Thick, creamy vanilla yoghurt. Light, healthy, and absolutely satisfying.", price: "₦2,800" },
    ],
  },
];

// Food images mapping - Using local assets
const foodImages = {
  "Chicken Shawarma": "assets/ss.jpg",
  "Beef Shawarma": "assets/bs.jpg",
  "Mini Shawarma": "assets/cs2.jpg",
  "Special Shawarma": "assets/ss.jpg",
  "Big Daddy Shawarma": "assets/bds.jpg",
  "Beef Burger": "assets/bb.jpg",
  "Meshai (Fried Egg)": "assets/mss.jpg",
  "Chicken Sandwich": "assets/cs2.jpg",
  "Scrambled Egg Sandwich": "assets/ses.jpg",
  "Noodles and Egg": "assets/ne.jpg",
  "Noodles and Chicken": "assets/nc.jpg",
  "Pancakes": "assets/pan.jpg",
  "Milkshake": "assets/milkshake.jpg",
  "Smoothie": "assets/smoothie.jpg",
  "Yoghurt": "assets/yo.jpg",
};

// Cart state
let cart = [];

const extras = {
  "Extra Sausage": { price: "₦500" },
};


// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTheme();
  initMobileMenu();
  initHero();
  renderMenu();
  initCart();
  initExtras();   // 👈 ADD THIS LINE
  initSmoothScroll();
  updateYear();

});

// Navbar scroll effect
function initNavbar() {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Theme toggle
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  
  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
  
  if (isDark) {
    document.documentElement.classList.add('dark');
  }
  
  updateThemeIcons(isDark);
  
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      updateThemeIcons(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      updateThemeIcons(true);
    }
  };
  
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);
}

function updateThemeIcons(isDark) {
  const sunIcons = document.querySelectorAll('.sun-icon');
  const moonIcons = document.querySelectorAll('.moon-icon');
  
  sunIcons.forEach(icon => {
    icon.classList.toggle('active', !isDark);
  });
  
  moonIcons.forEach(icon => {
    icon.classList.toggle('active', isDark);
  });
}

// Mobile menu
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  
  const openMenu = () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  
  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  };
  
  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (menuClose) menuClose.addEventListener('click', closeMenu);
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Close on backdrop click
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      closeMenu();
    }
  });
}

// Hero scroll to menu
function initHero() {
  const viewMenuBtn = document.getElementById('view-menu-btn');
  
  if (viewMenuBtn) {
    viewMenuBtn.addEventListener('click', () => {
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// Render menu
function renderMenu() {
  const menuContainer = document.getElementById('menu-categories');
  if (!menuContainer) return;
  
  menuContainer.innerHTML = menuCategories.map((category, catIndex) => `
    <div class="menu-category">
      <div class="category-header">
        <div class="category-icon">
          <span style="font-size: 1.75rem;">${category.icon}</span>
        </div>
        <div>
          <h3 class="category-title">${category.name}</h3>
          <p class="category-subtitle">${category.subtitle}</p>
        </div>
      </div>
      <div class="food-grid">
        ${category.items.map((item, index) => createFoodCard(item, index + catIndex * 2)).join('')}
      </div>
    </div>
  `).join('');
  
  // Attach event listeners to food cards
  attachFoodCardListeners();
}

function createFoodCard(item, delay) {
  const image = foodImages[item.name] || "assets/bb.jpg";
  const quantity = getItemQuantity(item.name);
  
  return `
    <div class="food-card-wrapper" data-name="${item.name}" style="animation-delay: ${delay * 0.05}s">
      <div class="food-card-inner">
        <div class="food-card-front">
          <div class="food-card-image">
            <img src="${image}" alt="${item.name}" loading="lazy" decoding="async">
            ${quantity > 0 ? `<div class="food-card-quantity">${quantity}</div>` : ''}
          </div>
          <div class="food-card-content">
            <h3 class="food-card-name">${item.name}</h3>
            ${item.price ? `<p class="food-card-price">${item.price}</p>` : ''}
            <p class="food-card-hint">Tap for details</p>
          </div>
          ${item.price ? `
            <button class="food-card-add-btn default" data-name="${item.name}" data-price="${item.price}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Add
            </button>
          ` : ''}
          <div class="food-card-accent"></div>
        </div>
        <div class="food-card-back">
          <div class="food-card-accent"></div>
          <div class="food-card-back-content">
            <h3 class="food-card-back-name">${item.name}</h3>
            ${item.price ? `
              <div class="food-card-back-price-badge">${item.price}</div>
            ` : ''}
            <p class="food-card-back-description">${item.description}</p>
          </div>
          ${item.price ? `
            <button class="food-card-back-add-btn default" data-name="${item.name}" data-price="${item.price}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Add to Order
            </button>
          ` : ''}
          <p class="food-card-back-hint">Tap to flip back</p>
          <div class="food-card-accent"></div>
        </div>
      </div>
    </div>
  `;
}

function attachFoodCardListeners() {
  const cardWrappers = document.querySelectorAll('.food-card-wrapper');
  
  cardWrappers.forEach(wrapper => {
    // Flip on click
    wrapper.addEventListener('click', (e) => {
      if (!e.target.closest('button')) {
        wrapper.classList.toggle('flipped');
      }
    });
    
    // Add to cart buttons
    const addButtons = wrapper.querySelectorAll('[data-name][data-price]');
    addButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const name = btn.getAttribute('data-name');
        const price = btn.getAttribute('data-price');
        addToCart(name, price);
        
        // Show added state
        btn.classList.remove('default');
        btn.classList.add('added');
        btn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          ${btn.classList.contains('food-card-back-add-btn') ? 'Added to Order!' : 'Added!'}
        `;
        
        setTimeout(() => {
          btn.classList.remove('added');
          btn.classList.add('default');
          btn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            ${btn.classList.contains('food-card-back-add-btn') ? 'Add to Order' : 'Add'}
          `;
        }, 1000);
        
        // Update quantity badge
        updateFoodCardQuantity(name);
      });
    });
  });
}


function updateFoodCardQuantity(name) {
  const quantity = getItemQuantity(name);
  const wrapper = document.querySelector(`.food-card-wrapper[data-name="${name}"]`);
  if (!wrapper) return;
  
  const quantityBadge = wrapper.querySelector('.food-card-quantity');
  if (quantity > 0) {
    if (quantityBadge) {
      quantityBadge.textContent = quantity;
    } else {
      const imageDiv = wrapper.querySelector('.food-card-image');
      if (imageDiv) {
        imageDiv.insertAdjacentHTML('beforeend', `<div class="food-card-quantity">${quantity}</div>`);
      }
    }
  } else {
    if (quantityBadge) {
      quantityBadge.remove();
    }
  }
}

// Cart functions
function initCart() {
  loadCart();
  updateCartUI();
  
  const cartButton = document.getElementById('cart-button');
  const cartClose = document.getElementById('cart-close');
  const cartBackdrop = document.getElementById('cart-backdrop');
  const cartDrawer = document.getElementById('cart-drawer');
  const clearCartBtn = document.getElementById('clear-cart');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  if (cartButton) {
    cartButton.addEventListener('click', () => {
      cartDrawer.classList.add('open');
      cartBackdrop.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  }
  
  const closeCart = () => {
    cartDrawer.classList.remove('open');
    cartBackdrop.classList.remove('show');
    document.body.style.overflow = '';
  };
  
  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);
  if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);
  if (checkoutBtn) checkoutBtn.addEventListener('click', handleCheckout);
}

function initExtras() {
  const extraButtons = document.querySelectorAll(".extra-protein");

  if (!extraButtons.length) return;

  extraButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const extraName = btn.getAttribute("data-extra");
      const extra = extras[extraName];
      if (!extra) return;

      addToCart(extraName, extra.price);

      updateExtraButtons(); // ✅ sync button immediately
    });
  });
}


function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  
  saveCart();
  updateCartUI();
  updateFoodCardQuantity(name);
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  saveCart();
  updateCartUI();
  updateFoodCardQuantity(name);
}

function updateCartQuantity(name, quantity) {
  if (quantity <= 0) {
    removeFromCart(name);
    return;
  }
  
  const item = cart.find(item => item.name === name);
  if (item) {
    item.quantity = quantity;
    saveCart();
    updateCartUI();
    updateFoodCardQuantity(name);
  }
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  
  // Update all food card quantities
  menuCategories.forEach(category => {
    category.items.forEach(item => {
      updateFoodCardQuantity(item.name);
    });
  });
}

function getItemQuantity(name) {
  const item = cart.find(item => item.name === name);
  return item ? item.quantity : 0;
}

function getTotalItems() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getTotalPrice() {
  return cart.reduce((sum, item) => {
    const priceNum = parseFloat(item.price.replace(/[₦,]/g, '')) || 0;
    return sum + priceNum * item.quantity;
  }, 0);
}

/* 👇 ADD THIS DIRECTLY AFTER */
function updateExtraButtons() {
  document.querySelectorAll(".extra-protein").forEach(btn => {
    const extraName = btn.getAttribute("data-extra");
    const quantity = getItemQuantity(extraName);

    if (quantity > 0) {
      btn.classList.add("added");
      btn.textContent = `Added (${quantity})`;
    } else {
      btn.classList.remove("added");
      btn.textContent = "Add";
    }
  });
}
function updateCartUI() {
  const cartBadge = document.getElementById('cart-badge');
  const cartItems = document.getElementById('cart-items');
  const cartFooter = document.getElementById('cart-footer');
  const cartTotalPrice = document.getElementById('cart-total-price');
  
  const totalItems = getTotalItems();
    
  // Update badge
  if (cartBadge) {
    if (totalItems > 0) {
      cartBadge.textContent = totalItems;
      cartBadge.classList.add('show');
    } else {
      cartBadge.classList.remove('show');
    }
  }
  
  // Update cart items
  if (cartItems) {
    if (cart.length === 0) {
      cartItems.innerHTML = `
        <div class="cart-empty">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <p>Your cart is empty</p>
          <p>Add items from the menu to get started</p>
        </div>
      `;
      if (cartFooter) cartFooter.style.display = 'none';
    } else {
      cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-info">
            <h4 class="cart-item-name">${item.name}</h4>
            <p class="cart-item-price">${item.price}</p>
          </div>
          <div class="cart-item-controls">
            <button class="cart-item-btn" onclick="updateCartQuantity('${item.name}', ${item.quantity - 1})">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <span class="cart-item-quantity">${item.quantity}</span>
            <button class="cart-item-btn" onclick="updateCartQuantity('${item.name}', ${item.quantity + 1})">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart('${item.name}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      `).join('');
      if (cartFooter) cartFooter.style.display = 'block';
    }
  }
  
  // Update total
  if (cartTotalPrice) {
    cartTotalPrice.textContent = `₦${getTotalPrice().toLocaleString()}`;
  }
  updateExtraButtons();}

function handleCheckout() {
  if (cart.length === 0) return;
  
  // Convert cart items to WhatsApp-friendly list
  let message = "📋 *New Order List*\n\n";
  
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} x${item.quantity} - ${item.price}\n`;
  });
  
  message += "\n";
  message += `💰 *Total: ₦${getTotalPrice().toLocaleString()}*\n\n`;
  message += "🔥 Sent from Grandpa's Grills Website";
  
  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // WhatsApp link
  const whatsappNumber = "2349169996649";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  // Open WhatsApp
  window.open(whatsappURL, "_blank");
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
  const saved = localStorage.getItem('cart');
  if (saved) {
    cart = JSON.parse(saved);
  }
}

// Make functions available globally for onclick handlers
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;

// Smooth scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Update year
function updateYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Update WhatsApp link
document.addEventListener('DOMContentLoaded', () => {
  const whatsappLink = document.getElementById('whatsapp-link');
  if (whatsappLink) {
    const whatsappNumber = "2349169996649";
    whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I'd like to place an order from Grandpa's Grills.")}`;
  }
});

