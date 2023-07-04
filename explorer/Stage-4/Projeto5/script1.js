//if else
let temperatura = 37.4

if(temperatura >= 37.5){
    console.log('febre alta')
} else if (temperatura < 37.5 && temperatura >=37){
    console.log('febre moderada')
} else{
    console.log('ok')
}

let expression = 'a'

//switch
switch(expression){
    case 'a':
        console.log('a')
        break
    case 'b':
        console.log('b')
        break

    default:
        console.log('default')
        break
}

//MINI CALCULADORA
function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2 
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2 
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '+', 8))
