// Smooth scroll (native via CSS), active year, theme toggle, reveal-on-scroll
document.getElementById('year').textContent = new Date().getFullYear();

// Theme
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved === 'light') root.classList.add('light');
toggle.addEventListener('click', () => {
  const isLight = root.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  toggle.textContent = isLight ? '☀️' : '🌙';
});
toggle.textContent = root.classList.contains('light') ? '☀️' : '🌙';

// Reveal animations
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
