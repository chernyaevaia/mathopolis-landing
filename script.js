const buttons = Array.from(document.getElementsByClassName("carousel__button"));

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("hello");
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

let menuBtn = document.querySelector(".header__burgerMenu");
let menu = document.querySelector(".menu");
let donateBtn = document.querySelector(".menu__donateBtn");
menuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
  donateBtn.classList.toggle("active");
});
