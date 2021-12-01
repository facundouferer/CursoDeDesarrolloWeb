
var btnSumar = document.querySelector("#btnSumar");

btnSumar.addEventListener("click", function(e) {
    e.preventDefault();        
    resolverOperacion("sumar");
});

var btnRestar = document.querySelector("#btnRestar");

btnRestar.addEventListener("click", function(e) {
    e.preventDefault();
    resolverOperacion("restar");
});

var btnMultiplicar = document.querySelector("#btnMultiplicar");

btnMultiplicar.addEventListener("click", function(e) {
    e.preventDefault();
    resolverOperacion("multiplicar");
});

btnDividir = document.querySelector("#btnDividir");
btnDividir.addEventListener("click", function(e) {
    e.preventDefault();
    resolverOperacion("dividir");
});

btnPotencia = document.querySelector("#btnPotencia");
btnPotencia.addEventListener("click", function(e) {
    e.preventDefault();
    resolverOperacion("potencia");
});

function resolverOperacion(operacion) {

    var uno = parseFloat(document.querySelector("#uno").value);
    var dos = parseFloat(document.querySelector("#dos").value);    

    var resultado = 0;

    switch(operacion) {
        case "sumar":
            resultado = uno + dos;
            break;
        case "restar":
            resultado = uno - dos;
            break;
        case "multiplicar":
            resultado = uno * dos;
            break;
        case "dividir":
            resultado = uno / dos;
            break;
        case "potencia":
            resultado = Math.pow(uno, dos);
            break;        
    }

    document.querySelector("h1").textContent = resultado;

    
}
