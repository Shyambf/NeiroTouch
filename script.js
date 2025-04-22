const carousel = document.getElementById('carousel');
const cards = document.querySelectorAll('.card');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener('click', () => {
  index = (index + 1) % cards.length;
  updateCarousel();
});

prev.addEventListener('click', () => {
  index = (index - 1 + cards.length) % cards.length;
  updateCarousel();
});

// Touch support
let startX = 0;

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    index = (index + 1) % cards.length;
  } else if (endX - startX > 50) {
    index = (index - 1 + cards.length) % cards.length;
  }
  updateCarousel();
});
