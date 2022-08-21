import {dogs} from './data.js'
const contenido = document.querySelector('#contenido')

class Perros {
  constructor(perro) {
    Object.assign(this, perro)
  }
  
  generarHTML() {
    contenido.innerHTML = `
      <img class="imagen" src="${this.avatar}" alt="Perro blanco mirando">
      <img id="nope" class="sello" src="images/badge-nope.png" alt="No me gusta">
      <img id="like" class="sello" src="images/badge-like.png" alt="Me gusta">
      <div class="metadata">
        <h2><span>${this.name}</span>, <span>${this.age}</span></h2>
      <p>${this.bio}</p>
      </div>
      <div class="footer">
        <button id="btn-nope" class="btn"><img src="images/icon-cross.png" alt="Cross"></button>
        <button id="btn-like" class="btn"><img src="images/icon-heart.png" alt="Hart"></button>
      </div>
    `
    this.generarEventos()
  }

  generarEventos() {
    document.querySelector('#btn-nope').addEventListener('click', this.nope)
    document.querySelector('#btn-like').addEventListener('click', this.like)
  }

  nope() {
    document.querySelector('#nope').style.display = 'block'
    document.querySelector('#like').style.display = 'none'
    this.hasBeenSwiped = true
    this.hasBeenLiked = false
    console.log(perrosArray[0].hasBeenSwiped)
    console.log(this.hasBeenSwiped)
  }

  like() {
    document.querySelector('#nope').style.display = 'none'
    document.querySelector('#like').style.display = 'block'
    this.hasBeenSwiped = true
    this.hasBeenLiked = true
  }
}

let perrosArray = dogs.map( dog => new Perros(dog) )

function siguientePerro() {
  let siguientePerro = perrosArray.findIndex( perro => perro.hasBeenSwiped === false )
  perrosArray[siguientePerro].generarHTML()
}
siguientePerro()

