document.addEventListener("DOMContentLoaded", function () {

  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });  

  // Trigger update when the footer is loaded or when the layout changes
  scroll.update();

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
