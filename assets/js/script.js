const urlJson = "http://127.0.0.1:5501" //crtl+shitf+p live server.
/*Realizamos funcion asincrona autoejecutable*/
let animales =(() =>{
    const getData = async () =>{
        const respuesta = await fetch(`${urlJson}/animales.json`);
        const data = await respuesta.json();
        return data
    };
    return {getData}     
})(); //los () lo hace autoejecutable

export default animales;