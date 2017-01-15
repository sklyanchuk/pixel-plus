var formOpenBtn = document.querySelector('.header__feedback-link');
var feedbackForm = document.querySelector('.feedback');
var formCloseBtn = document.querySelector('.feedback__close-btn');
var inputName = document.querySelector('.feedback__input');
var body = document.querySelector('body');

function showForm(event) {
  event.preventDefault();
  body.classList.add('overlay');
  feedbackForm.classList.remove('feedback_hidden');
  inputName.focus();
}
function closeForm(event) {
  event.preventDefault();
  feedbackForm.classList.add('feedback_hidden');
  body.classList.remove('overlay');
}
function closeFormEsc(event) {
  if (event.keyCode == 27) {
    feedbackForm.classList.add('feedback_hidden');
    body.classList.remove('overlay');
  }
}

formOpenBtn.addEventListener('click', showForm);
formCloseBtn.addEventListener('click', closeForm);
window.addEventListener('keydown', closeFormEsc);
