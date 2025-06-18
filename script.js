let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(-${index * 100}vw)`;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);
