<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/splide/css'; // Basic Splide CSS theme

  // Your image imports
  import car1 from '@assets/vehicle.avif';
  import car2 from '@assets/vehicle2.avif';
  import car3 from '@assets/vehicle3.avif';
  import car4 from '@assets/vehicle.avif';
  import car5 from '@assets/vehicle2.avif';
  import car6 from '@assets/vehicle3.avif';

  // Changed type to `any` or you could use `SplideJSInstance | undefined` if importing it
  let splideComponentRef: any; // Used to reference the Splide Svelte component instance if needed

  const splideOptions = {
    // type: 'loop',
    perPage: 1,
    autoWidth: true,
    gap: '30px',
    // FIX: Use the specific string literal 'center' for the focus option
    focus: 'center' as const, // Added 'as const' to hint TypeScript it's a literal type
    arrows: true,
    pagination: true,
  };

  const slides = [
    { img: car1.src, alt: "Car 1 - Gli esordi.", title: "The Ultimate Drive", description: "All'inizio, mi sono guardato intorno senza riuscire a trovare l'auto dei miei sogni. Così ho deciso di costruirmela da solo. - Prof. Dr. Ing. h.c. Ferry Porsche" },
    { img: car2.src, alt: "Car 2 - Precision Engineered", title: "Precision Engineered", description: "Crafted for exhilarating moments and unmatched control." },
    { img: car3.src, alt: "Car 3 - Future of Motion", title: "Future of Motion", description: "Innovation meets tradition in a breathtaking design." },
    { img: car4.src, alt: "Car 4 - Dynamic Performance", title: "Dynamic Performance", description: "Unleash the raw power with every acceleration." },
    { img: car5.src, alt: "Car 5 - Masterpiece of Craft", title: "Masterpiece of Craft", description: "Artistry and engineering in perfect harmony." },
    { img: car6.src, alt: "Car 6 - Iconic Legacy", title: "Iconic Legacy", description: "Driving the future, honoring the past." },
  ];
</script>

<h2 class="text-5xl mt-52 mb-20 text-center leading-tight">Il massimo livello di personalizzazione da<br> oltre 70 anni.</h2>

<div class="my-porsche-splide relative overflow-hidden pt-[50px] pb-[50px] z-20 cursor-grab">
  <Splide options={splideOptions} aria-label="Porsche-like product slider">
  {#each slides as slide}
      <SplideSlide>
        <div class="min-h-[650px] relative rounded-xl overflow-hidden object-cover flex-shrink-0
                    md:h-[300px] sm:h-[250px]">
          <img src={slide.img} alt={slide.alt} class="w-auto h-full max-w-[850px] object-cover block" />
          <div class="absolute inset-x-0 bottom-0 h-[70%] flex flex-col justify-end p-8 text-white
                      bg-gradient-to-t from-black/80 to-transparent">
            <h3 class="text-3xl font-semibold mb-2 leading-tight">
              {slide.title}
            </h3>
            <p class="text-xl leading-snug text-md">
              {slide.description}
            </p>
          </div>
        </div>
      </SplideSlide>
    {/each}
  </Splide>
</div>

<style is:global>
  /* Navigation Arrows */
  .splide__arrow {
    @apply flex items-center justify-center
           w-10 h-10 rounded-full
           bg-white/15 hover:bg-white/30
           transition-colors duration-300 ease-in-out
           focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50;
    
    position: absolute;
    top: 60px;
    transform: translateY(0);
    z-index: 10;
    opacity: 1;
  }

  .splide__arrow--prev {
    right: 58px;
    bottom: 50%;
    left: auto;
  }

  .splide__arrow--next {
    right: 10px;
    left: auto;
  }

  .splide__arrow svg {
    @apply w-6 h-6 text-white;
    fill: none;
    stroke: currentColor;
  }
  .splide__arrow--prev svg path {
    d: path("M15 19l-7-7 7-7");
  }
  .splide__arrow--next svg path {
    d: path("M9 5l7 7-7 7");
  }

  .splide__arrow:disabled {
    @apply opacity-50 cursor-not-allowed;
  }

  /* Pagination Dots */
  .splide__pagination {
    @apply absolute inset-x-0 bottom-0 flex justify-center p-4 z-10;
  }
  .splide__pagination__page {
    @apply bg-white/40 opacity-100 w-[10px] h-[10px] rounded-full mx-[6px] transition-all duration-300 ease-in-out;
  }
  .splide__pagination__page.is-active {
    @apply bg-white w-[14px] h-[14px] mx-[4px];
  }
</style>