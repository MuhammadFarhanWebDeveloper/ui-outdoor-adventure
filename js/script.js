let hamburger = document.getElementById("hamburger");
let menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("opacity-0");
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  spaceBetweem: 32,
  grabCursor: true,


  breakpoints: {
    // when window width is >= 768px (desktop)
    768: {
      slidesPerView: 3, // 3 slides per view for desktops
      spaceBetween: 30, // Space between slides
    },
    // when window width is < 768px (mobile)
    0: {
      slidesPerView: 1, // 1 slide per view for mobiles
      spaceBetween: 10, // Space between slides
    },
  },
  
  
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
});
