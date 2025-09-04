// Smooth scroll
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const id = link.getAttribute('href');
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggleBtn.textContent = document.body.classList.contains('light') ? '☀' : '🌙';
});