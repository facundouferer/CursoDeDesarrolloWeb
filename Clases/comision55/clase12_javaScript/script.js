
function mostrarMensaje() {

    // var VARIABLE = ALGO_QUE_INGRESA_A_LA_VARIABLE
    
    var uno = document.querySelector("#uno").value;
    var dos = document.querySelector("#dos").value;
    
    var resultado = parseFloat(uno)+parseFloat(dos);

    mensaje = uno + " + " + dos + " = " + resultado;

    document.querySelector("#mensaje").textContent = mensaje;    

}

var formulario = document.querySelector("#formulario");

formulario.addEventListener("input", mostrarMensaje);