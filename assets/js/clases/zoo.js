import Animales from "./animales.js";
const urlJson = "http://127.0.0.1:5501";

const play = (sonido) =>{ //sonido que corresponde al animales.json para dirigir la ruta
    document.getElementById("player").innerHTML = `<audio src="${urlJson}/assets/sounds/${sonido}"autoplay></audio>`;
}

export class Leon extends Animales{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Rugir(){
        play (this.Sonido)
        //return `<audio src='./assets/sounds/Rudido.mp3' controls></audio>`;
    }
}

export class Lobo extends Animales{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Aullar(){
        play (this.Sonido)
        //return `<audio src='./assets/sounds/Aullido.mp3' controls></audio>`;       
    }
}

export class Oso extends Animales{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Grunir(){
        play (this.Sonido)
        //return `<audio src='./assets/sounds/Grunido.mp3' controls></audio>`;        
    }
}

export class Serpiente extends Animales{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Sisear(){
        play (this.Sonido)
        //return `<audio src='./assets/sounds/Siseo.mp3' controls></audio>`;        
    }
}

export class Aguila extends Animales{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Chillar(){
        play (this.Sonido)
        //return `<audio src='./assets/sounds/Chillido.mp3' controls></audio>`;        
    }
}

/*Aqui importamos la informacion de animales.js, de cada una de las subclases
retornamos la informacion de la clase padre con el "super".

Cada subclase tiene su sonido caracterisco, colocando la ruta correspondiente
*/