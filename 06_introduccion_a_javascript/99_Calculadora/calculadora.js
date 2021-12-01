
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

var btnRaiz = document.getElementById("btnRaiz");
btnRaiz.addEventListener("click", function(e){
    e.preventDefault();    
    resolver("raiz");
});

var historial = "";
var contador = 0;

var btnBorrarHistorial = document.getElementById("btnBorrarHistorial");
btnBorrarHistorial.addEventListener("click", function(e){
    e.preventDefault();
    contador = 0;
    document.getElementById("historial").innerHTML = "";
    document.getElementById("resultado").textContent = "";
});

function resolver(operacion){

    var numeroUno = parseFloat(document.getElementById("numeroUno").value);
    var numeroDos = parseFloat(document.getElementById("numeroDos").value);

    switch(operacion){
        case "sumar":
            var resultado = numeroUno + numeroDos;
            contador++;
            historial = historial+ contador+") " + numeroUno + " + " + numeroDos + " = " + resultado + "<br>";
            break;
        case "restar":
            contador++;
            var resultado = numeroUno - numeroDos;
            historial = historial + contador+") " + numeroUno + " - " + numeroDos + " = " + resultado + "<br>";
            break;
        case "multiplicar":
            contador++;
            var resultado = numeroUno * numeroDos;
            historial = historial + contador+") " + numeroUno + " * " + numeroDos + " = " + resultado + "<br>";
            break;
        case "dividir":
            contador++;
            var resultado = numeroUno / numeroDos;
            historial = historial + contador+") " + numeroUno + " / " + numeroDos + " = " + resultado + "<br>";
            break;
        case "potencia":
            contador++;
            var resultado = Math.pow(numeroUno, numeroDos);
            historial = historial + contador+") " + numeroUno + " ^ " + numeroDos + " = " + resultado + "<br>";
            break;
        case "raiz":
            contador++;
            var resultado = Math.pow(numeroUno, 1/numeroDos);
            historial = historial + contador+") " + numeroDos +"√" + numeroUno + " = " + resultado + "<br>";
            break;
    }
    console.log(historial);
    document.getElementById("historial").innerHTML = historial;
    document.getElementById("resultado").textContent = resultado;

}