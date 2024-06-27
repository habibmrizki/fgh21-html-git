const menuButton = document.getElementById("hamburger-menu");
const navbarNav = document.getElementById("navbar-nav");
const button = document.getElementById("button");
window.onresize = function () {
  navbarNav.style.display = "block";
  button.style.display = "block";
};
menuButton.onclick = () => {
  if (navbarNav.style.display === "none") {
    navbarNav.style.display = "block";
  } else {
    navbarNav.style.display = "none";
  }

  if (button.style.display === "none") {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};
