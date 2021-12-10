class Rectangulo{

    constructor(base, altura, color, x, y, z){
        this.base = base;
        this.altura = altura;
        this.color = color;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    
    setAtributos(base, altura, color, x, y, z){
        this.base = base;
        this.altura = altura;
        this.color = color;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    area(){
        return this.base * this.altura;
    }

    perimetro(){
        return 2 * (this.base + this.altura);
    }

    dibujarse(){
        return '<div style="border: red 5px solid; width: '+this.altura+'px; height: '+this.base+'px; background-color: '+this.color+';color: white; transform: rotateX('+this.x+'deg) rotateY('+this.y+'deg)rotateZ('+this.z+'deg);"></div>';
    }

    getBase(){
        return this.base;
    }

}   