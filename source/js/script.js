const signupForm = document.getElementById('js-signupForm');
const successMessage = document.getElementById('js-successMessage');
const signupButton = document.getElementById('js-signupButton');
const successMessageContent =  document.createElement('p');
successMessageContent.textContent = 'You\'ve been added! Check up your email!';
successMessageContent.className = 'signup-successMessage';

const toggleSignupView = function(event) {
  event.preventDefault();
  signupForm.toggleAttribute('hidden');
  signupButton.toggleAttribute('hidden');
  successMessage.toggleAttribute('hidden');
  successMessage.appendChild(successMessageContent);
};

signupButton.addEventListener('click', toggleSignupView); 
