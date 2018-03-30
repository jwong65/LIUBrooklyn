console.log("This is ajax")

var moods=[]

function moodList(){
	$.ajax("http://cs120.liucs.net/assn4/moods.json",
		{
			success: function(data) {
				moods = data
				$("datalist#mood").empty()
				moods.map(function(m){
					$("datalist#mood").append("<option value='"+m+"'>")
				})

		},
		})
	setTimeout(moodList, 10000)
}

$(function() {
	moodList()
	
	console.log("Mood Listing")
	$("input#press").click(function(){
		console.log("Button has been clicked")
		$.ajax("http://cs120.liucs.net/assn4/messages.json",
			{
				method: "POST",
				data: JSON.stringify(
				{		sender: $("input#sender").val(),
				mood: $("input#moody").val(),
				text: $("input#message").val()}),
                   error: function() {},
                   success: function() {
                       $("input#text").val("")

					},
			})
	})
})


$(document).ready(function () {
    $.getJSON("http://cs120.liucs.net/assn4/messages.json", function (response) {
        console.log(response);
			var arrayResponses =[];
		$.each(response, function (index, value){
			arrayResponses.push(value);
		});
	
	var col = [];
	for (var i=0; i<arrayResponses.length; i++)
	{ 
		for (var key in arrayResponses[i]) 
			{
				if (col.indexOf(key) === -1) {
				col.push(key);
				}
			}
	}
	
	
	var table = document.createElement("table");
	
	var tr = table.insertRow(-1);
	
	for (var i=0; i<col.length; i++)
	{ 
	var th = document.createElement("th");
	th.innerHTML = col[i];
	tr.appendChild(th);
	}
	
	for (var i=0; i<arrayResponses.length; i++)
	{
		tr = table.insertRow(-1);
		
		for (var j=0; j<col.length; j++)
		{
		var tabCell = tr.insertCell(-1);
		tabCell.innerHTML = arrayResponses[i] [col[j]];
		}
	}

	var divContainer = document.getElementById("responselist");
	divContainer.innerHTML = "";
	divContainer.appendChild(table);
});
});