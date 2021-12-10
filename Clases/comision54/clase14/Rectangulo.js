class Rectangulo{

    constructor(base, altura, color, inclinacion){
        this.base = base;
        this.altura = altura;
        this.color = color;
        this.inclinacion = inclinacion;
    }    

    area(){
        return this.base * this.altura;
    }

    perimetro(){
        return 2 * (this.base + this.altura);
    }

    dibujarse(){
        return '<div style="width: '+this.altura+'px; height: '+this.base+'px; background-color: '+this.color+';color: white; transform: rotate('+this.inclinacion+'deg);"></div>';
    }

    getBase(){
        return this.base;
    }

}   