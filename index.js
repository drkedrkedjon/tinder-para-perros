import { dogs } from './data.js'
import { Perros } from './Dog.js'

const contenido = document.querySelector('#contenido')
// Generamos array con objetos perros a base ca la class Perros
let perrosArray = dogs.map(dog => new Perros(dog))

// Siguiente perro
export function siguientePerro() {
  let indice = perrosArray.findIndex(perro => perro.hasBeenSwiped === false)
  // Condicion que resetea la app cuando todos los perros estan evaulados
  if (indice >= 0) {
    perrosArray[indice].generarHTML()
  } else {
    perrosArray.forEach(perro => perro.hasBeenSwiped = false)
    perrosArray[0].generarHTML()
  }
}

siguientePerro()

