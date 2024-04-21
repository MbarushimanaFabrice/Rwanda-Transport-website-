


// for navigation bar
var x = window.pageYOffset;
window.onscroll = function () {
	var x = window.pageYOffset;
	if (x = y) {
		document.getElementById("varbar").style.backgroundColor = "red";
	}
	else {
		document.getElementById("varbar").style.backgroundColor = "green";
		
	}
	x=y;
}
 	// document.getElementById("varbar").style.display = "block";

let hide;
const newFunction = () => {
	if (hide === true) {
		document.getElementById("varbar").style.display = "block";
		return hide = false;
	} else {
		document.getElementById("varbar").style.display = "none";
		return hide = true;						
	}
}



//	document.getElementById("varbar").style.display = "block";

