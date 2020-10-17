const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// Get values from html
const lat = document.querySelector("[data-lat]").dataset.lat;
const lng = document.querySelector("[data-lng]").dataset.lng;

// Create map
const mymap = L.map("mapid", options).setView([lat, lng], 16);

// Create and add tileLayer
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoibHVrZWZsIiwiYSI6ImNrZzhscDMweTA0dm8yeHF4eDc0MWFrMm8ifQ.habNNF0sWgXLkDNZhhWVdg",
  }
).addTo(mymap);

// Create icon

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Create and add marker
L.marker([lat, lng], { icon }).addTo(mymap);

// image gallery

function selectImage(event) {
  const button = event.currentTarget;

  // delete all 'active' classes
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => button.classList.remove("active"));

  // select the image
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // att the main images
  imageContainer.src = image.src;

  // add 'active' class
  button.classList.add("active");
}
