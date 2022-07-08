var mensaje = "Hola mundo";
mensaje = "Hola mundo 2";

//operadores
num1 = 7;
num2 = 2;

//El resultado de la suma es
mensaje = (`El resultado de la suma es:  ${(num1 + num2)}`);
document.write(`<h1>${mensaje}</h1>`);

//El resultado de la resta es
mensaje = (`El resultado de la resta es:  ${(num1 - num2)}`);
document.write(`<h1>${mensaje}</h1>`);

//El resultado de la multiplicación es
mensaje = (`El resultado de la multiplicación es:  ${(num1 * num2)}`);
document.write(`<h1>${mensaje}</h1>`);

//El resultado de la división es
mensaje = (`El resultado de la división es:  ${(num1 / num2)}`);
document.write(`<h1>${mensaje}</h1>`);

//El resultado de la división entera es
document.write(`<h1>División Entera</h1>`)
var dividendo = 7;
var divisor = 2;
var cociente = Math.trunc(dividendo / divisor);
var resto = dividendo % divisor;
document.write("<h3>");
document.write(`Dividendo: ${dividendo}<br>`);
document.write(`Divisor: ${divisor}<br>`);
document.write(`Cociente: ${cociente}<br>`);
document.write(`Resto: ${resto}<br>`);
document.write("</h3>");