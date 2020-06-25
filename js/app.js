const toggle = document.querySelector(".toggle-checkbox");
const plans = document.querySelector(".flex");

toggle.addEventListener("change", (e) => {
  plans.classList.toggle("show-monthly");
});
