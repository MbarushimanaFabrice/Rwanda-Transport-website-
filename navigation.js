let x;
const change = () => {
	// document.getElementById("varbar").style.display = "block";
	if (x == 0) {
		document.getElementById("varbar").style.display = "block";
		return x = 1;
	} else {
		document.getElementById("varbar").style.display = "none";
		return x = 0;
	}
};