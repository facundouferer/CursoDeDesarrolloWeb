
/* TECLADO NUMERICO */

var btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(e){
    e.preventDefault();
    colocarNumero(1);
});

var btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function(e){
    e.preventDefault();
    colocarNumero(2);
});

var btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function(e){
    e.preventDefault(); 
    colocarNumero(3);
});

var btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function(e){
    e.preventDefault();
    colocarNumero(4);
});

var btn5 = document.getElementById("btn5");
btn5.addEventListener("click", function(e){
    e.preventDefault();
    colocarNumero(5);
});

var btn6 = document.getElementById("btn6");
btn6.addEventListener("click", function(e){
    e.preventDefault();
    colocarNumero(6);
});

var btn7 = document.getElementById("btn7");
btn7.addEventListener("click", function(e){
    e.preventDefault();
    colocarNumero(7);
});

var btn8 = document.getElementById("btn8");
btn8.addEventListener("click", function(e){
    e.preventDefault();
    colocarNumero(8);
});

var btn9 = document.getElementById("btn9");
btn9.addEventListener("click", function(e){
    e.preventDefault();
    colocarNumero(9);
});

var btn0 = document.getElementById("btn0");
btn0.addEventListener("click", function(e){
    e.preventDefault();
    colocarNumero(0);
});

/* COLCOAR NÚMEROS */

function colocarNumero(numero){
    document.getElementById("resultado").textContent = numero;
    console.log(numero);
}

/* OPERACIONES */

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
    historial = "";
    document.getElementById("historial").innerHTML = historial = "";;
    document.getElementById("resultado").textContent = "";
});

/* RESOLVER OPERACIONES */

function resolver(operacion){

    var numeroUno = parseFloat(document.getElementById("numeroUno").value);
    var numeroDos = parseFloat(document.getElementById("numeroDos").value);
    var resultado = 0;
    switch(operacion){
        case "sumar":
            resultado = numeroUno + numeroDos;
            contador++;
            historial = historial+ contador+") " + numeroUno + " + " + numeroDos + " = " + resultado + "<br>";
            break;
        case "restar":
            contador++;
            resultado = numeroUno - numeroDos;
            historial = historial + contador+") " + numeroUno + " - " + numeroDos + " = " + resultado + "<br>";
            break;
        case "multiplicar":
            contador++;
            resultado = numeroUno * numeroDos;
            historial = historial + contador+") " + numeroUno + " * " + numeroDos + " = " + resultado + "<br>";
            break;
        case "dividir":
            contador++;
            resultado = numeroUno / numeroDos;
            historial = historial + contador+") " + numeroUno + " / " + numeroDos + " = " + resultado + "<br>";
            break;
        case "potencia":
            contador++;
            resultado = Math.pow(numeroUno, numeroDos);
            historial = historial + contador+") " + numeroUno + " ^ " + numeroDos + " = " + resultado + "<br>";
            break;
        case "raiz":
            contador++;
            resultado = Math.pow(numeroUno, 1/numeroDos);
            historial = historial + contador+") " + numeroDos +"√" + numeroUno + " = " + resultado + "<br>";
            break;
    }
    console.log(historial);
    document.getElementById("historial").innerHTML = historial;
    document.getElementById("resultado").textContent = resultado;

}