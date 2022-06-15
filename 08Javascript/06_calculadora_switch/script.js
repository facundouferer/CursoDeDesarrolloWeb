
function mostrarMensaje(evento){
    evento.preventDefault();
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var tipoOperacion = document.getElementById("tipoOperacion").value;
    var resultado = calcular(a,b, tipoOperacion);
    document.querySelector("h1").textContent = resultado;
}

function calcular(a, b, tipoOperacion){
    
    var resultado = 0;
    
    switch(tipoOperacion){
        case "suma":
            resultado = a + b;
            break;
        case "resta":
            resultado = a - b;
            break;
        case "multiplicacion":
            resultado = a * b;
            break;
        case "division":
            resultado = a / b;
            break;
    }
    
    return resultado;
}

function ejecutar(){
    var formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", mostrarMensaje);
}

ejecutar();

