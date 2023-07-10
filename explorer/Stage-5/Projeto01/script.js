
const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")
let numeroaleatorio = Math.round(Math.random() * 2) /*0, 1, 2*/ 
let aux = 1
// document.querySelector(".screen1").addEventListener("keydown", function(e) {
//     console.log(e.key)
//     if(e.key == 'Enter' && document.querySelector(".screen1").classList.contains('hide')){
//         voltar()
//     }
// })


function trocarTela(event){
    event.preventDefault();
    const input = document.querySelector("#input");
    console.log(aux)
    if (Number(input.value) == numeroaleatorio){
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")

        document.querySelector(".screen2 h2").innerText = `Acertou em ${aux} tentativas`
    }
    input.value = ""
    aux++
}

function voltar(){
    document.querySelector(".screen1").classList.remove("hide")
    document.querySelector(".screen2").classList.add("hide")
    numeroaleatorio = Math.round(Math.random() * 2)
    aux = 1
}



btnTry.addEventListener('click', trocarTela)
btnAgain.addEventListener('click', voltar)