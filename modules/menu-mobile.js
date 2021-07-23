export default function initMenuMobile() {
  const btnMobile = document.getElementById('btn-mobile');

  function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();

    const nav = document.getElementById('nav'),
      isActive = nav.classList.contains('active');

    nav.classList.toggle('active');

    event.currentTarget.setAttribute('aria-expanded', isActive);
    if (isActive) {
      event.currentTarget.setAttribute('aria-label', 'Fechar menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir menu');
    }
  }

  btnMobile.addEventListener('click', toggleMenu);
  btnMobile.addEventListener('touchstart', toggleMenu);
}
