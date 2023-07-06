num1 = Number(prompt('Digite o primeiro número: '))
num2 = Number(prompt('Digite o segundo número: '))

alert('Soma ' + (num1 + num2))
alert('Subtração ' + (num1 - num2))
alert('Divisão ' + (num1 / num2))
alert('Multiplicação ' + (num1 * num2))
if (num1 % num2 == 0){
    alert('São pares')
} else{
    alert('São impares')
}

if (num1 === num2){
    alert('São iguais')
} else {
    alert('São diferentes')
}