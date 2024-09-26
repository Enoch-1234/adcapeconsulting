function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

document.querySelectorAll(".navbar-items ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetSection = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: "smooth",
    });
  });
});

document.querySelectorAll(".menu a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetSection = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: "smooth",
    });
  });
});

function initMap() {
  const location = { lat: 5.5486, lng: -0.2012 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4, // Map zoom level
    center: location,
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
