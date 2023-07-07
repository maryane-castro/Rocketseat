const numeroaleatorio = Math.round(Math.random() * 2)
let aux = 1

function trocarTela(event){
    event.preventDefault();

    const input = document.querySelector("#input");
    console.log(aux)

    if (Number(input.value) == numeroaleatorio){
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")

        document.querySelector(".screen2 h2").innerText = `Acertou em ${aux} tentativas`
    }

    aux++

}

function voltar(){
    document.querySelector(".screen1").classList.remove("hide")
    document.querySelector(".screen2").classList.add("hide")
}
let result = document.querySelector("#input");