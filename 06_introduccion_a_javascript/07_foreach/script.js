var lista = [1, 2, 3, 4, 5];
lista.forEach(element => {
    document.querySelector("ul").innerHTML += `<li>${element}</li>`;
});