var map =null;
var warsaw = {lat: 52.2581, lng: 21.0216};


function initMap()
{
	console.log("Begin")
	var div = document.getElementById("thismap")
	console.log(div)
	
	map= new google.maps.Map(div, {
		zoom: 15, 
		center: warsaw
	});
}