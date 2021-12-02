
/* CONTROLES DE LOS BOTONES*/

/* BOTÓN SUMAR */
document.getElementById("btnSumar").addEventListener("click", function() {
    resolverOperacion("+");
});

/* BOTÓN RESTAR */
document.getElementById("btnRestar").addEventListener("click", function() {
    resolverOperacion("-");
});

/* BOTÓN DIVIDIR */
document.getElementById("btnDividir").addEventListener("click", function() {
    resolverOperacion("/");
});

/* BOTÓN MULTIPLICAR */
document.getElementById("btnMultiplicar").addEventListener("click", function() {
    resolverOperacion("*");
});

/* CONTROLES POTENCIA */
document.getElementById("btnPotencia").addEventListener("click", function() {    
    resolverOperacion("^");
});

/* CREAR HISTORIAL */
var historial = "";

function mostrarHistorial(uno, dos, operacion, resultado) {
    historial = historial + uno + " " + operacion + " " + dos + " = " + resultado + "<br>";
    document.getElementById("historial").innerHTML = historial;
}

/* BOTÓN BORRAR HISTORIAL*/
document.getElementById("btnBorrar").addEventListener("click", function() {
    historial = "";
    document.getElementById("historial").innerHTML = historial;
});


function resolverOperacion(operacion) {

    var uno = parseFloat(document.getElementById("uno").value);    
    var dos = parseFloat(document.getElementById("dos").value);    

    var resultado = 0;

    switch(operacion) {
        case "+":
            resultado = uno + dos;
            mostrarHistorial(uno, dos, operacion, resultado);
            break;
        case "-":
            resultado = uno - dos;
            mostrarHistorial(uno, dos, operacion, resultado);
            break;
        case "*":
            resultado = uno * dos;
            mostrarHistorial(uno, dos, operacion, resultado);
            break;
        case "/":
            resultado = uno / dos;
            mostrarHistorial(uno, dos, operacion, resultado);
            break;
        case "^":
            resultado = Math.pow(uno, dos);
            mostrarHistorial(uno, dos, operacion, resultado);
            break;        
    }

    document.querySelector("h1").textContent = resultado;
    
}
