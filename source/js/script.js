const hiddenClass = 'hidden';
const submitButtonId = 'js-submitButton';
const backButtonId = 'js-backButton';
const signupForm = document.getElementById('js-signup-group');
const signupSuccess = document.getElementById('js-success-group');
const submitButton = document.getElementById(submitButtonId);
const singupBack = document.getElementById(backButtonId);

const toggleSignupView = (event) => {
  event.preventDefault();
  signupForm.classList.toggle(hiddenClass);
  signupSuccess.classList.toggle(hiddenClass);
  changeAriaHidden(event.target.id);
}

const changeAriaHidden = function(elementId) {
  if (elementId === submitButtonId) {
    signupForm.setAttribute('aria-hidden', 'true');
    signupSuccess.setAttribute('aria-hidden', 'false');
  } else {
    signupSuccess.setAttribute('aria-hidden', 'true');
    signupForm.setAttribute('aria-hidden', 'false');
  }
}

submitButton.addEventListener('click', toggleSignupView);
singupBack.addEventListener('click', toggleSignupView);
