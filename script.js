// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  menuToggle.classList.remove('active');
  mobileMenu.classList.remove('open');
}

// Scroll animations (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Stagger animation for grid items
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-fade-left, .animate-fade-right, .animate-fade-in, .animate-up').forEach((el, i) => {
  // Add stagger delay to grid children
  const parent = el.parentElement;
  if (parent && (parent.classList.contains('reasons-grid') || parent.classList.contains('services-grid') || parent.classList.contains('portfolio-grid'))) {
    const siblings = Array.from(parent.children);
    el.dataset.delay = siblings.indexOf(el);
  }
  observer.observe(el);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
