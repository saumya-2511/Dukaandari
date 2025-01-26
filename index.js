// your code goes here
// Get the navbar and toggle buttons
const openNavbar = document.getElementById("openNavbar");
const closeNavbar = document.getElementById("closeNavbar");
const navbar = document.querySelector(".navbar-links");

// Open the navbar
openNavbar.addEventListener("click", () => {
  navbar.classList.add("show");
});

// Close the navbar
closeNavbar.addEventListener("click", () => {
  navbar.classList.remove("show");
});
