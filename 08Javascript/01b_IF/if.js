var opcion = 5;
var categoria = 4;

if (opcion == 1) {
    console.log("opcion 1");
}

if (opcion == 2) {
    console.log("opcion 2");
}

if (opcion == 3 || categoria == 2) {
    console.log("opcion 3 O categoria 2");
}

if (opcion == 3 && categoria == 2) {
    console.log("opcion 3 Y categoria 2");
}

if (opcion == 4) {
    console.log("opcion 4");
} else {
    console.log("la opción es " + opcion);
}

if (opcion == 5) {
    if (categoria == 4) {
        console.log("opcion " + opcion + " y categoria " + categoria);
    }
}