// app.js
// Interactive client logic for Mocha Art Cafe Single Page Application

document.addEventListener("DOMContentLoaded", () => {
  // Initialize state
  initTheme();
  initRouter();
  initMenu();
  initForms();
  initCarousel();
  initGallery();
  initMobileMenu();
});

/* ==========================================================================
   1. THEME MANAGER (DARK / LIGHT TOGGLE)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  const icon = themeToggle.querySelector("i");
  const savedTheme = localStorage.getItem("mocha-cafe-theme");

  // Check saved preference or system default
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    if (icon) {
      icon.className = "fa-solid fa-moon";
    }
  } else {
    document.body.classList.remove("light-theme");
    if (icon) {
      icon.className = "fa-solid fa-sun";
    }
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    
    if (isLight) {
      localStorage.setItem("mocha-cafe-theme", "light");
      if (icon) icon.className = "fa-solid fa-moon";
    } else {
      localStorage.setItem("mocha-cafe-theme", "dark");
      if (icon) icon.className = "fa-solid fa-sun";
    }
  });
}

/* ==========================================================================
   2. CLIENT-SIDE ROUTER (SPA HASH NAVIGATION)
   ========================================================================== */
function initRouter() {
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page-section");
  const header = document.querySelector(".header");

  function handleRoute() {
    let hash = window.location.hash || "#home";
    
    // Check validation of hashes
    const validHashes = ["#home", "#menu", "#booking", "#birthdays", "#gallery", "#contact"];
    if (!validHashes.includes(hash)) {
      hash = "#home";
    }

    // Toggle nav active classes
    navLinks.forEach(link => {
      if (link.getAttribute("href") === hash) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Toggle page active classes with transitions
    pages.forEach(page => {
      const id = "#" + page.getAttribute("id");
      if (id === hash) {
        page.classList.add("active");
        // Scroll to top of the page on route
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        page.classList.remove("active");
      }
    });

    // Close mobile menu if open
    const navMenu = document.getElementById("nav-menu");
    const menuToggleIcon = document.getElementById("menu-toggle-icon");
    if (navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      if (menuToggleIcon) menuToggleIcon.className = "fa-solid fa-bars";
    }
  }

  // Monitor scroll for sticky header shadow and height
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  window.addEventListener("hashchange", handleRoute);
  // Initial load execution
  handleRoute();
}

/* ==========================================================================
   3. MENU CONTROLLER (SEARCH & DYNAMIC FILTERS)
   ========================================================================== */
function initMenu() {
  const menuContainer = document.getElementById("menu-grid-container");
  const searchInput = document.getElementById("menu-search");
  const filterChipsContainer = document.getElementById("category-chips");
  const submenuContainer = document.getElementById("submenu-chips");

  if (!menuContainer || !window.menuData) return;

  let activeCategory = "All";
  let activeSubCategory = "All";
  let searchQuery = "";

  // Dynamic Category Extraction (Categories list)
  const categories = ["All", ...new Set(window.menuData.map(item => item.category))];

  // Render Filter Chips
  function renderCategoryChips() {
    filterChipsContainer.innerHTML = "";
    categories.forEach(cat => {
      const chip = document.createElement("button");
      chip.className = `filter-chip ${cat === activeCategory ? "active" : ""}`;
      chip.textContent = cat;
      chip.addEventListener("click", () => {
        activeCategory = cat;
        activeSubCategory = "All"; // Reset subcategory when category changes
        searchQuery = "";
        if (searchInput) searchInput.value = "";
        
        // Render updates
        renderCategoryChips();
        updateSubmenuVisibility();
        renderMenuCards();
      });
      filterChipsContainer.appendChild(chip);
    });
  }

  // Manage Subcategory display (specifically for drinks category)
  function updateSubmenuVisibility() {
    if (activeCategory === "Coffee & Beverages") {
      submenuContainer.classList.add("active");
      renderSubmenuChips();
    } else {
      submenuContainer.classList.remove("active");
    }
  }

  // Render subcategories inside Coffee & Beverages
  function renderSubmenuChips() {
    submenuContainer.innerHTML = "";
    
    // Filter drinks only
    const drinks = window.menuData.filter(item => item.category === "Coffee & Beverages");
    const subCategories = ["All", ...new Set(drinks.map(item => item.subCategory).filter(Boolean))];

    subCategories.forEach(sub => {
      const chip = document.createElement("button");
      chip.className = `submenu-chip ${sub === activeSubCategory ? "active" : ""}`;
      chip.textContent = sub;
      chip.addEventListener("click", () => {
        activeSubCategory = sub;
        renderSubmenuChips();
        renderMenuCards();
      });
      submenuContainer.appendChild(chip);
    });
  }

  // Main Card Generator
  function renderMenuCards() {
    menuContainer.innerHTML = "";

    // Apply active filter layers
    const filteredItems = window.menuData.filter(item => {
      // Category Match
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      
      // SubCategory Match (if in drinks)
      const matchesSubCategory = 
        activeCategory !== "Coffee & Beverages" || 
        activeSubCategory === "All" || 
        item.subCategory === activeSubCategory;

      // Text Search Match
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSubCategory && matchesSearch;
    });

    // Handle Empty Search
    if (filteredItems.length === 0) {
      menuContainer.innerHTML = `
        <div class="menu-empty">
          <i class="fa-solid fa-mug-hot"></i>
          <h3>No items found matching your filters</h3>
          <p>Try searching for something else or reset the categories.</p>
        </div>
      `;
      return;
    }

    // Map through array and inject HTML cards
    filteredItems.forEach(item => {
      const card = document.createElement("div");
      card.className = "menu-card";
      
      // Select appropriate coffee-themed illustrations/images based on categories
      let imageSrc = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600"; // Fallback coffee
      if (item.category === "Coffee & Beverages") {
        if (item.subCategory === "Hot Coffee") {
          imageSrc = "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600";
        } else if (item.subCategory === "Cold Coffee") {
          imageSrc = "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600";
        } else if (item.subCategory === "Mocktails") {
          imageSrc = "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600";
        } else if (item.subCategory === "Milkshakes") {
          imageSrc = "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600";
        } else if (item.subCategory === "Desserts") {
          imageSrc = "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600";
        }
      } else if (item.category === "Pizzas") {
        imageSrc = "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600";
      } else if (item.category === "Pastas") {
        imageSrc = "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600";
      } else if (item.category === "Burgers") {
        imageSrc = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600";
      } else if (item.category === "Sandwiches") {
        imageSrc = "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600";
      } else if (item.category === "Starters" || item.category === "Sides") {
        if (item.name.toLowerCase().includes("prawn") || item.name.toLowerCase().includes("fish")) {
          imageSrc = "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600";
        } else {
          imageSrc = "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600";
        }
      } else if (item.category === "Tacos" || item.category === "Quesadillas" || item.category === "Burritos & Bowls") {
        imageSrc = "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=600";
      } else if (item.category === "Momos") {
        imageSrc = "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600";
      } else if (item.category === "Wings") {
        imageSrc = "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=600";
      } else if (item.category === "Rice & Sizzlers") {
        imageSrc = "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600";
      }

      const isVeg = item.type === "veg";
      const dietBadgeClass = isVeg ? "veg" : "non-veg";
      const dietLabel = isVeg ? "Veg" : "Non-Veg";
      const popularBadge = item.popular ? `<span class="popular-badge">Chef's Pick</span>` : "";

      card.innerHTML = `
        <div class="menu-card-img">
          ${popularBadge}
          <span class="diet-badge ${dietBadgeClass}">
            <span class="diet-icon"></span>
            <span>${dietLabel}</span>
          </span>
          <img src="${imageSrc}" alt="${item.name}" loading="lazy">
        </div>
        <div class="menu-card-info">
          <div class="menu-card-header">
            <h3 class="menu-card-title">${item.name}</h3>
            <span class="menu-card-price">₹${item.price}</span>
          </div>
          <p class="menu-card-desc">${item.description}</p>
        </div>
      `;
      menuContainer.appendChild(card);
    });
  }

  // Input Monitor for Search bar
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderMenuCards();
  });

  // Init Menu rendering
  renderCategoryChips();
  renderMenuCards();
}

/* ==========================================================================
   4. FORM RESERVATION & ENQUIRIES (VALIDATION & SUCCESS MODAL)
   ========================================================================== */
function initForms() {
  const bookingForm = document.getElementById("booking-form");
  const birthdayForm = document.getElementById("birthday-form");
  const contactForm = document.getElementById("contact-form");
  const modal = document.getElementById("success-modal");
  const modalBody = document.getElementById("modal-body-text");
  const modalClose = document.getElementById("modal-close-btn");

  if (!modal) return;

  function showSuccessModal(title, text) {
    const modalTitle = modal.querySelector("h3");
    if (modalTitle) modalTitle.textContent = title;
    if (modalBody) modalBody.textContent = text;
    
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Block scrolling
  }

  function hideSuccessModal() {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Reactivate scroll
  }

  // Modal actions
  modalClose.addEventListener("click", hideSuccessModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) hideSuccessModal();
  });

  // Table reservation logic
  if (bookingForm) {
    // Prevent selecting yesterday dates in date input
    const dateInput = bookingForm.querySelector('input[type="date"]');
    if (dateInput) {
      const today = new Date().toISOString().split("T")[0];
      dateInput.min = today;
    }

    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("book-name").value.trim();
      const phone = document.getElementById("book-phone").value.trim();
      const date = document.getElementById("book-date").value;
      const time = document.getElementById("book-time").value;
      const guests = document.getElementById("book-guests").value;

      // Custom Validation Check
      if (!name || !phone || !date || !time) {
        alert("Please fill in all required fields.");
        return;
      }

      const successTitle = "Table Reserved Successfully!";
      const successText = `Thank you, ${name}! Your table reservation for ${guests} guest(s) on ${date} at ${time} has been registered. Your reservation will be confirmed by our team shortly via phone at ${phone}.`;
      
      showSuccessModal(successTitle, successText);
      bookingForm.reset();
    });
  }

  // Birthday planning inquiry logic
  if (birthdayForm) {
    const bdayDateInput = birthdayForm.querySelector('input[type="date"]');
    if (bdayDateInput) {
      const today = new Date().toISOString().split("T")[0];
      bdayDateInput.min = today;
    }

    birthdayForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("bday-name").value.trim();
      const phone = document.getElementById("bday-phone").value.trim();
      const date = document.getElementById("bday-date").value;
      const guests = document.getElementById("bday-guests").value;
      const requirements = document.getElementById("bday-req").value.trim();

      if (!name || !phone || !date) {
        alert("Please fill in name, phone, and date.");
        return;
      }

      const successTitle = "Celebration Planned!";
      const successText = `Thank you, ${name}! We've received your request to plan a birthday party on ${date} for ${guests} guests. Our specialized events planner will get in touch with you at ${phone} to design customized decorations and food packages.`;

      showSuccessModal(successTitle, successText);
      birthdayForm.reset();
    });
  }

  // General contact form logic
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const message = document.getElementById("contact-msg").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        return;
      }

      const successTitle = "Message Dispatched!";
      const successText = `Hello ${name}, thank you for writing to us. We have received your message and will respond to your email at ${email} shortly.`;

      showSuccessModal(successTitle, successText);
      contactForm.reset();
    });
  }
}

/* ==========================================================================
   5. CLIENT REVIEWS TESTIMONIAL CAROUSEL
   ========================================================================== */
function initCarousel() {
  const track = document.getElementById("testimonial-track");
  const dotsContainer = document.getElementById("carousel-dots");
  
  if (!track || !dotsContainer) return;

  const slides = Array.from(track.children);
  let currentIndex = 0;
  let autoPlayTimer;

  // Build Pagination Dots
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = `carousel-dot ${index === 0 ? "active" : ""}`;
    dot.addEventListener("click", () => {
      goToSlide(index);
      resetAutoplay();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  function goToSlide(index) {
    currentIndex = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    
    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= slides.length) {
      nextIndex = 0;
    }
    goToSlide(nextIndex);
  }

  function startAutoplay() {
    autoPlayTimer = setInterval(nextSlide, 5000); // Trigger every 5s
  }

  function resetAutoplay() {
    clearInterval(autoPlayTimer);
    startAutoplay();
  }

  // Run autoplay
  startAutoplay();
}

/* ==========================================================================
   6. ART PHOTO GALLERY LIGHTBOX SYSTEM
   ========================================================================== */
function initGallery() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");

  if (!lightbox || !lightboxImg) return;

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
    setTimeout(() => {
      lightboxImg.src = "";
    }, 300);
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Handle escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
}

/* ==========================================================================
   7. MOBILE NAVIGATION SYSTEM (HAMBURGER DRAWER)
   ========================================================================== */
function initMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const menuToggleIcon = document.getElementById("menu-toggle-icon");

  if (!menuToggle || !navMenu || !menuToggleIcon) return;

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    
    // Toggle active icons
    if (navMenu.classList.contains("active")) {
      menuToggleIcon.className = "fa-solid fa-xmark";
    } else {
      menuToggleIcon.className = "fa-solid fa-bars";
    }
  });
}
