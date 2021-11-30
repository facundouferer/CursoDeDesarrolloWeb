function mostrarTextoIngresado() {
    var textoIngresado = document.getElementById("textoUsuario").value;
    document.querySelector("h1").textContent = textoIngresado;
}

var formulario = document.getElementById("formulario");
formulario.addEventListener("input", mostrarTextoIngresado);