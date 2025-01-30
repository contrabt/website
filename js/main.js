AOS.init({
  once: true,
  disable: "phone",
  duration: 500,
  easing: "ease-out-cubic",
});

const carouselEl = document.querySelectorAll(".carousel");
if (carouselEl.length > 0) {
  const carousel = new Swiper(".carousel", {
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    grabCursor: true,
    loop: false,
    centeredSlides: false,
    initialSlide: 0,
    spaceBetween: 24,
    autoplay: {
      delay: 7000,
    },
    navigation: {
      nextEl: ".carousel-next",
      prevEl: ".carousel-prev",
    },
  });
}
// Wrap every letter in a span
var textWrapper = document.querySelector(".ml3");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline().add({
  targets: ".ml3 .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 450,
  delay: (el, i) => 100 * (i + 1),
});

