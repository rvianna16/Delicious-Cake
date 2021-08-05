export default function initFilter() {
  const input = document.querySelector('#filter'),
    dropDownItens = document.querySelectorAll('.dropdown__item'),
    productsContainer = document.querySelector('.product__container'),
    tagsContainer = document.querySelector('.tags__container');

  //create tag
  dropDownItens.forEach((item) => {
    item.addEventListener('click', () => {
      createTag(item);
    });
  });

  function createTag(item) {
    const newTag = document.createElement('span');
    newTag.classList.add('tag');
    newTag.innerText = item.innerText;
    tagsContainer.appendChild(newTag);
    item.classList.add('hide');

    newTag.addEventListener('click', () => {
      removeTag(newTag, item);
    });
    clearInput();
    filterTag();
  }

  function removeTag(tag, item) {
    tagsContainer.removeChild(tag);
    item.classList.remove('hide');
    filterTag();
  }

  //tag filter
  function filterTag() {
    const tags = document.querySelectorAll('.tag');
    const products = document.querySelectorAll('.card.filter');

    products.forEach((product) => {
      if (tags.length >= 1) {
        product.parentNode.parentNode.classList.add('hide');
        product.style.display = 'none';
      } else {
        product.parentNode.parentNode.classList.remove('hide');
        product.style.display = '';
      }
    });

    tags.forEach((tag) => {
      const filteredProducts = productsContainer.getElementsByClassName(
        tag.innerText.toLowerCase()
      );      

      Array.from(filteredProducts).forEach((filteredProduct) => {
        filteredProduct.parentNode.parentNode.classList.remove('hide');
        filteredProduct.style.display = '';
      });
    });
  }

  //input filter
  input.addEventListener('keyup', () => {
    filterInput();
  });

  function filterInput() {
    let dropDown = document.querySelector('.dropdown'),
      filterValue = input.value.toUpperCase(),
      spanWarning = dropDown.querySelector('.warning');

    dropDownItens.forEach((item) => {
      let itemText = item.innerText.toUpperCase();

      if (itemText.indexOf(filterValue) > -1) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });

    if (dropDown.clientHeight <= 60) {
      spanWarning.style.display = 'block';
    } else {
      spanWarning.style.display = '';
    }
  }

  function clearInput() {
    input.value = '';
    filterInput();
  }
}
