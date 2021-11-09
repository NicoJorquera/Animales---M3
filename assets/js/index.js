import {Leon, Lobo, Oso, Serpiente, Aguila} from "./clases/zoo.js";
import Animales from "./script.js";

let criatura = [];

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("tabla").addEventListener('submit', validarTabla); 
  });

function mostrarModal(posicionAnimal){
    const salvaje = document.getElementById("animalModal");
    salvaje.innerHTML = "";
    const imagenAnimal = criatura[posicionAnimal]
    salvaje.innerHTML = `
    <div class="card" >
        <img src="${imagenAnimal.Img}" class="card-img-top" alt="...">
        <div class="card-body">
         <p class="card-text">${imagenAnimal.Edad}</p>
         <p class="card-text">Comentarios: </p>
         <p class="card-text">${imagenAnimal.Comentarios}</p>
        </div>
    </div>`
    $('#exampleModal').modal({ }) /*La card se saco por bootstrap, se le agregaron mas "p" y se agrego la ruta. Todo esto para la card del modal*/    
}
window.mostrarModal = mostrarModal;

function reproducir(posicionAnimal){ 
    const seleccion = criatura[posicionAnimal]
    switch(seleccion.Nombre){
        case "Leon": seleccion.Rugir(); break;
        case "Lobo": seleccion.Aullar(); break;
        case "Oso": seleccion.Grunir(); break;
        case "Serpiente": seleccion.Sisear(); break;
        case "Aguila": seleccion.Chillar(); break;
    }
}
window.reproducir = reproducir; //el window se utilza cuando es en modulo, para llamar/ejecutar la accion. Pero no es recomendable xd

document.getElementById("btnRegistrar").addEventListener("click", async ()=>{
    let nombre = document.getElementById("animal") //id del HTML nombre
    let edad = document.getElementById("edad") //id del HTML años
    let comentarios = document.getElementById("comentarios") //id del HTML comentarios
    if(!nombre.value || !edad.value || !comentarios.value) return alert("Por favor, ingresar todos los datos correspondientes")
    
    const {animales} = await Animales.getData();
    const bestia = animales.find((a) => a.name == nombre.value);
    let nuevoAnimal = ""
    switch(bestia.name){
        case "Leon": nuevoAnimal = new Leon(nombre.value, edad.value, bestia.imagen, comentarios.value, bestia.sonido); break;
        case "Lobo": nuevoAnimal = new Lobo(nombre.value, edad.value, bestia.imagen, comentarios.value, bestia.sonido); break;
        case "Oso": nuevoAnimal = new Oso(nombre.value, edad.value, bestia.imagen, comentarios.value, bestia.sonido); break;
        case "Serpiente": nuevoAnimal = new Serpiente(nombre.value, edad.value, bestia.imagen, comentarios.value, bestia.sonido); break;
        case "Aguila": nuevoAnimal = new Aguila(nombre.value, edad.value, bestia.imagen, comentarios.value, bestia.sonido); break;
    }
    criatura.push(nuevoAnimal) //el nombre criatura lo da el arreglo vacio del comienzo (linea 4)

    let resultado = ""
    for(let i=0; i<criatura.length; i++){  //para que vaya registrando la posicion del indice 
        resultado += ` 
        <div class="card nuevaCard">
          <img src="${criatura[i].Img}" class="card-img-top imgDefinida" alt="..." onclick="mostrarModal(${i})">
          <div class="card-body">
            <i class="fas fa-headphones-alt" onclick="reproducir(${i})"></i>
          </div>
        </div>`
    } //el click de la linea 47, para hacerle con el mouse para reproducir el sonido de la function reproducir
    
    /*sacamos la card de bootstrap, y cambiamos la "p" por la "i" (linea 58), agregamos un nombre a la clase para css
    el i se saco por fonts awesome, al seleccionar un font sacamos el <i></i>
    copiamos la class y al css*/

    document.getElementById("Animales").innerHTML = resultado //el id del HTML dentro de la tabla. Es la parte de la card
    
    nombre.value = "";
    edad.value = "";
    comentarios.value = "";
    document.getElementById("preview").style.removeProperty("background-image");
    /*Esta parte, hace que el formulario quede vacio, para ingresar nuevos datos*/
})