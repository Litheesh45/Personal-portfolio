// ---------- Smooth Scroll ----------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ---------- Active Link Highlight ----------
const currentLocation = location.href;
const menuItems = document.querySelectorAll("nav a");
menuItems.forEach((item) => {
  if (item.href === currentLocation) {
    item.classList.add("active");
  }
});

// ---------- Dark Mode Toggle ----------
const toggle = document.createElement("button");
toggle.innerText = "🌙";
toggle.className = "dark-toggle";
document.body.appendChild(toggle);

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.innerText = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode") ? "dark" : "light"
  );
});

// Load theme from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    toggle.innerText = "☀️";
  }
});

// ---------- Scroll Animation (fade-in) ----------
const fadeElements = document.querySelectorAll(".fade-in");

function handleScroll() {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", handleScroll);
handleScroll(); // trigger once on load

// ---------- Contact Form Validation ----------
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    const name = form.querySelector("input[name='name']");
    const email = form.querySelector("input[name='email']");
    const message = form.querySelector("textarea[name='message']");

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      e.preventDefault();
      alert("Please fill in all fields before submitting.");
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email.value)) {
      e.preventDefault();
      alert("Please enter a valid email address.");
    }
  });
}

// ---------- Scroll-to-top Button ----------
const scrollTopBtn = document.createElement("button");
scrollTopBtn.className = "scroll-top";
scrollTopBtn.innerHTML = "⬆";
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

