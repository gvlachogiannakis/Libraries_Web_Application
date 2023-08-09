map = new OpenLayers.Map("Map");
var mapnik = new OpenLayers.Layer.OSM();
map.addLayer(mapnik);

var popupSize = new OpenLayers.Size(200, 100);

function setPosition(lat, lon) {
    var fromProjection = new OpenLayers.Projection("EPSG:4326");
    var toProjection = new OpenLayers.Projection("EPSG:900913");
    var position = new OpenLayers.LonLat(lon, lat).transform(fromProjection, toProjection);

    return position;
}

function handler(position, message) {
    var popup = new OpenLayers.Popup.FramedCloud("Popup", position, null, '<div class="custom-popup-content">' + message + '</div>', null, true);

    map.addPopup(popup);
}

var markers = new OpenLayers.Layer.Markers("Markers");
map.addLayer(markers);

const xhr = new XMLHttpRequest();
xhr.open("GET", "GetCoordinates");
xhr.onreadystatechange = function() {
    if (xhr.status === 200 && xhr.readyState === 4) {
        console.log("Server returned coordinates");
        var coordinates = JSON.parse(xhr.responseText);

        coordinates.forEach(c => {
            console.log("lat: " + c.lat + ", lon: " + c.lon + ", name: " + c.name);

            var position = setPosition(c.lat, c.lon);
            var mar = new OpenLayers.Marker(position);
            markers.addMarker(mar);
            mar.events.register('mousedown', mar, function(evt){ handler(position, c.name)});
        });



        var position = setPosition(coordinates[0].lat, coordinates[0].lon);
        const zoom = 10;
        map.setCenter(position, zoom);
    }
};
xhr.send();