const rate = document.getElementById("rate");
const submitBtn = document.querySelector(".submit-btn");
const selectedRating = document.getElementById("selected-rating");

submitBtn.addEventListener("click", handleSubmit);
rate.addEventListener("click", handleSelectRate);

let ratingValue;
function handleSelectRate(e) {
  ratingValue = e.target.textContent;
}
function handleSubmit(e) {
  console.log("You clicked submit");
  console.log(`You chose ${ratingValue}`);
}
