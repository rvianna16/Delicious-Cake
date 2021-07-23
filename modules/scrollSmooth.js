export default function initScrollSmooth() {
  const links = document.querySelectorAll('.menu__list a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href'),
      section = document.querySelector(href),
      nav = document.getElementById('nav');

    section.scrollIntoView({
      behavior: 'smooth',
    });

    nav.classList.remove('active');
  }

  links.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
