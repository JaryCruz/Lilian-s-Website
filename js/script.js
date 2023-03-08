const mobileMenu = document.querySelector('[data-mobile-menu]')
const btnHamburger = document.querySelector('[data-btn-hamburger]')

btnHamburger.addEventListener('click', () => {
  btnHamburger.classList.toggle('open')
  mobileMenu.classList.toggle('open')
  document.body.classList.toggle('no-overflow')
})