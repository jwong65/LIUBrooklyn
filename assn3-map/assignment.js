var map =null;
var warsaw = {lat: 52.2581, lng: 21.0216};
var sydney = {lat: -33.8688, lng: 151.2093};
var singapore = {lat: 1.3521, lng: 103.8198};


function initMap()
{
	console.log("Begin")
	var div = document.getElementById("thismap")
	console.log(div)
	
	map= new google.maps.Map(div, {
		zoom: 15, 
		center: warsaw
	});
	var marker1 = new google.maps.Marker({
			position: warsaw,
			map: map,
			title: 'Warsaw Zoo'
	});
	var marker2 = new google.maps.Marker({
			position: sydney,
			map: map,
			title: 'Sydney'
	});
	var marker3 = new google.maps.Marker({
			position: singapore,
			map: map,
			title: 'Singapore'
	});
	
	marker1.addListener('click', () => clickCity(0));
	marker2.addListener('click', () => clickCity(1));
	marker3.addListener('click', () => clickCity(2));
}
	

	function clickCity(cityId)
	{
		var pic = document.getElementById("swapthepicture")
		console.log("A location has been clicked, location #", cityId)
		map.setZoom(15);
		switch(cityId){
		case 0:
			map.setCenter(warsaw);
			swapthepicture.src = "warsaw-zoo.jpg"
			paragraph.innerHTML = "This is what happens."
			document.getElementById("paragraph").style.color = "green";
			paragraph.style.backgroundColor = "#f789"
			break;
		case 1:
			map.setCenter(sydney);
			swapthepicture.src = "sydney.jpg"
			paragraph.innerHTML = "Sydney in Australia would be an interesting place to visit, but I have never visited Australia."
			document.getElementById("paragraph").style.color= "red";
			paragraph.style.backgroundColor = "#124"
			break;
		case 2:
			map.setCenter(singapore);
			swapthepicture.src = "singapore.jpg"
			break;
		}
		
	}
	