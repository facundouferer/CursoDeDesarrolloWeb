function tomarDatos(e){

    e.preventDefault();
    var uno = document.getElementById("uno").value;
    var dos = document.getElementById("dos").value;

    var operador = document.getElementById("operador").value;
    if(operador == "sumar"){
        var resultado = parseInt(uno) + parseInt(dos);
    }

    if(operador == "restar"){
        var resultado = parseInt(uno) - parseInt(dos);
    }

    if(operador == "multiplicar"){
        var resultado = parseInt(uno) * parseInt(dos);
    }

    if(operador == "dividir"){
        var resultado = parseInt(uno) / parseInt(dos);
    }
    
    document.querySelector("h1").textContent = resultado;
}

var formulario = document.querySelector("#formulario");
formulario.addEventListener("input", tomarDatos);