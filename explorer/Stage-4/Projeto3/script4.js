//MANIPULANDO ARRAYS
//adicionando itens

//let myarray = ['a', 'b','c']
let myarray1 = new Array('a', 'b', 'c')
let myarray2 = new Array(10)  //array com posições vazias

//console.log(myarray1)

console.log(['a', 'b', 'c'])


console.log([
    'a', 
    {type: "array"},
    function() {
        return "alo"
    },
][2]())

let word = 'manipulação'
console.log(Array.from(word))



//adicionando itens

let techs = ['html', 'css', 'js']
techs.push('nodejs')  //final do array
techs.unshift('react') //inicio
console.log(techs)
techs.pop() //remove ultimo item do array
techs.shift() //remove primeiro item do array


console.log(techs.slice(1, 3)) //pegar apenas alguns elementos
//techs.splice(1, 2) //retira elementos do array
console.log(techs)

let index = techs.indexOf('css')
console.log(index)
techs.splice(index, 1)
console.log(techs)
