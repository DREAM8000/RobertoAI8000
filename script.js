// Cambiar el color RGB del texto "RobertoAI" continuamente
setInterval(function() {
    var robertoaiText = document.getElementById("robertoai");
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var rgbColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    robertoaiText.style.color = rgbColor;
}, 1000); // Cambia el color cada segundo (1000 milisegundos)