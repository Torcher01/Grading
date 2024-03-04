const burgerMenu = document.querySelector('.header__burger-menu');
const menuOpenButton = document.querySelector('.header__burger-menu-open');
const menuOpenImage = document.querySelector('.header__burger-menu-open-img');
const menuCloseImage = document.querySelector('.header__burger-menu-close-img');


const burgerMenuToggle = () => {
  burgerMenu.classList.toggle('visually-hidden');
  menuOpenImage.classList.toggle('visually-hidden');
  menuCloseImage.classList.toggle('visually-hidden');
};

menuOpenButton.addEventListener('click', burgerMenuToggle);
