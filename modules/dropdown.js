export default function initDropDown() {
  const input = document.querySelector('#filter');
  const arrowIcon = document.querySelector('#menu i');  

  input.addEventListener('focus', () => {
    dropDown(0);
    arrowIcon.classList.add('up');
  });
  input.addEventListener('blur', () => {
    dropDown(1);
    arrowIcon.classList.remove('up');
  });

  function dropDown(p) {
    let dropMenu = document.querySelector('.dropdown');
    let styleTipe = ['block', 'none'];

    setTimeout(() => {
      dropMenu.style.display = styleTipe[p];
    }, 150);
  }
}
