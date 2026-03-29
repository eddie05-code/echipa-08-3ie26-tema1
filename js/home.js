// home.js - Home page specific scripts

document.addEventListener('DOMContentLoaded', () => {

  // Subtle parallax on hero background
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      heroBg.style.transform = `translateY(${scrolled * 0.35}px)`;
    }, { passive: true });
  }

});
