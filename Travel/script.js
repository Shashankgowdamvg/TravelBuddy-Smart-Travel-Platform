// ===== DESTINATIONS DATA =====
const destinations = [
  {
    id: "paris",
    name: "Paris, France",
    location: "Europe · France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    price: "₹1,299",
    rating: 4.9,
    reviews: 2847,
    duration: "5 Days / 4 Nights",
    category: "city",
    badge: "Bestseller",
    description:
      "Paris, the City of Light, enchants visitors with its iconic landmarks, world-class cuisine, and romantic ambiance. From the majestic Eiffel Tower to the artistic treasures of the Louvre, every corner of Paris tells a story. Stroll along the Seine, savour croissants in charming cafés, and lose yourself in the vibrant neighbourhoods of Montmartre and Le Marais.",
    gallery: [
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=600&q=80",
      "https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?w=600&q=80",
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=600&q=80",
    ],
    highlights: [
      "Eiffel Tower visit",
      "Louvre Museum tour",
      "Seine River cruise",
      "Montmartre walk",
      "French wine tasting",
      "Versailles day trip",
    ],
  },
  {
    id: "bali",
    name: "Bali, Indonesia",
    location: "Asia · Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    price: "₹899",
    rating: 4.8,
    reviews: 3521,
    duration: "7 Days / 6 Nights",
    category: "island",
    badge: "Popular",
    description:
      "Bali is a tropical paradise where lush rice terraces meet ancient temples and pristine beaches. Known as the Island of the Gods, Bali offers a perfect blend of adventure, culture, and relaxation. Explore vibrant coral reefs, watch traditional Kecak dances at sunset, and find inner peace at world-renowned yoga retreats.",
    gallery: [
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80",
      "https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&q=80",
    ],
    highlights: [
      "Tegallalang rice terraces",
      "Uluwatu temple sunset",
      "Snorkelling at Nusa Penida",
      "Ubud monkey forest",
      "Balinese cooking class",
      "Mount Batur sunrise trek",
    ],
  },
  {
    id: "tokyo",
    name: "Tokyo, Japan",
    location: "Asia · Japan",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    price: "₹1,499",
    rating: 4.9,
    reviews: 2190,
    duration: "6 Days / 5 Nights",
    category: "city",
    badge: "Trending",
    description:
      "Tokyo is a mesmerizing blend of ultra-modern innovation and ancient tradition. Neon-lit skyscrapers tower beside centuries-old shrines, while bustling street markets sit steps from serene Japanese gardens. Experience the world's freshest sushi at Tsukiji, witness the organized chaos of Shibuya Crossing, and find tranquillity in the Meiji Shrine.",
    gallery: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80",
    ],
    highlights: [
      "Shibuya Crossing experience",
      "Tsukiji fish market",
      "Meiji Shrine visit",
      "Akihabara exploration",
      "Traditional tea ceremony",
      "Day trip to Mount Fuji",
    ],
  },
  {
    id: "santorini",
    name: "Santorini, Greece",
    location: "Europe · Greece",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    price: "₹1,199",
    rating: 4.8,
    reviews: 1876,
    duration: "5 Days / 4 Nights",
    category: "beach",
    badge: "Romantic",
    description:
      "Santorini is a dreamlike Greek island famous for its stunning sunsets, white-washed buildings, and blue-domed churches perched on volcanic cliffs. The island offers extraordinary views of the Aegean Sea, exceptional local wines from volcanic vineyards, and some of the most romantic dining experiences in the Mediterranean.",
    gallery: [
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&q=80",
      "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=600&q=80",
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600&q=80",
    ],
    highlights: [
      "Oia sunset viewing",
      "Caldera boat tour",
      "Wine tasting tour",
      "Red Beach visit",
      "Ancient Akrotiri ruins",
      "Greek cooking class",
    ],
  },
  {
    id: "maldives",
    name: "Maldives",
    location: "Asia · Indian Ocean",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    price: "₹2,199",
    rating: 5.0,
    reviews: 1543,
    duration: "6 Days / 5 Nights",
    category: "beach",
    badge: "Luxury",
    description:
      "The Maldives is the ultimate luxury paradise — a string of 1,200 islands scattered across the Indian Ocean like jewels on turquoise silk. Stay in overwater villas, swim with manta rays, and dine under the stars on pristine white sand beaches. This is where dreams of paradise become reality.",
    gallery: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80",
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&q=80",
      "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=600&q=80",
    ],
    highlights: [
      "Overwater villa stay",
      "Snorkelling with mantas",
      "Sunset dolphin cruise",
      "Underwater restaurant",
      "Private beach dinner",
      "Spa & wellness retreat",
    ],
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu, Peru",
    location: "South America · Peru",
    image:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
    price: "₹1,599",
    rating: 4.9,
    reviews: 1320,
    duration: "8 Days / 7 Nights",
    category: "cultural",
    badge: "Adventure",
    description:
      "Machu Picchu, the legendary Lost City of the Incas, sits dramatically atop a mountain ridge in the Peruvian Andes. This UNESCO World Heritage site is one of the most spectacular archaeological achievements in history. Trek the ancient Inca Trail, explore the Sacred Valley, and stand in awe before the cloud-wrapped citadel at sunrise.",
    gallery: [
      "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=600&q=80",
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=80",
      "https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=600&q=80",
    ],
    highlights: [
      "Inca Trail trekking",
      "Machu Picchu sunrise",
      "Sacred Valley tour",
      "Cusco city exploration",
      "Peruvian cuisine tasting",
      "Huayna Picchu climb",
    ],
  },
  {
    id: "switzerland",
    name: "Swiss Alps, Switzerland",
    location: "Europe · Switzerland",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    price: "₹1,899",
    rating: 4.9,
    reviews: 1680,
    duration: "6 Days / 5 Nights",
    category: "mountain",
    badge: "Scenic",
    description:
      "Switzerland is nature's masterpiece — towering Alpine peaks, crystal-clear lakes, and charming villages that look like they belong in a storybook. Ride the famous Glacier Express, hike through wildflower meadows, ski world-class slopes, and indulge in the finest chocolates and cheeses in the world.",
    gallery: [
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=600&q=80",
    ],
    highlights: [
      "Glacier Express ride",
      "Jungfraujoch visit",
      "Lake Lucerne cruise",
      "Zermatt & Matterhorn",
      "Swiss chocolate tour",
      "Alpine hiking trails",
    ],
  },
  {
    id: "new-york",
    name: "New York, USA",
    location: "North America · USA",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    price: "₹1,399",
    rating: 4.7,
    reviews: 3200,
    duration: "5 Days / 4 Nights",
    category: "city",
    badge: "Iconic",
    description:
      "New York City — the city that never sleeps — pulses with energy, culture, and endless possibilities. From the dazzling lights of Times Square to the serenity of Central Park, from world-class Broadway shows to diverse culinary delights in every borough, NYC delivers an experience like no other city on Earth.",
    gallery: [
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80",
      "https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600&q=80",
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=600&q=80",
    ],
    highlights: [
      "Statue of Liberty tour",
      "Central Park stroll",
      "Broadway show",
      "Brooklyn Bridge walk",
      "Times Square nightlife",
      "Metropolitan Museum visit",
    ],
  },
  {
    id: "dubai",
    name: "Dubai, UAE",
    location: "Middle East · UAE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    price: "₹1,699",
    rating: 4.8,
    reviews: 2450,
    duration: "5 Days / 4 Nights",
    category: "city",
    badge: "Luxury",
    description:
      "Dubai is a city of superlatives — home to the world's tallest building, largest mall, and most luxurious hotels. This futuristic metropolis in the desert offers an extraordinary blend of modern marvels, traditional souks, golden beaches, and thrilling desert adventures that push the boundaries of imagination.",
    gallery: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&q=80",
      "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=600&q=80",
    ],
    highlights: [
      "Burj Khalifa observation",
      "Desert safari adventure",
      "Dubai Mall & Aquarium",
      "Palm Jumeirah tour",
      "Gold Souk shopping",
      "Dhow dinner cruise",
    ],
  },
];

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById("navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
}

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("active");
    });
  });
}

// ===== USER SESSION HANDLING =====
document.addEventListener("DOMContentLoaded", () => {
  const userStr = localStorage.getItem("user");
  if (userStr) {
    try {
      const user = JSON.parse(userStr);
      // Find the Sign In link container in the navbar
      const navLinksContainer = document.getElementById("navLinks");
      if (navLinksContainer) {
        const signInLink = Array.from(navLinksContainer.querySelectorAll("a")).find(
          a => a.href.includes("login.html")
        );
        
        if (signInLink) {
          // Replace Sign In button with User Welcome and Logout
          const userContainer = document.createElement("div");
          userContainer.style.display = "flex";
          userContainer.style.alignItems = "center";
          userContainer.style.gap = "15px";
          userContainer.innerHTML = `
            <span style="color: var(--accent); font-weight: 500;">Hi, ${user.name.split(' ')[0]}</span>
            <button id="logoutBtn" class="nav-btn" style="background: transparent; border: 1px solid var(--accent); color: var(--accent);">Logout</button>
          `;
          
          signInLink.replaceWith(userContainer);
          
          document.getElementById("logoutBtn").addEventListener("click", () => {
            localStorage.removeItem("user");
            window.location.reload();
          });
        }
      }
    } catch (e) {
      console.error("Error parsing user session data:", e);
      localStorage.removeItem("user");
    }
  }
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

// ===== RENDER DESTINATION CARDS =====
function createDestCard(dest) {
  return `
    <div class="dest-card fade-up" onclick="goToDetail('${dest.id}')">
      <div class="dest-card-img">
        <img src="${dest.image}" alt="${dest.name}" loading="lazy">
        <span class="dest-card-price">${dest.price}</span>
        ${dest.badge ? `<span class="dest-card-badge">${dest.badge}</span>` : ""}
      </div>
      <div class="dest-card-body">
        <h3>${dest.name}</h3>
        <div class="location"><i class="fas fa-map-marker-alt" style="color:var(--accent)"></i> ${dest.location}</div>
        <div class="rating">★ ${dest.rating} <span>(${dest.reviews.toLocaleString()} reviews)</span></div>
      </div>
      <div class="dest-card-footer">
        <span class="duration"><i class="far fa-clock"></i> ${dest.duration}</span>
        <button class="book-btn">View Details</button>
      </div>
    </div>`;
}

function goToDetail(id) {
  window.location.href = `destination-detail?id=${id}`;
}

// ===== HOMEPAGE: FEATURED GRID (first 6) =====
const featuredGrid = document.getElementById("featuredGrid");
if (featuredGrid) {
  featuredGrid.innerHTML = destinations
    .slice(0, 6)
    .map(createDestCard)
    .join("");
  setTimeout(() => {
    featuredGrid
      .querySelectorAll(".fade-up")
      .forEach((el) => observer.observe(el));
  }, 100);
}

// ===== DESTINATIONS PAGE: FULL GRID + FILTERS =====
const allDestGrid = document.getElementById("allDestGrid");
const filterBar = document.getElementById("filterBar");

function renderFilteredGrid(filter) {
  if (!allDestGrid) return;
  const filtered =
    filter === "all"
      ? destinations
      : destinations.filter((d) => d.category === filter);
  allDestGrid.innerHTML = filtered.map(createDestCard).join("");
  setTimeout(() => {
    allDestGrid
      .querySelectorAll(".fade-up")
      .forEach((el) => observer.observe(el));
  }, 100);
}

if (allDestGrid) renderFilteredGrid("all");

if (filterBar) {
  filterBar.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      filterBar
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      renderFilteredGrid(e.target.dataset.filter);
    }
  });
}

// ===== DESTINATION DETAIL PAGE =====
const detailHero = document.getElementById("detailHero");
if (detailHero) {
  const params = new URLSearchParams(window.location.search);
  const destId = params.get("id") || "paris";
  const dest = destinations.find((d) => d.id === destId) || destinations[0];

  document.title = `${dest.name} — TravelBuddy`;
  document.getElementById("detailHeroImg").src = dest.image;
  document.getElementById("detailHeroImg").alt = dest.name;
  document.getElementById("detailBadge").textContent = dest.badge;
  document.getElementById("detailTitle").textContent = dest.name;
  document.getElementById("detailLocation").querySelector("span").textContent =
    dest.location;
  document.getElementById("detailDesc").textContent = dest.description;
  document.getElementById("detailPrice").innerHTML =
    `${dest.price} <span>/ person</span>`;
  document.getElementById("detailDuration").value = dest.duration;

  // Gallery
  const galleryGrid = document.getElementById("galleryGrid");
  if (galleryGrid && dest.gallery) {
    galleryGrid.innerHTML = dest.gallery
      .map(
        (img) => `<img src="${img}" alt="${dest.name} gallery" loading="lazy">`,
      )
      .join("");
  }

  // Highlights
  const highlightsList = document.getElementById("highlightsList");
  if (highlightsList && dest.highlights) {
    highlightsList.innerHTML = dest.highlights
      .map((h) => `<li><span style="color:var(--accent)">✦</span> ${h}</li>`)
      .join("");
  }

  // Book Now button
  const bookBtn = document.getElementById("bookNowBtn");
  if (bookBtn) {
    bookBtn.addEventListener("click", async () => {
      // Prevent re-booking if already confirmed
      if (bookBtn.disabled) return;

      const checkinDate = document.getElementById("checkinDate").value;
      const guests = document.getElementById("guestsSelect").value;

      if (!checkinDate) {
        alert("Please select a check-in date");
        return;
      }

      bookBtn.textContent = "Processing...";
      bookBtn.disabled = true;

      try {
        const response = await fetch("/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            destinationId: dest.id,
            destinationName: dest.name,
            checkinDate,
            guests,
            totalAmount: dest.price,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          bookBtn.textContent = "✓ Booking Confirmed!";
          bookBtn.style.background =
            "linear-gradient(135deg, #22c55e, #16a34a)";
          alert(`Success! Your booking ID is ${data.booking.id}`);

          // Show download invoice button
          const dlBtn = document.getElementById("downloadInvoiceBtn");
          if (dlBtn) {
            dlBtn.style.display = "block";
            dlBtn.dataset.booking = JSON.stringify(data.booking);
          }

          // Show cancel booking button
          const cnclBtn = document.getElementById("cancelBookingBtn");
          if (cnclBtn) {
            cnclBtn.style.display = "block";
            cnclBtn.dataset.bookingId = data.booking.id;
          }

          // Keep bookBtn disabled after successful booking
        } else {
          bookBtn.textContent = "Book Now";
          bookBtn.disabled = false;
          alert(data.error || "Failed to book");
        }
      } catch (error) {
        console.error("Booking error:", error);
        bookBtn.textContent = "Book Now";
        bookBtn.disabled = false;
        alert("Server error. Is the backend running?");
      }
    });
  }

  // Download Invoice button
  const downloadBtn = document.getElementById("downloadInvoiceBtn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      if (!downloadBtn.dataset.booking) {
        alert("No booking found. Please make a booking first.");
        return;
      }

      try {
        const bookingData = JSON.parse(downloadBtn.dataset.booking);
        generateInvoicePDF(bookingData);
      } catch (error) {
        console.error("Error generating PDF:", error);
        alert("Error generating invoice: " + error.message);
      }
    });
  }

  // Cancel Booking button
  const cancelBtn = document.getElementById("cancelBookingBtn");
  if (cancelBtn) {
    cancelBtn.addEventListener("click", async () => {
      const bookingId = cancelBtn.dataset.bookingId;

      if (!bookingId) {
        alert("No booking found to cancel.");
        return;
      }

      if (!confirm("Are you sure you want to cancel this booking?")) return;

      cancelBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin" style="margin-right:8px;"></i> Cancelling...';
      cancelBtn.disabled = true;

      try {
        const response = await fetch(
          `/api/bookings/${encodeURIComponent(bookingId)}/cancel`,
          { method: "POST" },
        );

        const result = await response.json();

        if (response.ok) {
          alert("Booking cancelled successfully!");

          // Hide download & cancel buttons
          cancelBtn.style.display = "none";
          const dlBtn = document.getElementById("downloadInvoiceBtn");
          if (dlBtn) {
            dlBtn.style.display = "none";
            delete dlBtn.dataset.booking;
          }

          // Reset Book Now button so user can book again
          const bkBtn = document.getElementById("bookNowBtn");
          if (bkBtn) {
            bkBtn.textContent = "Book Now";
            bkBtn.style.background = "";
            bkBtn.disabled = false;
          }

          // Clear cancel data
          delete cancelBtn.dataset.bookingId;
        } else {
          alert(
            "Failed to cancel booking: " + (result.error || "Unknown error"),
          );
          cancelBtn.innerHTML =
            '<i class="fas fa-times-circle" style="margin-right:8px;"></i> Cancel Booking';
          cancelBtn.disabled = false;
        }
      } catch (error) {
        console.error("Cancellation error:", error);
        alert("Server error. Please ensure the backend is running.");
        cancelBtn.innerHTML =
          '<i class="fas fa-times-circle" style="margin-right:8px;"></i> Cancel Booking';
        cancelBtn.disabled = false;
      }
    });
  }
}

// ===== INVOICE GENERATION =====
function generateInvoicePDF(booking) {
  // Resolve the jsPDF constructor (UMD exposes window.jspdf.jsPDF)
  const jsPDFConstructor =
    (window.jspdf && window.jspdf.jsPDF) || window.jsPDF || null;

  if (!jsPDFConstructor) {
    alert(
      "PDF library could not be loaded. Please check your internet connection and refresh the page.",
    );
    return;
  }

  try {
    const doc = new jsPDFConstructor();
    const pageWidth = doc.internal.pageSize.getWidth();

    // === Dark header bar ===
    doc.setFillColor(10, 10, 18);
    doc.rect(0, 0, pageWidth, 52, "F");

    // Accent line under header
    doc.setFillColor(232, 168, 56);
    doc.rect(0, 52, pageWidth, 3, "F");

    // Header text
    doc.setTextColor(232, 168, 56);
    doc.setFontSize(26);
    doc.setFont("helvetica", "bold");
    doc.text("TravelBuddy", 15, 28);

    doc.setTextColor(200, 200, 200);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("www.travelbuddy.com", 15, 38);

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("INVOICE", pageWidth - 15, 28, { align: "right" });

    doc.setTextColor(200, 200, 200);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const invoiceDate = new Date(booking.bookingDate).toLocaleDateString(
      "en-IN",
      { year: "numeric", month: "long", day: "numeric" },
    );
    doc.text(invoiceDate, pageWidth - 15, 38, { align: "right" });

    // === Booking Details Section ===
    let y = 72;

    doc.setTextColor(232, 168, 56);
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text("Booking Details", 15, y);
    y += 4;

    // Divider line
    doc.setDrawColor(230, 230, 230);
    doc.setLineWidth(0.5);
    doc.line(15, y, pageWidth - 15, y);
    y += 12;

    doc.setTextColor(100, 100, 100);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    const addRow = (label, value) => {
      doc.setFont("helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      doc.text(label, 15, y);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(40, 40, 40);
      doc.text(String(value), 75, y);
      y += 10;
    };

    addRow("Invoice ID:", booking.id);
    addRow("Booking Date:", invoiceDate);
    addRow("Status:", booking.status ? booking.status.toUpperCase() : "CONFIRMED");

    // === Trip Details Section ===
    y += 6;
    doc.setTextColor(232, 168, 56);
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text("Trip Details", 15, y);
    y += 4;

    doc.setDrawColor(230, 230, 230);
    doc.line(15, y, pageWidth - 15, y);
    y += 12;

    addRow("Destination:", booking.destinationName);
    addRow("Check-in Date:", booking.checkinDate);
    addRow("Guests:", booking.guests);

    // === Total Amount Box ===
    y += 8;
    doc.setFillColor(255, 249, 235);
    doc.roundedRect(15, y, pageWidth - 30, 28, 4, 4, "F");
    doc.setDrawColor(232, 168, 56);
    doc.setLineWidth(0.8);
    doc.roundedRect(15, y, pageWidth - 30, 28, 4, 4, "S");

    const amountValue = booking.totalAmount
      .replace(/[₹$€£]/g, "")
      .trim();

    doc.setTextColor(80, 80, 80);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Total Amount:", 25, y + 18);

    doc.setTextColor(232, 168, 56);
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("Rs. " + amountValue, pageWidth - 25, y + 18, {
      align: "right",
    });

    // === Footer ===
    const footerY = 265;
    doc.setDrawColor(230, 230, 230);
    doc.setLineWidth(0.3);
    doc.line(15, footerY - 8, pageWidth - 15, footerY - 8);

    doc.setTextColor(160, 160, 160);
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.text(
      "Thank you for booking with TravelBuddy! Your journey, our passion.",
      pageWidth / 2,
      footerY,
      { align: "center" },
    );
    doc.setFont("helvetica", "normal");
    doc.text(
      "For support: support@travelbuddy.com | +91 555-123-4567",
      pageWidth / 2,
      footerY + 8,
      { align: "center" },
    );

    // Save the PDF
    doc.save(`TravelBuddy-Invoice-${booking.id}.pdf`);
  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("Error generating PDF: " + error.message);
  }
}

// ===== TESTIMONIAL CAROUSEL =====
const track = document.getElementById("testimonialsTrack");
const prevBtn = document.getElementById("prevTest");
const nextBtn = document.getElementById("nextTest");
let testPos = 0;

if (track && prevBtn && nextBtn) {
  const cardWidth = 404; // card min-width + gap
  const maxPos = Math.max(
    0,
    track.children.length -
      Math.floor(track.parentElement.offsetWidth / cardWidth),
  );

  nextBtn.addEventListener("click", () => {
    testPos = Math.min(testPos + 1, maxPos);
    track.style.transform = `translateX(-${testPos * cardWidth}px)`;
  });
  prevBtn.addEventListener("click", () => {
    testPos = Math.max(testPos - 1, 0);
    track.style.transform = `translateX(-${testPos * cardWidth}px)`;
  });
}

// ===== NEWSLETTER FORM =====
const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("newsletterEmail");
    const btn = newsletterForm.querySelector("button");
    const originalText = btn.textContent;
    btn.textContent = "Sending...";

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput.value }),
      });

      const data = await response.json();

      if (response.ok) {
        btn.textContent = "✓ Subscribed!";
        btn.style.background = "linear-gradient(135deg, #22c55e, #16a34a)";
        emailInput.value = "";
      } else {
        btn.textContent = originalText;
        alert(data.error || "Subscription failed");
      }
    } catch (error) {
      console.error("Newsletter error:", error);
      btn.textContent = originalText;
    }

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = "";
    }, 2500);
  });
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = document.getElementById("contactSubmitBtn");
    const originalText = btn.textContent;
    btn.textContent = "Sending...";

    const formData = {
      name: document.getElementById("contactName").value,
      email: document.getElementById("contactEmail").value,
      subject: document.getElementById("contactSubject").value,
      message: document.getElementById("contactMessage").value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        btn.textContent = "✓ Message Sent!";
        btn.style.background = "linear-gradient(135deg, #22c55e, #16a34a)";
        contactForm.reset();
      } else {
        const data = await response.json();
        btn.textContent = originalText;
        alert(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Contact error:", error);
      btn.textContent = originalText;
    }

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = "";
    }, 2500);
  });
}

// ===== LOGIN/SIGNUP TABS =====
function switchTab(tab) {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");
  if (!loginForm || !signupForm) return;

  if (tab === "login") {
    loginForm.style.display = "flex";
    signupForm.style.display = "none";
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
  } else {
    loginForm.style.display = "none";
    signupForm.style.display = "flex";
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
  }
}

// Auth form submissions
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const btn = loginForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = "Signing in...";

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        btn.textContent = "✓ Welcome back!";
        btn.style.background = "linear-gradient(135deg, #22c55e, #16a34a)";
        localStorage.setItem("user", JSON.stringify(data.user));
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1500);
      } else {
        btn.textContent = originalText;
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      btn.textContent = originalText;
      alert("Server error. Is the backend running?");
    }
  });
}

const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirm = document.getElementById("signupConfirm").value;

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    const btn = signupForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = "Creating account...";

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        btn.textContent = "✓ Account Created!";
        btn.style.background = "linear-gradient(135deg, #22c55e, #16a34a)";
        setTimeout(() => {
          switchTab("login");
          btn.textContent = originalText;
          btn.style.background = "";
          document.getElementById("loginEmail").value = email;
        }, 1500);
      } else {
        btn.textContent = originalText;
        alert(data.error || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      btn.textContent = originalText;
      alert("Server error. Is the backend running?");
    }
  });
}

// Make switchTab available globally
window.switchTab = switchTab;
