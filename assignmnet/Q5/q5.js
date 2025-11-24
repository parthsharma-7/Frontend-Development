// Q5: Movie Ticket Booking

const bookingForm = document.getElementById('bookingForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const seatsField = document.getElementById('seats');

const nameErrorEl = document.getElementById('nameError');
const emailErrorEl = document.getElementById('emailError');
const seatsErrorEl = document.getElementById('seatsError');

const ticketDetailsEl = document.getElementById('ticketDetails');

function setFieldValidity(inputEl, errorEl, isValid, message = '') {
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

bookingForm.addEventListener('submit', function (event) {
  event.preventDefault();

  let isValid = true;

  // Name: alphabets only (allow spaces)
  const nameRegex = /^[A-Za-z ]+$/;
  if (!nameRegex.test(nameField.value.trim())) {
    setFieldValidity(nameField, nameErrorEl, false, 'Name should contain alphabets only.');
    isValid = false;
  } else {
    setFieldValidity(nameField, nameErrorEl, true);
  }

  // Email: proper format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailField.value.trim())) {
    setFieldValidity(emailField, emailErrorEl, false, 'Please enter a valid email address.');
    isValid = false;
  } else {
    setFieldValidity(emailField, emailErrorEl, true);
  }

  // Seats: 1 to 10 only
  const seatsValue = parseInt(seatsField.value, 10);
  if (Number.isNaN(seatsValue) || seatsValue < 1 || seatsValue > 10) {
    setFieldValidity(seatsField, seatsErrorEl, false, 'Seats must be a number between 1 and 10.');
    isValid = false;
  } else {
    setFieldValidity(seatsField, seatsErrorEl, true);
  }

  if (!isValid) {
    ticketDetailsEl.textContent = '';
    return;
  }

  // Create booking object after successful validation
  const booking = {
    name: nameField.value.trim(),
    email: emailField.value.trim(),
    seats: seatsValue
  };

  // Display ticket details
  ticketDetailsEl.textContent = `Ticket booked successfully!\nName: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
});
