var lista = ["inicio", "hola", "adios", "fin", "final"];

lista.forEach(element => {
    document.querySelector("ol").innerHTML += `<li>${element}</li>`;
});

lista.forEach(element => {
    document.querySelector("table").innerHTML +=
        `<tr>
            <td>${element}</td>
            <td>${element}</td>
            <td>${element}</td>
        </tr>`;
    console.log(element);
}

)