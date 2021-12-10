class Rectangulo{


    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    area(){
        return this.base * this.altura;
    }

    perimetro(){
        return 2 * (this.base + this.altura);
    }

}   