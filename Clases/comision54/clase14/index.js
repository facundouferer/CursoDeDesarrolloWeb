var btnInclinacion = document.getElementById("btnInclinacion");
btnInclinacion.addEventListener("input", mostrarcambios);

var btnAltura = document.getElementById("btnAltura");
btnAltura.addEventListener("input", mostrarcambios);

var btnBase = document.getElementById("btnBase");
btnBase.addEventListener("input", mostrarcambios);

var colorSelector = document.getElementById("colorSelector");
colorSelector.addEventListener("input", mostrarcambios);

function mostrarcambios(e){

    e.preventDefault();

    let altura = document.getElementById('btnAltura').value;
    let base = document.getElementById('btnBase').value;
    let color = document.getElementById('colorSelector').value;
    let inclinacion = document.getElementById('btnInclinacion').value;
    
    let rectangulo = new Rectangulo(altura, base, color, inclinacion);
     
    document.getElementById('labelAltura').textContent = "Altura ("+ rectangulo.base+")";
    document.getElementById('resultado').innerHTML = rectangulo.dibujarse();
}
