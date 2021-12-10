var base = document.getElementById("base");
base.addEventListener("input",dibujarRectangulo);

var altura = document.getElementById("altura");
altura.addEventListener("input",dibujarRectangulo);

function dibujarRectangulo(e) {
    e.preventDefault();

    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;

    let rectanguloUno = new Rectangulo(base,altura);
    
    document.getElementById("resultado").innerHTML = rectanguloUno.dibujar();
    document.getElementById("labelBase").textContent = `Base: ${rectanguloUno.base} px`;

}