var  rectangulo = new Rectangulo(300, 300, "black", 0, 0, 0);
document.getElementById('resultado').innerHTML = rectangulo.dibujarse();

var btnRotarX = document.getElementById("btnRotarX");
btnRotarX.addEventListener("input", mostrarcambios);

var btnRotarY = document.getElementById("btnRotarY");
btnRotarY.addEventListener("input", mostrarcambios);

var btnRotarZ = document.getElementById("btnRotarZ");
btnRotarZ.addEventListener("input", mostrarcambios);

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
    let x = document.getElementById('btnRotarX').value;
    let y = document.getElementById('btnRotarY').value;
    let z = document.getElementById('btnRotarZ').value;
    
    rectangulo.setAtributos(altura, base, color, x, y, z);
     
    document.getElementById('labelAltura').textContent = "Altura ("+ rectangulo.base+")";
    document.getElementById('resultado').innerHTML = rectangulo.dibujarse();
}
