// Create map
const mymap = L.map("mapid").setView([-23.5975873, -46.6297641], 16);

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
});

let marker;

// create and add marker
mymap.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && mymap.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(mymap);
});

// add photo field
function addPhotoField() {
  // take photo in container #images
  const container = document.querySelector("#images");

  // take the .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // duplicate .new-image
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // verify if input value is void
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  // clean input
  newFieldContainer.children[0].value = "";

  // add .new-image to container #images
  container.appendChild(newFieldContainer);
}

// function that deletes the field when clicking on the x
function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    // delete input value
    span.parentNode.children[0].value = "";
    return;
  }

  // delete input
  span.parentNode.remove();
}

// yes or no options
function toggleSelect(event) {
  // remove all active class
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  // get clicked button and add active class
  const button = event.currentTarget;
  button.classList.add("active");

  // add value on hidden input
  const input = document.querySelector('[name="open_on_weekends"]');

  // verify yes or no
  input.value = button.dataset.value;
}

// validate that lat and lng are filled
function validate(event) {
  const valueLatLng = false;

  if (valueLatLng) event.preventDefault();
}
