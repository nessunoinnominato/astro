<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Swiper from 'swiper';
  import { Navigation, Pagination } from 'swiper/modules';

  // Import Swiper CSS
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  // Your image imports
  import car1 from '@assets/vehicle.avif';
  import car2 from '@assets/vehicle2.avif';
  import car3 from '@assets/vehicle3.avif';
  // Add more image imports if you have more actual images, or reuse existing ones for testing
  import car4 from '@assets/vehicle.avif'; // Reusing for more slides
  import car5 from '@assets/vehicle2.avif'; // Reusing for more slides
  import car6 from '@assets/vehicle3.avif'; // Reusing for more slides

  let swiperInstance: Swiper | undefined;

  onMount(() => {
    swiperInstance = new Swiper('.my-custom-swiper', {
      loop: true, // Typically used for continuous effect with 'auto' and 'centered'
      slidesPerView: "auto", // THIS IS THE KEY for variable width slides
      spaceBetween: 30,
      centeredSlides: true, // THIS IS THE KEY for centering the active slide
      navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      modules: [Navigation, Pagination],
    });

    // CRUCIAL: Force Swiper to update its layout after a short delay.
    // This fixes issues where the container might not have its final dimensions
    // when Swiper first initializes.
    setTimeout(() => {
      if (swiperInstance) {
        swiperInstance.update();
        // Also useful to update progress/bullets if they seem off on initial load
        swiperInstance.updateProgress();
        swiperInstance.updateSlidesClasses();
        console.log("Swiper forced update after timeout. Slides should now be visible and correct.");
      }
    }, 100); // 100ms is usually sufficient. Adjust if needed.

    console.log("Swiper Svelte component mounted and initialized with auto-width slides!");
  });

  onDestroy(() => {
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      console.log("Swiper Svelte component destroyed.");
    }
  });

  // Added more slides for better testing of 'slidesPerView: auto'
  const slides = [
    { img: car2.src,
      alt: "Car 2 - Precision Engineered",
      title: "Precision Engineered",
      description: "Crafted for exhilarating moments and unmatched control." },
      
    { img: car1.src,
      alt: "Car 1 - Ultimate Drive",
      title: "The Ultimate Drive",
      description: "Experience unparalleled performance and luxury on every journey." },

    { img: car3.src,
      alt: "Car 3 - Future of Motion",
      title: "Future of Motion",
      description: "Innovation meets tradition in a breathtaking design." },

    // Added more slides here to make 'auto' visible with more content
    { img: car4.src,
      alt: "Car 4 - Dynamic Performance",
      title: "Dynamic Performance",
      description: "Unleash the raw power with every acceleration." },

    { img: car5.src,
      alt: "Car 5 - Masterpiece of Craft",
      title: "Masterpiece of Craft",
      description: "Artistry and engineering in perfect harmony." },

    { img: car6.src,
      alt: "Car 6 - Iconic Legacy",
      title: "Iconic Legacy",
      description: "Driving the future, honoring the past." },
  ];
</script>

<h1 class="text-6xl mt-52 mb-20 text-center">Caratteristiche principali.</h1>

<div class="my-custom-swiper relative overflow-hidden pt-[50px] pb-[50px] z-20">
  <div class="absolute top-[60px] right-0 flex gap-x-2 z-10 p-4">
    <button class="swiper-button-prev-custom
                   flex items-center justify-center
                   w-10 h-10 rounded-full
                   bg-white/15 hover:bg-white/30
                   transition-colors duration-300 ease-in-out
                   focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>

    <button class="swiper-button-next-custom
                   flex items-center justify-center
                   w-10 h-10 rounded-full
                   bg-white/15 hover:bg-white/30
                   transition-colors duration-300 ease-in-out
                   focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>

  <div class="swiper-wrapper">
    {#each slides as slide}
      <div class="swiper-slide w-auto max-w-[800px] h-[800px] relative rounded-2xl overflow-hidden flex-shrink-0
                  md:h-[300px] sm:h-[250px]">
        <img src={slide.img} alt={slide.alt} class="w-auto h-full max-h-[800px] object-cover block" />
        <div class="absolute inset-x-0 bottom-0 h-[70%] flex flex-col justify-end p-8 text-white
                    bg-gradient-to-t from-black/80 to-transparent">
          <h3 class="text-[2.2rem] font-bold mb-2 leading-tight">
            {slide.title}
          </h3>
          <p class="text-[1.1rem] leading-snug">
            {slide.description}
          </p>
        </div>
      </div>
    {/each}
  </div>

  <div class="swiper-pagination absolute inset-x-0 bottom-0 flex justify-center p-4 z-10"></div>
</div>

<style is:global>
  .swiper-button-disabled {
    @apply opacity-50 cursor-not-allowed;
  }

  .my-custom-swiper .swiper-pagination-bullet {
    @apply bg-white/40 opacity-100 w-[10px] h-[10px] rounded-full mx-[6px] transition-all duration-300 ease-in-out;
  }

  .my-custom-swiper .swiper-pagination-bullet-active {
    @apply bg-white w-[14px] h-[14px] mx-[4px];
  }
</style>