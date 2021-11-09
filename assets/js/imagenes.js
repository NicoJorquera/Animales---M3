import Animales from "./script.js"

const images = document.getElementById("animal")
images.addEventListener("change", async ()=>{
    const {animales} = await Animales.getData();
    const animal = animales.find((a) => a.name == images.value);
    const img = `url("/assets/imgs/${animal.imagen}")`
    document.getElementById("preview").style.backgroundImage = img
});

//realizar el evento que cambia las imagenes en el HTML

/*el {animales} de la linea 4 es proveniente del json, donde contiene todo el arreglo.
Se hace el destructing en atributo, llamado animal

se realiza un find, donde le damos nombre de "a". Este "a" equivale al nombre del animal
en conjunto con su imagen

en la siguiente const le damos la ruta de la imagenes

Y reemplazamos el id preview de la imagen, con un style del bgimg, sea igual a la imagen del animal*/