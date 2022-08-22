import { siguientePerro } from "./index.js"
export class Perros {
  constructor(perro) {
    Object.assign(this, perro)
  }

  // Generamos codigo HTML y llamamos generador de eventos
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


  // Ayuda de Luis...
  /* El addEventListner internamente añade los datos del evento click en el this, sobrescribiendo todos los datos que ya tenia, por eso al hacer un this.hasBeenLiked no modificaba el valor en el array, porque perdio la referencia
  la solucion seria encapsular la funcion nope/like para evitar modificar el valor del this con los datos del evento en html
  addEventListener('click', this.nope)  ==>  addEventListener('click', () => this.nope())
  encapsulando puedes controlar mejor los datos que se les pasa a las funciones, si queremos añadir el evento a la funcion podremos hacerlo asi addEventListener('click', (event) => this.nope(event)*/


  // Generamos eventos en los botones
  generarEventos() {
    document.querySelector('#btn-nope').addEventListener('click', () => this.nope())
    document.querySelector('#btn-like').addEventListener('click', () => this.like())
  }
  // SI el perro no nos gusta
  nope() {
    document.querySelector('#nope').style.display = 'block'
    document.querySelector('#like').style.display = 'none'
    this.hasBeenSwiped = true
    this.hasBeenLiked = false
    setTimeout(() => siguientePerro(), 500)
  }
  // Si me gusta
  like() {
    document.querySelector('#nope').style.display = 'none'
    document.querySelector('#like').style.display = 'block'
    this.hasBeenSwiped = true
    this.hasBeenLiked = true
    setTimeout(() => siguientePerro(), 500)
  }
}