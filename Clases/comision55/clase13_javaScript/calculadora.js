function mostrarMensaje(event){
    event.preventDefault(); //Evita que se envie el formulario
    
    var uno = parseFloat(document.getElementById("uno").value);
    var dos = parseFloat(document.getElementById("dos").value);
    
    var operacion = document.getElementById("operacion").value;
    
    switch(operacion){
        case "suma":
            var resultado = uno + dos;
            break;
        case "resta":
            var resultado = uno - dos;
            break;
        case "multiplicacion":
            var resultado = uno * dos;
            break;
        case "division":
            var resultado = uno / dos;
            break;
        default:
            alert("Operación no válida");
            break;
    }

    document.querySelector("#mensaje").textContent = resultado;
    
}

var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", mostrarMensaje);