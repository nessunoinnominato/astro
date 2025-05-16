// Preline library import
document.addEventListener("DOMContentLoaded", () => {
  import("preline/preline");
});

window.addEventListener("DOMContentLoaded", () => {
  if (window.feather) {
    window.feather.replace();
  }
});

console.log("everything works yay");
