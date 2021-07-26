export default function initScrollSmooth() {
  const links = document.querySelectorAll('.menu__list a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href'),
      section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
    });        
  }

  links.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
