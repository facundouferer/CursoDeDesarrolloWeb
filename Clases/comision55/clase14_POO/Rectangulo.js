class Rectangulo {

    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    mostrarArea() {
        return `${this.base * this.altura} px`;
    }

    mostrarPerimetro() {
        return `Perimetro: ${(this.base * 2) + (this.altura * 2)}`;
    }

    mostrarDatos() {
        return `Base: ${this.base} Altura: ${this.altura}`; 
    }

    dibujar() {
        return `<div style="width: ${this.base}px; height: ${this.altura}px; background-color: rgb(9, 255, 0); border: rgb(255, 0, 242) 5px solid; display: grid; align-content: center; justify-content: center; ">${this.mostrarArea()}</div>`
    }
}