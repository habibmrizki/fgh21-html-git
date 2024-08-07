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

// DOM CONTENT EVENT
const listEvent = document.getElementById("list-event");

const events = [
  {
    title: "Sights & Sounds Exhibition",
    date: "Wed, 15 Nov, 4:00 PM",
    image: "assets/img/picture-event1.png",
  },

  {
    title: "Movie Vector",
    date: "Fri, 12 Jan, 7:00 PM",
    image: "assets/img/picture-event2.png",
  },

  {
    title: "Let's Play Skater",
    date: "Sun, 1 Aug, 3:00 PM",
    image: "assets/img/picture-event3.jpg",
  },
  {
    title: "Macth MU vs Arsenal",
    date: "Mon, 15 Nov, 6:00 PM",
    image: "assets/img/picture-event4.jpg",
  },
  {
    title: "Meeting Sribu",
    date: "Wed, 26Ap, 9:00 AM",
    image: "assets/img/picture-event6.jpg",
  },
  {
    title: "Class Cooking",
    date: "Sat, 20 March, 12:00 PM",
    image: "assets/img/picture-event5.jpg",
  },
  {
    title: "Party Color Fun",
    date: "Sat, 3 Oct, 8:00 AM",
    image: "assets/img/picture-event7.jpg",
  },
];

events.forEach((detail) => {
  const linkPage = document.createElement("a");
  linkPage.setAttribute("href", "event.html");

  const contentEventIndex = document.createElement("div");
  contentEventIndex.classList.add("content-event-index");

  const img = document.createElement("img");
  img.setAttribute("src", detail.image);
  img.setAttribute("alt", detail.title);

  contentEventIndex.appendChild(img);

  const informationEventIndex = document.createElement("div");
  informationEventIndex.classList.add("information-event-index");

  const dateEventIndex = document.createElement("div");
  dateEventIndex.classList.add("date-event-index");

  const eventDate = document.createElement("div");
  eventDate.textContent = detail.date;

  dateEventIndex.appendChild(eventDate);

  const eventTitle = document.createElement("div");
  eventTitle.textContent = detail.title;

  dateEventIndex.appendChild(eventTitle);

  const attende = document.createElement("div");
  attende.classList.add("attende");

  const attendantPic = [
    "assets/img/people1.png",
    "assets/img/people2.png",
    "assets/img/people3.png",
    "assets/img/people4.png",
  ];

  attendantPic.forEach((link) => {
    const picContainer = document.createElement("div");
    const pic = document.createElement("img");
    pic.setAttribute("src", link);
    picContainer.setAttribute("alt", "Attendant");
    picContainer.appendChild(pic);
    attende.appendChild(picContainer);
  });

  informationEventIndex.appendChild(dateEventIndex);
  informationEventIndex.appendChild(attende);

  contentEventIndex.appendChild(informationEventIndex);

  linkPage.appendChild(contentEventIndex);

  listEvent.appendChild(linkPage);
});

const btnToLogin = document.getElementById("to-login");
btnToLogin.onclick = () => {
  window.location = "/sign-in.html";
};

const btnTosignup = document.getElementById("to-signup");
btnTosignup.onclick = () => {
  window.location = "/sign-up.html";
};
