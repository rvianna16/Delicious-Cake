export default function initSlide() {
  const sliderContainer = document.querySelector('.slider__container'),
    slider = document.querySelector('.slider'),
    nextBtn = document.getElementById('next-btn'),
    prevBtn = document.getElementById('prev-btn');

  let slides = document.querySelectorAll('.slide'),
    currentSlideIndex = 0,
    time = 5000,
    slideId;

  const firstSlideClone = slides[0].cloneNode(true);
  const lastSlideClone = slides[slides.length - 1].cloneNode(true);

  firstSlideClone.id = 'first-clone';
  lastSlideClone.id = 'last-clone';
  slider.append(firstSlideClone);
  slider.prepend(lastSlideClone);

  function getSlides() {
    return (slides = document.querySelectorAll('.slide'));
  }

  function startSlide() {
    slideId = setInterval(() => {
      moveToNextSlide();
    }, time);
  }

  function moveToNextSlide() {
    if (currentSlideIndex >= slides.length - 1) return;
    currentSlideIndex++;
    slider.style.transform = `translateX(${
      -slides[currentSlideIndex].clientWidth * currentSlideIndex
    }px)`;
    slider.style.transition = '.7s';
  }

  function moveToPrevSlide() {
    if (currentSlideIndex <= 0) return;
    currentSlideIndex--;
    slider.style.transform = `translateX(${
      -slides[currentSlideIndex].clientWidth * currentSlideIndex
    }px)`;
    slider.style.transition = '.7s';
  }

  // Infinite slide //
  slider.addEventListener('transitionend', () => {
    getSlides();
    if (slides[currentSlideIndex].id === firstSlideClone.id) {
      slider.style.transition = 'none';
      currentSlideIndex = 1;
      slider.style.transform = `translateX(${
        -slides[currentSlideIndex].clientWidth * currentSlideIndex
      }px)`;
    }

    if (slides[currentSlideIndex].id === lastSlideClone.id) {
      slider.style.transition = 'none';
      currentSlideIndex = slides.length - 2;
      slider.style.transform = `translateX(${
        -slides[currentSlideIndex].clientWidth * currentSlideIndex
      }px)`;
    }
  });

  sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(slideId);
  });
  sliderContainer.addEventListener('mouseleave', startSlide);
  nextBtn.addEventListener('click', moveToNextSlide);
  prevBtn.addEventListener('click', moveToPrevSlide);

  startSlide();
}
