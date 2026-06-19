import { useEffect, useMemo, useState } from "react";
import menuData from "./data/menuData.json";
import {
  saveTableBooking,
  saveBirthdayBooking,
  saveContactMessage,
  getTableBookings,
  getBirthdayBookings,
  getContactMessages
} from "./services/firestoreService";
import {
  loginWithEmail,
  signUpWithEmail,
  logoutUser,
  onAuthStateSubscription
} from "./services/authService";

const navItems = [
  { id: "home", label: "Home" },
  { id: "menu", label: "Menu" },
  { id: "booking", label: "Book a Table" },
  { id: "birthdays", label: "Birthdays" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
  { id: "admin", label: "Staff Portal" }
];

const imageMap = {
  "Coffee & Beverages": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=900",
  Pizzas: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=900",
  Pastas: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=900",
  Burgers: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=900",
  Starters: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=900",
  Sides: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=900",
  Momos: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=900",
  Quesadillas: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=900",
  "Burritos & Bowls": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=900"
};

const galleryItems = [
  {
    title: "Craft Coffee",
    category: "Cafe Vibe",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=900"
  },
  {
    title: "Cozy Spaces",
    category: "Cafe Vibe",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=900"
  },
  {
    title: "Sip & Paint",
    category: "Art & Workshops",
    image: "/assets/paint.png"
  },
  {
    title: "Artisan Pasta",
    category: "Gourmet Plates",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=900"
  },
  {
    title: "Latte Art",
    category: "Cafe Vibe",
    image: "/assets/latte.png"
  },
  {
    title: "Birthday Setup",
    category: "Cafe Vibe",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=900"
  }
];

function App() {
  const [activePage, setActivePage] = useState("home");
  const [isLight, setIsLight] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateSubscription((user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("mocha-cafe-theme");
    if (savedTheme === "light") setIsLight(true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light-theme", isLight);
    localStorage.setItem("mocha-cafe-theme", isLight ? "light" : "dark");
  }, [isLight]);

  function goToPage(pageId) {
    setActivePage(pageId);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Header
        activePage={activePage}
        goToPage={goToPage}
        isLight={isLight}
        setIsLight={setIsLight}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main>
        {activePage === "home" && <HomePage goToPage={goToPage} />}
        {activePage === "menu" && <MenuPage />}
        {activePage === "booking" && <BookingPage setModal={setModal} />}
        {activePage === "birthdays" && <BirthdaysPage setModal={setModal} />}
        {activePage === "gallery" && <GalleryPage setLightbox={setLightbox} />}
        {activePage === "contact" && <ContactPage setModal={setModal} />}
        {activePage === "admin" && (
          currentUser ? (
            <DashboardPage currentUser={currentUser} setModal={setModal} />
          ) : (
            <LoginPage setModal={setModal} />
          )
        )}
      </main>

      <Footer goToPage={goToPage} />
      <FloatingWhatsApp />

      {modal && <SuccessModal modal={modal} close={() => setModal(null)} />}
      {lightbox && <Lightbox item={lightbox} close={() => setLightbox(null)} />}
    </>
  );
}

function Header({ activePage, goToPage, isLight, setIsLight, mobileOpen, setMobileOpen }) {
  return (
    <header className="header">
      <div className="container nav-wrap">
        <button className="logo" onClick={() => goToPage("home")}>
          <span className="logo-mark">☕</span>
          <span>Mocha Arts Cafe</span>
        </button>

        <nav className={mobileOpen ? "nav active" : "nav"}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={activePage === item.id ? "nav-link active" : "nav-link"}
              onClick={() => goToPage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={() => setIsLight(!isLight)} aria-label="Toggle theme">
            {isLight ? "🌙" : "☀️"}
          </button>
          <button className="primary-btn small" onClick={() => goToPage("booking")}>Book Table</button>
          <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open menu">
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}

function HomePage({ goToPage }) {
  return (
    <section className="page-section active">
      <div className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Refined. Roasted. Remarkable.</p>
            <h1>Welcome to Mocha Arts Cafe</h1>
            <p className="hero-quote">“Every Bite & Sip Has a Story”</p>
            <p className="hero-text">
              A creative cafe where specialty coffee, gourmet food, art events, co-working and celebrations come together.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => goToPage("menu")}>View Menu</button>
              <button className="outline-btn" onClick={() => goToPage("booking")}>Book a Table</button>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="/assets/hero.png"
              alt="Cafe interior"
            />
          </div>
        </div>
      </div>

      <SectionIntro eyebrow="Our Story" title="Where Coffee Meets Fine Art" />
      <div className="container two-column">
        <div className="text-card">
          <p>
            Mocha Arts Cafe is a cozy destination for coffee lovers, food explorers and creative people. The cafe brings together fresh beverages, gourmet plates and an aesthetic art-gallery atmosphere.
          </p>
          <div className="stats">
            <div><strong>100%</strong><span>Artisan Beans</span></div>
            <div><strong>500+</strong><span>Artworks Hosted</span></div>
            <div><strong>7 Days</strong><span>Open Weekly</span></div>
          </div>
        </div>
        <div className="image-panel">
          <img src="https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?auto=format&fit=crop&q=80&w=1200" alt="Coffee and art" />
        </div>
      </div>

      <SectionIntro eyebrow="Craftsmanship" title="Why Choose Mocha Arts Cafe" />
      <div className="container feature-grid">
        <Feature icon="☕" title="Specialty Brews" text="Single-origin roasts, signature lattes and custom slow-drip coffee." />
        <Feature icon="🎨" title="Art & Culture Vibe" text="Paintings, canvas displays and weekly creative activities." />
        <Feature icon="🍝" title="Gourmet Kitchen" text="Freshly prepared starters, pastas, pizzas, burgers and desserts." />
        <Feature icon="💻" title="Creator Friendly" text="A calm co-working setup with Wi-Fi, charging points and cozy seating." />
      </div>

      <SectionIntro eyebrow="Guest Reviews" title="What Our Community Says" />
      <div className="container reviews">
        <Review text="The Spanish Latte is amazing and the cafe vibe is perfect for work and photos." name="Ananya Sharma" role="Graphic Designer" />
        <Review text="We hosted a birthday here. The setup, food and service were very impressive." name="Rohan Mehta" role="Parent / Entrepreneur" />
        <Review text="The Sip & Paint experience is the best weekend activity with friends." name="Priya Patel" role="Artist Hobbyist" />
      </div>
    </section>
  );
}

function MenuPage() {
  const [category, setCategory] = useState("All");
  const [subCategory, setSubCategory] = useState("All");
  const [diet, setDiet] = useState("All");
  const [sort, setSort] = useState("recommended");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => ["All", ...new Set(menuData.map((item) => item.category))], []);
  const subCategories = useMemo(() => {
    const drinks = menuData.filter((item) => item.category === "Coffee & Beverages");
    return ["All", ...new Set(drinks.map((item) => item.subCategory).filter(Boolean))];
  }, []);

  const filteredItems = useMemo(() => {
    let items = [...menuData].filter((item) => {
      const categoryMatch = category === "All" || item.category === category;
      const subMatch = category !== "Coffee & Beverages" || subCategory === "All" || item.subCategory === subCategory;
      const dietMatch = diet === "All" || item.type === diet;
      const searchMatch = `${item.name} ${item.description}`.toLowerCase().includes(query.toLowerCase());
      return categoryMatch && subMatch && dietMatch && searchMatch;
    });

    if (sort === "low") items.sort((a, b) => a.price - b.price);
    if (sort === "high") items.sort((a, b) => b.price - a.price);
    if (sort === "recommended") items.sort((a, b) => Number(b.popular) - Number(a.popular));

    return items;
  }, [category, subCategory, diet, sort, query]);

  function changeCategory(nextCategory) {
    setCategory(nextCategory);
    setSubCategory("All");
  }

  return (
    <section className="page-section active page-padding">
      <SectionIntro eyebrow="Fine Dining" title="Our Culinary Menu" text="Explore gourmet plates, starters and signature beverages." />
      <div className="container menu-controls">
        <input
          className="search-input"
          placeholder="Search menu items..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="chip-row">
          {categories.map((cat) => (
            <button key={cat} className={category === cat ? "chip active" : "chip"} onClick={() => changeCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>

        {category === "Coffee & Beverages" && (
          <div className="chip-row subchips">
            {subCategories.map((sub) => (
              <button key={sub} className={subCategory === sub ? "chip active" : "chip"} onClick={() => setSubCategory(sub)}>
                {sub}
              </button>
            ))}
          </div>
        )}

        <div className="filter-bar">
          <label>
            Dietary:
            <select value={diet} onChange={(e) => setDiet(e.target.value)}>
              <option value="All">All</option>
              <option value="veg">Veg</option>
              <option value="non-veg">Non-Veg</option>
            </select>
          </label>
          <label>
            Sort By:
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="recommended">Recommended</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </label>
        </div>
      </div>

      <div className="container menu-grid">
        {filteredItems.length === 0 ? (
          <div className="empty-state">No items found. Try another search or filter.</div>
        ) : (
          filteredItems.map((item) => <MenuCard key={item.id} item={item} />)
        )}
      </div>
    </section>
  );
}

function MenuCard({ item }) {
  const image = imageMap[item.category] || imageMap["Coffee & Beverages"];
  const isVeg = item.type === "veg";

  return (
    <article className="menu-card">
      <img src={image} alt={item.name} />
      <div className="menu-card-body">
        <div className="badge-row">
          {item.popular && <span className="badge">Chef's Pick</span>}
          <span className={isVeg ? "badge veg" : "badge nonveg"}>{isVeg ? "Veg" : "Non-Veg"}</span>
        </div>
        <div className="menu-title-row">
          <h3>{item.name}</h3>
          <strong>₹{item.price}</strong>
        </div>
        <p>{item.description}</p>
      </div>
    </article>
  );
}

function BookingPage({ setModal }) {
  const today = new Date().toISOString().split("T")[0];

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      await saveTableBooking(data);

      setModal({
        title: "Table Reserved Successfully!",
        text: `Thank you, ${data.name}! Your table reservation for ${data.guests} on ${data.date} at ${data.time} has been saved. Our team will confirm by phone at ${data.phone}.`
      });

      form.reset();
    } catch (error) {
      console.error("Booking error:", error);

      setModal({
        title: "Booking Failed",
        text: "Something went wrong while saving your booking. Please try again."
      });
    }
  }

  return (
    <section className="page-section active page-padding">
      <SectionIntro eyebrow="Reservations" title="Book Your Table" text="Avoid the queue and reserve a cozy spot for your coffee sessions." />
      <div className="container two-column align-start">
        <div className="text-card">
          <h3>Plan Your Visit</h3>
          <p>Please reserve at least 2 hours in advance. For group bookings larger than 12 guests, contact our events manager directly by phone.</p>
          <ul className="contact-list">
            <li><strong>Call:</strong> +91 75690 87801</li>
            <li><strong>Email:</strong> mochaartcafe.9@gmail.com</li>
            <li><strong>Hours:</strong> Monday - Sunday: 11:00 AM - 11:00 PM</li>
          </ul>
        </div>
        <form className="form-card" onSubmit={handleSubmit}>
          <input name="name" placeholder="Customer Name *" required />
          <input name="phone" placeholder="Mobile Number *" required />
          <input name="email" placeholder="Email Address" type="email" />
          <input name="date" type="date" min={today} required />
          <select name="time" required>
            <option value="">Preferred Time *</option>
            {Array.from({ length: 12 }, (_, i) => i + 11).map((hour) => (
              <option key={hour}>{hour > 12 ? `${hour - 12}:00 PM` : `${hour}:00 AM`}</option>
            ))}
          </select>
          <select name="guests" required>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5-6 Guests</option>
            <option>7-10 Guests</option>
            <option>10+ Guests</option>
          </select>
          <select name="zone" required>
            <option>Main Art Gallery Hall</option>
            <option>Espresso Mezzanine</option>
            <option>Garden Balcony</option>
            <option>Private Dining Cabins</option>
          </select>
          <textarea name="requests" placeholder="Special Requests / Occasion" />
          <button className="primary-btn" type="submit">Reserve Your Table</button>
        </form>
      </div>
    </section>
  );
}

function BirthdaysPage({ setModal }) {
  const [plan, setPlan] = useState("Mocha Lounge");
  const [guests, setGuests] = useState(15);
  const today = new Date().toISOString().split("T")[0];
  const plans = {
    "Mocha Lounge": 499,
    "Arty Celebration": 799,
    "Espresso Gala": 1199
  };
  const total = plans[plan] * guests;

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      await saveBirthdayBooking(data);

      setModal({
        title: "Celebration Planned!",
        text: `Thank you, ${data.name}! Your birthday booking request for ${data.date} has been saved. Our events planner will contact you at ${data.phone}.`
      });

      form.reset();
    } catch (error) {
      console.error("Birthday booking error:", error);

      setModal({
        title: "Booking Failed",
        text: "Something went wrong while saving your birthday request. Please try again."
      });
    }
  }

  return (
    <section className="page-section active page-padding">
      <SectionIntro eyebrow="Celebrate" title="Birthday Party Celebrations" text="Make your special day memorable with premium themes, food arrays and cozy private setups." />
      <div className="container price-grid">
        <PriceCard title="Mocha Lounge" price="₹499 / guest" items={["Private cabin seating", "Standard balloon setup", "Starter, main course and drink", "Dedicated server assistance"]} />
        <PriceCard highlighted title="Arty Celebration" price="₹799 / guest" items={["Private cabin and canvas display", "Premium floral/art decorations", "Cake arrangement assistance", "Photography friendly setup"]} />
        <PriceCard title="Espresso Gala" price="₹1,199 / guest" items={["Full mezzanine cafe takeover", "Luxury customized theme", "Complimentary custom cake", "Live musical open-mic support"]} />
      </div>

      <div className="container two-column align-start">
        <div className="text-card calculator">
          <h3>Party Cost Estimator</h3>
          <label>
            Select Package Plan:
            <select value={plan} onChange={(e) => setPlan(e.target.value)}>
              {Object.keys(plans).map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            Number of Guests: <strong>{guests}</strong>
            <input type="range" min="5" max="50" value={guests} onChange={(e) => setGuests(Number(e.target.value))} />
          </label>
          <p>Package Base Rate: ₹{plans[plan]} / guest</p>
          <h2>Estimated Total: ₹{total.toLocaleString("en-IN")}</h2>
        </div>

        <form className="form-card" onSubmit={handleSubmit}>
          <h3>Book Your Private Event</h3>
          <input name="name" placeholder="Contact Name *" required />
          <input name="phone" placeholder="Phone Number *" required />
          <input name="date" type="date" min={today} required />
          <select name="package" required>
            <option>Mocha Lounge</option>
            <option>Arty Celebration</option>
            <option>Espresso Gala</option>
          </select>
          <select name="guests" required>
            <option>5 to 10 Guests</option>
            <option>11 to 20 Guests</option>
            <option>21 to 30 Guests</option>
            <option>31 to 50 Guests</option>
            <option>More than 50 Guests</option>
          </select>
          <textarea name="requirements" placeholder="Requirements & Cake Theme" />
          <button className="primary-btn" type="submit">Plan My Celebration</button>
        </form>
      </div>
    </section>
  );
}

function GalleryPage({ setLightbox }) {
  const [filter, setFilter] = useState("All Photos");
  const filters = ["All Photos", "Cafe Vibe", "Gourmet Plates", "Art & Workshops"];
  const filtered = filter === "All Photos" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <section className="page-section active page-padding">
      <SectionIntro eyebrow="Aesthetic Corner" title="Our Photo Gallery" text="Get a visual taste of artisan plates, curated coffee and elegant cafe interiors." />
      <div className="container chip-row centered">
        {filters.map((item) => (
          <button key={item} className={filter === item ? "chip active" : "chip"} onClick={() => setFilter(item)}>{item}</button>
        ))}
      </div>
      <div className="container gallery-grid">
        {filtered.map((item) => (
          <button className="gallery-item" key={item.title} onClick={() => setLightbox(item)}>
            <img src={item.image} alt={item.title} />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function ContactPage({ setModal }) {
  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      await saveContactMessage(data);

      setModal({
        title: "Message Sent!",
        text: `Hello ${data.name}, your message has been saved. We will respond to your email at ${data.email} shortly.`
      });

      form.reset();
    } catch (error) {
      console.error("Contact message error:", error);

      setModal({
        title: "Message Failed",
        text: "Something went wrong while sending your message. Please try again."
      });
    }
  }

  return (
    <section className="page-section active page-padding">
      <SectionIntro eyebrow="Locate Us" title="Contact Mocha Arts Cafe" text="Get in touch, drop a message or find directions to our coffee house." />
      <div className="container two-column align-start">
        <div className="text-card">
          <h3>Mocha Arts Cafe</h3>
          <p>Refined. Roasted. Remarkable.</p>
          <ul className="contact-list">
            <li><strong>Address:</strong> Plot No. 9, Art District Lane, Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033</li>
            <li><strong>Phone:</strong> +91 75690 87801</li>
            <li><strong>Email:</strong> mochaartcafe.9@gmail.com</li>
          </ul>
          <div className="hero-actions">
            <a className="primary-btn" href="https://wa.me/917569087801" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            <a className="outline-btn" href="https://instagram.com/mochaartcafe9" target="_blank" rel="noreferrer">Follow on Instagram</a>
          </div>
        </div>
        <form className="form-card" onSubmit={handleSubmit}>
          <h3>Write to Us</h3>
          <input name="name" placeholder="Your Name *" required />
          <input name="email" type="email" placeholder="Email Address *" required />
          <textarea name="message" placeholder="Message *" required />
          <button className="primary-btn" type="submit">Send Message</button>
        </form>
      </div>
      <FAQ />
    </section>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="section-intro container">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="feature-card">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Review({ text, name, role }) {
  return (
    <div className="review-card">
      <p>“{text}”</p>
      <h4>{name}</h4>
      <span>{role}</span>
    </div>
  );
}

function PriceCard({ title, price, items, highlighted = false }) {
  return (
    <div className={highlighted ? "price-card highlighted" : "price-card"}>
      {highlighted && <span className="badge">Popular Choice</span>}
      <h3>{title}</h3>
      <h2>{price}</h2>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
      <button className="outline-btn">Select Plan</button>
    </div>
  );
}

function FAQ() {
  const faqs = [
    ["Do I need to pre-book for Sip & Paint sessions?", "Yes. Seats are limited, so pre-registration is recommended for weekly creative sessions."],
    ["Is parking available?", "Yes. Parking is available for cars and two-wheelers, with support during peak hours."],
    ["Are pets allowed?", "Yes. Pets are welcome in the Garden Balcony zone."],
    ["Can I customize birthday packages?", "Yes. Decoration, menu and cake themes can be customized." ]
  ];

  return (
    <div className="container faq-wrap">
      <SectionIntro eyebrow="Common Inquiries" title="Frequently Asked Questions" />
      <div className="faq-list">
        {faqs.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

function Footer({ goToPage }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Mocha Arts Cafe</h3>
          <p>Bringing together single-origin brews, gourmet plates and creative cafe experiences.</p>
        </div>
        <div>
          <h4>Navigation</h4>
          {navItems.map((item) => <button key={item.id} onClick={() => goToPage(item.id)}>{item.label}</button>)}
          <button onClick={() => goToPage("admin")} style={{ display: "block", marginTop: "12px", color: "var(--brand)", fontWeight: "bold", paddingLeft: 0 }}>Staff Portal</button>
        </div>
        <div>
          <h4>Quick Contact</h4>
          <p>+91 75690 87801</p>
          <p>mochaartcafe.9@gmail.com</p>
          <p>Jubilee Hills, Hyderabad</p>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Mocha Arts Cafe. All Rights Reserved.</div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return <a className="whatsapp-float" href="https://wa.me/917569087801" target="_blank" rel="noreferrer">☘</a>;
}

function SuccessModal({ modal, close }) {
  return (
    <div className="modal active" onClick={close}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={close}>×</button>
        <h3>{modal.title}</h3>
        <p>{modal.text}</p>
        <button className="primary-btn" onClick={close}>Close</button>
      </div>
    </div>
  );
}

function Lightbox({ item, close }) {
  return (
    <div className="modal active" onClick={close}>
      <div className="lightbox-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={close}>×</button>
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
      </div>
    </div>
  );
}

function LoginPage({ setModal }) {
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAuthSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLoginTab) {
        await loginWithEmail(email, password);
        setModal({
          title: "Welcome Back!",
          text: "You have successfully logged in to the Staff Portal."
        });
      } else {
        await signUpWithEmail(email, password);
        setModal({
          title: "Account Created!",
          text: "Your staff account has been successfully registered. Welcome aboard!"
        });
      }
    } catch (err) {
      console.error("Auth error:", err);
      let errMsg = "An error occurred during authentication. Please check your credentials.";
      if (err.code === "auth/user-not-found" || err.code === "auth/invalid-credential") errMsg = "Invalid email or password.";
      else if (err.code === "auth/wrong-password") errMsg = "Incorrect password.";
      else if (err.code === "auth/email-already-in-use") errMsg = "This email is already registered.";
      else if (err.code === "auth/weak-password") errMsg = "Password must be at least 6 characters.";
      else if (err.code === "auth/invalid-email") errMsg = "Please enter a valid email address.";
      setError(errMsg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="page-section active">
      <div className="login-split">
        <div className="login-photo"></div>
        <div className="login-form-panel">
          <div className="login-card">
            <h2>Staff Portal</h2>
            <p className="subtitle">Manage Mocha Arts Cafe Bookings</p>

            <div className="auth-tabs">
              <button
                className={isLoginTab ? "auth-tab active" : "auth-tab"}
                onClick={() => { setIsLoginTab(true); setError(""); }}
              >
                Sign In
              </button>
              <button
                className={!isLoginTab ? "auth-tab active" : "auth-tab"}
                onClick={() => { setIsLoginTab(false); setError(""); }}
              >
                Register
              </button>
            </div>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleAuthSubmit}>
              <label>
                Email Address *
                <input
                  type="email"
                  placeholder="name@mochaartscafe.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Password *
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button className="primary-btn" type="submit" disabled={loading}>
                {loading ? "Processing..." : isLoginTab ? "Sign In" : "Register Staff Account"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardPage({ currentUser, setModal }) {
  const [activeTab, setActiveTab] = useState("bookings");
  const [bookings, setBookings] = useState([]);
  const [birthdays, setBirthdays] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    setLoading(true);
    try {
      const [bookingsData, birthdaysData, messagesData] = await Promise.all([
        getTableBookings(),
        getBirthdayBookings(),
        getContactMessages()
      ]);
      setBookings(bookingsData);
      setBirthdays(birthdaysData);
      setMessages(messagesData);
    } catch (error) {
      console.error("Failed to load dashboard data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleLogout() {
    try {
      await logoutUser();
      setModal({
        title: "Signed Out",
        text: "You have safely signed out of the Staff Portal."
      });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <section className="page-section active page-padding">
      <div className="container dashboard-section">
        <div className="dashboard-header">
          <div>
            <h2>Staff Admin Dashboard</h2>
            <p>Logged in as: <strong>{currentUser.email}</strong></p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="outline-btn small" onClick={loadData}>🔄 Refresh</button>
            <button className="primary-btn small" onClick={handleLogout}>Logout</button>
          </div>
        </div>

        <div className="dashboard-metrics">
          <div className="metric-card">
            <div className="metric-info">
              <h3>{bookings.length}</h3>
              <span>Table Bookings</span>
            </div>
            <span className="metric-icon">🍽️</span>
          </div>
          <div className="metric-card">
            <div className="metric-info">
              <h3>{birthdays.length}</h3>
              <span>Birthday Events</span>
            </div>
            <span className="metric-icon">🎂</span>
          </div>
          <div className="metric-card">
            <div className="metric-info">
              <h3>{messages.length}</h3>
              <span>Contact Inquiries</span>
            </div>
            <span className="metric-icon">💬</span>
          </div>
        </div>

        <div className="dashboard-tabs">
          <button
            className={activeTab === "bookings" ? "dashboard-tab active" : "dashboard-tab"}
            onClick={() => setActiveTab("bookings")}
          >
            Table Reservations ({bookings.length})
          </button>
          <button
            className={activeTab === "birthdays" ? "dashboard-tab active" : "dashboard-tab"}
            onClick={() => setActiveTab("birthdays")}
          >
            Birthday Celebrations ({birthdays.length})
          </button>
          <button
            className={activeTab === "messages" ? "dashboard-tab active" : "dashboard-tab"}
            onClick={() => setActiveTab("messages")}
          >
            Contact Messages ({messages.length})
          </button>
        </div>

        {loading ? (
          <div className="loading-spinner">
            <span>☕ Loading records...</span>
          </div>
        ) : (
          <div className="dashboard-table-wrap">
            {activeTab === "bookings" && (
              bookings.length === 0 ? (
                <div className="empty-state">No table reservations found.</div>
              ) : (
                <table className="dashboard-table">
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Guests</th>
                      <th>Zone</th>
                      <th>Requests</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((item) => (
                      <tr key={item.id}>
                        <td><strong>{item.name}</strong></td>
                        <td>{item.phone}</td>
                        <td>{item.email || "-"}</td>
                        <td>{item.date}</td>
                        <td>{item.time}</td>
                        <td>{item.guests}</td>
                        <td>{item.zone}</td>
                        <td>{item.requests || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            )}

            {activeTab === "birthdays" && (
              birthdays.length === 0 ? (
                <div className="empty-state">No birthday bookings found.</div>
              ) : (
                <table className="dashboard-table">
                  <thead>
                    <tr>
                      <th>Organizer</th>
                      <th>Phone</th>
                      <th>Date</th>
                      <th>Package Plan</th>
                      <th>Guests</th>
                      <th>Special Requirements</th>
                    </tr>
                  </thead>
                  <tbody>
                    {birthdays.map((item) => (
                      <tr key={item.id}>
                        <td><strong>{item.name}</strong></td>
                        <td>{item.phone}</td>
                        <td>{item.date}</td>
                        <td><span className="badge">{item.package}</span></td>
                        <td>{item.guests}</td>
                        <td>{item.requirements || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            )}

            {activeTab === "messages" && (
              messages.length === 0 ? (
                <div className="empty-state">No contact messages found.</div>
              ) : (
                <table className="dashboard-table">
                  <thead>
                    <tr>
                      <th>Sender</th>
                      <th>Email</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.map((item) => (
                      <tr key={item.id}>
                        <td><strong>{item.name}</strong></td>
                        <td>{item.email}</td>
                        <td>{item.message}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
