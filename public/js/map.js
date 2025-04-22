<<<<<<< HEAD
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

console.log(coordinates);

const marker = new mapboxgl.Marker({ color: "red" })
.setLngLat(coordinates)
.setPopup(new mapboxgl.Popup({offset: 25})
.setHTML("<p>Exact location will be provided after booking!</p>")
.setMaxWidth("300px"))
=======
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

console.log(coordinates);

const marker = new mapboxgl.Marker({ color: "red" })
.setLngLat(coordinates)
.setPopup(new mapboxgl.Popup({offset: 25})
.setHTML("<p>Exact location will be provided after booking!</p>")
.setMaxWidth("300px"))
>>>>>>> e7365edfee5f6e1e8b983133e05e7b3a72ae3902
.addTo(map);