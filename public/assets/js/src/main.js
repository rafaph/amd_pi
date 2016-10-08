//tambem funciona src/pi
define(['./pi'], function (pi) {
	var piElement = document.getElementById('pi-value');
	piElement.innerHTML = pi;
});