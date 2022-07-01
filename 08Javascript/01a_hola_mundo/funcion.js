function sumar(a, b) {
    return (a + " + " + b + " = " + (a + b));
}

function multiplicar(a, b) {
    return (a + " x " + b + " = " + (a * b));
}


function mostrarResultado() {
    console.log(sumar(1, 2));
    console.log(multiplicar(1, 2));
}

mostrarResultado();