let cuadrados = document.querySelectorAll('.cuadrados')
let btnReinicio = document.querySelector('#reiniciar')
let mensaje = document.querySelector('#mensaje')
let mensajeReinicio = document.querySelector('#mensajeReinicio')
let ganaste = document.querySelector('#colorDisplay')


let coloresAleatoreos = [generarRgb(),generarRgb(),generarRgb(),generarRgb(),generarRgb(),generarRgb(),]
let colorGanador = coloresAleatoreos[generarNumeroAleatorio()]

mensaje.innerText = colorGanador



btnReinicio.addEventListener('click', () => {
  coloresAleatoreos = [generarRgb(),generarRgb(),generarRgb(),generarRgb(),generarRgb(),generarRgb(),]
  colorGanador = coloresAleatoreos[generarNumeroAleatorio()]
  mensaje.innerText = colorGanador
  mensajeReinicio.innerText = ''
 reiniciar()

 
})




  function generarRgb(){
    let r = Math.floor(Math.random() * 255 + 1)
    let g = Math.floor(Math.random() * 255 + 1)
    let b = Math.floor(Math.random() * 255 + 1)
  
    return `rgb(${r}, ${g}, ${b})`
  }
  
  
  function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 6)
  }
  



function reiniciar() {

    for (let i = 0; i < cuadrados.length; i++){
      cuadrados[i].style.backgroundColor = coloresAleatoreos[i]
   
     cuadrados[i].addEventListener('click', () => {
       
   
       if (cuadrados[i].style.backgroundColor === colorGanador) {
         mensaje.innerText = 'Ganaste!!'

       
         
         mensajeReinicio.innerText = 'Toca Reiniciar para jugar de vuelta'

         for (let i = 0; i < cuadrados.length; i++){
         cuadrados[i].style.backgroundColor = colorGanador
         }
      
       } else {
         let nuevoColor = '#' + 232323
         cuadrados[i].style.backgroundColor = nuevoColor
       }
  
     })
   }
}
  
reiniciar()




