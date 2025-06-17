import feather from "feather-icons"; // This import will be resolved by Vite during bundling

// This code will run once the DOM is fully loaded in the browser.
document.addEventListener("DOMContentLoaded", () => {
  feather.replace(); // Call feather.replace() to convert your <i> tags to SVGs
});
