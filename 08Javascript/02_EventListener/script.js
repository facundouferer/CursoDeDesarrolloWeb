function mostrarDatos(e) {
    e.preventDefault();
    var mensaje = document.querySelector("#nombre").value;
    document.querySelector("h1").textContent = mensaje;
    console.log(mensaje);
}

var formulario = document.querySelector("#formulario");
formulario.addEventListener("input", mostrarDatos);