document.addEventListener("DOMContentLoaded", function () {
  // Initialize Locomotive Scroll
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  setTimeout(() => {
    scroll.update();
  }, 100);
  

  const manubar = document.getElementById("manubar");
  if (manubar) {
    manubar.addEventListener("click", function () {
      const menu = document.getElementById("menu");
      menu.classList.toggle("expanded"); // Add/remove the expanded class
    });
  } else {
    console.error("Manubar element not found");
  }
});
