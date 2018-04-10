var hue = 80
var sat = 100
var light = 50

var red = null
var green = null
var blue = null



function updatebox(){
	const rgbVec=hsltoRgb(hue, sat, light) 
	// constant
	red = rgbVec[0]
	green = rgbVec[1]
	blue = rgbVec[2]
	const rgb = "rgb(" + red + "," + green + "," + blue +")"
	console.log(rgb)
	const hsl = "hsl(" + hue + "," + sat + "%," + light +"%)"
	$("#boxofcolors")[0].style["background-color"]= rgb
	$("#rgboutput").text(rgb)
	$("#hsloutput").text(hsl)
	$("#redtext").val(red)
	$("#redrange").val(red)
	$("#huetext").val(hue)
	$("#hueslider").val(hue)
	$("#greentext").val(green)
	$("#greenrange").val(green)
	$("#sattext").val(sat)
	$("#satslider").val(sat)
	$("#bluetext").val(blue)
	$("#bluerange").val(blue)
	$("#lighttext").val(light)
	$("#lightslider").val(light)
}

$(function(){
	console.log("Ready to change colors")
	updatebox()
	$("#redrange").bind('input', function(){
		console.log("Red SLIDER to", $(this).val())
		red = $(this).val()
		
		hsl = rgbtoHsl(red, green, blue)
		console.log("Slider", hsl)
		
		hue = hsl[0]
		sat = hsl[1]
		light = hsl[2]
		updatebox()
	})
	$("#redtext").keyup(function() {
		console.log("Changed to", $(this).val())
		red = $(this).val()
		updatebox()
	})
	$("#hueslider").bind('input', function(){
		hue = $(this).val()
		updatebox()
	})
	$("#lightslider").bind('input', function(){
		light= $(this).val()
		updatebox()
	})
	$("#satslider").bind('input', function(){
		sat= $(this).val()
		updatebox()
	})
})


$(function(){
	console.log("Ready to change colors")
	updatebox()
	$("#greenrange").bind('input', function(){
		console.log("Green SLIDER to", $(this).val())
		green = $(this).val()
		
		hsl = rgbtoHsl(red, green, blue)
		console.log("Slider", hsl)
		
		hue = hsl[0]
		sat = hsl[1]
		light = hsl[2]
		updatebox()
	})

	
	$("#greentext").keyup(function() {
		console.log("Changed to", $(this).val())
		green = $(this).val()
		updatebox()
	})
})

$(function(){
	console.log("Ready to change colors")
	updatebox()
	$("#bluerange").bind('input', function(){
		console.log("Blue SLIDER to", $(this).val())
		blue = $(this).val()
		
		hsl = rgbtoHsl(red, green, blue)
		console.log("Slider", hsl)
		
		hue = hsl[0]
		sat = hsl[1]
		light = hsl[2]
		updatebox()
	})
	
	$("#bluetext").keyup(function() {
		console.log("Changed to", $(this).val())
		blue = $(this).val()
		updatebox()
	})
})
function hsltoRgb( h, s, l){
	var r, g, b;
	
	h/=360
	s/=100
	l/=100
	
	//If saturation is at 0.
	if (s==0){
		r = g= b= 1;
	}
	else{
		var hue2rgb = function hue2rgb( p, q, t){
			if (t<0) t+=1;
			if (t>1) t-=1;
			if (t<1/6) return p+ (q-p) *6*t;
			if (t<1/2) return q;
			if (t<2/3) return p +(q-p) * (2/3 -t)*6;
			return p;
		}
		
		
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);

	}
		
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
		}
		
		
function rgbtoHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
	console.log("CONVERT FROM RGB", r, g, b)
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
	console.log("CONVERT RGBTOHSL", h, s, l)
    return [Math.round(h*360), Math.round(s*100), Math.round(l*100)];
}

