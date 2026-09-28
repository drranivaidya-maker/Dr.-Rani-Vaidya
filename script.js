/* ─────────────────────────────────────────────────────────
   मन Aura Confidence Academy — script.js
   ───────────────────────────────────────────────────────── */

/* ── Navbar: hide/show on scroll ───────────────────────── */
(function () {
  const navbar = document.querySelector('.navbar');
  let lastY = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 80) {
      navbar.style.transform = y > lastY ? 'translateY(-100%)' : 'translateY(0)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    lastY = y;
  }, { passive: true });

  navbar.style.transition = 'transform 0.3s ease';
})();

/* ── Active nav link highlight ──────────────────────────── */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'nav-active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
})();

/* ── Scroll-reveal: fade-up cards ──────────────────────── */
(function () {
  const style = document.createElement('style');
  style.textContent = `
    .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.55s ease, transform 0.55s ease; }
    .reveal.visible { opacity: 1; transform: none; }
    .nav-active { color: #e8b84b !important; }
  `;
  document.head.appendChild(style);

  document.querySelectorAll('.lab-card, .include-item, .audience-chips span, .bundle-list li')
    .forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 4) * 80 + 'ms';
    });

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

/* ── WhatsApp floating button ───────────────────────────── */
(function () {
  const fab = document.createElement('a');
  fab.href = 'https://wa.me/917000063273';
  fab.target = '_blank';
  fab.setAttribute('aria-label', 'Chat on WhatsApp');
  fab.innerHTML = `<svg viewBox="0 0 24 24" fill="white" width="28" height="28"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.849L0 24l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.366l-.359-.213-3.723.976.994-3.634-.234-.374A9.818 9.818 0 1112 21.818z"/></svg>`;

  Object.assign(fab.style, {
    position: 'fixed',
    bottom: '1.5rem',
    right: '1.5rem',
    width: '56px',
    height: '56px',
    background: '#25d366',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
    zIndex: '999',
    transition: 'transform 0.2s, box-shadow 0.2s',
  });

  fab.addEventListener('mouseenter', () => {
    fab.style.transform = 'scale(1.1)';
    fab.style.boxShadow = '0 8px 28px rgba(37,211,102,0.55)';
  });
  fab.addEventListener('mouseleave', () => {
    fab.style.transform = 'scale(1)';
    fab.style.boxShadow = '0 4px 20px rgba(37,211,102,0.45)';
  });

  document.body.appendChild(fab);
})();

/* ── Enroll button: pulse on hover via CSS class ─────────── */
(function () {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse-ring {
      0%   { box-shadow: 0 0 0 0 rgba(122,16,40,0.35); }
      70%  { box-shadow: 0 0 0 10px rgba(122,16,40,0); }
      100% { box-shadow: 0 0 0 0 rgba(122,16,40,0); }
    }
    .btn-enroll:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }
    .hero-founder { animation: fadeIn 0.9s ease 0.3s both; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
  `;
  document.head.appendChild(style);
})();
