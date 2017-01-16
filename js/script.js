// If no js
var body = document.querySelector('body');
body.classList.remove('no-js');

// Popup feedback form
var formOpenBtn = document.querySelector('.header__feedback-link');
var feedbackForm = document.querySelector('.feedback');
var formCloseBtn = document.querySelector('.feedback__close-btn');
var input = document.querySelectorAll('.feedback__input');

function showForm(event) {
  event.preventDefault();
  body.classList.add('overlay');
  feedbackForm.classList.add('feedback_visible');
  input[0].focus();
  feedbackForm.classList.add('feedback_animate');
}
function closeForm(event) {
  event.preventDefault();
  feedbackForm.classList.remove('feedback_animate');
  feedbackForm.classList.remove('feedback_visible');
  body.classList.remove('overlay');
}
function closeFormEsc(event) {
  if (event.keyCode == 27) {
    feedbackForm.classList.remove('feedback_animate');
    feedbackForm.classList.remove('feedback_visible');
    body.classList.remove('overlay');
  }
}

formOpenBtn.addEventListener('click', showForm);
formCloseBtn.addEventListener('click', closeForm);
window.addEventListener('keydown', closeFormEsc);


// Slides
var slides = document.querySelectorAll('.slider__slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 4000);
var next = document.querySelector('.slider__control_prev');
var previous = document.querySelector('.slider__control_next');

next.addEventListener("click", nextSlide);
previous.addEventListener("click", previousSlide);

function nextSlide() {
    clearInterval(slideInterval);
    goToSlide(currentSlide + 1);
}
function previousSlide() {
    clearInterval(slideInterval);
    goToSlide(currentSlide - 1);
}
function goToSlide(n) {
    slideInterval = setInterval(nextSlide, 4000);
    slides[currentSlide].classList.remove('slider__slide_show');
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].classList.add('slider__slide_show');
}
