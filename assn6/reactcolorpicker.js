console.log("hello")


class LabeledInputSlider extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
              <b>{this.props.label}: </b>
              <input type="text" value={this.props.value}
                     size="5"
                     onInput={(arg) => this.props.onChange(arg.target.value)}
                     />
              <input type="range" value={this.props.value}
                     onInput={(arg) => this.props.onChange(arg.target.value)}
                     min={0} max={this.props.max}
                     />
            </div>
        )
    }
}

function updateHSL(state) {
    console.log("The HSL is now:", state)
    var r = state.red
    var g = state.green
    var b = state.blue
    r /= 255, g /= 255, b /= 255;
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

    return {...state,
            hue: Math.round(h*360),
            sat: Math.round(s*100),
            light: Math.round(l*100)};
}

function updateRGB(state) {
	console.log("The RGB is now:", state)
	var r =state.red
	var g = state.green 
	var b = state.blue
	var h = state.hue
	var s = state.sat
	var l = state.light
	
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

class ColorChooser extends React.Component {
    constructor(props) {
        super(props)
        this.state = updateHSL({red:45, green: 95, blue: 145})
    }
    render() {
		var rgb ="rgb(" +this.state.red + "," +this.state.green+","+this.state.blue"+ ")"
        return
		(
		<div>
        <div style={{width:500, height:500, background:rgb}} ></div>
			
              <LabeledInputSlider
                label="Red"
                value={this.state.red}
                max="255"
                onChange={v => {
                    this.setState(prev => {
                        return updateHSL({...prev, red:v})
                    })
                }}
                />
				
              <LabeledInputSlider
                label="Green"
                value={this.state.green}
                max="255"
                onChange={v => {
                    this.setState(prev => {
                        return updateHSL({...prev, green:v})
                    })
                }}
                />
              <LabeledInputSlider
                label="Blue"
                value={this.state.blue}
                max="255"
                onChange={v => {
                    this.setState(prev => {
                        return updateHSL({...prev, blue:v})
                    })
                }}
                />
              <LabeledInputSlider
                label="Hue"
                value={this.state.hue}
                max="360"
                onChange={v => {
                    // TODO: must also change RGB according to for
                    this.setState(prev => {
					{return updateRGB({...prev, hue:v})
                })
				}}
                />
				
              <LabeledInputSlider
                label="Saturation"
                value={this.state.sat}
                max="100"
                onChange={v => {
					
                    this.setState(prev => {
						return updateRGB({...prev, sat:v})
                })
				}}
                />
              <LabeledInputSlider
                label="Light"
                value={this.state.light}
                max="100"
                onChange={v => {
					
                    this.setState(prev => {
						return updateRGB ({...prev, light:v})
                })
				}}
                />
                <p>Red={this.state.red}, Green={this.state.green},Blue={this.state.blue}, Hue={this.state.hue}, Saturation={this.state.sat},
                  Light={this.state.light}</p>
            </div>
        )
    }
}


class Greeting extends React.Component {
    constructor(props) {
        super(props)
        console.log("I'm in the constructor", this.props.name)
        this.state = {clickCount:0}
    }

    click() {
        this.setState(prev => {
            return {clickCount: prev.clickCount + 1}
        })
    }

    render() {
        return (<p>Hello, {this.props.name}
                (click {this.state.clickCount})
                <button onClick={()=>this.click()}>Increment</button>
*                </p>)
    }
}

class MyDemo extends React.Component {
    render() {
        console.log("Working on it.")
        return (
            <div>
                <ColorChooser/>
            </div>
        )
    }
}

ReactDOM.render(
    (<MyDemo/>),
    document.getElementById("container"));
