// Profile Picture Modal Functionality
const profilePic = document.getElementById("profile-pic");
const photoModal = document.getElementById("photo-modal");
const closeButtons = document.querySelectorAll(".close");

profilePic.addEventListener("click", () => {
  photoModal.style.display = "flex"; // Show the modal
});

closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    photoModal.style.display = "none"; // Hide the modal
  });
});

// Contact Form Submission Modal
const contactForm = document.getElementById("contact-form");
const submitModal = document.getElementById("submit-modal");
const confirmBtn = document.getElementById("confirm-btn");
const cancelBtn = document.getElementById("cancel-btn");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent actual form submission
  submitModal.style.display = "flex"; // Show the submission confirmation modal
});

// Confirm Submission
confirmBtn.addEventListener("click", () => {
  alert("Form successfully submitted!"); // Show an alert
  submitModal.style.display = "none"; // Close the modal
  contactForm.reset(); // Reset the form
});

// Cancel Submission
cancelBtn.addEventListener("click", () => {
  submitModal.style.display = "none"; // Close the modal
});

// Close Modal When Clicking Outside
window.addEventListener("click", (event) => {
  if (event.target === photoModal || event.target === submitModal) {
    event.target.style.display = "none";
  }
});

