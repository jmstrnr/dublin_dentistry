const form = document.querySelector('.contact-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([name, email]);
    checkEmail(email);
});


// Get fieldname
function getFieldName(input) {
    console.log(input.id.charAt(0).toUpperCase() + input.id.slice(1));
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
    
// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
      if (input.value.trim() === '') {
        showError(input, `Please enter your ${getFieldName(input)}`);
      } else {
        showSuccess(input);
      }
    });
};
  

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add('error');
  formControl.classList.remove('success');
  const small = formControl.querySelector('.error-message');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add('success');
  formControl.classList.remove('error');
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Please enter a valid Email');
  }
}

