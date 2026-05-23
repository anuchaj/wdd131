// Footer year
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// Last modified
const lastModifiedSpan = document.getElementById("last-modified");
lastModifiedSpan.textContent = document.lastModified;

// Hamburger menu toggle
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  // change icon
  if (menuButton.textContent === "☰") {
    menuButton.textContent = "✖";
  } else {
    menuButton.textContent = "☰";
  }
});