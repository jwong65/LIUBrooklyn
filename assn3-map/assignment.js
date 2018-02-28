var map =null;
var warsaw = {lat: 52.2581, lng: 21.0216};

console.log("Is this working?")

function initMap()
{
	console.log("Begin")
	
	map= new google.maps.Map(div, {
		zoom: 15, 
		center: warsaw
	});