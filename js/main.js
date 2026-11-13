const bookingForm = document.querySelector("#booking-form");
const bookingMessage = document.querySelector("#form-message");
const trainingDate = document.querySelector("#training-date");

function setMinimumTrainingDate() {
  const today = new Date();
  const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);

  trainingDate.min = localDate;
}

function handleBookingSubmit(event) {
  event.preventDefault();
  const formData = new FormData(bookingForm);
  const clientName = formData.get("name");
  const trainingType = formData.get("type");

  bookingMessage.textContent = `${clientName}, заявка на тренировку «${trainingType}» принята.`;
  bookingForm.reset();
  setMinimumTrainingDate();
}

function initializeBookingForm() {
  setMinimumTrainingDate();
  bookingForm.addEventListener("submit", handleBookingSubmit);
}

initializeBookingForm();
