const menuButton = document.getElementById("menu");
const profile = document.getElementById("profile");
const navbarNav = document.getElementById("navbar-nav");
window.onresize = function () {
  profile.style.display = "block";
};
menuButton.onclick = () => {
  if (profile.style.display === "none") {
    profile.style.display = "block";
  } else {
    profile.style.display = "none";
  }

  if (navbarNav.style.display === "none") {
    navbarNav.style.display = "block";
  } else {
    navbarNav.style.display = "none";
  }
};
