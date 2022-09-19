const INTERVAL_TIME = 2500;
const images = document.querySelectorAll('.hero-image-item');
let currentImage = 0;

const moveImage = (moveTo) => {
  if (moveTo >= images.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = images.length - 1;
  }

  images[currentImage].classList.toggle('active');
  images[moveTo].classList.toggle('active');
  images[moveTo].style.rotate = `${Math.floor(Math.random() * 82) - 46}deg`;

  currentImage = moveTo;
};

const initSlides = () => {
  let i = 1;

  setInterval(() => {
    if (i >= images.length) {
      i = 0;
    }

    moveImage(i);

    i++;
  }, INTERVAL_TIME);
};

initSlides();

const toggleMenu = () => {
  document.querySelector('.menu-button').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('active');
  document.querySelector('body').classList.toggle('no-scroll');
};
