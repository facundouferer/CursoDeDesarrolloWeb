document.getElementById("nroUno").addEventListener("input", function(){    
    
    //nroUno Guarda el valor del input del formulario
    nroUno = document.getElementById("nroUno").value;
    
    // pasa el valor de la variable nroUno al div resultado del HTML
    document.getElementById("resultado").textContent = nroUno;
});