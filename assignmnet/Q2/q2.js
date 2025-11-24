// Q2: Student Form Validator

const studentForm = document.getElementById('studentForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const formMessage = document.getElementById('formMessage');

function setValidity(inputEl, errorEl, isValid, message = '') {
  if (isValid) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
    errorEl.textContent = '';
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
    errorEl.textContent = message;
  }
}

studentForm.addEventListener('submit', function (event) {
  event.preventDefault();

  let isFormValid = true;

  // Name: only alphabets (allow spaces between words)
  const nameRegex = /^[A-Za-z ]+$/;
  if (!nameRegex.test(nameInput.value.trim())) {
    setValidity(nameInput, nameError, false, 'Name should contain alphabets only.');
    isFormValid = false;
  } else {
    setValidity(nameInput, nameError, true);
  }

  // Email: basic valid format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    setValidity(emailInput, emailError, false, 'Please enter a valid email (example@domain.com).');
    isFormValid = false;
  } else {
    setValidity(emailInput, emailError, true);
  }

  // Phone: exactly 10 digits
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneInput.value.trim())) {
    setValidity(phoneInput, phoneError, false, 'Phone must be exactly 10 digits.');
    isFormValid = false;
  } else {
    setValidity(phoneInput, phoneError, true);
  }

  // Password: 1 uppercase, 1 number, 1 special character
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}\[\]|;:'",.<>/?]).+$/;
  if (!passwordRegex.test(passwordInput.value)) {
    setValidity(
      passwordInput,
      passwordError,
      false,
      'Password must contain 1 uppercase letter, 1 number, and 1 special character.'
    );
    isFormValid = false;
  } else {
    setValidity(passwordInput, passwordError, true);
  }

  if (isFormValid) {
    formMessage.textContent = 'Form submitted successfully!';
    formMessage.className = 'success';
  } else {
    formMessage.textContent = 'Please fix the highlighted errors.';
    formMessage.className = '';
  }
});
