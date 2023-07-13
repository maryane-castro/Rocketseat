import { Modal } from './modal.js'
import {IMC, notNumber} from './utils.js'
const form =  document.querySelector('form')
const inputPeso = document.querySelector('#peso')
const inputAltura = document.querySelector('#altura')


// const modalWrapper = document.querySelector(".modal-wrapper")
// const modalMessage = document.querySelector(".modal .title span")
// const btnClose =  document.querySelector(".modal .close")



//quando clicar no botão de submit vai se executado a função
form.onsubmit = function(event) {
    event.preventDefault()
    const peso = inputPeso.value
    const altura = inputAltura.value 
    const Alert = notNumber(peso) || notNumber(altura)

    if (Alert){
        Modal.erroAlert.classList.add('open')
        return
    }
    
    Modal.erroAlert.classList.remove('open')
    const result = IMC(peso, altura)
    const message = `Seu imc é de ${result}`
    Modal.message.innerHTML = message
    //modalWrapper.classList.add('open')
    Modal.open()
    
 
}

inputPeso.oninput = () => Modal.erroAlert.classList.remove('open')
inputAltura.oninput = () => Modal.erroAlert.classList.remove('open')


























// if (notNumber(peso) || notNumber(altura)){
//     Modal.erroAlert.classList.add('open')
// } else{
//     Modal.erroAlert.classList.remove('open')
//     const result = IMC(peso, altura)
//     const message = `Seu imc é de ${result}`
//     Modal.message.innerHTML = message
//     //modalWrapper.classList.add('open')
//     Modal.open()
// }