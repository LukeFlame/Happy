// create map
const mymap = L.map("mapid").setView([-23.5975873, -46.6297641], 16);

// create and add tileLayer
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

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// function that shows the marks on the map
function addMarker({ id, name, lat, lng }) {
  // create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`
  );

  // create and add marker
  L.marker([lat, lng], { icon }).addTo(mymap).bindPopup(popup);
}

// collect the data and switch to the addMarker function
const orphanagesSpan = document.querySelectorAll(".orphanages span");
orphanagesSpan.forEach((orphanageElement) => {
  const orphanage = {
    id: orphanageElement.dataset.id,
    name: orphanageElement.dataset.name,
    lat: orphanageElement.dataset.lat,
    lng: orphanageElement.dataset.lng,
  };

  addMarker(orphanage);
});
