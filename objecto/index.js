//Crear mis plantillas

class Cancion{
    constructor(nombre, album, duracion, portada, artista, autor){
        this.nombre = nombre
        this.album = album
        this.duracion = duracion
        this.portada = portada
        this.artista = artista
        this.autor = autor
    }
    //ejemplo get
    // get nombre()
    // {
    //     return this.nombre
    // }

    set nombreT(name){
        this.nombre = name
    }
    //metodo
    cancionInfo()
    {
        return `${this.nombre} ${this.album} ${this.duracion}`
    }



}

class Album{
    constructor(nombre, autor, fecha, portada, canciones ){
        this.nombre = nombre
        this.autor = autor
        this.fecha = fecha
        this.portada = portada
        this.canciones = canciones
        
    }

    mostrarCanciones(){
        return this.canciones
    }
}


//Creo mis objetos

let cancion = new Cancion("Rosa Pastel", "Pastel", "2:05", "https://depor.com/resizer/4DI1nzCoRXf__O_0JSlVGNjkXUQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/F6BILIODFJBRNKSVTI3JNSYMGI.jpg", "Belanova", "Sandra")
let cancion2 = new Cancion("Cualquier forma de amor", "CLAXONS", "3:05", "imagen", "Los Claxons", "LC")
let cancion3 = new Cancion("El Rey", "Más Con El Número Uno", "3:08" , "el-rey.jpg", "José Alfredo Jiménez", "José Alfredo Jiménez")

const cancionElRey = {
    nombre: 'El Rey',
    album: 'Más Con El Número Uno',
    duracion: '3:08',
    imagen: 'el-rey.jpg',
    artista: 'José Alfredo Jiménez',
    autor: 'José Alfredo Jiménez'
  };
let playList = [cancion, cancion2, cancion3]

function mostrarCanciones(){
    let divCanciones = document.getElementById('ListarCanciones')

    // for (let i=0; i<playList.length; i++ ){
    //     //crear etiquetas HTML
    //     let span = document.createElement('span') //Creo una etiqueta HTML
    //     span.textContent = playList[i].cancionInfo() //Le asigno un valor a la etiqueta

    //     let portada = document.createElement('img')
    //     portada.setAttribute('src', playList[i].portada)


    //     divCanciones.appendChild(portada) //Creo un hijo a mi etiqueta contenedora
    //     divCanciones.appendChild(span) // Creo un hijo a mi etiqueta contenedora
    // }

    //con forEach
    playList.forEach(cancion => {
        let span = document.createElement('span') //Creo una etiqueta HTML
        span.textContent = cancion.nombre //Le asigno un valor directamnte

        let portada = document.createElement('img')
        portada.setAttribute('src', cancion.portada)


        divCanciones.appendChild(portada) //Creo un hijo a mi etiqueta contenedora
        divCanciones.appendChild(span) // Creo un hijo a mi etiqueta contenedora
        
    });
}

// function agregarCancion(){
//     let nuevaCancion = new Cancion("Master of Poppets", "Master", "6:05", "https://depor.com/resizer/4DI1nzCoRXf__O_0JSlVGNjkXUQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/F6BILIODFJBRNKSVTI3JNSYMGI.jpg", "Belanova", "Sandra")
//     playList.push(nuevaCancion)
//     console.log(playList)
// }

function agregarCancion(){
    //let nuevaCancion = new Cancion("Master of Poppets", "Master", "6:05", "https://depor.com/resizer/4DI1nzCoRXf__O_0JSlVGNjkXUQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/F6BILIODFJBRNKSVTI3JNSYMGI.jpg", "Belanova", "Sandra")
    let nombre = document.getElementById('nombre').value
    let album = document.getElementById('album').value
    
    nuevaCancion = new Cancion(nombre, album, "6:05", "https://depor.com/resizer/4DI1nzCoRXf__O_0JSlVGNjkXUQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/F6BILIODFJBRNKSVTI3JNSYMGI.jpg", "Belanova", "Sandra")
    playList.push(nuevaCancion)
    console.log(playList)
}

