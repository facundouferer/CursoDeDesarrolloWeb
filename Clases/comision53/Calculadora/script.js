/* BOTÓN SUMAR */
document.getElementById("btnSumar").addEventListener("click", function(e){
    e.preventDefault();
    resolver("+");
});

/* BOTÓN RESTAR */
document.getElementById("btnRestar").addEventListener("click", function(e){
    e.preventDefault();
    resolver("-");
});

/* BOTÓN MULTIPLICAR */
document.getElementById("btnMultiplicar").addEventListener("click", function(e){
    e.preventDefault();
    resolver("*");
});

/* BOTÓN DIVIDIR */
document.getElementById("btnDividir").addEventListener("click", function(e){
    e.preventDefault();
    resolver("/");
});

/* BOTON POTENCIA */
document.getElementById("btnPotencia").addEventListener("click", function(e){
    e.preventDefault();
    resolver("^");
});

/* BOTON RAIZ */
document.getElementById("btnRaiz").addEventListener("click", function(e){
    e.preventDefault();
    resolver("√");
});

var historial = "";
var contador = 0; // Para el historial

function grabarHistorial(uno, dos, operador, resultado){
    // incrementa la variable contador en uno
    contador++; 
    // concatena los valores de los distintos resultados en una única variable para mostrar el historial
    historial = historial+ contador+ ") " + uno + operador + dos + " = " + resultado + "<br>";
    // muestra el historial en el DOM
    document.getElementById("historial").innerHTML = historial;
}

function resolver(operador){

    /* Toma los valores del DOM de los inputs y los transforma en variables */

    var uno = parseFloat(document.getElementById("uno").value);
    var dos = parseFloat(document.getElementById("dos").value);

    var resultado = 0;    

    /* Según el valor del texto de la variable que ingre
    como parámetro "operador" se ejecuta una u otra operación*/
    
    switch(operador){
        case "+":
            resultado = uno + dos;                        
            grabarHistorial(uno, dos, operador, resultado);
            break; /* break -> Permite que salga de la estructura para no seguir "haciendo" lo que viene después */
        case "-":
            resultado = uno - dos;
            grabarHistorial(uno, dos, operador, resultado);
            break; 
        case "*":
            resultado = uno * dos;
            grabarHistorial(uno, dos, operador, resultado);
            break;
        case "7":
            resultado = uno / dos;
            grabarHistorial(uno, dos, operador, resultado);
            break;  
        case "^":
            resultado = Math.pow(uno, dos);
            grabarHistorial(uno, dos, operador, resultado);
            break;
        case "√":
            resultado = Math.pow(uno,1/dos);
            grabarHistorial(uno, dos, operador, resultado);
            break;
    }

    if(resultado > 0){
        document.getElementById("resultado").innerHTML = `<div class="alert alert-success" role="alert"><h1 id="resultado">${resultado}</h1></div>`;
    }else{
        if(resultado < 0){
            document.getElementById("resultado").innerHTML = `<div class="alert alert-danger" role="alert"><h1 id="resultado">${resultado}</h1></div>`;
        }else{
            document.getElementById("resultado").innerHTML = `<div class="alert alert-warning" role="alert"><h1 id="resultado">${resultado}</h1></div>`;
        }
    }
    
}
