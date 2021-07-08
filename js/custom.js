//btn scroll
const btnToggler = document.querySelector(".navbar-toggler");
const btnScrollDown = document.querySelector(".btn-last");

btnToggler.addEventListener("click", function () {
  btnScrollDown.classList.toggle("d-none");
});
