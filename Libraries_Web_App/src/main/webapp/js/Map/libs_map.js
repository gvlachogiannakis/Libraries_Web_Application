var count;
map = new OpenLayers.Map("Map");
var mapnik = new OpenLayers.Layer.OSM();
map.addLayer(mapnik);

console.log("maps script executing..");

function setPosition(lat, lon) {
    console.log("setPosition called");
    var fromProjection = new OpenLayers.Projection("EPSG:4326");
    var toProjection = new OpenLayers.Projection("EPSG:900913");
    var position = new OpenLayers.LonLat(lon, lat).transform(fromProjection, toProjection);

    return position;
}

function handler(position, message) {
    console.log("handler called");
    var popup = new OpenLayers.Popup.FramedCloud("Popup", position, null, message, null, true);
    map.addPopup(popup);
}

var markers = new OpenLayers.Layer.Markers("Markers");
map.addLayer(markers);

var position = setPosition(35.3389645, 25.1333462);
var mar = new OpenLayers.Marker(position);
markers.addMarker(mar);
mar.events.register('mousedown', mar, function(evt){ handler(position, 'Vikelaia')});

var position1 = setPosition(35.3070443, 25.0759881);
var mar = new OpenLayers.Marker(position1);
markers.addMarker(mar);
mar.events.register('mousedown', mar, function(evt){ handler(position1, 'UOC Lib Her')});

var position2 = setPosition(35.3036698, 24.4120166);
var mar = new OpenLayers.Marker(position2);
markers.addMarker(mar);
mar.events.register('mousedown', mar, function(evt){ handler(position2, 'UOC Lib Reth')});

const zoom = 10;
map.setCenter(position, zoom);

for (let i = 0; i < count; i++) {
    var position = setPosition(lat, lon);
    var mar = new OpenLayers.Marker(position);
    markers.addMarker(mar);
    mar.events.register('mousedown', mar, function(evt){ handler(position, message)});
}

function getNumOfLibs () {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText);
      } else {
          console.log("Error on retrieving number of libraries. Server error code returned " + xhr.status)
      }
    };

    xhr.open('GET', 'numOfLibs');
    xhr.send();
}