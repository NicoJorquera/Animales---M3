const urlJson = "http://127.0.0.1:5501";

class Animales {
    constructor(nombre, edad, img, comentarios, sonido){
        let Nombre = nombre;
        let Edad = edad;
        let Img = img;
        let Comentarios = comentarios;
        let Sonido = sonido;

        this.getNombre = () => Nombre;
        this.getEdad = () => Edad;
        this.getImg = () => Img;
        this.getComentarios = () => Comentarios;
        this.getSonido = () => Sonido;

        this.setComentarios = (nuevoComentarios) => Comentarios = nuevoComentarios;
    }
    get Nombre(){
        return this.getNombre();
    }
    get Edad(){
        return this.getEdad();
    }
    get Img(){
        return `${urlJson}/assets/imgs/${this.getImg()}`
    }
    get Comentarios(){
        return this.getComentarios();
    }
    get Sonido(){
        return this.getSonido();
    }
    set Comentarios(nuevoComentarios){
        return this.setComentarios(nuevoComentarios);
    }
}

export default Animales;

/*Tomando en consideracion el diagrama de Animales Salvajes

Tenemos una SUPER CLASE: Animal
esta super clase tiene 5 atributos protegidos:
    #nombre
    #edad
    #img
    #comentarios
    #sonido

5 metodos publicos:
    get Nombre()
    get Edad()
    get Img()
    set Comentarios()
    get Sonido() 

Y se herendan cinco subclases:
    Leon
    Lobo
    Oso
    Serpiente
    Aguila

*/