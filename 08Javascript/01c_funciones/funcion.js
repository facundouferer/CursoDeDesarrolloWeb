function sumar(a, b) {
    return (a + " + " + b + " = " + (a + b));
}

function multiplicar(a, b) {
    return (a + " x " + b + " = " + (a * b));
}

function divisionEntera(a, b) {
    var cociente = Math.trunc(a / b);
    var resto = a % b;
    return (`${a} dividido ${b}  es igual a  ${cociente} y sobra ${resto}`);
}

function restar(a, b) {
    return (a + " - " + b + " = " + (a - b));
}

function mostrarResultado() {
    console.log(sumar(1, 2));
    console.log(multiplicar(1, 2));
    console.log(divisionEntera(7, 2));
    console.log(restar(1, 2));
}
function mostrarResultadosEnDom() {
    document.getElementById("suma").textContent = sumar(1, 2);
    document.getElementById("multipliacion").innerHTML = `<h1>${multiplicar(1, 2)}</h1>`;
    document.getElementById("division").innerHTML = divisionEntera(7, 2);
    document.getElementById("resta").innerHTML = restar(190, 12);
}

mostrarResultado();
mostrarResultadosEnDom();

