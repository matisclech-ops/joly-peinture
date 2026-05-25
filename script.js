// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObs.observe(el));

// Animated counters
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const decimals = parseInt(el.dataset.decimal) || 0;
  const duration = 1400;
  const start = performance.now();
  (function update(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = decimals ? (target * eased).toFixed(decimals) : Math.floor(target * eased);
    if (p < 1) requestAnimationFrame(update);
  })(start);
}

const statEls = document.querySelectorAll('.stat-num');
const statObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      statObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
statEls.forEach(el => statObs.observe(el));

// FAQ accordion — also updates aria-expanded
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// Contact form (Formspree async)
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn = document.getElementById('submitBtn');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.action.includes('YOUR_FORM_ID')) {
      document.getElementById('formNote').hidden = false;
      return;
    }
    submitBtn.textContent = 'Envoi en cours…';
    submitBtn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.reset();
        formSuccess.hidden = false;
        submitBtn.textContent = 'Envoyé ✓';
      } else {
        throw new Error();
      }
    } catch {
      submitBtn.textContent = 'Envoyer la demande';
      submitBtn.disabled = false;
      alert('Erreur d\'envoi. Appelez-nous : 06 51 29 44 55');
    }
  });
}
