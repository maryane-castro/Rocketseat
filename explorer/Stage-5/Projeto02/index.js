const img = document.querySelector("#img")
const button = document.querySelector('#button')
const lista = ['Linux', 'macOS', 'Windows']

img.addEventListener('click', trocar)
button.addEventListener('click', voltar)

function trocar(event){
    event.preventDefault()
    document.querySelector('.screen1').classList.toggle("hide")
    document.querySelector('.screen2').classList.toggle("hide")
    elemento = lista[Math.floor(Math.random() * lista.length)]
    document.querySelector(".screen2 p").innerText = `${elemento}`
}


function voltar(event){
    event.preventDefault()
    document.querySelector('.screen1').classList.toggle("hide")
    document.querySelector('.screen2').classList.toggle("hide")
}