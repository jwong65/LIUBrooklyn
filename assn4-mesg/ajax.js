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
    });
});
