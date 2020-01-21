var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

function getGradient(color1, color2){
	var gradient = "linear-gradient(to right, " + color1 + " , " + color2 + ")"
	setColor(gradient);
	setH3(gradient);
}

function setColor(gradient){
	body.style.background=gradient;
}

function setH3(gradient){
	var text = document.createTextNode(gradient);
	// clear previous
	css.innerHTML = "";
	css.appendChild(text);
}

function getColors(event){
	var color1 = document.querySelector(".color1");
	var color2 = document.querySelector(".color2");
	console.log(color1.value);
	getGradient(color1.value, color2.value);
	}


color1.addEventListener('input', getColors);
color2.addEventListener('input', getColors);
