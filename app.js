
const boton = document.getElementById("botonAlerta");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
    mensaje.textContent =
        "¡Recordá! Nunca abras enlaces sospechosos ni compartas tus datos personales.";
});
