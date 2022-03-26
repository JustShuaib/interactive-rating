const list = document.getElementById("rate");
const submitBtn = document.querySelector(".submit-btn");
const selectedRating = document.getElementById("selected-rating");
const homeBtn = document.querySelector(".home");
submitBtn.addEventListener("click", handleSubmit);
const thankYouState = document.querySelector(".thank-you-state");
const selectedContainer = document.querySelector(".selected-container");
list.addEventListener("click", handleSelectRate);
homeBtn.addEventListener("click", backToHome);

let ratingValue;
function handleSelectRate(e) {
  ratingValue = e.target.textContent;
}
function handleSubmit(e) {
  if (ratingValue > 0) {
    selectedRating.textContent = ratingValue;
  } else {
    selectedContainer.textContent = "You did not select a rating!";
  }
  thankYouState.classList.add("show");
}
function backToHome() {
  thankYouState.classList.remove("show");
}
