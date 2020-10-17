// Create map
const mymap = L.map('mapid').setView([-23.5975873,-46.6297641], 16);

// Create and add tileLayer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVrZWZsIiwiYSI6ImNrZzhscDMweTA0dm8yeHF4eDc0MWFrMm8ifQ.habNNF0sWgXLkDNZhhWVdg'
}).addTo(mymap);

// Create icon 

const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

function addMarker({ id, name, lat, lng }) {



    // Create popup overlay

    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`);

    // Create and add marker
    L   
        .marker([lat,lng], { icon })
        .addTo(mymap)
        .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span');
orphanagesSpan.forEach((orphanageElement => {
    console.log(orphanageElement)
    const orphanage = {
        id: orphanageElement.dataset.id,
        name: orphanageElement.dataset.name,
        lat: orphanageElement.dataset.lat,
        lng: orphanageElement.dataset.lng
    }

    addMarker(orphanage)
}))
