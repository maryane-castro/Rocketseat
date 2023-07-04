//function contrutora

function Person(name, idade){
    this.name = name
    this.idade = idade
    this.andando = function(){
        return this.name + " está andando"
    }
}

//parece python
const mayk = new Person("mayk")
const joao = new Person("joao")

console.log(mayk.andando())
console.log(joao)


// callback function


// function sayMyName(name){
//     console.log(name)
// }


// sayMyName(
//     () => {
//         console.log('esstou em uma callback')
//     }
// )