// carrossel
const imgs = [
  { url: "./imgs/Chanel-Logo.png" },
  { url: "./imgs/Gucci_logo.png" },
  { url: "./imgs/Starbucks-Logo.png" },
  { url: "./imgs/Apple-logo.png" },
  { url: "./imgs/google-logo.png" },
  { url: "./imgs/Louis-Vitton-Logo.png" },
];

function listSlide() {
  const carouselContainer = document.querySelector(".carousel-images");
  imgs.forEach((img, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = img.url;
    if (index === 0 || index === 1 || index === 2 || index === 4) {
      imgElement.classList.add("active");
    }
    carouselContainer.appendChild(imgElement);
  });

  // setInterval(() => {
  //   moveSlide(1);
  // }, 10000);
}

listSlide();

function moveSlide(direction) {
  const carouselContainer = document.querySelector(".carousel-images");
  carouselContainer.style.transition = "transform 0.5s ease-in-out";

  const activeSlides = carouselContainer.querySelectorAll(".active");

  if (direction === 1) {
    const firstSlide = activeSlides[0];
    firstSlide.classList.remove("active");
    carouselContainer.appendChild(firstSlide);

    const nextSlideIndex =
      (Array.from(carouselContainer.children).indexOf(
        activeSlides[activeSlides.length - 1]
      ) +
        1) %
      carouselContainer.children.length;
    carouselContainer.children[nextSlideIndex].classList.add("active");
  } else {
    const lastSlide = activeSlides[activeSlides.length - 1];
    lastSlide.classList.remove("active");
    carouselContainer.prepend(lastSlide);

    const nextSlideIndex =
      (Array.from(carouselContainer.children).indexOf(activeSlides[0]) - 1) %
      carouselContainer.children.length;
    carouselContainer.children[nextSlideIndex].classList.add("active");
  }
}
