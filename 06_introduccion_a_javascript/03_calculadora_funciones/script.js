function mostrarDatos(e) {
    e.preventDefault();
    var uno = document.querySelector("#uno").value;
    var dos = document.querySelector("#dos").value;
    var resultado = parseInt(uno) + parseInt(dos);
    var mensaje = uno+" + "+ dos +" = "+ resultado;	
    document.querySelector("h1").textContent = mensaje;
    console.log(mensaje);
}

var formulario = document.querySelector("#formulario");
formulario.addEventListener("input", mostrarDatos);