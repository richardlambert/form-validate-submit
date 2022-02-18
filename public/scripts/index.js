const loginForm = document.querySelector('form');
const usernameInput = document.getElementById('username-input');
const usernameError = document.getElementById('username-error');
const passwordInput = document.getElementById('password-input');
const passwordError = document.getElementById('password-error');

const validate = () => {
  let valid = true;
  if (usernameInput.value.trim() === '') {
    usernameInput.parentElement.style.backgroundColor = 'red';
    usernameError.classList.remove('error--hidden');
    valid = false;
  }
  if (passwordInput.value.trim() === '') {
    passwordInput.parentElement.style.backgroundColor = 'red';
    passwordError.classList.remove('error--hidden');
    valid = false;
  }
  return valid;
};

loginForm.addEventListener('submit', function (e) {
  const isValid = validate();
  if (!isValid) {
    console.log('Form validation failed, not submitted');
    e.preventDefault();
  } else {
    console.log('Form validation passed, submitted');
  }
});
