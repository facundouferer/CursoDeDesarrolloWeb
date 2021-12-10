var btnCalcularArea = document.getElementById("btnCalcularArea");

btnCalcularArea.addEventListener("click", function () {

    let altura = document.getElementById('altura').value;
    let base = document.getElementById('base').value;

    let rectangulo = new Rectangulo(altura, base);
   
    document.getElementById('resultado').innerHTML = '<div style="width: '+rectangulo.altura+'px; height: '+rectangulo.base+'px; background-color: blue;">'+rectangulo.area()+'</div>';

});
