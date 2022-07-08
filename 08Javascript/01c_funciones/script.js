var resultado = 0;
var num1 = 5;
var num2 = 2;
resultado = num1 + num2;
document.write(num1 + " + " + num2 + " = " + (num1 + num2));
document.write("<br>");
document.write(num1 + " - " + num2 + " = " + (num1 - num2));
document.write("<br>");
document.write(num1 + " x " + num2 + " = " + (num1 * num2));
document.write("<br>");

var dividendo = 17;
var divisor = 6;
var resto = dividendo % divisor;
var cociente = dividendo / divisor;
resultado = Math.trunc(cociente);
document.write("<h3>División Entera</h3>");
document.write(dividendo + " / " + divisor + " = " + resultado);
document.write("<br>");
document.write(" Resto: " + resto);

