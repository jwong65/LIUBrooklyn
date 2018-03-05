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
			paragraph.innerHTML = "Warsaw is in Poland. Even though the Warsaw Zoo was the first location I thought of, I have never been to Europe or Poland though."
			document.getElementById("paragraph").style.color = "green";
			paragraph.style.backgroundColor = "#f789"
			break;
		case 1:
			map.setCenter(sydney);
			swapthepicture.src = "sydney.jpg"
			paragraph.innerHTML = "Sydney in Australia would be an interesting place to visit, but I have never visited Australia. I only thought of Sydney because of a recent card tournament."
			document.getElementById("paragraph").style.color= "#254242";
			paragraph.style.backgroundColor = "#8ff442"
			break;
		case 2:
			map.setCenter(singapore);
			swapthepicture.src = "singapore.jpg"
			paragraph.innerHTML = "Singapore, I recall was noted for being one of the cleanest places in the world. There are a lot of laws that are related to the cleanliness. A quick search tells me that chewing gum is still banned there. The fines for littering are large as well."
			document.getElementById("paragraph").style.color="#124ded"
			paragraph.style.backgroundColor = "#b3cece"
			break;
		}
		
	}
	
	function textchange()
	{
		document.getElementById("paragraph").style.color="#000000"
	}