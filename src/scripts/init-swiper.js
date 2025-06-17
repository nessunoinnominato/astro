// src/scripts/init-swiper.ts
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

Swiper.use([Navigation, Pagination]);

export function initSwiper() {
  new Swiper(".swiper", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  console.log("porcodio");
}
