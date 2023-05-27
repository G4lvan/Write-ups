const menuToggle = document.querySelector(".menu-toggle");
const menuFloat = document.querySelector(".menu-float");

menuToggle.addEventListener("click", function () {
  menuFloat.classList.toggle("active");
});
