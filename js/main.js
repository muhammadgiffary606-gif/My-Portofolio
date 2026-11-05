/**
 * MAIN CONTROLLER & APPLICATION LOGIC
 * Navigation, Cursor, Counters, Form Simulation, and Page Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initCosmicCursor();
  initNavbarScroll();
  initMobileMenu();
  initActiveNavSpy();
  initCounterStats();
  initContactForm();
  initBackToTop();
});

/* --- 1. COSMIC CURSOR --- */
function initCosmicCursor() {
  const dot = document.querySelector('.cosmic-cursor-dot');
  const ring = document.querySelector('.cosmic-cursor-ring');

  if (!dot || !ring || window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  // Lerp for smooth ring following
  function followLoop() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(followLoop);
  }
  requestAnimationFrame(followLoop);

  // Hover states on clickable items
  const clickables = document.querySelectorAll('a, button, input, textarea, .project-card, .filter-btn');
  clickables.forEach((el) => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* --- 2. NAVBAR SCROLL EFFECT --- */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* --- 3. MOBILE MENU TOGGLE --- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu when clicking link
  navLinks.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

/* --- 4. ACTIVE NAVIGATION LINK SPY --- */
function initActiveNavSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 250;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* --- 5. STATS COUNTER ANIMATION --- */
function initCounterStats() {
  const statsElements = document.querySelectorAll('.stat-number');
  if (!statsElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetValue = parseFloat(el.getAttribute('data-target') || '0');
        const suffix = el.getAttribute('data-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);

        let current = 0;
        const duration = 1800; // ms
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          current = targetValue * easeProgress;

          el.textContent = current.toFixed(decimals) + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = targetValue.toFixed(decimals) + suffix;
          }
        }

        requestAnimationFrame(updateCounter);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  statsElements.forEach((el) => observer.observe(el));
}

/* --- 6. CONTACT FORM SIMULATION --- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');

  if (!form || !statusEl) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Simulation transmission state
    statusEl.className = 'form-status sending';
    statusEl.innerHTML = '✦ Mengenkripsi data & memancarkan sinyal ke orbit stasiun...';

    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    setTimeout(() => {
      statusEl.className = 'form-status success';
      statusEl.innerHTML = '✔ Transmisi Diterima! Sinyal Anda telah tercatat di stasiun misi. Saya akan segera menghubungi Anda kembali.';
      form.reset();

      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
      submitBtn.innerHTML = originalText;

      // Reset feedback after 7s
      setTimeout(() => {
        statusEl.className = 'form-status';
        statusEl.innerHTML = '';
      }, 7000);
    }, 1800);
  });
}

/* --- 7. BACK TO TOP BUTTON --- */
function initBackToTop() {
  const backTopBtn = document.getElementById('btn-back-top');
  if (!backTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      backTopBtn.classList.add('show');
    } else {
      backTopBtn.classList.remove('show');
    }
  }, { passive: true });

  backTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

