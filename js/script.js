var link = document.querySelector(".feedback-btn");
var feedback = document.querySelector(".feedback");
var close = document.querySelector(".feedback-close");
var overlay = document.querySelector(".feedback-overlay");
var username = feedback.querySelector("[name=feedback-name]");
var form = feedback.querySelector("form");
var email = feedback.querySelector("[name=feedback-email]");
var textarea = feedback.querySelector("[name=feedback-text]");
var usernameStorage = localStorage.getItem("username");
var emailStorage = localStorage.getItem("email");

link.addEventListener("click", function(event){
  event.preventDefault();
  feedback.classList.add("feedback-open");
  overlay.classList.add("feedback-overlay-open");
  username.focus();

  if (usernameStorage && emailStorage) {
    username.value = usernameStorage;
    email.value = emailStorage;
    textarea.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  feedback.classList.remove("feedback-open");
  feedback.classList.remove("feedback-error");
  overlay.classList.remove("feedback-overlay-open");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  feedback.classList.remove("feedback-open");
  feedback.classList.remove("feedback-error");
  overlay.classList.remove("feedback-overlay-open");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedback.classList.contains("feedback-open")) {
      feedback.classList.remove("feedback-open");
      feedback.classList.remove("feedback-error");
      overlay.classList.remove("feedback-overlay-open");
    }
  }
});

form.addEventListener("submit", function(event) {
  if (!username.value || !email.value || !textarea.value) {
    event.preventDefault();
    feedback.classList.add("feedback-error");
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
  }
});
