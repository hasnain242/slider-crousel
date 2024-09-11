const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const dots = document.querySelectorAll('.dot');
const carouselContainer = document.querySelector('.carousel-container');

let counter = 0;
const size = images[0].clientWidth;
let autoSlideInterval = null;

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[counter].classList.add('active');
}


function nextSlide() {
  if (counter >= images.length - 1) {
    counter = -1; 
  }
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  updateDots();
}

function prevSlide() {
  if (counter <= 0) {
    counter = images.length; 
  }
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  updateDots();
}


document.getElementById('nextBtn').addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  prevSlide();
  resetInterval(); 
});


dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    counter = index;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    updateDots();
    resetInterval(); 
  });
});

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}

function resetInterval() {
  clearInterval(autoSlideInterval);
  startAutoSlide(); 
}

startAutoSlide();


carouselContainer.addEventListener('mouseenter', () => {
  clearInterval(autoSlideInterval);
});


carouselContainer.addEventListener('mouseleave', () => {
  startAutoSlide(); 
});
