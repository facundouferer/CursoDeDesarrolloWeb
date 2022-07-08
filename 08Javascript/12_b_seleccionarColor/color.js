var color = document.querySelector("#color");

color.addEventListener("input", e => {
    document.body.style.backgroundColor = e.target.value;
    console.log(e.target.value);
});