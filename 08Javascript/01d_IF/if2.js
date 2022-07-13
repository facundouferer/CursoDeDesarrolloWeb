var btn = document.getElementById("btn");

function calcularEdad(e) {
    e.preventDefault();
    var nombre = "Facundo";
    var edad = document.getElementById("edad").value;
    var resultado = document.querySelector("h1");
    if (edad >= 18) {
        resultado.innerHTML = "Hola " + nombre + " eres mayor de edad";
    } else {
        resultado.innerHTML = "Hola " + nombre + " eres menor de edad";
    }
}

btn.addEventListener("click", calcularEdad);