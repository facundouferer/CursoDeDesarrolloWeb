
var btnSumar = document.getElementById("btnSumar");

btnSumar.addEventListener("click", function(e){
    e.preventDefault();    
    resolver("sumar");
});

var btnRestar = document.getElementById("btnRestar");

btnRestar.addEventListener("click", function(e){
    e.preventDefault();
    resolver("restar");
});

var btnMultiplicar = document.getElementById("btnMultiplicar");

btnMultiplicar.addEventListener("click", function(e){
    e.preventDefault();
    resolver("multiplicar");
});

var btnDividir = document.getElementById("btnDividir");

btnDividir.addEventListener("click", function(e){
    e.preventDefault();
    resolver("dividir");
});

var btnPotencia = document.getElementById("btnPotencia");
btnPotencia.addEventListener("click", function(e){
    e.preventDefault();    
    resolver("potencia");
});

function resolver(operacion){

    var numeroUno = parseFloat(document.getElementById("numeroUno").value);
    var numeroDos = parseFloat(document.getElementById("numeroDos").value);

    switch(operacion){
        case "sumar":
            var resultado = numeroUno + numeroDos;
            break;
        case "restar":
            var resultado = numeroUno - numeroDos;
            break;
        case "multiplicar":
            var resultado = numeroUno * numeroDos;
            break;
        case "dividir":
            var resultado = numeroUno / numeroDos;
            break;
        case "potencia":
            var resultado = Math.pow(numeroUno, numeroDos);
    }
    
    document.getElementById("resultado").textContent = resultado;

}