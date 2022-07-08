

var btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
    e.preventDefault();
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2;
    console.log(`${num1} + ${num2} = ${resultado}`);
    var resultadoDOM = document.getElementById("resultado");
    resultadoDOM.textContent = `${num1} + ${num2} = ${resultado}`;
})

