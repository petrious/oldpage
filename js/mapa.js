
var startLat = -20.346202;
var startLng = -40.296072;
var intervalRoute;
var map = L.map('mapid').setView([startLat, startLng], 14);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicGV0cmlvdXMiLCJhIjoiY2ptcjNwNmV4MXdzNzNrbWw5cHEzN3IwcyJ9.2znjqwiFmuWWVUick1gzCw'
}).addTo(map);


var waypointsArray = [
];


function setMap(waypointsList) {
    L.Routing.control({
        waypoints: waypointsList
    }).addTo(map);
}


setMap(waypointsArray);


function onMapClick(e) {
    console.log('coords', e.latlng);
    waypointsArray.push(e.latlng);
    setMap(waypointsArray);
}


map.on('click', onMapClick);
function initGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    } else {
        console.log("Ocorreu um erro!")
    }
}


function success(position) {
    waypointsArray.push({
        lat: position.coords.latitude,
        lng: position.coords.longitude
    });
    setMap(waypointsArray);
}


function startRoute() {
    alert('Iniciado');
    intervalRoute = setInterval(initGeolocation, 10000);
}


function stopRoute() {
    alert('Finalizada');
    clearInterval(intervalRoute);
}


function cleanRoute() {
    waypointsArray = [];
    setMap(waypointsArray);
    limparClasse();
}


function limparClasse() {
    $(".leaflet-marker-icon").remove();
    $("g").empty();
    $(".leaflet-shadow-pane").remove();

}



function toggleAlert(){
    $(".alert").toggleClass('in out'); 
    return false; 
}

$('#bsalert').on('close.bs.alert', toggleAlert)