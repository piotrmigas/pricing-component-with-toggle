const toggle = document.querySelector(".toggle");
const plans = document.querySelector(".flex");

toggle.addEventListener("change", (e) => {
  plans.classList.toggle("show-monthly");
});
