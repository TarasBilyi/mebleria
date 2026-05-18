import { refs } from './refs';

// Open mobile menu
export function toggleMenu() {
  refs.burgerMenu.classList.toggle('active');
  refs.menuOverlay.classList.toggle('is-open');
  refs.mobileMenu.classList.toggle('active');
  refs.body.classList.toggle('no-scroll');
  refs.burgerMenu.blur();
}

// Close mobile menu
export function closeMenu() {
  refs.burgerMenu.classList.remove('active');
  refs.menuOverlay.classList.remove('is-open');
  refs.mobileMenu.classList.remove('active');
  refs.body.classList.remove('no-scroll');
  refs.burgerMenu.blur();
}
