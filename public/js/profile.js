function enableEdit(node, query) {
	let form = document.querySelector(query);
	let inputs = form.querySelectorAll("input, button");
	for (let input of inputs) {
		input.removeAttribute("disabled");
	}
	node.classList.add("hidden");
}

function updateLatLonMove(e) {
    let lat = document.querySelector("#latitude");
    let lon = document.querySelector("#longitude");
    lat.value = e.target._latlng.lat;
    lon.value = e.target._latlng.lng;
}

function updateLatLon(lat, lon) {
    let latInput = document.querySelector("#latitude");
    let lonInput = document.querySelector("#longitude");
    latInput.value = lat;
    lonInput.value = lon;
}

function createMap(id, lat, lon) {
	var map = L.map(id).setView([lat, lon], 13);
	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		maxZoom: 19,
		attribution:
			'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	}).addTo(map);
	L.marker([lat, lon]).addTo(map);
    var marker
	function onMapClick(e) {
        if (marker) {
            map.removeLayer(marker);
        }
		marker = L.marker(e.latlng, {draggable: true}).addTo(map);
        marker.on('move', updateLatLonMove);
        updateLatLon(e.latlng.lat, e.latlng.lng);
	}
	map.on("click", onMapClick);
}
