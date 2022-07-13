function mostrarDatos(e) {
    e.preventDefault();
    var mensaje = document.querySelector("#nombre").value;
    var titulo = document.querySelector("h1");
    titulo.textContent = mensaje;
    console.log(mensaje);
}

var formulario = document.querySelector("#nombre");
formulario.addEventListener("input", mostrarDatos);