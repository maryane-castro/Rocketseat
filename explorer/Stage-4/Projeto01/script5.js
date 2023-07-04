let weight;

console.log(typeof weight);


let nome = 'nome'
let age = 15
let stars = 123.32
let isSubscribed = true

// object
let student = {
    nome : 'NomeDaPessoa',
    age : 15,
    stars : 123.32,
    isSubscribed : true
}
console.log(student)

console.log(`Nome: ${student.nome}, Idade: ${student.idade}, Inscrito: ${student.isSubscribed}`)


//array
let students = []


students = [
    student
]


console.log(students)

console.log(students[0])


const john ={
    nome: "john",
    age: 23,
    weight: 75.8,
    isSubscribed: true,
}


//assim 
students = [
    student,
    john
]

//ou assim
students[1] = john

console.log(students)


//extra
console.log(a)
var a = 1