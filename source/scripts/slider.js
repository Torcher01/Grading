const slider = document.querySelector('.slider__wrapper');
const pagination = document.querySelector('.slider__pagination');
const prevButton = document.querySelector('.slider__switcher-left');
const nextButton = document.querySelector('.slider__switcher-right');
const slides = Array.from(slider.querySelectorAll('.slider__slide'));

const slideCount = slides.length;
let slideIndex = 0;

//Создаём кнопки пагинации
function createPaginationButtons () {
  const paginationButton = document.createElement('button');
  paginationButton.classList.add('slider__pagination-button');
  paginationButton.setAttribute('type', 'button');
  return pagination.append(paginationButton);
}

for (let i = slideCount; i > 0; i--) {
  createPaginationButtons();
}

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
const paginationButtons = Array.from(pagination.querySelectorAll('.slider__pagination-button'));

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    slideIndex = index;
    updateSlider();
  });
});

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.remove('visually-hidden');
      paginationButtons[index].classList.add('slider__pagination-button--active');
    } else {
      slide.classList.add('visually-hidden');
      paginationButtons[index].classList.remove('slider__pagination-button--active');
    }
  });

  if(slideIndex === 0) {
    prevButton.disabled = true;
    nextButton.disabled = false;
  } else if (slideIndex === slideCount - 1) {
    prevButton.disabled = false;
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}

// Инициализация слайдера
updateSlider();
