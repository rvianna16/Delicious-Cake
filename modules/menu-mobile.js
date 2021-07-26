export default function initMenuMobile() {
  const btnMobile = document.getElementById("btn-mobile");

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();

    const nav = document.getElementById("nav");
    nav.classList.toggle("active");

    const isActive = nav.classList.contains("active");

    btnMobile.setAttribute("aria-expanded", isActive);

    if (isActive) {
      btnMobile.setAttribute("aria-label", "Fechar menu");
      document.addEventListener("scroll", scrollOutMenu);
    } else {
      btnMobile.setAttribute("aria-label", "Abrir menu");
      document.removeEventListener("scroll", scrollOutMenu);
    }
  }

  function scrollOutMenu(e) {
    if (nav.getBoundingClientRect().top < -400) {
      toggleMenu(e);
    }
  }

  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);
}
