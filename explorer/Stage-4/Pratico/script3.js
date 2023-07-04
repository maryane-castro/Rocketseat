let nome = prompt('Digite seu nome: ')
let n1 = Number(prompt('Digite sua primeira nota: '))
let n2 = Number(prompt('Digite sua segunda nota: '))
let n3 = Number(prompt('Digite sua terceira nota: '))

const media = (n1 + n2 + n3) / 3
let resultado = media >= 6  //aqui usa true ou false

if (media >= 6){
    alert('Você passou')
} else if (media < 6){
    alert('Você reprovou!')
}

if (resultado){
    alert('Você passou')
} else{
    alert('Você reprovou!')
}