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
	var marker1 = new google.maps.Marker({
			position: warsaw,
			map: map,
			title: 'Warsaw Zoo'
	});
	
	marker1.addListener('click', () => clickCity(0));
}
	

	function clickCity(cityId)
	{
		var pic = document.getElementById("pic")
		console.log("A city has been clicked", cityId)
		map.setZoom(15);
		switch(cityId){
		case 0:
			map.setCenter(warsaw);
			break;
	}
	}
	