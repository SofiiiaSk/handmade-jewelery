const menu = document.querySelector('[data-menu]');
const openButton = document.querySelector('[data-menu-open]');
const closeButton = document.querySelector('[data-menu-close]');
const menuLinks = document.querySelectorAll('.mobile-menu-link, .mobile-menu-order-link');

function setMenuState(isOpen) {
  menu.classList.toggle('is-open', isOpen);
  openButton.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('menu-open', isOpen);
}

openButton.addEventListener('click', () => setMenuState(true));
closeButton.addEventListener('click', () => setMenuState(false));
menuLinks.forEach(link => link.addEventListener('click', () => setMenuState(false)));

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') setMenuState(false);
});
