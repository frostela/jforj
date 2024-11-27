document.addEventListener("DOMContentLoaded", function () {
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
