// Complexity is needed because the sign up button event effects elements in different parts of the page
//Note to self - it didn't start making particularly more sense though
const signupElementsId = ['js-signupForm', 'js-successMessage', 'js-signupButton'];
const ctaElementsId = ['js-ctaLink'];

const signupElements = signupElementsId.map(elementId => {
  return document.getElementById(elementId);
});
const ctaElements = ctaElementsId.map(elementId => {
  return document.getElementById(elementId);
});

const signupButton = signupElements[2];
const ctaLink = ctaElements[0];
const successMessage = signupElements[1];
const successMessageContent =  document.createElement('p');
successMessageContent.textContent = 'You are added to the next Night Flight event! We sent you an email with all details.';
successMessageContent.className = 'signup-successMessage';


const toggleVisibility = (elements) => {
  elements.forEach((element) => {
    element.toggleAttribute('hidden');
  });
};

const hideAndShowElements = function(e) {
  e.preventDefault();

  toggleVisibility(signupElements);
  toggleVisibility(ctaElements);

  successMessage.appendChild(successMessageContent);  
};

signupButton.addEventListener('click', hideAndShowElements);

// Going to form from CTA
const firstFormIntput = document.querySelector('input');
ctaLink.addEventListener('click', (e) => {
  e.preventDefault();
    firstFormIntput.focus();
});
