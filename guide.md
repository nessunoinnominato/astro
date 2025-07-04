# Component rebuild request:

- My project is in Astro + Tailwind CSS, that's it, I want raw HTML+TAILWIND for each static component.

- The UI I'm building uses a 12 grid cols layout.

## Design specs:

<!-- Main layout coordinates -->

- "grid-cols-12" layout on parent wrappers
- "col-span-10" for 1st child which is supposed to take up the whole screen.
- "col-start-2" allowing only 10 out of the 12 grid cols to be available
  and automatically creating blank spaces on the sides.

<!-- Sections Spacing -->

- "my-36" Y spacing for sections

<!-- Typography -->

- "text-black" for all the text, UNLESS background is going to also be black,
  in that case switch to "text-white"
- For h1 titles use = "text-3xl lg:text-6xl"
- For h2 titles use = "text-2xl lg:text-5xl"
- For h3 titles use = "text-xl lg:text-4xl"
- All the above titles should have at least "mb-12" of spacing below (depending on the design it might be increased in some cases).
- For P text use these classes:
  "font-medium leading-normal my-4 md:mb-8".

<!-- Borders -->

- "rounded-lg md:rounded-xl" for most component borders use these parameters.
- "border-2" for thicker borders (used for buttons as well)
- "border" for most regular borders

<!-- Buttons -->

- w-full md:w-[200px] h-[55px] bg-black text-white font-medium rounded-md hover:opacity-90 transition
  // Button classes for a black button

w-full md:w-[200px] h-[55px] border-2 border-black text-black font-medium rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition
// Button classes for border, with transparent bg button

### Conclusion

Before messing up styles or taking initiative on completely different styling options ask for confirmation.
