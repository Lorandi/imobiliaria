const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}

//create map
const map = L.map("mapid").setView([-30.126123,-51.22548], 16)

//caso queira deixar o mapa fixo, usar o objeto "options como segundo argumento do L.map("mapid",options)
//const map = L.map("mapid", options).setView([-30.126123,-51.22548], 16)

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map)

//create icon layer
const icon = L.icon({
    iconUrl: "images/favicon.png",
    iconSize:[40,40],
    iconAnchor:[29, 40],   
})

let marker;

//create and add marker
map.on('click', (event) =>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat,lng], { icon })
    .addTo(map)
})


//L.marker([-30.126123,-51.22548],{ icon })
//.addTo(map)



