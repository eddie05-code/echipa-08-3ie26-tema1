// rase.js - animate trait bars when in view

document.addEventListener('DOMContentLoaded', () => {

  const fills = document.querySelectorAll('.trait-fill');

  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const width = target.style.width;
        target.style.width = '0';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            target.style.transition = 'width 1s ease 0.2s';
            target.style.width = width;
          });
        });
        barObserver.unobserve(target);
      }
    });
  }, { threshold: 0.4 });

  fills.forEach(fill => {
    const targetWidth = fill.style.width;
    fill.dataset.targetWidth = targetWidth;
    fill.style.width = '0';
    barObserver.observe(fill);
  });

  // Smooth scroll for breed nav links
  document.querySelectorAll('.breed-nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const offset = 72 + 48; // nav + breed nav bar
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
