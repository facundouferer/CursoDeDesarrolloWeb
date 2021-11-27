function tomarDatos(e){

    e.preventDefault();
    var uno = parseFloat(document.getElementById("uno").value);
    var dos = parseFloat(document.getElementById("dos").value);
    var resultado = 0;
    var operador = document.getElementById("operador").value;

    switch(operador){
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
        case "raiz":
            resultado = Math.sqrt(uno);
            break;
        default:
            alert("Operador no valido");
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

var formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", tomarDatos);