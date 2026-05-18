import { refs } from './js/refs';
import { closeMenu, toggleMenu } from './js/base-functions';
import { renderCategories } from './js/render-function';

// Mobile menu toggle
refs.burgerMenu.addEventListener('click', toggleMenu);

// Close menu on link click
refs.mobileNavLinks.forEach(link => link.addEventListener('click', closeMenu));

// Close menu when clicking outside the mobile menu
refs.menuOverlay.addEventListener('click', e => {
  if (!e.target.closest('.mobile-menu')) {
    closeMenu();
  }
});

// Close menu on Escape key press
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && refs.mobileMenu.classList.contains('active')) {
    closeMenu();
  }
});

// Smooth scroll for header nav links
refs.headerNavLinks.forEach(link =>
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    refs.headerNavLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  })
);

// Highlight active section in header nav on scroll
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        refs.headerNavLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(
          `.header-nav-link[href="#${entry.target.id}"]`
        );
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  },
  { threshold: 0.5 }
);
refs.sections.forEach(section => observer.observe(section));

// Remove active state from header nav links when button clicked
refs.navBtnDark?.addEventListener('click', () => {
  refs.headerNavLinks.forEach(link => link.classList.remove('active'));
});

document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
});
